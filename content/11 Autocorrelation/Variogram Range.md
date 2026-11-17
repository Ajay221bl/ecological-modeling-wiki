---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "The range is the distance at which a variogram reaches its sill, beyond which observations are effectively uncorrelated."
aliases:
  - "Range (variogram)"
  - "Range of spatial correlation"
  - "Practical range"
  - "Range parameter"
status: seedling
---

# Variogram Range

The **range** is the distance at which a [[Variogram]] reaches its [[Sill]]: pairs closer than the range are correlated, and farther pairs are not. For curves that approach the sill gradually, such as the exponential, the practical range is where 95% of the sill is reached, about 3 times the range parameter; the spherical model reaches the sill exactly at its range. In the code below a range parameter of 6 gives a practical range of 18, where the exponential correlation has fallen to e⁻³ = 0.05, shown as the green dashed line in the figure.

In nlme the range is a fitted parameter of `corExp`, `corGaus`, `corSpher` and the others, so check that its units match the coordinates ([[Spatial Correlation Functions]]). Ecologically it is the scale of patches or of the process, such as dispersal distance or the size of a weather system ([[Spatial Scale]]); for sampling design, sites farther apart than the range are roughly independent.

It is described in [[Zuur et al. 2009 Ch7]] with the [[Nugget]]. In spatial statistics "range" is the correlation distance, not the span of the data.

![[Variogram parts.png|700]]
*What to look at:* the green dashed line at 3 × 6 = 18.

```r
range_par <- 6; round(c(practical_range = 3 * range_par, corr_at_practical = exp(-3 * range_par / range_par)), 3)
```

## Connections
- **Builds on:** [[Variogram]], [[Sill]]
- **Leads to:** [[Nugget]], [[Spatial Correlation Functions]], [[Spatial Scale]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

## Flashcards

What is the range of a variogram?
??
The distance at which semivariance reaches the sill, beyond which observations are effectively uncorrelated.
![[Variogram parts.png]]
++++

What is the practical range of an exponential correlation with range parameter r?
??
About 3r (95% of the sill).
++++
