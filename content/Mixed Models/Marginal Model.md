---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "Population-averaged model"
  - "Marginal (population-averaged) model"
  - "GEE"
  - "Generalized estimating equations"
status: seedling
---

# Marginal Model

**In one line:** a marginal model describes how the average response across the whole population changes with predictors, handling within-group correlation in the errors rather than with group-specific effects.

> [!info] Before this, it helps to know
> [[Mixed Effects Model]] (the conditional alternative) · [[Correlation Structure]] · [[Generalized Least Squares]]

## Start from zero
1. **A mixed model is conditional:** effects for a typical (or a given) group.
2. **A marginal model is population-averaged:** effects on the mean over all groups.
3. **Examples:** GLS with `corCompSymm`, and generalized estimating equations (GEE, `geepack::geeglm()`).
4. **For Gaussian identity-link models, conditional and marginal slopes coincide.**
5. **For non-linear links (logit, log with random slopes), they differ:** marginal logit effects are smaller in magnitude than conditional ones.
6. **GEE gives robust (sandwich) SEs** but no likelihood, so no AIC.
7. **Choose by question:** "what happens to a typical individual" (conditional) versus "what happens to the population average" (marginal).

## In R
```r
library(lme4); set.seed(4); g <- rep(1:200, each = 10); x <- rnorm(2000); b <- rnorm(200, 0, 2)[g]; y <- rbinom(2000, 1, plogis(-0.5 + 1 * x + b))
round(c(conditional_GLMM = fixef(glmer(y ~ x + (1 | g), family = binomial))[["x"]], marginal_GLM = coef(glm(y ~ x, family = binomial))[["x"]]), 2)
```

## In the course
Distinction appears in the mixed models lab when predicting for "a typical farm" ([[Course Website]]).

## Common confusions
- **"A GLMM slope is the population-average effect."** It is the effect within a typical group.

## Explain it back
- Why do conditional and marginal logit slopes differ?

*Pass test:* you can say which kind of effect your model estimates.

## Connections
- **Builds on:** [[Mixed Effects Model]], [[Correlation Structure]], [[Generalized Least Squares]]
- **Leads to:** [[Conditional vs Marginal Predictions]], [[GLMM]]
- **Part of:** [[MOC - Mixed Models]]

## Flashcards

What does a marginal (population-averaged) model estimate?
??
How the population-average response changes with predictors.
++++

For a logistic GLMM, are marginal effects larger or smaller than conditional effects?
??
Smaller in magnitude.
++++
