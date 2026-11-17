---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "`shelf()` from the librarian package installs any missing packages and loads them all in one line."
aliases:
  - "shelf()"
  - "librarian package"
status: seedling
---

# librarian shelf()

Imagine a lending library that orders any book it does not have and then hands you the whole stack: you give one list and never check the shelves first. **`shelf()`**, from the librarian package, works that way for R packages. Given a list of package names, it installs any that are missing and then loads them all, in one line ([[Packages in R]]). Names are written without quotes, and packages hosted on GitHub work too, written as `user/repo`.

It solves a real problem. A script that starts with `library(lme4)` fails on any computer where lme4 is not installed, so a script that runs perfectly for you may crash for a classmate or the instructor. With `shelf()` at the top, everyone's script starts the same way and runs on any machine, which is why the course requires it in every submitted script ([[Reproducibility]], [[Course Website]]). The code below shows the standard header: install librarian itself if needed, then `shelf(tidyverse, lme4, AICcmodavg, lib = tempdir())`.

The `lib = tempdir()` part sends installs to a temporary folder so they do not alter the grader's own package library. Because a temporary folder is wiped when R closes, packages are reinstalled next session, which is intended for grading and slow for daily work. `shelf()` replaces the block of `library()` calls at the top of a script and nothing else; packages still come from [[CRAN]] or GitHub as usual.

```r
# norun  (installs from the internet)
if (!require(librarian)) install.packages("librarian")
library(librarian)
shelf(tidyverse, lme4, AICcmodavg, lib = tempdir())   # the course's standard header
```

## Connections
- **Builds on:** [[Packages in R]]
- **Leads to:** [[Reproducibility]], [[CRAN]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What does shelf() from the librarian package do?
??
Installs any listed packages that are missing and loads all of them.
++++

Why does the course use shelf(..., lib = tempdir())?
??
So a script runs on any computer without changing that computer's permanent package library.
++++
