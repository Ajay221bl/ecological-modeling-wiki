---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "Spatial autocorrelation means that values measured at nearby locations are more similar (positive) or more different (negative) than values at randomly paired locations."
aliases:
  - "Spatial dependence"
  - "Spatial correlation"
  - "Spatially autocorrelated"
status: seedling
---

# Spatial Autocorrelation

A wet hollow in a field makes several neighbouring soil samples wet together, so knowing one sample tells you something about the ones beside it. **Spatial autocorrelation** means values at nearby locations are more similar (positive) or more different (negative) than values at randomly paired locations ([[Autocorrelation]], [[Tobler's First Law]]). Its causes are a patchy environment, local dispersal of organisms, and unmeasured processes that affect neighbours alike.

It is measured with [[Moran's I]] or [[Geary's c]] for pairs of sites within a distance class ([[Distance Classes]]), or with a [[Variogram]], and plotted against distance as a [[Correlogram]]. In the figure, clusters of similar colour mean [[Positive Autocorrelation|positive spatial autocorrelation]]. In the code below a smooth surface plus noise at 150 random sites gives Moran's I of 0.82, far above its [[Expected Value|expected value]] of −0.007. Diniz-Filho et al. (2003) found positive autocorrelation in Palearctic bird [[Species Richness|richness]] up to about 1,600 km.

For regression, check the residuals: in that study, adding environmental [[Predictor Variable|predictors]] removed detectable autocorrelation from the residuals ([[Residual Autocorrelation]]). If residual autocorrelation remains, model it with [[Generalized Least Squares]] and a spatial correlation structure, spatial [[Random Effect|random effects]] or smooths of coordinates, or reconsider the design. The lab's spatial part maps pika cortisol metabolites at Niwot Ridge with `geom_sf` ([[Course Website]], [[Diniz-Filho et al. 2003]], [[Zuur et al. 2009 Ch7]]). Spatial autocorrelation does not always bias coefficients; its main effect is on standard errors, though coefficients may shift when a spatial model reweights the data. Its counterpart in time is [[Temporal Autocorrelation]].

![[Spatial autocorrelation patterns.png|700]]
*What to look at:* clusters of similar colour mean positive spatial autocorrelation.

```r
library(spdep); set.seed(2); xy <- cbind(runif(150), runif(150)); z <- sin(4 * xy[, 1]) + cos(3 * xy[, 2]) + rnorm(150, 0, 0.4)
lw <- nb2listw(knn2nb(knearneigh(xy, k = 6))); moran.test(z, lw)$estimate          # Moran's I well above its expected value
```

## Connections
- **Builds on:** [[Autocorrelation]], [[Tobler's First Law]], [[Positive Autocorrelation]], [[Expected Value]], [[Species Richness]], [[Predictor Variable]]
- **Leads to:** [[Moran's I]], [[Correlogram]], [[Variogram]], [[Generalized Least Squares]], [[Random Effect]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]], molecular note [[Temporal vs Spatial Autocorrelation]]

## Flashcards

What is spatial autocorrelation?
??
The tendency for values at nearby locations to be more similar (or dissimilar) than values at random pairs of locations.
![[Spatial autocorrelation patterns.png]]
++++
