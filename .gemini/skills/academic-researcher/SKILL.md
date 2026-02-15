---
name: academic-researcher
description: Expert-level academic research and LaTeX paper writing with IEEE/APA citation support. Creates peer-reviewed research papers, literature reviews, and theses with proper scholarly standards.
license: MIT
compatibility: opencode, claude-code, gemini-cli, codex
metadata:
  audience: researchers, academics, graduate-students
  workflow: research-paper-writing
  fields: computer-science, stem, social-sciences, humanities
---

## What I Do

I help you create expert-level academic research documents with:
- Peer-reviewed source discovery and verification
- Proper IMRaD structure and academic writing conventions
- IEEE (primary) and APA (secondary) citation formats
- LaTeX output for professional mathematical typesetting
- Quality assurance against scholarly standards

## When to Use Me

Use this skill when you need to write:
- **Research papers** for conferences (IEEE, ACM) or journals
- **Literature reviews** and survey papers
- **Theses/dissertations** (master's or PhD)
- **Research proposals** and grant applications
- **Technical reports** with academic rigor

## Workflow Overview

```
Phase 1: Requirements → Phase 2: Planning → Phase 3: Discovery
    ↓                   ↓                    ↓
Phase 6: QA ← Phase 5: Writing ← Phase 4: Structure
```

---

## Phase 1: Requirements Clarification

Before starting, clarify with the user:

### Essential Questions

1. **Document Type**
   - Research paper (conference/journal)?
   - Literature review / survey?
   - Thesis / dissertation chapter?
   - Research proposal?

2. **Topic & Scope**
   - What is the main research question or contribution?
   - What is the target word count or page limit?
   - Any specific research questions to address?

3. **Target Venue**
   - Which conference or journal?
   - Any specific formatting requirements?
   - Submission deadline?

4. **Citation Format**
   - IEEE (default for CS/Engineering)?
   - APA (social sciences)?
   - Other (ACM, Chicago)?

### User Input Template

```markdown
## Research Document Request

**Type:** [Research Paper / Literature Review / Thesis]
**Topic:** [Your research topic]
**Target:** [Conference/Journal name or "General"]
**Length:** [X pages or X words]
**Citation:** [IEEE / APA / Other]
**Deadline:** [Date if applicable]
**Special Requirements:** [Any specific guidelines]
```

---

## Phase 2: Research Planning

### Search Strategy Development

1. **Identify core concepts** - Extract key terms from the topic
2. **Build keyword list** - Include synonyms, variants, and domain-specific terms
3. **Select databases** - Choose appropriate sources:

| Database | Best For |
|----------|----------|
| Google Scholar | Broad academic search |
| IEEE Xplore | Engineering, CS |
| ACM Digital Library | Computing |
| arXiv | Preprints, CS, physics |
| PubMed | Medicine, life sciences |
| ScienceDirect | General science |
| JSTOR | Humanities, social sciences |

### Search Command Pattern

Use the platform's web search with these strategies:

```
# Broad search first
web_search "broad topic research"

# Specific with time filter
web_search "specific topic 2023..2025"

# Exact phrase
web_search "\"exact phrase\" research"

# Combine terms
web_search "term1 AND term2 OR term3"
```

---

## Phase 3: Source Discovery & Verification

### Discovery Process

**Step 1: Foundational Sources**
- Search for seminal papers and foundational work
- Look for highly-cited papers (100+ citations)
- Find survey papers on the topic

**Step 2: Recent Work**
- Search for papers from last 2-3 years
- Look for "state of the art" reviews
- Find latest developments and advances

**Step 3: Related Work**
- Papers citing key foundational works
- Papers cited by recent major papers
- Parallel approaches and alternatives

### Verification Checklist

For each source, verify:

- [ ] Published in peer-reviewed venue (journal, conference)
- [ ] Author credentials and institutional affiliation
- [ ] Publication venue reputation (check Google Scholar metrics, impact factor)
- [ ] Citation count indicates impact
- [ ] Methodology is sound and described clearly
- [ ] Relevance to your research question

### Red Flags (Exclude These Sources)

- Predatory journals (check Beall's List or journalquality.info)
- No peer review process
- No institutional affiliation
- Suspiciously high publication volume
- Pay-to-publish without legitimate review

### Source Tracking

Create a source database:

```markdown
## Source [N]
- **Title:** [Paper title]
- **Authors:** [Author list]
- **Venue:** [Journal/Conference, Year]
- **Citations:** [Count]
- **URL:** [Link]
- **Relevance:** [High/Medium/Low]
- **Key Points:** [Summary]
- **For:** [Which section of paper]
```

---

## Phase 4: Document Structure

### Research Paper Structure (IMRaD)

```
1. Title
2. Abstract (150-250 words)
3. Keywords (5-7 terms)
4. Introduction
   - Background and motivation
   - Problem statement
   - Research objectives
   - Contributions (3-5 bullet points)
   - Paper organization
5. Related Work / Literature Review
   - Thematic organization
   - Gap identification
6. Methodology / Approach
   - System design (if applicable)
   - Algorithm description
   - Technical approach
7. Results / Evaluation
   - Experimental setup
   - Metrics
   - Results presentation
8. Discussion
   - Interpretation
   - Implications
   - Limitations
9. Conclusion
   - Summary
   - Future work
10. References
```

### Literature Review Structure

```
1. Title
2. Abstract
3. Introduction
   - Review scope and objectives
   - Methodology (how sources were selected)
4. Thematic Sections (organized by themes)
5. Synthesis and Discussion
   - Trends and patterns
   - Gaps in literature
6. Conclusion
   - Summary
   - Future directions
7. References
```

### Thesis Structure

```
1. Abstract
2. Introduction
   - Background
   - Problem statement
   - Research questions
   - Thesis objectives
   - Contributions
3. Literature Review
   - Theoretical framework
   - Related work
   - Research gap
4. Methodology
   - Research design
   - Data collection
   - Analysis methods
5. Results/Findings
6. Discussion
7. Conclusion
8. References
9. Appendices
```

---

## Phase 5: Writing & LaTeX

### LaTeX Document Setup

For research papers, use this basic structure:

```latex
\documentclass[conference]{IEEEtran}
\usepackage{amsmath}
\usepackage{amssymb}
\usepackage{graphicx}
\usepackage[caption=false,font=normalsize]{subfig}

\title{Your Paper Title}
\author{Author Name$^{1\ast}$, Co-Author$^{2$}
\thanks{$^{\ast}$Corresponding author: email@example.edu}
\thanks{$^{1}$Department, University Name}
\thanks$^{2}$Department, University Name}}

\begin{document}
\maketitle

\begin{abstract}
Your abstract goes here (150-250 words).
\end abstract}

\begin{IEEEkeywords}
keyword1, keyword2, keyword3, keyword4, keyword5
\end{IEEEkeywords}

\section{Introduction}
...

\section{Related Work}
...

\section{Methodology}
...

\section{Results}
...

\section{Discussion}
...

\section{Conclusion}
...

\section*{References}
\end{document}
```

### Academic Writing Style

**Tone:**
- Formal and objective
- Third person (avoid "I" or "we" unless describing your contributions)
- Precise technical terminology
- Present tense for established facts, past tense for specific studies

**Avoid:**
- Colloquial language
- Unsupported claims
- Excessive quotations (paraphrase instead)
- Vague terms ("very", "significant") without data

### Citation Integration

**IEEE Style (numbered):**
```latex
Recent work has shown this approach is effective \cite{smith2023}.
Multiple studies support this finding \cite{smith2023, jones2022, doe2021}.
```

**APA Style (author-date):**
```latex
Recent work has shown this approach is effective (Smith, 2023).
Multiple studies support this finding (Smith, 2023; Jones, 2022).
```

### Mathematical Typesetting

**Inline math:** `$E = mc^2$`

**Displayed equations:**
```latex
\begin{equation}
f(x) = \sum_{i=1}^{n} a_i x^i
\end{equation}
```

**Multi-line equations:**
```latex
\begin{align}
a &= b + c \\
  &= d + e + f
\end{align}
```

**Matrices:**
```latex
\begin{bmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22}
\end{bmatrix}
```

**Proofs:**
```latex
\begin{Proof}
Let $x$ be any element...
Therefore, we conclude...
\end{Proof}
```

See `references/latex-math-guide.md` for more examples.

---

## Phase 6: Quality Assurance

### Pre-Submission Checklist

**Content:**
- [ ] Clear research question/objective
- [ ] Logical flow and organization
- [ ] Minimum 15-20 sources for full paper
- [ ] All sources verified as peer-reviewed
- [ ] All claims supported by citations
- [ ] Methodology clearly explained
- [ ] Results clearly presented with metrics
- [ ] Limitations acknowledged
- [ ] Contributions clearly stated

**Technical (IEEE):**
- [ ] Reference format correct
- [ ] All citations match reference list
- [ ] No missing references
- [ ] Consistent citation numbering
- [ ] Figure/table captions complete
- [ ] Margins match venue requirements

**Writing Quality:**
- [ ] Academic tone maintained
- [ ] No grammatical errors
- [ ] Smooth transitions
- [ ] Abstract matches content
- [ ] Keywords present

---

## Citation Formats

### IEEE Format

**Journal Article:**
```latex
[1] A. Author, B. Author, and C. Author, "Title of article," Journal Name, vol. X, no. Y, pp. ZZ-ZZ, Month Year.
```

**Conference Paper:**
```latex
[2] A. Author and B. Author, "Title of paper," in Proc. Conference Name, City, Country, Year, pp. ZZ-ZZ.
```

**Book:**
```latex
[3] A. Author, Title of Book, Edition. City, State: Publisher, Year.
```

See `references/ieee-citation-guide.md` for complete reference.

### APA Format (7th Edition)

**Journal Article:**
```latex
Author, A. A., & Author, B. B. (Year). Title of article. Journal Name, Volume(Issue), pages. https://doi.org/xxxxx
```

**Conference Paper:**
```latex
Author, A. A., & Author, B. B. (Year, Month). Title of paper. In Conference Name (pp. pages). Publisher.
```

See `references/apa-citation-guide.md` for complete reference.

---

## Output

### Primary Output: LaTeX Source

I generate `.tex` files that you can compile with:
- **Overleaf** (online, recommended)
- **Local LaTeX**: TinyTeX, MacTeX, TeX Live
- **VS Code**: LaTeX Workshop extension

### Compilation Commands

```bash
# With pdflatex
pdflatex paper.tex
bibtex paper
pdflatex paper.tex
pdflatex paper.tex

# With XeLaTeX (for better font support)
xelatex paper.tex
```

### Alternative Outputs

If LaTeX is not suitable, I can also generate:
- **Markdown** with MathJax support
- **DOCX** via Pandoc conversion

---

## Important Notes

- **Quality over quantity** - Fewer well-chosen sources are better than many weak ones
- **Recent sources preferred** - Last 5-7 years unless historical context needed
- **Research integrity** - Always cite properly, never plagiarize
- **Be honest about limitations** - Acknowledge gaps in your research
- **User provides content** - I structure and write; you provide the research contributions

---

## References

- `references/ieee-citation-guide.md` - Complete IEEE reference examples
- `references/apa-citation-guide.md` - Complete APA reference examples
- `references/latex-math-guide.md` - LaTeX math typesetting examples
- `references/templates/` - Paper and thesis templates
- `examples/vocabulary-template.md` - Research vocabulary template
