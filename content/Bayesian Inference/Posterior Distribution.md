---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Posterior"
  - "Posterior probability"
  - "P(θ | y)"
  - "Posterior density"
status: seedling
---

# Posterior Distribution

**In one line:** the posterior distribution describes which parameter values are plausible after combining the prior with the data.

> [!info] Before this, it helps to know
> [[Bayes' Theorem]] (how it is obtained) · [[Prior Distribution]] and [[Likelihood]] (its two parents)

## The everyday picture
The detective's final list of suspects with a probability beside each name. It isn't a single accusation. It is the complete state of knowledge after the evidence.

## A tiny example
Prior Beta(1, 1). Data: 3 occupied ponds of 10. Posterior: Beta(4, 8). Mean 0.33. 95% of the plausibility lies between 0.11 and 0.61.

## Start from zero
1. **Posterior ∝ likelihood × prior.**
2. **It is a full probability distribution over the parameters,** not a point estimate.
3. **It is a compromise** between prior and data, weighted by how informative each is.
4. **More data make it narrower.**
5. **It is the complete answer.** Any question about the parameter is answered from it.
6. **Summaries:** mean or median, standard deviation, credible interval.
7. **Probabilities of statements:** P(θ > 0 | data) is the fraction of the posterior above zero.
8. **With several parameters it is a joint distribution.** Looking at one parameter at a time gives marginal posteriors.
9. **In practice it is represented by thousands of draws** from an MCMC sampler.
10. **Today's posterior can be tomorrow's prior** when new data arrive.

## See it
![[Prior likelihood posterior.png|700]]
*What to look at:* the posterior curve, and how it is narrower than either parent.

## In R
```r
a <- 1 + 3; b <- 1 + 7                                           # Beta(1, 1) prior + 3 successes, 7 failures
c(mean = a / (a + b), qbeta(c(0.025, 0.975), a, b)); 1 - pbeta(0.5, a, b)
set.seed(2); draws <- rbeta(10000, a, b); c(mean(draws), quantile(draws, c(0.025, 0.975)), mean(draws > 0.5))     # the same from draws
```

## In the course
[[Hobbs and Hooten 2015 Ch5]]. The output of every `brm()` fit in the labs ([[Course Website]]).

## Common confusions
- **"The posterior is the truth."** It is what the model, prior and data together imply. A wrong model gives a confident wrong posterior.
- **"The posterior mean is the result."** The distribution is the result. The mean is one summary.

## Explain it back
- What two things shape the posterior?
- How do you get P(θ > 0) from posterior draws?

*Pass test:* you can compute summaries and probabilities from a posterior.

## Connections
- **Builds on:** [[Bayes' Theorem]], [[Prior Distribution]], [[Likelihood]]
- **Leads to:** [[Credible Interval]], [[Posterior Draws]], [[Marginal Posterior Distribution]], [[Joint Posterior Distribution]], [[Posterior Predictive Distribution]]
- **Part of:** [[MOC - Bayesian Inference]], molecular note [[Why the posterior is proportional to likelihood times prior]]

## Flashcards

What is the posterior distribution?
??
The distribution of plausible parameter values given the data: proportional to likelihood × prior.
![[Prior likelihood posterior.png]]
++++

How is P(θ > 0 | data) computed from MCMC output?
??
As the proportion of posterior draws greater than zero.
++++
