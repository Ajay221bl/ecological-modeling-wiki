---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
aliases:
  - "Prediction (goal)"
  - "Prediction"
status: seedling
---

# Predictive Modeling

**In one line:** predictive modeling aims to forecast new observations as accurately as possible, and it must be judged on data the model has never seen.

> [!info] Before this, it helps to know
> [[Statistical Model]] · [[Overfitting]] (the main danger)

## The everyday picture
Guessing how long tomorrow's taxi ride will take. You don't care *why* traffic is bad, only that your guess is close. And you'd judge your guessing method by how it does on *future* rides, not by how well it "explains" rides you've already taken.

*Where the picture stops working:* taxi rides keep coming, so you can always check. In ecology you often have to hold back part of your data to play the role of "future rides".

## Words you'll need
- **Prediction (ŷ, "y-hat"):** the model's forecast for an observation.
- **Out-of-sample:** data not used to fit the model.
- **Prediction error:** how far forecasts miss, often as mean squared error.
- **Cross-validation:** repeatedly holding back part of the data and predicting it ([[Leave-one-out Cross-validation]]).
- **Regularization:** deliberately shrinking coefficients to forecast better (ridge, LASSO).

## A tiny example
In the [[Parsimony]] example, a wiggly 12-parameter curve fits 15 points with R² = 0.98, while a straight line gets 0.57. On 200 *new* points, the curve's mean squared error is **6.23** and the line's **1.17**. Judged on its own data the curve wins; judged as a predictor it loses badly.

## Start from zero
1. **The goal is accurate forecasts,** not interpretable coefficients.
2. **Anything that lowers prediction error is allowed:** AIC, cross-validation, regularization ([[Tredennick et al. 2021]]).
3. **But the test must use unseen data.** *Why:* any model looks good on the data it was fitted to, because it can bend to their noise ([[Overfitting]]).
4. **Prediction cares about ŷ, not β̂.** *Why it matters:* the best forecaster may have odd or biased coefficients that shouldn't be interpreted.
5. **AIC is a predictive tool.** It estimates out-of-sample performance, which is why Tredennick et al. caution against using it for inference ([[AIC]]).

## See it
![[Exploration inference prediction.png|700]]
*What to look at:* prediction's pitfall is not validating on new data.

## Why it is this way
Prediction's enemy is overfitting. The only honest referee is data the model didn't train on.

## In R
```r
loo_error <- sapply(1:nrow(mtcars), function(i) {
  fit <- lm(mpg ~ wt + hp, data = mtcars[-i, ])      # fit without car i
  (mtcars$mpg[i] - predict(fit, mtcars[i, ]))^2      # predict car i
})
mean(loo_error)        # out-of-sample mean squared error
```

## In the course
The third goal in Tredennick et al. 2021, whose ridge regression cut butterfly forecast error by about 15% ([[Tredennick et al. 2021]]).

## Common confusions
- **"A model that predicts well explains well."** Not necessarily.
- **"High R² means good predictions."** R² is measured on the fitting data.

## Explain it back
- Use taxi-ride guesses to explain predictive modeling.
- Why must a predictive model be tested on unseen data?
- Why shouldn't you over-interpret a good forecaster's coefficients?

*Pass test:* you can describe how you'd hold back data to check a forecast.

## Connections
- **Builds on:** [[Statistical Model]], [[Overfitting]]
- **Leads to:** [[Leave-one-out Cross-validation]], [[AIC]], [[Inferential Modeling]]
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
