---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "Brms is an R package that fits Bayesian regression models with Stan while letting you write them in the familiar formula syntax of `lm` and `lmer`."
aliases:
  - "brms package"
  - "Bayesian Regression Models using Stan"
status: seedling
---

# brms

Stan is a powerful, demanding engine, and **brms** is an automatic gearbox that lets you drive it with the pedals you already know. It is an [[Packages in R|R package]] that fits Bayesian regression models with [[Stan]] while letting you write them in the formula syntax of `lm` and `lmer` ([[Model Formula Syntax]], [[Bayesian Inference]]). You write `brm(y ~ x + (1 | site), data = d, family = poisson())`, and brms translates that into Stan code, compiles it, runs the sampler and returns a fitted object ([[brm()]]).

The formula language is lme4's, with extensions: smooths `s()`, distributional models with a formula for σ, [[Zero Inflation|zero inflation]], [[Missing Data in Bayesian Models|missing data]] `mi()` and nonlinear formulas. Families include [[Normal Distribution|gaussian]], poisson, negbinomial, bernoulli, binomial, Beta, Gamma, zero-inflated and hurdle versions, ordinal and more. `get_prior()` lists the priors that can be set and `prior()` sets them ([[Setting Priors in brms]]). After fitting you use `summary()`, `plot()`, `pp_check()` ([[pp_check()]]), `conditional_effects()`, `posterior_predict()`, `loo()` and `bayes_R2()`, and [[tidybayes]] for plots of draws. The code below, not run in the wiki build because it needs Stan, is the standard workflow: a negative binomial model with a random site intercept and [[Weakly Informative Prior|weakly informative priors]], followed by summary, [[Trace Plot|trace plots]], a [[Posterior Predictive Check|posterior predictive check]] and [[Figures for Model Results|effect plots]].

The cost is that compilation takes a minute or so per new model and sampling is slower than `glmer`; the [[cmdstanr Backend]] can speed it up. `stancode(fit)` shows the generated program, a good bridge to writing Stan yourself. brms is the main Bayesian tool in the labs from October on ([[Course Website]]). It is not a different statistical method from Stan, only an interface; the model and sampler are Stan's. And default priors are not always fine: coefficients get flat priors by default, so set your own.

```r
# norun (needs Stan; this is the standard workflow)
library(brms)
fit <- brm(count ~ tree + (1 | site), data = d, family = negbinomial(),
           prior = c(prior(normal(0, 1), class = "b"), prior(exponential(1), class = "sd")),
           chains = 4, cores = 4, iter = 2000, seed = 1)
summary(fit); plot(fit); pp_check(fit, ndraws = 100); conditional_effects(fit)
```

## Connections
- **Builds on:** [[Model Formula Syntax]], [[Stan]], [[Packages in R]], [[Zero Inflation]], [[Missing Data in Bayesian Models]], [[Normal Distribution]], [[Weakly Informative Prior]], [[Trace Plot]], [[Posterior Predictive Check]]
- **Leads to:** [[brm()]], [[Setting Priors in brms]], [[pp_check()]], [[cmdstanr Backend]], [[tidybayes]], [[Figures for Model Results]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[Bayesian Linear Regression in R]]

## Flashcards

What is brms?
??
An R package that fits Bayesian regression models in Stan using lme4-style formula syntax.
++++
