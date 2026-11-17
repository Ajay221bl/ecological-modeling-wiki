---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "Long to wide"
  - "spread()"
status: seedling
---

# pivot_wider()

**In one line:** `pivot_wider()` spreads the values of one column out into several new columns named after the values of another.

> [!info] Before this, it helps to know
> [[pivot_longer()]] (the reverse) · [[Tidy Data]] (the long form)

## The everyday picture
Dealing a single queue of people into labelled rooms. Everyone tagged "robin" goes to the robin column, everyone tagged "wren" to the wren column.

## Start from zero
1. **`names_from`:** the column whose values become new column names.
2. **`values_from`:** the column that fills them.
3. **The table gets wider and shorter.**
4. **Missing combinations become `NA`.** Use `values_fill = 0` when absence means zero.
5. **When you need it:** community matrices (sites by species) for diversity functions, and side-by-side tables for a report. *Why:* some functions, such as those in vegan, expect one column per species.

## In R
```r
library(tidyr)
long <- data.frame(site = c("A", "A", "B"), species = c("robin", "wren", "wren"), count = c(3, 1, 4))
pivot_wider(long, names_from = species, values_from = count)                    # B has NA robins
pivot_wider(long, names_from = species, values_from = count, values_fill = 0)   # absence = 0
```

## Common confusions
- **"NA and 0 are the same here."** Decide deliberately. A species not recorded at a surveyed site is a zero.

## Explain it back
- When is wide format the right one?

*Pass test:* you can build a site-by-species matrix from long data.

## Connections
- **Builds on:** [[pivot_longer()]], [[Tidy Data]]
- **Leads to:** [[Species Richness]], [[Diversity Index]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]], molecular note [[Wide vs Long Data]]

## Flashcards

What does pivot_wider() do?
??
Spreads one column's values into multiple columns named by another column, making the table wider.
++++

When should values_fill = 0 be used?
??
When a missing site-species combination means the species was absent, not unknown.
++++
