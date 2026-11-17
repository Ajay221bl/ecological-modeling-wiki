---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "The sill is the plateau a variogram reaches at large distances, equal to the total variance of the data when points far apart are uncorrelated."
aliases:
  - "Variogram sill"
  - "Partial sill"
  - "Total sill"
status: seedling
---

# Sill

Beyond a certain distance, pairs of sites are no more alike than random pairs and the semivariance stops rising. The **sill** is that plateau of the [[Variogram]], the dotted line at 1.0 in the figure, and equals the total [[Variance]] of the data when points far apart are uncorrelated. The partial sill, sill minus [[Nugget]], is the spatially structured part of the variance.

The distance at which the sill is reached is the [[Variogram Range]]. A variogram with no sill, which keeps rising, usually signals a trend in the mean that hasn't been removed, violating [[Stationarity]].

It is described in [[Zuur et al. 2009 Ch7]]. Not every variogram has a sill: a trend makes it rise without levelling.

![[Variogram parts.png|700]]
*What to look at:* the dotted line at 1.0.

## Connections
- **Builds on:** [[Variogram]], [[Variance]]
- **Leads to:** [[Nugget]], [[Variogram Range]], [[Stationarity]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

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
