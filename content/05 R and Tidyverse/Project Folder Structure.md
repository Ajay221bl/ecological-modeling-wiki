---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "Folder structure"
  - "Directory layout"
status: seedling
---

# Project Folder Structure

**In one line:** a project folder structure is a fixed set of subfolders, such as data, scripts, results and figures, so that every file has one obvious home.

> [!info] Before this, it helps to know
> [[RProject]] (the top folder) · [[Reproducibility]] (the purpose)

## The everyday picture
A kitchen where knives always go in one drawer and spices on one shelf. A guest can cook there without asking where anything is. A project laid out the usual way can be read by a stranger.

## A tiny example
```
grassland-birds/
  grassland-birds.Rproj
  README.md
  data/
    raw/          original files, never edited
    processed/    cleaned files written by scripts
  scripts/
    01_wrangle.R
    02_explore.R
    03_models.R
    04_figures.R
    functions.R
  results/        model objects, tables
  figures/        saved plots
```

## Start from zero
1. **Raw data are read-only.** *Why:* if the original is edited by hand, nothing can be reproduced.
2. **Scripts turn raw into processed.** Processed data can always be rebuilt.
3. **Outputs live apart from inputs.** Anything in results or figures can be deleted and regenerated.
4. **Number the scripts in run order.**
5. **Create the folders from code** so the structure itself is reproducible ([[File System Functions in R]]).

## In the course
The syllabus names data, scripts, results and figures folders for the project ([[Final Project]]). The Analysis A to Z lab builds them ([[Course Website]]).

## Common confusions
- **"One folder is simpler."** Until there are 60 files and you can't tell inputs from outputs.
- **"I cleaned the raw file in Excel."** Then the cleaning is undocumented and unrepeatable. Clean in a script.

## Explain it back
- Why must raw data never be edited?
- Which folders could be deleted without losing anything?

*Pass test:* you can sketch a standard project layout and justify each folder.

## Connections
- **Builds on:** [[RProject]]
- **Leads to:** [[README]], [[Splitting Scripts]], [[gitignore File]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - Reproducible Coding and Figures]], molecular note [[Why a reproducible project structure saves you]]

## Flashcards

What folders does a typical analysis project have?
??
data (raw and processed), scripts, results and figures, plus a README at the top.
++++

Why keep raw data read-only?
??
Hand edits can't be reproduced. All changes should be made by scripts.
++++
