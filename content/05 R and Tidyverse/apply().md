---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "`apply()` runs a function over every row or every column of a matrix."
aliases:
  - "apply family"
  - "Row and column operations"
status: seedling
---

# apply()

Run a highlighter along each row of a table and write the row's total in the margin, or down each column and write totals along the bottom. **`apply()`** does that with any function you choose: it runs a function over every row or every column of a matrix ([[Matrices in R]]) and returns one result for each. The call is `apply(X, MARGIN, FUN)`, where X is the matrix, MARGIN is 1 for rows or 2 for columns (the same order as `m[row, col]`), and FUN is any function that takes a vector, such as `mean`, `sd`, `quantile` or one of your own ([[Functions in R|Function Arguments]]).

Its main use in this course is summarising simulation and [[Bootstrap|bootstrap]] output. Such output is a matrix with one row per draw and one column per prediction point, so summarising each column gives a result at each point. In the code below, 1,000 draws at 4 points are stored as a 1000 × 4 matrix; `apply(boot, 2, mean)` gives the mean at each point, and `apply(boot, 2, quantile, c(0.025, 0.975))` gives a 95% interval at each point, with the extra argument passed on to `quantile()`. That is exactly how prediction bands are built from `bootMer()` output in the confidence-interval lab ([[bootMer()]], [[Percentile Bootstrap Interval]]), and how intervals are taken from [[Posterior Draws]].

For plain sums and means, `rowSums()`, `colSums()`, `rowMeans()` and `colMeans()` are faster shortcuts. Avoid using `apply()` on a [[Data Frame|data frame]]: it first converts it to a matrix, and if any column is text, everything becomes text. For lists rather than [[Matrix|matrices]], use [[lapply()]] ([[Loops, apply and map]]).

```r
set.seed(3)
boot <- matrix(rnorm(4000, mean = rep(c(5, 6, 7, 8), each = 1000)), ncol = 4)  # 1000 draws x 4 points
apply(boot, 2, mean)                               # mean of each column
t(apply(boot, 2, quantile, c(0.025, 0.975)))       # a 95% interval for each point
rowSums(boot[1:3, ]); colMeans(boot)               # fast shortcuts for sums and means
```
Column-wise quantiles are how prediction bands are built from `bootMer()` output.

## Connections
- **Builds on:** [[Matrices in R]], [[Data Frame]], [[Matrix]]
- **Leads to:** [[lapply()]], [[Percentile Bootstrap Interval]], [[Posterior Draws]], [[Bootstrap]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]], molecular note [[Loops, apply and map]]

## Flashcards

What does apply(X, 2, mean) do?
??
Computes the mean of each column of the matrix X.
++++

In apply(), what do MARGIN = 1 and MARGIN = 2 mean?
??
1 applies the function to rows, 2 to columns.
++++
