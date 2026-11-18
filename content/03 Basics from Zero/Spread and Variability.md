---
type: atomic
tags:
  - basics-from-zero
  - descriptive-statistics
  - flashcards
aliases:
  - "variability"
  - "standard deviation"
  - "SD"
  - "variation"
status: seedling
---

# Spread and Variability

**In one line:** spread (or variability) describes how much values differ from each other and from their mean; variance and standard deviation turn that into a number.

> [!info] Before this, it helps to know
> [[Average (Mean)]] (spread is measured as distance from the mean)

## Start from zero
Two points each average 6 species per visit:
- Point A: 5, 7, 6
- Point B: 1, 6, 11

Point A is steady. Point B swings wildly. The mean is the same, so the mean cannot tell them apart. We need a second number that says "how bouncy".

The obvious idea: measure how far each value is from the mean, then average those distances. That is almost exactly what variance does.

## Why it exists
Spread matters for three plain reasons:
1. **Knowing what is normal.** If visits usually range from 4 to 8, a visit with 14 species is surprising. Without a sense of spread, you cannot tell surprising from ordinary.
2. **Judging differences.** BK averages 4.73 and CR 7.58. Is that a real difference? It depends on spread. If visits swing by plus or minus 10 species, a nearly 3-species gap could be luck. If they swing by plus or minus 1, it almost certainly is not. (This idea grows into the [[Standard Error]] and [[P-value]].)
3. **Choosing a model.** Different kinds of data have different typical spreads. For counts, the [[Poisson Distribution]] says the variance should roughly equal the mean. Checking that is a key step in my project ([[Mean-Variance Relationship]]).

## A tiny example
**Variance**, step by step, for Point A (5, 7, 6; mean 6):

| Value | Distance from mean | Squared |
|---|---|---|
| 5 | -1 | 1 |
| 7 | +1 | 1 |
| 6 | 0 | 0 |
| | | Sum = 2 |

Divide by (n - 1) = 2: variance = **1**.

Why square? Because plain distances (-1, +1, 0) always cancel out to 0. Squaring makes every distance positive. (It also makes big misses count extra.)

Why n - 1 instead of n? Roughly: the distances are measured from a mean calculated from the same few values, which makes them a little too small. Dividing by one less corrects for that. With large n it hardly matters.

Point B (1, 6, 11): distances -5, 0, +5; squares 25, 0, 25; sum 50; divide by 2: variance = **25**.

**Standard deviation (SD)** is the square root of the variance: SD = 1 for A, 5 for B. It is back in the original units (species), so it is easier to read: "values typically sit about 1 species (A) or 5 species (B) from the mean". Roughly, for bell-shaped data about two-thirds of values fall within 1 SD of the mean.

## In my project
- Across the 1,130 point-visits the models use, richness has a mean of 5.96 and an SD of 2.25 species. Visits ranged from 0 to 14.
- Within each site, the variance divided by the mean is 0.56 to 0.93. A ratio near 1 is what a Poisson model expects. Well above 1 would be [[Overdispersion]]; well below 1 is [[Underdispersion]].
- The analysis script checks this with `var(Richness)` inside `summarize()`, then again after fitting with `check_overdispersion()` on the top model. That gave 0.66 for all species: a bit less spread than Poisson expects. See [[check_overdispersion()]] and [[Preliminary Results]].

## Common confusions
- **Variance vs SD.** Same information, different units. Variance is in "species squared" (hard to picture); SD is in species.
- **Spread is not error.** Variation among visits is often real (different days, different birds), not a mistake. Models split it into the part they explain and the leftover part ([[Residuals]]).
- **Spread of the data vs uncertainty of the mean.** SD describes individual visits. How sure we are about the *mean* is a different, smaller number, the [[Standard Error]].

## Connections
- **Builds on:** [[Average (Mean)]]
- **Leads to:** [[Variance]], [[Standard Error]], [[Mean-Variance Relationship]], [[Overdispersion]], [[Normal Distribution]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]
- **Go deeper:** [[Zuur et al. 2010]] (why checking spread is part of data exploration)

> [!question]- Check yourself
> Values 3, 5, 7. What are the mean, variance and SD?
> ?
> Mean 5. Distances -2, 0, +2; squares 4, 0, 4; sum 8; divide by n - 1 = 2 gives variance 4. SD is the square root, 2 species.
