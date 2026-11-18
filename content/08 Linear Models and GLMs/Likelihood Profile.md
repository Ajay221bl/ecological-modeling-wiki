---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A likelihood profile shows how well each value of one parameter can be supported when all the other parameters are re-optimised to do their best at that value."
aliases:
  - "Profile likelihood"
  - "Profiling"
  - "profile()"
status: seedling
---

# Likelihood Profile

Look at a mountain range from the south. For each east-west position you see the highest point anywhere along the north-south line, and the outline is the range's profile for the east-west coordinate. A **likelihood profile** does this for one parameter of a model: it shows how well each value of that parameter can be supported when all the other parameters are re-optimised to do their best at that value. Choose the parameter of interest, fix it at a trial value, maximise the likelihood over all the others, record that maximum, and repeat across a grid of trial values; the recorded maxima trace the profile ([[Likelihood Function]], [[Maximum Likelihood Estimation]], [[Numerical Optimization]]). Its peak is the MLE of the parameter of interest.

In the code below, a [[Poisson Regression|Poisson regression]]'s slope is fixed at each value from 0 to 0.3 by putting it in an offset, and the intercept is re-estimated each time. The profile peaks at the same slope `glm()` reports, and the plot shows its shape.

Profiling reduces a many-dimensional surface to a curve for one parameter while letting the others adjust, so the curve honestly shows what the data say about that parameter; the parameters that are adjusted but not of interest are [[Nuisance Parameter|nuisance parameters]]. Its main use is confidence intervals that follow the true shape of the likelihood, including asymmetry ([[Profile Likelihood Confidence Interval]]); `confint()` on a glm or lmer model profiles ([[Hobbs and Hooten 2015 Ch4]]). A profile is not a slice: a slice fixes the other parameters at set values, while a profile re-optimises them at each step.

```r
set.seed(6); x <- runif(40, 0, 10); y <- rpois(40, exp(0.5 + 0.15 * x))
prof <- sapply(seq(0, 0.3, by = 0.01), function(b) logLik(glm(y ~ 1 + offset(b * x), family = poisson)))    # slope fixed at b, intercept re-estimated
b <- seq(0, 0.3, by = 0.01); b[which.max(prof)]; coef(glm(y ~ x, family = poisson))[2]
plot(b, prof, type = "l", xlab = "slope", ylab = "profile log-likelihood")
```

## Connections
- **Builds on:** [[Likelihood Function]], [[Maximum Likelihood Estimation]], [[Poisson Regression]]
- **Leads to:** [[Profile Likelihood Confidence Interval]], [[Nuisance Parameter]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

What is a likelihood profile for a parameter?
??
The maximised likelihood at each fixed value of that parameter, with all other parameters re-optimised.
++++
