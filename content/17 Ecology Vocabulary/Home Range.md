---
type: atomic
tags:
  - ecology
  - flashcards/eco/ecology
description: "A home range is the area an animal normally uses for its everyday activities of finding food, mating and caring for young, over a stated period."
aliases:
  - "Home ranges"
  - "Core area"
  - "Utilization distribution"
status: seedling
---

# Home Range

Most people spend nearly all of their time within a few kilometres of home: work, shops, school, a park. That everyday area is a person's home range. For an animal, a **home range** is the area it normally uses for finding food, mating and raising young over a stated period, such as a season or a year ([[Habitat]]). It is not the same as a territory, which is the part an animal defends; home ranges of neighbours can overlap.

Home ranges are estimated from location data, usually radio or GPS [[Radio-telemetry Data|telemetry]]. The simplest estimate is the minimum convex polygon, the smallest polygon that encloses all the points; utilization distributions instead say how intensively each part is used, and the "50% core area" is the smallest area holding half of the use. In the code below, 50 simulated locations give a minimum convex polygon of 23.6 square units. Home range size sets the right spacing of survey sites: sites closer together than a home range can share an animal, which breaks the [[Site Independence Assumption]], and it sets the scale over which habitat [[Predictor Variable|covariates]] should be measured ([[Spatial Scale]]).

[[Happe et al. 2020]] chose 1,262 m buffers around each camera so that the three buffers in a hexagon covered 10 to 15 km², roughly the size of a female fisher's 50% core area, the area "likely to be traversed by a fisher within a 6-week sampling interval" ([[Fisher Occupancy Case Study]]). A home range is not a fixed line on a map: its estimate depends on how many locations you have and which method you use.

```r
set.seed(13); xy <- cbind(rnorm(50, 0, 1.5), rnorm(50, 0, 1.5))   # 50 telemetry fixes
h <- chull(xy); poly <- xy[c(h, h[1]), ]
area <- abs(sum(poly[-1, 1] * poly[-nrow(poly), 2] - poly[-nrow(poly), 1] * poly[-1, 2])) / 2
round(area, 1)   # minimum convex polygon area
```

## Connections
- **Builds on:** [[Habitat]], [[Spatial Scale]], [[Radio-telemetry Data]], [[Predictor Variable]]
- **Leads to:** [[Site Independence Assumption]], [[Edge Effects|Edge Effect]]
- **Part of:** [[MOC 19 - Ecology Vocabulary|MOC - Ecology Vocabulary]], molecular note [[Fisher Occupancy Case Study]]

## Flashcards

What is a home range?
??
The area an animal normally uses for food, mating and raising young over a stated period.
++++

Why does home range size matter for occupancy design?
??
Sites closer than a home range can share an animal, breaking site independence; it also sets the scale for habitat covariates.
++++
