---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "A hyperparameter is a parameter of a distribution that describes other parameters, such as the mean and standard deviation of the distribution that group intercepts come from."
aliases:
  - "Hyperparameters"
  - "Hyperprior"
  - "Hyper-parameter"
  - "Hyperpriors"
status: seedling
---

# Hyperparameter

Ordinary parameters are the dials that control the data; a **hyperparameter** is a dial on the machine that sets those dials. It is a parameter of a distribution that describes other parameters, such as the mean μ and standard deviation σ of the distribution group intercepts come from, αⱼ ~ Normal(μ, σ) ([[Group-level Model]], [[Parameter]], [[Prior Distribution]]). In a [[Hierarchical Model]] hyperparameters are unknown and estimated from the data, so they need priors of their own, called hyperpriors, often a [[Half-Cauchy Prior]] or half-normal for σ.

σ controls pooling. When it is small groups are alike and their estimates are shrunk strongly toward μ; when it is large groups differ and there is little shrinkage ([[Partial Pooling]], [[Variance Components|Variance Component]]). In the code below, groups drawn with σ = 0.1 have a spread of 0.10 and with σ = 3 a spread of 2.97: the hyperparameter sets how different the groups can be.

There is a looser use: the fixed numbers in any prior, such as the 0 and 10 in Normal(0, 10), are also called hyperparameters, and context tells you which meaning is intended ([[Hobbs and Hooten 2015 Ch6]]). In machine learning "hyperparameters" are tuning settings chosen by the analyst; in hierarchical models they are estimated quantities.

```r
set.seed(6); round(sapply(c(0.1, 3), function(s) sd(rnorm(1000, 5, s))), 2)          # the hyperparameter sigma sets how different the groups can be
```

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
