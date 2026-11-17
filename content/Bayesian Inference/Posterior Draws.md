---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
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

**In one line:** posterior draws are the thousands of parameter values an MCMC sampler returns, which together stand in for the posterior distribution.

> [!info] Before this, it helps to know
> [[MCMC]] (where they come from) · [[Posterior Distribution]] (what they represent) · [[Monte Carlo Integration]] (how they are used)

## The everyday picture
A bag of marbles drawn from a jar you can't see into. You can't look at the jar's contents directly. A few thousand marbles tell you its colour mix almost exactly.

## Start from zero
1. **MCMC output is a table.** Rows: draws (iterations after warm-up, all chains stacked). Columns: parameters.
2. **Each row is one plausible set of parameter values** from the joint posterior.
3. **A column's histogram is that parameter's marginal posterior.**
4. **Summaries are arithmetic on columns:** `mean()`, `sd()`, `quantile()`.
5. **Probabilities are proportions:** `mean(draws$b > 0)`.
6. **Derived quantities:** compute them row by row. The results are draws of the derived quantity.
7. **Predictions:** for each row compute the prediction. The set of predictions carries the uncertainty.
8. **In brms:** `as_draws_df(fit)`. With tidybayes: `spread_draws()`. In rstan: `extract()`.
9. **Typical size:** 4,000 rows.

## In R
```r
set.seed(1); x <- runif(50, 0, 10); y <- 1 + 0.5 * x + rnorm(50); m <- lm(y ~ x)
draws <- as.data.frame(MASS::mvrnorm(4000, coef(m), vcov(m))); names(draws) <- c("b_Intercept", "b_x")      # stand-in for as_draws_df(fit)
head(round(draws, 3), 3); dim(draws)
c(mean = mean(draws$b_x), quantile(draws$b_x, c(0.025, 0.975)), prob_above_0.4 = mean(draws$b_x > 0.4))
```

## In the course
`as_draws_df()` in the brms labs ([[Course Website]]). [[Hobbs and Hooten 2015 Ch8]].

## Common confusions
- **"The draws are simulated data."** They are simulated parameter values. Simulated data come from the posterior predictive distribution.

## Explain it back
- What is one row? What is one column?

*Pass test:* you can compute any summary from a table of draws.

## Connections
- **Builds on:** [[MCMC]], [[Posterior Distribution]], [[Monte Carlo Integration]]
- **Leads to:** [[Posterior Summary]], [[Credible Interval]], [[Derived Quantities]], [[Posterior Predictive Distribution]], [[tidybayes]]
- **Part of:** [[MOC - Bayesian Inference]]

## Flashcards

What are posterior draws?
??
Samples of parameter values from the posterior, usually produced by MCMC, used to approximate any posterior summary.
++++

In a table of posterior draws, what do rows and columns represent?
??
Rows are draws from the joint posterior. Columns are parameters.
++++
