---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "A matrix in R is a rectangular grid of values that are all the same type, addressed by row and column."
aliases:
  - "matrix()"
  - "Arrays in R"
status: seedling
---

# Matrices in R

A chessboard of numbers: every square holds the same kind of thing, and you name a square by its row and column. A **matrix** in R is a rectangular grid of values that are all of one type, addressed as `m[row, col]`; it is the R version of the maths [[Matrix]]. `matrix(1:6, nrow = 2)` folds a vector into a grid, filling down the columns first, and `cbind()` and `rbind()` glue vectors together as columns or rows. In the code below, `m[2, 3]` is 6, `m[, 1]` is the first column (leaving an index blank means "all"), and `dim(m)` is 2 by 3.

The one-type rule is what separates a matrix from a [[Data Frame]] and what makes matrix algebra possible; one text entry turns the whole matrix into text. Matrix arithmetic has its own operators: `*` multiplies element by element, `%*%` does true matrix multiplication, and `t()` transposes. `apply(m, 1, sum)` runs a function along each row, giving row sums of 9 and 12 ([[apply()]]).

You will rarely build matrices by hand in this course; you will meet them as outputs. A correlation table from `cor()`, the [[Variance-Covariance Matrix|variance-covariance matrix]] of a model's coefficients from `vcov()`, the [[Model Matrix]] a regression is built on, and the draws from a Bayesian fit, with one row per draw and one column per parameter, are all matrices. Knowing how to index them ([[Indexing in R]]) is what lets you pull out the number you need ([[Vectors in R]]).

```r
m <- matrix(1:6, nrow = 2); m      # filled column by column
m[2, 3]; m[, 1]; dim(m)            # 6; first column; 2 3
d <- data.frame(tree = c(10, 30, 50), birds = c(9, 6, 3), shrub = c(5, 9, 4))
round(cor(d), 2)                   # a correlation matrix
vcov(lm(birds ~ tree, d))          # variance-covariance matrix of the coefficients
apply(m, 1, sum)                   # row sums: 9 12
```

## Connections
- **Builds on:** [[Matrix]], [[Vectors in R]]
- **Leads to:** [[apply()]], [[Model Matrix]], [[Indexing in R]], [[Variance-Covariance Matrix]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

How does a matrix differ from a data frame in R?
??
A matrix holds a single type throughout. A data frame may have a different type in each column.
++++

How do you take row 2, column 3 of a matrix m?
??
m[2, 3].
++++
