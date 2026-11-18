---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Distance sampling estimates density by recording the distance from the observer's line or point to each animal detected and modelling how detection declines with distance."
aliases:
  - "Distance sampling methods"
  - "Distance-based surveys"
  - "distsamp()"
  - "Distance package"
status: seedling
---

# Distance Sampling

Walking down a crowded street, you notice almost everyone right next to you and fewer people the further away they are; if you know how fast your noticing fades, you can work out how many you missed. **Distance sampling** estimates density by recording the distance from the observer's line or point to each animal detected and modelling how detection declines with distance ([[Detection Probability]], [[Count-based Abundance Estimation]]). You record a distance for every detection, fit a [[Detection Function]] g(x) to the [[Histogram|histogram]] of distances, and convert it to an [[Effective Strip Width]], or area; density for line transects of total length L is then D̂ = n / (2 × ESW × L).

Its key assumptions are that animals on the line are always detected, g(0) = 1 ([[Detection on the Line g(0)]]); that animals are detected at their initial position, before moving; and that distances are measured accurately. Designs are [[Line Transects]] and [[Point Transects]], and software includes Distance, the [[Packages in R|R package]] Distance and unmarked's `distsamp()` ([[unmarked Package]]). The figure shows the shaded area under the detection curve equalling the hatched rectangle whose width is the ESW. In the code below a 10 km transect through a population of 20 animals per ha detects 1,468 animals; a [[Half-Normal Prior|half-normal]] fit gives σ = 30.8 m, an ESW of 38.5 m and an estimated density of 19.0 per ha.

It is covered in [[Powell and Gale 2015]] Ch19. Distance sampling does not assume you see everything in the strip; it assumes you see everything on the line and estimates the rest.

![[Detection function.png|700]]
*What to look at:* the shaded area under the curve equals the hatched rectangle whose width is the ESW.

```r
set.seed(11); L <- 10000; w <- 100; x <- runif(rpois(1, 0.002 * 2 * w * L), 0, w); xs <- x[rbinom(length(x), 1, exp(-x^2 / (2 * 30^2))) == 1]
nll <- function(ls) { s <- exp(ls); -sum(-xs^2 / (2 * s^2) - log(integrate(function(u) exp(-u^2 / (2 * s^2)), 0, w)$value)) }
s <- exp(optimize(nll, c(0, 6))$minimum); esw <- integrate(function(u) exp(-u^2 / (2 * s^2)), 0, w)$value
round(c(seen = length(xs), sigma = s, ESW_m = esw, D_hat_per_ha = length(xs) / (2 * esw * L) * 1e4, D_true_per_ha = 20), 1)
```

## Connections
- **Builds on:** [[Detection Probability]], [[Count-based Abundance Estimation]], [[Histogram]], [[Packages in R]], [[Half-Normal Prior]]
- **Leads to:** [[Detection Function]], [[Effective Strip Width]], [[Line Transects]], [[Point Transects]], [[Detection on the Line g(0)]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

How does distance sampling estimate detection?
??
By modelling how the probability of detection declines with distance from the line or point.
![[Detection function.png]]
++++

Line-transect density formula?
??
D̂ = n / (2 × ESW × L).
++++
