---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Process layer"
  - "Ecological process model"
  - "State model"
  - "Biological process model"
status: seedling
---

# Process Model

**In one line:** the process model is the layer of a hierarchical model that describes how the true state of nature behaves, including real variation that the deterministic part doesn't explain.

> [!info] Before this, it helps to know
> [[Hierarchical Model]] (the structure) · [[Deterministic Component]] (the mechanism inside it) · [[Process Variation]] (the real noise around it)

## The everyday picture
The actual weather, as opposed to the thermometer reading. The process model is your account of how the atmosphere really behaves, separate from how well any instrument measures it.

## Start from zero
1. **Written [z | θ_p]:** the distribution of the true state z given process parameters.
2. **It contains the science:** a deterministic function g(θ, x) for the expected state, such as growth or a response to habitat.
3. **Plus process variance:** real differences that g doesn't capture.
4. **Example:** true abundance N_i ~ Poisson(λ_i), with log(λ_i) = β₀ + β₁ × habitat_i.
5. **z is usually latent,** seen only through the data model.
6. **This is where hypotheses live.** Competing ideas are competing process models.

## In R
```r
set.seed(3); habitat <- runif(8); lambda <- exp(1 + 1.5 * habitat)   # deterministic part
N <- rpois(8, lambda); round(rbind(expected = lambda, true_state = N), 1)       # the true state varies around its expectation
```

## In the course
[[Hobbs and Hooten 2015 Ch6]], building on the deterministic models of [[Hobbs and Hooten 2015 Ch2]].

## Common confusions
- **"Process variance is error."** It is real variation in nature, not a mistake of measurement.

## Explain it back
- What two things make up a process model?

*Pass test:* you can write a process model for abundance as a function of habitat.

## Connections
- **Builds on:** [[Hierarchical Model]], [[Deterministic Component]], [[Process Variation]]
- **Leads to:** [[Data Model]], [[Parameter Model]], [[Latent Variable]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[Data Model, Process Model and Parameter Model]]

## Flashcards

What does the process model describe?
??
The behaviour of the true, usually unobserved, state of nature: a deterministic function plus process variance.
++++
