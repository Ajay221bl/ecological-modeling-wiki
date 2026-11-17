---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
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

**In one line:** regularization fits a model while penalising large coefficients, which pulls estimates toward zero and trades a little bias for much less variance and better prediction.

> [!info] Before this, it helps to know
> [[Bias-Variance Trade-off]] (why it helps) · [[Overfitting]] (what it prevents) · [[Maximum Likelihood Estimation]] (what it modifies)

## The everyday picture
A lead on an excitable dog. Without it the dog chases every squirrel (fits every bump in the data). The lead lets it roam, but large departures cost effort, so it stays near the path.

## Start from zero
1. **Ordinary fit:** maximise log L.
2. **Penalised fit:** maximise log L − λ × penalty(β).
3. **Ridge:** penalty = Σ β². Shrinks all coefficients smoothly.
4. **Lasso:** penalty = Σ |β|. Shrinks, and sets some exactly to zero, so it also selects variables.
5. **λ controls strength:** 0 gives the ordinary fit. Large λ shrinks everything to 0. Choose λ by cross-validation.
6. **Predictors must be standardised** so the penalty treats them equally.
7. **Bayesian reading:** ridge equals a normal prior on β, lasso a Laplace (double-exponential) prior. Weakly informative priors regularise.
8. **Random effects are regularised group estimates** (partial pooling). Smoothing splines regularise wiggliness.
9. **Downside:** standard errors and p-values aren't straightforward. It is mainly a prediction tool.

## In R
```r
library(glmnet); set.seed(18); n <- 60; X <- matrix(rnorm(n * 20), n); y <- 1.5 * X[, 1] - 1 * X[, 2] + rnorm(n)
cvl <- cv.glmnet(X, y, alpha = 1); b <- coef(cvl, s = "lambda.min"); sum(b[-1] != 0); round(b[2:4], 2)      # lasso keeps few predictors, shrinks the real ones a little
round(coef(lm(y ~ X))[2:4], 2)
```

## In the course
Linked to priors and model selection in [[Hobbs and Hooten 2015 Ch9]].

## Common confusions
- **"Shrunken estimates are wrong."** They are biased on purpose and typically closer to the truth on average.

## Explain it back
- How do ridge and lasso penalties differ in effect?

*Pass test:* you can fit a lasso and explain λ.

## Connections
- **Builds on:** [[Bias-Variance Trade-off]], [[Overfitting]], [[Maximum Likelihood Estimation]]
- **Leads to:** [[Weakly Informative Prior]], [[Partial Pooling]], [[Spike-and-slab Prior]], [[Cross-validation]], [[Smoothing Parameter]]
- **Part of:** [[MOC - Model Selection]]

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
