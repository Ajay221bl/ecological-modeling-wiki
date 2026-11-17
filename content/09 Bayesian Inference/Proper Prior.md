---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Proper distribution"
status: seedling
---

# Proper Prior

**In one line:** a proper prior is one that is a real probability distribution, meaning the area under it is finite and can be scaled to 1.

> [!info] Before this, it helps to know
> [[Prior Distribution]] (what it is) · [[Probability Density Function]] (integrates to 1)

## Start from zero
1. **Proper:** integrates to 1. Normal, beta, gamma, uniform on a bounded range.
2. **A proper prior guarantees a proper posterior.**
3. **You can simulate from it,** so prior predictive checks are possible.
4. **Marginal likelihoods and Bayes factors require it.**
5. **Modern practice: always use proper priors.**

## In R
```r
integrate(dnorm, -Inf, Inf, mean = 0, sd = 100)$value; integrate(dbeta, 0, 1, shape1 = 0.5, shape2 = 0.5)$value
```

## Common confusions
- **"Proper means correct."** It only means it integrates to 1.

## Explain it back
- Name one thing only proper priors allow.

*Pass test:* you can tell whether a given prior is proper.

## Connections
- **Builds on:** [[Prior Distribution]]
- **Leads to:** [[Improper Prior]], [[Prior Predictive Check]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[Proper vs Improper Prior]]

## Flashcards

What is a proper prior?
??
A prior that integrates to 1, a valid probability distribution.
++++
