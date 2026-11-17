---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "Grid approximation computes a posterior by evaluating likelihood × prior at a fine grid of parameter values and rescaling the results to sum to 1."
aliases:
  - "Grid search posterior"
  - "Brute-force posterior"
  - "Grid method"
status: seedling
---

# Grid Approximation

To survey a hill, walk a line of evenly spaced stakes, measure the height at each, and join the dots. **Grid approximation** computes a posterior the same way: lay down a fine grid of candidate parameter values, such as p = 0, 0.001, ..., 1, compute prior × likelihood at each, and divide by the sum so the values become posterior probabilities ([[Bayes' Theorem]], [[Likelihood Function]], [[Normalizing Constant]]). Summaries are then sums over the grid, and `sample(grid, prob = post)` gives posterior draws ([[Posterior Draws]]).

It shows Bayes' theorem with nothing hidden, which makes it good for learning. In the code below, with a Beta(2, 2) prior and 7 successes in 20, the grid posterior mean is 0.375, matching the exact answer (2 + 7)/(2 + 2 + 20) from the [[Conjugate Prior]] formula, and sampling from the grid gives a credible interval.

It fails beyond a few parameters, because the grid grows exponentially: 100 points for each of 10 parameters is 100¹⁰ = 10²⁰ evaluations, as the last line of the code shows. That cost is why [[MCMC]] exists, and grids are used only to introduce posteriors before it ([[Hobbs and Hooten 2015 Ch5]]). Real Bayesian software does not use grids; it samples.

```r
grid <- seq(0, 1, length.out = 1001); prior <- dbeta(grid, 2, 2); lik <- dbinom(7, 20, grid)
post <- prior * lik / sum(prior * lik)
c(mean = sum(grid * post), exact = (2 + 7) / (2 + 2 + 20))         # agrees with the exact conjugate answer
set.seed(4); d <- sample(grid, 10000, replace = TRUE, prob = post); quantile(d, c(0.025, 0.975))
100^10
```

## Connections
- **Builds on:** [[Bayes' Theorem]], [[Normalizing Constant]]
- **Leads to:** [[MCMC]], [[Posterior Draws]], [[Conjugate Prior]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is grid approximation?
??
Computing a posterior by evaluating prior × likelihood on a grid of parameter values and normalising.
++++

Why is grid approximation impractical for real models?
??
The number of grid points grows exponentially with the number of parameters.
++++
