---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "Laplace approximation"
  - "Gaussian quadrature"
  - "Adaptive Gauss-Hermite quadrature"
  - "nAGQ"
  - "AGQ"
status: seedling
---

# Laplace Approximation

**In one line:** the Laplace approximation and Gaussian quadrature are ways of approximating the GLMM likelihood, which requires integrating over the unknown random effects and has no exact formula.

> [!info] Before this, it helps to know
> [[GLMM]] · [[Likelihood Function]] · [[Integral]]

## Start from zero
1. **GLMM likelihood = product over groups of ∫ p(y | b) p(b) db.** For non-normal responses this integral has no closed form.
2. **Laplace:** approximate the integrand by a normal curve around its peak. Fast. lme4 default (`nAGQ = 1`).
3. **Adaptive Gauss-Hermite quadrature:** evaluate the integrand at several well-placed points and take a weighted sum. More accurate. `nAGQ = 10` or more, but only with a single scalar random effect in lme4.
4. **Laplace is least accurate** for binary data with few observations per group and large random-effect variances.
5. **Alternatives:** PQL (older, more biased), MCMC (Bayesian), and glmmTMB's Laplace via automatic differentiation.

## In R
```r
library(lme4); f <- cbind(incidence, size - incidence) ~ period + (1 | herd)
round(sapply(c(1, 5, 25), function(q) fixef(glmer(f, family = binomial, data = cbpp, nAGQ = q))[1]), 4)       # estimates settle as quadrature points increase
```

## In the course
Mentioned when fitting `glmer()` in the GLMM lab ([[Course Website]]). [[Zuur et al. 2009 Ch13]].

## Common confusions
- **"Laplace is exact."** It is an approximation, usually good.

## Explain it back
- When is the Laplace approximation least accurate?

*Pass test:* you can explain why GLMMs need an approximation.

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
