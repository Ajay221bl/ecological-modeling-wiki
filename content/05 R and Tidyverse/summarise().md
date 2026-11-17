---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "`summarise()` collapses many rows into one row of summary numbers, or one row per group."
aliases:
  - "summarize()"
  - "dplyr summarise"
status: seedling
---

# summarise()

The totals at the bottom of a receipt shrink dozens of items into a few numbers: how many items, how much in all. Grouped by department, you get one totals line per department. **`summarise()`** (also spelled `summarize()`) collapses many rows into one row of summary numbers, such as a [[Mean]] or a standard deviation, or into one row per group. The call is `summarise(data, name = summary_function(column))`, and each expression must produce one value per group.

Without grouping you get a single row. After [[group_by()]] you get one row per group, which is why the two travel together: most questions are of the form "what is the mean per site, or per year?". The example below summarises bird counts per site with a mean, a standard deviation, the number of rows `n()` and the number of missing counts. Always include `n()`, so readers know how many observations stand behind each mean. Note `na.rm = TRUE` in the means: without it, site B's missing count would make its mean `NA` ([[Missing Values]]).

Two confusions. Only the grouping columns and the new summaries survive; every other column is dropped, because there is no longer one row per observation. And `n()` counts rows, not non-missing values; site B has 3 rows but only 2 counts, which is why the example counts missing values separately, with `sum(is.na(birds))`. Summary tables often become report tables or the basis of plotted means ([[kable()]], [[Plotting Model Predictions with Ribbons]]).

```r
library(dplyr)
d <- data.frame(site = c("A", "A", "B", "B", "B"), birds = c(9, 8, 6, 5, NA))
d |> summarise(mean_birds = mean(birds, na.rm = TRUE), n = n())
d |>
  group_by(site) |>
  summarise(mean_birds = mean(birds, na.rm = TRUE),
            sd_birds   = sd(birds, na.rm = TRUE),
            n          = n(),
            n_missing  = sum(is.na(birds)))
```

## Connections
- **Builds on:** [[group_by()]], [[Mean]]
- **Leads to:** [[Plotting Model Predictions with Ribbons]], [[kable()]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What does summarise() do?
??
Collapses rows to summary values: one row overall, or one per group after group_by().
++++

What does n() return inside summarise()?
??
The number of rows in the current group.
++++
