---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Covariance matrix"
  - "vcov()"
  - "VCV matrix"
  - "Sigma matrix"
status: seedling
---

# Variance-Covariance Matrix

**In one line:** a variance-covariance matrix is a square table that holds the variance of each of several quantities on its diagonal and the covariance of each pair off the diagonal.

> [!info] Before this, it helps to know
> [[Variance]] (diagonal) · [[Covariance]] (off-diagonal) · [[Matrix]] (the container)

## The everyday picture
A mileage chart between cities, but for uncertainty. The diagonal says how much each quantity wobbles alone. Each off-diagonal cell says how much two of them wobble together.

## Start from zero
1. **Square and symmetric:** entry (i, j) equals entry (j, i).
2. **Diagonal:** variances. Their square roots are standard deviations (or standard errors).
3. **Off-diagonal:** covariances. Divide by the two SDs to get correlations.
4. **Use 1, coefficients:** `vcov(model)` is the covariance matrix of the estimated coefficients. `sqrt(diag(vcov(m)))` gives the standard errors.
5. **Why the off-diagonals matter:** a prediction combines several coefficients, so its uncertainty depends on how their errors move together. SE of a prediction = √(x Vcov xᵀ).
6. **Use 2, random effects:** the matrix of random intercept and slope variances and their covariance.
7. **Use 3, residuals:** in models with correlated errors, the n × n matrix describing how every pair of observations covaries.

## In R
```r
m <- lm(mpg ~ wt, mtcars); V <- vcov(m); round(V, 3)
sqrt(diag(V)); summary(m)$coefficients[, 2]                  # standard errors both ways
x0 <- c(1, 3); sqrt(t(x0) %*% V %*% x0); predict(m, data.frame(wt = 3), se.fit = TRUE)$se.fit    # SE of the fitted mean at wt = 3
round(cov2cor(V), 2)
```

## In the course
Used to build confidence bands by hand in the mixed-model labs ([[Course Website]]). [[Zuur et al. 2009 Ch5]] to Ch7 for random effects and correlation structures.

## Common confusions
- **"Standard errors are enough for prediction intervals."** Without the covariances the band is wrong.

## Explain it back
- What sits on the diagonal of `vcov(model)`?

*Pass test:* you can get standard errors and a prediction SE from `vcov()`.

## Connections
- **Builds on:** [[Variance]], [[Covariance]], [[Matrix]]
- **Leads to:** [[Standard Error]], [[Multivariate Normal Distribution]], [[Correlation Structure]], [[Random Slope]]
- **Part of:** [[MOC - Linear Models and GLMs]]

## Flashcards

What is on the diagonal and off-diagonal of a variance-covariance matrix?
??
Variances on the diagonal, covariances off it.
++++

How do you get coefficient standard errors from vcov(model)?
??
sqrt(diag(vcov(model))).
++++
