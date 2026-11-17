---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "tbl_df"
  - "tibble()"
status: seedling
---

# Tibble

**In one line:** a tibble is the tidyverse's version of a data frame: the same table, with tidier printing and fewer surprises.

> [!info] Before this, it helps to know
> [[Data Frame]] (the base R table) · [[Tidyverse]] (the package family)

## The everyday picture
The same car with better manners. It still drives like a data frame, but it shows only the first 10 rows instead of flooding the screen, tells you each column's type, and refuses to guess what you meant.

## Start from zero
1. **Tidyverse functions such as `read_csv()` return tibbles.**
2. **Printing shows 10 rows, the columns that fit, and each column's type** (`<dbl>` number, `<chr>` text, `<fct>` factor).
3. **It never changes your data behind your back.** No partial name matching, no automatic conversion of text.
4. **`[` always returns a tibble.** *Why:* a base data frame drops to a vector when you select one column, which breaks code unpredictably.
5. **Almost everything that accepts a data frame accepts a tibble.** Convert with `as_tibble()` or `as.data.frame()` if a function complains.

## In R
```r
library(tibble)
t <- tibble(plot = c("A", "B", "C"), tree = c(10, 30, 50), birds = c(9, 6, 3))
t                        # prints types under the column names
class(t)                 # "tbl_df" "tbl" "data.frame": still a data frame
d <- as.data.frame(t)
class(d[, "tree"]); class(t[, "tree"])   # numeric vector vs tibble
```

## Common confusions
- **"Tibbles and data frames are different things to learn."** A tibble is a data frame with stricter rules.
- **"The tibble lost my rows."** It only prints 10. Use `print(t, n = 50)` or `View(t)`.

## Explain it back
- What do `<dbl>`, `<chr>` and `<fct>` mean?
- How does `t[, "tree"]` differ from `d[, "tree"]`?

*Pass test:* you can read a tibble printout and convert between tibble and data frame.

## Connections
- **Builds on:** [[Data Frame]], [[Tidyverse]]
- **Leads to:** [[Reading Data into R]], [[Inspecting Data]]
- **Part of:** [[MOC - R for Ecological Modeling]], molecular note [[Data Frame vs Tibble]]

## Flashcards

What is a tibble?
??
The tidyverse's data frame: same structure, cleaner printing, stricter and more predictable behaviour.
++++

What does <dbl> mean under a tibble column name?
??
The column is numeric ("double").
++++
