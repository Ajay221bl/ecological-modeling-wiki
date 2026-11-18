---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A fitted value is the model's prediction for an observation that was used to fit it: the height of the fitted line at that observation's predictor values."
aliases:
  - "Fitted values"
  - "Predicted value"
  - "ŷ"
  - "y-hat"
  - "fitted()"
status: seedling
---

# Fitted Value

For each data point, look at the point on the string directly above or below it: that is where the model says the observation "should" be on average. A **fitted value**, written ŷᵢ ("y-hat"), is the model's prediction for an observation that was used to fit it: plug that observation's [[Predictor Variable|predictor]] values into the fitted equation ([[Linear Regression]]). It is the estimated mean response for units like that one ([[Expected Value]]).

With [[Species Richness|richness]] = 12.4 − 0.17 × tree cover, the plot with 30% cover has fitted value 12.4 − 5.1 = 7.3, and it was observed at 8. Observed always equals fitted plus [[Residual]], and the code below checks that identity for all five plots. `fitted(m)` returns the fitted values in the order of the data; for [[Generalized Linear Model|GLMs]] it returns them on the [[Response Scale|response scale]], as counts or probabilities.

Fitted values are the model's summary of the data, and plotting residuals against them is the main diagnostic ([[Residuals vs Fitted Plot]]). The confusion to avoid is treating them as predictions of new data. They are predictions for the data already used to fit the model, so they look better than predictions for new data will ([[Predicting New Data]]).

```r
d <- data.frame(tree = c(0, 10, 20, 30, 40), rich = c(12, 11, 9, 8, 5))
m <- lm(rich ~ tree, d); fitted(m)
all.equal(unname(fitted(m) + resid(m)), d$rich)       # observed = fitted + residual
```

## Connections
- **Builds on:** [[Linear Regression]], [[Predictor Variable]], [[Species Richness]], [[Generalized Linear Model]], [[Response Scale]]
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
