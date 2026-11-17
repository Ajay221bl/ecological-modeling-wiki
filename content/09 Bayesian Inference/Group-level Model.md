---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "A group-level model is the layer that describes how parameters differ from group to group by drawing them from a shared distribution."
aliases:
  - "Group-level effects"
  - "Group-level parameters"
  - "Varying effects"
  - "Population of groups"
status: seedling
---

# Group-level Model

Each family has its own typical height, and those family averages scatter around a national average. A **group-level model** describes that scatter: it is the layer of a [[Hierarchical Model]] that says how parameters differ from group to group by drawing them from a shared distribution ([[Grouping Factor]]). Each group j has its own parameter, such as an intercept αⱼ, and αⱼ ~ Normal(μ_α, σ_α) ([[Normal Distribution]]). μ_α is the average across groups and σ_α how much groups differ; both are estimated from the data ([[Hyperparameter]]).

Group-level predictors can enter, as in μ_α,j = γ₀ + γ₁ × elevationⱼ, to explain why groups differ. This is what a [[Random Effect]] is, written in Bayesian language, and brms output labels these terms "Group-Level Effects" ([[Random Intercept]]). It also allows prediction for a new group by drawing from Normal(μ_α, σ_α). In the code below, six groups' intercepts drawn from Normal(10, 2) come out between 7.5 and 13.4, and one more draw gives a plausible intercept of 9.1 for a seventh, unseen group.

The shared distribution is what produces [[Partial Pooling]] ([[Hobbs and Hooten 2015 Ch6]], [[Course Website]]). Group-level effects are not just nuisance terms: σ_α is often of direct scientific interest, answering how variable populations are.

```r
set.seed(5); mu_a <- 10; sigma_a <- 2; alpha <- rnorm(6, mu_a, sigma_a); round(alpha, 1)       # six groups' intercepts from one shared distribution
round(rnorm(1, mu_a, sigma_a), 1)                                                            # a plausible intercept for a seventh, unseen group
```

## Connections
- **Builds on:** [[Hierarchical Model]], [[Grouping Factor]]
- **Leads to:** [[Random Effect]], [[Hyperparameter]], [[Partial Pooling]], [[Random Intercept]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is a group-level model?
??
The layer specifying that group-specific parameters are drawn from a common distribution, such as α_j ~ Normal(μ, σ).
++++
