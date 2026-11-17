---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The linear predictor is the weighted sum of predictors, β₀ + β₁x₁ + β₂x₂ + …, that a GLM computes before converting it to a mean with the inverse link."
aliases:
  - "η"
  - "eta"
  - "Systematic component"
  - "Xβ"
status: seedling
---

# Linear Predictor

A lending officer adds points for income and subtracts points for debts to get a total score. The total is not the decision; it is fed into a rule that converts scores into an approval probability. The **linear predictor**, η ("eta"), is that score in a GLM: the weighted sum of predictors, η = β₀ + β₁x₁ + … + β_p x_p, computed before it is converted to a mean with the inverse link ([[Regression Coefficient]]). It is the same object as the right-hand side of a linear regression, and in matrix form it is Xβ ([[Model Matrix]]). It can be any real number, negative or positive.

It lives on the link scale, in log units or log-odds units ([[Link Scale]]), and the inverse link maps it to the mean: μ = g⁻¹(η) ([[Link Function]], [[Inverse Link Function]]). Effects are additive here and only here; on the response scale they generally are not. In the code below, a logistic regression's linear predictor at x = 0.2 and 0.8 comes from `predict(m, type = "link")`, matches the hand calculation β₀ + β₁x, and becomes a probability through `plogis()`.

The linear predictor is the prediction only on the link scale, and readers usually need the response scale. A term added to it with its coefficient fixed at 1 is an [[Offset]] ([[Zuur et al. 2009 Ch8]], [[Harrison et al. 2018]]).

```r
set.seed(2); x <- runif(50); y <- rbinom(50, 1, plogis(-1 + 3 * x)); m <- glm(y ~ x, family = binomial)
eta <- predict(m, data.frame(x = c(0.2, 0.8)), type = "link"); eta
coef(m)[1] + coef(m)[2] * c(0.2, 0.8)                 # by hand
plogis(eta)                                           # converted to probabilities
```

## Connections
- **Builds on:** [[Regression Coefficient]], [[Model Matrix]]
- **Leads to:** [[Link Function]], [[Inverse Link Function]], [[Link Scale]], [[Offset]]
- **See also:** [[Generalized Linear Model]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

What is the linear predictor of a GLM?
??
η = β₀ + β₁x₁ + …, the linear combination of predictors on the link scale.
++++

How is the mean obtained from the linear predictor?
??
By applying the inverse link function.
++++
