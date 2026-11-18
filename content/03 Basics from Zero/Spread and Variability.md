---
type: atomic
tags:
  - basics-from-zero
  - descriptive-statistics
  - flashcards/eco/basics
description: "Spread (or variability) describes how much values differ from each other and from their mean; variance and standard deviation turn that into a number."
aliases:
  - "variability"
  - "variation"
status: seedling
---

# Spread and Variability

Two points each average 6 species per visit. Point A recorded 5, 7 and 6; point B recorded 1, 6 and 11. Point A is steady and point B swings wildly, yet their [[Mean]] (the ordinary average) is the same, so the mean cannot tell them apart. We need a second number that says "how bouncy". **Spread**, or **variability**, describes how much values differ from each other and from their mean. You can describe it crudely with the [[Range]] (largest minus smallest: 2 for A, 10 for B), but the usual measures are the [[Variance]] and the [[Standard Deviation]], which use every value, not just the two extremes.

Build the variance for point A. Measure how far each value is from the mean of 6: −1, +1, 0. Plain distances always cancel to 0, so square them, which makes every distance positive and makes big misses count extra: 1, 1, 0, summing to 2 (a [[Sum of Squares]]). Divide by n − 1 = 2 instead of n, because distances measured from a mean computed from the same few values come out a little too small, and dividing by one less corrects for that ([[Degrees of Freedom]]): variance = 1. For point B the distances are −5, 0, +5, the squares 25, 0, 25, the sum 50, and the variance 50 / 2 = 25. The variance is in "species squared", which is hard to picture, so take the [[Square Root|square root]] to get back to the original units: the standard deviation is 1 species for A and 5 for B. For bell-shaped data about two-thirds of values fall within 1 SD of the mean ([[Normal Distribution]]).

Spread matters for three reasons. It tells you what is normal: if visits usually range from 4 to 8 species, a visit with 14 is surprising. It decides whether a difference is real: Bald Knob averages 4.73 species per visit and Camp Robinson 7.58, and whether a nearly 3-species gap could be luck depends on how much visits swing, an idea that grows into the [[Standard Error]] (how uncertain a mean is, a smaller number than the SD of single visits). And it guides the model: for counts, the [[Poisson Distribution]] expects the variance to roughly equal the mean ([[Mean-Variance Relationship]]). Across the 1,130 point-visits the project models, [[Species Richness|richness]] has a mean of 5.96 and an SD of 2.25 species, ranging from 0 to 14. Within each site the variance divided by the mean is 0.56 to 0.93; near 1 is what Poisson expects, well above 1 is [[Overdispersion]] and well below is [[Underdispersion]]. After fitting, [[check_overdispersion()]] gave 0.66 for all species, a bit less spread than Poisson expects ([[Preliminary Results]]). Spread is not error: variation among visits is often real (different days, different birds), and models split it into the part they explain and the leftover [[Residual|residuals]].

## Connections
- **Builds on:** [[Mean]], [[Range]], [[Sum of Squares]], [[Degrees of Freedom]], [[Square Root]]
- **Leads to:** [[Variance]], [[Standard Deviation]], [[Standard Error]], [[Normal Distribution]], [[Poisson Distribution]], [[Mean-Variance Relationship]], [[Overdispersion]], [[Underdispersion]], [[Residual]], [[Species Richness]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]
- **Go deeper:** [[check_overdispersion()]], [[Preliminary Results]], [[Zuur et al. 2010]]

## Flashcards

Values 3, 5, 7. What are the mean, variance and SD?
??
Mean 5. Distances -2, 0, +2; squares 4, 0, 4; sum 8; divide by n - 1 = 2 gives variance 4. SD is the square root, 2 species.
++++

Why square the distances from the mean when measuring spread?::Plain distances always cancel to zero; squaring makes them all positive (and weights big misses more).
