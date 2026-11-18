---
type: atomic
tags:
  - survey-design
  - data
  - flashcards/eco/survey
description: "Distance bands are rings drawn around a point-count observer (such as 0-50 m, 50-100 m and 100-400 m); each animal is tallied in the ring it was in."
aliases:
  - "Dist_50"
  - "Dist_100"
  - "Dist_400"
  - "distance band"
status: seedling
---

# Distance Bands

A bird singing 20 m away is almost impossible to miss; one singing 300 m away, with wind in the grass, is easy to miss. So during a [[Point Count Survey]] (counting birds from a fixed spot for a few minutes) it helps to note how far away each bird was. Instead of guessing exact distances, observers use a few rings, like a dartboard centred on their feet, and tally each bird in one of them: inside 50 m, 50 to 100 m, or 100 to 400 m. These rings are **distance bands**. They split each [[Count Data|count]] (a whole [[Abundance|number of individuals]]) by distance, so a species' total at a visit is the sum of its bands.

Why bother? Because the [[Detection Probability]], the chance of noticing a bird that is there, drops with distance. Knowing the ring lets an analyst use only near birds, say within 100 m, where detection is more even from point to point, or model how detection fades with distance, which is *[[Distance Sampling|distance sampling]]*: Powell and Gale note that program Distance selects a model for how detection probability declines with distance from a transect or point ([[Powell and Gale 2015 Ch4]], p. 58; [[Powell and Gale 2015 Ch3]], p. 22). Without bands, two points could differ in counts just because one is more open or quieter. The rings also have very different areas, since a circle's area is π × radius². The circle to 50 m is about 7,900 m²; to 100 m about 31,400 m², so the 50 to 100 m ring alone is about 23,600 m²; to 400 m about 503,000 m², so the outer ring is about 471,000 m², roughly 15 times the whole inner 100 m circle. If birds were spread evenly and all detected, the outer ring should hold far more birds than the inner two combined. In the grassland bird data the totals are 5,311 individuals at 0 to 50 m (43%), 4,968 at 50 to 100 m (40%) and only 2,062 at 100 to 400 m (17%): the biggest ring holds the fewest birds, which is what you expect when far birds are often missed ([[Imperfect Detection]]).

Three confusions: fewer birds far away usually means fewer far birds were noticed, not fewer living there; the bands are the count split by distance, not separate counts; and `Dist_100` means the 50 to 100 m ring only, not 0 to 100 m. In the project's columns ([[README]]) `Dist_50`, `Dist_100` and `Dist_400` hold the three rings. [[Species Richness]] counts a species if it appears in any band, so a far detection counts the same as a near one, and since Oct 13 the wrangling script uses the bands to tell ground birds from fly-overs, keeping a row when `coalesce(Dist_50, 0) + coalesce(Dist_100, 0) + coalesce(Dist_400, 0) > 0`, which keeps the 90 rows with both ground and fly-over counts ([[Fly-over Detections]]). `Dist_50` has 1 [[Missing Values|missing value]], which `coalesce()` treats as 0, and 2 rows have zero in every band and in `FlyOver` (CR31 on 5/18/2023, DC101 on 6/23/2022), dropped by the filter and worth asking Dr. Roberts about ([[Open Questions]]). A possible robustness check is to recompute richness with only detections within 100 m and see whether the site pattern holds; the occupancy analysis already used that radius for [[Focal Species|focal species]] ([[Loggerhead Shrike]]).

## Connections
- **Builds on:** [[Point Count Survey]], [[Count Data]], [[Detection Probability]], [[Abundance]], [[Distance Sampling]], [[Focal Species]]
- **Leads to:** [[Imperfect Detection]], [[Species Richness]], [[Fly-over Detections]], [[Missing Values]], [[README]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]]
- **Go deeper:** [[Powell and Gale 2015 Ch4]], [[Powell and Gale 2015 Ch3]], [[Open Questions]], [[Loggerhead Shrike]], [[Distance Classes]]

## Flashcards

Why is "fewest birds recorded in the 100-400 m band" suspicious, given that band's area?
??
The 100-400 m ring covers about 15 times the area of the inner 100 m circle, so with even spacing and perfect detection it should hold the most birds. Few records there suggest many distant birds are missed.
++++

What does Dist_100 mean in the grassland bird data?::Individuals detected 50 to 100 m from the observer (not 0 to 100 m).
