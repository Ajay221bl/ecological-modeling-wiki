---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "Distance sampling methods"
  - "Distance-based surveys"
  - "distsamp()"
  - "Distance package"
status: seedling
---

# Distance Sampling

**In one line:** distance sampling estimates density by recording the distance from the observer's line or point to each animal detected and modelling how detection declines with distance.

> [!info] Before this, it helps to know
> [[Detection Probability]] · [[Count-based Abundance Estimation]]

## The everyday picture
Walking down a crowded street. You notice almost everyone right next to you and fewer people the further away they are. If you know how fast your noticing fades, you can work out how many you missed.

## Start from zero
1. **Record a distance for every detection.**
2. **Fit a detection function g(x)** to the histogram of distances.
3. **Convert to an effective strip width (or area),** then density D̂ = n / (2 × ESW × L) for line transects of total length L.
4. **Key assumptions:**
   - Animals on the line are always detected, g(0) = 1.
   - Animals are detected at their initial position (before moving).
   - Distances are measured accurately.
5. **Designs:** [[Line Transects]] or [[Point Transects]].
6. **Software:** Distance, the R packages Distance and unmarked `distsamp()`.

## See it
![[Detection function.png|700]]
*What to look at:* the shaded area under the curve equals the hatched rectangle whose width is the ESW.

## In R
```r
set.seed(11); L <- 10000; w <- 100; x <- runif(rpois(1, 0.002 * 2 * w * L), 0, w); xs <- x[rbinom(length(x), 1, exp(-x^2 / (2 * 30^2))) == 1]
nll <- function(ls) { s <- exp(ls); -sum(-xs^2 / (2 * s^2) - log(integrate(function(u) exp(-u^2 / (2 * s^2)), 0, w)$value)) }
s <- exp(optimize(nll, c(0, 6))$minimum); esw <- integrate(function(u) exp(-u^2 / (2 * s^2)), 0, w)$value
round(c(seen = length(xs), sigma = s, ESW_m = esw, D_hat_per_ha = length(xs) / (2 * esw * L) * 1e4, D_true_per_ha = 20), 1)
```

## In the course
[[Powell and Gale 2015]] Ch19.

## Common confusions
- **"Distance sampling assumes you see everything in the strip."** It assumes you see everything on the line, and estimates the rest.

## Explain it back
- What is the most important distance-sampling assumption?

*Pass test:* you can explain how distances give detection and density.

## Connections
- **Builds on:** [[Detection Probability]], [[Count-based Abundance Estimation]]
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
