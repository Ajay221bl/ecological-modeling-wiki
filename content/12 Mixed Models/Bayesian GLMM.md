---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "A Bayesian GLMM is the same model as a frequentist GLMM, with priors on the fixed effects, the random-effect SDs and correlations, fitted by MCMC to give a full posterior for every parameter including each group's effect."
aliases:
  - "Bayesian mixed model"
  - "Bayesian GLMM"
  - "Bayesian hierarchical regression"
  - "brms mixed model"
  - "Bayesian multilevel model"
status: seedling
---

# Bayesian GLMM

A **Bayesian GLMM** is the same model as a frequentist [[GLMM]], with priors on the fixed effects, the random-effect SDs and correlations, fitted by MCMC to give a full posterior for every parameter including each group's effect ([[Hierarchical Model]], [[brm()]]). The formula is lme4-style, `brm(y ~ x + (x | site), family = poisson(), data = d)`. It needs priors for the fixed effects (`class = b`), the SDs (`class = sd`, see [[Priors on Standard Deviations]]), the correlations (`class = cor`, see [[LKJ Prior]]), and family parameters such as `sigma` or `shape`.

Its advantages are that uncertainty in the variance components flows into everything else, there is no [[Boundary Problem When Testing Variances]], weakly informative priors stabilise fits with few groups, and predictions come with full uncertainty. Its costs are speed, the need for convergence checks (R-hat, ESS, divergences; see [[adapt_delta and Sampler Settings]]), and priors that must be justified. Output names are `b_x` for fixed effects, `sd_site__Intercept`, `cor_site__Intercept__x` and `r_site[3,Intercept]` for group effects; check it with `pp_check()` and compare models with LOO ([[Posterior Predictive Check]]). The code below, not run in the wiki build because brms fits take minutes, shows a Poisson seedling model with plot as a random intercept.

The Bayesian mixed models lab has pairs write their own analysis of `csd2003-2006kg.txt`, and Homework 4 analyses `C_vulgare_seedling_dataset.csv` with brms and cmdstanr ([[Course Website]]). Bayesian mixed models don't need informative priors; weakly informative ones usually suffice.

```r
# norun (brms fits take minutes; shown for syntax)
library(brms)
fit <- brm(seedlings ~ treatment + (1 | plot), family = poisson(), data = d, prior = c(prior(normal(0, 1), class = b), prior(exponential(1), class = sd)), chains = 4, cores = 4, seed = 1)
summary(fit); pp_check(fit); ranef(fit)$plot[1:3, , "Intercept"]
```

## Connections
- **Builds on:** [[GLMM]], [[Hierarchical Model]], [[brm()]]
- **Leads to:** [[Priors on Standard Deviations]], [[LKJ Prior]], [[adapt_delta and Sampler Settings]], [[Posterior Predictive Check]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]], molecular note [[lme4 vs brms]], [[Bayesian Mixed Model Workflow in R]]

## Flashcards

What extra priors does a Bayesian GLMM need compared with a Bayesian GLM?
??
Priors on random-effect standard deviations (and correlations, for random slopes).
++++

In brms output, what is sd_site__Intercept?
??
The standard deviation of the site random intercepts.
++++
