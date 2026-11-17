---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Stepwise regression"
  - "Forward selection"
  - "Backward elimination"
  - "Stepwise Selection (forward, backward)"
  - "step()"
status: seedling
---

# Stepwise Selection

**In one line:** stepwise selection builds a model automatically by adding or dropping one predictor at a time according to a test or an information criterion until no single change helps.

> [!info] Before this, it helps to know
> [[Model Selection]] (what it tries to automate) · [[P-value|p-value]] and [[AIC]] (its usual rules)

## The everyday picture
Finding the highest point of a landscape in fog by always stepping uphill. You stop on a hilltop, but not necessarily the highest one, and a different starting point might have led to a different hill.

## Start from zero
1. **Forward:** start with no predictors. Add the one that helps most. Repeat until none helps.
2. **Backward:** start with all predictors. Drop the one that hurts least to lose. Repeat until every drop hurts.
3. **Both directions:** allow adds and drops at each step.
4. **In R:** `step(model)` uses AIC.
5. **Problems:** p-values and standard errors of the final model are too optimistic because the same data chose it. Coefficients are biased away from zero. The path depends on the order and the start. Small changes in data change the chosen model. There is no hypothesis behind the result.
6. **It is data dredging done by machine.**
7. **Where it is tolerable:** pure prediction with validation on independent data. Better: penalised regression or cross-validation.

## In R
```r
set.seed(8); d <- as.data.frame(matrix(rnorm(60 * 10), 60)); d$y <- rnorm(60)              # ten predictors, none related to y
m <- step(lm(y ~ ., data = d), trace = 0); length(coef(m)) - 1; round(summary(m)$coefficients[-1, 4], 3)     # pure noise, yet three predictors survive (p from 0.05 to 0.12)
kept <- sapply(1:100, function(s) { set.seed(s); d <- as.data.frame(matrix(rnorm(600), 60)); d$y <- rnorm(60); length(coef(step(lm(y ~ ., d), trace = 0))) - 1 }); mean(kept > 0)     # in most noise-only datasets something survives
```

## In the course
Criticised in [[Anderson and Burnham 2002]] and [[Johnson and Omland 2004]].

## Common confusions
- **"Stepwise finds the best model."** It finds a local best by one path.

## Explain it back
- Why are p-values from a stepwise-selected model misleading?

*Pass test:* you can explain three problems with stepwise selection.

## Connections
- **Builds on:** [[Model Selection]], [[P-value|p-value]], [[AIC]]
- **Leads to:** [[Data Dredging]], [[All-subsets Selection]], [[Regularization]], [[Cross-validation]]
- **Part of:** [[MOC - Model Selection]]

## Flashcards

What is stepwise selection?
??
Automatically adding or removing one predictor at a time by a test or criterion until no single change improves the model.
++++

Why are p-values after stepwise selection misleading?
??
The same data chose the model, so the reported uncertainty is too small and effects are overstated.
++++
