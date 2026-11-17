---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
aliases:
  - "Distance bins"
  - "Distance bands"
  - "Distance class"
status: seedling
---

# Distance Classes

**In one line:** distance classes group pairs of sites by how far apart they are, so that autocorrelation can be computed separately for near, middle and far pairs.

> [!info] Before this, it helps to know
> [[Spatial Weights Matrix]] (one per class) · [[Spatial Autocorrelation]]

## Start from zero
1. **Choose break points,** for example 0 to 100 km, 100 to 200 km, and so on.
2. **For each class compute Moran's I** (or semivariance) using only pairs in that class.
3. **Plot the values against class midpoint:** a correlogram (or variogram).
4. **Equal-width classes** are simple, but far classes may contain few pairs.
5. **Equal-count classes** (same number of pairs) make estimates comparably precise. Diniz-Filho et al. recommend this.
6. **The exact choice is arbitrary but rarely changes the overall picture.**
7. **The last classes are unreliable.** Common advice: interpret only up to about half the maximum distance.

## In the course
[[Diniz-Filho et al. 2003]] (10 distance classes, chosen to equalise the number of connections).

## Common confusions
- **"More classes is always better."** More classes means fewer pairs per class and noisier estimates.

## Explain it back
- Why equalise the number of pairs per class?

*Pass test:* you can set sensible distance classes.

## Connections
- **Builds on:** [[Spatial Weights Matrix]], [[Spatial Autocorrelation]]
- **Leads to:** [[Correlogram]], [[Variogram]], [[Moran's I]]
- **Part of:** [[MOC - Autocorrelation]]

## Flashcards

Why do Diniz-Filho et al. prefer distance classes with equal numbers of pairs?
??
So that Moran's I in each class is estimated with similar precision and the correlogram is comparable across classes.
++++
