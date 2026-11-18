---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "A spline correlogram fits a smooth curve to the correlation between pairs of sites as a function of distance, with a bootstrap confidence band, instead of computing one value per distance class."
aliases:
  - "spline.correlog()"
  - "Nonparametric spatial covariance function"
  - "ncf spline correlogram"
status: seedling
---

# Spline Correlogram

A **spline correlogram** fits a smooth curve, a [[Spline]], to the correlation between pairs of sites as a function of distance, with a [[Bootstrap]] [[Confidence Envelopes|confidence band]], instead of computing one value per [[Distance Classes|distance class]] ([[Correlogram]]). It comes from the ncf package as `spline.correlog(x, y, z, resamp = 1000)`. There are no distance classes to choose, and the band shows where correlation is clearly above or below zero.

Its x-intercept, the distance at which similarity drops to that of random pairs, estimates the scale of patchiness ([[Spatial Autocorrelation]]). It works on raw values or model residuals ([[Residual Autocorrelation]]). The code below, not run in the wiki build because ncf is not installed there, applies it to a model's residuals with 200 resamples.

It is slow, since each bootstrap refits the spline over all pairs, and the lab warns it can take a while, so start with a small `resamp` to test. It is used on the pika data in the autocorrelation lab ([[Course Website]]). Always run the resampling: no band does not mean no uncertainty.

```r
# norun (ncf is not installed in the wiki's build environment)
library(ncf); sc <- spline.correlog(x = d$easting, y = d$northing, z = resid(m), resamp = 200); plot(sc); summary(sc)$estimate
```

## Connections
- **Builds on:** [[Correlogram]], [[Spline]], [[Bootstrap]], [[Distance Classes]]
- **Leads to:** [[Spatial Autocorrelation]], [[Residual Autocorrelation]], [[Confidence Envelopes]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

## Flashcards

How does a spline correlogram differ from a classic correlogram?
??
It fits a smooth curve of correlation against distance with a bootstrap band, rather than one value per distance class.
++++
