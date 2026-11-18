---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "`mutate()` adds new columns, or changes existing ones, by calculating from the columns already there."
aliases:
  - "dplyr mutate"
  - "Creating columns"
status: seedling
---

# mutate()

Add a formula column to a spreadsheet and fill it down: every row gets its own answer computed from that row's other cells. **`mutate()`**, from dplyr, does this. It adds new columns, or overwrites existing ones, by calculating from the columns already there: `mutate(data, new = expression)`. The expression is vectorized, computed for every row at once ([[Vectorization]]), and reusing an existing name replaces that column. Columns created earlier in the same call can be used by later ones.

The example below makes three new columns in one call. `present` turns larval counts into 1 or 0 for presence and absence; `length_c` *centres* length by subtracting its mean ([[Centering]]); and `length_z` divides that by the [[Standard Deviation|standard deviation]] to *standardize* it, using the column just made ([[Standardizing]]). Both transformations come up constantly when preparing [[Predictor Variable|predictors]] for models.

After [[group_by()]], calculations happen within each group, so `mean(length_cm)` becomes the mean of that site, repeated on each of its rows, as the last line shows. That is how you centre a variable within sites. Two confusions: `mutate()` never changes the number of rows (collapsing rows to summaries is [[summarise()]]), and the [[Data Frame|data frame]] is not changed until you assign the result, because each step in a [[Pipe|Pipe Operator]] chain returns a new table.

```r
library(dplyr)
d <- data.frame(site = c("A", "A", "B", "B"), larvae = c(0, 12, 3, 0), length_cm = c(150, 180, 160, 170))
d |>
  mutate(present  = as.integer(larvae > 0),                  # presence/absence
         length_c = length_cm - mean(length_cm),             # centred
         length_z = length_c / sd(length_cm))                # standardized, using the column just made
d |> group_by(site) |> mutate(site_mean = mean(length_cm))   # group means repeated on each row
```

## Connections
- **Builds on:** [[Vectorization]], [[Pipe|Pipe Operator]], [[Standard Deviation]], [[Predictor Variable]], [[Data Frame]]
- **Leads to:** [[summarise()]], [[group_by()]], [[Centering]], [[Standardizing]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What does mutate() do?
??
Adds or changes columns, computing a value for every row.
++++

How does mutate() behave after group_by()?
??
Calculations such as mean() are done separately within each group.
++++
