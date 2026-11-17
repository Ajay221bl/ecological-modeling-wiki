---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "matrix()"
  - "Arrays in R"
status: seedling
---

# Matrices in R

**In one line:** a matrix in R is a rectangular grid of values that are all the same type, addressed by row and column.

> [!info] Before this, it helps to know
> [[Matrix]] (the maths idea) · [[Vectors in R]] (which a matrix is, with a shape)

## The everyday picture
A chessboard of numbers. Every square holds the same kind of thing, and you name a square by its row and column.

## Start from zero
1. **`matrix(values, nrow, ncol)` folds a vector into a grid,** filling down columns.
2. **`cbind()` and `rbind()` glue vectors as columns or rows.**
3. **Index with `m[row, col]`.** Leave one blank for "all".
4. **One type only.** *Why:* that is what makes matrix algebra possible, and it distinguishes a matrix from a data frame.
5. **`%*%` multiplies matrices. `t()` transposes.**
6. **You meet them as outputs.** Correlation tables, model matrices, variance-covariance matrices, and MCMC draws (rows are draws, columns are parameters).

## In R
```r
m <- matrix(1:6, nrow = 2); m      # filled column by column
m[2, 3]; m[, 1]; dim(m)            # 6; first column; 2 3
d <- data.frame(tree = c(10, 30, 50), birds = c(9, 6, 3), shrub = c(5, 9, 4))
round(cor(d), 2)                   # a correlation matrix
vcov(lm(birds ~ tree, d))          # variance-covariance matrix of the coefficients
apply(m, 1, sum)                   # row sums: 9 12
```

## Common confusions
- **"`*` multiplies matrices."** `*` is element by element. Use `%*%`.
- **"A matrix can have a text column."** One text entry turns the whole matrix into text.

## Explain it back
- How does a matrix differ from a data frame?
- What does `m[, 2]` return?

*Pass test:* you can build a matrix, pick out elements and name two places matrices appear in model output.

## Connections
- **Builds on:** [[Matrix]], [[Vectors in R]]
- **Leads to:** [[apply()]], [[Model Matrix]], [[Indexing in R]]
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
