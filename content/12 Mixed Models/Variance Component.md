---
type: atomic
tags:
  - mixed-models
  - flashcards
aliases:
  - "variance components"
  - "random effect variance"
  - "sigma squared point"
status: seedling
---

# Variance Component
**In one line:** one number that says how much the groups (survey points) really differ from each other, beyond what the predictors (property, habitat, wind, sky) explain.

> [!info] Before this, it helps to know
> [[Spread and Variability]] (what a variance is) · [[Random Intercept]] (the point baselines whose spread this measures) · [[Logarithms and Exponents]] (it is reported on the log scale)

## Start from zero
**Variance** measures spread: take each value's distance from the average, square it, and average those squares ([[Spread and Variability]], [[Variance]]). Its square root, the **standard deviation**, is in the original units and is easier to picture: "typical distance from the average".

A random effect does not estimate each point by name. It estimates **how spread out the point baselines are**. That single spread is the **variance component**. It is "a component" because the total variation in richness is split into pieces: a between-point piece (this one) and a within-point, visit-to-visit piece.

## Why it exists
It answers a real question: "Are visits to the same point actually more alike?" If points barely differ, repeat visits are nearly independent. If points differ a lot, ignoring them would be serious [[Pseudoreplication]].

[[Harrison et al. 2018]] point out it can be the goal in itself, for example how much individual females differ consistently in clutch mass, which leads to measures such as repeatability (p. 6).

Three things to know:
1. **It cannot be negative** (a spread cannot be less than none). When the data show no among-point differences, it "collapses" to zero and the model behaves like a plain GLM (Harrison et al., p. 17).
2. **Testing it is awkward.** "Variance = 0" sits on the edge of what is possible, so standard p-values are off; halving the p-value is a common approximation ("testing on the boundary", Harrison et al., p. 18, citing [[Bolker et al. 2009]]).
3. **In a Poisson GLMM it is on the log scale** ([[Log Link]]).

A real report: [[Christensen et al. 2020]] give the state variance (0.82) and year variance (0.81) for their best model (p. 3805).

## A tiny example
Using the three points from [[Random Intercept]], baselines -0.33, +2.67, -2.33:

squares: 0.11, 7.11, 5.44; sum 12.67; divide by (3 - 1) = **6.33**. Standard deviation √6.33 ≈ 2.5 species.

(Roughly: part of that spread is just visit noise, since each point average comes from only 3 visits. The model subtracts that out, so its estimate would be a bit smaller.)

On the log scale, imagine a standard deviation of 0.2. About 95% of points sit within ±2 standard deviations, so within ±0.4 of a typical point. exp(-0.4) = 0.67 and exp(0.4) = 1.49: most points have between about 0.67 and 1.49 times a typical point's species per visit.

## In my project
`summary(topRich)` and `summary(topFocal)` print a "Random effects" block with a Variance and Std.Dev. for `PtNum (Intercept)`, and the analysis script saves both to `TopModel_PointVariance.csv` using `VarCorr()`. H3 predicted it would be clearly above zero ([[Hypotheses]]).

The Oct 13 results show both extreme outcomes, one per response ([[Preliminary Results]]):
- **All species: 0, a singular fit.** After property, habitat and weather, visits to the same point are not detectably more alike than visits to different points. The model then behaves like a plain GLM. lme4 says `boundary (singular) fit`, a message rather than an error ([[Singular Fits and Convergence Warnings]]).
- **Focal species: 0.20, SD 0.45.** Reading it with the recipe above: ±2 SD is ±0.9 on the log scale, and exp(-0.9) = 0.41, exp(0.9) = 2.46. So most points have between about 0.4 and 2.5 times a typical point's expected focal richness, for reasons the predictors miss. Visits to the same point really are more alike here, so the random intercept is doing real work against [[Pseudoreplication]].

So H3 is supported for focal richness but not for all-species richness. The random intercept stays in every model either way, because it reflects the design and was planned in advance ([[Why a random intercept for point]]).

## Common confusions
- **"Variance and standard deviation are the same."** SD is the square root of variance; SD is easier to read.
- **"A variance of 0.04 is tiny, so points do not matter."** On the log scale 0.04 is an SD of 0.2: points differing by ±20% or so is real.
- **"Zero variance means the model is broken."** It means the data show no extra point clustering; a warning, not an error.

## Connections
- **Builds on:** [[Variance]], [[Random Effect]], [[Random Intercept]], [[Spread and Variability]]
- **Leads to:** [[Partial Pooling]], [[Singular Fits and Convergence Warnings]], [[Hierarchical Model]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]
- **Go deeper:** [[Harrison et al. 2018]], [[Christensen et al. 2020]] (reporting example), [[Bolker et al. 2009]] (testing on the boundary)

> [!question]- Check yourself
> My all-species PtNum variance came out exactly zero. What is that GLMM equivalent to, and what does it tell me?
> ?
> A Poisson GLM with no point effect. After property, habitat, Wind and Sky, repeat visits to a point are no more alike than visits to different points. (For focal richness the variance was 0.20, so there the point effect is real.)
