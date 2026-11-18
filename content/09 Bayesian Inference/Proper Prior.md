---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "A proper prior is one that is a real probability distribution, meaning the area under it is finite and can be scaled to 1."
aliases:
  - "Proper distribution"
status: seedling
---

# Proper Prior

A **proper prior** is a prior that is a real [[Probability Distribution|probability distribution]]: the area under it is finite and can be scaled to 1 ([[Prior Distribution]], [[Probability Density Function]]). Normal, beta and gamma distributions, and a uniform on a bounded range, are all proper. The code below integrates a Normal(0, 100) and a Beta(0.5, 0.5) and gets 1 for both.

Properness buys three things. A proper prior guarantees a proper posterior. You can simulate from it, so a [[Prior Predictive Check]] is possible. And marginal likelihoods and [[Bayes Factor|Bayes factors]] require it. Modern practice is to always use proper priors, in contrast with the [[Improper Prior]].

"Proper" does not mean "correct"; it means only that the prior integrates to 1.

```r
integrate(dnorm, -Inf, Inf, mean = 0, sd = 100)$value; integrate(dbeta, 0, 1, shape1 = 0.5, shape2 = 0.5)$value
```

## Connections
- **Builds on:** [[Prior Distribution]], [[Probability Distribution]]
- **Leads to:** [[Improper Prior]], [[Prior Predictive Check]], [[Bayes Factor]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[Proper vs Improper Prior]]

## Flashcards

What is a proper prior?
??
A prior that integrates to 1, a valid probability distribution.
++++
