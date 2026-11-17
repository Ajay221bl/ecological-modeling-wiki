---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "Confidence envelope"
  - "Confidence band"
  - "Prediction band"
  - "Ribbon of uncertainty"
status: seedling
---

# Confidence Envelopes

**In one line:** a confidence envelope is the shaded band around a fitted line showing the confidence interval for the mean response at every value of the predictor.

> [!info] Before this, it helps to know
> [[Confidence Interval]] · [[predict()]]

## Start from zero
1. **Compute predictions on a fine grid of x values,** with their standard errors or bootstrap quantiles.
2. **Lower and upper limits at each x** form the band. Plot with `geom_ribbon()`.
3. **Narrowest near the mean of x,** widening toward the edges.
4. **For GLMs build it on the link scale and back-transform** so it respects bounds (0 to 1 for probabilities).
5. **For mixed models:** `predict()` gives no SEs for lmer, so use `bootMer()` on predictions, the delta method on fixed effects (population-level band), or brms posterior draws.
6. **A prediction band** adds residual (and group) variation and is much wider.

## In R
```r
library(lme4); m <- lmer(Reaction ~ Days + (1 | Subject), sleepstudy); nd <- data.frame(Days = 0:9); X <- model.matrix(~ Days, nd)
se <- sqrt(diag(X %*% vcov(m) %*% t(X))); fit <- X %*% fixef(m); round(head(cbind(nd, fit = fit, lo = fit - 1.96 * se, hi = fit + 1.96 * se), 3), 1)
```

## In the course
CIs for mixed models lab: confidence envelopes from bootstrapped predictions ([[Course Website]]).

## Common confusions
- **"The envelope shows where the data should fall."** That is a prediction band. The confidence envelope is for the mean.

## Explain it back
- Why is the envelope narrowest near the mean of x?

*Pass test:* you can draw a confidence envelope for any model.

## Connections
- **Builds on:** [[Confidence Interval]], [[predict()]]
- **Leads to:** [[Prediction vs Confidence Interval]], [[bootMer()]], [[Predictions on Link vs Response Scale]]
- **Part of:** [[MOC - Mixed Models]]

## Flashcards

What does a confidence envelope show?
??
The confidence interval for the mean response across the range of a predictor.
++++
