---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "R can read a data file straight from a web address, so a script works on any computer without the file being copied by hand."
aliases:
  - "Reading from GitHub"
  - "Remote data"
status: seedling
---

# Reading Data from a URL

Giving a friend a link to a shared document, instead of emailing an attachment, means everyone opens the same, current file and nobody has to remember where they saved their copy. R's reading functions accept a web address in place of a file path, so a script can **read data from a URL** and work on any computer without the file being copied by hand ([[Reading Data into R]]). The course asks for this so the instructor can run your script without having your folders ([[Reproducibility]], [[Course Website]]).

For files on [[GitHub]], use the "raw" address, which starts with `raw.githubusercontent.com`. The ordinary page address returns a web page full of HTML, which R will read as nonsense. Long addresses are easiest to build with `paste0()`, joining a base address for the [[Repository|repository]] to each file name, as in the example below, which reads the deer data from the course repository ([[paste()]]).

There are two risks. The script now needs an internet connection, and the file at the address can change or vanish. For a final analysis, download the file once, keep a dated copy alongside the project, and record where it came from ([[File System Functions in R]], [[Caching Long Runs]]).

```r
# norun  (needs internet)
repo <- "https://raw.githubusercontent.com/LivingLandscapes/Course_EcologicalModeling/master/data/"
deer <- read.table(paste0(repo, "DeerEcervi.txt"), header = TRUE)
str(deer)
```

## Connections
- **Builds on:** [[Reading Data into R]], [[Repository]]
- **Leads to:** [[GitHub]], [[paste()]], [[Caching Long Runs]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

Why read course data from a URL?
??
The script then runs on any computer without manual file copying.
++++

Which GitHub address must be used to read a data file?
??
The raw file address, not the ordinary web page address.
++++
