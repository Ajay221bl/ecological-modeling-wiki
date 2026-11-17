---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "Moran's I coefficient"
  - "Moran I"
  - "moran.test()"
  - "Moran's I test"
status: seedling
---

# Moran's I

**In one line:** Moran's I is a statistic that measures spatial autocorrelation by comparing each site's deviation from the mean with its neighbours' deviations, giving values near +1 for strong clustering and below zero for alternation.

> [!info] Before this, it helps to know
> [[Spatial Weights Matrix]] (defines neighbours) · [[Covariance]] (it is a spatial covariance, scaled) · [[Correlation]]

## The everyday picture
For every pair of neighbours ask: are both above average, both below, or one of each? Count agreements as positive and disagreements as negative, then scale. Mostly agreement gives a positive I.

## Start from zero
1. **I = (n / S) × Σᵢ Σⱼ wᵢⱼ (yᵢ − ȳ)(yⱼ − ȳ) / Σᵢ (yᵢ − ȳ)²,** where S is the sum of the weights.
2. **Expected value with no autocorrelation: −1/(n − 1),** just below zero.
3. **Usually between −1 and +1,** though it is not strictly bounded.
4. **Above expected:** positive autocorrelation. Below: negative.
5. **Test:** `spdep::moran.test(y, listw)` gives I, its expectation, variance and a p-value (normal approximation). `moran.mc()` uses permutations.
6. **On residuals,** use `lm.morantest()` for an lm, or DHARMa's `testSpatialAutocorrelation()`.
7. **Computed for each distance class** it gives a correlogram.

## See it
![[Correlogram.png|700]]
*What to look at:* Moran's I is high at short distances and falls to the dashed expected value.

## In R
```r
library(spdep); set.seed(11); xy <- cbind(runif(120), runif(120)); lw <- nb2listw(dnearneigh(xy, 0, 0.15), zero.policy = TRUE)
clustered <- 3 * xy[, 1] + rnorm(120, 0, 0.3); random <- rnorm(120)
round(c(I_clustered = moran.test(clustered, lw, zero.policy = TRUE)$estimate[[1]], I_random = moran.test(random, lw, zero.policy = TRUE)$estimate[[1]], expected = -1 / 119), 3)
```

## In the course
[[Diniz-Filho et al. 2003]] give the formula and use Moran's I correlograms. Autocorrelation lab ([[Course Website]]).

## Common confusions
- **"Zero means no autocorrelation."** The null expectation is −1/(n − 1).
- **"Significant Moran's I in the response means the model needs a spatial term."** Test the residuals.

## Explain it back
- What is the expected value of Moran's I with no autocorrelation?

*Pass test:* you can compute and test Moran's I in R.

## Connections
- **Builds on:** [[Spatial Weights Matrix]], [[Covariance]], [[Correlation]]
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
