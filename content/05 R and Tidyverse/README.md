---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "A README is the short text file at the top of a project that tells a newcomer what the project is and how to run it."
aliases:
  - "README.md"
  - "Read me file"
  - "README Data Dictionary"
  - "data dictionary"
  - "metadata"
status: seedling
---

# README

The sheet taped inside a holiday cottage door says where the fuse box is, how the heating works and who to call; without it every guest rediscovers everything. A **README** is that sheet for a project: the short text file, `README.md`, at the top of the project folder that tells a newcomer what the project is and how to run it. GitHub displays it automatically on the [[Repository|repository]] page ([[GitHub]]).

A good README says what the project is in two sentences; how to run it, which script first, in what order and with what software; what the data are, their source and date and what each column means with its units; and the contact and licence. The example opens with the question "Does [[Fire History Variables|time since fire]] predict bird [[Species Richness|richness]] in the [[LOESS Smoother|Loess]] Canyons?", says to open the project and run the four scripts in order, and defines the columns `richness` (number of grassland bird species, a count) and `ysf` (years since fire) ([[Project Folder Structure]]).

You write it while you know all this because you will not know it in a year; the README is a letter to that person ([[Reproducibility]]). The code does not document itself: code says how, and only prose says what for and in what order.

## Connections
- **Builds on:** [[Project Folder Structure]], [[Repository]]
- **Leads to:** [[Reproducibility]], [[GitHub]], [[Fire History Variables]], [[Species Richness]], [[LOESS Smoother]]
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
