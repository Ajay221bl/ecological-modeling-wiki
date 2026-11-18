---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A prediction interval is a range expected to contain a single new observation with a stated probability, combining uncertainty about the fitted mean with the scatter of individuals around it."
aliases:
  - "Predictive interval"
  - "interval = \"prediction\""
status: seedling
---

# Prediction Interval

You may know the long-run average temperature for a date to within half a degree, yet tomorrow itself can land five degrees either side. A **prediction interval** is for tomorrow, not the average: a range expected to contain a single new observation with a stated probability. It combines two sources of uncertainty: where the true line is (estimation), and how far a new point will fall from it ([[Residual Standard Error|residual scatter]]). A [[Confidence Interval]] for the mean uses only the first, so its width shrinks toward zero as n grows. A prediction interval uses both, with variance = (SE of the fitted mean)² + σ², so it never shrinks below about ±2σ, however much data you have.

The figure shows both: the narrow inner band is for the mean and the wide outer band for new observations. In the code below, with 60 points and residual SD about 1.5, the confidence interval at x = 5 is a fraction of a unit wide while the prediction interval spans about ±3, and the [[Standard Deviation|standard deviation]] behind it is computed by hand as √(SE² + σ̂²).

Show the [[Confidence Envelopes|confidence band]] to say how well the relationship is known, and the prediction band to say where new data will fall ([[Predicting New Data]], [[Plotting Model Predictions with Ribbons]]). The prediction interval depends on the [[Error Distribution (Family)|error distribution]] being right much more than the confidence interval does. More data do not make it vanish; only the estimation part shrinks. In [[Mixed Effects Model|mixed models]] the distinction multiplies, as the 15 October session on "the CI wars" discusses, and the Bayesian equivalent comes from the [[Posterior Predictive Distribution]] ([[Course Website]], [[Forecast]]).

![[Prediction ribbon.png|700]]
*What to look at:* the narrow inner band is for the mean. The wide outer band is for new observations.

```r
set.seed(11); d <- data.frame(x = runif(60, 0, 10)); d$y <- 2 + 0.8 * d$x + rnorm(60, 0, 1.5)
m <- lm(y ~ x, d); nd <- data.frame(x = 5)
rbind(confidence = predict(m, nd, interval = "confidence"), prediction = predict(m, nd, interval = "prediction"))
se <- predict(m, nd, se.fit = TRUE)$se.fit; sqrt(se^2 + sigma(m)^2)         # SD used for the prediction interval
```

## Connections
- **Builds on:** [[Confidence Interval]], [[Residual Standard Error]], [[Standard Deviation]], [[Error Distribution (Family)]]
- **Leads to:** [[Posterior Predictive Distribution]], [[Plotting Model Predictions with Ribbons]], [[Forecast]], [[Confidence Envelopes]], [[Mixed Effects Model]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]], molecular note [[Prediction vs Confidence Interval]]

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
