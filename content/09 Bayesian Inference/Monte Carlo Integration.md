---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "Monte Carlo integration approximates an integral, such as a mean or a probability under a distribution, by averaging over random draws from that distribution."
aliases:
  - "Monte Carlo estimate"
  - "Monte Carlo approximation"
  - "Sample-based integration"
status: seedling
---

# Monte Carlo Integration

To find the area of an oddly shaped pond, throw pebbles at random over the field around it: the fraction that splash, times the field's area, estimates the pond's area, with no formula for its shape. **Monte Carlo integration** approximates an [[Integral]], such as a mean or a probability under a distribution, by averaging over random draws from that distribution ([[Monte Carlo Simulation]]). Posterior summaries are integrals, for example the posterior mean ∫ θ P(θ | y) dθ, and are rarely solvable, but with draws θ₁ ... θ_N from the posterior, the mean of the draws approximates it.

Any function works: E[g(θ)] is approximated by the average of g(θᵢ) ([[Expected Value]]). Probabilities are averages of 0/1 indicators, so P(θ > 0) is the fraction of draws above 0, and quantiles of the draws approximate quantiles of the distribution. In the code below, 100,000 draws from a gamma distribution give a mean of 1.5, a probability above 2 of 0.24 and a mean of log(θ) of 0.23, each matching the exact value, with no calculus needed.

This is why MCMC output is all you need: every summary and every [[Derived Quantities|derived quantity]] becomes simple arithmetic on a column of numbers ([[Posterior Draws]], [[MCMC]], [[Hobbs and Hooten 2015 Ch7]]). Accuracy depends on the number of effectively independent draws ([[Effective Sample Size]]). More draws do not make the posterior narrower; they make your approximation of it more exact, and only more data narrow the posterior.

```r
set.seed(13); d <- rgamma(1e5, shape = 3, rate = 2)
c(mc_mean = mean(d), exact = 3 / 2); c(mc_prob = mean(d > 2), exact = 1 - pgamma(2, 3, 2))
c(mc = mean(log(d)), exact = digamma(3) - log(2))                    # the expectation of any function, no calculus needed
```

## Connections
- **Builds on:** [[Monte Carlo Simulation]], [[Integral]], [[Expected Value]]
- **Leads to:** [[Posterior Draws]], [[MCMC]], [[Derived Quantities]], [[Effective Sample Size]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is Monte Carlo integration?
??
Approximating an integral (an expectation or probability) by the average over random draws from the distribution.
++++

Does running more MCMC iterations reduce posterior uncertainty?
??
No. It reduces Monte Carlo error in approximating the posterior.
++++
