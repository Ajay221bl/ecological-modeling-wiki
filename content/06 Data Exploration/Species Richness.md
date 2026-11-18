---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "Species richness is the number of different species recorded in a sample or place."
aliases:
  - "Richness"
  - "Number of species"
status: seedling
---

# Species Richness

The number of flavours in an ice-cream shop says nothing about how many tubs of each there are; a shop with 30 flavours has higher richness than one with 5, even if the second sells far more ice cream. **Species richness** is the number of different species recorded in a sample or place. A [[Point Count Survey|point count]] that records 4 [[Eastern Meadowlark|meadowlarks]], 2 dickcissels and 1 grasshopper sparrow has an abundance of 7 birds and a richness of 3 species. You list the species detected and count the distinct names, as the code below does per route with `n_distinct()`.

Richness is a non-negative whole number, so it is modelled with a count distribution, as in [[Poisson Regression]] ([[Count Data]]). It is the response in the course's [[Data Exploration|data exploration]] lab, on bird richness in the [[LOESS Smoother|Loess]] Canyons, and in Homework 3 ([[Course Website]]). Every species counts the same, common or rare.

Two properties need care. Richness rises with [[Sampling Effort]]: more time, area or individuals sampled means more rare species turn up, so compare richness only at equal effort or include effort in the model. And it is *observed* richness: species that were present but missed are not in it, so it depends on [[Detection Probability]] too. That is why richness values from different studies are rarely comparable directly. Richness is also only one component of diversity, which also weighs how evenly individuals are spread among species ([[Diversity Index]]).

```r
library(dplyr)
obs <- data.frame(route = c("A", "A", "A", "A", "B", "B", "B"),
                  species = c("meadowlark", "meadowlark", "dickcissel", "sparrow", "meadowlark", "meadowlark", "meadowlark"))
obs |> group_by(route) |> summarise(abundance = n(), richness = n_distinct(species))
```

## Connections
- **Builds on:** [[Count Data]], [[Sampling Effort]], [[Data Exploration]], [[LOESS Smoother]]
- **Leads to:** [[Diversity Index]], [[Poisson Regression]], [[Detection Probability]], [[Point Count Survey]], [[Eastern Meadowlark]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

What is species richness?
??
The number of distinct species recorded in a sample.
++++

Why must richness comparisons account for sampling effort?
??
More effort detects more rare species, so richness rises with effort.
++++
