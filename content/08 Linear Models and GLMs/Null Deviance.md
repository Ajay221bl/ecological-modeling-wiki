---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Null deviance is the deviance of the intercept-only model, the misfit you have before using any predictor."
aliases:
  - "Null model deviance"
status: seedling
---

# Null Deviance

Your golf score before taking any lessons is the baseline later scores are judged against. **Null deviance** is the [[Deviance]] of the intercept-only model, y ~ 1 in the same family: the misfit you have before using any predictor ([[Null Model]]). It plays the role of the [[Total Sum of Squares]] in a linear model, and it has n − 1 degrees of freedom.

`summary(glm())` prints it just above the residual deviance. The code below shows that the null deviance stored in a fitted model equals the deviance of a separately fitted intercept-only model, with n − 1 = 99 df.

The difference between the null deviance and the [[Residual Deviance]] is what the predictors explain, and their ratio gives [[Deviance Explained]]. The null deviance is not "the deviance under the null hypothesis of my test"; it belongs specifically to the intercept-only model.

```r
set.seed(2); x <- runif(100); y <- rpois(100, exp(0.5 + 1.5 * x)); m <- glm(y ~ x, family = poisson)
c(m$null.deviance, deviance(glm(y ~ 1, family = poisson))); m$df.null
```

## Connections
- **Builds on:** [[Deviance]], [[Null Model]]
- **Leads to:** [[Residual Deviance]], [[Deviance Explained]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

What is null deviance?
??
The deviance of the intercept-only model. The baseline misfit before any predictors.
++++
