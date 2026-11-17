---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "The process model is the layer of a hierarchical model that describes how the true state of nature behaves, including real variation that the deterministic part doesn't explain."
aliases:
  - "Process layer"
  - "Ecological process model"
  - "State model"
  - "Biological process model"
status: seedling
---

# Process Model

The actual weather, as opposed to the thermometer reading, is your account of how the atmosphere really behaves, separate from how well any instrument measures it. The **process model** is that layer of a [[Hierarchical Model]]: it describes how the true state of nature behaves, written [z | θ_p], the distribution of the true state z given process parameters. It contains the science, a deterministic function g(θ, x) for the expected state, such as growth or a response to habitat ([[Deterministic Component]]), plus process variance: real differences that g doesn't capture ([[Process Variation]]).

For example, true abundance Nᵢ ~ Poisson(λᵢ) with log(λᵢ) = β₀ + β₁ × habitatᵢ. The true state z is usually latent, seen only through the [[Data Model]] ([[Latent Variable]]). In the code below the deterministic part gives expected abundances such as 3.5, 9.1 and 4.8 at eight sites, while the true states, 4, 10, 5 and so on, vary around them.

This is where hypotheses live: competing ideas are competing process models. [[Hobbs and Hooten 2015 Ch6]] builds it on the deterministic models of [[Hobbs and Hooten 2015 Ch2]], and its parameters get priors in the [[Parameter Model]]. Process variance is not error: it is real variation in nature, not a mistake of measurement.

```r
set.seed(3); habitat <- runif(8); lambda <- exp(1 + 1.5 * habitat)   # deterministic part
N <- rpois(8, lambda); round(rbind(expected = lambda, true_state = N), 1)       # the true state varies around its expectation
```

## Connections
- **Builds on:** [[Hierarchical Model]], [[Deterministic Component]], [[Process Variation]]
- **Leads to:** [[Data Model]], [[Parameter Model]], [[Latent Variable]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[Data Model, Process Model and Parameter Model]]

## Flashcards

What does the process model describe?
??
The behaviour of the true, usually unobserved, state of nature: a deterministic function plus process variance.
++++
