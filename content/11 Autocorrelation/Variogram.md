---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "A variogram plots half the average squared difference between pairs of values against the distance between them, so it rises as points get less alike."
aliases:
  - "Semivariogram"
  - "Semi-variogram"
  - "Semivariance"
  - "variogram()"
  - "Variogram()"
  - "Empirical variogram"
status: seedling
---

# Variogram

A **variogram** is an upside-down correlogram: neighbouring samples differ little, and distant samples differ as much as any random pair. It plots the semivariance, half the average squared difference between pairs of values, against the distance between them: γ(h) = (1 / 2N(h)) × Σ (z(sᵢ) − z(sⱼ))² over the N(h) pairs about distance h apart ([[Distance Classes]], [[Variance]]). Under positive [[Spatial Autocorrelation]] it rises with distance, then levels off; a flat variogram means no spatial correlation.

It has three features, shown in the figure: the [[Nugget]], its value near distance zero; the [[Sill]], its [[Asymptote|plateau]]; and the [[Variogram Range]], the distance to the plateau. There are two R tools: `gstat::variogram(z ~ 1, data)` for raw data and `nlme::Variogram(gls_model, form = ~ x + y)` for model residuals. In the code below a smooth surface plus noise gives semivariances rising from 0.12 at distance 0.2 to 0.62 at 1.7. A fitted variogram model, exponential, spherical or [[Normal Distribution|Gaussian]], guides the choice of a [[Correlation Structure|correlation structure]] ([[Spatial Correlation Functions]]).

It assumes [[Stationarity]] and [[Isotropy]], and directional variograms check isotropy. [[Zuur et al. 2009 Ch7]] uses variograms of residuals to detect and choose spatial correlation, as does the autocorrelation lab ([[Course Website]]); its mirror image is the [[Correlogram]]. High semivariance does not mean strong autocorrelation; the opposite is true, since low semivariance at short distance means strong autocorrelation.

![[Variogram parts.png|700]]
*What to look at:* semivariance starts at the nugget, climbs, and flattens at the sill beyond the range.

```r
library(gstat); library(sf); set.seed(13); d <- data.frame(x = runif(200, 0, 10), y = runif(200, 0, 10)); d$z <- sin(d$x) + cos(d$y) + rnorm(200, 0, 0.3)
v <- variogram(z ~ 1, st_as_sf(d, coords = c("x", "y"))); round(head(v[, c("dist", "gamma", "np")], 6), 2)       # semivariance rises with distance
```

## Connections
- **Builds on:** [[Distance Classes]], [[Variance]], [[Spatial Autocorrelation]], [[Asymptote]], [[Normal Distribution]], [[Correlation Structure]]
- **Leads to:** [[Nugget]], [[Sill]], [[Variogram Range]], [[Spatial Correlation Functions]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]], molecular note [[Correlogram vs Variogram]]

## Flashcards

What does a variogram plot?
??
Semivariance (half the mean squared difference between pairs) against distance.
![[Variogram parts.png]]
++++

How does positive spatial autocorrelation appear on a variogram?
??
Low semivariance at short distances rising to a plateau.
++++
