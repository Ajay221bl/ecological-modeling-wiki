---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "The Laplace approximation and Gaussian quadrature are ways of approximating the GLMM likelihood, which requires integrating over the unknown random effects and has no exact formula."
aliases:
  - "Laplace approximation"
  - "Gaussian quadrature"
  - "Adaptive Gauss-Hermite quadrature"
  - "nAGQ"
  - "AGQ"
status: seedling
---

# Laplace Approximation

The **Laplace approximation** and Gaussian quadrature are ways to approximate the [[GLMM]] likelihood, which requires integrating over the unknown random effects and has no exact formula ([[Likelihood Function]], [[Integral]]). The likelihood is a product over groups of ∫ p(y | b) p(b) db, and for non-normal responses that integral has no closed form. Laplace approximates the integrand by a normal curve around its peak, which is fast and the lme4 default (`nAGQ = 1`). Adaptive Gauss-Hermite quadrature evaluates the integrand at several well-placed points and takes a weighted sum, which is more accurate; lme4 allows `nAGQ = 10` or more only with a single scalar random effect.

Laplace is least accurate for binary data with few observations per group and large random-effect variances. Alternatives are [[Penalized Quasi-likelihood]] (older and more biased), MCMC ([[Bayesian GLMM]]) and glmmTMB's Laplace with automatic differentiation. In the code below the `cbpp` intercept is −1.3983 with Laplace and −1.3992 with 5 or 25 quadrature points: the estimates settle as points are added, and here Laplace was already very close.

It is mentioned when fitting `glmer()` in the GLMM lab ([[Course Website]], [[Zuur et al. 2009 Ch13]]). Laplace is not exact; it is an approximation, usually a good one.

```r
library(lme4); f <- cbind(incidence, size - incidence) ~ period + (1 | herd)
round(sapply(c(1, 5, 25), function(q) fixef(glmer(f, family = binomial, data = cbpp, nAGQ = q))[1]), 4)       # estimates settle as quadrature points increase
```

## Connections
- **Builds on:** [[GLMM]], [[Likelihood Function]], [[Integral]]
- **Leads to:** [[Penalized Quasi-likelihood]], [[lmer() and glmer()]], [[MCMC]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

Why does a GLMM likelihood need approximating?
??
It integrates over random effects, which has no closed form for non-normal responses.
++++

What is lme4's default likelihood approximation for glmer()?
??
The Laplace approximation (nAGQ = 1).
++++
