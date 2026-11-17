---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "Geary's C"
  - "Geary ratio"
  - "geary.test()"
status: seedling
---

# Geary's c

**In one line:** Geary's c measures spatial autocorrelation from the squared differences between neighbouring values, with 1 meaning none, below 1 meaning positive and above 1 meaning negative autocorrelation.

> [!info] Before this, it helps to know
> [[Spatial Weights Matrix]] · [[Moran's I]] (its more common sibling)

## Start from zero
1. **c = (n − 1) Σᵢ Σⱼ wᵢⱼ (yᵢ − yⱼ)² / (2S Σᵢ (yᵢ − ȳ)²).**
2. **Neighbours similar → small differences → c below 1.**
3. **Expected value 1** under no autocorrelation. Range roughly 0 to 2 or a bit above.
4. **More sensitive to local differences between neighbours,** while Moran's I reflects broader covariance.
5. **Related to the variogram:** both use squared differences.
6. **`spdep::geary.test()`.**

## In R
```r
library(spdep); set.seed(11); xy <- cbind(runif(120), runif(120)); lw <- nb2listw(dnearneigh(xy, 0, 0.15), zero.policy = TRUE)
clustered <- 3 * xy[, 1] + rnorm(120, 0, 0.3); round(geary.test(clustered, lw, zero.policy = TRUE)$estimate[[1]], 3)
```

## In the course
Appears in later course readings ([[Course Website]]).

## Common confusions
- **"Higher c means more clustering."** Lower c means more clustering.

## Explain it back
- What value of Geary's c means no autocorrelation?

*Pass test:* you can interpret c in either direction.

## Connections
- **Builds on:** [[Spatial Weights Matrix]], [[Moran's I]]
- **Leads to:** [[Variogram]], [[Correlogram]]
- **Part of:** [[MOC - Autocorrelation]], molecular note [[Moran's I vs Geary's c]]

## Flashcards

What does Geary's c below 1 indicate?
??
Positive spatial autocorrelation.
++++

What is the expected value of Geary's c under no autocorrelation?
??
1.
++++
