---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Robust regression fits a line in a way that gives outlying observations less pull than least squares does."
aliases:
  - "Robust linear model"
  - "rlm()"
  - "Student-t regression"
status: seedling
---

# Robust Regression

A panel of judges that discards the highest and lowest scores cannot be swung by one wild judge. **Robust regression** fits a line so that outlying observations get less pull than they do under [[Least Squares]]. Least squares penalises squared misses, so one far-off point can dominate the fit ([[Outlier]]). There are two ways to soften that. One is to change the penalty: beyond some distance, count misses linearly instead of squared, Huber's method, available as `MASS::rlm()`. The other is to change the distribution: assume [[Student t Distribution|Student t]] errors, whose heavy tails make a far-off point unsurprising so it does not drag the line, available as `family = student` in brms.

In the code below, 30 points follow a clear line, but the last one is set far below it. Ordinary least squares tilts toward that point; `rlm()` gives nearly the same coefficients as least squares fitted without the outlier.

Use it when you believe the outliers are real but do not want them to dictate the fit. It is not a licence to skip looking at the outliers ([[Cook's Distance]]), and it is not assumption-free: it relaxes only the sensitivity to the tails.

```r
library(MASS); set.seed(3); x <- 1:30; y <- 2 + 0.5 * x + rnorm(30); y[30] <- 0
rbind(ols = coef(lm(y ~ x)), robust = coef(rlm(y ~ x)), without_outlier = coef(lm(y ~ x, subset = -30)))
```

## Connections
- **Builds on:** [[Least Squares]], [[Outlier]]
- **Leads to:** [[Student t Distribution]], [[Cook's Distance]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What does robust regression do differently from least squares?
??
It down-weights observations with large residuals, by a gentler loss function or a heavy-tailed error distribution.
++++
