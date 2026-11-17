---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "Chunk"
  - "Chunk options"
  - "echo, eval, include"
status: seedling
---

# Code Chunks

**In one line:** a code chunk is a fenced block of R code inside an R Markdown file, with options that control whether the code runs and what appears in the report.

> [!info] Before this, it helps to know
> [[R Markdown]] (the file it lives in)

## The everyday picture
Windows in a wall of text. Each window shows a piece of the machinery. Shutters (the options) decide whether readers see the code, the output, both or neither.

## Start from zero
1. **A chunk starts with ```` ```{r name, options} ```` and ends with ```` ``` ````.**
2. **Name chunks.** Error messages then say where knitting failed.
3. **Key options:**
   - `echo = FALSE` hides the code, shows output.
   - `eval = FALSE` shows code, doesn't run it.
   - `include = FALSE` runs it, shows nothing (good for setup).
   - `message = FALSE`, `warning = FALSE` hide chatter.
   - `fig.width`, `fig.height`, `fig.cap` control figures.
   - `cache = TRUE` saves results so slow chunks aren't rerun.
4. **Set defaults once** in a setup chunk with `knitr::opts_chunk$set(...)`.
5. **Chunks share one session, in order.** *So:* a chunk can use objects from chunks above it, never below.

## Common confusions
- **"warning = FALSE fixes warnings."** It hides them. Read them first.
- **"cache = TRUE is always safe."** A cached chunk won't notice that upstream data changed.

## Explain it back
- Which option hides code but keeps the figure?
- Why name your chunks?

*Pass test:* you can choose options for a setup chunk, a figure chunk and a slow model chunk.

## Connections
- **Builds on:** [[R Markdown]]
- **Leads to:** [[Knitting]], [[Caching Long Runs]]
- **Part of:** [[MOC - R for Ecological Modeling]]

## Flashcards

What does echo = FALSE do in a chunk?
??
Hides the code but still runs it and shows its output.
++++

What does eval = FALSE do?
??
Shows the code without running it.
++++

What does include = FALSE do?
??
Runs the code but shows neither code nor output.
++++
