---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "In Bayesian analysis every quantity you haven't observed (parameters, hidden states, missing data, future observations) is treated as a random variable with a probability distribution."
aliases:
  - "Parameters as random variables"
  - "Unobserved quantities"
  - "Treating unknowns as random"
status: seedling
---

# Unobserved Quantities as Random Variables

A sealed envelope contains a number. The number is already fixed, but you haven't seen it, so you describe your knowledge with probabilities: "probably between 10 and 20". The randomness describes your information, not the envelope. Bayesian analysis treats every **unobserved quantity** this way, as a [[Random Variable]] with a [[Probability Distribution|probability distribution]] ([[Bayesian Inference]], [[Uncertainty]]). The world is split into the observed, the data, which once seen are fixed numbers, and the unobserved: parameters, hidden states such as true abundance ([[Latent Variable]]), [[Missing Values|missing values]] ([[Missing Data in Bayesian Models]]) and future observations.

Inference then means finding the distribution of the unobserved given the observed, and every kind of unknown is handled by the same rule, so a parameter, a missing data point and a forecast are estimated in the same way. In the code below an unobserved occupancy rate is described by 5,000 draws from its posterior, and an unobserved future count out of 10 ponds is described by draws simulated from each of those rates; both come out as intervals ([[Posterior Distribution]], [[Posterior Predictive Distribution]]).

This contrasts with [[Frequentist Inference|frequentist inference]], where parameters are fixed and only data are random. It is a founding idea of [[Hobbs and Hooten 2015 Ch5]]. Calling a parameter random does not mean it fluctuates in nature; it means our knowledge of it is uncertain.

```r
set.seed(3); theta <- rbeta(5000, 4, 8)                            # an unobserved parameter, described by draws
y_future <- rbinom(5000, 10, theta)                                # an unobserved future count, described the same way
quantile(theta, c(0.025, 0.975)); quantile(y_future, c(0.025, 0.975))
```

## Connections
- **Builds on:** [[Random Variable]], [[Bayesian Inference]], [[Probability Distribution]], [[Missing Values]], [[Frequentist Inference]]
- **Leads to:** [[Posterior Distribution]], [[Latent Variable]], [[Missing Data in Bayesian Models]], [[Posterior Predictive Distribution]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[Frequentist vs Bayesian Inference]]

## Flashcards

How does Bayesian analysis treat unobserved quantities?
??
As random variables with probability distributions, whether they are parameters, latent states, missing data or predictions.
++++
