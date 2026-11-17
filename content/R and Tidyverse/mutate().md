---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "dplyr mutate"
  - "Creating columns"
status: seedling
---

# mutate()

**In one line:** `mutate()` adds new columns, or changes existing ones, by calculating from the columns already there.

> [!info] Before this, it helps to know
> [[Vectorization]] (whole-column arithmetic) · [[Pipe Operator]] (chaining)

## The everyday picture
Adding a formula column to a spreadsheet and filling it down. Every row gets its own answer computed from that row's other cells.

## Start from zero
1. **`mutate(data, new = expression)`.**
2. **The expression is vectorized,** computed for every row at once.
3. **Reuse a name to overwrite a column.**
4. **Later columns can use earlier ones in the same call.**
5. **After `group_by()`, calculations happen within groups.** *Why this matters:* `mean(x)` then means the group's mean, which is how you centre within sites.

## In R
```r
library(dplyr)
d <- data.frame(site = c("A", "A", "B", "B"), larvae = c(0, 12, 3, 0), length_cm = c(150, 180, 160, 170))
d |>
  mutate(present  = as.integer(larvae > 0),                  # presence/absence
         length_c = length_cm - mean(length_cm),             # centred
         length_z = length_c / sd(length_cm))                # standardized, using the column just made
d |> group_by(site) |> mutate(site_mean = mean(length_cm))   # group means repeated on each row
```

## Common confusions
- **"mutate() reduces rows."** It keeps every row. `summarise()` is the one that collapses.
- **"The data frame changed."** Not until you assign the result.

## Explain it back
- What does `mean(x)` inside a grouped `mutate()` return?

*Pass test:* you can add a transformed column and a group-centred column.

## Connections
- **Builds on:** [[Vectorization]], [[Pipe Operator]]
- **Leads to:** [[summarise()]], [[group_by()]], [[Centering]], [[Standardizing]]
- **Part of:** [[MOC - R for Ecological Modeling]]

## Flashcards

What does mutate() do?
??
Adds or changes columns, computing a value for every row.
++++

How does mutate() behave after group_by()?
??
Calculations such as mean() are done separately within each group.
++++
