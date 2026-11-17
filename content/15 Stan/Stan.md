---
type: atomic
tags:
  - stan
  - flashcards/eco/stan
aliases:
  - "Stan language"
  - "Stan (probabilistic programming language)"
  - "Probabilistic programming"
status: seedling
---

# Stan

**In one line:** Stan is a probabilistic programming language in which you write a statistical model as code, and its sampler (Hamiltonian Monte Carlo) draws from the posterior distribution of the parameters.

> [!info] Before this, it helps to know
> [[Posterior Distribution]] · [[MCMC]] · [[Hamiltonian Monte Carlo]]

## The everyday picture
A recipe card for a model. You write down the ingredients (data), the unknowns (parameters) and how they combine (the model). Stan is the kitchen that cooks it: it reads the card and produces samples of the finished dish.

## Start from zero
1. **You write the model once,** in blocks: data, parameters, model, and optional extras.
2. **Stan translates it to C++ and compiles it,** which takes a minute or so the first time.
3. **The sampler is NUTS,** an adaptive form of Hamiltonian Monte Carlo that uses gradients of the log posterior.
4. **Output:** posterior draws for every parameter, plus diagnostics (R-hat, ESS, divergences).
5. **Run from R** with rstan or cmdstanr; brms and rstanarm write Stan code for you.
6. **Why learn the language** when brms exists: custom models (occupancy, N-mixture, state-space) that no formula interface covers, and understanding what brms does.

## In R
```r
library(rstan); options(mc.cores = 2)
code <- "data { int<lower=0> N; vector[N] x; vector[N] y; }
parameters { real a; real b; real<lower=0> sigma; }
model { a ~ normal(0, 10); b ~ normal(0, 10); sigma ~ exponential(1); y ~ normal(a + b * x, sigma); }"
set.seed(1); x <- runif(50); y <- 1 + 2 * x + rnorm(50, 0, 0.5)
f <- stan(model_code = code, data = list(N = 50, x = x, y = y), chains = 4, iter = 1000, seed = 1, refresh = 0)
round(summary(f, pars = c("a", "b", "sigma"))$summary[, c("mean", "2.5%", "97.5%", "n_eff", "Rhat")], 2)
```

## In the course
Stan language labs, Nov 17 (simple models) and Nov 19 (mixed models) ([[Course Website]]).

## Common confusions
- **"Stan is an R package."** It is a separate language and engine; rstan and cmdstanr are R interfaces.
- **"Stan uses Gibbs sampling like JAGS."** Stan uses Hamiltonian Monte Carlo (NUTS).

## Explain it back
- What does Stan do with the model you write?

*Pass test:* you can say what Stan is and run a simple model.

## Connections
- **Builds on:** [[Posterior Distribution]], [[MCMC]], [[Hamiltonian Monte Carlo]]
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
