---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "getwd()"
  - "setwd()"
status: seedling
---

# Working Directory

**In one line:** the working directory is the folder R treats as "here" when you give it a file name without a full address.

> [!info] Before this, it helps to know
> [[Reading Data into R]] (which needs to find files) · [[R and RStudio]] (where the session runs)

## The everyday picture
Standing in a building and being told "go to room 12". Which room 12 depends on which floor you are on. The working directory is the floor R is standing on.

## Start from zero
1. **`getwd()` shows it.**
2. **A bare file name is looked up there.** `read.csv("birds.csv")` means "birds.csv in the working directory".
3. **Different ways of starting R put you in different places.** *That is why* a script works one day and says "file not found" the next.
4. **`setwd("C:/Users/me/...")` moves it,** but that line only works on your computer.
5. **The fix is an RProject:** opening the project sets the working directory to the project folder for everyone ([[RProject]]).

## In R
```r
getwd()
list.files()[1:3]          # what R can see from here
# setwd("C:/Users/me/Desktop/thesis")   # avoid: breaks on any other machine
```

## Common confusions
- **"setwd() at the top of the script is good practice."** It is the most common reason shared code fails.

## Explain it back
- Why does "file not found" so often come down to the working directory?

*Pass test:* you can check where R is looking and say why `setwd()` is fragile.

## Connections
- **Builds on:** [[Reading Data into R]]
- **Leads to:** [[RProject]], [[Relative Path]], [[here()]]
- **Part of:** [[MOC - Reproducible Coding and Figures]]

## Flashcards

What is the working directory?
??
The folder R uses as the starting point for file names that lack a full path.
++++

Why avoid setwd() in shared scripts?
??
The path exists only on your computer, so the script fails everywhere else.
++++
