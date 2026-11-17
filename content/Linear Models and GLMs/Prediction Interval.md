---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Predictive interval"
  - "interval = \"prediction\""
status: seedling
---

# Prediction Interval

**In one line:** a prediction interval is a range expected to contain a single new observation with a stated probability, combining uncertainty about the fitted mean with the scatter of individuals around it.

> [!info] Before this, it helps to know
> [[Confidence Interval]] (for the mean only) · [[Residual Standard Error]] (the individual scatter) · [[Predicting New Data]] (the setting)

## The everyday picture
Forecasting tomorrow's temperature. You may know the long-run average for the date to within half a degree. Tomorrow itself can still land five degrees either side. The prediction interval is for tomorrow, not for the average.

## Start from zero
1. **Two sources of uncertainty.** Where is the true line (estimation)? How far will a new point fall from it (residual scatter)?
2. **Confidence interval for the mean:** uses only the first. Width shrinks toward zero as n grows.
3. **Prediction interval:** uses both. Variance = (SE of fitted mean)² + σ².
4. **It never shrinks below about ±2σ,** however much data you have.
5. **It depends on the error distribution being right,** much more than the confidence interval does.
6. **Which to show:** the confidence band to show how well the relationship is known. The prediction band to show where new data will fall.

## See it
![[Prediction ribbon.png|700]]
*What to look at:* the narrow inner band is for the mean. The wide outer band is for new observations.

## In R
```r
set.seed(11); d <- data.frame(x = runif(60, 0, 10)); d$y <- 2 + 0.8 * d$x + rnorm(60, 0, 1.5)
m <- lm(y ~ x, d); nd <- data.frame(x = 5)
rbind(confidence = predict(m, nd, interval = "confidence"), prediction = predict(m, nd, interval = "prediction"))
se <- predict(m, nd, se.fit = TRUE)$se.fit; sqrt(se^2 + sigma(m)^2)         # SD used for the prediction interval
```

## In the course
Contrasted with confidence intervals in the regression lab ([[Course Website]]). In mixed models the distinction multiplies (Oct 15, "The CI wars").

## Common confusions
- **"More data make the prediction interval vanish."** Only the estimation part shrinks.

## Explain it back
- Why is a prediction interval always wider than a confidence interval?

*Pass test:* you can compute both intervals and explain their difference.

## Connections
- **Builds on:** [[Confidence Interval]], [[Residual Standard Error]]
- **Leads to:** [[Posterior Predictive Distribution]], [[Plotting Model Predictions with Ribbons]], [[Forecast]]
- **Part of:** [[MOC - Linear Models and GLMs]], molecular note [[Prediction vs Confidence Interval]]

## Flashcards

What does a prediction interval describe?
??
The range likely to contain a single new observation at given predictor values.
![[Prediction ribbon.png]]
++++

Which two variances add to give the prediction variance?
??
The variance of the estimated mean and the residual variance σ².
++++
