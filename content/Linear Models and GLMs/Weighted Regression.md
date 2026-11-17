---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Weighted least squares"
  - "WLS"
  - "weights = in lm()"
  - "varFixed"
status: seedling
---

# Weighted Regression

**In one line:** weighted regression gives each observation a weight in the fit, usually the inverse of its variance, so noisier observations count less.

> [!info] Before this, it helps to know
> [[Least Squares]] · [[Homogeneity of Variance]]

## The everyday picture
Averaging opinions where some people are better informed. You listen more to the reliable ones.

## Start from zero
1. **Minimises Σ wᵢ(yᵢ − ŷᵢ)²** instead of the plain RSS.
2. **Weights = 1 / variance** gives the most efficient estimates when variances are known up to a constant.
3. **In R:** `lm(y ~ x, weights = w)`; in nlme, `gls(y ~ x, weights = varFixed(~ x))` models variance proportional to x.
4. **Means of different sample sizes:** weight by n.
5. **Zuur et al. (2009 Ch4)** extend this to estimated variance structures (varIdent, varPower, varExp).

## In R
```r
set.seed(4); x <- runif(100, 1, 10); y <- 2 + 0.5 * x + rnorm(100, 0, 0.3 * x)
round(rbind(ols = summary(lm(y ~ x))$coef[2, 1:2], wls = summary(lm(y ~ x, weights = 1 / x^2))$coef[2, 1:2]), 3)
```

## In the course
[[Zuur et al. 2009 Ch4]].

## Common confusions
- **"Weights fix any heterogeneity."** Only if you know or model how variance changes.

## Explain it back
- What weight gives the most efficient estimate?

*Pass test:* you can fit and justify a weighted regression.

## Connections
- **Builds on:** [[Least Squares]], [[Homogeneity of Variance]]
- **Leads to:** [[Variance Structures]], [[Generalized Least Squares]]
- **Part of:** [[MOC - Linear Models and GLMs]], molecular note [[OLS vs GLS]]

## Flashcards

What weights does weighted least squares ideally use?
??
The inverse of each observation's variance.
++++
