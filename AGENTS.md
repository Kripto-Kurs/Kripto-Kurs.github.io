# LLM Wiki Schema & Operating Guidelines

This repository follows the **LLM Wiki Pattern**: a persistent, compounding personal knowledge base curated by the user and maintained entirely by the LLM agent.

---

## 1. Core Architecture

The repository is structured into three primary layers:

1. **`raw/` (Immutable Sources)**:
   - User-provided articles, papers, transcripts, notes, web clips, PDFs, data.
   - **Rule**: The LLM reads from this directory but NEVER modifies or deletes files here.
   - `raw/assets/`: Local images and multimedia referenced by raw notes or wiki pages.

2. **`wiki/` (Persistent Knowledge Base)**:
   - Fully owned and maintained by the LLM.
   - Every file is a structured Markdown document using Obsidian-style `[[WikiLink]]` cross-references and YAML frontmatter.
   - Subdirectories:
     - `wiki/concepts/`: Fundamental principles, mechanisms, models, definitions.
     - `wiki/entities/`: Projects, protocols, tokens, individuals, organizations, tools.
     - `wiki/summaries/`: Structured breakdown of each ingested source.
     - `wiki/syntheses/`: Deep dives, thematic analyses, cross-cutting comparisons, evolving theses.

3. **Navigation & Tracking Layer**:
   - `index.md`: Content catalog categorized by topic/type. Updated on every ingest/edit.
   - `log.md`: Chronological append-only event log (`## [YYYY-MM-DD] action | Description`).
   - `AGENTS.md` (this file): Schema, conventions, and operational workflows.

---

## 2. Page Conventions & Obsidian Standards

Every page created in `wiki/` must follow these conventions:

### Frontmatter (YAML)

```yaml
---
title: Page Title
type: concept | entity | summary | synthesis
tags:
  - domain-tag
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources:
  - "[[raw-source-name]]"
aliases:
  - Alternative Name
---
```

### Content Guidelines

- **Obsidian Linking**: Use `[[Page Name]]` for internal wiki links. Avoid raw relative file paths in text.
- **Atomic & Connected**: Keep concept and entity pages modular but rich in cross-references.
- **Synthesis & Evidence**: Explicitly cite source pages (e.g., `Based on analysis in [[Summary - Source Title]]`).
- **Contradiction Management**: When new sources contradict earlier conclusions, do not delete the past record silently; document the discrepancy, note changes in consensus, and update the synthesis.

---

## 3. Standard Workflows

### A. Ingest Workflow (`ingest`)

When a new document is placed into `raw/` or provided in chat:
1. **Read & Extract**: Thoroughly read the raw source.
2. **Summarize**: Create a source summary file in `wiki/summaries/Summary - <Title>.md`.
3. **Cross-Link & Compound**:
   - Create or update relevant pages in `wiki/entities/` and `wiki/concepts/`.
   - Integrate new evidence, metrics, or insights into existing pages.
   - Add back-links and related links across touched files.
4. **Update Catalog**: Add newly created pages and update modified pages in `index.md`.
5. **Log Action**: Append an entry in `log.md` with format:
   `## [YYYY-MM-DD] ingest | <Source Title>`

### B. Query Workflow (`query`)

When answering questions about knowledge stored in the wiki:
1. Check `index.md` first to locate relevant concepts, entities, and summaries.
2. Read the specific wiki markdown files.
3. Formulate an answer referencing wiki entities and sources.
4. **Compound Insights**: If the query produces a novel comparison, architectural breakdown, or synthesis, file it as a new page in `wiki/syntheses/<Topic>.md`, update `index.md`, and log it.

### C. Lint & Maintenance Workflow (`lint`)

When requested to perform a health check or lint pass:
1. Check for orphaned pages (pages with zero inbound links).
2. Identify missing entity or concept pages that are frequently mentioned across documents.
3. Check for broken `[[WikiLink]]` targets.
4. Detect contradictory statements or outdated facts across pages.
5. Re-synchronize `index.md`.
6. Append findings and fixes to `log.md`.
