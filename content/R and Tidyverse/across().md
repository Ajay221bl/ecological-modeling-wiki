---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "dplyr across"
  - "Applying a function to many columns"
status: seedling
---

# across()

**In one line:** `across()` applies the same operation to several columns at once inside `mutate()` or `summarise()`.

> [!info] Before this, it helps to know
> [[mutate()]] (changing columns) · [[summarise()]] (collapsing columns) · [[select()]] (the same column-picking helpers)

## The everyday picture
Painting a fence with a wide roller instead of a small brush. Same paint, same motion, many boards per stroke.

## Start from zero
1. **`across(columns, function)`.**
2. **Pick columns with select-style helpers:** `c(a, b)`, `starts_with()`, `where(is.numeric)`.
3. **Give the function** as a name or as `\(x) ...`.
4. **`.names` controls the new column names.**
5. **The main course use: standardizing all predictors in one line.** *Why:* writing `scale()` ten times invites a typo in one of them.

## In R
```r
library(dplyr)
d <- data.frame(site = c("A", "B", "C"), tree = c(10, 30, 50), shrub = c(5, 9, 4), birds = c(9, 6, 3))
d |> mutate(across(c(tree, shrub), \(x) (x - mean(x)) / sd(x), .names = "{.col}_z"))
d |> summarise(across(where(is.numeric), mean))
d |> summarise(across(c(tree, shrub), list(mean = mean, sd = sd)))
```

## Common confusions
- **"across() works alone."** It only works inside another verb.

## Explain it back
- How would you standardize every numeric predictor but not the response?

*Pass test:* you can scale several predictors with one call.

## Connections
- **Builds on:** [[mutate()]], [[summarise()]]
- **Leads to:** [[Standardizing]], [[Standardizing|scale()]]
- **Part of:** [[MOC - R for Ecological Modeling]]

## Flashcards

What does across() do?
??
Applies one function to several chosen columns inside mutate() or summarise().
++++
