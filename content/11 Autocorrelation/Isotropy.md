---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "Spatial correlation is isotropic when it depends only on the distance between two points, not on their direction."
aliases:
  - "Isotropic"
  - "Anisotropy"
  - "Anisotropic"
status: seedling
---

# Isotropy

Spatial correlation is **isotropic** when it depends only on the distance between two points, not their direction: two sites 1 km apart are equally correlated whether they lie north-south or east-west ([[Spatial Autocorrelation]]). It is anisotropic when correlation decays more slowly in one direction, as along a river or a prevailing wind.

Standard correlation structures such as `corExp` and omnidirectional variograms assume isotropy ([[Correlation Structure]], [[Variogram]]). Check it with directional variograms, such as `variogram(..., alpha = c(0, 45, 90, 135))` in gstat. Anisotropy is a clue to directional processes such as dispersal.

It is discussed in the [[Dynamic Ecology Autocorrelation Post]] and [[Zuur et al. 2009 Ch7]]. Isotropy is not the same as [[Stationarity]]: stationarity is about location, isotropy about direction.

## Connections
- **Builds on:** [[Spatial Autocorrelation]], [[Stationarity]]
- **Leads to:** [[Variogram]], [[Correlation Structure]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

## Flashcards

What does isotropy mean in spatial statistics?
??
Correlation depends only on distance, not direction.
++++
