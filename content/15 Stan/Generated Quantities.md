---
type: atomic
tags:
  - stan
  - flashcards/eco/stan
aliases:
  - "generated quantities block"
  - "Posterior predictions in Stan"
  - "_rng functions"
status: seedling
---

# Generated Quantities

**In one line:** the generated quantities block runs once for each saved posterior draw and computes anything derived from the parameters, such as predictions, simulated data, pointwise log-likelihoods or contrasts.

> [!info] Before this, it helps to know
> [[Stan Program Blocks]] · [[Posterior Predictive Distribution]]

## A tiny example
```
generated quantities {
  vector[N] log_lik;
  vector[N] y_rep;
  for (n in 1:N) {
    log_lik[n] = normal_lpdf(y[n] | a + b * x[n], sigma);
    y_rep[n] = normal_rng(a + b * x[n], sigma);
  }
}
```

## Start from zero
1. **Runs after sampling,** so it does not slow the sampler or affect the posterior.
2. **_rng functions** simulate random values: replicated data for posterior predictive checks.
3. **log_lik** holds each observation's log-likelihood for LOO and WAIC.
4. **Derived quantities:** differences between groups, predictions at new x, back-transformed probabilities.
5. **Their uncertainty is automatic:** each draw gives one value, so you get a full posterior.

## In R
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

## In the course
Stan labs ([[Course Website]]).

## Common confusions
- **"Generated quantities change the fit."** They are computed from the fit and never feed back into it.

## Explain it back
- What are the two most common things to compute in generated quantities?

*Pass test:* you can write y_rep and log_lik.

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
