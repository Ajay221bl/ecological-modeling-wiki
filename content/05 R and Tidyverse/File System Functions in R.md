---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "R can create folders, download files and build file paths itself, so a script can set up everything it needs without manual clicking."
aliases:
  - "dir.create()"
  - "download.file()"
  - "tempdir()"
  - "file.path()"
status: seedling
---

# File System Functions in R

A camping stove that unfolds its own legs does not need a table to be there already. **File system functions** let an [[Script|R script]] do the same: create folders, build file paths, check whether files exist and download files, so the script sets up everything it needs without manual clicking ([[Reproducibility]]). `dir.create("data", showWarnings = FALSE)` makes a folder if it is missing; `file.path("data", "x.csv")` [[Joins|joins]] path pieces with the right slash for any operating system; `file.exists()` tests whether a file is already there; `list.files()` lists a folder's contents, useful for reading many files in a loop; and `download.file(url, destfile)` saves a web file locally.

The example below builds a small project inside a temporary folder: it creates data, scripts and figures folders, lists them, and writes a CSV only if one does not already exist, the same check-before-working pattern used for slow models ([[Caching Long Runs]]). `tempdir()` gives a scratch folder that disappears when R closes, which is where the course installs packages for grading. Downloading data once and keeping a dated local copy protects an analysis if the online file later changes. The Analysis A to Z lab starts by scripting downloads and folders this way ([[Project Folder Structure]], [[Course Website]]).

Paths typed with backslashes, as Windows shows them, break on other systems; `file.path()` and [[here()]] avoid the issue. All relative paths start from the [[Working Directory]], so knowing where that is comes first.

```r
proj <- file.path(tempdir(), "demo_project")
for (f in c("data", "scripts", "figures")) dir.create(file.path(proj, f), recursive = TRUE, showWarnings = FALSE)
list.files(proj)
out_file <- file.path(proj, "data", "birds.csv")
if (!file.exists(out_file)) write.csv(data.frame(site = "A", birds = 9), out_file, row.names = FALSE)
file.exists(out_file)
# download.file("https://.../deer.txt", file.path(proj, "data", "deer.txt"))
```

## Connections
- **Builds on:** [[Working Directory]], [[Script]], [[Joins]]
- **Leads to:** [[Project Folder Structure]], [[here()]], [[Caching Long Runs]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What does file.path() do?
??
Joins folder and file names into a path with the correct separator for the operating system.
++++

What is tempdir()?
??
A temporary folder for the current R session that is deleted when R closes.
++++
