---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "here package"
status: seedling
---

# here()

**In one line:** `here()` builds a file path starting from the project's top folder, whichever subfolder the code happens to run from.

> [!info] Before this, it helps to know
> [[RProject]] (which marks the top folder) · [[Relative Path]] (what it makes robust)

## The everyday picture
A compass that always points to base camp. Wherever in the mountains you are standing, "base camp, then the data tent, then the birds crate" gets you to the same crate.

## Start from zero
1. **`here()` finds the project root** by searching upward for the `.Rproj` file (or a `.git` folder).
2. **`here("data", "birds.csv")` appends the pieces** with the right slashes.
3. **The result is the same from any subfolder.**
4. **Why you need it on top of an RProject:** knitting an R Markdown file sets the working directory to the Rmd's own folder. A plain `data/birds.csv` then fails. `here()` doesn't care.
5. **Use it for every read and write.**

## In R
```r
# norun  (meaningful only inside a project)
library(here)
here()                                        # the project root
birds <- read.csv(here("data", "birds.csv"))
ggplot2::ggsave(here("figures", "fig1.png"))
```

## Common confusions
- **"here() is setwd() in disguise."** It never changes the working directory. It only builds paths.
- **"here() gave a strange folder."** There is no `.Rproj` or `.git` marker, so it guessed.

## Explain it back
- Why can a relative path fail when knitting, and how does `here()` fix it?

*Pass test:* you can write a read and a save using `here()`.

## Connections
- **Builds on:** [[RProject]], [[Relative Path]]
- **Leads to:** [[Knitting]], [[Saving Figures]], [[Project Folder Structure]]
- **Part of:** [[MOC - Reproducible Coding and Figures]]

## Flashcards

What does here("data", "birds.csv") return?
??
The path to data/birds.csv starting from the project's root folder, regardless of the current working directory.
++++

How does here() find the project root?
??
It looks upward from the current folder for a marker such as an .Rproj file or .git folder.
++++
