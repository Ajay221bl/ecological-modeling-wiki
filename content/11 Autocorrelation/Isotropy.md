---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "Isotropic"
  - "Anisotropy"
  - "Anisotropic"
status: seedling
---

# Isotropy

**In one line:** spatial correlation is isotropic when it depends only on the distance between two points, not on their direction.

> [!info] Before this, it helps to know
> [[Spatial Autocorrelation]] · [[Stationarity]] (its partner assumption)

## Start from zero
1. **Isotropic:** two sites 1 km apart are equally correlated whether they lie north-south or east-west.
2. **Anisotropic:** correlation decays more slowly in one direction. Example: along a river or a prevailing wind.
3. **Standard correlation structures (`corExp` and others) and omnidirectional variograms assume isotropy.**
4. **Check with directional variograms** (`variogram(..., alpha = c(0, 45, 90, 135))` in gstat).
5. **Anisotropy is a clue** to directional processes such as dispersal (McGill).

## In the course
[[Dynamic Ecology Autocorrelation Post]]. [[Zuur et al. 2009 Ch7]].

## Common confusions
- **"Isotropy is the same as stationarity."** Stationarity is about location. Isotropy is about direction.

## Explain it back
- How would you check for anisotropy?

*Pass test:* you can explain both terms.

## Connections
- **Builds on:** [[Spatial Autocorrelation]], [[Stationarity]]
- **Leads to:** [[Variogram]], [[Correlation Structure]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

## Flashcards

What does isotropy mean in spatial statistics?
??
Correlation depends only on distance, not direction.
++++
