---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "A script is a plain text file of R commands, saved so the whole analysis can be rerun from top to bottom."
aliases:
  - "R script"
  - ".R file"
status: seedling
---

# Script

Cooking a dish from memory works once. A written recipe lets you, or anyone, make the same dish next month. An R **script** is the recipe for an analysis: a plain text file, ending in `.R`, holding the R commands in the order they must run, saved so the whole analysis can be rerun from top to bottom. You write it in RStudio's editor pane and send lines to the [[Console]] with Ctrl + Enter, or run the whole file with Source.

Comments make a script readable. Anything after a `#` on a line is ignored by R, so you can write notes for humans, as in the example below where the first line names the file and its purpose and the last line explains why some plots were dropped. Good comments say *why* something is done, because the code already says *what*. In three months you will be a stranger to your own code, and the comments are how you will find your way back.

The test of a good script is to restart R, so the environment is empty, and run it from top to bottom: it must produce the same results. A script that "ran for me" may secretly depend on objects you made by hand in the console, and only a clean restart exposes that. This is why the course requires submitted code to run start to finish ([[Final Project]]), why longer projects split work across several scripts ([[Splitting Scripts]]), and why scripts are the foundation of [[Reproducibility]]. Reports that weave code and text together build on the same idea ([[R Markdown]], [[Console vs Script]]).

```r
# 01_explore.R : first look at the bird data          <- a header comment
birds <- c(9, 8, 6, 5, 3)      # species per plot
mean(birds)                    # 6.2
# Comments explain WHY: plots with no survey were dropped beforehand
```

## Connections
- **Builds on:** [[Console]]
- **Leads to:** [[R Markdown]], [[Splitting Scripts]], [[Reproducibility]]
- **See also:** [[R and RStudio]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]], molecular note [[Console vs Script]]

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
