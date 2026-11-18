---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "A correlogram plots an autocorrelation statistic, usually Moran's I, against distance class, showing how similarity between sites changes with distance."
aliases:
  - "Spatial correlogram"
  - "Moran correlogram"
  - "correlog()"
status: seedling
---

# Correlogram

A friendship survey by distance asks how alike next-door neighbours are, then people on the same street, then across town. A **correlogram** plots an autocorrelation statistic, usually [[Moran's I]], against distance class, showing how similarity between sites changes with distance ([[Distance Classes]]). Compute Moran's I for each class and plot it against distance; the figure shows positive I at short distances, crossing the [[Expected Value|expected value]] around 6 cells and slightly negative beyond.

Diniz-Filho et al. describe the common shapes. Positive at short and negative at long distances means a broad gradient; positive only at short distances means patches, with the crossing point roughly the [[Landscape Metrics|patch size]]; flat near the expectation means no spatial pattern. The whole correlogram is significant if at least one class is significant at α/k, a Bonferroni correction for k classes. In the code below a sine-wave pattern across 200 sites gives Moran's I of 0.55, 0.30, 0.06 and −0.19 for neighbour orders 1 to 4.

Do it for residuals to check a model and for raw variables to describe a pattern ([[Residual Autocorrelation]]). The temporal analogue is the [[Autocorrelation Function]] plot, a smooth version is the [[Spline Correlogram]], and the mirror-image tool is the [[Variogram]] ([[Diniz-Filho et al. 2003]], [[Zuur et al. 2009 Ch7]], [[Course Website]]). The correlogram need not reach zero: its baseline is −1/(n − 1), and gradients make it go negative.

![[Correlogram.png|700]]
*What to look at:* positive I at short distances, crossing the expected value around 6 cells, slightly negative beyond.

```r
library(spdep); set.seed(12); xy <- cbind(runif(200, 0, 10), runif(200, 0, 10)); z <- sin(xy[, 1]) + rnorm(200, 0, 0.5)
cg <- sp.correlogram(knn2nb(knearneigh(xy, 8)), z, order = 4, method = "I", zero.policy = TRUE); round(cg$res[, 1], 2)        # I by neighbour order (lag)
```

## Connections
- **Builds on:** [[Moran's I]], [[Distance Classes]], [[Expected Value]]
- **Leads to:** [[Spline Correlogram]], [[Variogram]], [[Autocorrelation Function]], [[Landscape Metrics]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]], molecular note [[Correlogram vs Variogram]]

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
