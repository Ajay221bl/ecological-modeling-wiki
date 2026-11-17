---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Model prediction"
  - "Predicted values"
status: seedling
---

# Predicting New Data

**In one line:** predicting new data means using a fitted model's equation to compute the expected response at predictor values of your choosing, together with a statement of uncertainty.

> [!info] Before this, it helps to know
> [[Fitted Value]] (prediction for old data) · [[predict()]] (the tool) · [[Model Matrix]] (the arithmetic)

## The everyday picture
Reading a height off a growth chart for a child of an age nobody measured exactly. The chart, built from other children, gives the typical height and a band around it.

## Start from zero
1. **Choose the predictor values** you care about.
2. **Plug them into the fitted equation.** Coefficients × values, summed.
3. **Apply the inverse link** if the model has one.
4. **Add uncertainty.** A confidence interval for the mean response, or a prediction interval for a single new observation.
5. **Why predictions are the best way to present a model:** coefficients are on awkward scales and depend on coding. A plot of predicted response against a predictor, with a band, is on the scale readers understand.
6. **Stay inside the range of the data.**
7. **Fix the other predictors deliberately,** at means or at named scenarios, and say what you chose.

## In R
```r
set.seed(9); d <- data.frame(tree = runif(80, 0, 60)); d$rich <- rnorm(80, 12 - 0.1 * d$tree, 1.5)
m <- lm(rich ~ tree, d); nd <- data.frame(tree = c(10, 30, 50))
coef(m)[1] + coef(m)[2] * nd$tree                         # by hand
predict(m, nd, interval = "confidence")
```

## In the course
A stated learning goal of each modeling lab ([[Course Website]]). [[Hobbs and Hooten 2015 Ch8]] for the Bayesian version.

## Common confusions
- **"Prediction is only for forecasting."** It is also the clearest way to explain a fitted model.

## Explain it back
- What are the steps to predict at a new predictor value?

*Pass test:* you can compute a prediction by hand and with `predict()`.

## Connections
- **Builds on:** [[Fitted Value]], [[predict()]]
- **Leads to:** [[Prediction Interval]], [[Extrapolation]], [[Predicting with Scaled Covariates]], [[Posterior Predictive Distribution]]
- **Part of:** [[MOC - Linear Models and GLMs]]

## Flashcards

Why present model results as predictions rather than only coefficients?
??
Predictions are on the response scale, independent of coding choices, and show effect size and uncertainty together.
++++
