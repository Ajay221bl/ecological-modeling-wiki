---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Inverse prediction works a fitted model backward, finding the predictor value at which the response reaches a target, such as the temperature at which bleaching hits 50%, together with an interval for that value."
aliases:
  - "Inverse regression"
  - "Calibration"
  - "Solving for x"
  - "Predictor value for a target response"
  - "LD50"
  - "Dose for 50% response"
status: seedling
---

# Inverse Prediction

A thermostat answers a forward question: at 22 °C, how warm does the room feel? Sometimes you need the backward question: what temperature makes the room feel just right? **Inverse prediction** works a fitted model backward, finding the [[Predictor Variable|predictor]] value x at which the response reaches a target y. For a [[Equation of a Line|straight line]] ŷ = a + b·x you solve y* = a + b·x and get x* = (y* − a)/b. For a logistic regression the target is a probability, so you first turn it into [[Log Odds|log odds]]: for p = 0.5 the log odds is 0, so x* = −a/b ([[Logit Link]], [[Logistic Regression]]). Toxicology calls this the LD50, the dose that kills half the animals.

The estimate is easy; the uncertainty is the part to think about. Because a and b are estimated, x* is uncertain too, and the cleanest way to get an interval is to read it off the [[Confidence Envelopes|prediction band]]. Predict the response with its interval across a fine grid of x values, then find where the band's upper and lower edges cross the target. With a [[Linear Model|linear model]] use `predict(..., interval = "prediction")` if the question is about a single year's value, or `"confidence"` if it is about the average ([[Prediction Interval]], [[Prediction vs Confidence Interval]]). With a GLM predict on the [[Link Scale|link scale]] with `se.fit = TRUE`, build the interval there, and turn it into probabilities with `plogis()`, so the band never goes below 0 or above 1 ([[Predictions on Link vs Response Scale]]).

Homework 2 asks both versions: where the linear model of log [[Coral Bleaching|bleaching]] predicts 50% of cells bleached (target [[Logarithm|log10]](50) = 1.70), and where the logistic model of MASS gives a 50% chance of a mass bleaching year. A trap: the target must be on the same scale as the response the model used, so log the 50 before solving the LOGBLEACH model. When the slope is small or uncertain the interval for x* can be huge or open-ended, which is honest and worth reporting.

![[Inverse prediction on a logistic curve.png|700]]
*What to look at:* the fitted curve crosses 0.5 at SST = 0.30, but the band's lower edge flattens out below 0.5, so the interval for the crossing point has a lower limit (about 0.07, where the upper edge crosses) and no upper limit.

```r
set.seed(2); x <- seq(-0.6, 0.8, length.out = 30); y <- rbinom(30, 1, plogis(-1 + 6 * x))
m <- glm(y ~ x, family = binomial)
x50 <- -coef(m)[1] / coef(m)[2]                                     # where p = 0.5
grid <- data.frame(x = seq(-0.6, 0.8, by = 0.001))
p <- predict(m, grid, type = "link", se.fit = TRUE)
lo <- plogis(p$fit - 1.96 * p$se.fit); hi <- plogis(p$fit + 1.96 * p$se.fit)
round(c(x50 = unname(x50), lower = min(grid$x[hi >= 0.5]), upper = min(grid$x[lo >= 0.5])), 3)
```

## Connections
- **Builds on:** [[predict()]], [[Logit Link]], [[Prediction Interval]], [[Predictor Variable]], [[Equation of a Line]], [[Log Odds]], [[Linear Model]], [[Link Scale]], [[Logarithm]]
- **Leads to:** [[Predictions on Link vs Response Scale]], [[Confidence Envelopes]], [[Coral Bleaching]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]], molecular note [[Homework 2 - Coral Bleaching]]

## Flashcards

What is inverse prediction?
??
Using a fitted model backward to find the predictor value at which the response reaches a target.
![[Inverse prediction on a logistic curve.png]]
++++

For a logistic regression, where is p = 0.5?
??
Where the linear predictor is 0, so x = −intercept / slope.
++++

How do you get an interval for an inverse prediction?
??
Find where the edges of the prediction (or confidence) band cross the target value.
++++

What scale must the target be on?
??
The scale the model's response used, for example log10(50) for a log10 response.
++++
