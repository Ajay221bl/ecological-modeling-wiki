---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - ".gitignore"
  - "Ignoring files"
status: seedling
---

# gitignore File

**In one line:** `.gitignore` is a plain text file listing the files and folders Git should not track.

> [!info] Before this, it helps to know
> [[Git]] (what reads it) · [[Project Folder Structure]] (what you are sorting)

## The everyday picture
A "do not photograph" list handed to the camera operator. Scratch paper, private letters and bulky furniture are left out of every picture.

## A tiny example
A typical file for an R project:
```
.Rproj.user/
.Rhistory
.RData
*.rds
results/cache/
.DS_Store
```

## Start from zero
1. **Create a file named `.gitignore` in the repository's top folder.**
2. **Each line is a pattern.** `*.RData` ignores all such files, `figures/` a whole folder.
3. **Ignore what can be regenerated:** knitted output, cached model fits, figures.
4. **Ignore what is private or huge:** passwords, raw data too big or too sensitive to share.
5. **Ignore machine clutter:** `.Rhistory`, `.Rproj.user/`, `.DS_Store`.
6. **Why:** history stays small and readable, and secrets stay off the internet. Git keeps everything ever committed, so a password committed once is exposed forever.

## Common confusions
- **"Adding a file to .gitignore removes it from history."** It only stops future tracking.

## Explain it back
- Name three kinds of file to ignore and why.

*Pass test:* you can write a sensible `.gitignore` for an analysis project.

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
