#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const packageDir = __dirname;
const configPath = path.join(packageDir, '.claude-skill.json');

let config;
try {
  config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
} catch (e) {
  console.error('Failed to load .claude-skill.json:', e.message);
  process.exit(1);
}

const skillName = config.name;
const platforms = config.platforms || {};

function getHomeDir() {
  return os.homedir();
}

function getProjectRoot() {
  let current = process.cwd();
  while (current !== path.parse(current).root) {
    if (fs.existsSync(path.join(current, '.git'))) {
      return current;
    }
    current = path.dirname(current);
  }
  return process.cwd();
}

function removeDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
    return true;
  }
  return false;
}

function uninstallFromPlatform(platformName, globalPath, projectPath) {
  const isGlobal = !process.env.PWD || process.env.PWD === getHomeDir() || !fs.existsSync(path.join(process.cwd(), 'package.json'));
  
  let targetDir;
  if (isGlobal) {
    targetDir = globalPath.replace('~', getHomeDir());
  } else {
    targetDir = path.join(getProjectRoot(), projectPath);
  }
  
  const skillDir = path.join(targetDir, skillName);
  
  console.log(`Uninstalling from ${platformName} (${isGlobal ? 'global' : 'project'}): ${skillDir}`);
  
  try {
    if (removeDir(skillDir)) {
      console.log(`✓ ${platformName}: Uninstalled successfully`);
    } else {
      console.log(`○ ${platformName}: Skill not found, skipping`);
    }
  } catch (error) {
    console.error(`✗ ${platformName}: Failed to uninstall - ${error.message}`);
  }
}

console.log(`\n🗑️  Uninstalling skill: ${skillName}\n`);

const platformsToUninstall = ['claude-code', 'opencode', 'codex', 'gemini-cli', 'cursor', 'windsurf'];

for (const platform of platformsToUninstall) {
  if (platforms[platform]) {
    const platformConfig = platforms[platform];
    if (platformConfig.global) {
      uninstallFromPlatform(platform, platformConfig.global, platformConfig.project);
    }
  }
}

console.log(`\n✅ Skill "${skillName}" uninstalled successfully!\n`);
