---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A saturated model has as many parameters as observations, so it reproduces every data point exactly and marks the best log-likelihood any model could achieve."
aliases:
  - "Full model (saturated)"
  - "Perfect-fit model"
status: seedling
---

# Saturated Model

A "model" of your friends' heights that is simply a list of their heights is perfectly accurate about those friends and tells you nothing about anyone else. A **saturated model** is that list: it has as many parameters as observations, so each fitted value equals its observation and it reproduces every data point exactly ([[Log-likelihood]]). It has no residual degrees of freedom, so nothing is left to estimate error from, and it is useless for explanation or prediction, an extreme case of [[Overfitting]].

It is useful as a reference: it sets the ceiling of log-likelihood against which [[Deviance]] is measured. For four Poisson counts 2, 0, 5 and 3, the saturated log-likelihood sets each mean to its own observation; the code below computes it, then the log-likelihood of the [[Null Model]], which uses one shared mean. The null model is the other end of the scale, with one parameter for the lot.

The saturated model is not "the full model with all my predictors". It is far bigger than that: a parameter for every row.

```r
y <- c(2, 0, 5, 3); sum(dpois(y, lambda = y, log = TRUE))       # saturated log-likelihood: each mean set to its own observation
sum(dpois(y, lambda = mean(y), log = TRUE))                     # null model: one shared mean
```

## Connections
- **Builds on:** [[Log-likelihood]]
- **Leads to:** [[Deviance]], [[Null Model]], [[Overfitting]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

What is a saturated model?
??
A model with one parameter per observation that fits the data perfectly. The reference point for deviance.
++++
