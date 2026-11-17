---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "A confidence envelope is the shaded band around a fitted line showing the confidence interval for the mean response at every value of the predictor."
aliases:
  - "Confidence envelope"
  - "Confidence band"
  - "Prediction band"
  - "Ribbon of uncertainty"
status: seedling
---

# Confidence Envelopes

A **confidence envelope** is the shaded band around a fitted line that shows the [[Confidence Interval]] for the mean response at every value of the predictor. Compute predictions on a fine grid of x values with their standard errors or bootstrap quantiles ([[predict()]]); the lower and upper limits at each x form the band, plotted with `geom_ribbon()`. It is narrowest near the mean of x and widens toward the edges. For GLMs build it on the link scale and back-transform, so it respects bounds such as 0 to 1 for probabilities ([[Link Function]]).

For mixed models `predict()` gives no SEs for lmer, so use [[bootMer()]] on the predictions, the delta method on the fixed effects for a population-level band, or brms posterior draws ([[Bayesian GLMM]]). The code below takes the delta-method route, combining the model matrix with `vcov(m)`: the `sleepstudy` mean is 251.4 ms (232.3 to 270.5) at day 0, 261.9 (243.3 to 280.4) at day 1 and 272.3 (254.2 to 290.5) at day 2.

The CIs for mixed models lab builds envelopes from bootstrapped predictions ([[Course Website]]). The envelope does not show where the data should fall: that is a prediction band, which adds residual and group variation and is much wider ([[Prediction Interval]]).

```r
library(lme4); m <- lmer(Reaction ~ Days + (1 | Subject), sleepstudy); nd <- data.frame(Days = 0:9); X <- model.matrix(~ Days, nd)
se <- sqrt(diag(X %*% vcov(m) %*% t(X))); fit <- X %*% fixef(m); round(head(cbind(nd, fit = fit, lo = fit - 1.96 * se, hi = fit + 1.96 * se), 3), 1)
```

## Connections
- **Builds on:** [[Confidence Interval]], [[predict()]]
- **Leads to:** [[Prediction vs Confidence Interval]], [[bootMer()]], [[Predictions on Link vs Response Scale]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

What does a confidence envelope show?
??
The confidence interval for the mean response across the range of a predictor.
++++
