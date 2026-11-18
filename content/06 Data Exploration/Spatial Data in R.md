---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "Spatial data are observations with a location attached, and in R the sf package stores them as a data frame with one extra column holding each row's geometry."
aliases:
  - "sf package"
  - "Simple features"
  - "st_as_sf()"
  - "Spatial data and sf"
status: seedling
---

# Spatial Data in R

Imagine a spreadsheet in which each row also has a pin stuck in a map. You can still sort, filter and summarise the rows as usual, and you can also ask map questions: how far apart, which is inside which, what is nearby. **Spatial data** are observations with a location attached, and in R the sf ("simple features") package stores them as a [[Data Frame]] with one extra column, `geometry`, holding each row's point, line or polygon. `st_as_sf(d, coords = c("lon", "lat"), crs = 4326)` turns a table with coordinate columns into an sf object; note that coordinates are given as x then y, meaning longitude then latitude. dplyr verbs still work, with the geometry sticking to each row, and `geom_sf()` draws it in ggplot.

The `crs` argument declares the [[Coordinate Reference System]], and it is essential: without it the coordinates are bare numbers and distances are meaningless. Longitude and latitude are angles, not metres, so before measuring distance or area convert to a projected system with `st_transform()`. In the code below, three bird-count sites are converted to [[UTM Coordinates]] in zone 14 north, in metres, and `st_distance()` gives the distances between them in kilometres. Other functions answer other spatial questions: `st_join()` attaches map attributes to points and `st_buffer()` draws zones around them.

Location matters for modeling because it is how you check for [[Spatial Autocorrelation]], where nearby sites resemble each other more than distant ones, and how [[Predictor Variable|covariates]] such as land cover are extracted from maps. The course labs use sf for the [[LOESS Smoother|Loess]] Canyons route locations and in the spatial autocorrelation lab ([[Course Website]]).

```r
library(sf)
pts <- data.frame(site = c("A", "B", "C"), lon = c(-100.60, -100.45, -100.20), lat = c(40.95, 41.00, 40.90), rich = c(12, 9, 15))
s <- st_as_sf(pts, coords = c("lon", "lat"), crs = 4326)
class(s); st_crs(s)$epsg
s_utm <- st_transform(s, 32614)                    # UTM zone 14N, metres
round(st_coordinates(s_utm))
round(units::drop_units(st_distance(s_utm)) / 1000, 1)   # pairwise distances in km
```

## Connections
- **Builds on:** [[Data Frame]], [[Predictor Variable]], [[LOESS Smoother]]
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
