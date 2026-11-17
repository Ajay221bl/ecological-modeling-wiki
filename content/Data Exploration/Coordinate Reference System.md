---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "CRS"
  - "Projection"
  - "EPSG code"
  - "Datum"
status: seedling
---

# Coordinate Reference System

**In one line:** a coordinate reference system is the rule that says which place on Earth a pair of coordinate numbers refers to.

> [!info] Before this, it helps to know
> [[Spatial Data in R]] (where it is set)

## The everyday picture
A street address needs a city. "12 Main Street" is useless until you know which town. Coordinates (500000, 4530000) are equally useless until you know the system: which zone, which units, measured from where.

## Start from zero
1. **The Earth is a lumpy ball.** A CRS starts with a mathematical model of its shape, called a datum (WGS84, NAD83).
2. **Geographic CRS:** positions as angles, longitude and latitude in degrees. WGS84 lon/lat is EPSG:4326, what GPS units report.
3. **Projected CRS:** the curved surface flattened onto a plane, positions in metres. UTM zones, Albers.
4. **Every flattening distorts something:** area, shape, distance or direction. Projections choose what to preserve.
5. **EPSG codes are catalogue numbers** for CRSs. 4326 is WGS84 lon/lat. 32614 is UTM zone 14 north.
6. **Why you must care:** layers with different CRSs don't line up, and a degree of longitude is not a fixed distance. It is about 111 km at the equator and about 84 km at 41° north.
7. **Rule:** know each layer's CRS, transform everything to one projected CRS before measuring.

## In R
```r
library(sf)
p <- st_sfc(st_point(c(-100.5, 41)), st_point(c(-99.5, 41)), crs = 4326)    # one degree of longitude apart
as.numeric(st_distance(p)[1, 2]) / 1000             # about 84 km at this latitude
q <- st_sfc(st_point(c(-100.5, 0)), st_point(c(-99.5, 0)), crs = 4326)
as.numeric(st_distance(q)[1, 2]) / 1000             # about 111 km at the equator
st_crs(32614)$proj4string
```

## In the course
Needed whenever the labs compute distances between routes for variograms and Moran's I ([[Course Website]]).

## Common confusions
- **"Setting a CRS reprojects the data."** `st_set_crs()` only labels. `st_transform()` recalculates coordinates.

## Explain it back
- What is the difference between a geographic and a projected CRS?

*Pass test:* you can explain why degrees aren't distances.

## Connections
- **Builds on:** [[Spatial Data in R]]
- **Leads to:** [[UTM Coordinates]], [[Variogram]], [[Moran's I]]
- **Part of:** [[MOC - Data Exploration]]

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
