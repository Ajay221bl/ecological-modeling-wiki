---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "`across()` applies the same operation to several columns at once inside `mutate()` or `summarise()`."
aliases:
  - "dplyr across"
  - "Applying a function to many columns"
status: seedling
---

# across()

Painting a fence with a wide roller instead of a small brush: same paint, same motion, many boards per stroke. **`across()`**, from dplyr, applies the same operation to several columns at once inside [[mutate()]] or [[summarise()]]. The form is `across(columns, function)`. Columns are chosen with the same helpers as [[select()]], such as `c(tree, shrub)`, `starts_with("tree")` or `where(is.numeric)`, and the function is given by name or written inline as `\(x) ...`. The `.names` argument controls the names of new columns, so `"{.col}_z"` turns `tree` into `tree_z`.

Its main use in this course is standardizing every [[Predictor Variable|predictor]] in one line, as in the first example below, which subtracts each column's mean and divides by its [[Standard Deviation|standard deviation]] for both tree and shrub cover ([[Standardizing]], [[Standardizing|scale()]]). Writing the same [[Transformation|transformation]] ten times invites a typo in one of them; `across()` writes it once. In summaries, `summarise(across(where(is.numeric), mean))` gives the mean of every numeric column, and giving a [[Lists in R|named list]] of functions, as in the last line, produces a mean and a standard deviation for each.

`across()` never works alone: it only makes sense inside another verb, which supplies the table and decides whether the result becomes new columns or summary rows.

```r
library(dplyr)
d <- data.frame(site = c("A", "B", "C"), tree = c(10, 30, 50), shrub = c(5, 9, 4), birds = c(9, 6, 3))
d |> mutate(across(c(tree, shrub), \(x) (x - mean(x)) / sd(x), .names = "{.col}_z"))
d |> summarise(across(where(is.numeric), mean))
d |> summarise(across(c(tree, shrub), list(mean = mean, sd = sd)))
```

## Connections
- **Builds on:** [[mutate()]], [[summarise()]], [[Predictor Variable]], [[Standard Deviation]], [[Lists in R]]
- **Leads to:** [[Standardizing]], [[Standardizing|scale()]], [[Transformation]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What does across() do?
??
Applies one function to several chosen columns inside mutate() or summarise().
++++
