---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "The librarian package's shelf() function installs any missing packages and loads them in one line, and the course asks for it so a homework script runs on the grader's computer without manual installs."
aliases:
  - "librarian"
  - "shelf()"
  - "Loading packages reproducibly"
  - "lib = tempdir()"
status: seedling
---

# librarian and shelf()

Handing someone a recipe that says "use the mixer" is no help if they do not own a mixer. A script that calls `library(vegan)` fails on any computer where vegan was never installed, and the person running it has to stop, install, and try again ([[Packages in R]]). The **librarian** package fixes this with one function: `shelf(tidyverse, vegan, mgcv)` checks each package, installs any that are missing, and then loads them all. You write the list once at the top of the script and it works on any machine with internet.

Every course homework asks for this pattern, `require(librarian); shelf(..., lib = tempdir())`, because the grading rule is that the script must run start to finish without errors and "without forcing me to install anything on my machine". The `lib = tempdir()` argument installs missing packages into a temporary folder that is deleted when R closes, so the grader's own library is left untouched ([[Reproducibility]]). Package names can be written bare, without quotes, and a GitHub package is written as `owner/repo`.

It does not pin versions: a package updated since you wrote the script might behave differently, and the renv package exists for that stricter job. Also note that `require()` returns FALSE instead of stopping if librarian itself is missing, so the very first run on a new machine still needs `install.packages("librarian")` once.

```r
# norun (needs internet to install packages)
if (!requireNamespace("librarian", quietly = TRUE)) install.packages("librarian")
librarian::shelf(tidyverse, vegan, mgcv, quiet = TRUE, lib = tempdir())
```

## Connections
- **Builds on:** [[Packages in R]]
- **Leads to:** [[Reproducibility]], [[Script|R Script]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]], molecular note [[How to Approach a Course Homework]]

## Flashcards

What does shelf() from the librarian package do?
??
Installs any missing packages and loads them all in one call.
++++

Why does the course ask for lib = tempdir()?
??
Missing packages go into a temporary folder, so the grader's own package library is not changed.
++++

What does shelf() not do that renv does?
??
Pin package versions.
++++
