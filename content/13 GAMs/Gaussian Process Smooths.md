---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "bs = \"gp\""
  - "Gaussian process"
  - "GP smooth"
  - "Gaussian Process"
status: seedling
---

# Gaussian Process Smooths

**In one line:** a Gaussian process smooth models a curve or surface through a correlation function between points, like a spatial correlation structure, and mgcv offers a low-rank version as a smooth.

> [!info] Before this, it helps to know
> [[Spatial Correlation Functions]] · [[Multivariate Normal Distribution]]

## Start from zero
1. **A Gaussian process says values at nearby points are correlated,** with correlation decaying by a function of distance (exponential, Matérn, spherical...).
2. **`s(x, bs = "gp", m = c(2, 1))`** in mgcv: the first m selects the correlation function, the second the range.
3. **Links smoothing and geostatistics (kriging).**
4. **brms has `gp()` terms** for full Bayesian Gaussian processes (slow for large n).
5. **Useful when you think in terms of correlation range** rather than wiggliness.

## In R
```r
library(mgcv); set.seed(22); d <- data.frame(x = runif(200, 0, 10)); d$y <- sin(d$x) + rnorm(200, 0, 0.3)
round(c(edf_gp = summary(gam(y ~ s(x, bs = "gp"), data = d, method = "REML"))$edf, edf_tp = summary(gam(y ~ s(x), data = d, method = "REML"))$edf), 2)
```

## In the course
Not in the in-scope labs. Included because it connects spatial correlation structures with smooths.

## Common confusions
- **"Gaussian process means normal response."** It refers to the curve's prior, not the data family.

## Explain it back
- What does the range parameter of a GP smooth control?

*Pass test:* you can explain the GP view of smoothing.

## Connections
- **Builds on:** [[Spatial Correlation Functions]], [[Multivariate Normal Distribution]]
- **Leads to:** [[Spatial Smooths]], [[Variogram]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

What is a Gaussian process smooth?
??
A smooth defined by a correlation function between points that decays with distance.
++++
