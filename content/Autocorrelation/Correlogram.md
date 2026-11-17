---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "Spatial correlogram"
  - "Moran correlogram"
  - "correlog()"
status: seedling
---

# Correlogram

**In one line:** a correlogram plots an autocorrelation statistic, usually Moran's I, against distance class, showing how similarity between sites changes with distance.

> [!info] Before this, it helps to know
> [[Moran's I]] (the y-axis) · [[Distance Classes]] (the x-axis)

## The everyday picture
A friendship survey by distance. How alike are next-door neighbours? People on the same street? Across town? The correlogram plots the answer at each distance.

## Start from zero
1. **Compute Moran's I for each distance class.** Plot I against distance.
2. **Common shapes (Diniz-Filho et al.):** positive at short and negative at long distances means a broad gradient. Positive only at short distances means patches, with the crossing point roughly the patch size. Flat near the expectation means no spatial pattern.
3. **Significance of the whole correlogram:** at least one class significant at α/k (Bonferroni, k classes).
4. **Do it for residuals** to check a model, and for raw variables to describe pattern.
5. **The temporal analogue is the ACF plot.**
6. **Spline correlograms** replace classes with a smooth curve and a bootstrap band.

## See it
![[Correlogram.png|700]]
*What to look at:* positive I at short distances, crossing the expected value around 6 cells, slightly negative beyond.

## In R
```r
library(spdep); set.seed(12); xy <- cbind(runif(200, 0, 10), runif(200, 0, 10)); z <- sin(xy[, 1]) + rnorm(200, 0, 0.5)
cg <- sp.correlogram(knn2nb(knearneigh(xy, 8)), z, order = 4, method = "I", zero.policy = TRUE); round(cg$res[, 1], 2)        # I by neighbour order (lag)
```

## In the course
[[Diniz-Filho et al. 2003]] (correlograms of bird richness and environment). Autocorrelation lab ([[Course Website]]). [[Zuur et al. 2009 Ch7]].

## Common confusions
- **"The correlogram must reach zero."** Its baseline is −1/(n − 1), and gradients make it go negative.

## Explain it back
- What correlogram shape indicates patches?

*Pass test:* you can read patch size and gradients from a correlogram.

## Connections
- **Builds on:** [[Moran's I]], [[Distance Classes]]
- **Leads to:** [[Spline Correlogram]], [[Variogram]], [[Autocorrelation Function]]
- **Part of:** [[MOC - Autocorrelation]], molecular note [[Correlogram vs Variogram]]

## Flashcards

What does a correlogram plot?
??
An autocorrelation coefficient (often Moran's I) against distance class.
![[Correlogram.png]]
++++

What correlogram shape indicates a broad-scale gradient?
??
Positive at short distances and negative at long distances.
++++
