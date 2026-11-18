---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "The nugget is the semivariance a variogram shows at (nearly) zero distance, representing measurement error and variation at scales smaller than the closest sampling distance."
aliases:
  - "Nugget effect"
  - "Nugget variance"
status: seedling
---

# Nugget

In theory two samples taken at the same spot should be identical, so a [[Variogram]] should start at 0. In practice it starts higher, and the jump is the **nugget**: the semivariance at nearly zero distance, representing [[Observation Error|Measurement Error]] and real variation over distances shorter than the closest sample spacing. The name comes from gold mining, where nuggets make neighbouring ore samples differ sharply. In the figure the fitted curve starts at 0.2, not 0.

The nugget/sill ratio is the share of variance that is spatially unstructured, and near 1 means little spatial structure ([[Sill]]). In [[Correlation Structure|nlme correlation structures]], `nugget = TRUE` adds this parameter, as in `corExp(form = ~ x + y, nugget = TRUE)`.

It is explained in [[Zuur et al. 2009 Ch7]] alongside the [[Variogram Range]]. A nugget does not mean the variogram was miscomputed; it is expected in real data.

![[Variogram parts.png|700]]
*What to look at:* the fitted curve starts at 0.2, not at 0.

## Connections
- **Builds on:** [[Variogram]], [[Correlation Structure]]
- **Leads to:** [[Sill]], [[Variogram Range]], [[Observation Error|Measurement Error]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

## Flashcards

What is the nugget of a variogram?
??
The semivariance near zero distance, reflecting measurement error and sub-sampling-scale variation.
![[Variogram parts.png]]
++++
