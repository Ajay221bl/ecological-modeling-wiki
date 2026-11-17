---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "Moran eigenvector maps"
  - "MEM"
  - "PCNM"
  - "Principal coordinates of neighbour matrices"
  - "Eigenvector filtering"
  - "Spatial filtering"
status: seedling
---

# Spatial Eigenvector Filtering

**In one line:** spatial eigenvector filtering turns the spatial arrangement of sites into a set of map-like variables (eigenvectors) that describe patterns from broad to fine, and adds the useful ones as predictors so that they soak up spatial structure.

> [!info] Before this, it helps to know
> [[Spatial Weights Matrix]] (what is decomposed) · [[Principal Component Analysis]] (the same eigen-decomposition idea) · [[Multiple Regression]]

## The everyday picture
A set of smooth to wiggly "wallpaper" patterns laid over the study area. Pick the patterns that match the leftover structure in your residuals and include them in the model.

## Start from zero
1. **Build a neighbour or distance matrix and double-centre it.**
2. **Its eigenvectors are spatial patterns:** the first ones vary smoothly across the area, later ones vary at finer scales.
3. **Eigenvectors with positive eigenvalues** correspond to positive autocorrelation.
4. **Select a subset** (forward selection, or those that most reduce residual Moran's I).
5. **Add them as ordinary predictors** in lm, glm or glmm. No special software needed afterwards.
6. **Pros:** flexible, works with any model family. **Cons:** selection step adds uncertainty, and eigenvectors can absorb variation shared with environmental predictors.
7. **R packages:** adespatial (`dbmem()`), spdep (`SpatialFiltering()`, `ME()`).

## In R
```r
library(spdep); set.seed(4); xy <- cbind(runif(100), runif(100)); W <- nb2mat(knn2nb(knearneigh(xy, 6)), style = "B"); W <- (W + t(W)) / 2
n <- 100; C <- diag(n) - 1 / n; e <- eigen(C %*% W %*% C, symmetric = TRUE); y <- 2 * e$vectors[, 1] + rnorm(n, 0, 0.1)
round(c(eigenvalue1 = e$values[1], R2_with_first_eigvec = summary(lm(y ~ e$vectors[, 1]))$r.squared), 2)
```

## In the course
Listed among spatial methods in course materials ([[Course Website]]).

## Common confusions
- **"Eigenvector coefficients are interpretable effects."** They are nuisance terms describing spatial pattern.

## Explain it back
- What do early versus late eigenvectors represent?

*Pass test:* you can explain how filtering removes residual autocorrelation.

## Connections
- **Builds on:** [[Spatial Weights Matrix]], [[Principal Component Analysis]], [[Multiple Regression]]
- **Leads to:** [[Spatial Autoregressive Models]], [[Trend Surface Analysis]], [[Residual Autocorrelation]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

## Flashcards

What is spatial eigenvector filtering?
??
Adding eigenvectors of a spatial weights matrix as predictors to absorb spatial structure.
++++
