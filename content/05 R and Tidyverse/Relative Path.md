---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "A relative path gives a file's address starting from the working directory, so it stays valid when the whole project folder moves."
aliases:
  - "Project-relative path"
status: seedling
---

# Relative Path

Directions that start "from the lobby of this building, second floor, third door" still work if you carry the building to another city. A **relative path** gives a file's address starting from the [[Working Directory]], such as `data/birds.csv`; `..` means "up one folder", as in `../shared/data.csv`. It contains nothing about your computer, unlike an [[Absolute Path]].

It works for anyone whose "here" is the project folder, and that condition is what an [[RProject]] and [[here()]] guarantee. So a project folder plus relative paths gives portable code. The code below builds a small project in a temporary folder, moves into it as if the project had been opened, reads `data/birds.csv` by its relative path, and shows the absolute path R resolved it to.

Relative paths are safe only if the working directory is the project root. Knitting an R Markdown file in a subfolder changes the working directory to that subfolder, which is the case `here()` was made for.

```r
proj <- file.path(tempdir(), "proj"); dir.create(file.path(proj, "data"), recursive = TRUE, showWarnings = FALSE)
write.csv(data.frame(x = 1), file.path(proj, "data", "birds.csv"), row.names = FALSE)
old <- setwd(proj)                  # pretend we opened the project
read.csv("data/birds.csv")          # relative: works wherever proj lives
normalizePath("data/birds.csv")     # the absolute path R resolved it to
setwd(old)
```

## Connections
- **Builds on:** [[Working Directory]], [[Absolute Path]]
- **Leads to:** [[RProject]], [[here()]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - Reproducible Coding and Figures]], molecular note [[Relative vs Absolute Paths]]

## Flashcards

What is a relative path?
??
A file address that starts from the working directory, such as data/birds.csv.
++++

What makes relative paths portable?
??
They contain nothing specific to one computer, so they work wherever the project folder is placed.
++++
