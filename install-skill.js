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

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function copyFile(src, dest) {
  if (fs.existsSync(src)) {
    ensureDir(path.dirname(dest));
    fs.copyFileSync(src, dest);
    return true;
  }
  return false;
}

function copyDir(src, dest, files) {
  if (!fs.existsSync(src)) return;
  ensureDir(dest);
  
  const items = fs.readdirSync(src);
  for (const item of items) {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    const stat = fs.statSync(srcPath);
    
    if (stat.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function installToPlatform(platformName, globalPath, projectPath) {
  const isGlobal = !process.env.PWD || process.env.PWD === getHomeDir() || !fs.existsSync(path.join(process.cwd(), 'package.json'));
  
  let targetDir;
  if (isGlobal) {
    targetDir = globalPath.replace('~', getHomeDir());
  } else {
    targetDir = path.join(getProjectRoot(), projectPath);
  }
  
  const skillDir = path.join(targetDir, skillName);
  
  console.log(`Installing to ${platformName} (${isGlobal ? 'global' : 'project'}): ${skillDir}`);
  
  try {
    ensureDir(skillDir);
    
    const files = config.files || ['SKILL.md', 'references/', 'examples/'];
    
    for (const file of files) {
      const srcPath = path.join(packageDir, file);
      const destPath = path.join(skillDir, file);
      
      if (fs.existsSync(srcPath)) {
        const stat = fs.statSync(srcPath);
        if (stat.isDirectory()) {
          copyDir(srcPath, destPath);
        } else {
          copyFile(srcPath, destPath);
        }
      }
    }
    
    console.log(`✓ ${platformName}: Installed successfully`);
  } catch (error) {
    console.error(`✗ ${platformName}: Failed to install - ${error.message}`);
  }
}

console.log(`\n📦 Installing skill: ${skillName}\n`);

const platformsToInstall = ['claude-code', 'opencode', 'codex', 'gemini-cli', 'cursor', 'windsurf'];

for (const platform of platformsToInstall) {
  if (platforms[platform]) {
    const platformConfig = platforms[platform];
    if (platformConfig.global) {
      installToPlatform(platform, platformConfig.global, platformConfig.project);
    }
  }
}

console.log(`\n✅ Skill "${skillName}" installed successfully!\n`);
console.log(`Usage: "Use the ${skillName} skill" in your AI assistant\n`);
