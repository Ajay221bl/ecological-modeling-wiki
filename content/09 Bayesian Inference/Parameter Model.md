---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "The parameter model is the layer of a hierarchical model that gives prior distributions to all the parameters of the data and process models."
aliases:
  - "Parameter layer"
  - "Prior layer"
  - "Parameter models"
status: seedling
---

# Parameter Model

Every floor of a building rests on something, and the foundations are where the structure finally rests on the ground. The **parameter model** is the foundation of a [[Hierarchical Model]]: the layer that gives a [[Prior Distribution]] to every parameter of the [[Data Model]] and the [[Process Model]], written [θ_d][θ_p]. Every unknown not given a distribution elsewhere needs a prior here.

It closes the model, so the [[Joint Probability|joint distribution]] is fully specified and posterior ∝ [y | z, θ_d] [z | θ_p] [θ_d] [θ_p]. In the code below, one draw from a parameter model gives β₀ = 0.43, β₁ = −0.54 and a [[Detection Probability|detection probability]] of 0.74; simulating many such draws shows what the priors allow. Where parameters have priors with unknowns of their own, those unknowns are a [[Hyperparameter]] layer.

A model missing a prior isn't a complete Bayesian model, so priors are not an optional extra; they are a required layer ([[Hobbs and Hooten 2015 Ch6]]).

```r
set.seed(4); beta0 <- rnorm(1, 0, 2); beta1 <- rnorm(1, 0, 1); p <- rbeta(1, 2, 2)      # one draw from a parameter model
round(c(beta0 = beta0, beta1 = beta1, p = p), 2)
```

## Connections
- **Builds on:** [[Hierarchical Model]], [[Prior Distribution]], [[Joint Probability]]
- **Leads to:** [[Data Model]], [[Process Model]], [[Hyperparameter]], [[Detection Probability]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[Data Model, Process Model and Parameter Model]]

## Flashcards

What is the parameter model?
??
The layer of a hierarchical model containing the prior distributions for all parameters.
++++
