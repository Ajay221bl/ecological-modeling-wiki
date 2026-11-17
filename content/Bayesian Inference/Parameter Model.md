---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Parameter layer"
  - "Prior layer"
  - "Parameter models"
status: seedling
---

# Parameter Model

**In one line:** the parameter model is the layer of a hierarchical model that gives prior distributions to all the parameters of the data and process models.

> [!info] Before this, it helps to know
> [[Hierarchical Model]] (the structure) · [[Prior Distribution]] (what it consists of)

## The everyday picture
The foundations of a building. Every floor above rests on something. The parameter model is where the model finally rests on stated assumptions and no further unknowns.

## Start from zero
1. **Written [θ_d][θ_p]:** priors on data-model and process-model parameters.
2. **Every unknown that isn't given a distribution elsewhere needs a prior here.**
3. **It closes the model.** The joint distribution is now fully specified.
4. **Posterior ∝ [y | z, θ_d] [z | θ_p] [θ_d] [θ_p].**
5. **A model missing a prior isn't a complete Bayesian model.**

## In R
```r
set.seed(4); beta0 <- rnorm(1, 0, 2); beta1 <- rnorm(1, 0, 1); p <- rbeta(1, 2, 2)      # one draw from a parameter model
round(c(beta0 = beta0, beta1 = beta1, p = p), 2)
```

## In the course
[[Hobbs and Hooten 2015 Ch6]].

## Common confusions
- **"Priors are an optional extra."** In a Bayesian model they are a required layer.

## Explain it back
- What does the parameter model contain?

*Pass test:* you can list the priors a given hierarchical model needs.

## Connections
- **Builds on:** [[Hierarchical Model]], [[Prior Distribution]]
- **Leads to:** [[Data Model]], [[Process Model]], [[Hyperparameter]]
- **Part of:** [[MOC - Bayesian Inference]], molecular note [[Data Model, Process Model and Parameter Model]]

## Flashcards

What is the parameter model?
??
The layer of a hierarchical model containing the prior distributions for all parameters.
++++
