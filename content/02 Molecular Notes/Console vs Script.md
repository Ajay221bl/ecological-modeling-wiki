---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - r
aliases:
  - "Typing in the console vs saving a script"
  - "Console or script"
status: seedling
---

# Console vs Script

> [!summary] In plain words
> the console runs a line once and forgets it, while a script is a saved file of code you can rerun from top to bottom, so anything you will need again, or that someone else must reproduce, belongs in a script.

## The question
When should I type in the console and when in a script?

## Built from
- [[Console]] and [[Script]].
- [[Reproducibility]].
- [[R and RStudio]].

## The reasoning, step by step
1. **Console:** quick checks (`head(d)`, `?lm`, `str(fit)`). Nothing is saved except history.
2. **Script:** the analysis itself. Run lines with Ctrl or Cmd + Enter, the whole file with Source.
3. **Test: restart R and source the script.** If it runs top to bottom, it is reproducible; this is how homework is graded.
4. **Do not save the workspace** (.RData) on exit, so objects created only in the console cannot hide gaps in the script.

## So in practice
Write in the script, run from the script, and use the console only for questions you do not need to keep.

## What would go wrong otherwise
Cleaning data with console commands, then handing in a script that fails because those steps are missing.

## Explain it back
- What test shows a script is complete?

*Pass test:* you can explain why homework code must run from a fresh session.

## Connections
- **Related:** [[Why a reproducible project structure saves you]], [[Relative vs Absolute Paths]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - R for Ecological Modeling]], [[MOC - Reproducible Coding and Figures]]

## Flashcards

Console vs script?
??
Console: one-off commands, not saved. Script: saved code you rerun from top to bottom.
++++

How do you test that a script is reproducible?
??
Restart R and run it from top to bottom.
++++
