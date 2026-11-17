---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "A Gaussian process smooth models a curve or surface through a correlation function between points, like a spatial correlation structure, and mgcv offers a low-rank version as a smooth."
aliases:
  - "bs = \"gp\""
  - "Gaussian process"
  - "GP smooth"
  - "Gaussian Process"
status: seedling
---

# Gaussian Process Smooths

A **Gaussian process smooth** models a curve or surface through a correlation function between points, like a spatial correlation structure, and mgcv offers a low-rank version as a smooth ([[Spatial Correlation Functions]], [[Multivariate Normal Distribution]]). A Gaussian process says values at nearby points are correlated, with correlation decaying with distance by an exponential, Matérn, spherical or similar function. In mgcv, `s(x, bs = "gp", m = c(2, 1))` uses the first m to choose the correlation function and the second to set the range.

It links smoothing with geostatistics (kriging), and is useful when you think in terms of correlation range rather than wiggliness. brms has `gp()` terms for full Bayesian Gaussian processes, which are slow for large n ([[Bayesian GAMs]]). In the code below a GP smooth and the default thin plate smooth give nearly the same fit to a sine wave, with edfs of 8.48 and 8.42 ([[Thin Plate Regression Spline]]).

It is not in the in-scope labs; it is included because it connects spatial correlation structures with smooths ([[Spatial Smooths]]). "Gaussian process" does not mean a normal response; it refers to the curve's prior, not the data family.

```r
library(mgcv); set.seed(22); d <- data.frame(x = runif(200, 0, 10)); d$y <- sin(d$x) + rnorm(200, 0, 0.3)
round(c(edf_gp = summary(gam(y ~ s(x, bs = "gp"), data = d, method = "REML"))$edf, edf_tp = summary(gam(y ~ s(x), data = d, method = "REML"))$edf), 2)
```

## Connections
- **Builds on:** [[Spatial Correlation Functions]], [[Multivariate Normal Distribution]]
- **Leads to:** [[Spatial Smooths]], [[Variogram]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

What is a Gaussian process smooth?
??
A smooth defined by a correlation function between points that decays with distance.
++++
