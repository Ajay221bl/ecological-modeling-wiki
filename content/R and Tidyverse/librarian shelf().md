---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "shelf()"
  - "librarian package"
status: seedling
---

# librarian shelf()

**In one line:** `shelf()` from the librarian package installs any missing packages and loads them all in one line.

> [!info] Before this, it helps to know
> [[Packages in R]] (installing and loading) · [[Reproducibility]] (code that runs elsewhere)

## The everyday picture
A lending library that orders any book it doesn't have and then hands you the whole stack. You give one list. You don't have to check first which books are on the shelf.

## Start from zero
1. **The problem:** a script with `library(x)` fails on a computer where x isn't installed.
2. **`shelf(a, b, c)` checks each package.**
3. **Missing ones are installed, then all are loaded.** *Why the course uses it:* everyone's script then starts the same way and runs on any machine, including the instructor's.
4. **Names are unquoted, and GitHub packages work too:** `shelf(tidyverse, user/repo)`.
5. **The course adds `lib = tempdir()`** so installs go to a temporary folder and don't alter the grader's own library.

## In R
```r
# norun  (installs from the internet)
if (!require(librarian)) install.packages("librarian")
library(librarian)
shelf(tidyverse, lme4, AICcmodavg, lib = tempdir())   # the course's standard header
```

## In the course
Required at the top of every submitted script on the Computer setup page ([[Course Website]]).

## Common confusions
- **"shelf() replaces library() everywhere."** It replaces the block of `library()` calls at the top. Nothing else changes.
- **"tempdir() keeps packages."** A temporary folder is wiped when R closes, so they reinstall next session. That is intended for grading, and slow for daily work.

## Explain it back
- What problem does `shelf()` solve?
- Why does the course install to `tempdir()`?

*Pass test:* you can write the course's package header from memory.

## Connections
- **Builds on:** [[Packages in R]]
- **Leads to:** [[Reproducibility]], [[CRAN]]
- **Part of:** [[MOC - R for Ecological Modeling]]

## Flashcards

What does shelf() from the librarian package do?
??
Installs any listed packages that are missing and loads all of them.
++++

Why does the course use shelf(..., lib = tempdir())?
??
So a script runs on any computer without changing that computer's permanent package library.
++++
