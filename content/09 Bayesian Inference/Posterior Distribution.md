---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "The posterior distribution describes which parameter values are plausible after combining the prior with the data."
aliases:
  - "Posterior"
  - "Posterior probability"
  - "P(θ | y)"
  - "Posterior density"
  - "posteriors"
status: seedling
---

# Posterior Distribution

The detective's final list of suspects, with a probability beside each name, is not a single accusation but the complete state of knowledge after the evidence. The **posterior distribution** is that list for a model: it describes which parameter values are plausible after combining the [[Prior Distribution]] with the data through the [[Likelihood]], posterior ∝ likelihood × prior ([[Bayes' Theorem]]). With a Beta(1, 1) prior and 3 occupied ponds out of 10, the posterior is Beta(4, 8): mean 0.33, with 95% of the plausibility between 0.11 and 0.61.

It is a compromise between prior and data, weighted by how informative each is, and more data make it narrower. Any question about the parameter is answered from it: summaries such as the mean, median and [[Standard Deviation|standard deviation]], a [[Credible Interval]], or the probability of a statement such as P(θ > 0.5 | data), the fraction of the posterior above 0.5. The code below gets these exactly from the beta formula (P(θ > 0.5) = 0.11) and then again from 10,000 random draws, which is how posteriors are handled in practice ([[Posterior Draws]]). With several parameters the posterior is a [[Joint Posterior Distribution]], and one parameter at a time gives a [[Marginal Posterior Distribution]]. Today's posterior can be tomorrow's prior when new data arrive, and it also yields the [[Posterior Predictive Distribution]] for new data.

It is the output of every `brm()` fit in the labs ([[Course Website]], [[Hobbs and Hooten 2015 Ch5]]). The posterior is not the truth: it is what the model, prior and data together imply, and a wrong model gives a confident wrong posterior. Nor is the [[Posterior Summary|posterior mean]] "the result"; the distribution is the result and the mean one summary of it.

![[Prior likelihood posterior.png|700]]
*What to look at:* the posterior curve, and how it is narrower than either parent.

```r
a <- 1 + 3; b <- 1 + 7                                           # Beta(1, 1) prior + 3 successes, 7 failures
c(mean = a / (a + b), qbeta(c(0.025, 0.975), a, b)); 1 - pbeta(0.5, a, b)
set.seed(2); draws <- rbeta(10000, a, b); c(mean(draws), quantile(draws, c(0.025, 0.975)), mean(draws > 0.5))     # the same from draws
```

## Connections
- **Builds on:** [[Bayes' Theorem]], [[Prior Distribution]], [[Likelihood]], [[Standard Deviation]], [[Posterior Summary]]
- **Leads to:** [[Credible Interval]], [[Posterior Draws]], [[Marginal Posterior Distribution]], [[Joint Posterior Distribution]], [[Posterior Predictive Distribution]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[Why the posterior is proportional to likelihood times prior]]

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
