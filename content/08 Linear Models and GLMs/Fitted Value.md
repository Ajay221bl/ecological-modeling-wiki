---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Fitted values"
  - "Predicted value"
  - "ŷ"
  - "y-hat"
  - "fitted()"
status: seedling
---

# Fitted Value

**In one line:** a fitted value is the model's prediction for an observation that was used to fit it: the height of the fitted line at that observation's predictor values.

> [!info] Before this, it helps to know
> [[Linear Regression]] (the model) · [[Expected Value]] (what it estimates)

## The everyday picture
The point on the string directly above or below each data point. It is where the model says that observation "should" be on average.

## A tiny example
richness = 12.4 − 0.17 × tree. For the plot with 30% cover: fitted value 12.4 − 5.1 = 7.3. It was observed at 8.

## Start from zero
1. **Plug each observation's x into the fitted equation.**
2. **The result is ŷᵢ,** the estimated mean response for units like that one.
3. **Observed = fitted + residual.**
4. **`fitted(m)` returns them** in the order of the data.
5. **For GLMs, `fitted()` returns values on the response scale** (counts, probabilities).
6. **Why they matter:** they are the model's summary of the data, and plotting residuals against them is the main diagnostic.

## In R
```r
d <- data.frame(tree = c(0, 10, 20, 30, 40), rich = c(12, 11, 9, 8, 5))
m <- lm(rich ~ tree, d); fitted(m)
all.equal(unname(fitted(m) + resid(m)), d$rich)       # observed = fitted + residual
```

## Common confusions
- **"Fitted values are predictions of new data."** They are predictions for the data already used, so they look better than new predictions will.

## Explain it back
- What is the relation between observed, fitted and residual?

*Pass test:* you can compute a fitted value by hand.

## Connections
- **Builds on:** [[Linear Regression]]
- **Leads to:** [[Residual]], [[Predicting New Data]], [[Residuals vs Fitted Plot]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What is a fitted value?
??
The model's estimated mean response for an observation in the fitting data.
++++

Observed value equals?
??
Fitted value plus residual.
++++
