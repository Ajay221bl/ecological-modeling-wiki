---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "predict.gam()"
  - "predict() for GAMs"
  - "type = \"lpmatrix\""
status: seedling
---

# Prediction from a GAM

**In one line:** predicting from a GAM means evaluating all smooth and parametric terms at new predictor values, usually on the link scale with standard errors, then back-transforming the estimate and its interval.

> [!info] Before this, it helps to know
> [[predict()]] · [[Predictions on Link vs Response Scale]]

## Start from zero
1. **`predict(m, newdata, type = "link", se.fit = TRUE)`**, then `fit ± 2 × se.fit`, then `exp()` or `plogis()`.
2. **`type = "response"`** gives the back-transformed mean but no valid interval directly.
3. **`type = "terms"`** gives each term's contribution separately.
4. **`exclude = "s(site)"`** drops a random-effect smooth for population-level predictions.
5. **`type = "lpmatrix"`** returns the matrix mapping coefficients to predictions, for simulating from the posterior of the fit (derivatives, differences).
6. **Don't predict far outside the data:** smooths extrapolate linearly (m = 2 tp) and uncertainty explodes.

## In R
```r
library(mgcv); set.seed(16); d <- data.frame(x = runif(200)); d$y <- rpois(200, exp(1 + sin(2 * pi * d$x))); m <- gam(y ~ s(x), poisson, data = d, method = "REML")
nd <- data.frame(x = c(0.25, 0.75)); p <- predict(m, nd, se.fit = TRUE); round(cbind(nd, mean = exp(p$fit), lo = exp(p$fit - 2 * p$se.fit), hi = exp(p$fit + 2 * p$se.fit)), 2)
```

## In the course
GAM lab ([[Course Website]]).

## Common confusions
- **"Use type = 'response' with se.fit for intervals."** Build intervals on the link scale and back-transform.

## Explain it back
- How do you get population-level predictions from a GAM with a random-effect smooth?

*Pass test:* you can produce response-scale predictions with intervals.

## Connections
- **Builds on:** [[predict()]], [[Predictions on Link vs Response Scale]]
- **Leads to:** [[Partial Effect Plots]], [[Derivatives of a Smooth]], [[Random-effect Smooth]]
- **Part of:** [[MOC - GAMs]]

## Flashcards

How should a confidence interval be built for a GAM prediction on a log link?
??
Compute fit ± 2 SE on the link scale, then exponentiate.
++++
