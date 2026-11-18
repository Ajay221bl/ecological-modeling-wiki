---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Residual deviance is the deviance left over after fitting your model, the GLM counterpart of the residual sum of squares."
aliases:
  - "Model residual deviance"
status: seedling
---

# Residual Deviance

Your golf score after the lessons, compared with the score before, shows what the lessons bought. **Residual deviance** is the [[Deviance]] left over after fitting your model, the GLM counterpart of the [[Residual Sum of Squares|residual sum of squares]]. It has n minus the number of estimated coefficients as its degrees of freedom ([[Degrees of Freedom]]). Compared with the [[Null Deviance]], it shows how much the [[Predictor Variable|predictors]] explain.

For Poisson and [[Binomial GLM for Proportions|grouped binomial]] models it gives a rough dispersion check: residual deviance ÷ residual df should be near 1, and much larger suggests [[Overdispersion]]. In the code below, Poisson data fitted with the right model give a ratio near 1. So for a well-fitting Poisson model the residual deviance should be near its degrees of freedom, not near zero.

That check fails for 0/1 data and is unreliable when counts are small, where the Pearson statistic or simulation is safer. Zuur uses residual deviance over df as a first look at overdispersion ([[Zuur et al. 2009 Ch9]]). Differences in residual deviance between [[Nested Models|nested models]] are tested in an [[Analysis of Deviance]].

```r
set.seed(3); x <- runif(100); y <- rpois(100, exp(0.5 + 1.5 * x)); m <- glm(y ~ x, family = poisson)
c(null = m$null.deviance, residual = deviance(m), df = df.residual(m), ratio = deviance(m) / df.residual(m))
```

## Connections
- **Builds on:** [[Deviance]], [[Null Deviance]], [[Residual Sum of Squares]], [[Predictor Variable]], [[Binomial GLM for Proportions]], [[Nested Models]]
- **Leads to:** [[Overdispersion]], [[Analysis of Deviance]], [[Deviance Explained]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

What is residual deviance?
??
The deviance of the fitted model: the misfit remaining after the predictors are included.
++++

For a Poisson GLM, residual deviance far above its degrees of freedom suggests what?
??
Overdispersion (or a misspecified mean).
++++
