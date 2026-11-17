---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "Bayesian mixed model"
  - "Bayesian GLMM"
  - "Bayesian hierarchical regression"
  - "brms mixed model"
  - "Bayesian multilevel model"
status: seedling
---

# Bayesian GLMM

**In one line:** a Bayesian GLMM is the same model as a frequentist GLMM, with priors on the fixed effects, the random-effect SDs and correlations, fitted by MCMC to give a full posterior for every parameter including each group's effect.

> [!info] Before this, it helps to know
> [[GLMM]] · [[Hierarchical Model]] · [[brm()]]

## Start from zero
1. **Formula is lme4-style:** `brm(y ~ x + (x | site), family = poisson(), data = d)`.
2. **Priors needed for:** fixed effects (`class = b`), SDs (`class = sd`), correlations (`class = cor`), and family parameters such as `sigma` or `shape`.
3. **Advantages:** uncertainty in variance components flows into everything else; no boundary problem; weakly informative priors stabilise fits with few groups; easy predictions with full uncertainty.
4. **Costs:** slower, needs convergence checks (R-hat, ESS, divergences), and priors must be justified.
5. **Output names:** `b_x` (fixed), `sd_site__Intercept`, `cor_site__Intercept__x`, `r_site[3,Intercept]` (group effects).
6. **Checks:** posterior predictive checks (`pp_check`), LOO for comparison.

## In R
```r
# norun (brms fits take minutes; shown for syntax)
library(brms)
fit <- brm(seedlings ~ treatment + (1 | plot), family = poisson(), data = d, prior = c(prior(normal(0, 1), class = b), prior(exponential(1), class = sd)), chains = 4, cores = 4, seed = 1)
summary(fit); pp_check(fit); ranef(fit)$plot[1:3, , "Intercept"]
```

## In the course
Bayesian mixed models lab (pairs write their own analysis of `csd2003-2006kg.txt`) and Homework 4 (`C_vulgare_seedling_dataset.csv`) with brms and cmdstanr ([[Course Website]]).

## Common confusions
- **"Bayesian mixed models need informative priors."** Weakly informative priors usually suffice.

## Explain it back
- What does sd_site__Intercept refer to?

*Pass test:* you can write and read a brms mixed model.

## Connections
- **Builds on:** [[GLMM]], [[Hierarchical Model]], [[brm()]]
- **Leads to:** [[Priors on Standard Deviations]], [[LKJ Prior]], [[adapt_delta and Sampler Settings]], [[Posterior Predictive Check]]
- **Part of:** [[MOC - Mixed Models]], molecular note [[lme4 vs brms]], [[Bayesian Mixed Model Workflow in R]]

## Flashcards

What extra priors does a Bayesian GLMM need compared with a Bayesian GLM?
??
Priors on random-effect standard deviations (and correlations, for random slopes).
++++

In brms output, what is sd_site__Intercept?
??
The standard deviation of the site random intercepts.
++++
