---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Derived quantity"
  - "Derived parameter"
  - "Functions of parameters"
status: seedling
---

# Derived Quantities

**In one line:** a derived quantity is anything computed from the model's parameters, and its full posterior is obtained by doing that computation on every posterior draw.

> [!info] Before this, it helps to know
> [[Posterior Draws]] (the input) · [[Joint Posterior Distribution]] (why whole rows are used) · [[Equivariance Property of MCMC]] (why it works)

## The everyday picture
A spreadsheet with a formula column. Fill the parameter columns with thousands of plausible rows, and the formula column fills in by itself with thousands of plausible results.

## A tiny example
You estimated a logistic curve's intercept β₀ and slope β₁. The tree cover at which occupancy is 50% is −β₀/β₁. Compute it for each of 4,000 draws. The 4,000 results are its posterior.

## Start from zero
1. **Often the parameters aren't what you want.** You want a difference, a ratio, a threshold, a predicted value, a population growth rate.
2. **Write the quantity as a function** of the parameters.
3. **Apply it to every draw,** row by row.
4. **Summarise the results** like any posterior: median, interval, probability of exceeding a threshold.
5. **Uncertainty and parameter correlations are propagated automatically.**
6. **No delta method, no bootstrap.**
7. **This is one of the main practical advantages** of Bayesian analysis.
8. **In Stan:** the `generated quantities` block. In JAGS: extra lines in the model. In brms: operate on `as_draws_df()` or use `hypothesis()`.

## In R
```r
set.seed(7); d <- data.frame(b0 = rnorm(4000, 2, 0.3)); d$b1 <- -0.08 + (d$b0 - 2) * (-0.02) + rnorm(4000, 0, 0.008)      # correlated posterior draws
d$x50 <- -d$b0 / d$b1; round(quantile(d$x50, c(0.025, 0.5, 0.975)), 1)                                                # posterior of the 50% point
d$p_at_40 <- plogis(d$b0 + d$b1 * 40); round(c(median = median(d$p_at_40), prob_below_0.3 = mean(d$p_at_40 < 0.3)), 2)
```

## In the course
[[Hobbs and Hooten 2015 Ch8]]. Used in the Stan labs' generated quantities ([[Course Website]]).

## Common confusions
- **"Plug the posterior means into the formula."** That gives one number, which for nonlinear functions isn't even the mean of the derived quantity. Compute per draw, then summarise.

## Explain it back
- How do you get an interval for a ratio of two parameters?

*Pass test:* you can compute the posterior of a derived quantity.

## Connections
- **Builds on:** [[Posterior Draws]], [[Joint Posterior Distribution]]
- **Leads to:** [[Equivariance Property of MCMC]], [[Delta Method]], [[Posterior Predictive Distribution]], [[Jensen's Inequality]]
- **Part of:** [[MOC - Bayesian Inference]]

## Flashcards

How is the posterior of a derived quantity obtained?
??
Compute the quantity for every posterior draw. The resulting values are draws from its posterior.
++++

Why not compute a derived quantity from posterior means?
??
It ignores uncertainty and, for nonlinear functions, gives a biased result.
++++
