---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "The mean square prediction error is the average squared difference between predictions and held-out observations."
aliases:
  - "MSPE"
  - "Mean squared prediction error"
  - "RMSE"
  - "MSE of prediction"
status: seedling
---

# Mean Square Prediction Error

The **mean square prediction error** (MSPE) is the average squared difference between predictions and held-out observations, MSPE = (1/m) Σ (yᵢ − ŷᵢ)² over m held-out values, and its square root, the RMSE, is in the units of y ([[Cross-validation]]). It is the out-of-sample cousin of the [[Residual Sum of Squares]]. In the code below, observations 4, 7, 2 and 9 predicted as 5, 6, 3 and 6 give MSPE = (1 + 1 + 1 + 9)/4 = 3 and RMSE = 1.73.

It penalises big misses heavily because errors are squared. It scores only the point prediction and ignores predictive uncertainty, while log scores reward a correct spread as well ([[Scoring Rules]]). It suits continuous responses; for counts and binary data consider log or Brier scores.

Computed on the data used for fitting it is optimistic; computed on held-out data it measures prediction ([[Out-of-sample Prediction]]).

```r
obs <- c(4, 7, 2, 9); pred <- c(5, 6, 3, 6); c(MSPE = mean((obs - pred)^2), RMSE = sqrt(mean((obs - pred)^2)))
```

## Connections
- **Builds on:** [[Cross-validation]], [[Residual Sum of Squares]]
- **Leads to:** [[Scoring Rules]], [[Out-of-sample Prediction]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

What is mean square prediction error?
??
The average squared difference between predictions and observations not used in fitting.
++++
