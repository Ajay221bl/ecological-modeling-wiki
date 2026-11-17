---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "A marginal model describes how the average response across the whole population changes with predictors, handling within-group correlation in the errors rather than with group-specific effects."
aliases:
  - "Population-averaged model"
  - "Marginal (population-averaged) model"
  - "GEE"
  - "Generalized estimating equations"
status: seedling
---

# Marginal Model

A **marginal model** describes how the average response across the whole population changes with predictors, handling within-group correlation in the errors rather than with group-specific effects ([[Correlation Structure]], [[Generalized Least Squares]]). A [[Mixed Effects Model]] is conditional, giving effects for a typical or a given group; a marginal model is population-averaged, giving effects on the mean over all groups. Examples are GLS with `corCompSymm` and generalized estimating equations (GEE, `geepack::geeglm()`).

For normal models with an identity link, conditional and marginal slopes coincide. For non-linear links they differ, and marginal logit effects are smaller in magnitude than conditional ones. In the code below binary data with large group differences give a conditional GLMM slope of 1.00, the true value, but a marginal logistic slope of 0.64. GEE gives robust "sandwich" SEs but no likelihood, so no AIC.

Choose by the question: "what happens to a typical individual" is conditional, "what happens to the population average" marginal. The distinction appears in the mixed models lab when predicting for "a typical farm" ([[Course Website]]). A GLMM slope is not the population-average effect; it is the effect within a typical group.

```r
library(lme4); set.seed(4); g <- rep(1:200, each = 10); x <- rnorm(2000); b <- rnorm(200, 0, 2)[g]; y <- rbinom(2000, 1, plogis(-0.5 + 1 * x + b))
round(c(conditional_GLMM = fixef(glmer(y ~ x + (1 | g), family = binomial))[["x"]], marginal_GLM = coef(glm(y ~ x, family = binomial))[["x"]]), 2)
```

## Connections
- **Builds on:** [[Mixed Effects Model]], [[Correlation Structure]], [[Generalized Least Squares]]
- **Leads to:** [[Conditional vs Marginal Predictions]], [[GLMM]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

What does a marginal (population-averaged) model estimate?
??
How the population-average response changes with predictors.
++++

For a logistic GLMM, are marginal effects larger or smaller than conditional effects?
??
Smaller in magnitude.
++++
