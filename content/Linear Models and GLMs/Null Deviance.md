---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Null model deviance"
status: seedling
---

# Null Deviance

**In one line:** null deviance is the deviance of the intercept-only model, the misfit you have before using any predictor.

> [!info] Before this, it helps to know
> [[Deviance]] (what is measured) · [[Null Model]] (the model it belongs to) · [[Total Sum of Squares]] (its linear-model counterpart)

## The everyday picture
Your golf score before taking any lessons. Later scores are judged against it.

## Start from zero
1. **Fit y ~ 1** in the same family. Its deviance is the null deviance.
2. **It plays the role of the total sum of squares.**
3. **Degrees of freedom: n − 1.**
4. **`summary(glm)` prints it** above the residual deviance.
5. **Null − residual deviance** is what the predictors explain.

## In R
```r
set.seed(2); x <- runif(100); y <- rpois(100, exp(0.5 + 1.5 * x)); m <- glm(y ~ x, family = poisson)
c(m$null.deviance, deviance(glm(y ~ 1, family = poisson))); m$df.null
```

## Common confusions
- **"Null deviance is the deviance under the null hypothesis of my test."** It belongs to the intercept-only model specifically.

## Explain it back
- Which model's deviance is it?

*Pass test:* you can find it in R output and say what it is a baseline for.

## Connections
- **Builds on:** [[Deviance]], [[Null Model]]
- **Leads to:** [[Residual Deviance]], [[Deviance Explained]]
- **Part of:** [[MOC - Generalized Linear Models]]

## Flashcards

What is null deviance?
??
The deviance of the intercept-only model. The baseline misfit before any predictors.
++++
