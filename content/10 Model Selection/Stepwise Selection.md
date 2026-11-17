---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "Stepwise selection builds a model automatically by adding or dropping one predictor at a time according to a test or an information criterion until no single change helps."
aliases:
  - "Stepwise regression"
  - "Forward selection"
  - "Backward elimination"
  - "Stepwise Selection (forward, backward)"
  - "step()"
status: seedling
---

# Stepwise Selection

Finding the highest point of a landscape in fog by always stepping uphill gets you to a hilltop, but not necessarily the highest one, and a different start might lead to a different hill. **Stepwise selection** builds a model that way, adding or dropping one predictor at a time by a test or an information criterion until no single change helps ([[Model Selection]], [[P-value|p-value]], [[AIC]]). Forward selection starts with no predictors and adds the one that helps most; backward elimination starts with all and drops the one that hurts least to lose; "both" allows either at each step. In R, `step(model)` uses AIC.

Its problems are serious. The final model's p-values and standard errors are too optimistic because the same data chose it, coefficients are biased away from zero, the path depends on the order and the start, small changes in data change the chosen model, and there is no hypothesis behind the result. In the code below ten predictors unrelated to y are offered to `step()`: three survive, with p-values from 0.05 to 0.12, and across 100 noise-only datasets something survives 87% of the time.

It is [[Data Dredging]] done by machine, and is criticised in [[Anderson and Burnham 2002]] and [[Johnson and Omland 2004]]. It is tolerable only for pure prediction validated on independent data, and even then [[Regularization]] or [[Cross-validation]] is better; [[All-subsets Selection]] has the same weaknesses. Stepwise does not find the best model, only a local best along one path.

```r
set.seed(8); d <- as.data.frame(matrix(rnorm(60 * 10), 60)); d$y <- rnorm(60)              # ten predictors, none related to y
m <- step(lm(y ~ ., data = d), trace = 0); length(coef(m)) - 1; round(summary(m)$coefficients[-1, 4], 3)     # pure noise, yet three predictors survive (p from 0.05 to 0.12)
kept <- sapply(1:100, function(s) { set.seed(s); d <- as.data.frame(matrix(rnorm(600), 60)); d$y <- rnorm(60); length(coef(step(lm(y ~ ., d), trace = 0))) - 1 }); mean(kept > 0)     # in most noise-only datasets something survives
```

## Connections
- **Builds on:** [[Model Selection]], [[P-value|p-value]], [[AIC]]
- **Leads to:** [[Data Dredging]], [[All-subsets Selection]], [[Regularization]], [[Cross-validation]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

What is stepwise selection?
??
Automatically adding or removing one predictor at a time by a test or criterion until no single change improves the model.
++++

Why are p-values after stepwise selection misleading?
??
The same data chose the model, so the reported uncertainty is too small and effects are overstated.
++++
