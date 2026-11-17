---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Predicting new data means using a fitted model's equation to compute the expected response at predictor values of your choosing, together with a statement of uncertainty."
aliases:
  - "Model prediction"
  - "Predicted values"
status: seedling
---

# Predicting New Data

A growth chart, built from other children, gives the typical height and a band around it for a child of an age nobody measured exactly. **Predicting new data** means using a fitted model's equation the same way: compute the expected response at predictor values of your choosing, with a statement of uncertainty. Choose the values you care about, plug them into the fitted equation by multiplying coefficients by values and summing ([[Model Matrix]]), apply the inverse link if the model has one, and add uncertainty: a confidence interval for the mean response, or a [[Prediction Interval]] for a single new observation. The code below does the arithmetic by hand at tree cover of 10, 30 and 50%, then gets the same numbers and confidence intervals from [[predict()]].

Predictions are the best way to present a model. Coefficients are on awkward scales and depend on coding, while a plot of predicted response against a predictor, with a band, is on the scale readers understand. Unlike [[Fitted Value|fitted values]], which are for the data already used, predictions can be made for any scenario you name. That is why a stated goal of each modeling lab is to predict, and Hobbs and Hooten give the Bayesian version ([[Course Website]], [[Hobbs and Hooten 2015 Ch8]], [[Posterior Predictive Distribution]]).

Two rules keep predictions honest. Stay inside the range of the data, because beyond it the model's form is pure assumption ([[Extrapolation]]). And fix the other predictors deliberately, at their means or at named scenarios, and say what you chose. If the predictors were standardised before fitting, convert the new values with the original means and standard deviations ([[Predicting with Scaled Covariates]]). Prediction is not only for forecasting; it is also the clearest way to explain a fitted model.

```r
set.seed(9); d <- data.frame(tree = runif(80, 0, 60)); d$rich <- rnorm(80, 12 - 0.1 * d$tree, 1.5)
m <- lm(rich ~ tree, d); nd <- data.frame(tree = c(10, 30, 50))
coef(m)[1] + coef(m)[2] * nd$tree                         # by hand
predict(m, nd, interval = "confidence")
```

## Connections
- **Builds on:** [[Fitted Value]], [[predict()]]
- **Leads to:** [[Prediction Interval]], [[Extrapolation]], [[Predicting with Scaled Covariates]], [[Posterior Predictive Distribution]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

Why present model results as predictions rather than only coefficients?
??
Predictions are on the response scale, independent of coding choices, and show effect size and uncertainty together.
++++
