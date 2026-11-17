---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "s(lon, lat)"
  - "Spatial smooth"
  - "Smooth of coordinates"
  - "Spatial Smooths s(x, y)"
  - "2-D smooth of location"
status: seedling
---

# Spatial Smooths

**In one line:** a spatial smooth is a two-dimensional smooth of the coordinates that captures spatial pattern in the response not explained by other predictors.

> [!info] Before this, it helps to know
> [[Thin Plate Regression Spline]] · [[Spatial Autocorrelation]]

## Start from zero
1. **`s(easting, northing, k = 50)`:** isotropic thin plate smooth (same units in both directions).
2. **Use projected coordinates** (UTM); on lat-long use `bs = "sos"` (splines on the sphere).
3. **Absorbs broad spatial trends and some residual autocorrelation.** A flexible trend surface.
4. **Guélat and Kéry (2018)** used two-dimensional splines (and CAR) for spatial autocorrelation in N-mixture models.
5. **Watch concurvity:** spatially structured covariates overlap with the spatial smooth.
6. **Check residual variograms** after fitting.

## In R
```r
library(mgcv); set.seed(21); d <- data.frame(e = runif(300), n = runif(300)); d$x <- rnorm(300); d$y <- 0.5 * d$x + sin(3 * d$e) + cos(3 * d$n) + rnorm(300, 0, 0.3)
m0 <- gam(y ~ x, data = d); m1 <- gam(y ~ x + s(e, n, k = 30), data = d, method = "REML"); round(c(AIC_no_space = AIC(m0), AIC_spatial_smooth = AIC(m1)), 1)
```

## In the course
[[Guélat and Kéry 2018]]. GAM lectures ([[Course Website]]).

## Common confusions
- **"A spatial smooth removes all autocorrelation."** It removes broad pattern; check residuals.

## Explain it back
- When should you use bs = "sos"?

*Pass test:* you can add and check a spatial smooth.

## Connections
- **Builds on:** [[Thin Plate Regression Spline]], [[Spatial Autocorrelation]]
- **Leads to:** [[Trend Surface Analysis]], [[Concurvity]], [[Gaussian Process Smooths]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]], molecular note [[Spatial Smooth vs Spatial Correlation Structure]]

## Flashcards

What does s(easting, northing) capture in a GAM?
??
Two-dimensional spatial pattern in the response not explained by other predictors.
++++
