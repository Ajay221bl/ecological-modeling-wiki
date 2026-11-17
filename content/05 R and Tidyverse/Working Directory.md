---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "The working directory is the folder R treats as \"here\" when you give it a file name without a full address."
aliases:
  - "getwd()"
  - "setwd()"
status: seedling
---

# Working Directory

Told "go to room 12" in a building, which room you reach depends on which floor you are on. The **working directory** is the floor R is standing on: the folder R treats as "here" when you give it a file name without a full address. `getwd()` shows it, and a bare file name is looked up there, so `read.csv("birds.csv")` means "birds.csv in the working directory" ([[Reading Data into R]]). The code below prints it and lists a few files R can see from there.

Different ways of starting R put you in different places ([[R and RStudio]]). That is why a script works one day and says "file not found" the next. `setwd("C:/Users/me/...")` moves it, but that line works only on your computer, because it uses an [[Absolute Path]].

The fix is an [[RProject]]: opening the project sets the working directory to the project folder for everyone, so [[Relative Path|relative paths]] work, and [[here()]] makes them robust even from subfolders. Putting `setwd()` at the top of a script is not good practice; it is the most common reason shared code fails.

```r
getwd()
list.files()[1:3]          # what R can see from here
# setwd("C:/Users/me/Desktop/thesis")   # avoid: breaks on any other machine
```

## Connections
- **Builds on:** [[Reading Data into R]]
- **Leads to:** [[RProject]], [[Relative Path]], [[here()]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - Reproducible Coding and Figures]]

## Flashcards

What is the working directory?
??
The folder R uses as the starting point for file names that lack a full path.
++++

Why avoid setwd() in shared scripts?
??
The path exists only on your computer, so the script fails everywhere else.
++++
