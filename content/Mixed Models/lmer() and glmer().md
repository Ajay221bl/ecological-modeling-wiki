---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "lmer()"
  - "glmer()"
  - "lme4"
  - "lme4 package"
status: seedling
---

# lmer() and glmer()

**In one line:** `lmer()` fits linear mixed models and `glmer()` fits generalized linear mixed models in the lme4 package, using the same formula syntax with random effects in parentheses.

> [!info] Before this, it helps to know
> [[lm()]] (same fixed-effect syntax) · [[lme4 Random-effect Syntax]]

## Start from zero
1. **`lmer(y ~ x + (1 | g), data = d)`** fits by REML by default. Set `REML = FALSE` for ML.
2. **`glmer(y ~ x + (1 | g), family = binomial, data = d)`** fits by ML with the Laplace approximation. `nAGQ = 10` uses adaptive quadrature (single random intercept only).
3. **Output:** `summary()` shows random effects (variances and SDs) then fixed effects. lme4 doesn't print p-values for lmer.
4. **Extractors:** `fixef()`, `ranef()`, `coef()`, `VarCorr()`, `fitted()`, `resid()`, `predict()`, `simulate()`.
5. **Controls:** `control = glmerControl(optimizer = "bobyqa", optCtrl = list(maxfun = 2e5))` for convergence trouble.
6. **Related:** glmmTMB (more families, zero inflation), nlme (correlation and variance structures), brms (Bayesian).

## In R
```r
library(lme4); m <- glmer(cbind(incidence, size - incidence) ~ period + (1 | herd), family = binomial, data = cbpp)
round(fixef(m), 2); isREML(lmer(Reaction ~ Days + (1 | Subject), sleepstudy))
```

## In the course
Both labs on mixed models ([[Course Website]]).

## Common confusions
- **"lmer uses ML."** It uses REML unless told otherwise.
- **"No p-values means lme4 is broken."** It is a deliberate choice; see p-values in Mixed Models.

## Explain it back
- What does glmer use by default to approximate the likelihood?

*Pass test:* you can fit and extract results from both functions.

## Connections
- **Builds on:** [[lm()]], [[lme4 Random-effect Syntax]]
- **Leads to:** [[REML]], [[Laplace Approximation]], [[fixef(), ranef() and VarCorr()]], [[Convergence Warnings]], [[p-values in Mixed Models]]
- **Part of:** [[MOC - Mixed Models]]

## Flashcards

Which estimation method does lmer() use by default?
??
REML.
++++

How does glmer() approximate the likelihood by default?
??
With the Laplace approximation (nAGQ = 1).
++++
