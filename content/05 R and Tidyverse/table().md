---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "Frequency table"
  - "Cross-tabulation"
  - "count()"
status: seedling
---

# table()

**In one line:** `table()` counts how many times each value occurs, or each combination of values from two or more variables.

> [!info] Before this, it helps to know
> [[Categorical Variable]] (what gets counted) · [[Inspecting Data]] (where it is used first)

## The everyday picture
Tally marks on a clipboard. One mark each time a category turns up. With two clipboards crossed, rows for site and columns for year, each cell tallies one combination.

## Start from zero
1. **`table(x)` counts each distinct value.**
2. **`table(x, y)` counts combinations.**
3. **Empty cells show as 0.** *Why you want to see them:* a combination with no data can't be estimated.
4. **`useNA = "ifany"` shows missing values,** which are hidden by default.
5. **Use it to check balance** before fitting a model with factors.

## In R
```r
d <- data.frame(site = c("A", "A", "A", "B", "B", "C"), trt = c("burn", "burn", "ctrl", "burn", "ctrl", "burn"))
table(d$site)
table(d$site, d$trt)          # site C has no control: unbalanced
prop.table(table(d$trt))      # as proportions
table(c(0, 0, 3, 0, 1, NA), useNA = "ifany")   # how many zeros and NAs?
```

## In the course
Homework 1 checks balance with `table()` ([[Balanced Data|Balanced vs Unbalanced Data]]). The GLMM lab uses it to find farms with all zeros or all ones ([[Complete Separation]]).

## Common confusions
- **"table() gives a data frame."** It gives a table object. Use `as.data.frame()` or dplyr's `count()` for a data frame.

## Explain it back
- What does a zero cell in a two-way table warn you about?

*Pass test:* you can cross-tabulate two factors and read off imbalance.

## Connections
- **Builds on:** [[Categorical Variable]]
- **Leads to:** [[Balanced Data|Balanced vs Unbalanced Data]], [[Complete Separation]], [[Zero Inflation]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What does table(x, y) show?
??
The number of observations for each combination of x and y.
++++

Why look for zeros in a cross-tabulation before modeling?
??
Combinations with no data can't be estimated and signal unbalance or separation.
++++
