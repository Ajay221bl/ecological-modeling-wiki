---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "A project folder structure is a fixed set of subfolders, such as data, scripts, results and figures, so that every file has one obvious home."
aliases:
  - "Folder structure"
  - "Directory layout"
status: seedling
---

# Project Folder Structure

In a kitchen where knives always go in one drawer and spices on one shelf, a guest can cook without asking where anything is. A **project folder structure** is a fixed set of subfolders, such as data, scripts, results and figures, so that every file has one obvious home and a stranger can read the project. The example layout has a `data/raw/` folder for original files that are never edited, `data/processed/` for cleaned files written by scripts, numbered scripts from `01_wrangle.R` to `04_figures.R` plus a `functions.R`, a `results/` folder for model objects and tables, and `figures/` for saved plots, with the `.Rproj` file and a [[README]] at the top ([[RProject]]).

The rules behind it are simple. Raw data are read-only, because if the original is edited by hand nothing can be reproduced. Scripts turn raw into processed, so processed data can always be rebuilt. Outputs live apart from inputs, so anything in results or figures can be deleted and regenerated. Scripts are numbered in run order ([[Splitting Scripts]]). And the folders themselves can be created from code, so the structure is reproducible too ([[File System Functions in R]]).

The syllabus names these folders for the project, and the Analysis A to Z lab builds them ([[Final Project]], [[Course Website]], [[Reproducibility]]). One folder seems simpler until there are 60 files and you cannot tell inputs from outputs. And cleaning the raw file in Excel leaves the cleaning undocumented and unrepeatable; clean in a script. Generated and private files can be kept out of version control with a [[gitignore File]].

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
