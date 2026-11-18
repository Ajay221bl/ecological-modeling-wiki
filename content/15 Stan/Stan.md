---
type: atomic
tags:
  - stan
  - flashcards/eco/stan
description: "Stan is a probabilistic programming language in which you write a statistical model as code, and its sampler (Hamiltonian Monte Carlo) draws from the posterior distribution of the parameters."
aliases:
  - "Stan language"
  - "Stan (probabilistic programming language)"
  - "Probabilistic programming"
status: seedling
---

# Stan

A recipe card for a model lists the ingredients (data), the unknowns (parameters) and how they combine (the model); Stan is the kitchen that reads the card and produces samples of the finished dish. **Stan** is a probabilistic programming language in which you write a [[Statistical Model|statistical model]] as code, and its sampler draws from the [[Posterior Distribution]] of the parameters ([[MCMC]]). You write the model once, in blocks for data, parameters, model and optional extras ([[Stan Program Blocks]]). Stan translates it to C++ and compiles it, which takes a minute or so the first time.

The sampler is NUTS, an adaptive form of [[Hamiltonian Monte Carlo]] that uses gradients of the log posterior. The output is [[Posterior Draws|posterior draws]] for every parameter plus [[Residual Diagnostics|diagnostics]]: R-hat, effective sample size and divergences ([[R-hat]], [[Effective Sample Size]], [[Divergent Transitions]]). You run it from R with rstan or [[cmdstanr Backend|cmdstanr]], and brms and rstanarm write Stan code for you ([[Running Stan from R]], [[brms-generated Stan Code]]). The code below fits a straight-line regression to 50 simulated points with true intercept 1, slope 2 and σ 0.5; Stan recovers them as 1.03 (95% interval 0.74 to 1.32), 2.04 (1.55 to 2.51) and 0.48, with R-hat 1 for all three.

Why learn the language when brms exists? For custom models that no formula interface covers, such as occupancy, N-mixture and state-space models, and to understand what brms does ([[Occupancy]], [[N-mixture Model]]). It is taught in the Stan language labs of November 17 (simple models) and November 19 ([[Mixed Effects Model|mixed models]]) ([[Course Website]]). Stan is not an [[Packages in R|R package]]; it is a separate language and engine, and rstan and cmdstanr are R interfaces. And Stan does not use [[Gibbs Sampling|Gibbs sampling]] like JAGS; it uses Hamiltonian Monte Carlo ([[JAGS and BUGS|JAGS]]).

```r
library(rstan); options(mc.cores = 2)
code <- "data { int<lower=0> N; vector[N] x; vector[N] y; }
parameters { real a; real b; real<lower=0> sigma; }
model { a ~ normal(0, 10); b ~ normal(0, 10); sigma ~ exponential(1); y ~ normal(a + b * x, sigma); }"
set.seed(1); x <- runif(50); y <- 1 + 2 * x + rnorm(50, 0, 0.5)
f <- stan(model_code = code, data = list(N = 50, x = x, y = y), chains = 4, iter = 1000, seed = 1, refresh = 0)
round(summary(f, pars = c("a", "b", "sigma"))$summary[, c("mean", "2.5%", "97.5%", "n_eff", "Rhat")], 2)
```

## Connections
- **Builds on:** [[Posterior Distribution]], [[MCMC]], [[Hamiltonian Monte Carlo]], [[Statistical Model]], [[Posterior Draws]], [[Residual Diagnostics]], [[cmdstanr Backend]], [[Mixed Effects Model]], [[Packages in R]], [[Gibbs Sampling]]
- **Leads to:** [[Stan Program Blocks]], [[Running Stan from R]], [[brms]]
- **Part of:** [[MOC 17 - Stan|MOC - Stan]], molecular note [[Stan vs brms vs JAGS]], [[Writing a Stan Model Step by Step]]

## Flashcards

What is Stan?
??
A probabilistic programming language whose NUTS sampler draws from the posterior of a model you write as code.
++++

Which sampler does Stan use?
??
NUTS, an adaptive Hamiltonian Monte Carlo.
++++
