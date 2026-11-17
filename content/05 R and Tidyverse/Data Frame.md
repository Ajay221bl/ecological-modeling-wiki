---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "data.frame"
  - "Data Frames and Tibbles"
  - "Dataset in R"
status: seedling
---

# Data Frame

**In one line:** a data frame is R's table for data: each column is a variable, each row an observation, and columns may be of different types.

> [!info] Before this, it helps to know
> [[Vectors in R]] (each column is one) · [[Observation]] (a row) · [[Variable]] (a column)

## The everyday picture
A spreadsheet with discipline. Every column has a name and one type, and all columns are the same length. No merged cells, no notes in the margins, no totals row.

## Start from zero
1. **Glue equal-length vectors side by side.** `data.frame(a = ..., b = ...)`.
2. **Each column keeps its own type.** *Why:* real data mix numbers (mass), text (species) and categories (site).
3. **Rows are observations.** All of a row's values belong to the same unit.
4. **Pull a column with `$`.** `d$mass` is a vector.
5. **Check size and types** with `dim()`, `str()`, `head()` ([[Inspecting Data]]).
6. **Modeling functions take it through `data =`.**

## In R
```r
d <- data.frame(plot = c("A", "B", "C"), tree = c(10, 30, 50), birds = c(9, 6, 3))
d
d$birds                 # one column, as a vector
dim(d); names(d)        # 3 rows 3 columns; column names
d[d$tree > 20, ]        # rows where tree cover exceeds 20
lm(birds ~ tree, data = d)$coefficients
```

## Common confusions
- **"A data frame is a matrix."** A matrix holds one type. A data frame holds one type per column.
- **"Columns can have different lengths."** They can't. Missing values are filled with `NA`.

## Explain it back
- What must be true of every column of a data frame?
- What does `d$tree` return?

*Pass test:* you can build a small data frame and extract a column and a subset of rows.

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
