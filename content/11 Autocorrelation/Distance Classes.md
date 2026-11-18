---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "Distance classes group pairs of sites by how far apart they are, so that autocorrelation can be computed separately for near, middle and far pairs."
aliases:
  - "Distance bins"
  - "Distance class"
status: seedling
---

# Distance Classes

**Distance classes** group pairs of sites by how far apart they are, so that autocorrelation can be computed separately for near, middle and far pairs ([[Spatial Autocorrelation]]). Choose break points, such as 0 to 100 km, 100 to 200 km and so on; for each class compute [[Moran's I]] or the semivariance using only pairs in that class, each with its own [[Spatial Weights Matrix]]; and plot the values against the class midpoints to get a [[Correlogram]] or [[Variogram]].

Equal-width classes are simple, but far classes may contain few pairs. Equal-count classes, with the same number of pairs in each, make the estimates comparably precise, and Diniz-Filho et al. recommend them; they used 10 classes chosen to equalise the number of connections ([[Diniz-Filho et al. 2003]]). The exact choice is arbitrary but rarely changes the overall picture.

The last classes are unreliable, and common advice is to interpret only up to about half the maximum distance. More classes are not always better: they mean fewer pairs per class and noisier estimates.

## Connections
- **Builds on:** [[Spatial Weights Matrix]], [[Spatial Autocorrelation]]
- **Leads to:** [[Correlogram]], [[Variogram]], [[Moran's I]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

## Flashcards

Why do Diniz-Filho et al. prefer distance classes with equal numbers of pairs?
??
So that Moran's I in each class is estimated with similar precision and the correlogram is comparable across classes.
++++
