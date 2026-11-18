---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
description: "A spatial weights matrix records which pairs of sites count as neighbours, and how strongly, so that statistics like Moran's I know which pairs to compare."
aliases:
  - "W matrix"
  - "Weights matrix"
  - "Neighbour matrix"
  - "Neighbor list"
  - "nb object"
  - "listw"
status: seedling
---

# Spatial Weights Matrix

A **spatial weights matrix** records which pairs of sites count as neighbours, and how strongly, so that statistics like Moran's I know which pairs to compare ([[Matrix]], [[Spatial Autocorrelation]]). Entry wᵢⱼ is positive if sites [[Subscripts and Indexing|i and j]] are neighbours and 0 otherwise, with 0 on the diagonal. Neighbours can be defined as sites within a [[Distance Bands|distance band]], the k nearest, polygons sharing a border, or with weights that decline with distance such as 1/d. Row-standardised weights make each row sum to 1, so each site's neighbours average out.

In spdep, `dnearneigh()` or `knearneigh()` makes neighbour lists (`nb`) and `nb2listw()` turns them into weights. The code below builds a binary matrix for 8 random sites, each row marking that site's 2 nearest neighbours. Nearness is not always mutual, so the matrix need not be symmetric: site 5 counts site 7 as a neighbour, but site 7's two nearest are sites 2 and 8.

Results depend on the choice, so try more than one definition, ideally one matching the process's scale. In a correlogram each distance class uses its own binary W, as in Diniz-Filho et al. ([[Distance Classes]], [[Moran's I]], [[Diniz-Filho et al. 2003]]); the same matrices define [[Spatial Autoregressive Models]]. There is no one correct W: it is a modelling choice.

```r
library(spdep); set.seed(10); xy <- cbind(runif(8), runif(8)); nb <- knn2nb(knearneigh(xy, k = 2)); W <- nb2mat(nb, style = "B"); W
```

## Connections
- **Builds on:** [[Matrix]], [[Spatial Autocorrelation]], [[Subscripts and Indexing]]
- **Leads to:** [[Moran's I]], [[Distance Classes]], [[Spatial Autoregressive Models]], [[Distance Bands]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation]]

## Flashcards

What does a spatial weights matrix encode?
??
Which pairs of sites are neighbours and how much weight each pair gets.
++++
