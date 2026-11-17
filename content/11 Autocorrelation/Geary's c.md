---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "Geary's c measures spatial autocorrelation from the squared differences between neighbouring values, with 1 meaning none, below 1 meaning positive and above 1 meaning negative autocorrelation."
aliases:
  - "Geary's C"
  - "Geary ratio"
  - "geary.test()"
status: seedling
---

# Geary's c

**Geary's c** measures spatial autocorrelation from the squared differences between neighbouring values: c = (n − 1) Σᵢ Σⱼ wᵢⱼ (yᵢ − yⱼ)² / (2S Σᵢ (yᵢ − ȳ)²) ([[Spatial Weights Matrix]]). When neighbours are similar their differences are small and c falls below 1; its expected value with no autocorrelation is 1, and it ranges roughly from 0 to 2 or a little above, with values above 1 meaning negative autocorrelation.

It is more sensitive to local differences between neighbours, while [[Moran's I]] reflects broader covariance. Because both use squared differences it is related to the [[Variogram]]. In R use `spdep::geary.test()`; in the code below the same east-west gradient that gave Moran's I of 0.83 gives c = 0.15, far below 1.

It appears in later course readings ([[Course Website]]) and, like Moran's I, can be plotted as a [[Correlogram]]. Higher c does not mean more clustering: lower c means more clustering.

```r
library(spdep); set.seed(11); xy <- cbind(runif(120), runif(120)); lw <- nb2listw(dnearneigh(xy, 0, 0.15), zero.policy = TRUE)
clustered <- 3 * xy[, 1] + rnorm(120, 0, 0.3); round(geary.test(clustered, lw, zero.policy = TRUE)$estimate[[1]], 3)
```

## Connections
- **Builds on:** [[Spatial Weights Matrix]], [[Moran's I]]
- **Leads to:** [[Variogram]], [[Correlogram]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]], molecular note [[Moran's I vs Geary's c]]

## Flashcards

What does Geary's c below 1 indicate?
??
Positive spatial autocorrelation.
++++

What is the expected value of Geary's c under no autocorrelation?
??
1.
++++
