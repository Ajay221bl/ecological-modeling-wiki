---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "Variogram sill"
  - "Partial sill"
  - "Total sill"
status: seedling
---

# Sill

**In one line:** the sill is the plateau a variogram reaches at large distances, equal to the total variance of the data when points far apart are uncorrelated.

> [!info] Before this, it helps to know
> [[Variogram]] (where it appears) · [[Variance]] (what it equals)

## Start from zero
1. **Beyond a certain distance, pairs are no more alike than random pairs.** Semivariance stops rising.
2. **Total sill ≈ the variance of the variable.**
3. **Partial sill = sill − nugget:** the spatially structured part of the variance.
4. **No sill (keeps rising):** usually a trend in the mean that hasn't been removed. That violates stationarity.

## See it
![[Variogram parts.png|700]]
*What to look at:* the dotted line at 1.0.

## In the course
[[Zuur et al. 2009 Ch7]].

## Common confusions
- **"Every variogram has a sill."** A trend makes it rise without levelling.

## Explain it back
- What does a variogram without a sill suggest?

*Pass test:* you can read and interpret the sill.

## Connections
- **Builds on:** [[Variogram]], [[Variance]]
- **Leads to:** [[Nugget]], [[Variogram Range]], [[Stationarity]]
- **Part of:** [[MOC - Autocorrelation]]

## Flashcards

What is the sill of a variogram?
??
The plateau of semivariance at large distances, approximately the total variance.
![[Variogram parts.png]]
++++

What does a variogram that never levels off suggest?
??
A trend in the mean that has not been removed.
++++
