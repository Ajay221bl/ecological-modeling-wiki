---
type: atomic
tags:
  - survey-design
  - study-design
  - flashcards/eco/survey
description: "Systematic grid sampling places survey points on an evenly spaced grid laid over the whole area, with the grid's starting corner chosen at random, so no person decides which spots get surveyed."
aliases:
  - "grid sampling"
  - "systematic sampling"
  - "survey grid"
  - "grid points"
status: seedling
---

# Systematic Grid Sampling

You must count birds on a big farm but only have time for 30 stops. Where do you stand? The tempting answers, "where the birds are", "near the gate", "along the [[Mowing|mowed]] path", each quietly tilt the result, because the farm as a whole is not like that. A grid removes the choice. Draw graph paper over the map with lines every 400 m, make every crossing a survey point, and to stop even the grid being "chosen", drop its first corner at a random spot. That is **systematic grid sampling**: "systematic" means by a fixed rule, and the randomness lives in one place only, where the grid starts. The points are a [[Sample]], the part we measure, standing in for the whole [[Population]] of places on the site ([[Population and Sample]]), and at each point observers do a [[Point Count Survey]].

It solves three problems at once. Hidden bias: people pick spots that feel good, while a grid makes every part of the site equally likely to get a point, so the sample represents the site. Even coverage: purely random points can bunch up by chance and leave big gaps, while a grid spreads them so wet corners, tree lines and open middles are visited in proportion to their area. Double counting: if two points sat 50 m apart, the same singing Dickcissel would land on both lists, so spacing points far apart keeps each point's birds mostly its own, which helps the [[Independence of Observations|independence]] the models assume, though it never guarantees it ([[Spatial Autocorrelation]]). Walk through a square site 1,200 m on each side with points every 400 m. Pick a random start, say 130 m east and 270 m north of the corner; add points every 400 m east and north; that gives 3 columns × 3 rows = 9 points. One lands in a flooded slough and is dropped, so 8 are surveyed. That last step is the catch: dropping points is honest, but it means the wettest places are never sampled, so the grid now represents "the reachable part of the site", not the whole site.

Four confusions. Systematic does not mean not random: the random start makes it a random choice among possible grids. A grid does not make points independent: nearby points still share weather, habitat and observers. Grid and roadside points are not the same kind of sample, since roadside points follow a different rule ([[Roadside Surveys]]). And dropping unreachable points is not harmless if the dropped places differ, here the wettest ground ([[Mississippi Alluvial Valley]], [[Flood Masking]]). The grassland bird data release describes exactly this design ([[Roberts et al. 2025]]): points 400 m apart on a grid anchored at a random location, unreachable flooded points removed, roadside points around each site also 400 m apart, and each point sampled 3 times ([[Repeat-Visit Design]]). The bird file has 416 points (the metadata says 424), 238 roadside and 178 grid points, and Camp Robinson is the only site with no roadside points. Why 400 m? The focal-species analysis used birds within 100 m ([[Distance Bands]]), and two 100 m circles 400 m apart are 200 m apart at their nearest edges, so they never overlap; loud birds heard out to 400 m can still be counted at neighbouring points, one more reason the far band is used cautiously. Each point-visit is a [[Sampling Unit]]; [[Hurlbert 1984]] explains why the layout of samples matters.

## Connections
- **Builds on:** [[Sample]], [[Population]], [[Population and Sample]], [[Point Count Survey]], [[Mowing]]
- **Leads to:** [[Independence of Observations]], [[Spatial Autocorrelation]], [[Roadside Surveys]], [[Flood Masking]], [[Repeat-Visit Design]], [[Distance Bands]], [[Sampling Unit]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]]
- **Go deeper:** [[Mississippi Alluvial Valley]], [[Survey Sampling Designs]], [[Roberts et al. 2025]], [[Hurlbert 1984]]

## Flashcards

Why anchor the grid at a random spot instead of at the site's gate?
??
If a person picks the anchor, every point inherits that choice (for example, all points near access roads). A random anchor means no one decides where points fall, so the grid is a fair sample of the site.
++++

Why does dropping flooded grid points matter?::The dropped places differ from the rest (they are the wettest), so the sample now represents only the reachable, drier part of the site.
