---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "brms package"
  - "Bayesian Regression Models using Stan"
status: seedling
---

# brms

**In one line:** brms is an R package that fits Bayesian regression models with Stan while letting you write them in the familiar formula syntax of `lm` and `lmer`.

> [!info] Before this, it helps to know
> [[Model Formula Syntax]] (how models are written) · [[Stan]] (the engine underneath) · [[Bayesian Inference]] (what it does)

## The everyday picture
An automatic gearbox for a racing engine. Stan is the engine, powerful and demanding. brms lets you drive it with the pedals you already know.

## Start from zero
1. **You write:** `brm(y ~ x + (1 | site), data = d, family = poisson())`.
2. **brms translates that into Stan code,** compiles it, runs the sampler and returns a fitted object.
3. **Same formula language as lme4,** with extensions: smooths `s()`, distributional models (a formula for σ), zero inflation, missing data `mi()`, nonlinear formulas.
4. **Many families:** gaussian, poisson, negbinomial, bernoulli, binomial, Beta, Gamma, zero-inflated and hurdle versions, ordinal and more.
5. **Priors:** `get_prior()` lists what can be set. `prior()` sets them.
6. **After fitting:** `summary()`, `plot()`, `pp_check()`, `conditional_effects()`, `posterior_predict()`, `loo()`, `bayes_R2()`.
7. **Cost:** compilation takes a minute or so per new model, and sampling is slower than `glmer`.
8. **You can see the generated program** with `stancode(fit)`, a good bridge to writing Stan yourself.

## In R
```r
# norun (needs Stan; this is the standard workflow)
library(brms)
fit <- brm(count ~ tree + (1 | site), data = d, family = negbinomial(),
           prior = c(prior(normal(0, 1), class = "b"), prior(exponential(1), class = "sd")),
           chains = 4, cores = 4, iter = 2000, seed = 1)
summary(fit); plot(fit); pp_check(fit, ndraws = 100); conditional_effects(fit)
```

## In the course
The main Bayesian tool in the labs from October on ([[Course Website]]).

## Common confusions
- **"brms is a different statistical method from Stan."** It is an interface. The model and sampler are Stan's.
- **"Default priors are always fine."** Coefficients get flat priors by default. Set your own.

## Explain it back
- What does brms do between your formula and the results?

*Pass test:* you can fit a model with brms and list the follow-up functions.

## Connections
- **Builds on:** [[Model Formula Syntax]], [[Stan]]
- **Leads to:** [[brm()]], [[Setting Priors in brms]], [[pp_check()]], [[cmdstanr Backend]], [[tidybayes]]
- **Part of:** [[MOC - Bayesian Inference]], molecular note [[Bayesian Linear Regression in R]]

## Flashcards

What is brms?
??
An R package that fits Bayesian regression models in Stan using lme4-style formula syntax.
++++
