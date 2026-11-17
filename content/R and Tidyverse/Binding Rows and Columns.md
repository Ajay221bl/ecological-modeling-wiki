---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "rbind()"
  - "cbind()"
  - "bind_rows()"
status: seedling
---

# Binding Rows and Columns

**In one line:** binding glues tables together by simple position: rows underneath each other, or columns side by side, with no matching by key.

> [!info] Before this, it helps to know
> [[Data Frame]] (the tables) · [[Joins]] (matching by key, the safer cousin)

## The everyday picture
Taping two sheets of paper together. Top to bottom makes a longer list. Side to side makes a wider one, and only makes sense if the lines on both sheets were already in the same order.

## Start from zero
1. **`rbind()` / `bind_rows()` stack rows.** Use for the same variables from different files, such as one file per year.
2. **`bind_rows()` matches columns by name and fills gaps with NA.** `rbind()` insists on identical columns.
3. **`.id` records which table each row came from.**
4. **`cbind()` / `bind_cols()` put columns side by side by row position.**
5. **Column binding trusts the row order.** *Why it is risky:* if one table was sorted differently, values get attached to the wrong rows with no warning. Prefer a join.

## In R
```r
library(dplyr)
y1 <- data.frame(site = c("A", "B"), birds = c(9, 6))
y2 <- data.frame(site = c("A", "B"), birds = c(8, 5), observer = c("JL", "JL"))
bind_rows(`2020` = y1, `2021` = y2, .id = "year")     # stacks, fills observer with NA
cbind(y1, tree = c(10, 30))                           # adds a column by position
X <- cbind(1, c(2, 5, 9)); X                          # building a matrix column by column
```

## Common confusions
- **"cbind is a quick join."** It ignores keys entirely.

## Explain it back
- When is `cbind()` dangerous?

*Pass test:* you can stack yearly files and label their origin.

## Connections
- **Builds on:** [[Data Frame]]
- **Leads to:** [[Joins]], [[Matrices in R]]
- **Part of:** [[MOC - R for Ecological Modeling]]

## Flashcards

What is the difference between binding and joining?
??
Binding glues by position (rows stacked or columns side by side). Joining matches rows by a shared key.
++++

Why is cbind() risky for data frames?
??
It assumes both tables are in the same row order and gives no warning if they aren't.
++++
