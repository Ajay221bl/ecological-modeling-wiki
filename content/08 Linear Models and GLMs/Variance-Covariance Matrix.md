---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A variance-covariance matrix is a square table that holds the variance of each of several quantities on its diagonal and the covariance of each pair off the diagonal."
aliases:
  - "Covariance matrix"
  - "vcov()"
  - "VCV matrix"
  - "Sigma matrix"
status: seedling
---

# Variance-Covariance Matrix

A mileage chart between cities lists every pair. Now imagine one for uncertainty: the diagonal says how much each quantity wobbles alone, and each off-diagonal cell how much two of them wobble together. A **variance-covariance matrix** is that square table, holding the [[Variance]] of each of several quantities on its diagonal and the [[Covariance]] of each pair off the diagonal ([[Matrix]]). It is symmetric, since entry (i, j) equals entry (j, i). The square roots of the diagonal are standard deviations, or standard errors; divide an off-diagonal entry by the two standard deviations and you get a correlation.

Its most common use is for model coefficients. `vcov(model)` is the covariance matrix of the estimated coefficients, and `sqrt(diag(vcov(m)))` gives their [[Standard Error|standard errors]], as the code below confirms for `lm(mpg ~ wt)`. The off-diagonals matter because a prediction combines several coefficients, so its uncertainty depends on how their errors move together: the standard error of a prediction is √(x V xᵀ), where x holds the predictor values. The code computes it by hand at weight 3 and matches `predict(..., se.fit = TRUE)`, and `cov2cor()` shows the intercept and slope estimates are strongly negatively correlated.

It turns up in two more places. In mixed models it holds the variances of random intercepts and slopes and their covariance ([[Random Slope]]). In models with correlated errors, an n × n matrix describes how every pair of observations covaries ([[Correlation Structure]]). In each case it is the covariance of a [[Multivariate Normal Distribution]] ([[Zuur et al. 2009 Ch5]], [[Course Website]]). Standard errors alone are not enough for prediction bands; without the covariances the band is wrong.

```r
m <- lm(mpg ~ wt, mtcars); V <- vcov(m); round(V, 3)
sqrt(diag(V)); summary(m)$coefficients[, 2]                  # standard errors both ways
x0 <- c(1, 3); sqrt(t(x0) %*% V %*% x0); predict(m, data.frame(wt = 3), se.fit = TRUE)$se.fit    # SE of the fitted mean at wt = 3
round(cov2cor(V), 2)
```

## Connections
- **Builds on:** [[Variance]], [[Covariance]], [[Matrix]]
- **Leads to:** [[Standard Error]], [[Multivariate Normal Distribution]], [[Correlation Structure]], [[Random Slope]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What is on the diagonal and off-diagonal of a variance-covariance matrix?
??
Variances on the diagonal, covariances off it.
++++

How do you get coefficient standard errors from vcov(model)?
??
sqrt(diag(vcov(model))).
++++
