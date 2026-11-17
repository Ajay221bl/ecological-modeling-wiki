---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "README.md"
  - "Read me file"
status: seedling
---

# README

**In one line:** a README is the short text file at the top of a project that tells a newcomer what the project is and how to run it.

> [!info] Before this, it helps to know
> [[Project Folder Structure]] (what it describes)

## The everyday picture
The sheet taped inside a holiday cottage door: where the fuse box is, how the heating works, who to call. Without it every guest has to rediscover everything.

## A tiny example
```
# Fire and grassland bird richness
Does time since fire predict bird richness in the Loess Canyons?

## How to run
1. Open grassland-birds.Rproj
2. Run scripts/01_wrangle.R through 04_figures.R in order
R 4.4, packages listed at the top of each script.

## Data
data/raw/bbs_counts.csv : one row per route, stop and year
  richness = number of grassland bird species (count)
  ysf      = years since fire (years)
```

## Start from zero
1. **Name it `README.md`** and put it in the top folder. GitHub displays it automatically.
2. **Say what the project is** in two sentences.
3. **Say how to run it.** Which script first, in what order, what software.
4. **Describe the data.** Source, date, and what each column means with its units.
5. **Give contact and licence.**
6. **Why write it when you know all this?** You won't in a year. The README is a letter to that person.

## Common confusions
- **"The code documents itself."** Code says how. Only prose says what for and in what order.

## Explain it back
- What four things should a README contain?

*Pass test:* you can draft a README for a small analysis.

## Connections
- **Builds on:** [[Project Folder Structure]]
- **Leads to:** [[Reproducibility]], [[GitHub]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - Reproducible Coding and Figures]]

## Flashcards

What is a README for?
??
Telling a newcomer what the project is, how to run it and what the data mean.
++++

What belongs in a data description in a README?
??
The source, what each row represents, and each column's meaning and units.
++++
