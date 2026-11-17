---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Weighted regression gives each observation a weight in the fit, usually the inverse of its variance, so noisier observations count less."
aliases:
  - "Weighted least squares"
  - "WLS"
  - "weights = in lm()"
  - "varFixed"
status: seedling
---

# Weighted Regression

When averaging opinions where some people are better informed, you listen more to the reliable ones. **Weighted regression** gives each observation a weight in the fit, usually the inverse of its variance, so noisier observations count less ([[Least Squares]], [[Homogeneity of Variance]]). It minimises Σwᵢ(yᵢ − ŷᵢ)² instead of the plain RSS, and weights of 1 / variance give the most efficient estimates when the variances are known up to a constant. For means based on different sample sizes, weight by n ([[Weighted Mean]]).

In R it is `lm(y ~ x, weights = w)`; in nlme, `gls(y ~ x, weights = varFixed(~ x))` models variance proportional to x ([[Generalized Least Squares]]). [[Zuur et al. 2009 Ch4]] extend this to estimated variance structures such as varIdent, varPower and varExp ([[Variance Structures]]). In the code below the noise SD grows with x: ordinary least squares estimates the slope as 0.513 (SE 0.073), and weighting by 1/x² gives 0.492 (SE 0.047), a more precise estimate of the true 0.5.

Weights don't fix any heterogeneity: they only help if you know or model how the variance changes ([[Heteroscedasticity]]).

```r
set.seed(4); x <- runif(100, 1, 10); y <- 2 + 0.5 * x + rnorm(100, 0, 0.3 * x)
round(rbind(ols = summary(lm(y ~ x))$coef[2, 1:2], wls = summary(lm(y ~ x, weights = 1 / x^2))$coef[2, 1:2]), 3)
```

## Connections
- **Builds on:** [[Least Squares]], [[Homogeneity of Variance]]
- **Leads to:** [[Variance Structures]], [[Generalized Least Squares]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]], molecular note [[OLS vs GLS]]

## Flashcards

What weights does weighted least squares ideally use?
??
The inverse of each observation's variance.
++++
