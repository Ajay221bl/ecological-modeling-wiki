---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "dir.create()"
  - "download.file()"
  - "tempdir()"
  - "file.path()"
status: seedling
---

# File System Functions in R

**In one line:** R can create folders, download files and build file paths itself, so a script can set up everything it needs without manual clicking.

> [!info] Before this, it helps to know
> [[Working Directory]] (where paths start) · [[Reproducibility]] (why setup should be scripted)

## The everyday picture
A camping stove that unfolds its own legs. You don't need a table to be there already. The script builds the folders it wants and fetches its own fuel.

## Start from zero
1. **`dir.create("data", showWarnings = FALSE)`** makes a folder if missing.
2. **`file.path("data", "x.csv")`** joins path pieces with the right slash for any operating system.
3. **`file.exists()`** tests before doing work twice.
4. **`download.file(url, destfile)`** saves a web file locally. *Why:* one dated local copy protects you if the online file changes.
5. **`tempdir()`** is a scratch folder that disappears when R closes. The course installs packages there.
6. **`list.files()`** lists a folder, useful for reading many files in a loop.

## In R
```r
proj <- file.path(tempdir(), "demo_project")
for (f in c("data", "scripts", "figures")) dir.create(file.path(proj, f), recursive = TRUE, showWarnings = FALSE)
list.files(proj)
out_file <- file.path(proj, "data", "birds.csv")
if (!file.exists(out_file)) write.csv(data.frame(site = "A", birds = 9), out_file, row.names = FALSE)
file.exists(out_file)
# download.file("https://.../deer.txt", file.path(proj, "data", "deer.txt"))
```

## In the course
The Analysis A to Z lab starts by scripting downloads and folders ([[Course Website]]; [[Project Folder Structure]]).

## Common confusions
- **"Paths with backslashes work everywhere."** They break off Windows. `file.path()` and `here()` avoid the issue.

## Explain it back
- Why script the folder setup instead of creating folders by hand?

*Pass test:* you can create a project skeleton and download a file from code.

## Connections
- **Builds on:** [[Working Directory]]
- **Leads to:** [[Project Folder Structure]], [[here()]], [[Caching Long Runs]]
- **Part of:** [[MOC - R for Ecological Modeling]]

## Flashcards

What does file.path() do?
??
Joins folder and file names into a path with the correct separator for the operating system.
++++

What is tempdir()?
??
A temporary folder for the current R session that is deleted when R closes.
++++
