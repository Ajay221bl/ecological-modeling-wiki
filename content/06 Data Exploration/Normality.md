---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "The normality assumption says that the scatter of the data around the model's fitted values follows a normal, bell-shaped distribution."
aliases:
  - "Normality assumption"
  - "Normally distributed residuals"
status: seedling
---

# Normality

A leaf's final length is its expected length plus a little from extra rain, minus a little from shade, plus a little from good soil. Add up many small, independent pushes and pulls and the totals pile up in a bell around the [[Expected Value|expected value]]. The **normality assumption** says that the scatter of the data around a model's [[Fitted Value|fitted values]] follows that bell, a [[Normal Distribution]]. A [[Linear Model|linear model]] writes y = fitted value + error, with error ~ Normal(0, σ²). So the assumption is about the errors, estimated by the residuals ([[Residual]]); it is not about the raw response.

The difference matters. In the code below, half the observations come from a group with mean 5 and half from a group with mean 20. The raw response has two peaks and fails a normality test badly, yet the residuals from a model with group as a [[Predictor Variable|predictor]] are perfectly normal, so the model's assumption is satisfied. If sites differ a lot in a predictor, the raw response can look skewed or two-peaked for that reason alone. Check normality after fitting, with a [[QQ Plot]] or [[Histogram|histogram]] of the residuals.

Of the linear model's assumptions, normality is the least critical; Gelman and Hill rank it last. With moderate sample sizes, estimates and tests of coefficients hold up well under mild non-normality. It matters more with small samples, strong skew, or when you need prediction intervals for single observations ([[Linear Model Assumptions]]). If it fails badly, ask what kind of data you have: counts, proportions and positive skewed values each have their own distribution in a [[Generalized Linear Model]]. One caution about tests such as Shapiro-Wilk: with large samples they flag trivial departures, so a significant test is not a verdict; look at the QQ plot. This is step 3 of the protocol ([[Zuur et al. 2010]]).

```r
set.seed(3)
grp <- rep(c(5, 20), each = 100); y <- grp + rnorm(200)
op <- par(mfrow = c(1, 2)); hist(y, main = "raw response: two peaks"); hist(resid(lm(y ~ factor(grp))), main = "residuals: normal"); par(op)
shapiro.test(y)$p.value                           # the raw response fails a normality test
shapiro.test(resid(lm(y ~ factor(grp))))$p.value  # the residuals pass
```
The response is strongly non-normal. The model's assumption is satisfied anyway.

## Connections
- **Builds on:** [[Normal Distribution]], [[Residual]], [[Predictor Variable]], [[Histogram]]
- **Leads to:** [[QQ Plot]], [[Linear Model Assumptions]], [[Generalized Linear Model]], [[Expected Value]], [[Fitted Value]], [[Linear Model]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

What exactly is assumed to be normal in a linear model?
??
The errors (residuals), meaning the response after accounting for the predictors.
++++

Why is a histogram of the raw response a poor check of normality?
??
Differences in predictors can make the raw response skewed or multi-peaked even when the residuals are normal.
++++
