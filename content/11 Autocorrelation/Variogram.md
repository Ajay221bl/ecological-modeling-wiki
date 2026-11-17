---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
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

**In one line:** a variogram plots half the average squared difference between pairs of values against the distance between them, so it rises as points get less alike.

> [!info] Before this, it helps to know
> [[Distance Classes]] · [[Variance]] (semivariance is half a variance of differences) · [[Spatial Autocorrelation]]

## The everyday picture
An upside-down correlogram. Neighbouring samples differ little (low semivariance). Distant samples differ as much as any random pair (the plateau).

## Start from zero
1. **Semivariance: γ(h) = (1 / 2N(h)) × Σ (z(sᵢ) − z(sⱼ))²** over the N(h) pairs at distance about h.
2. **Rises with distance under positive autocorrelation,** then levels off.
3. **Three features:** nugget (value near distance zero), sill (plateau) and range (distance to the plateau).
4. **Flat variogram:** no spatial correlation (pure nugget).
5. **Two R tools:** `gstat::variogram(z ~ 1, data)` for raw data, and `nlme::Variogram(gls_model, form = ~ x + y)` for model residuals (Zuur Ch7).
6. **A fitted variogram model** (exponential, spherical, Gaussian) gives starting values and choices for a correlation structure.
7. **Assumes stationarity and isotropy.** Directional variograms check isotropy.

## See it
![[Variogram parts.png|700]]
*What to look at:* semivariance starts at the nugget, climbs, and flattens at the sill beyond the range.

## In R
```r
library(gstat); library(sf); set.seed(13); d <- data.frame(x = runif(200, 0, 10), y = runif(200, 0, 10)); d$z <- sin(d$x) + cos(d$y) + rnorm(200, 0, 0.3)
v <- variogram(z ~ 1, st_as_sf(d, coords = c("x", "y"))); round(head(v[, c("dist", "gamma", "np")], 6), 2)       # semivariance rises with distance
```

## In the course
[[Zuur et al. 2009 Ch7]] uses variograms of residuals to detect and choose spatial correlation. Autocorrelation lab ([[Course Website]]).

## Common confusions
- **"High semivariance means strong autocorrelation."** The opposite: low semivariance at short distance means strong autocorrelation.

## Explain it back
- What are the three features of a variogram?

*Pass test:* you can compute and read a variogram.

## Connections
- **Builds on:** [[Distance Classes]], [[Variance]], [[Spatial Autocorrelation]]
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
