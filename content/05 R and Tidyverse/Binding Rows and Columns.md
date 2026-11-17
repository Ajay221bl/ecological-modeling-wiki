---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "Binding glues tables together by simple position: rows underneath each other, or columns side by side, with no matching by key."
aliases:
  - "rbind()"
  - "cbind()"
  - "bind_rows()"
status: seedling
---

# Binding Rows and Columns

Tape two sheets of paper together. Top to bottom makes a longer list; side to side makes a wider one, which only makes sense if the lines on both sheets were already in the same order. **Binding** glues tables together by simple position, rows underneath each other or columns side by side, with no matching by key ([[Data Frame]]). That is the difference from a join ([[Joins]]).

Binding rows is the common and safe case: the same variables from different files, such as one file per year. `rbind()` insists that the tables have identical columns, while dplyr's `bind_rows()` matches columns by name and fills gaps with `NA`, and its `.id` argument records which table each row came from. In the example below, the 2021 table has an extra `observer` column, so the 2020 rows get `NA` there and a new `year` column says which file each row came from.

Binding columns, with `cbind()` or `bind_cols()`, attaches values by row position, and that is where the risk lies: if one table was sorted differently, values land on the wrong rows with no warning. So `cbind()` is not a quick join; when the tables share a key, join them instead. `cbind()` is still the natural tool for building a matrix column by column, as the last line shows, where a column of 1s beside a predictor is the start of a [[Matrices in R|matrix]] for regression.

```r
library(dplyr)
y1 <- data.frame(site = c("A", "B"), birds = c(9, 6))
y2 <- data.frame(site = c("A", "B"), birds = c(8, 5), observer = c("JL", "JL"))
bind_rows(`2020` = y1, `2021` = y2, .id = "year")     # stacks, fills observer with NA
cbind(y1, tree = c(10, 30))                           # adds a column by position
X <- cbind(1, c(2, 5, 9)); X                          # building a matrix column by column
```

## Connections
- **Builds on:** [[Data Frame]]
- **Leads to:** [[Joins]], [[Matrices in R]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What is the difference between binding and joining?
??
Binding glues by position (rows stacked or columns side by side). Joining matches rows by a shared key.
++++

Why is cbind() risky for data frames?
??
It assumes both tables are in the same row order and gives no warning if they aren't.
++++
