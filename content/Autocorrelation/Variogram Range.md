---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "Range (variogram)"
  - "Range of spatial correlation"
  - "Practical range"
  - "Range parameter"
status: seedling
---

# Variogram Range

**In one line:** the range is the distance at which a variogram reaches its sill, beyond which observations are effectively uncorrelated.

> [!info] Before this, it helps to know
> [[Variogram]] · [[Sill]]

## Start from zero
1. **Pairs closer than the range are correlated. Farther pairs are not.**
2. **For curves that approach the sill gradually** (exponential), the practical range is where 95% of the sill is reached. For an exponential model that is about 3 times the range parameter.
3. **The spherical model reaches the sill exactly at its range.**
4. **In nlme the range is a fitted parameter** of `corExp`, `corGaus`, `corSpher` and others. Check its units match the coordinates.
5. **Ecological meaning:** the scale of patches or of the process (dispersal distance, size of a weather system).
6. **Sampling design:** sites farther apart than the range are roughly independent.

## See it
![[Variogram parts.png|700]]
*What to look at:* the green dashed line at 3 × 6 = 18.

## In R
```r
range_par <- 6; round(c(practical_range = 3 * range_par, corr_at_practical = exp(-3 * range_par / range_par)), 3)
```

## In the course
[[Zuur et al. 2009 Ch7]].

## Common confusions
- **"Range means the span of the data."** In spatial statistics it is the correlation distance.

## Explain it back
- What is the practical range of an exponential variogram?

*Pass test:* you can read the range and interpret it.

## Connections
- **Builds on:** [[Variogram]], [[Sill]]
- **Leads to:** [[Nugget]], [[Spatial Correlation Functions]], [[Spatial Scale]]
- **Part of:** [[MOC - Autocorrelation]]

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
