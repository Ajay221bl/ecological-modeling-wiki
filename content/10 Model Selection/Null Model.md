---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "The null model is the simplest model in a set, usually one with only an intercept, which predicts the same mean for every observation and serves as the baseline every other model must beat."
aliases:
  - "Intercept-only model"
  - "Null model"
  - "Constant model"
  - "y ~ 1"
status: seedling
---

# Null Model

A weather forecast that always says "average for the time of year" is the one any forecaster worth hiring must beat. The **null model** is the simplest model in a set, usually one with only an [[Intercept]], `y ~ 1` in R, which predicts the same value for every observation: the overall mean, or the mean rate or proportion on the link scale. It is the baseline every other model must beat. Its deviance is the [[Null Deviance]], and [[R-squared]] and [[Deviance Explained]] measure improvement over it.

Include it in a [[Candidate Model Set]]: if it ranks near the top, none of your predictors helps much. In mixed models the "null" may keep the random effects, `y ~ 1 + (1 | site)`, and then asks whether fixed predictors add anything beyond grouping. In the code below the null Poisson model's fitted value, 5.76, is just the mean bird count, and its AIC is 63 units worse than the model with tree cover.

It is not the same as the [[Null Hypothesis]]: a null hypothesis is a statement that an effect is zero, the null model a fitted model, though comparing a model with the null model tests the null hypothesis that all slopes are zero. Every model selection lab includes an intercept-only model ([[Course Website]]), and it should not be dropped from the set, since it belongs there as the baseline.

```r
set.seed(2); d <- data.frame(tree = runif(80, 0, 60)); d$birds <- rpois(80, exp(2.3 - 0.02 * d$tree))
m0 <- glm(birds ~ 1, family = poisson, data = d); m1 <- glm(birds ~ tree, family = poisson, data = d)
c(null_fitted = unname(fitted(m0)[1]), mean_birds = mean(d$birds), dAIC_null_minus_tree = AIC(m0) - AIC(m1))
```

## Connections
- **Builds on:** [[Intercept]], [[Candidate Model Set]]
- **Leads to:** [[Null Deviance]], [[R-squared]], [[Deviance Explained]], [[Null Hypothesis]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

What is a null model?
??
The simplest model in the set, usually intercept-only (y ~ 1), predicting the same mean for every observation.
++++

How does a null model differ from a null hypothesis?
??
The null model is a fitted model. The null hypothesis is a claim that a parameter equals zero.
++++
