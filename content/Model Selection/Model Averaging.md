---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Model-averaged estimates"
  - "Model-averaged predictions"
  - "AIC model averaging"
status: seedling
---

# Model Averaging

**In one line:** model averaging combines estimates or predictions from several models, weighting each by its Akaike weight, so that no single model has to be chosen.

> [!info] Before this, it helps to know
> [[Akaike Weight]] (the weights) · [[Multi-model Inference]] (the philosophy) · [[Weighted Mean]] (the arithmetic)

## The everyday picture
Blending forecasts. Three weather models predict 10, 12 and 20 mm of rain, with weights 0.6, 0.3 and 0.1. The blended forecast is 11.6 mm, leaning on the most trusted model.

## A tiny example
Predicted birds at 30% tree cover: model A 6.0 (w 0.55), model B 5.2 (w 0.35), model C 7.5 (w 0.10). Average = 3.30 + 1.82 + 0.75 = 5.87.

## Start from zero
1. **θ̄ = Σ wᵢ θ̂ᵢ.**
2. **Predictions are the safest thing to average:** every model makes a prediction on the same scale.
3. **Coefficients are trickier.** A coefficient means something different in models with different other predictors, and correlated predictors make averages hard to read.
4. **What to do when a variable is absent from a model:** "full" averaging counts it as 0. "Conditional" averaging uses only models that contain it.
5. **Uncertainty: use the unconditional variance,** which adds between-model spread.
6. **Average on the link scale or the response scale?** Predictions are usually averaged on the response scale. Be consistent.
7. **In R:** by hand, `AICcmodavg::modavg()`/`modavgPred()`, or `MuMIn::model.avg()`.

## In R
```r
set.seed(14); d <- data.frame(tree = runif(80, 0, 60), shrub = runif(80, 0, 30)); d$birds <- rpois(80, exp(2.3 - 0.02 * d$tree + 0.01 * d$shrub))
fits <- list(tree = glm(birds ~ tree, poisson, d), shrub = glm(birds ~ shrub, poisson, d), both = glm(birds ~ tree + shrub, poisson, d))
a <- sapply(fits, AIC); w <- exp(-(a - min(a)) / 2); w <- w / sum(w); round(w, 3)
nd <- data.frame(tree = 30, shrub = 15); p <- sapply(fits, predict, newdata = nd, type = "response"); round(c(p, averaged = sum(w * p)), 2)
```

## In the course
Model selection lab ([[Course Website]]). [[Anderson and Burnham 2002]], [[Hobbs and Hooten 2015 Ch9]].

## Common confusions
- **"Averaging coefficients is always meaningful."** Only when the coefficient means the same thing in each model. Averaging predictions is safer.

## Explain it back
- Why are predictions safer to average than coefficients?

*Pass test:* you can compute a model-averaged prediction.

## Connections
- **Builds on:** [[Akaike Weight]], [[Multi-model Inference]], [[Weighted Mean]]
- **Leads to:** [[Conditional vs Full Model Averaging]], [[Unconditional Variance]], [[modavg()]], [[Bayesian Model Averaging]]
- **Part of:** [[MOC - Model Selection]]

## Flashcards

How is a model-averaged estimate computed?
??
As the Akaike-weighted average of the estimates from each model: Σ wᵢ θ̂ᵢ.
++++

Why are model-averaged predictions safer than averaged coefficients?
??
Predictions are on the same scale in every model, whereas a coefficient's meaning depends on the other predictors in the model.
++++
