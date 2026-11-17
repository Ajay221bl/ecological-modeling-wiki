---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Monte Carlo estimate"
  - "Monte Carlo approximation"
  - "Sample-based integration"
status: seedling
---

# Monte Carlo Integration

**In one line:** Monte Carlo integration approximates an integral, such as a mean or a probability under a distribution, by averaging over random draws from that distribution.

> [!info] Before this, it helps to know
> [[Monte Carlo Simulation]] (the method) · [[Integral]] (what is being computed) · [[Expected Value]] (an integral in disguise)

## The everyday picture
Finding the area of a pond by throwing pebbles at random into the field around it. The fraction that splash, times the field's area, estimates the pond's area. No formula for the pond's shape is needed.

## Start from zero
1. **Posterior summaries are integrals.** The posterior mean is ∫ θ P(θ | y) dθ.
2. **Those integrals are rarely solvable.**
3. **But if you have draws θ₁ ... θ_N from the posterior:** the mean of the draws approximates the integral.
4. **Any function works:** E[g(θ)] ≈ average of g(θᵢ).
5. **Probabilities are averages of 0/1 indicators:** P(θ > 0) ≈ fraction of draws above 0.
6. **Quantiles of draws approximate quantiles of the distribution.**
7. **This is why MCMC output is all you need.** Every summary becomes simple arithmetic on a column of numbers.
8. **Accuracy depends on the number of effectively independent draws.**

## In R
```r
set.seed(13); d <- rgamma(1e5, shape = 3, rate = 2)
c(mc_mean = mean(d), exact = 3 / 2); c(mc_prob = mean(d > 2), exact = 1 - pgamma(2, 3, 2))
c(mc = mean(log(d)), exact = digamma(3) - log(2))                    # the expectation of any function, no calculus needed
```

## In the course
[[Hobbs and Hooten 2015 Ch7]] and Ch8.

## Common confusions
- **"More draws make the posterior narrower."** They make your approximation of the posterior more exact. Only more data narrow the posterior.

## Explain it back
- How is P(θ > 0) computed by Monte Carlo integration?

*Pass test:* you can turn any posterior question into an operation on draws.

## Connections
- **Builds on:** [[Monte Carlo Simulation]], [[Integral]], [[Expected Value]]
- **Leads to:** [[Posterior Draws]], [[MCMC]], [[Derived Quantities]], [[Effective Sample Size]]
- **Part of:** [[MOC - Bayesian Inference]]

## Flashcards

What is Monte Carlo integration?
??
Approximating an integral (an expectation or probability) by the average over random draws from the distribution.
++++

Does running more MCMC iterations reduce posterior uncertainty?
??
No. It reduces Monte Carlo error in approximating the posterior.
++++
