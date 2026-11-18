---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "Scaling a predictor means dividing it by a constant, usually its standard deviation, so that one unit becomes a typical-sized difference."
aliases:
  - "Scaling"
  - "Rescaling"
  - "Dividing by the standard deviation"
status: seedling
---

# Scaling Predictors

A house and a loaf of bread are hard to compare in dollars, but expressed as days of typical wages both sit on a scale where 1 means the same thing. **Scaling** a [[Predictor Variable|predictor]] means dividing it by a constant, usually its [[Standard Deviation]], so that one unit becomes a typical-sized difference. The slope is multiplied by that constant and now means "change in Y per SD of x" ([[Slope]]). A meaningful unit, such as per 100 m or per decade, is a fine alternative to the SD.

An example. Elevation in metres has a slope of −0.02 species per metre, and tree cover has −0.3 species per percent. Which matters more? You cannot tell, because a metre and a percent are not comparable. If elevation's SD is 60 m and tree cover's is 15%, the per-SD slopes are −0.02 × 60 = −1.2 and −0.3 × 15 = −4.5, and now they can be compared ([[Effect Size]]). The code below shows this, and also that the t-value is identical before and after scaling: the fit, predictions, t-values and p-values do not change, only the units.

There are three reasons to scale. Comparability, as above. Numerics: optimisers struggle when one predictor ranges over 0.001 and another over 100,000, and `lmer()` and `glmer()` warn that "predictor variables are on very different scales" ([[Convergence Warnings]]). And priors: one [[Weakly Informative Prior|default prior]] such as Normal(0, 1) is sensible for every slope when every predictor has SD 1 ([[Prior Distribution]]). Scaling is usually paired with [[Centering]], and the combination is [[Standardizing]]. One caution: per-SD slopes depend on the SD of x in this sample, which another study may not share, so scaled slopes are not a permanent ranking of importance.

```r
set.seed(17)
d <- data.frame(elev = rnorm(80, 900, 60), tree = rnorm(80, 30, 15))
d$rich <- 25 - 0.02 * d$elev - 0.3 * d$tree + rnorm(80, 0, 2)
coef(lm(rich ~ elev + tree, d))[-1]                                  # per metre, per percent
coef(lm(rich ~ I(elev / sd(elev)) + I(tree / sd(tree)), d))[-1]      # per SD: comparable
summary(lm(rich ~ elev, d))$coefficients[2, 3]; summary(lm(rich ~ I(elev / sd(elev)), d))$coefficients[2, 3]   # same t
```

## Connections
- **Builds on:** [[Standard Deviation]], [[Slope]], [[Predictor Variable]]
- **Leads to:** [[Standardizing]], [[Effect Size]], [[Prior Distribution]], [[Convergence Warnings]], [[Weakly Informative Prior]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

What does scaling a predictor by its SD do to its slope?
??
Multiplies it by the SD, so it becomes the change in Y per one SD of x.
++++

Name two reasons to scale predictors.
??
Slopes become comparable across predictors, and fitting algorithms and default priors behave better.
++++
