---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "`lmer()` fits linear mixed models and `glmer()` fits generalized linear mixed models in the lme4 package, using the same formula syntax with random effects in parentheses."
aliases:
  - "lmer() and glmer()"
  - "lme4"
  - "lme4 package"
status: seedling
---

# lmer()

`lmer()` fits [[Linear Mixed Model|linear mixed models]] and `glmer()` fits [[GLMM|generalized linear mixed models]] in the lme4 package, using the same fixed-effect syntax as [[lm()]] with [[Random Effect|random effects]] in parentheses ([[lme4 Random-effect Syntax]]). `lmer(y ~ x + (1 | g), data = d)` fits by [[REML]] by default; set `REML = FALSE` for ML. `glmer(y ~ x + (1 | g), family = binomial, data = d)` fits by ML with the [[Laplace Approximation]]; `nAGQ = 10` uses adaptive quadrature, for a single [[Random Intercept|random intercept]] only.

`summary()` shows the random effects (variances and SDs) and then the [[Fixed Effect|fixed effects]]; lme4 deliberately prints no p-values for lmer ([[p-values in Mixed Models]]). The extractors are `fixef()`, `ranef()`, `coef()`, `VarCorr()`, `fitted()`, `resid()`, `predict()` and `simulate()` ([[fixef(), ranef() and VarCorr()]]). For convergence trouble use `control = glmerControl(optimizer = "bobyqa", optCtrl = list(maxfun = 2e5))` ([[Convergence Warnings]]). In the code below a binomial GLMM of contagious bovine pleuropneumonia in herds (`cbpp`) gives an intercept of −1.40 on the [[Link Scale|logit scale]] and period effects of −0.99, −1.13 and −1.58, and `isREML()` confirms that an `lmer()` fit uses REML.

Related packages are glmmTMB (more families, [[Zero Inflation|zero inflation]]), [[nlme lme()]] (correlation and [[Variance Structures|variance structures]]) and brms (Bayesian). Both are used in the [[Mixed Effects Model|mixed models]] labs ([[Course Website]]). `lmer` does not use ML unless told to; and the missing p-values are a deliberate choice, not a bug.

```r
library(lme4); m <- glmer(cbind(incidence, size - incidence) ~ period + (1 | herd), family = binomial, data = cbpp)
round(fixef(m), 2); isREML(lmer(Reaction ~ Days + (1 | Subject), sleepstudy))
```

## Connections
- **Builds on:** [[lm()]], [[lme4 Random-effect Syntax]], [[Random Effect]], [[Random Intercept]], [[Fixed Effect]], [[Link Scale]], [[Zero Inflation]], [[Variance Structures]], [[Mixed Effects Model]]
- **Leads to:** [[REML]], [[Laplace Approximation]], [[fixef(), ranef() and VarCorr()]], [[Convergence Warnings]], [[p-values in Mixed Models]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

Which estimation method does lmer() use by default?
??
REML.
++++

How does glmer() approximate the likelihood by default?
??
With the Laplace approximation (nAGQ = 1).
++++
