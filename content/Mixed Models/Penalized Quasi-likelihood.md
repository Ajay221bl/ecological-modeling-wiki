---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "PQL"
  - "glmmPQL()"
status: seedling
---

# Penalized Quasi-likelihood

**In one line:** penalized quasi-likelihood is an older, fast method for fitting GLMMs by repeatedly fitting weighted linear mixed models, which can be badly biased for binary data or small counts.

> [!info] Before this, it helps to know
> [[GLMM]] · [[Quasi-Poisson]] (quasi-likelihood idea)

## Start from zero
1. **Iterates:** linearise the GLMM around current estimates, fit an LMM, update.
2. **`MASS::glmmPQL()`** wraps nlme's `lme()`, so it accepts correlation structures.
3. **Biased** (variance components too small) for binary responses and Poisson with small means.
4. **No true likelihood,** so no AIC or likelihood ratio tests.
5. **Bolker et al. (2009) recommend Laplace or quadrature instead** when possible.

## In R
```r
library(MASS); d <- lme4::cbpp; m <- glmmPQL(cbind(incidence, size - incidence) ~ period, random = ~ 1 | herd, family = binomial, data = d, verbose = FALSE)
round(nlme::fixef(m), 2)
```

## In the course
[[Zuur et al. 2009 Ch13]].

## Common confusions
- **"PQL gives AIC like glmer."** It has no likelihood to base AIC on.

## Explain it back
- Why can't you compare PQL models with AIC?

*Pass test:* you can say when PQL is acceptable.

## Connections
- **Builds on:** [[GLMM]], [[Quasi-Poisson]]
- **Leads to:** [[Laplace Approximation]], [[nlme lme()]]
- **Part of:** [[MOC - Mixed Models]]

## Flashcards

What is a major drawback of PQL for GLMMs?
??
It can be badly biased for binary data and small counts, and has no true likelihood for AIC.
++++
