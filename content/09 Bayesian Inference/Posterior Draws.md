---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "Posterior draws are the thousands of parameter values an MCMC sampler returns, which together stand in for the posterior distribution."
aliases:
  - "Posterior samples"
  - "MCMC draws"
  - "Draws"
  - "MCMC samples"
  - "Posterior sample"
  - "as_draws_df()"
status: seedling
---

# Posterior Draws

You can't see into a jar, but a few thousand marbles drawn from it tell you its colour mix almost exactly. **Posterior draws** are the thousands of parameter values an MCMC sampler returns, which together stand in for the [[Posterior Distribution]] ([[MCMC]]). The output is a table: one row per draw, the iterations after warm-up with all chains stacked, and one column per parameter. Each row is one plausible set of parameter values from the [[Joint Posterior Distribution]], and a column's histogram is that parameter's [[Marginal Posterior Distribution]]. A typical table has 4,000 rows.

Every summary is arithmetic on columns: `mean()`, `sd()` and `quantile()` give a [[Posterior Summary]] and a [[Credible Interval]], and probabilities are proportions, such as `mean(draws$b > 0)` ([[Monte Carlo Integration]]). [[Derived Quantities]] and predictions are computed row by row, and the results carry the uncertainty. In the code below a stand-in for `as_draws_df(fit)` has 4,000 rows; the slope column has mean 0.51, a 95% interval of 0.41 to 0.60, and a 0.98 probability of exceeding 0.4.

In brms use `as_draws_df(fit)`, in [[tidybayes]] `spread_draws()`, and in rstan `extract()`; the brms labs use `as_draws_df()` ([[Course Website]], [[Hobbs and Hooten 2015 Ch8]]). The draws are simulated parameter values, not simulated data; simulated data come from the [[Posterior Predictive Distribution]].

```r
set.seed(1); x <- runif(50, 0, 10); y <- 1 + 0.5 * x + rnorm(50); m <- lm(y ~ x)
draws <- as.data.frame(MASS::mvrnorm(4000, coef(m), vcov(m))); names(draws) <- c("b_Intercept", "b_x")      # stand-in for as_draws_df(fit)
head(round(draws, 3), 3); dim(draws)
c(mean = mean(draws$b_x), quantile(draws$b_x, c(0.025, 0.975)), prob_above_0.4 = mean(draws$b_x > 0.4))
```

## Connections
- **Builds on:** [[MCMC]], [[Posterior Distribution]], [[Monte Carlo Integration]]
- **Leads to:** [[Posterior Summary]], [[Credible Interval]], [[Derived Quantities]], [[Posterior Predictive Distribution]], [[tidybayes]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What are posterior draws?
??
Samples of parameter values from the posterior, usually produced by MCMC, used to approximate any posterior summary.
++++

In a table of posterior draws, what do rows and columns represent?
??
Rows are draws from the joint posterior. Columns are parameters.
++++
