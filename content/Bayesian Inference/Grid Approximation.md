---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Grid search posterior"
  - "Brute-force posterior"
  - "Grid method"
status: seedling
---

# Grid Approximation

**In one line:** grid approximation computes a posterior by evaluating likelihood × prior at a fine grid of parameter values and rescaling the results to sum to 1.

> [!info] Before this, it helps to know
> [[Bayes' Theorem]] (what is being computed) · [[Normalizing Constant]] (the rescaling) · [[Likelihood Function]] (evaluated at each grid point)

## The everyday picture
Surveying a hill with a tape measure. Walk a line of evenly spaced stakes and measure the height at each. Join the dots and you have the hill's profile.

## Start from zero
1. **Lay down a grid** of candidate values, such as p = 0, 0.001, ..., 1.
2. **At each value compute prior × likelihood.**
3. **Divide by the sum.** Now the values are posterior probabilities.
4. **Summaries are sums over the grid.**
5. **Sample from it** with `sample(grid, prob = post)` to get posterior draws.
6. **It shows Bayes' theorem with nothing hidden.** Good for learning.
7. **It fails beyond a few parameters.** 100 grid points for each of 10 parameters is 10²⁰ evaluations. This is why MCMC exists.

## In R
```r
grid <- seq(0, 1, length.out = 1001); prior <- dbeta(grid, 2, 2); lik <- dbinom(7, 20, grid)
post <- prior * lik / sum(prior * lik)
c(mean = sum(grid * post), exact = (2 + 7) / (2 + 2 + 20))         # agrees with the exact conjugate answer
set.seed(4); d <- sample(grid, 10000, replace = TRUE, prob = post); quantile(d, c(0.025, 0.975))
100^10
```

## In the course
Used to introduce posteriors before MCMC ([[Hobbs and Hooten 2015 Ch5]] and Ch7 motivate MCMC by the cost of integration).

## Common confusions
- **"Grid approximation is how Bayesian software works."** Real software samples (MCMC). Grids don't scale.

## Explain it back
- Why does a grid fail with many parameters?

*Pass test:* you can compute a one-parameter posterior on a grid in R.

## Connections
- **Builds on:** [[Bayes' Theorem]], [[Normalizing Constant]]
- **Leads to:** [[MCMC]], [[Posterior Draws]], [[Conjugate Prior]]
- **Part of:** [[MOC - Bayesian Inference]]

## Flashcards

What is grid approximation?
??
Computing a posterior by evaluating prior × likelihood on a grid of parameter values and normalising.
++++

Why is grid approximation impractical for real models?
??
The number of grid points grows exponentially with the number of parameters.
++++
