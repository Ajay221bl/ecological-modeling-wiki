---
type: atomic
tags:
  - stan
  - flashcards/eco/stan
aliases:
  - "Non-centred parameterisation"
  - "Non-centered parametrization"
  - "Matt trick"
  - "z ~ std_normal()"
  - "NCP"
status: seedling
---

# Non-centered Parameterization

**In one line:** a non-centred parameterisation writes group effects as u = μ + τ × z with z ~ normal(0, 1), instead of u ~ normal(μ, τ), which removes the funnel-shaped dependence between u and τ that makes HMC diverge.

> [!info] Before this, it helps to know
> [[Random Intercepts in Stan]] · [[Divergent Transitions]] · [[Hamiltonian Monte Carlo]]

## The everyday picture
A funnel. When τ is small, all group effects are squeezed into a narrow neck; when τ is large they spread out. A sampler that takes fixed-size steps falls off the walls of the neck. Non-centring straightens the funnel into a tube.

## A tiny example
Eight schools data (Rubin 1981), 4 chains of 2000: centred model 51 divergent transitions, n_eff for τ about 270, R-hat 1.02; non-centred model 0 divergences, n_eff about 2800, R-hat 1.00.

## Start from zero
1. **Centred:** θ_j ~ normal(μ, τ). Good when each group has lots of data.
2. **Non-centred:** z_j ~ normal(0, 1); θ_j = μ + τ z_j. Good when groups have little data or τ is near zero.
3. **Same model, different geometry:** the posterior for θ is identical in theory; only sampling changes.
4. **brms uses non-centred random effects by default.**
5. **Divergences** in hierarchical models are the usual sign you need it.

## In R
```r
library(rstan); options(mc.cores = 2)
d <- list(J = 8, y = c(28, 8, -3, 7, -1, 1, 18, 12), sigma = c(15, 10, 16, 11, 9, 11, 10, 18))
cen <- "data { int<lower=0> J; vector[J] y; vector<lower=0>[J] sigma; } parameters { real mu; real<lower=0> tau; vector[J] theta; }
model { mu ~ normal(0, 5); tau ~ cauchy(0, 5); theta ~ normal(mu, tau); y ~ normal(theta, sigma); }"
nc <- "data { int<lower=0> J; vector[J] y; vector<lower=0>[J] sigma; } parameters { real mu; real<lower=0> tau; vector[J] z; }
transformed parameters { vector[J] theta = mu + tau * z; } model { mu ~ normal(0, 5); tau ~ cauchy(0, 5); z ~ std_normal(); y ~ normal(theta, sigma); }"
f1 <- stan(model_code = cen, data = d, chains = 4, iter = 2000, seed = 4, refresh = 0)
f2 <- stan(model_code = nc, data = d, chains = 4, iter = 2000, seed = 4, refresh = 0)
c(divergent_centered = sum(get_divergent_iterations(f1)), divergent_noncentered = sum(get_divergent_iterations(f2)))
round(rbind(centered = summary(f1, pars = "tau")$summary[, c("mean", "n_eff", "Rhat")], noncentered = summary(f2, pars = "tau")$summary[, c("mean", "n_eff", "Rhat")]), 2)
```

## In the course
Stan lab: mixed models ([[Course Website]]).

## Common confusions
- **"Raise adapt_delta until the divergences go away."** That can hide them; reparameterising fixes the cause.

## Explain it back
- What shape causes the problem?

*Pass test:* you can rewrite a centred hierarchical model as non-centred.

## Connections
- **Builds on:** [[Random Intercepts in Stan]], [[Divergent Transitions]]
- **Leads to:** [[Transformed Parameters]], [[adapt_delta and Sampler Settings]]
- **Part of:** [[MOC 17 - Stan|MOC - Stan]], molecular note [[Centered vs Non-centered Parameterization]]

## Flashcards

Write the non-centred form of θ_j ~ normal(μ, τ).
??
z_j ~ normal(0, 1); θ_j = μ + τ z_j.
++++

What geometry does non-centring fix?
??
The funnel between group effects and their SD τ.
++++
