---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "Richness"
  - "Number of species"
status: seedling
---

# Species Richness

**In one line:** species richness is the number of different species recorded in a sample or place.

> [!info] Before this, it helps to know
> [[Count Data]] (it is a count) · [[Sampling Effort]] (which it depends on)

## The everyday picture
The number of different flavours in an ice-cream shop. It says nothing about how many tubs of each there are. A shop with 30 flavours has higher richness than one with 5, even if the second sells far more ice cream.

## A tiny example
A point count records 4 meadowlarks, 2 dickcissels, 1 grasshopper sparrow. Abundance is 7 birds. Richness is 3 species.

## Start from zero
1. **List the species detected.**
2. **Count the distinct names.**
3. **It is a non-negative whole number,** so model it with a count distribution.
4. **It rises with effort.** *Why:* more time, area or individuals sampled means more rare species turn up. Compare richness only at equal effort, or model effort.
5. **It is observed richness.** Species present but missed aren't in it.
6. **Every species counts the same,** common or rare.

## In R
```r
library(dplyr)
obs <- data.frame(route = c("A", "A", "A", "A", "B", "B", "B"),
                  species = c("meadowlark", "meadowlark", "dickcissel", "sparrow", "meadowlark", "meadowlark", "meadowlark"))
obs |> group_by(route) |> summarise(abundance = n(), richness = n_distinct(species))
```

## In the course
The response in the data exploration lab (bird richness in the Loess Canyons) and in Homework 3 ([[Course Website]]).

## Common confusions
- **"Richness is diversity."** It is one component. Diversity indices also weigh how evenly individuals are spread among species.
- **"Richness is comparable across studies."** Only with comparable effort and detection.

## Explain it back
- Why does richness depend on effort?

*Pass test:* you can compute richness from a species list and say what it ignores.

## Connections
- **Builds on:** [[Count Data]], [[Sampling Effort]]
- **Leads to:** [[Diversity Index]], [[Poisson Regression]], [[Detection Probability]]
- **Part of:** [[MOC - Data Exploration]]

## Flashcards

What is species richness?
??
The number of distinct species recorded in a sample.
++++

Why must richness comparisons account for sampling effort?
??
More effort detects more rare species, so richness rises with effort.
++++
