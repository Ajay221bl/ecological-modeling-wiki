---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "Standardizing a variable means subtracting its mean and dividing by its standard deviation, giving a z-score with mean 0 and standard deviation 1."
aliases:
  - "Standardization"
  - "Standardizing Predictors"
  - "z-score"
  - "scale()"
  - "Standardised predictor"
status: seedling
---

# Standardizing

Grading on a curve: a raw score of 72 means little alone, but "one and a half standard deviations above the class average" says where the student stands, whatever the test was out of. **Standardizing** a variable means subtracting its mean and dividing by its standard deviation, giving a *z-score*, z = (x − mean) / SD, with mean 0 and standard deviation 1. A plot with 45% tree cover, where the mean is 30% and the SD 15%, has z = (45 − 30) / 15 = +1: one SD more wooded than average. z = 0 is average, and z = −2 is two SDs below. It combines [[Centering]] and [[Scaling Predictors|scaling]] and gains the benefits of both. In R, `scale()` does it.

Keep the mean and SD you used. To predict for new data you must standardise the new values with the *original* mean and SD, as the code below does for a new value of 45; and to report effects in real units you must convert back: slope per original unit = slope per SD ÷ SD. So a per-SD slope of 3 with an SD of 15 is 0.2 per unit, and the last line of the code confirms that this matches the slope fitted on the raw scale. Do not standardise a 0/1 dummy variable without a reason: its 0-to-1 step is already meaningful. Gelman suggests dividing continuous predictors by two SDs instead of one, so their slopes compare with those of binary predictors.

The GLMM and Bayesian labs standardise predictors before fitting, partly because a [[Weakly Informative Prior]] such as Normal(0, 1) then suits every slope ([[Effect Size]]). Two confusions. Standardizing does not make data normal: it moves and stretches the scale, and the shape is unchanged, so a z-score is not a draw from the [[Standard Normal Distribution]] unless the data were normal to begin with. And `scale()` returns a one-column matrix with the mean and SD stored as attributes, not a plain vector; wrap it in `as.numeric()` when storing it in a data frame ([[Centering, Scaling and Standardizing]]).

```r
tree <- c(10, 20, 30, 40, 50)
z <- scale(tree); as.vector(z); attributes(z)[c("scaled:center", "scaled:scale")]
(45 - mean(tree)) / sd(tree)                       # standardise a new value with the ORIGINAL mean and SD
set.seed(18); x <- rnorm(50, 30, 15); y <- 5 + 0.2 * x + rnorm(50)
b_z <- coef(lm(y ~ scale(x)))[2]; c(per_sd = b_z, per_unit = b_z / sd(x), direct = coef(lm(y ~ x))[2])
```

## Connections
- **Builds on:** [[Centering]], [[Scaling Predictors]]
- **Leads to:** [[Standard Normal Distribution]], [[Weakly Informative Prior]], [[Effect Size]]
- **See also:** [[Standard Deviation]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]], molecular note [[Centering, Scaling and Standardizing]]

## Flashcards

What is a z-score?
??
(value − mean) / standard deviation: the number of SDs a value lies from the mean.
++++

What must you keep when you standardise predictors for a model?
??
The mean and SD used, to standardise new data and to convert slopes back to original units.
++++

Does standardizing change the shape of a distribution?
??
No. Only its location and scale.
++++
