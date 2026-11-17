---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "Principal component analysis turns many correlated variables into a few uncorrelated summary axes (principal components) that capture as much of the variation as possible."
aliases:
  - "PCA"
  - "Principal components"
  - "prcomp()"
  - "Ordination (PCA)"
status: seedling
---

# Principal Component Analysis

From the right angle, one photo of a teapot shows almost everything about its shape; **principal component analysis** (PCA) finds the best angles for a cloud of data. It turns many correlated variables into a few uncorrelated summary axes, the principal components, that capture as much of the variation as possible ([[Correlation]], [[Collinearity]]). PC1 is the direction of greatest variance, PC2 the next at right angles to PC1, and so on. Standardise variables first when they have different units, with `scale. = TRUE` ([[Standardizing]]).

Loadings show how each original variable contributes to each component. In modelling, PCA can replace several collinear predictors, such as a set of temperature variables, with a few components, and [[Diniz-Filho et al. 2003]] cite this as a way to reduce collinearity. The cost is that components can be hard to interpret ecologically. In the code below four `mtcars` variables (mpg, displacement, horsepower, weight) give PC1 with 85.5% of the variance, with loadings of −0.51, 0.52, 0.47 and 0.50: PC1 is essentially "big, powerful, thirsty car".

Collinearity checks are part of [[Zuur et al. 2010]]'s protocol ([[Variance Inflation Factor]]). PC1 is not the most important variable for the response: PCA ignores the response, and PC1 is just the main axis of predictor variation.

```r
p <- prcomp(mtcars[, c("mpg", "disp", "hp", "wt")], scale. = TRUE)
round(summary(p)$importance[2, ], 3)   # proportion of variance per component
round(p$rotation[, 1], 2)               # loadings on PC1
```

## Connections
- **Builds on:** [[Correlation]], [[Collinearity]], [[Standardizing]]
- **Leads to:** [[Variance Inflation Factor]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

What does PC1 capture?
??
The direction of greatest variance in the (standardised) variables.
++++

Why might you use PCA before regression?
??
To replace collinear predictors with uncorrelated components.
++++
