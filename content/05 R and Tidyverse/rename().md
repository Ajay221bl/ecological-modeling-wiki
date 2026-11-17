---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "dplyr rename"
  - "Renaming columns"
status: seedling
---

# rename()

**In one line:** `rename()` changes column names without touching the data.

> [!info] Before this, it helps to know
> [[Data Frame]] (named columns) · [[select()]] (which can rename while choosing)

## Start from zero
1. **`rename(data, new_name = old_name)`.** New on the left.
2. **Why bother:** raw files arrive with names such as `Tree.Cover..2km.` or `X1`. Short, lowercase, no-space names prevent typing errors for the rest of the project.
3. **`rename_with(data, tolower)` applies a function to all names.**
4. **Names with spaces need backticks:** `` `tree cover` ``.

## In R
```r
library(dplyr)
d <- data.frame(`Tree Cover` = c(10, 30), SPP_RICH = c(9, 6), check.names = FALSE)
d |> rename(tree = `Tree Cover`, richness = SPP_RICH)
d |> rename_with(~ tolower(gsub(" ", "_", .x)))
```

## Common confusions
- **"old = new."** It is `new = old`, the same direction as assignment.

## Explain it back
- Which side of `=` holds the new name?

*Pass test:* you can clean a set of awkward column names.

## Connections
- **Builds on:** [[Data Frame]]
- **Leads to:** [[select()]], [[Data Wrangling]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What is the argument order in rename()?
??
new_name = old_name.
++++
