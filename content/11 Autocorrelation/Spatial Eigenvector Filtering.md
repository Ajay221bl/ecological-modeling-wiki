---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "Spatial eigenvector filtering turns the spatial arrangement of sites into a set of map-like variables (eigenvectors) that describe patterns from broad to fine, and adds the useful ones as predictors so that they soak up spatial structure."
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

Imagine a set of "wallpaper" patterns laid over the study area, from smooth to wiggly, and picking the ones that match the leftover structure in your residuals. **Spatial eigenvector filtering**, also called Moran eigenvector maps (MEM) or PCNM, turns the spatial arrangement of sites into such map-like variables and adds the useful ones as predictors to soak up spatial structure. Build a neighbour or distance matrix and double-centre it ([[Spatial Weights Matrix]]); its eigenvectors are spatial patterns, the first varying smoothly across the area and later ones at finer scales, with positive eigenvalues corresponding to positive autocorrelation. This is the same eigen-decomposition idea as [[Principal Component Analysis]].

Select a subset, by forward selection or by which most reduce residual Moran's I, and add them as ordinary predictors in an lm, glm or glmm ([[Multiple Regression]]); no special software is needed afterwards. In the code below a response that follows the first eigenvector of a 100-site neighbour matrix is explained by that eigenvector with R² = 0.79. In R the adespatial package provides `dbmem()` and spdep `SpatialFiltering()` and `ME()`.

It is flexible and works with any model family, but the selection step adds uncertainty and eigenvectors can absorb variation shared with environmental predictors ([[Residual Autocorrelation]]). It is one of the spatial methods listed in course materials, alongside [[Spatial Autoregressive Models]] and [[Trend Surface Analysis]] ([[Course Website]]). Eigenvector coefficients are not interpretable effects; they are nuisance terms describing spatial pattern.

```r
library(spdep); set.seed(4); xy <- cbind(runif(100), runif(100)); W <- nb2mat(knn2nb(knearneigh(xy, 6)), style = "B"); W <- (W + t(W)) / 2
n <- 100; C <- diag(n) - 1 / n; e <- eigen(C %*% W %*% C, symmetric = TRUE); y <- 2 * e$vectors[, 1] + rnorm(n, 0, 0.1)
round(c(eigenvalue1 = e$values[1], R2_with_first_eigvec = summary(lm(y ~ e$vectors[, 1]))$r.squared), 2)
```

## Connections
- **Builds on:** [[Spatial Weights Matrix]], [[Principal Component Analysis]], [[Multiple Regression]]
- **Leads to:** [[Spatial Autoregressive Models]], [[Trend Surface Analysis]], [[Residual Autocorrelation]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

## Flashcards

What is spatial eigenvector filtering?
??
Adding eigenvectors of a spatial weights matrix as predictors to absorb spatial structure.
++++
