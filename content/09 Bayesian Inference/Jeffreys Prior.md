---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "A Jeffreys prior is a \"default\" prior built by a mathematical rule so that the result doesn't depend on which scale you choose to write the parameter on."
aliases:
  - "Reference prior"
  - "Reference and Jeffreys Priors"
  - "Objective prior"
status: seedling
---

# Jeffreys Prior

A good ruler gives the same answer in inches or centimetres. A flat prior fails that test, since flat in σ isn't flat in σ² ([[Vague Prior]]). A **Jeffreys prior** is a [[Weakly Informative Prior|default prior]] built by a mathematical rule so that it makes the same statement whatever scale you write the parameter on: make the prior [[Proportional To|proportional to]] the [[Square Root|square root]] of the [[Hessian Matrix|Fisher information]], which measures the curvature of the log-likelihood ([[Likelihood Function]]). Transform the parameter and apply the rule again, and you get a consistent prior.

Examples are Beta(0.5, 0.5) for a binomial probability, proportional to 1/σ for a normal [[Standard Deviation|standard deviation]] and proportional to 1/√λ for a Poisson rate. In the code below, the posterior for 3 successes in 10 under Beta(0.5, 0.5) has median 0.31 and 95% interval 0.09 to 0.61, almost the same as under a flat Beta(1, 1). Reference priors generalise the idea, aiming to let the data have the most influence.

Jeffreys priors are often an [[Improper Prior]], awkward with many parameters and seldom used in applied ecology, but you should recognise the name; [[Hobbs and Hooten 2015 Ch5]] mentions them among attempts at non-informative priors ([[Prior Distribution]]). A Jeffreys prior is not flat: for a probability it is U-shaped.

```r
qbeta(c(0.025, 0.5, 0.975), 0.5 + 3, 0.5 + 7)                         # posterior for 3 of 10 under the Jeffreys prior Beta(0.5, 0.5)
qbeta(c(0.025, 0.5, 0.975), 1 + 3, 1 + 7)                             # under the flat prior Beta(1, 1): nearly the same
```

## Connections
- **Builds on:** [[Vague Prior]], [[Weakly Informative Prior]], [[Proportional To]], [[Square Root]], [[Hessian Matrix]], [[Standard Deviation]]
- **Leads to:** [[Improper Prior]], [[Prior Distribution]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is special about a Jeffreys prior?
??
It is invariant to reparameterisation: the rule gives a consistent prior on any scale.
++++
