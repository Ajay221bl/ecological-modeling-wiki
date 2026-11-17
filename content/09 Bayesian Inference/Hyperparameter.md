---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Hyperparameters"
  - "Hyperprior"
  - "Hyper-parameter"
  - "Hyperpriors"
status: seedling
---

# Hyperparameter

**In one line:** a hyperparameter is a parameter of a distribution that describes other parameters, such as the mean and standard deviation of the distribution that group intercepts come from.

> [!info] Before this, it helps to know
> [[Group-level Model]] (where they live) · [[Parameter]] (what they are a level above) · [[Prior Distribution]] (they parameterise one)

## The everyday picture
The dial on the machine that makes the dials. Ordinary parameters control the data. Hyperparameters control the distribution from which those ordinary parameters were drawn.

## Start from zero
1. **Group parameters:** α_j ~ Normal(μ, σ).
2. **μ and σ are hyperparameters.**
3. **In a hierarchical model they are unknown** and estimated from the data.
4. **They need priors of their own,** called hyperpriors.
5. **σ controls pooling.** Small σ: groups are alike, strong shrinkage. Large σ: groups differ, little shrinkage.
6. **Looser use:** the fixed numbers in any prior (the 0 and 10 in Normal(0, 10)) are also called hyperparameters. Context tells you which meaning is intended.

## In R
```r
set.seed(6); round(sapply(c(0.1, 3), function(s) sd(rnorm(1000, 5, s))), 2)          # the hyperparameter sigma sets how different the groups can be
```

## In the course
[[Hobbs and Hooten 2015 Ch6]].

## Common confusions
- **"Hyperparameters are tuning settings chosen by the analyst."** In machine learning, yes. In hierarchical models they are estimated quantities.

## Explain it back
- In α_j ~ Normal(μ, σ), which symbols are hyperparameters?

*Pass test:* you can identify hyperparameters in a model statement.

## Connections
- **Builds on:** [[Group-level Model]], [[Parameter]]
- **Leads to:** [[Hierarchical Model]], [[Partial Pooling]], [[Variance Components|Variance Component]], [[Half-Cauchy Prior]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is a hyperparameter in a hierarchical model?
??
A parameter of the distribution from which lower-level parameters are drawn, such as μ and σ in α_j ~ Normal(μ, σ).
++++

What is a hyperprior?
??
A prior distribution placed on a hyperparameter.
++++
