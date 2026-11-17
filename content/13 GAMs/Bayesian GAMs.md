---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "Bayesian GAMs treat the penalised parts of smooths as random effects with priors, so the posterior gives full uncertainty for every curve and derived quantity."
aliases:
  - "Bayesian GAM"
  - "brms smooths"
  - "s() in brms"
  - "jagam()"
status: seedling
---

# Bayesian GAMs

**Bayesian GAMs** treat the penalised parts of smooths as random effects with priors, so the posterior gives full uncertainty for every curve and derived quantity ([[Generalized Additive Model]], [[Bayesian GLMM]]; the same mixed-model view as [[REML for Smoothness Selection]]). brms accepts mgcv smooth syntax, as in `brm(y ~ s(x) + (1 | site), ...)`. Behind the scenes each smooth is split into an unpenalised fixed part and a penalised random part whose SD, `sds_sx_1`, gets a prior ([[Priors on Standard Deviations]]). mgcv's `jagam()` writes JAGS code for a GAM.

The advantages are that uncertainty in the smoothing parameters is included, and posterior draws of the curves make derivatives and differences easy ([[Derivatives of a Smooth]]). The costs are speed, and divergent transitions are common with wiggly smooths, so raise adapt_delta ([[adapt_delta and Sampler Settings]]). The code below, not run in the wiki build, shows a Poisson model of quail counts against tree cover with a site random intercept.

Bayesian GAMs are not covered in the in-scope labs; they connect the GAM unit with Bayesian mixed models. A Bayesian GAM doesn't need a prior on λ directly; it needs a prior on the SD of the penalised part.

```r
# norun (brms fit, shown for syntax)
fit <- brm(count ~ s(tree_cover) + (1 | site), family = poisson(), data = quail, control = list(adapt_delta = 0.95), chains = 4, cores = 4)
conditional_effects(fit, "tree_cover"); summary(fit)$splines
```

## Connections
- **Builds on:** [[Generalized Additive Model]], [[Bayesian GLMM]], [[REML for Smoothness Selection]]
- **Leads to:** [[brm()]], [[adapt_delta and Sampler Settings]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

How does brms represent a smooth term?
??
As an unpenalised fixed part plus a penalised random part whose standard deviation gets a prior.
++++
