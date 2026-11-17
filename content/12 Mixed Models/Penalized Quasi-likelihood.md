---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "Penalized quasi-likelihood is an older, fast method for fitting GLMMs by repeatedly fitting weighted linear mixed models, which can be badly biased for binary data or small counts."
aliases:
  - "PQL"
  - "glmmPQL()"
status: seedling
---

# Penalized Quasi-likelihood

**Penalized quasi-likelihood** (PQL) is an older, fast method for fitting [[GLMM|GLMMs]] by repeatedly fitting weighted linear mixed models, which can be badly biased for binary data or small counts ([[Quasi-Poisson]] for the quasi-likelihood idea). It iterates: linearise the GLMM around the current estimates, fit an LMM, update, and repeat. `MASS::glmmPQL()` wraps nlme's `lme()`, so it accepts correlation structures ([[nlme lme()]]).

It tends to make variance components too small for binary responses and Poisson responses with small means, and because it has no true likelihood there is no AIC and no likelihood ratio test. Bolker et al. (2009) recommend the [[Laplace Approximation]] or quadrature instead when possible. In the code below PQL gives the `cbpp` intercept as −1.33 and the period effects as −1.02, −1.15 and −1.61, close to but not the same as `glmer()`'s −1.40, −0.99, −1.13 and −1.58.

It is covered in [[Zuur et al. 2009 Ch13]]. PQL does not give an AIC like `glmer`: it has no likelihood to base one on.

```r
library(MASS); d <- lme4::cbpp; m <- glmmPQL(cbind(incidence, size - incidence) ~ period, random = ~ 1 | herd, family = binomial, data = d, verbose = FALSE)
round(nlme::fixef(m), 2)
```

## Connections
- **Builds on:** [[GLMM]], [[Quasi-Poisson]]
- **Leads to:** [[Laplace Approximation]], [[nlme lme()]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

What is a major drawback of PQL for GLMMs?
??
It can be badly biased for binary data and small counts, and has no true likelihood for AIC.
++++
