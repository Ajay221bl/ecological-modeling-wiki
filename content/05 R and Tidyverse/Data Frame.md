---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "A data frame is R's table for data: each column is a variable, each row an observation, and columns may be of different types."
aliases:
  - "data.frame"
  - "Data Frames and Tibbles"
  - "Dataset in R"
status: seedling
---

# Data Frame

A **data frame** is a spreadsheet with discipline: R's table for data, in which each column is a variable ([[Variable]]), each row is an observation ([[Observation]]), and every column has a name, a single type and the same length. There are no merged cells, no notes in the margins and no totals row. Unlike a matrix, which holds one type throughout, a data frame lets each column keep its own type, which is exactly what real data need: numbers for mass, text for species, categories for site.

You build one by gluing equal-length vectors side by side with `data.frame()`, as in the code below with three plots, their tree cover and their bird counts ([[Vectors in R]]). `d$birds` pulls out one column as a vector; `dim()` and `names()` report its size and column names; `d[d$tree > 20, ]` keeps the rows where tree cover exceeds 20 ([[Indexing in R]]). Modeling functions take a data frame through their `data =` argument, so `lm(birds ~ tree, data = d)` knows where to find both columns. Size and types are worth checking with `str()` or `head()` whenever new data arrive ([[Inspecting Data]]).

Because all of a row's values belong to the same unit, the layout itself carries meaning: one row per observation, one column per variable, which is the idea of [[Tidy Data]]. Columns cannot have different lengths; a value that was not recorded is entered as `NA`, not left out. Most data frames arrive by reading a file rather than being typed in ([[Reading Data into R]]), and the tidyverse returns a stricter version called a [[Tibble]] ([[Data Frame vs Tibble]]).

```r
d <- data.frame(plot = c("A", "B", "C"), tree = c(10, 30, 50), birds = c(9, 6, 3))
d
d$birds                 # one column, as a vector
dim(d); names(d)        # 3 rows 3 columns; column names
d[d$tree > 20, ]        # rows where tree cover exceeds 20
lm(birds ~ tree, data = d)$coefficients
```

## Connections
- **Builds on:** [[Vectors in R]]
- **Leads to:** [[Tibble]], [[Tidy Data]], [[Indexing in R]], [[Reading Data into R]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]], molecular note [[Data Frame vs Tibble]]

## Flashcards

What is a data frame?
??
A table where each column is a variable (one type per column) and each row is an observation.
++++

How do you extract one column from a data frame d?
??
d$name, which returns a vector.
++++
