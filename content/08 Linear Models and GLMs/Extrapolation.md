---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Extrapolation is using a model to predict for predictor values outside the range of the data it was fitted to."
aliases:
  - "Extrapolating"
  - "Predicting beyond the data"
  - "Interpolation"
status: seedling
---

# Extrapolation

A child grows 6 cm a year from age 5 to 10. Extend the line and at 40 they are 2.8 metres tall. The line was a fine summary where there were data and nonsense beyond. **Extrapolation** is using a model to predict for [[Predictor Variable|predictor]] values outside the range of the data it was fitted to ([[Predicting New Data]]). A model's form is checked only where there are data ([[Linearity]]); beyond that range, it is pure assumption that the same form continues. Straight lines are especially dangerous, because they continue forever, through zero and past any ceiling. Predicting within the range, interpolation, is far safer.

In the code below, a growth line is fitted to children aged 5 to 10. Its [[Prediction Interval|prediction interval]] at age 8 is sensible; at age 40 it confidently predicts an absurd height. The interval widens, but not nearly enough, because it reflects uncertainty in the coefficients assuming the form is right; it cannot reflect the chance that the form changes. So a narrow interval does not mean an extrapolation is safe.

Extrapolation can also be hidden: with several predictors, a combination can be unsampled even when each value alone is in range, such as high elevation together with high tree cover ([[Leverage]]). The guard rails are to show the [[Range|data range]] on plots with a [[Rug Plot]], to predict only within it, and when you must go beyond, to prefer a [[Mechanistic Model]] with sensible limits ([[Guthery and Bingham 2007]], [[Hobbs and Hooten 2015 Ch2]], [[Forecast]]).

```r
set.seed(12); age <- runif(40, 5, 10); height <- 110 + 6 * (age - 5) + rnorm(40, 0, 3)
m <- lm(height ~ age); predict(m, data.frame(age = c(8, 40)), interval = "prediction")     # second row is confidently absurd
```

## Connections
- **Builds on:** [[Predicting New Data]], [[Predictor Variable]], [[Prediction Interval]], [[Range]]
- **Leads to:** [[Forecast]], [[Rug Plot]], [[Mechanistic Model]], [[Leverage]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What is extrapolation?
??
Predicting for predictor values or combinations outside the range of the fitting data.
++++

Why can't prediction intervals be trusted when extrapolating?
??
They assume the fitted functional form continues to hold outside the data.
++++
