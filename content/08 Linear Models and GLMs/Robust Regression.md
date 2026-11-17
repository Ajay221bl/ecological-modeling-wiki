---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Robust linear model"
  - "rlm()"
  - "Student-t regression"
status: seedling
---

# Robust Regression

**In one line:** robust regression fits a line in a way that gives outlying observations less pull than least squares does.

> [!info] Before this, it helps to know
> [[Least Squares]] (which it modifies) · [[Outlier]] (what it resists) · [[Student t Distribution]] (one way to do it)

## The everyday picture
A panel of judges that discards the highest and lowest scores. One wild judge can no longer swing the result.

## Start from zero
1. **Least squares penalises squared misses,** so a far-off point dominates.
2. **Option 1: change the penalty.** Beyond some distance, count misses linearly, not squared (Huber). `MASS::rlm`.
3. **Option 2: change the distribution.** Assume Student t errors. Heavy tails make a far-off point unsurprising, so it doesn't drag the line. `family = student` in brms.
4. **Why use it:** when you believe the outliers are real but don't want them to dictate the fit.
5. **It is not a licence to skip looking at the outliers.**

## In R
```r
library(MASS); set.seed(3); x <- 1:30; y <- 2 + 0.5 * x + rnorm(30); y[30] <- 0
rbind(ols = coef(lm(y ~ x)), robust = coef(rlm(y ~ x)), without_outlier = coef(lm(y ~ x, subset = -30)))
```

## Common confusions
- **"Robust means assumption-free."** It relaxes the sensitivity to tails, nothing else.

## Explain it back
- Why does a t-distributed error make a regression robust?

*Pass test:* you can explain what robust methods change.

## Connections
- **Builds on:** [[Least Squares]], [[Outlier]]
- **Leads to:** [[Student t Distribution]], [[Cook's Distance]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What does robust regression do differently from least squares?
??
It down-weights observations with large residuals, by a gentler loss function or a heavy-tailed error distribution.
++++
