---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "In brms you see which priors a model needs with `get_prior()` and assign them with `prior()`, addressing parameters by class and, if needed, by coefficient or group."
aliases:
  - "prior()"
  - "get_prior()"
  - "set_prior()"
  - "default_prior()"
  - "Prior classes in brms"
status: seedling
---

# Setting Priors in brms

In brms you see which priors a model needs with `get_prior(formula, data, family)`, which returns a table of every parameter with its default, and assign them with `prior()`, addressing parameters by class and, if needed, by [[Regression Coefficient|coefficient]] or group ([[brm()]], [[Prior Distribution]]). The classes are `Intercept`; `b`, the slopes or "population-level" coefficients; `sd`, group-level standard [[Deviation|deviations]]; `sigma`, the residual sd; `cor`, correlations among [[Group-level Model|group-level effects]]; `shape` for the negative binomial or gamma; and `phi` for the beta. Set a whole class with `prior(normal(0, 1), class = "b")` or one coefficient with `prior(normal(0, 0.5), class = "b", coef = "tree")`, and combine them with `c()`.

The defaults are flat for `b`, a Student-t(3, ·, 2.5) scaled to the response for `Intercept`, `sd` and `sigma`, and LKJ(1) for `cor`. The Intercept prior refers to the intercept with [[Predictor Variable|predictors]] centered at their means, which is how brms parameterises internally. Distributions are written in Stan's syntax, so `normal(0, 1)` uses a [[Standard Deviation|standard deviation]]. The code below, not run in the wiki build, lists the priors for a Poisson model with a site effect, sets [[Weakly Informative Prior|weakly informative priors]] on the intercept, slopes and site sd, fits the model and shows what was used with `prior_summary(fit)`.

Check what the chosen priors imply with a [[Prior Predictive Check]], using `sample_prior = "only"` ([[Course Website]]). A normal(0, 1) prior on an `sd` cannot go negative: brms applies the lower bound of zero automatically, making it a [[Half-Normal Prior]].

```r
# norun (needs brms; shown for the syntax)
library(brms)
get_prior(count ~ tree + (1 | site), data = d, family = poisson())
pri <- c(prior(normal(0, 2), class = "Intercept"),
         prior(normal(0, 1), class = "b"),
         prior(exponential(1), class = "sd"))
fit <- brm(count ~ tree + (1 | site), data = d, family = poisson(), prior = pri)
prior_summary(fit)
```

## Connections
- **Builds on:** [[brm()]], [[Prior Distribution]], [[Regression Coefficient]], [[Deviation]], [[Group-level Model]], [[Predictor Variable]], [[Standard Deviation]]
- **Leads to:** [[Weakly Informative Prior]], [[Half-Normal Prior]], [[Prior Predictive Check]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

Which brms function lists the priors a model needs?
??
get_prior().
++++

What is the default brms prior on regression slopes (class b)?
??
Flat (improper uniform).
++++
