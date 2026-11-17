---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - r
aliases:
  - "Why use RProjects and here()"
  - "Reproducible project layout"
status: seedling
---

# Why a reproducible project structure saves you

> [!summary] In plain words
> a project with one folder, an RProject, relative paths via here(), separate folders for raw data, scripts and outputs, and version control lets anyone, including future you and the person grading you, rerun the whole analysis from scratch without editing anything.

## The question
Why bother with RProjects, folders and here()?

## Built from
- [[RProject]] and [[here()]].
- [[Project Folder Structure]] and [[Relative Path]].
- [[Version Control]] and [[Git]].
- [[Reproducibility]].

## The reasoning, step by step
1. **One project folder** holds everything; opening the .Rproj sets the working directory there.
2. **`here("data", "birds.csv")`** builds paths from the project root, so code runs on any computer.
3. **Raw data stay untouched;** scripts write cleaned data and figures to separate folders.
4. **Numbered scripts** (01_clean, 02_model, 03_figures) show the order to run them.
5. **Git records each change,** so you can undo mistakes and show what changed.
6. **The course asks for exactly this layout** in the final project's code folder (diagram in [[Final Project]]); homework loses 0.5 points for each error the grader has to fix (up to 1 point), ([[Homework]]).

## So in practice
Start each assignment with a new RProject and the same folder layout; never use `setwd()`.

## What would go wrong otherwise
A script beginning with `setwd("C:/Users/me/Desktop/final")`, which fails on every other computer.

## Explain it back
- What does `here()` do?

*Pass test:* you can set up a project that runs on another computer unchanged.

## Connections
- **Related:** [[Relative vs Absolute Paths]], [[Console vs Script]], [[Git vs GitHub]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 12 - Reproducible Coding and Figures|MOC - Reproducible Coding and Figures]], [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

Why use here() instead of setwd()?
??
here() builds paths from the project root, so code runs on any computer.
++++

What goes in a reproducible project?
??
An RProject, raw data kept untouched, numbered scripts, an outputs folder, a README and version control.
++++
