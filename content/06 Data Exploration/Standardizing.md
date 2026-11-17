---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "Standardization"
  - "Standardizing Predictors"
  - "z-score"
  - "scale()"
  - "Standardised predictor"
status: seedling
---

# Standardizing

**In one line:** standardizing a variable means subtracting its mean and dividing by its standard deviation, giving a z-score with mean 0 and standard deviation 1.

> [!info] Before this, it helps to know
> [[Centering]] (the subtraction) · [[Scaling Predictors]] (the division) · [[Standard Deviation]] (the unit)

## The everyday picture
Grading on a curve. A raw score of 72 means little alone. "One and a half standard deviations above the class average" tells you where the student stands, whatever the test was out of.

## A tiny example
Tree cover 45% where the mean is 30% and the SD is 15%.
- z = (45 − 30) / 15 = +1.
- This plot is one SD more wooded than average.

## Start from zero
1. **z = (x − mean) / SD.**
2. **z = 0:** average. **z = 1:** one SD above. **z = −2:** two SDs below.
3. **It combines centering and scaling** and gains the benefits of both.
4. **Keep the mean and SD you used.** *Why:* to predict for new data you must standardise them with the original mean and SD, and to report effects in real units you must convert back.
5. **Back-conversion:** slope per original unit = slope per SD ÷ SD.
6. **Don't standardise a 0/1 dummy variable** unless you have a reason. Its 0-to-1 step is already meaningful.

## In R
```r
tree <- c(10, 20, 30, 40, 50)
z <- scale(tree); as.vector(z); attributes(z)[c("scaled:center", "scaled:scale")]
(45 - mean(tree)) / sd(tree)                       # standardise a new value with the ORIGINAL mean and SD
set.seed(18); x <- rnorm(50, 30, 15); y <- 5 + 0.2 * x + rnorm(50)
b_z <- coef(lm(y ~ scale(x)))[2]; c(per_sd = b_z, per_unit = b_z / sd(x), direct = coef(lm(y ~ x))[2])
```

## In the course
Used before fitting in the Bayesian regression and GLMM labs. Gelman suggests dividing by two SDs so continuous predictors compare with binary ones.

## Common confusions
- **"Standardizing makes data normal."** It moves and stretches the scale. The shape is unchanged.
- **"scale() returns a vector."** It returns a one-column matrix with attributes. Wrap it in `as.numeric()` when storing it in a data frame.

## Explain it back
- Convert a per-SD slope of 3 to original units if SD = 15.

*Pass test:* you can compute a z-score and convert a standardised slope back.

## Connections
- **Builds on:** [[Centering]], [[Scaling Predictors]]
- **Leads to:** [[Standard Normal Distribution]], [[Weakly Informative Prior]], [[Effect Size]]
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
