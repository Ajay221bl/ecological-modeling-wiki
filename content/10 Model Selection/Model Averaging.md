---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "Model averaging combines estimates or predictions from several models, weighting each by its Akaike weight, so that no single model has to be chosen."
aliases:
  - "Model-averaged estimates"
  - "Model-averaged predictions"
  - "AIC model averaging"
status: seedling
---

# Model Averaging

Three weather models predict 10, 12 and 20 mm of rain with weights 0.6, 0.3 and 0.1; the blended forecast, 11.6 mm, leans on the most trusted model. **Model averaging** combines estimates or predictions from several models, weighting each by its [[Akaike Weight]], so that no single model has to be chosen: θ̄ = Σ wᵢ θ̂ᵢ ([[Multi-model Inference]], [[Weighted Mean]]). If predicted birds at 30% tree cover are 6.0 under model A (w 0.55), 5.2 under B (w 0.35) and 7.5 under C (w 0.10), the average is 3.30 + 1.82 + 0.75 = 5.87.

Predictions are the safest thing to average, because every model makes one on the same scale; they are usually averaged on the response scale, consistently. Coefficients are trickier, since a coefficient means something different in models with different other predictors, and correlated predictors make averages hard to read. When a variable is absent from a model, full averaging counts it as 0 and conditional averaging uses only the models that contain it ([[Conditional vs Full Model Averaging]]). Uncertainty should use the [[Unconditional Variance]], which adds the between-model spread. In the code below the tree-only model takes 0.72 of the weight and the tree-plus-shrub model 0.28, and the averaged prediction at 30% tree and 15% shrub cover is 6.29 birds.

In R it can be done by hand or with `AICcmodavg::modavg()` and `modavgPred()` or `MuMIn::model.avg()` ([[modavg()]]); the Bayesian version is [[Bayesian Model Averaging]] ([[Course Website]], [[Anderson and Burnham 2002]], [[Hobbs and Hooten 2015 Ch9]]). Averaging coefficients is meaningful only when the coefficient means the same thing in each model; averaging predictions is safer.

```r
set.seed(14); d <- data.frame(tree = runif(80, 0, 60), shrub = runif(80, 0, 30)); d$birds <- rpois(80, exp(2.3 - 0.02 * d$tree + 0.01 * d$shrub))
fits <- list(tree = glm(birds ~ tree, poisson, d), shrub = glm(birds ~ shrub, poisson, d), both = glm(birds ~ tree + shrub, poisson, d))
a <- sapply(fits, AIC); w <- exp(-(a - min(a)) / 2); w <- w / sum(w); round(w, 3)
nd <- data.frame(tree = 30, shrub = 15); p <- sapply(fits, predict, newdata = nd, type = "response"); round(c(p, averaged = sum(w * p)), 2)
```

## Connections
- **Builds on:** [[Akaike Weight]], [[Multi-model Inference]], [[Weighted Mean]]
- **Leads to:** [[Conditional vs Full Model Averaging]], [[Unconditional Variance]], [[modavg()]], [[Bayesian Model Averaging]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

How is a model-averaged estimate computed?
??
As the Akaike-weighted average of the estimates from each model: Σ wᵢ θ̂ᵢ.
++++

Why are model-averaged predictions safer than averaged coefficients?
??
Predictions are on the same scale in every model, whereas a coefficient's meaning depends on the other predictors in the model.
++++
