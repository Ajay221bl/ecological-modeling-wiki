---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "An offset is a term added to the linear predictor with its coefficient fixed at 1, used to account for unequal sampling effort so that the model describes a rate per unit of effort."
aliases:
  - "Offset term"
  - "offset(log(effort))"
  - "Exposure"
  - "Modeling rates"
status: seedling
---

# Offset

Compare two bakeries by loaves sold when one was open 2 hours and the other 10, and raw totals are unfair: loaves per hour is the fair comparison. An **offset** builds "per hour" into a model. It is a term added to the [[Linear Predictor]] with its coefficient fixed at 1, used to account for unequal [[Sampling Effort]] so that the model describes a rate per unit of effort. The derivation is short. You want the rate μ/E, count per unit effort, so model its log: log(μ/E) = β₀ + β₁x. Rearranged, log(μ) = log(E) + β₀ + β₁x, so log(E) is a predictor with coefficient exactly 1 ([[Log Link]]). In R: `glm(count ~ x + offset(log(effort)), family = poisson)`. Effort can be time, area, trap-nights, transect length or number of observers.

An example: site A has 12 birds in 10 minutes and site B 12 birds in 30 minutes. Same count, but A's rate is three times B's, and with `offset(log(minutes))` the model compares 1.2 per minute with 0.4 per minute. In the code below, counts are simulated from a per-minute rate that depends on tree cover, with survey lengths of 5, 10 or 30 minutes. Ignoring effort gives a meaningless intercept; with the offset the model recovers the true −0.5 and −0.02.

The coefficients now describe the rate per unit of whatever E measures. Dividing the count by effort and modeling the ratio instead loses two things: the ratio is no longer a count, and 2 birds in 1 minute is weaker evidence than 200 in 100. Adding log(E) as an ordinary predictor instead estimates its coefficient, a different model that is sometimes reasonable when counts do not scale proportionally with effort ([[Zuur et al. 2009 Ch9]], [[Course Website]]). Two slips: with a log link the offset must be on the log scale, `offset(log(effort))`, not `offset(effort)`; and an offset is not a covariate, since it has no estimated coefficient. It works the same in a [[Poisson Regression]] or a [[Negative Binomial GLM]].

```r
set.seed(16); d <- data.frame(mins = sample(c(5, 10, 30), 200, TRUE), tree = runif(200, 0, 60))
d$birds <- rpois(200, d$mins * exp(-0.5 - 0.02 * d$tree))               # true rate per minute depends on tree cover
round(coef(glm(birds ~ tree, family = poisson, d)), 3)                  # ignoring effort: intercept meaningless
round(coef(glm(birds ~ tree + offset(log(mins)), family = poisson, d)), 3)      # recovers -0.5 and -0.02
```

## Connections
- **Builds on:** [[Log Link]], [[Sampling Effort]]
- **Leads to:** [[Poisson Regression]], [[Negative Binomial GLM]], [[Linear Predictor]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

What is an offset in a count GLM?
??
A term, usually log(effort), added to the linear predictor with coefficient fixed at 1 so the model describes a rate.
++++

Why use an offset rather than dividing counts by effort?
??
It keeps the response a count with the right distribution and weights observations by their effort.
++++
