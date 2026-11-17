---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "A code chunk is a fenced block of R code inside an R Markdown file, with options that control whether the code runs and what appears in the report."
aliases:
  - "Chunk"
  - "Chunk options"
  - "echo, eval, include"
status: seedling
---

# Code Chunks

Picture windows set into a wall of text. Each window shows a piece of the machinery, and shutters decide whether readers see the code, the output, both or neither. A **code chunk** is a fenced block of R code inside an [[R Markdown]] file. It starts with ```` ```{r name, options} ```` and ends with ```` ``` ````, and its *options* control whether the code runs and what appears in the report. Naming each chunk pays off, because when knitting fails the error message then says which chunk broke.

The key options are few. `echo = FALSE` hides the code but shows its output, which suits figures in a polished report. `eval = FALSE` shows the code without running it. `include = FALSE` runs the code but shows nothing, which is ideal for a setup chunk that loads packages. `message = FALSE` and `warning = FALSE` hide package chatter, and `fig.width`, `fig.height` and `fig.cap` size and caption figures. `cache = TRUE` saves a chunk's results so slow code is not rerun at every knit ([[Caching Long Runs]]). Defaults for the whole document are set once in a setup chunk with `knitr::opts_chunk$set(...)`.

All chunks run in one R session, in order, so a chunk can use objects created in chunks above it but never below it ([[Knitting]]). Two options are easy to misuse. `warning = FALSE` does not fix warnings; it hides them, so read them first ([[Errors and Warnings in R]]). And `cache = TRUE` is not always safe: a cached chunk does not notice when the data it depends on change upstream, so it can quietly serve old results.

## Connections
- **Builds on:** [[R Markdown]]
- **Leads to:** [[Knitting]], [[Caching Long Runs]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What does echo = FALSE do in a chunk?
??
Hides the code but still runs it and shows its output.
++++

What does eval = FALSE do?
??
Shows the code without running it.
++++

What does include = FALSE do?
??
Runs the code but shows neither code nor output.
++++
