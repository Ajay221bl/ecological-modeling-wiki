---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The inverse link function converts a value of the linear predictor back into a mean on the scale of the data."
aliases:
  - "Inverse link"
  - "Mean function"
  - "g⁻¹"
  - "Back-transforming the linear predictor"
status: seedling
---

# Inverse Link Function

The link carried the mean out to the unrestricted number line so the model could do its arithmetic there; the **inverse link function** is the return ticket, converting a value of the [[Linear Predictor]] back into a mean on the scale of the data, μ = g⁻¹(η) ([[Link Function]]). For a log link it is `exp()`; for a logit link, `plogis()`, the [[Logistic Function]]; for probit, `pnorm()`; for cloglog, 1 − exp(−exp(η)); and for identity, nothing. It guarantees valid means, since exp() is always positive and plogis() always between 0 and 1.

The code below applies `exp()` and `plogis()` to −3, 0 and 3, then predicts a Poisson regression's mean at x = 5 with an interval. The interval is built on the link scale, fit ± 1.96 SE, and then the inverse link is applied to each end. `family(model)$linkinv` gives the right inverse link for any fitted model, so your code does not have to assume which link was used ([[predict()]]).

That is the rule to remember: apply the inverse link to the interval's endpoints, never to the standard error ([[Back-transformation]]). The result is on the [[Response Scale]], which is how every prediction plot in the GLM labs is made ([[Course Website]]).

```r
exp(c(-3, 0, 3)); plogis(c(-3, 0, 3))
set.seed(3); x <- runif(80, 0, 10); y <- rpois(80, exp(0.3 + 0.2 * x)); m <- glm(y ~ x, family = poisson)
p <- predict(m, data.frame(x = 5), se.fit = TRUE); inv <- family(m)$linkinv
inv(p$fit + c(-1.96, 0, 1.96) * p$se.fit)             # lower, estimate, upper on the count scale
```

## Connections
- **Builds on:** [[Link Function]], [[Linear Predictor]]
- **Leads to:** [[Logistic Function]], [[Response Scale]], [[Back-transformation]], [[predict()]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

What is the inverse of the log link?
??
exp().
++++

What is the inverse of the logit link?
??
The logistic function, plogis().
++++

How should a confidence interval be moved to the response scale?
??
Compute it on the link scale and apply the inverse link to both endpoints.
++++
