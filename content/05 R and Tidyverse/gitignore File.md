---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "`.gitignore` is a plain text file listing the files and folders Git should not track."
aliases:
  - ".gitignore"
  - "Ignoring files"
status: seedling
---

# gitignore File

A "do not photograph" list handed to the camera operator keeps scratch paper, private letters and bulky furniture out of every picture. **`.gitignore`** is a plain text file, placed in a repository's top folder, that lists the files and folders [[Git]] should not track. Each line is a pattern: `*.RData` ignores every file ending in `.RData`, and `figures/` ignores a whole folder. A typical file for an R project lists `.Rproj.user/`, `.Rhistory`, `.RData`, `*.rds`, `results/cache/` and `.DS_Store`.

Three kinds of thing belong on the list. First, anything that can be regenerated from the code, such as knitted output, figures and cached model fits ([[Caching Long Runs]]). Second, anything private or huge, such as passwords or raw data too big or too sensitive to share. Third, machine clutter, such as RStudio's history and settings files. The payoff is a history that stays small and readable, and secrets that stay off the internet ([[Project Folder Structure]]).

The second reason is serious because Git keeps everything ever committed: a password committed once remains in the history even after the file is deleted. Adding a file to `.gitignore` only stops *future* tracking; it does not remove the file from past commits. So set up the list at the start of a project, before the first commit.

## Connections
- **Builds on:** [[Git]]
- **Leads to:** [[Caching Long Runs]], [[Project Folder Structure]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What is .gitignore for?
??
Listing files and folders that Git should not track.
++++

What kinds of files belong in .gitignore?
??
Regenerable outputs, large or private data, secrets and machine-specific clutter.
++++
