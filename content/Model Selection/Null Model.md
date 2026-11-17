---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Intercept-only model"
  - "Null model"
  - "Constant model"
  - "y ~ 1"
status: seedling
---

# Null Model

**In one line:** the null model is the simplest model in a set, usually one with only an intercept, which predicts the same mean for every observation and serves as the baseline every other model must beat.

> [!info] Before this, it helps to know
> [[Intercept]] (all it contains) · [[Candidate Model Set]] (where it belongs) · [[Null Hypothesis]] (a different "null")

## The everyday picture
The weather forecast that always says "average for the time of year". Any forecaster worth hiring must beat it.

## Start from zero
1. **Formula in R:** `y ~ 1`. One fitted value for everyone: the overall mean (or mean rate, mean proportion on the link scale).
2. **Its deviance is the null deviance.** Deviance explained and R² measure improvement over it.
3. **Include it in a candidate set.** If it ranks near the top, none of your predictors helps much.
4. **In mixed models the "null" may keep the random effects:** `y ~ 1 + (1 | site)`. Then it asks whether fixed predictors add anything beyond grouping.
5. **Not the same as the null hypothesis.** A null hypothesis is a statement (an effect is zero). The null model is a fitted model. They are linked: comparing a model with the null model tests the null hypothesis that all slopes are zero.

## In R
```r
set.seed(2); d <- data.frame(tree = runif(80, 0, 60)); d$birds <- rpois(80, exp(2.3 - 0.02 * d$tree))
m0 <- glm(birds ~ 1, family = poisson, data = d); m1 <- glm(birds ~ tree, family = poisson, data = d)
c(null_fitted = unname(fitted(m0)[1]), mean_birds = mean(d$birds), dAIC_null_minus_tree = AIC(m0) - AIC(m1))
```

## In the course
Every model selection lab includes an intercept-only model ([[Course Website]]).

## Common confusions
- **"The null model is the null hypothesis."** One is a fitted model, the other a claim about a parameter.
- **"A null model must be dropped from the set."** It belongs there as the baseline.

## Explain it back
- What does the null model predict for every observation?

*Pass test:* you can fit and use a null model as a baseline.

## Connections
- **Builds on:** [[Intercept]], [[Candidate Model Set]]
- **Leads to:** [[Null Deviance]], [[R-squared]], [[Deviance Explained]], [[Null Hypothesis]]
- **Part of:** [[MOC - Model Selection]]

## Flashcards

What is a null model?
??
The simplest model in the set, usually intercept-only (y ~ 1), predicting the same mean for every observation.
++++

How does a null model differ from a null hypothesis?
??
The null model is a fitted model. The null hypothesis is a claim that a parameter equals zero.
++++
