---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "A tibble is the tidyverse's version of a data frame: the same table, with tidier printing and fewer surprises."
aliases:
  - "tbl_df"
  - "tibble()"
status: seedling
---

# Tibble

A **tibble** is the tidyverse's version of a data frame: the same car with better manners ([[Tidyverse]], [[Data Frame]]). It holds the same table and works with almost everything that accepts a data frame; indeed its class, shown in the code below, is "tbl_df", "tbl" and "data.frame", so it *is* a data frame with stricter rules. You usually get one without asking, because tidyverse functions such as `read_csv()` return tibbles ([[Reading Data into R]]).

The differences are about avoiding surprises. Printing a tibble shows only the first 10 rows and the columns that fit, with each column's type under its name (`<dbl>` for numbers, `<chr>` for text, `<fct>` for factors), instead of flooding the screen. A tibble never changes your data behind your back: no partial matching of column names and no automatic conversion of text. And selecting with `[` always returns a tibble. That last point matters because a base data frame quietly drops to a plain vector when you select a single column, as the final line of the code shows, which can break code unpredictably.

If a tibble "lost your rows", it has not: it only prints 10, and `print(t, n = 50)` or `View(t)` shows more. If an older function complains about a tibble, `as.data.frame()` converts it, and `as_tibble()` goes the other way. A tibble is therefore not a separate thing to learn, just a data frame with better defaults ([[Inspecting Data]], [[Data Frame vs Tibble]]).

```r
library(tibble)
t <- tibble(plot = c("A", "B", "C"), tree = c(10, 30, 50), birds = c(9, 6, 3))
t                        # prints types under the column names
class(t)                 # "tbl_df" "tbl" "data.frame": still a data frame
d <- as.data.frame(t)
class(d[, "tree"]); class(t[, "tree"])   # numeric vector vs tibble
```

## Connections
- **Builds on:** [[Data Frame]], [[Tidyverse]]
- **Leads to:** [[Reading Data into R]], [[Inspecting Data]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]], molecular note [[Data Frame vs Tibble]]

## Flashcards

What is a tibble?
??
The tidyverse's data frame: same structure, cleaner printing, stricter and more predictable behaviour.
++++

What does <dbl> mean under a tibble column name?
??
The column is numeric ("double").
++++
