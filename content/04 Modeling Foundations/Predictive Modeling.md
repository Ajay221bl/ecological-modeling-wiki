---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
description: "Predictive modeling aims to forecast new observations as accurately as possible, and it must be judged on data the model has never seen."
aliases:
  - "Prediction (goal)"
  - "Prediction"
status: seedling
---

# Predictive Modeling

Guessing how long tomorrow's taxi ride will take, you do not care *why* traffic is bad, only that your guess is close, and you would judge your guessing method by how it does on future rides, not by how well it "explains" rides you have already taken. **Predictive modeling** has that goal: to forecast new observations as accurately as possible. The forecast for an observation is written ŷ ("[[Fitted Value|y-hat]]"), and the measure of success is *prediction error*, how far the forecasts miss, often as mean squared error. It is the third of Tredennick and colleagues' modeling goals, after exploration and inference ([[Tredennick et al. 2021]]).

The defining rule is that a predictive model must be judged on *out-of-sample* data, data that were not used to fit it. Any model looks good on its own data, because it can bend to their noise ([[Overfitting]]). The simulation from the [[Parsimony]] note shows how badly in-sample fit can mislead: a wiggly 12-parameter curve fits 15 points with R² = 0.98 against a [[Equation of a Line|straight line]]'s 0.57, yet on 200 new points its mean squared error is 6.23 against the line's 1.17. Judged on its own data the curve wins; judged as a [[Predictor Variable|predictor]] it loses badly. In ecology, where new data take years, you usually hold back part of your data to play the role of "future rides", most systematically with [[Cross-validation|cross-validation]], which repeatedly leaves part of the data out and predicts it ([[Leave-one-out Cross-validation]]).

Because only forecasts are judged, anything that lowers prediction error is allowed, including *[[Regularization|regularization]]*, deliberately shrinking coefficients toward zero (ridge regression, LASSO); Tredennick and colleagues' ridge regression forecast butterfly population growth better than an unpenalised model. Prediction cares about ŷ, not about the coefficients β̂, and the best forecaster may have odd or biased coefficients that should not be interpreted. So a model that predicts well does not necessarily explain well, and high R² does not mean good predictions, since R² is measured on the fitting data. [[AIC]] is at heart a predictive tool, an estimate of out-of-sample performance, which is why Tredennick and colleagues caution against treating it as a test of hypotheses ([[Statistical Model]]).

![[Exploration inference prediction.png|700]]
*What to look at:* prediction's pitfall is not validating on new data.

```r
loo_error <- sapply(1:nrow(mtcars), function(i) {
  fit <- lm(mpg ~ wt + hp, data = mtcars[-i, ])      # fit without car i
  (mtcars$mpg[i] - predict(fit, mtcars[i, ]))^2      # predict car i
})
mean(loo_error)        # out-of-sample mean squared error
```

## Connections
- **Builds on:** [[Statistical Model]], [[Overfitting]], [[Equation of a Line]], [[Predictor Variable]]
- **Leads to:** [[Leave-one-out Cross-validation]], [[AIC]], [[Inferential Modeling]], [[Fitted Value]], [[Cross-validation]], [[Regularization]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]], molecular note [[Exploration, Inference and Prediction]]
- **Go deeper:** [[Tredennick et al. 2021]]

## Flashcards

How must a predictive model be judged?
??
On data it has not seen (out-of-sample), because any model looks good on its own fitting data.
![[Exploration inference prediction.png]]
++++

Inference focuses on β̂, prediction on ŷ. Why does that matter?
??
The best predictive model can have biased or uninterpretable coefficients, and the clearest inferential model may predict poorly.
++++
