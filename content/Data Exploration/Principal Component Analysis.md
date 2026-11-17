---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "PCA"
  - "Principal components"
  - "prcomp()"
  - "Ordination (PCA)"
status: seedling
---

# Principal Component Analysis

**In one line:** principal component analysis turns many correlated variables into a few uncorrelated summary axes (principal components) that capture as much of the variation as possible.

> [!info] Before this, it helps to know
> [[Correlation]] · [[Collinearity]] · [[Standardizing]]

## The everyday picture
Photographing a teapot. From the right angle, one photo shows almost everything about its shape. PCA finds the best angles for a cloud of data.

## Start from zero
1. **PC1** is the direction of greatest variance; PC2 the next, at right angles to PC1, and so on.
2. **Standardise variables first** when they have different units (`scale. = TRUE`).
3. **Loadings** show how each original variable contributes to each component.
4. **Uses in modeling:** replace several collinear predictors (temperature variables) with a few components (Diniz-Filho et al. 2003 cite this as a way to reduce collinearity).
5. **Cost:** components can be hard to interpret ecologically.

## In R
```r
p <- prcomp(mtcars[, c("mpg", "disp", "hp", "wt")], scale. = TRUE)
round(summary(p)$importance[2, ], 3)   # proportion of variance per component
round(p$rotation[, 1], 2)               # loadings on PC1
```

## In the course
[[Zuur et al. 2010]] (collinearity). [[Diniz-Filho et al. 2003]].

## Common confusions
- **"PC1 is the most important variable for the response."** PCA ignores the response; PC1 is just the main axis of predictor variation.

## Explain it back
- Why standardise before PCA?

*Pass test:* you can run a PCA and read its output.

## Connections
- **Builds on:** [[Correlation]], [[Collinearity]], [[Standardizing]]
- **Leads to:** [[Variance Inflation Factor]]
- **Part of:** [[MOC - Data Exploration]]

## Flashcards

What does PC1 capture?
??
The direction of greatest variance in the (standardised) variables.
++++

Why might you use PCA before regression?
??
To replace collinear predictors with uncorrelated components.
++++
