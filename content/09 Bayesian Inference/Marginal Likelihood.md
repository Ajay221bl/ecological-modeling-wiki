---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "The marginal likelihood is the probability of the observed data averaged over every parameter value the prior allows, and it is the denominator of Bayes' theorem."
aliases:
  - "Evidence"
  - "Marginal distribution of the data"
  - "P(y)"
  - "Prior predictive density"
  - "Model evidence"
status: seedling
---

# Marginal Likelihood

A class average weights each pupil's mark equally. The **marginal likelihood** does something similar for a model: each parameter value gives the data a "mark", its likelihood, and the marginal likelihood is the average of those marks weighted by how plausible each value was under the prior. It is the probability of the observed data averaged over every parameter value the prior allows, P(y) = Σ P(y | θ) [[Prior Distribution|P(θ)]], or an integral for continuous θ ([[Law of Total Probability]], [[Integral]]). It is the denominator of [[Bayes' Theorem]], and for a given model and dataset it is one number, since θ has been averaged away.

It has two jobs. It is the [[Normalizing Constant]] that makes the posterior integrate to 1, and the ratio of two models' marginal likelihoods is a [[Bayes Factor]] for comparing them. It is usually impossible to compute directly, because with many parameters the integral is over a high-dimensional space; [[MCMC]] avoids it, since samplers need likelihood × prior only up to a constant. In the code below, for 3 occupied ponds out of 10, the marginal likelihood under a [[Vague Prior|flat prior]] is 1/11 = 0.091; under a Beta(12, 8) prior centred on 0.6 it falls to 0.062, because the data were not what that prior expected.

That shows its sensitivity to the prior: a needlessly wide prior spreads plausibility over values that fit badly and lowers the average, which makes Bayes factors depend strongly on prior width ([[Hobbs and Hooten 2015 Ch5]]). The marginal likelihood is not the maximised likelihood; it is the likelihood averaged over the prior, not its peak.

```r
p <- seq(0.0005, 0.9995, 0.001); w <- 0.001
sum(dbinom(3, 10, p) * dbeta(p, 1, 1) * w)                        # marginal likelihood under a flat prior: 1/11
sum(dbinom(3, 10, p) * dbeta(p, 12, 8) * w)                       # under a prior centred on 0.6: lower, the data weren't what it expected
```

## Connections
- **Builds on:** [[Bayes' Theorem]], [[Law of Total Probability]], [[Prior Distribution]], [[Vague Prior]]
- **Leads to:** [[Normalizing Constant]], [[Bayes Factor]], [[MCMC]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is the marginal likelihood?
??
The probability of the data averaged over the prior, P(y) = ∫ P(y | θ) P(θ) dθ. The denominator of Bayes' theorem.
++++

Name two uses of the marginal likelihood.
??
Normalising the posterior and comparing models (Bayes factors).
++++
