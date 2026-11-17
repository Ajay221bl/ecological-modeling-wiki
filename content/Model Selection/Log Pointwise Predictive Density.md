---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "lppd"
  - "Log predictive density"
  - "log_lik matrix"
status: seedling
---

# Log Pointwise Predictive Density

**In one line:** the log pointwise predictive density adds up, over observations, the log of the average probability the posterior assigns to each observed value.

> [!info] Before this, it helps to know
> [[Log-likelihood]] (its frequentist counterpart) · [[Posterior Draws]] (what is averaged over) · [[Scoring Rules]] (the log score)

## The everyday picture
A forecaster's track record. For each day, how much probability did the forecast put on what actually happened? Take the log and add up the days. Confident correct forecasts score well. Confident wrong ones are punished hard.

## Start from zero
1. **For observation i and posterior draw s,** compute p(yᵢ | θ_s): the likelihood of that one observation.
2. **Average over draws:** p̄ᵢ = mean over s of p(yᵢ | θ_s). This is the posterior predictive density at yᵢ.
3. **lppd = Σᵢ log p̄ᵢ.**
4. **Higher is better.**
5. **It is in-sample,** so it is optimistic, just like a maximised log-likelihood.
6. **WAIC and LOO correct that optimism** to estimate out-of-sample accuracy (elpd).
7. **The ingredient is the S × n "log_lik" matrix:** log p(yᵢ | θ_s) for every draw and observation. brms computes it with `log_lik(fit)`.

## In R
```r
set.seed(1); x <- runif(60, 0, 10); y <- 1 + 0.5 * x + rnorm(60); m <- lm(y ~ x)
S <- 2000; B <- MASS::mvrnorm(S, coef(m), vcov(m)); sig <- sigma(m) * sqrt(58 / rchisq(S, 58))      # approximate posterior draws
ll <- sapply(1:60, function(i) dnorm(y[i], B[, 1] + B[, 2] * x[i], sig, log = TRUE)); dim(ll)       # S x n log_lik matrix
lppd <- sum(log(colMeans(exp(ll)))); c(lppd = lppd, max_logLik = as.numeric(logLik(m)))
```

## In the course
Bayesian model comparison lecture ([[Course Website]]). [[Hobbs and Hooten 2015 Ch9]].

## Common confusions
- **"lppd is the log of the posterior mean likelihood of all data together."** It is computed observation by observation, then summed.

## Explain it back
- Why is lppd optimistic?

*Pass test:* you can compute lppd from a log-likelihood matrix.

## Connections
- **Builds on:** [[Log-likelihood]], [[Posterior Draws]]
- **Leads to:** [[WAIC]], [[Expected Log Predictive Density]], [[Leave-one-out Cross-validation]]
- **Part of:** [[MOC - Bayesian Model Selection]]

## Flashcards

How is the log pointwise predictive density computed?
??
For each observation, average its likelihood over posterior draws, take the log, and sum over observations.
++++
