---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Reference prior"
  - "Reference and Jeffreys Priors"
  - "Objective prior"
status: seedling
---

# Jeffreys Prior

**In one line:** a Jeffreys prior is a "default" prior built by a mathematical rule so that the result doesn't depend on which scale you choose to write the parameter on.

> [!info] Before this, it helps to know
> [[Vague Prior]] (the problem it addresses) · [[Likelihood Function]] (its curvature, the Fisher information, is what the rule is built from)

## The everyday picture
A ruler that gives the same answer in inches or centimetres. A flat prior fails that test: flat in σ isn't flat in σ². Jeffreys' rule produces a prior that makes the same statement however you label the parameter.

## Start from zero
1. **The trouble with "flat":** it depends on the parameterisation.
2. **Jeffreys' rule:** make the prior proportional to the square root of the Fisher information.
3. **Result:** transform the parameter and apply the rule again, and you get a consistent prior.
4. **Examples:** for a binomial probability, Beta(0.5, 0.5). For a normal standard deviation, proportional to 1/σ. For a Poisson rate, proportional to 1/√λ.
5. **Reference priors** generalise the idea, aiming to let the data have the most influence.
6. **Limits:** they are often improper, awkward for many parameters, and seldom used in applied ecology. You should recognise the name.

## In R
```r
qbeta(c(0.025, 0.5, 0.975), 0.5 + 3, 0.5 + 7)                         # posterior for 3 of 10 under the Jeffreys prior Beta(0.5, 0.5)
qbeta(c(0.025, 0.5, 0.975), 1 + 3, 1 + 7)                             # under the flat prior Beta(1, 1): nearly the same
```

## In the course
Mentioned in [[Hobbs and Hooten 2015 Ch5]] among attempts at non-informative priors.

## Common confusions
- **"Jeffreys prior is flat."** For a probability it is U-shaped.

## Explain it back
- What property does the Jeffreys rule guarantee?

*Pass test:* you can say what problem these priors solve.

## Connections
- **Builds on:** [[Vague Prior]]
- **Leads to:** [[Improper Prior]], [[Prior Distribution]]
- **Part of:** [[MOC - Bayesian Inference]]

## Flashcards

What is special about a Jeffreys prior?
??
It is invariant to reparameterisation: the rule gives a consistent prior on any scale.
++++
