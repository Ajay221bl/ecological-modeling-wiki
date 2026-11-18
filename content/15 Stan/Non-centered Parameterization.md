---
type: atomic
tags:
  - stan
  - flashcards/eco/stan
description: "A non-centred parameterisation writes group effects as u = μ + τ × z with z ~ normal(0, 1), instead of u ~ normal(μ, τ), which removes the funnel-shaped dependence between u and τ that makes HMC diverge."
aliases:
  - "Non-centred parameterisation"
  - "Non-centered parametrization"
  - "Matt trick"
  - "z ~ std_normal()"
  - "NCP"
status: seedling
---

# Non-centered Parameterization

Picture a funnel: when τ is small, all group effects are squeezed into a narrow neck, and when τ is large they spread out, so a sampler taking fixed-size steps falls off the walls of the neck. A **non-centred parameterisation** writes group effects as u = μ + τ × z with z ~ normal(0, 1), instead of u ~ normal(μ, τ), which straightens the funnel into a tube and removes the dependence between u and τ that makes HMC diverge ([[Random Intercepts in Stan]], [[Divergent Transitions]], [[Hamiltonian Monte Carlo]]). The centred form, θⱼ ~ normal(μ, τ), is good when each group has lots of data; the non-centred form, zⱼ ~ normal(0, 1) with θⱼ = μ + τzⱼ, is good when groups have little data or τ is near zero.

It is the same model with different geometry: the posterior for θ is identical in theory, and only sampling changes. Divergences in [[Hierarchical Model|hierarchical models]] are the usual sign you need it, and brms uses non-centred [[Random Effect|random effects]] by default ([[Bayesian GLMM]]). In the code below the classic eight-schools data (Rubin 1981), with 4 chains of 2,000 iterations, give the centred model 51 divergent transitions, an [[Effective Sample Size|effective sample size]] for τ of about 270 and R-hat 1.02; the non-centred model has 0 divergences, about 2,800 effective draws and R-hat 1.00.

It is taught in the Stan lab on [[Mixed Effects Model|mixed models]] ([[Course Website]], [[Transformed Parameters]]). Raising adapt_delta until the divergences go away can hide them; reparameterising fixes the cause ([[adapt_delta and Sampler Settings]]).

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

## Connections
- **Builds on:** [[Random Intercepts in Stan]], [[Divergent Transitions]], [[Hierarchical Model]], [[Random Effect]], [[Effective Sample Size]], [[Mixed Effects Model]]
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
