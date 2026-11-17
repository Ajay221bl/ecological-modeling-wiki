---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "Regularization fits a model while penalising large coefficients, which pulls estimates toward zero and trades a little bias for much less variance and better prediction."
aliases:
  - "Penalization"
  - "Penalized regression"
  - "Shrinkage estimation"
  - "Lasso"
  - "Ridge regression"
  - "Regularisation"
  - "Regularization (penalty)"
  - "glmnet"
status: seedling
---

# Regularization

A lead on an excitable dog lets it roam but makes large departures cost effort, so it stays near the path instead of chasing every squirrel. **Regularization** fits a model while penalising large coefficients, pulling estimates toward zero and trading a little bias for much less variance and better prediction ([[Bias-Variance Trade-off]], [[Overfitting]]). An ordinary fit maximises log L ([[Maximum Likelihood Estimation]]); a penalised fit maximises log L − λ × penalty(β). Ridge uses the penalty Σ β² and shrinks all coefficients smoothly; the lasso uses Σ |β| and shrinks some exactly to zero, so it also selects variables.

λ controls the strength, from 0, the ordinary fit, to large values that shrink everything to 0, and is chosen by [[Cross-validation]]. Predictors must be standardised so the penalty treats them equally. In the code below, 20 predictors of which two matter are fitted by the lasso with `glmnet`: it keeps 3 and estimates the real effects as 1.12 and −0.83 (true 1.5 and −1) and the first noise variable as exactly 0, against least-squares estimates of 1.32, −0.92 and −0.11.

In Bayesian terms ridge is a normal prior on β and the lasso a Laplace prior, and a [[Weakly Informative Prior]] regularises; the [[Spike-and-slab Prior]] is another form. Random effects are regularised group estimates ([[Partial Pooling]]), and a [[Smoothing Parameter]] regularises wiggliness ([[Hobbs and Hooten 2015 Ch9]]). The downside is that standard errors and p-values aren't straightforward, so it is mainly a prediction tool. Shrunken estimates are not wrong: they are biased on purpose and typically closer to the truth on average.

```r
library(glmnet); set.seed(18); n <- 60; X <- matrix(rnorm(n * 20), n); y <- 1.5 * X[, 1] - 1 * X[, 2] + rnorm(n)
cvl <- cv.glmnet(X, y, alpha = 1); b <- coef(cvl, s = "lambda.min"); sum(b[-1] != 0); round(b[2:4], 2)      # lasso keeps few predictors, shrinks the real ones a little
round(coef(lm(y ~ X))[2:4], 2)
```

## Connections
- **Builds on:** [[Bias-Variance Trade-off]], [[Overfitting]], [[Maximum Likelihood Estimation]]
- **Leads to:** [[Weakly Informative Prior]], [[Partial Pooling]], [[Spike-and-slab Prior]], [[Cross-validation]], [[Smoothing Parameter]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

What is regularization?
??
Fitting with a penalty on coefficient size, shrinking estimates toward zero to reduce variance and overfitting.
++++

How do lasso and ridge differ?
??
Lasso (|β| penalty) can set coefficients exactly to zero. Ridge (β² penalty) shrinks without zeroing.
++++

What is the Bayesian interpretation of ridge regression?
??
A normal prior centred on zero for the coefficients.
++++
