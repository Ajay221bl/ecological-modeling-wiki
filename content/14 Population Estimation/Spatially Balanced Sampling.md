---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Spatially balanced sampling picks survey sites at random but spread evenly over the study area, so no region is over- or under-sampled by chance; GRTS is the standard way to do it."
aliases:
  - "GRTS"
  - "Generalized random tessellation stratified sampling"
  - "Spatially balanced design"
  - "GRTS sampling"
status: seedling
---

# Spatially Balanced Sampling

If you draw 20 house numbers out of a hat for a street survey, pure chance can give you 8 houses at one end and none at the other. Spreading the picks evenly but still by chance fixes that. **Spatially balanced sampling** picks survey sites at random but spread evenly over the study area, so no region is over- or under-sampled by chance ([[Random Sampling]], [[Survey Sampling Designs]]). The standard method is GRTS, generalized random tessellation stratified sampling (Stevens and Olsen 2004): it orders map cells along a space-filling path in a randomised way and then samples that path systematically, so the chosen sites are random yet evenly spread, and any first block of them is spread evenly too.

That last property is what makes it handy for monitoring. A list of sites can be split into yearly "panels" that each cover the whole area, and dropped sites can be replaced from the next on the list without breaking the balance. In R it is done with the spsurvey package's `grts()`. The base-R code below shows the problem it solves: 30 sites drawn completely at random from a 20 × 20 grid have a median nearest-neighbour distance of 2 cells and some sit right next to each other (1 cell apart), while 30 sites from a regular, randomly shifted grid all sit at least 3 cells apart ([[Site Independence Assumption]]).

[[Happe et al. 2020]] laid a grid of 24 km² hexagons over the Olympic Peninsula, kept every other hex, and used GRTS to choose spatially balanced yearly panels of hexes for their fisher surveys, clustering 2 to 4 nearby hexes in wilderness to save travel ([[Fisher Occupancy Case Study]]). Spatial balance is not the same as stratification: strata force fixed numbers into named groups, while GRTS just keeps the spread even across the map.

```r
set.seed(11); g <- expand.grid(x = 1:20, y = 1:20)
nn <- function(p) { d <- as.matrix(dist(p)); diag(d) <- Inf; apply(d, 1, min) }
rand <- g[sample(nrow(g), 30), ]                                         # simple random
off <- sample(0:2, 2, TRUE); bal <- g[(g$x - off[1]) %% 4 == 0 & (g$y - off[2]) %% 3 == 0, ][1:30, ]   # regular, randomly shifted
round(rbind(random = summary(nn(rand))[c(1, 3)], balanced = summary(nn(bal))[c(1, 3)]), 2)
```

## Connections
- **Builds on:** [[Random Sampling]], [[Survey Sampling Designs]]
- **Leads to:** [[Site Independence Assumption]], [[Sampling Unit]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Fisher Occupancy Case Study]]

## Flashcards

What does spatially balanced sampling achieve?
??
Random sites that are spread evenly over the study area, so no region is over- or under-sampled by chance.
++++

What is GRTS?
??
Generalized random tessellation stratified sampling: a randomised space-filling ordering of cells, sampled systematically to give spatially balanced sites.
++++
