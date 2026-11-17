---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "sessionInfo()"
  - "Package versions"
  - "renv"
status: seedling
---

# Session Info

**In one line:** session info is a printed record of the R version, operating system and package versions that produced an analysis.

> [!info] Before this, it helps to know
> [[Packages in R]] (which change over time) · [[Reproducibility]] (the purpose)

## The everyday picture
The batch number on a medicine bottle. If something turns out different next year, the first question is "same batch?". Package versions are the batch numbers of your analysis.

## Start from zero
1. **Packages update, and defaults and algorithms change.**
2. **The same code can then give different numbers.**
3. **`sessionInfo()` lists what was loaded and its versions.**
4. **Put it at the end of your report.**
5. **Cite R and key packages in the methods** with `citation()`.
6. **`renv` goes further,** saving and restoring an exact package library per project.

## In R
```r
R.version.string
packageVersion("stats")
si <- sessionInfo(); si$R.version$version.string; names(si$otherPkgs)
citation()$title
```

## Common confusions
- **"Same code, same result, forever."** Only with the same versions.

## Explain it back
- Why might a script give different results two years later?

*Pass test:* you can add version information to a report and cite a package.

## Connections
- **Builds on:** [[Packages in R]], [[Reproducibility]]
- **Leads to:** [[Writing Methods Sections]], [[CRAN]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - Reproducible Coding and Figures]]

## Flashcards

What does sessionInfo() report?
??
The R version, operating system and versions of loaded packages.
++++

Why record package versions?
??
Updates can change defaults and algorithms, so results may differ across versions.
++++
