---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "R script"
  - ".R file"
status: seedling
---

# Script

**In one line:** a script is a plain text file of R commands, saved so the whole analysis can be rerun from top to bottom.

> [!info] Before this, it helps to know
> [[Console]] (where commands run) · [[R and RStudio]] (the editor)

## The everyday picture
A written recipe. Cooking from memory works once. A recipe on paper lets you, or anyone, make the same dish next month. A script is the recipe for an analysis.

## Start from zero
1. **Create a file ending in `.R`.**
2. **Write commands in the order they must run.**
3. **Add comments with `#`.** R ignores everything after it on that line. Comments say why, not what.
4. **Run lines with Ctrl + Enter,** or the whole file with Source.
5. **The test of a good script:** restart R, run it top to bottom, and get the same results. *Why:* that proves it depends on nothing hidden in your session.

## In R
```r
# 01_explore.R : first look at the bird data          <- a header comment
birds <- c(9, 8, 6, 5, 3)      # species per plot
mean(birds)                    # 6.2
# Comments explain WHY: plots with no survey were dropped beforehand
```

## In the course
The syllabus requires submitted code to run start to finish ([[Final Project]]). The reproducibility sessions split work into several scripts ([[Splitting Scripts]]).

## Common confusions
- **"It ran for me, so the script works."** It may rely on objects you made by hand in the console. Restart and rerun to be sure.
- **"Comments are optional."** In three months you are a stranger to your own code.

## Explain it back
- What is the restart-and-rerun test?
- What should a comment explain?

*Pass test:* you can write, comment and rerun a short script.

## Connections
- **Builds on:** [[Console]]
- **Leads to:** [[R Markdown]], [[Splitting Scripts]], [[Reproducibility]]
- **Part of:** [[MOC - R for Ecological Modeling]], molecular note [[Console vs Script]]

## Flashcards

What is an R script?
??
A saved text file of R commands that can be rerun from top to bottom.
++++

How do you check a script is self-contained?
??
Restart R and run it from the top. It must work with an empty environment.
++++

What does # do in R?
??
It starts a comment. R ignores the rest of the line.
++++
