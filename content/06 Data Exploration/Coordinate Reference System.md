---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "A coordinate reference system is the rule that says which place on Earth a pair of coordinate numbers refers to."
aliases:
  - "CRS"
  - "Projection"
  - "EPSG code"
  - "Datum"
status: seedling
---

# Coordinate Reference System

A street address needs a city: "12 Main Street" is useless until you know which town. Coordinates such as (500000, 4530000) are equally useless until you know the system they belong to. A **coordinate reference system** (CRS) is the rule that says which place on Earth a pair of coordinate numbers refers to ([[Spatial Data in R]]). It starts with a *datum*, a [[Analytical Model|mathematical model]] of the Earth's lumpy shape, such as WGS84 or NAD83. A *geographic* CRS gives positions as angles, longitude and latitude in degrees; WGS84 longitude-latitude, what GPS units report, has the catalogue number EPSG:4326. A *projected* CRS flattens the curved surface onto a plane and gives positions in metres, as UTM zones and Albers projections do.

Every flattening distorts something, area, shape, distance or direction, and each projection chooses what to preserve. Geographic coordinates have their own trap: a degree of longitude is not a fixed distance. It is about 111 km at the equator and about 84 km at 41° north, as the code below confirms, because meridians converge toward the poles. EPSG codes are catalogue numbers for CRSs: 4326 is WGS84 longitude-latitude, and 32614 is UTM zone 14 north ([[UTM Coordinates]]).

You must care because layers in different CRSs do not line up, and distances computed from degrees are wrong. The rule is to know each layer's CRS and transform everything to one projected CRS before measuring, as the labs must before computing distances between routes for a [[Variogram]] or [[Moran's I]] ([[Course Website]]). One confusion: `st_set_crs()` only labels data with a CRS, assuming the numbers are already in it, while `st_transform()` actually recalculates the coordinates.

```r
library(sf)
p <- st_sfc(st_point(c(-100.5, 41)), st_point(c(-99.5, 41)), crs = 4326)    # one degree of longitude apart
as.numeric(st_distance(p)[1, 2]) / 1000             # about 84 km at this latitude
q <- st_sfc(st_point(c(-100.5, 0)), st_point(c(-99.5, 0)), crs = 4326)
as.numeric(st_distance(q)[1, 2]) / 1000             # about 111 km at the equator
st_crs(32614)$proj4string
```

## Connections
- **Builds on:** [[Spatial Data in R]], [[Analytical Model]]
- **Leads to:** [[UTM Coordinates]], [[Variogram]], [[Moran's I]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

What is a coordinate reference system?
??
The definition that ties coordinate numbers to locations on Earth: datum, units and projection.
++++

What is EPSG:4326?
??
WGS84 longitude and latitude in degrees.
++++

Why transform to a projected CRS before computing distances?
??
Degrees are angles whose ground length varies with latitude. Projected coordinates are in metres.
++++
