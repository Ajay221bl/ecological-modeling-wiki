---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "Group-level effects"
  - "Group-level parameters"
  - "Varying effects"
  - "Population of groups"
status: seedling
---

# Group-level Model

**In one line:** a group-level model is the layer that describes how parameters differ from group to group by drawing them from a shared distribution.

> [!info] Before this, it helps to know
> [[Hierarchical Model]] (the structure) · [[Grouping Factor]] (what defines the groups) · [[Normal Distribution]] (the usual shared distribution)

## The everyday picture
Heights of siblings in different families. Each family has its own typical height, and those family averages scatter around a national average. The group-level model describes that scatter of family averages.

## Start from zero
1. **Each group j has its own parameter,** such as an intercept α_j.
2. **The group-level model:** α_j ~ Normal(μ_α, σ_α).
3. **μ_α:** the average across groups. **σ_α:** how much groups differ.
4. **Both are estimated from the data.**
5. **Group-level predictors can enter:** μ_α,j = γ₀ + γ₁ × elevation_j explains why groups differ.
6. **This is what a random effect is,** written in Bayesian language. `brms` output labels these "Group-Level Effects".
7. **It allows prediction for a new group,** by drawing from Normal(μ_α, σ_α).

## In R
```r
set.seed(5); mu_a <- 10; sigma_a <- 2; alpha <- rnorm(6, mu_a, sigma_a); round(alpha, 1)       # six groups' intercepts from one shared distribution
round(rnorm(1, mu_a, sigma_a), 1)                                                            # a plausible intercept for a seventh, unseen group
```

## In the course
[[Hobbs and Hooten 2015 Ch6]]. "Group-Level Effects" in brms summaries ([[Course Website]]).

## Common confusions
- **"Group-level effects are nuisance terms."** σ_α is often of direct scientific interest: how variable are populations?

## Explain it back
- What do μ_α and σ_α represent?

*Pass test:* you can write the group-level model for varying intercepts.

## Connections
- **Builds on:** [[Hierarchical Model]], [[Grouping Factor]]
- **Leads to:** [[Random Effect]], [[Hyperparameter]], [[Partial Pooling]], [[Random Intercept]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is a group-level model?
??
The layer specifying that group-specific parameters are drawn from a common distribution, such as α_j ~ Normal(μ, σ).
++++
