---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "The fixed X assumption says the predictor values are known exactly, so all the randomness in the model belongs to the response."
aliases:
  - "Fixed X"
  - "Predictors measured without error"
  - "Errors-in-variables"
status: seedling
---

# Fixed X Assumption

A cook tests how baking time affects cake height with an exact timer: 20, 30, 40 minutes, so all the unexplained variation is in the cakes. Now imagine the timer is unreliable and some "30 minute" cakes really got 25 or 35: the effect of time gets smeared out. The **fixed X assumption** says the predictor values are known exactly, so all the randomness in the model belongs to the response. Regression puts an error term on Y only ([[Linear Regression]], [[Explanatory Variable]]). That is fine when X is set by the experimenter, such as a dose, or measured very precisely, such as year or elevation. But X is often itself a noisy measurement: an estimated tree cover, a prey abundance index, last year's population estimate ([[Observation Error]]).

Noise in X flattens the estimated slope toward zero, an effect called *attenuation* or *regression dilution*. The reason is visual: the noisy X spreads points sideways at random, and a cloud blurred sideways looks less steep. The slope shrinks by the factor var(true X) / (var(true X) + var(measurement error)). In the code below the measurement error in X is as large as the true spread of X (both have variance 4), so the factor is 4 / (4 + 4) = 0.5, and the true slope of 0.5 is estimated as about 0.25. That is a [[Bias]], not just extra noise that averages out.

Worry when the error in X is not small compared with the range of X. The remedy is a model with a measurement-error layer for X, which is natural in a Bayesian [[Hierarchical Model]]: Hobbs and Hooten treat errors in covariates as one more level ([[Hobbs and Hooten 2015 Ch6]]). Zuur lists the assumption among those of the linear model ([[Zuur et al. 2009 Ch2]], [[Linear Model Assumptions]]). Do not confuse "fixed X" with a fixed effect: here "fixed" means known without error.

```r
set.seed(8)
x_true <- rnorm(5000, 0, 2); y <- 1 + 0.5 * x_true + rnorm(5000)
x_obs <- x_true + rnorm(5000, 0, 2)            # measurement error as large as the true spread
c(true_x = coef(lm(y ~ x_true))[2], noisy_x = coef(lm(y ~ x_obs))[2])
0.5 * 4 / (4 + 4)                              # predicted attenuated slope: 0.25
```
The slope estimated from the noisy predictor is about half the true 0.5.

## Connections
- **Builds on:** [[Explanatory Variable]], [[Observation Error]]
- **Leads to:** [[Linear Model Assumptions]], [[Hierarchical Model]], [[Bias]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

What is the fixed X assumption?
??
Predictors are known without error, so only the response is random.
++++

What happens to a regression slope when X is measured with error?
??
It is biased toward zero (attenuation).
++++
