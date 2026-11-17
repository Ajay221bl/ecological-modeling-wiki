---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "summarize()"
  - "dplyr summarise"
status: seedling
---

# summarise()

**In one line:** `summarise()` collapses many rows into one row of summary numbers, or one row per group.

> [!info] Before this, it helps to know
> [[Mean]] (a typical summary) · [[group_by()]] (which defines the groups)

## The everyday picture
The totals line at the bottom of a receipt. Dozens of items shrink to a few numbers: how many, how much. Grouped, you get one totals line per department.

## Start from zero
1. **`summarise(data, name = summary_function(column))`.**
2. **Each expression must give one value per group.**
3. **Without grouping you get one row.**
4. **With `group_by()` you get one row per group.** *Why they travel together:* most questions are "what is the mean per site, per year?".
5. **`n()` counts rows.** Always include it, so readers know what stands behind each mean.

## In R
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

## Common confusions
- **"summarise() keeps my other columns."** Only grouping columns and the summaries survive.
- **"n() counts non-missing values."** It counts rows. Use `sum(!is.na(x))` for values.

## Explain it back
- How many rows does a grouped summarise return?

*Pass test:* you can produce a per-group table of mean, SD and n.

## Connections
- **Builds on:** [[group_by()]], [[Mean]]
- **Leads to:** [[Plotting Model Predictions with Ribbons]], [[kable()]]
- **Part of:** [[MOC - R for Ecological Modeling]]

## Flashcards

What does summarise() do?
??
Collapses rows to summary values: one row overall, or one per group after group_by().
++++

What does n() return inside summarise()?
??
The number of rows in the current group.
++++
