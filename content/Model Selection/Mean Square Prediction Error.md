---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "MSPE"
  - "Mean squared prediction error"
  - "RMSE"
  - "MSE of prediction"
status: seedling
---

# Mean Square Prediction Error

**In one line:** the mean square prediction error is the average squared difference between predictions and held-out observations.

> [!info] Before this, it helps to know
> [[Cross-validation]] (where it is computed) · [[Residual Sum of Squares]] (its in-sample cousin)

## Start from zero
1. **MSPE = (1/m) Σ (yᵢ − ŷᵢ)²** over m held-out observations.
2. **RMSE = √MSPE,** in the units of y.
3. **It penalises big misses heavily** because errors are squared.
4. **It ignores predictive uncertainty:** it scores only the point prediction. Log scores reward a correct spread as well.
5. **In-sample MSE is optimistic.** Compute it on held-out data.
6. **Use for continuous responses.** For counts and binary data, consider log scores or Brier scores.

## In R
```r
obs <- c(4, 7, 2, 9); pred <- c(5, 6, 3, 6); c(MSPE = mean((obs - pred)^2), RMSE = sqrt(mean((obs - pred)^2)))
```

## Common confusions
- **"MSPE measures model fit."** On held-out data it measures prediction. On fitting data it measures optimistic fit.

## Explain it back
- Why does RMSE share the units of y?

*Pass test:* you can compute MSPE from cross-validation.

## Connections
- **Builds on:** [[Cross-validation]], [[Residual Sum of Squares]]
- **Leads to:** [[Scoring Rules]], [[Out-of-sample Prediction]]
- **Part of:** [[MOC - Model Selection]]

## Flashcards

What is mean square prediction error?
??
The average squared difference between predictions and observations not used in fitting.
++++
