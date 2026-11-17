---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "Reading from GitHub"
  - "Remote data"
status: seedling
---

# Reading Data from a URL

**In one line:** R can read a data file straight from a web address, so a script works on any computer without the file being copied by hand.

> [!info] Before this, it helps to know
> [[Reading Data into R]] (the same functions) · [[Reproducibility]] (why it matters)

## The everyday picture
Giving a friend a link to a shared document instead of emailing an attachment. Everyone opens the same, current file, and nobody has to remember where they saved their copy.

## Start from zero
1. **Reading functions accept a URL in place of a path.**
2. **For GitHub, use the "raw" address** (it starts with `raw.githubusercontent.com`). The normal page address returns a web page, not the data.
3. **Build long addresses with `paste0()`** from a base URL and a file name.
4. **Why the course asks for it:** the instructor can run your script without having your folders.
5. **The risk:** the script needs internet, and the file can change or vanish. For a final analysis, download once and keep a dated copy ([[File System Functions in R]]).

## In R
```r
# norun  (needs internet)
repo <- "https://raw.githubusercontent.com/LivingLandscapes/Course_EcologicalModeling/master/data/"
deer <- read.table(paste0(repo, "DeerEcervi.txt"), header = TRUE)
str(deer)
```

## In the course
The Computer setup page tells students to read public data from the repository URL ([[Course Website]]).

## Common confusions
- **"I pasted the GitHub link and got nonsense."** Use the raw link.

## Explain it back
- Why read from a URL instead of a local path in coursework?

*Pass test:* you can build a raw GitHub address and read from it.

## Connections
- **Builds on:** [[Reading Data into R]]
- **Leads to:** [[GitHub]], [[paste()]], [[Caching Long Runs]]
- **Part of:** [[MOC - R for Ecological Modeling]]

## Flashcards

Why read course data from a URL?
??
The script then runs on any computer without manual file copying.
++++

Which GitHub address must be used to read a data file?
??
The raw file address, not the ordinary web page address.
++++
