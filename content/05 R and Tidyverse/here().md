---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "`here()` builds a file path starting from the project's top folder, whichever subfolder the code happens to run from."
aliases:
  - "here package"
status: seedling
---

# here()

A compass that always points to base camp gets you to the same crate wherever in the mountains you stand: "base camp, then the data tent, then the birds crate". **`here()`**, from the here package, builds a file path starting from the project's top folder, whichever subfolder the code happens to run from. It finds the project root by searching upward for the `.Rproj` file or a `.git` folder ([[RProject]]), and `here("data", "birds.csv")` appends the pieces with the right slashes. The result is the same from any subfolder.

The code below shows the typical uses, reading data and saving a figure through `here()`; it only makes sense inside a project, so it is not run here. You need it on top of an RProject because knitting an [[R Markdown]] file sets the [[Working Directory|working directory]] to the Rmd's own folder, so a plain `data/birds.csv` fails, while `here()` does not care ([[Knitting]], [[Relative Path]]). Use it for every read and write, including [[ggsave()|Saving Figures]].

`here()` is not `setwd()` in disguise: it never changes the working directory, it only builds paths. If it gives a strange folder, there is no `.Rproj` or `.git` marker above your file, so it guessed ([[Project Folder Structure]]).

```r
# norun  (meaningful only inside a project)
library(here)
here()                                        # the project root
birds <- read.csv(here("data", "birds.csv"))
ggplot2::ggsave(here("figures", "fig1.png"))
```

## Connections
- **Builds on:** [[RProject]], [[Relative Path]], [[R Markdown]], [[Working Directory]]
- **Leads to:** [[Knitting]], [[ggsave()|Saving Figures]], [[Project Folder Structure]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - Reproducible Coding and Figures]]

## Flashcards

What does here("data", "birds.csv") return?
??
The path to data/birds.csv starting from the project's root folder, regardless of the current working directory.
++++

How does here() find the project root?
??
It looks upward from the current folder for a marker such as an .Rproj file or .git folder.
++++
