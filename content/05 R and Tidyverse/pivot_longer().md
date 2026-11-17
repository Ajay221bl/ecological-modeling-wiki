---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "`pivot_longer()` takes several columns that are really values of one variable and stacks them into two columns: one for the old names, one for the values."
aliases:
  - "Wide to long"
  - "gather()"
status: seedling
---

# pivot_longer()

Items sit side by side on shelves labelled 2020 and 2021. Unstack them into a single queue, and give each item a tag saying which shelf it came from. **`pivot_longer()`**, from tidyr, does that to a table: it takes several columns that are really values of one variable and stacks them into two columns, one holding the old column names and one holding the values. It is the main step for turning wide data into [[Tidy Data]] ([[Wide vs Long Data]]).

It needs three things: `cols`, which columns to stack, chosen with the usual helpers such as `starts_with("sp_")` ([[select()]]); `names_to`, the name of the new column that will hold the old column names; and `values_to`, the name of the new column that will hold the values. In the example below, a table of two sites with columns `sp_robin` and `sp_wren` becomes 4 rows, one per site-species pair, with columns `site`, `species` and `count`. The table gets longer and narrower.

The old names arrive as text, so tidy them on the way: `names_prefix = "sp_"` strips the prefix, and when the names are years they need converting to numbers afterwards. Nothing is lost in the reshaping: every value is kept and only the shape changes. Long data are what models and ggplot [[Facets]] expect, and [[pivot_wider()]] reverses the operation.

```r
library(tidyr)
wide <- data.frame(site = c("A", "B"), sp_robin = c(3, 0), sp_wren = c(1, 4))
long <- pivot_longer(wide, cols = starts_with("sp_"), names_to = "species", names_prefix = "sp_", values_to = "count")
long          # 4 rows: one per site-species pair
```

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
