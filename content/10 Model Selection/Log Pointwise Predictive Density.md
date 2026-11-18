---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "The log pointwise predictive density adds up, over observations, the log of the average probability the posterior assigns to each observed value."
aliases:
  - "lppd"
  - "Log predictive density"
  - "log_lik matrix"
status: seedling
---

# Log Pointwise Predictive Density

A forecaster's track record asks, for each day, how much probability the forecast put on what actually happened; take the log and add up the days, and confident correct forecasts score well while confident wrong ones are punished hard ([[Scoring Rules]]). The **log pointwise predictive density** (lppd) is that score for a Bayesian model. For observation i and posterior draw s, compute p(yᵢ | θ_s), the likelihood of that one observation; average over draws to get p̄ᵢ, the [[Posterior Predictive Distribution|posterior predictive]] density at yᵢ; then lppd = Σᵢ log p̄ᵢ. Higher is better ([[Posterior Draws]]).

The ingredient is the S × n "[[log_lik for LOO|log_lik]]" matrix of log p(yᵢ | θ_s) for every draw and observation, which brms computes with `log_lik(fit)`. In the code below approximate posterior draws for a regression give a 2,000 × 60 matrix and an lppd of −76.7, close to the maximised [[Log-likelihood]] of −76.5.

Like a maximised log-likelihood, lppd is in-sample and therefore optimistic; [[WAIC]] and [[Leave-one-out Cross-validation]] correct that optimism to estimate out-of-sample accuracy, the [[Expected Log Predictive Density]] ([[Hobbs and Hooten 2015 Ch9]], [[Course Website]]). lppd is not the log of the [[Posterior Summary|posterior mean]] likelihood of all the data together: it is computed observation by observation, then summed.

```r
set.seed(1); x <- runif(60, 0, 10); y <- 1 + 0.5 * x + rnorm(60); m <- lm(y ~ x)
S <- 2000; B <- MASS::mvrnorm(S, coef(m), vcov(m)); sig <- sigma(m) * sqrt(58 / rchisq(S, 58))      # approximate posterior draws
ll <- sapply(1:60, function(i) dnorm(y[i], B[, 1] + B[, 2] * x[i], sig, log = TRUE)); dim(ll)       # S x n log_lik matrix
lppd <- sum(log(colMeans(exp(ll)))); c(lppd = lppd, max_logLik = as.numeric(logLik(m)))
```

## Connections
- **Builds on:** [[Log-likelihood]], [[Posterior Draws]], [[Posterior Predictive Distribution]], [[Posterior Summary]]
- **Leads to:** [[WAIC]], [[Expected Log Predictive Density]], [[Leave-one-out Cross-validation]], [[log_lik for LOO]]
- **Part of:** [[MOC 11 - Bayesian Model Selection|MOC - Bayesian Model Selection]]

## Flashcards

How is the log pointwise predictive density computed?
??
For each observation, average its likelihood over posterior draws, take the log, and sum over observations.
++++
