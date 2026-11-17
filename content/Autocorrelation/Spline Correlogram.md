---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "spline.correlog()"
  - "Nonparametric spatial covariance function"
  - "ncf spline correlogram"
status: seedling
---

# Spline Correlogram

**In one line:** a spline correlogram fits a smooth curve to the correlation between pairs of sites as a function of distance, with a bootstrap confidence band, instead of computing one value per distance class.

> [!info] Before this, it helps to know
> [[Correlogram]] (the binned version) · [[Spline]] (the smoother) · [[Bootstrap]] (the band)

## Start from zero
1. **From the ncf package:** `spline.correlog(x, y, z, resamp = 1000)`.
2. **No distance classes to choose.** The curve is continuous.
3. **The bootstrap band** shows where correlation is clearly above or below zero.
4. **x-intercept:** the distance at which similarity drops to that of random pairs, an estimate of the scale of patchiness.
5. **Slow:** each bootstrap refits the spline over all pairs. The lab warns it can take a while. Start with small `resamp` to test.
6. **Works on raw values or model residuals.**

## In R
```r
# norun (ncf is not installed in the wiki's build environment)
library(ncf); sc <- spline.correlog(x = d$easting, y = d$northing, z = resid(m), resamp = 200); plot(sc); summary(sc)$estimate
```

## In the course
`ncf::spline.correlog()` on pika data in the autocorrelation lab ([[Course Website]]).

## Common confusions
- **"No band means no uncertainty."** Always run the resampling.

## Explain it back
- What does the x-intercept of a spline correlogram estimate?

*Pass test:* you can run and read a spline correlogram.

## Connections
- **Builds on:** [[Correlogram]], [[Spline]], [[Bootstrap]]
- **Leads to:** [[Spatial Autocorrelation]], [[Residual Autocorrelation]]
- **Part of:** [[MOC - Autocorrelation]]

## Flashcards

How does a spline correlogram differ from a classic correlogram?
??
It fits a smooth curve of correlation against distance with a bootstrap band, rather than one value per distance class.
++++
