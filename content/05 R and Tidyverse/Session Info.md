---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "Session info is a printed record of the R version, operating system and package versions that produced an analysis."
aliases:
  - "sessionInfo()"
  - "Package versions"
  - "renv"
status: seedling
---

# Session Info

The batch number on a medicine bottle is the first thing checked if something turns out different next year. **Session info** is the batch number of an analysis: a printed record of the R version, operating system and package versions that produced it. Packages update, and their defaults and algorithms change, so the same code can give different numbers later ([[Packages in R]]). `sessionInfo()` lists what was loaded and its versions; put it at the end of your report.

The code below prints the R version string, the version of the stats package, the names of loaded add-on packages, and the title of R's own citation. Cite R and the key packages in your methods with `citation()` ([[Writing Methods Sections]], [[CRAN]]).

`renv` goes further, saving and restoring an exact package library per project. "Same code, same result, forever" holds only with the same versions, which is why session info is part of [[Reproducibility]].

```r
R.version.string
packageVersion("stats")
si <- sessionInfo(); si$R.version$version.string; names(si$otherPkgs)
citation()$title
```

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
