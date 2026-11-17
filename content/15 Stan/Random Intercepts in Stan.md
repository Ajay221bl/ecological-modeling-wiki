---
type: atomic
tags:
  - stan
  - flashcards/eco/stan
aliases:
  - "Random intercept model in Stan"
  - "Hierarchical model in Stan"
  - "Mixed model in Stan"
status: seedling
---

# Random Intercepts in Stan

**In one line:** a random intercept model in Stan gives each group a deviation u_j drawn from normal(0, σ_g), estimates σ_g with its own prior, and adds u[g] to the linear predictor.

> [!info] Before this, it helps to know
> [[Random Intercept]] · [[Group Index Vectors in Stan]] · [[Hierarchical Model]]

## A tiny example
sleepstudy, Reaction ~ Days + (1 | Subject): Stan (non-centred, weakly informative priors) gives intercept 250.8 (95% interval 231 to 270), slope 10.45, σ_subject 37.3 and residual σ 31.1. lmer gives 251.4, 10.47, 37.1 and 31.0.

## Start from zero
1. **Parameters:** fixed effects, σ (residual), σ_g (between groups), and J group effects.
2. **Hierarchical prior:** u_j ~ normal(0, σ_g), or the non-centred form u = σ_g × z with z ~ normal(0, 1).
3. **Priors on σ_g** matter when J is small; half-normal or exponential are common.
4. **Results match lmer closely** when data are informative, as here.
5. **Extend to slopes** with a second group vector, and to correlated effects with an LKJ prior on a Cholesky factor.

## In R
```r
library(rstan); library(lme4); options(mc.cores = 2)
code <- "data { int<lower=1> N; int<lower=1> J; array[N] int<lower=1, upper=J> g; vector[N] x; vector[N] y; }
parameters { real a; real b; real<lower=0> sigma; real<lower=0> sigma_g; vector[J] z; }
transformed parameters { vector[J] u = sigma_g * z; }
model { a ~ normal(250, 50); b ~ normal(0, 20); sigma ~ exponential(0.05); sigma_g ~ exponential(0.05); z ~ std_normal(); y ~ normal(a + u[g] + b * x, sigma); }"
d <- with(sleepstudy, list(N = nrow(sleepstudy), J = nlevels(Subject), g = as.integer(Subject), x = Days, y = Reaction))
f <- stan(model_code = code, data = d, chains = 4, iter = 2000, seed = 2, refresh = 0)
round(summary(f, pars = c("a", "b", "sigma_g", "sigma"))$summary[, c("mean", "2.5%", "97.5%", "Rhat")], 2)
m <- lmer(Reaction ~ Days + (1 | Subject), sleepstudy); round(c(fixef(m), sd_g = attr(VarCorr(m)$Subject, "stddev"), sigma = sigma(m)), 2)
```

## In the course
Stan lab: mixed models ([[Course Website]]).

## Common confusions
- **"The group effects need their own fixed priors."** Their prior is the hierarchical normal(0, σ_g), with σ_g estimated.

## Explain it back
- Which parameter is the Stan analogue of lmer's subject SD?

*Pass test:* you can write a random intercept model in Stan.

## Connections
- **Builds on:** [[Random Intercept]], [[Group Index Vectors in Stan]], [[Hierarchical Model]]
- **Leads to:** [[Non-centered Parameterization]], [[LKJ Prior]], [[Bayesian GLMM]]
- **Part of:** [[MOC 17 - Stan|MOC - Stan]], molecular note [[lme4 vs brms]], [[Centered vs Non-centered Parameterization]]

## Flashcards

Write the hierarchical prior for random intercepts in Stan.
??
u ~ normal(0, sigma_g), or u = sigma_g * z with z ~ std_normal().
++++
