---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A test statistic is a single number computed from the data that measures how far the data are from what the null hypothesis predicts."
aliases:
  - "Test statistics"
  - "Statistic of a test"
status: seedling
---

# Test Statistic

A thermometer boils the state of your body down to one number on a scale where "normal" is known; a reading far from normal is the signal. A **test statistic** is a single number computed from the data that measures how far the data are from what the [[Null Hypothesis]] predicts. Choose a summary that grows as the data depart from H₀, work out its distribution if H₀ were true (the null distribution, a kind of [[Sampling Distribution]]), and locate your value in it. The tail area beyond it is the [[P-value]].

The course uses three main kinds. t or z is (estimate − null value) / [[Standard Error|standard error]], for one [[Regression Coefficient|coefficient]] ([[t-test]]). F is the ratio of explained to unexplained variance, for groups of terms in [[Linear Model|linear models]] ([[F-test]]). Chi-square is the drop in deviance, or a sum of squared discrepancies, for nested [[Generalized Linear Model|GLMs]] ([[Likelihood Ratio Test]]). In the code below, a regression with one [[Predictor Variable|predictor]] reports both t and F, and F equals t squared, because with one predictor they test the same thing.

Bayesian [[Model Validation|model checking]] reuses the idea: compute a statistic on the data and on data simulated from the model, and compare ([[Bayesian P-value]]). The confusion to avoid is that a big statistic means a big effect. It means a *clear* effect, and clarity grows with [[Sample Size|sample size]] as well as [[Effect Size|effect size]].

```r
set.seed(3); x <- rnorm(50); y <- 0.3 * x + rnorm(50); s <- summary(lm(y ~ x))
c(t = s$coefficients[2, 3], F = s$fstatistic[[1]], t_squared = s$coefficients[2, 3]^2)     # for one predictor F is t squared
```

## Connections
- **Builds on:** [[Null Hypothesis]], [[Sampling Distribution]], [[Standard Error]], [[Regression Coefficient]], [[Linear Model]], [[Generalized Linear Model]], [[Predictor Variable]], [[Model Validation]], [[Sample Size]], [[Effect Size]]
- **Leads to:** [[P-value]], [[t-test]], [[F-test]], [[Likelihood Ratio Test]], [[Bayesian P-value]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

What is a test statistic?
??
A number summarising how far the data depart from the null hypothesis, with a known distribution when the null is true.
++++
