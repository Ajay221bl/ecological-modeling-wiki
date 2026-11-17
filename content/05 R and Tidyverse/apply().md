---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "apply family"
  - "Row and column operations"
status: seedling
---

# apply()

**In one line:** `apply()` runs a function over every row or every column of a matrix.

> [!info] Before this, it helps to know
> [[Matrices in R]] (the grid it works on) · [[Function Arguments]] (passing a function as input)

## The everyday picture
Running a highlighter along each row of a table and writing the row's total in the margin. Or down each column, writing totals along the bottom. `apply()` does that with any function you choose.

## Start from zero
1. **`apply(X, MARGIN, FUN)`.**
2. **MARGIN 1 means rows, 2 means columns.**
3. **FUN is any function taking a vector.** `mean`, `sd`, `quantile`, or your own.
4. **It returns one result per row or column.**
5. **Its main use in the course: summarising draws.** *Why:* bootstrap and posterior output is a matrix with one row per draw and one column per prediction point, so column quantiles give an interval at each point.

## In R
```r
set.seed(3)
boot <- matrix(rnorm(4000, mean = rep(c(5, 6, 7, 8), each = 1000)), ncol = 4)  # 1000 draws x 4 points
apply(boot, 2, mean)                               # mean of each column
t(apply(boot, 2, quantile, c(0.025, 0.975)))       # a 95% interval for each point
rowSums(boot[1:3, ]); colMeans(boot)               # fast shortcuts for sums and means
```
Column-wise quantiles are how prediction bands are built from `bootMer()` output.

## In the course
The confidence interval lab takes column quantiles of the bootstrap matrix ([[bootMer()]]; [[Course Website]]).

## Common confusions
- **"1 is columns."** 1 is rows, 2 is columns, the same order as `m[row, col]`.
- **"Use apply on a data frame."** It first converts to a matrix, so mixed types become text.

## Explain it back
- What does `apply(m, 2, sd)` return?
- Why is `apply(draws, 2, quantile, ...)` so useful?

*Pass test:* you can get a per-column interval from a matrix of draws.

## Connections
- **Builds on:** [[Matrices in R]]
- **Leads to:** [[lapply()]], [[Percentile Bootstrap Interval]], [[Posterior Draws]]
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
