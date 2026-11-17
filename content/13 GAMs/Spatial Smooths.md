---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "A spatial smooth is a two-dimensional smooth of the coordinates that captures spatial pattern in the response not explained by other predictors."
aliases:
  - "s(lon, lat)"
  - "Spatial smooth"
  - "Smooth of coordinates"
  - "Spatial Smooths s(x, y)"
  - "2-D smooth of location"
status: seedling
---

# Spatial Smooths

A **spatial smooth** is a two-dimensional smooth of the coordinates that captures spatial pattern in the response not explained by other predictors ([[Thin Plate Regression Spline]], [[Spatial Autocorrelation]]). `s(easting, northing, k = 50)` is an isotropic thin plate smooth, which needs the same units in both directions, so use projected coordinates such as UTM; on latitude and longitude use `bs = "sos"`, splines on the sphere. It acts as a flexible trend surface that absorbs broad spatial trends and some residual autocorrelation.

Watch for [[Concurvity]], since spatially structured covariates overlap with the spatial smooth, and check residual variograms after fitting ([[Variogram]]). In the code below the response has a spatial pattern plus a covariate effect: AIC is 723.8 without space and 160.5 with `s(e, n, k = 30)`.

[[Guélat and Kéry 2018]] used two-dimensional splines, and CAR models, for spatial autocorrelation in N-mixture models ([[Course Website]]). A spatial smooth doesn't remove all autocorrelation; it removes broad pattern, so check the residuals.

```r
library(mgcv); set.seed(21); d <- data.frame(e = runif(300), n = runif(300)); d$x <- rnorm(300); d$y <- 0.5 * d$x + sin(3 * d$e) + cos(3 * d$n) + rnorm(300, 0, 0.3)
m0 <- gam(y ~ x, data = d); m1 <- gam(y ~ x + s(e, n, k = 30), data = d, method = "REML"); round(c(AIC_no_space = AIC(m0), AIC_spatial_smooth = AIC(m1)), 1)
```

## Connections
- **Builds on:** [[Thin Plate Regression Spline]], [[Spatial Autocorrelation]]
- **Leads to:** [[Trend Surface Analysis]], [[Concurvity]], [[Gaussian Process Smooths]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]], molecular note [[Spatial Smooth vs Spatial Correlation Structure]]

## Flashcards

What does s(easting, northing) capture in a GAM?
??
Two-dimensional spatial pattern in the response not explained by other predictors.
++++
