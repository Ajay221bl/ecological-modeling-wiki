---
type: atomic
tags:
  - stan
  - flashcards/eco/stan
description: "The generated quantities block runs once for each saved posterior draw and computes anything derived from the parameters, such as predictions, simulated data, pointwise log-likelihoods or contrasts."
aliases:
  - "generated quantities block"
  - "Posterior predictions in Stan"
  - "_rng functions"
status: seedling
---

# Generated Quantities

The **generated quantities** block runs once for each saved posterior draw and computes anything derived from the parameters, such as predictions, simulated data, pointwise log-likelihoods or contrasts ([[Stan Program Blocks]], [[Posterior Predictive Distribution]]). It runs after sampling, so it does not slow the sampler or affect the posterior. `_rng` functions simulate random values, such as replicated data for posterior predictive checks ([[Posterior Predictive Check]]), and `log_lik` holds each observation's log-likelihood for LOO and WAIC ([[log_lik for LOO]]).

Derived quantities such as differences between groups, predictions at new x or back-transformed probabilities get their uncertainty automatically, because each draw gives one value and so you get a full posterior. The code below adds `log_lik` and `y_rep` to the simple regression: the observed y has an SD of 0.720, and the replicated datasets average 0.729, so the model reproduces the spread of the data; `loo()` on the log_lik matrix then gives elpd_loo = −34.6.

It is used in the Stan labs ([[Course Website]], [[Transformed Parameters]]). Generated quantities don't change the fit; they are computed from it and never feed back into it.

```r
library(rstan); options(mc.cores = 2)
code <- "data { int<lower=0> N; vector[N] x; vector[N] y; }
parameters { real a; real b; real<lower=0> sigma; }
model { a ~ normal(0, 10); b ~ normal(0, 10); sigma ~ exponential(1); y ~ normal(a + b * x, sigma); }
generated quantities { vector[N] log_lik; vector[N] y_rep;
  for (n in 1:N) { log_lik[n] = normal_lpdf(y[n] | a + b * x[n], sigma); y_rep[n] = normal_rng(a + b * x[n], sigma); } }"
set.seed(1); x <- runif(50); y <- 1 + 2 * x + rnorm(50, 0, 0.5)
f <- stan(model_code = code, data = list(N = 50, x = x, y = y), chains = 4, iter = 1000, seed = 1, refresh = 0)
yrep <- extract(f, "y_rep")$y_rep; round(c(sd_y = sd(y), mean_sd_yrep = mean(apply(yrep, 1, sd))), 3)
ll <- loo::extract_log_lik(f, merge_chains = FALSE); loo::loo(ll, r_eff = loo::relative_eff(exp(ll)))$estimates
```

## Connections
- **Builds on:** [[Stan Program Blocks]], [[Posterior Predictive Distribution]]
- **Leads to:** [[log_lik for LOO]], [[Posterior Predictive Check]]
- **Part of:** [[MOC 17 - Stan|MOC - Stan]]

## Flashcards

When does the generated quantities block run?
??
Once per saved posterior draw, after sampling.
++++

What does normal_rng() do in generated quantities?
??
Simulates a random normal value, e.g. replicated data y_rep.
++++
