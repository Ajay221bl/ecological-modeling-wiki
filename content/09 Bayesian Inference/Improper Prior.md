---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "An improper prior is a \"prior\" whose area is infinite, such as a flat line over all real numbers, so it isn't a real probability distribution."
aliases:
  - "Improper distribution"
  - "Improper flat prior"
status: seedling
---

# Improper Prior

Spread a finite amount of butter over an infinitely long slice of bread and the layer has zero thickness everywhere. An **improper prior** tries to do that: its area is infinite, as with a flat line over all real numbers, P(β) ∝ 1 from −∞ to ∞, so it isn't a real probability distribution ([[Proper Prior]]). Such priors usually arise from trying to be as vague as possible ([[Vague Prior]]); the code below shows the area of a flat line growing without limit as its range widens.

It can still work: if the likelihood is informative enough, likelihood × prior has finite area and the [[Posterior Distribution]] is proper. But it can fail without warning. In some models, variance parameters in hierarchical models being the classic case, the posterior is improper too, and a sampler will still produce numbers that are meaningless. You also can't simulate from an improper prior. Stan and brms use improper flat priors by default for some parameters when you set none, so set proper priors yourself.

The comforting thought "if the sampler ran, the posterior exists" is not true under improper priors. The [[Jeffreys Prior]] is often improper too.

```r
f <- function(b) rep(1, length(b)); sapply(c(10, 1000, 1e5), function(L) integrate(f, -L, L)$value)       # the area grows without limit
```

## Connections
- **Builds on:** [[Proper Prior]], [[Vague Prior]]
- **Leads to:** [[Posterior Distribution]], [[Jeffreys Prior]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[Proper vs Improper Prior]]

## Flashcards

What is an improper prior?
??
A prior whose integral is infinite, so it is not a valid probability distribution.
++++

What can go wrong with an improper prior?
??
The posterior may also be improper, making the results meaningless even though a sampler returns numbers.
++++
