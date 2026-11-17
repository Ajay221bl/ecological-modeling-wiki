---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "UTM"
  - "Universal Transverse Mercator"
  - "Easting and northing"
status: seedling
---

# UTM Coordinates

**In one line:** UTM coordinates give a location as metres east and metres north within one of 60 north-south strips of the globe.

> [!info] Before this, it helps to know
> [[Coordinate Reference System]] (UTM is a family of them)

## The everyday picture
Peeling an orange into 60 thin segments and pressing each flat. A thin segment flattens with hardly any stretching, so within one segment a flat grid in metres is accurate.

## Start from zero
1. **The globe is divided into 60 zones, each 6° of longitude wide,** numbered eastward from 180° west.
2. **Each zone has its own flat grid.**
3. **Easting:** metres from the zone's central line, which is given the value 500 000 so eastings are never negative.
4. **Northing:** metres from the equator (in the northern hemisphere).
5. **Why use it:** coordinates are in metres, so straight-line distance is plain Pythagoras: √(Δeasting² + Δnorthing²).
6. **Limits:** a coordinate needs its zone to be meaningful, and study areas that span zones need another projection.
7. **Finding the zone:** zone = floor((longitude + 180) / 6) + 1. Longitude −100.5° gives zone 14.

## In R
```r
floor((-100.5 + 180) / 6) + 1                         # zone 14
library(sf)
p <- st_transform(st_sfc(st_point(c(-100.60, 40.95)), st_point(c(-100.45, 41.00)), crs = 4326), 32614)
xy <- st_coordinates(p); round(xy)
sqrt(sum((xy[1, ] - xy[2, ])^2)) / 1000               # Pythagoras in km
as.numeric(st_distance(p)[1, 2]) / 1000               # sf agrees
```

## In the course
The spatial autocorrelation lab needs coordinates in metres for distance classes ([[Course Website]]).

## Common confusions
- **"UTM coordinates are unique worldwide."** The same easting and northing occur in every zone.

## Explain it back
- Why is the central line given an easting of 500 000?

*Pass test:* you can find a UTM zone from a longitude and compute a distance.

## Connections
- **Builds on:** [[Coordinate Reference System]]
- **Leads to:** [[Spatial Data in R]], [[Variogram]], [[Distance Classes]]
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
