---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "UTM coordinates give a location as metres east and metres north within one of 60 north-south strips of the globe."
aliases:
  - "UTM"
  - "Universal Transverse Mercator"
  - "Easting and northing"
status: seedling
---

# UTM Coordinates

Peel an orange into 60 thin segments and press each one flat. A thin segment flattens with hardly any stretching, so within one segment a flat grid in metres is [[Accuracy|accurate]]. **UTM** (Universal Transverse Mercator) coordinates give a location as metres east and metres north within one of 60 north-south strips of the globe ([[Coordinate Reference System]]). The zones are each 6° of longitude wide, numbered eastward from 180° west, and each has its own flat grid. The *easting* is metres from the zone's central line, which is given the value 500,000 so eastings are never negative; the *northing* is metres from the equator in the northern hemisphere.

The zone for a longitude is floor((longitude + 180) / 6) + 1, so −100.5° falls in zone 14. Because coordinates are in metres, straight-line distance within a zone is plain Pythagoras: √(Δeasting² + Δnorthing²). The code below converts two sites from longitude-latitude to UTM zone 14 north (EPSG:32614), computes their distance by Pythagoras, and gets the same answer as sf's `st_distance()` ([[Spatial Data in R]]).

This is why the [[Spatial Autocorrelation|spatial autocorrelation]] lab works in UTM: distances in metres are needed to group pairs of sites into [[Distance Classes]] and to build a [[Variogram]] ([[Course Website]]). There are two limits. A coordinate needs its zone to be meaningful, because the same easting and northing occur in every zone, so UTM coordinates are not unique worldwide. And study areas that span two zones need a different projection.

```r
floor((-100.5 + 180) / 6) + 1                         # zone 14
library(sf)
p <- st_transform(st_sfc(st_point(c(-100.60, 40.95)), st_point(c(-100.45, 41.00)), crs = 4326), 32614)
xy <- st_coordinates(p); round(xy)
sqrt(sum((xy[1, ] - xy[2, ])^2)) / 1000               # Pythagoras in km
as.numeric(st_distance(p)[1, 2]) / 1000               # sf agrees
```

## Connections
- **Builds on:** [[Coordinate Reference System]], [[Accuracy]]
- **Leads to:** [[Spatial Data in R]], [[Variogram]], [[Distance Classes]], [[Spatial Autocorrelation]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

What are UTM coordinates?
??
Easting and northing in metres within one of 60 six-degree-wide zones.
++++

Why are UTM coordinates convenient for spatial analysis?
??
Distances can be computed directly in metres with Pythagoras.
++++
