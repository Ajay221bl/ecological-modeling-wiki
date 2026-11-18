---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "Moran's I is a statistic that measures spatial autocorrelation by comparing each site's deviation from the mean with its neighbours' deviations, giving values near +1 for strong clustering and below zero for alternation."
aliases:
  - "Moran's I coefficient"
  - "Moran I"
  - "moran.test()"
  - "Moran's I test"
status: seedling
---

# Moran's I

For every pair of neighbouring sites ask whether both are above average, both below, or one of each; count agreements as positive and disagreements as negative, then scale. **Moran's I** does exactly that: I = (n / S) × Σᵢ Σⱼ wᵢⱼ (yᵢ − ȳ)(yⱼ − ȳ) / Σᵢ (yᵢ − ȳ)², where wᵢⱼ comes from the [[Spatial Weights Matrix]] and S is the sum of the weights. It is a scaled spatial [[Covariance]], usually between −1 and +1, though not strictly bounded ([[Correlation]]). Mostly agreement gives a positive I, clustering; mostly disagreement gives a negative I, alternation.

Its [[Expected Value|expected value]] with no autocorrelation is −1/(n − 1), just below zero, not 0. `spdep::moran.test(y, listw)` gives I, its expectation, variance and a p-value from a normal approximation, and `moran.mc()` uses permutations. On residuals, use `lm.morantest()` for an lm or DHARMa's `testSpatialAutocorrelation()` ([[Residual Autocorrelation]]). In the code below a variable with a strong east-west gradient has I = 0.83, while pure noise gives 0.015, near the expected −0.008. Computed for each [[Distance Classes|distance class]], it gives a [[Correlogram]], as in the figure, high at short distances and falling to the expected value.

[[Diniz-Filho et al. 2003]] give the formula and use Moran's I correlograms, and it is used in the autocorrelation lab ([[Course Website]]); its sibling is [[Geary's c]]. Two confusions. Zero does not mean no autocorrelation; the null expectation is −1/(n − 1). And significant Moran's I in the response does not mean the model needs a spatial term: test the residuals.

![[Correlogram.png|700]]
*What to look at:* Moran's I is high at short distances and falls to the dashed expected value.

```r
library(spdep); set.seed(11); xy <- cbind(runif(120), runif(120)); lw <- nb2listw(dnearneigh(xy, 0, 0.15), zero.policy = TRUE)
clustered <- 3 * xy[, 1] + rnorm(120, 0, 0.3); random <- rnorm(120)
round(c(I_clustered = moran.test(clustered, lw, zero.policy = TRUE)$estimate[[1]], I_random = moran.test(random, lw, zero.policy = TRUE)$estimate[[1]], expected = -1 / 119), 3)
```

## Connections
- **Builds on:** [[Spatial Weights Matrix]], [[Covariance]], [[Correlation]], [[Expected Value]], [[Distance Classes]]
- **Leads to:** [[Correlogram]], [[Geary's c]], [[Residual Autocorrelation]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]], molecular note [[Moran's I vs Geary's c]]

## Flashcards

What is the expected value of Moran's I under no spatial autocorrelation?
??
−1/(n − 1).
![[Correlogram.png]]
++++

What does a Moran's I well above its expectation indicate?
??
Positive spatial autocorrelation: neighbours have similar values.
++++
