---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Full model (saturated)"
  - "Perfect-fit model"
status: seedling
---

# Saturated Model

**In one line:** a saturated model has as many parameters as observations, so it reproduces every data point exactly and marks the best log-likelihood any model could achieve.

> [!info] Before this, it helps to know
> [[Log-likelihood]] (what it maximises) · [[Overfitting]] (what it is an extreme case of)

## The everyday picture
A "model" of your friends' heights that is a list of their heights. It is perfectly accurate about those friends and tells you nothing about anyone else.

## Start from zero
1. **One parameter per data point.** Each fitted value equals its observation.
2. **No residual degrees of freedom.** Nothing is left to estimate error from.
3. **Useless for explanation or prediction.**
4. **Useful as a reference:** it sets the ceiling of log-likelihood against which deviance is measured.
5. **The other end of the scale is the null model,** with one parameter for the lot.

## In R
```r
y <- c(2, 0, 5, 3); sum(dpois(y, lambda = y, log = TRUE))       # saturated log-likelihood: each mean set to its own observation
sum(dpois(y, lambda = mean(y), log = TRUE))                     # null model: one shared mean
```

## Common confusions
- **"The saturated model is the full model with all my predictors."** It is far bigger than that: a parameter for every row.

## Explain it back
- Why is a saturated model no use for prediction?

*Pass test:* you can explain its role in defining deviance.

## Connections
- **Builds on:** [[Log-likelihood]]
- **Leads to:** [[Deviance]], [[Null Model]], [[Overfitting]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

What is a saturated model?
??
A model with one parameter per observation that fits the data perfectly. The reference point for deviance.
++++
