---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "`case_when()` assigns values by checking a list of conditions in order and using the first one that is true."
aliases:
  - "dplyr case_when"
  - "Recoding values"
status: seedling
---

# case_when()

Picture a sorting hat with a rulebook. It reads the rules from the top, and the first rule a row satisfies decides its label; later rules are never consulted. **`case_when()`**, from dplyr, assigns values that way: it checks a list of conditions in order and uses the value of the first one that is true. Each line is written `condition ~ value`. It is the many-way version of [[If-Else]], and it is used inside [[mutate()]] to build a new column.

The example below turns years since fire into fire classes. Missing values become "unknown", up to 1 year becomes "recent", up to 10 years "intermediate", and everything else "old", via the final `.default =` (older code writes `TRUE ~` for the same catch-all). Without a catch-all, rows that match no rule become `NA`. All the values must be of one type, here text. The result can then be turned into a factor with the levels in a sensible order ([[Factors in R]]), such as a [[Fire History Variables|Burn Status]] variable for a model.

Order matters. Put the most specific rule first: if `ysf <= 10` came before `ysf <= 1`, every recent fire would already have matched "intermediate" and "recent" would never be assigned. Putting the `is.na()` rule first is a good habit, because missing values otherwise fall through to the default.

```r
library(dplyr)
d <- data.frame(ysf = c(0, 1, 4, 12, 30, NA))          # years since fire
d |> mutate(fire_class = case_when(
  is.na(ysf) ~ "unknown",
  ysf <= 1   ~ "recent",
  ysf <= 10  ~ "intermediate",
  .default   = "old"))
```

## Connections
- **Builds on:** [[If-Else]], [[mutate()]]
- **Leads to:** [[Factors in R]], [[Fire History Variables|Burn Status]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

How does case_when() choose a value?
??
It tests conditions in order and uses the value of the first one that is TRUE.
++++

What happens to rows matching no condition in case_when()?
??
They get NA unless a default is given.
++++
