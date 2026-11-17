---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Predictive performance"
  - "Generalisation"
  - "Generalization error"
  - "Prediction of new data"
status: seedling
---

# Out-of-sample Prediction

**In one line:** out-of-sample prediction is how well a model predicts observations that weren't used to fit it, the yardstick behind AIC, cross-validation and their relatives.

> [!info] Before this, it helps to know
> [[Predictive Modeling|Prediction]] (the goal) · [[Overfitting]] (why in-sample fit misleads)

## The everyday picture
A student's exam score versus their homework score. Homework that has been checked against the answers always looks good. The exam shows what was learned.

## Start from zero
1. **In-sample fit is optimistic:** the model adapted to this sample's noise.
2. **Out-of-sample error is what matters** for prediction and for judging whether structure is real.
3. **Ways to estimate it:** a separate test set, cross-validation, or a penalised criterion (AIC, WAIC) that corrects the optimism.
4. **The gap between in-sample and out-of-sample error grows with model complexity.**
5. **"New data" must be like the data you'll actually predict:** new sites, new years, or new individuals. Choose validation to match.

## In R
```r
set.seed(17); tr <- data.frame(x = runif(30)); tr$y <- 2 * tr$x + rnorm(30); te <- data.frame(x = runif(1000)); te$y <- 2 * te$x + rnorm(1000)
f <- function(d) { m <- lm(y ~ poly(x, d), tr); round(c(train = mean(resid(m)^2), test = mean((te$y - predict(m, te))^2)), 2) }
sapply(c(1, 5, 10), f)
```

## Common confusions
- **"High R² means good prediction."** R² is in-sample.

## Explain it back
- Why is in-sample fit optimistic?

*Pass test:* you can estimate out-of-sample error.

## Connections
- **Builds on:** [[Predictive Modeling|Prediction]], [[Overfitting]]
- **Leads to:** [[Cross-validation]], [[AIC]], [[Expected Log Predictive Density]]
- **Part of:** [[MOC - Model Selection]]

## Flashcards

What is out-of-sample prediction?
??
Predicting data not used to fit the model: the real test of a model's generality.
++++
