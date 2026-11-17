---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "Wide to long"
  - "gather()"
status: seedling
---

# pivot_longer()

**In one line:** `pivot_longer()` takes several columns that are really values of one variable and stacks them into two columns: one for the old names, one for the values.

> [!info] Before this, it helps to know
> [[Tidy Data]] (the target layout) · [[select()]] (the helpers for choosing columns)

## The everyday picture
Unstacking shelves into a single queue. Items that sat side by side on shelves labelled 2020 and 2021 now stand in one line, each wearing a tag saying which shelf it came from.

## Start from zero
1. **`cols`:** which columns to stack.
2. **`names_to`:** the new column that will hold their old names.
3. **`values_to`:** the new column that will hold their values.
4. **The table gets longer and narrower.** 2 rows × 2 year columns become 4 rows.
5. **Names arrive as text.** *So:* strip prefixes with `names_prefix` and convert, for example to numeric year.

## In R
```r
library(tidyr)
wide <- data.frame(site = c("A", "B"), sp_robin = c(3, 0), sp_wren = c(1, 4))
long <- pivot_longer(wide, cols = starts_with("sp_"), names_to = "species", names_prefix = "sp_", values_to = "count")
long          # 4 rows: one per site-species pair
```

## Common confusions
- **"It loses data."** Every value is kept. Only the shape changes.

## Explain it back
- What goes into `names_to` and what into `values_to`?

*Pass test:* you can turn a species-by-column table into one row per site and species.

## Connections
- **Builds on:** [[Tidy Data]]
- **Leads to:** [[pivot_wider()]], [[Facets]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]], molecular note [[Wide vs Long Data]]

## Flashcards

What does pivot_longer() do?
??
Stacks several columns into a names column and a values column, making the table longer.
++++

What do names_to and values_to specify?
??
The new column for the former column names, and the new column for their values.
++++
