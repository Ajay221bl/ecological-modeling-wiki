---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "Out-of-sample prediction is how well a model predicts observations that weren't used to fit it, the yardstick behind AIC, cross-validation and their relatives."
aliases:
  - "Predictive performance"
  - "Generalisation"
  - "Generalization error"
  - "Prediction of new data"
status: seedling
---

# Out-of-sample Prediction

Homework checked against the answers always looks good; the exam shows what was learned. **Out-of-sample prediction** is how well a model predicts observations that weren't used to fit it, the yardstick behind AIC, cross-validation and their relatives ([[Predictive Modeling|Prediction]]). In-sample fit is optimistic, because the model adapted to this sample's noise ([[Overfitting]]), so out-of-sample error is what matters, both for prediction and for judging whether structure is real.

It can be estimated with a separate test set, with [[Cross-validation]], or with a penalised criterion such as [[AIC]] or WAIC that corrects the optimism ([[Expected Log Predictive Density]]). The gap between in-sample and out-of-sample error grows with model complexity. In the code below, polynomials of degree 1, 5 and 10 fitted to 30 points have training errors of 1.09, 0.96 and 0.65 but test errors on 1,000 new points of 1.01, 1.21 and 1.95.

"New data" must be like the data you will actually predict, whether new sites, new years or new individuals, so choose the validation to match. A high R² does not mean good prediction, since R² is in-sample.

```r
set.seed(17); tr <- data.frame(x = runif(30)); tr$y <- 2 * tr$x + rnorm(30); te <- data.frame(x = runif(1000)); te$y <- 2 * te$x + rnorm(1000)
f <- function(d) { m <- lm(y ~ poly(x, d), tr); round(c(train = mean(resid(m)^2), test = mean((te$y - predict(m, te))^2)), 2) }
sapply(c(1, 5, 10), f)
```

## Connections
- **Builds on:** [[Predictive Modeling|Prediction]], [[Overfitting]]
- **Leads to:** [[Cross-validation]], [[AIC]], [[Expected Log Predictive Density]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

What is out-of-sample prediction?
??
Predicting data not used to fit the model: the real test of a model's generality.
++++
