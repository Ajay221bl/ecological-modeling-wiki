---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "Normality assumption"
  - "Normally distributed residuals"
status: seedling
---

# Normality

**In one line:** the normality assumption says that the scatter of the data around the model's fitted values follows a normal, bell-shaped distribution.

> [!info] Before this, it helps to know
> [[Normal Distribution]] (the shape assumed) · [[Residual]] (what should have it) · [[QQ Plot]] (the check)

## The everyday picture
Many small independent nudges. A leaf's final length is its expected length plus a little from extra rain, minus a little from shade, plus a little from soil. Add up many small pushes and pulls and the totals pile up in a bell around the expected value.

## Start from zero
1. **A linear model says:** y = fitted value + error, with error ~ Normal(0, σ²).
2. **So the assumption is about the errors,** estimated by the residuals. *It is not about the raw response.*
3. **Why the difference matters:** if sites differ a lot in the predictor, the raw response can be skewed or two-peaked while the residuals are perfectly normal.
4. **Check after fitting:** QQ plot or histogram of residuals.
5. **How much it matters:** of the linear model's assumptions it is the least critical. With moderate sample sizes, estimates and tests of coefficients hold up well under mild non-normality.
6. **When it matters more:** small samples, strong skew, or when you need prediction intervals for single observations.
7. **What to do if it fails badly:** ask what kind of data you have. Counts, proportions and positive skewed values have their own distributions in a GLM.

## In R
```r
set.seed(3)
grp <- rep(c(5, 20), each = 100); y <- grp + rnorm(200)
op <- par(mfrow = c(1, 2)); hist(y, main = "raw response: two peaks"); hist(resid(lm(y ~ factor(grp))), main = "residuals: normal"); par(op)
shapiro.test(y)$p.value                           # the raw response fails a normality test
shapiro.test(resid(lm(y ~ factor(grp))))$p.value  # the residuals pass
```
The response is strongly non-normal. The model's assumption is satisfied anyway.

## In the course
Protocol step 3 ([[Zuur et al. 2010]]). Gelman and Hill rank normality of errors as the least important regression assumption.

## Common confusions
- **"My response must be normal."** The residuals, not the response.
- **"A significant Shapiro test means I can't use a linear model."** With large n the test flags trivial departures. Look at the QQ plot.

## Explain it back
- Why can a response be non-normal while the assumption holds?

*Pass test:* you can say exactly what must be normal and how to check it.

## Connections
- **Builds on:** [[Normal Distribution]], [[Residual]]
- **Leads to:** [[QQ Plot]], [[Linear Model Assumptions]], [[Generalized Linear Model]]
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
