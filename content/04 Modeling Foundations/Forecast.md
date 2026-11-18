---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
description: "A forecast is a prediction about the future that comes with a statement of how uncertain it is."
aliases:
  - "Forecasting"
  - "Ecological forecast"
status: seedling
---

# Forecast

A hurricane track map shows a line, the best guess of where the storm will go, inside a cone that widens with each day ahead, because small errors grow. A **forecast** is the line and the cone together: a prediction about the future that comes with a statement of how uncertain it is. How far ahead it reaches is its *horizon*, and the range the future value is expected to fall in is a [[Prediction Interval]]. Without the interval a forecast is just a guess, because a bare number hides the risk any decision based on it carries.

A herd of 100 animals grows by about 5% a year, give or take 10 percentage points from year to year. One year ahead the best guess is 105, with a plausible (90%) range of about 88 to 121. Five years ahead the best guess is about 125, but the range has spread to roughly 87 to 174. The central guess grows slowly while the range grows fast, because errors compound: next year's starting point is itself uncertain, so each step forward adds new doubt on top of the old. A good forecast carries every source of uncertainty forward, including doubt about the parameters, natural year-to-year variation, and unknown future conditions ([[Uncertainty]]). Simulating thousands of possible futures and reading off quantiles each year is a simple way to draw the cone.

Decisions are about the future (quotas, burns, reintroductions), which is why forecasting is one of the [[Model Purpose - Exploration Inference Prediction|three modeling goals]] Tredennick and colleagues separate from exploration and inference ([[Predictive Modeling]], [[Tredennick et al. 2021]]). They stress that the model that explains best is often not the one that forecasts best, so explaining well and forecasting well are different tests. A forecast also has to be scored: you can test a model on data it never saw ([[Out-of-sample Prediction]]), or "forecast" held-back past data, a *hindcast*, and then check real forecasts as the future arrives. Hurricane forecasts are scored within days; ecological forecasts may wait decades. Hobbs and Hooten treat a forecast as a posterior predictive distribution ([[Posterior Predictive Distribution]]).

![[Forecast cone.png|700]]
*What to look at:* the shaded band widens with every year ahead.

```r
set.seed(4)
sims <- replicate(2000, cumprod(c(100, 1 + rnorm(5, 0.05, 0.10))))   # 2000 possible futures
t(apply(sims, 1, quantile, c(0.05, 0.5, 0.95)))                      # rows = year 0 to 5
```
The middle column is the forecast. The outer columns are a 90% interval that widens each year.

## Connections
- **Builds on:** [[Predictive Modeling]], [[Uncertainty]]
- **Leads to:** [[Prediction Interval]], [[Out-of-sample Prediction]], [[Posterior Predictive Distribution]], [[Model Purpose - Exploration Inference Prediction]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]], molecular note [[Exploration, Inference and Prediction]]

## Flashcards

What is a forecast?
??
A prediction of a future value together with its uncertainty.
![[Forecast cone.png]]
++++

Why do forecast intervals widen with time?
??
Each step starts from an uncertain value, so errors compound.
++++

What is a hindcast?
??
Predicting held-back past data to test how well a model forecasts.
++++
