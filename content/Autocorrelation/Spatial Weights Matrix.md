---
type: atomic
tags:
  - autocorrelation
  - flashcards/eco/autocorrelation
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

**In one line:** a spatial weights matrix records which pairs of sites count as neighbours, and how strongly, so that statistics like Moran's I know which pairs to compare.

> [!info] Before this, it helps to know
> [[Matrix]] (its form) · [[Spatial Autocorrelation]] (what it helps measure)

## Start from zero
1. **Entry wᵢⱼ > 0 if sites i and j are neighbours,** 0 otherwise. The diagonal is 0.
2. **Ways to define neighbours:** within a distance band, the k nearest, sharing a border (polygons), or weights that decline with distance (1/d).
3. **Row-standardised weights** make each row sum to 1, so each site's neighbours average out.
4. **In spdep:** `dnearneigh()` or `knearneigh()` make neighbour lists (`nb`), `nb2listw()` turns them into weights.
5. **Results depend on the choice.** Try more than one definition, ideally one that matches the process's scale.
6. **Distance classes in a correlogram** each use their own binary W (Diniz-Filho et al.).

## In R
```r
library(spdep); set.seed(10); xy <- cbind(runif(8), runif(8)); nb <- knn2nb(knearneigh(xy, k = 2)); W <- nb2mat(nb, style = "B"); W
```

## In the course
Diniz-Filho et al. define Moran's I with a binary W for each distance class ([[Diniz-Filho et al. 2003]]).

## Common confusions
- **"There is one correct W."** It is a modelling choice.

## Explain it back
- Name three ways to define neighbours.

*Pass test:* you can build a weights object in spdep.

## Connections
- **Builds on:** [[Matrix]], [[Spatial Autocorrelation]]
- **Leads to:** [[Moran's I]], [[Distance Classes]], [[Spatial Autoregressive Models]]
- **Part of:** [[MOC - Autocorrelation]]

## Flashcards

What does a spatial weights matrix encode?
??
Which pairs of sites are neighbours and how much weight each pair gets.
++++
