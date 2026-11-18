---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "Predicting from a GAM means evaluating all smooth and parametric terms at new predictor values, usually on the link scale with standard errors, then back-transforming the estimate and its interval."
aliases:
  - "predict.gam()"
  - "predict() for GAMs"
  - "type = \"lpmatrix\""
status: seedling
---

# Prediction from a GAM

**Predicting from a GAM** means evaluating all smooth and parametric terms at new [[Predictor Variable|predictor]] values, usually on the [[Link Scale|link scale]] with standard errors, and then back-transforming the estimate and its interval ([[predict()]], [[Predictions on Link vs Response Scale]]). Use `predict(m, newdata, type = "link", se.fit = TRUE)`, form `fit ± 2 × se.fit`, then apply `exp()` or `plogis()`. `type = "response"` gives the back-transformed mean but no valid interval directly, and `type = "terms"` gives each term's contribution separately.

`exclude = "s(site)"` drops a random-effect smooth for population-level predictions ([[Random-effect Smooth]]). `type = "lpmatrix"` returns the matrix mapping coefficients to predictions, for simulating from the fit's posterior to get derivatives or differences ([[Derivatives of a Smooth]]). Don't predict far outside the data: m = 2 thin plate smooths extrapolate linearly and uncertainty explodes. In the code below a Poisson GAM predicts a mean count of 7.30 (6.36 to 8.39) at x = 0.25 and 1.01 (0.76 to 1.32) at x = 0.75; the intervals are asymmetric because they were built on the log scale.

Prediction is part of the GAM lab ([[Course Website]], [[Partial Effect Plots]]). Don't use `type = "response"` with `se.fit` for intervals; build them on the link scale and [[Back-transformation|back-transform]].

```r
library(mgcv); set.seed(16); d <- data.frame(x = runif(200)); d$y <- rpois(200, exp(1 + sin(2 * pi * d$x))); m <- gam(y ~ s(x), poisson, data = d, method = "REML")
nd <- data.frame(x = c(0.25, 0.75)); p <- predict(m, nd, se.fit = TRUE); round(cbind(nd, mean = exp(p$fit), lo = exp(p$fit - 2 * p$se.fit), hi = exp(p$fit + 2 * p$se.fit)), 2)
```

## Connections
- **Builds on:** [[predict()]], [[Predictions on Link vs Response Scale]], [[Predictor Variable]], [[Link Scale]], [[Back-transformation]]
- **Leads to:** [[Partial Effect Plots]], [[Derivatives of a Smooth]], [[Random-effect Smooth]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

How should a confidence interval be built for a GAM prediction on a log link?
??
Compute fit ± 2 SE on the link scale, then exponentiate.
++++
