---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "Project-relative path"
status: seedling
---

# Relative Path

**In one line:** a relative path gives a file's address starting from the working directory, so it stays valid when the whole project folder moves.

> [!info] Before this, it helps to know
> [[Working Directory]] (the starting point) · [[Absolute Path]] (the fragile alternative)

## The everyday picture
Directions that start "from the lobby of this building": second floor, third door. Carry the building to another city and the directions still work.

## Start from zero
1. **It starts from "here":** `data/birds.csv`.
2. **`..` means "up one folder":** `../shared/data.csv`.
3. **It contains nothing about your computer.**
4. **It works for anyone whose "here" is the project folder.** *That condition is what RProjects and `here()` guarantee.*
5. **So: project folder + relative paths = portable code.**

## In R
```r
proj <- file.path(tempdir(), "proj"); dir.create(file.path(proj, "data"), recursive = TRUE, showWarnings = FALSE)
write.csv(data.frame(x = 1), file.path(proj, "data", "birds.csv"), row.names = FALSE)
old <- setwd(proj)                  # pretend we opened the project
read.csv("data/birds.csv")          # relative: works wherever proj lives
normalizePath("data/birds.csv")     # the absolute path R resolved it to
setwd(old)
```

## Common confusions
- **"Relative paths are always safe."** Only if the working directory is the project root. Knitting an Rmd in a subfolder changes it.

## Explain it back
- What does `../` mean?

*Pass test:* you can rewrite an absolute path as a relative one.

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
