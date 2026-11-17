---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "Fixed X"
  - "Predictors measured without error"
  - "Errors-in-variables"
status: seedling
---

# Fixed X Assumption

**In one line:** the fixed X assumption says the predictor values are known exactly, so all the randomness in the model belongs to the response.

> [!info] Before this, it helps to know
> [[Explanatory Variable]] (X) · [[Observation Error]] (what X is assumed not to have) · [[Linear Regression]] (the model)

## The everyday picture
A cook testing how baking time affects cake height. The timer is exact: 20, 30, 40 minutes. All the unexplained variation is in the cakes. Now imagine the timer itself is unreliable. Some "30 minute" cakes really got 25 or 35, and the effect of time gets smeared out.

## Start from zero
1. **Regression puts an error term on Y only.**
2. **That is fine when X is set by the experimenter** (dose, treatment) or measured very precisely (year, elevation).
3. **Often X is itself a noisy measurement:** estimated tree cover, a prey abundance index, last year's population estimate.
4. **Noise in X flattens the estimated slope toward zero.** *Why:* the noisy X spreads points sideways at random, and a sideways-blurred cloud looks less steep.
5. **This is called attenuation or regression dilution.**
6. **How much:** the slope shrinks by the factor var(true X) / (var(true X) + var(measurement error)).
7. **When to worry:** when the error in X is not small compared with the range of X.
8. **The remedy** is a model with a measurement-error layer for X, natural in a Bayesian hierarchical model.

## In R
```r
set.seed(8)
x_true <- rnorm(5000, 0, 2); y <- 1 + 0.5 * x_true + rnorm(5000)
x_obs <- x_true + rnorm(5000, 0, 2)            # measurement error as large as the true spread
c(true_x = coef(lm(y ~ x_true))[2], noisy_x = coef(lm(y ~ x_obs))[2])
0.5 * 4 / (4 + 4)                              # predicted attenuated slope: 0.25
```
The slope estimated from the noisy predictor is about half the true 0.5.

## In the course
Listed among the linear model's assumptions in [[Zuur et al. 2009 Ch2]]. Hobbs and Hooten treat errors in covariates as one more level in a hierarchical model ([[Hobbs and Hooten 2015 Ch6]]).

## Common confusions
- **"Fixed X means X is a fixed effect."** Different idea. Here "fixed" means known without error.
- **"Error in X adds noise but averages out."** It biases the slope toward zero.

## Explain it back
- Which way does measurement error in X bias the slope?

*Pass test:* you can explain attenuation with the blurred-cloud picture.

## Connections
- **Builds on:** [[Explanatory Variable]], [[Observation Error]]
- **Leads to:** [[Linear Model Assumptions]], [[Hierarchical Model]], [[Bias]]
- **Part of:** [[MOC - Data Exploration]]

## Flashcards

What is the fixed X assumption?
??
Predictors are known without error, so only the response is random.
++++

What happens to a regression slope when X is measured with error?
??
It is biased toward zero (attenuation).
++++
