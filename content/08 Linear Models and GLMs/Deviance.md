---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Deviance is a GLM's measure of misfit: twice the gap in log-likelihood between a perfect-fit model and your model, so smaller means closer to the data."
aliases:
  - "Model deviance"
  - "D"
  - "−2 log-likelihood difference from the saturated model"
status: seedling
---

# Deviance

A golf score counts how far you are over a perfect round. Nobody expects zero; what matters is how many strokes one player is over compared with another. **Deviance** is a GLM's golf score: a measure of misfit equal to twice the gap in log-likelihood between a perfect-fit model and yours, Deviance = 2 × (logLik of saturated − logLik of your model) ([[Log-likelihood]]). The [[Saturated Model]] has one parameter per observation and fits every point exactly, so it reaches the highest log-likelihood any model in that family could. If the saturated model has log-likelihood −210 and yours −240, the deviance is 2 × (−210 − (−240)) = 60.

Deviance is always zero or positive, zero only for a perfect fit, and adding predictors never raises it. For a normal model it is exactly the residual sum of squares, so deviance generalises RSS to other distributions ([[Residual Sum of Squares]]). It is a sum of per-observation contributions, whose signed square roots are the [[Deviance Residuals]]. The code below computes a Poisson model's deviance three ways: from `deviance()`, by hand from the saturated log-likelihood (where each mean equals its own observation), and as the sum of squared deviance residuals. The last line confirms that for `lm()` the deviance is the RSS.

Its absolute size is rarely interpretable on its own, especially for 0/1 data, so use it for comparisons. The deviance of the intercept-only model is the [[Null Deviance]] and that of your model the [[Residual Deviance]]. Differences between nested models are likelihood ratio statistics, compared with a chi-square ([[Likelihood Ratio Test]], [[Analysis of Deviance]]). It is printed at the bottom of every `summary(glm())` ([[Zuur et al. 2009 Ch9]], [[Course Website]]). Two confusions. Deviance is −2 × log-likelihood only when the saturated log-likelihood is zero, as for 0/1 data; in general the saturated term is subtracted. And low deviance does not prove a good model, since overfitting also lowers it.

```r
set.seed(1); x <- runif(100); y <- rpois(100, exp(0.5 + 1.5 * x)); m <- glm(y ~ x, family = poisson)
deviance(m)
sat <- sum(dpois(y, y, log = TRUE)); 2 * (sat - as.numeric(logLik(m)))        # the same number by hand: saturated model has mean = y
sum(resid(m, type = "deviance")^2)
all.equal(deviance(lm(y ~ x)), sum(resid(lm(y ~ x))^2))                       # for a normal model, deviance is RSS
```

## Connections
- **Builds on:** [[Log-likelihood]], [[Residual Sum of Squares]]
- **Leads to:** [[Null Deviance]], [[Residual Deviance]], [[Analysis of Deviance]], [[Deviance Residuals]], [[Likelihood Ratio Test]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

What is deviance?
??
Twice the difference in log-likelihood between the saturated model and the fitted model. A measure of misfit.
++++

What is deviance for a normal linear model?
??
The residual sum of squares.
++++
