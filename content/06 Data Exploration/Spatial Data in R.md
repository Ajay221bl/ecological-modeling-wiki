---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "sf package"
  - "Simple features"
  - "st_as_sf()"
  - "Spatial data and sf"
status: seedling
---

# Spatial Data in R

**In one line:** spatial data are observations with a location attached, and in R the sf package stores them as a data frame with one extra column holding each row's geometry.

> [!info] Before this, it helps to know
> [[Data Frame]] (what an sf object extends) · [[Coordinate Reference System]] (what makes the numbers into places)

## The everyday picture
A spreadsheet where each row also has a pin stuck in a map. You can still sort, filter and summarise the rows as usual. And you can also ask map questions: how far apart, which is inside which, what is nearby.

## Start from zero
1. **Start with a table** containing coordinate columns.
2. **`st_as_sf(d, coords = c("lon", "lat"), crs = 4326)`** turns it into an sf object.
3. **A `geometry` column appears.** Points, lines or polygons.
4. **dplyr verbs still work.** The geometry sticks to each row.
5. **Declare the CRS.** *Why:* without it the coordinates are bare numbers and distances are meaningless.
6. **`st_transform()`** converts to another CRS, for example to metres.
7. **`st_distance()`, `st_join()`, `st_buffer()`** answer spatial questions.
8. **`geom_sf()`** draws it in ggplot.
9. **Why it matters for modeling:** location is how you check for spatial autocorrelation and extract covariates from maps.

## In R
```r
library(sf)
pts <- data.frame(site = c("A", "B", "C"), lon = c(-100.60, -100.45, -100.20), lat = c(40.95, 41.00, 40.90), rich = c(12, 9, 15))
s <- st_as_sf(pts, coords = c("lon", "lat"), crs = 4326)
class(s); st_crs(s)$epsg
s_utm <- st_transform(s, 32614)                    # UTM zone 14N, metres
round(st_coordinates(s_utm))
round(units::drop_units(st_distance(s_utm)) / 1000, 1)   # pairwise distances in km
```

## In the course
The course labs use sf for route locations in the Loess Canyons and in the spatial autocorrelation lab ([[Course Website]]).

## Common confusions
- **"Longitude and latitude are x and y in metres."** They are angles. Convert to a projected CRS before measuring distance or area.
- **"Order is lat, lon."** In sf, coords are given as x then y, meaning longitude then latitude.

## Explain it back
- What does `st_as_sf()` need to be told?

*Pass test:* you can turn a table with coordinates into an sf object and reproject it.

## Connections
- **Builds on:** [[Data Frame]]
- **Leads to:** [[Coordinate Reference System]], [[UTM Coordinates]], [[Spatial Autocorrelation]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

What is an sf object?
??
A data frame with a geometry column holding each row's spatial feature and a coordinate reference system.
++++

Which function converts a table with coordinate columns into an sf object?
??
st_as_sf(), with coords and crs.
++++

Which function changes an sf object's coordinate system?
??
st_transform().
++++
