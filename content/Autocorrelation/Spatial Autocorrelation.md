---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "Spatial dependence"
  - "Spatial correlation"
  - "Spatially autocorrelated"
status: seedling
---

# Spatial Autocorrelation

**In one line:** spatial autocorrelation means that values measured at nearby locations are more similar (positive) or more different (negative) than values at randomly paired locations.

> [!info] Before this, it helps to know
> [[Autocorrelation]] (the general idea) · [[Tobler's First Law]] (the intuition) · [[Distance Classes]] (how distance is grouped)

## The everyday picture
Soil moisture in a field: a wet hollow makes several neighbouring samples wet together. Knowing one sample tells you something about the ones beside it.

## Start from zero
1. **Causes:** the environment is patchy (an autocorrelated driver), organisms disperse locally, or the same unmeasured process affects neighbours.
2. **Measured with Moran's I or Geary's c** for pairs of sites within a distance class, or with a variogram.
3. **Plotted against distance** as a correlogram.
4. **Diniz-Filho et al. (2003)** found positive autocorrelation in Palearctic bird richness up to about 1600 km.
5. **For regression, check the residuals.** In that study, adding environmental predictors removed detectable autocorrelation from the residuals.
6. **If residual autocorrelation remains,** model it (GLS with a spatial correlation structure, spatial random effects, smooths of coordinates) or reconsider the design.

## See it
![[Spatial autocorrelation patterns.png|700]]
*What to look at:* clusters of similar colour mean positive spatial autocorrelation.

## In R
```r
library(spdep); set.seed(2); xy <- cbind(runif(150), runif(150)); z <- sin(4 * xy[, 1]) + cos(3 * xy[, 2]) + rnorm(150, 0, 0.4)
lw <- nb2listw(knn2nb(knearneigh(xy, k = 6))); moran.test(z, lw)$estimate          # Moran's I well above its expected value
```

## In the course
Autocorrelation lab, spatial part: pika cortisol metabolites at Niwot Ridge, mapped with `geom_sf` ([[Course Website]]). [[Diniz-Filho et al. 2003]]. [[Zuur et al. 2009 Ch7]].

## Common confusions
- **"Spatial autocorrelation always biases coefficients."** Its main effect is on standard errors. Coefficients may shift when a spatial model reweights the data, as in Diniz-Filho et al.

## Explain it back
- Name two processes that create spatial autocorrelation.

*Pass test:* you can test for and describe spatial autocorrelation.

## Connections
- **Builds on:** [[Autocorrelation]], [[Tobler's First Law]]
- **Leads to:** [[Moran's I]], [[Correlogram]], [[Variogram]], [[Generalized Least Squares]]
- **Part of:** [[MOC - Autocorrelation]], molecular note [[Temporal vs Spatial Autocorrelation]]

## Flashcards

What is spatial autocorrelation?
??
The tendency for values at nearby locations to be more similar (or dissimilar) than values at random pairs of locations.
![[Spatial autocorrelation patterns.png]]
++++
