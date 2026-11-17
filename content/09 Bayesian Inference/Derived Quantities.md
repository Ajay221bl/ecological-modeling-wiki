---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "A derived quantity is anything computed from the model's parameters, and its full posterior is obtained by doing that computation on every posterior draw."
aliases:
  - "Derived quantity"
  - "Derived parameter"
  - "Functions of parameters"
status: seedling
---

# Derived Quantities

A spreadsheet with a formula column fills itself in: put thousands of plausible rows in the parameter columns and the formula column gives thousands of plausible results. A **derived quantity** is anything computed from the model's parameters, such as a difference, a ratio, a threshold, a predicted value or a population growth rate, and its full posterior is obtained by doing that computation on every posterior draw ([[Posterior Draws]]). If you estimated a logistic curve's intercept β₀ and slope β₁, the tree cover at which occupancy is 50% is −β₀/β₁; computed for each of 4,000 draws, the 4,000 results are its posterior.

Write the quantity as a function of the parameters, apply it row by row, and summarise the results like any posterior. Using whole rows propagates uncertainty and parameter correlations automatically ([[Joint Posterior Distribution]]), with no [[Delta Method]] or bootstrap; this works because of the [[Equivariance Property of MCMC]], and it is one of the main practical advantages of Bayesian analysis. In the code below, correlated draws of β₀ and β₁ give a 50% point with median 25 and 95% interval 19 to 32, and the occupancy probability at 40% tree cover has median 0.23 with a 0.86 probability of being below 0.3.

In Stan this is the `generated quantities` block, in JAGS extra lines in the model, and in brms operations on `as_draws_df()` or `hypothesis()`; the Stan labs use generated quantities ([[Course Website]], [[Hobbs and Hooten 2015 Ch8]]). Don't plug the posterior means into the formula: that gives one number, and for nonlinear functions it isn't even the mean of the derived quantity ([[Jensen's Inequality]]). Compute per draw, then summarise. Predictions for new data are the [[Posterior Predictive Distribution]].

```r
set.seed(7); d <- data.frame(b0 = rnorm(4000, 2, 0.3)); d$b1 <- -0.08 + (d$b0 - 2) * (-0.02) + rnorm(4000, 0, 0.008)      # correlated posterior draws
d$x50 <- -d$b0 / d$b1; round(quantile(d$x50, c(0.025, 0.5, 0.975)), 1)                                                # posterior of the 50% point
d$p_at_40 <- plogis(d$b0 + d$b1 * 40); round(c(median = median(d$p_at_40), prob_below_0.3 = mean(d$p_at_40 < 0.3)), 2)
```

## Connections
- **Builds on:** [[Posterior Draws]], [[Joint Posterior Distribution]]
- **Leads to:** [[Equivariance Property of MCMC]], [[Delta Method]], [[Posterior Predictive Distribution]], [[Jensen's Inequality]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

How is the posterior of a derived quantity obtained?
??
Compute the quantity for every posterior draw. The resulting values are draws from its posterior.
++++

Why not compute a derived quantity from posterior means?
??
It ignores uncertainty and, for nonlinear functions, gives a biased result.
++++
