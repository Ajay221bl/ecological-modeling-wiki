---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
aliases:
  - "Forecasting"
  - "Ecological forecast"
status: seedling
---

# Forecast

**In one line:** a forecast is a prediction about the future that comes with a statement of how uncertain it is.

> [!info] Before this, it helps to know
> [[Predictive Modeling]] (modeling to predict) · [[Uncertainty]] (a range of plausible values)

## The everyday picture
A hurricane track map. The line is the best guess. The cone around it widens with each day ahead, because small errors grow. A forecast is the line and the cone together.

*Where the picture stops working:* hurricane forecasts are scored against outcomes within days. Ecological forecasts may wait decades.

## Words you'll need
- **Horizon:** how far ahead the forecast reaches.
- **Prediction interval:** the range the future value is expected to fall in ([[Prediction Interval]]).
- **Hindcast:** "forecasting" past data the model didn't see, to test it.

## A tiny example
A herd of 100 grows by about 5% a year, give or take 10 percentage points.
- 1 year ahead: best guess 105, plausible range about 88 to 121.
- 5 years ahead: best guess about 125, plausible range about 87 to 174.
- The guess grows slowly. The range grows fast.

## Start from zero
1. **Fit a model to past data.**
2. **Project it forward.** That gives the central line.
3. **Carry every uncertainty forward too.** Parameter doubt, process variation, unknown future drivers.
4. **Errors compound over time.** *Why:* next year's starting point is itself uncertain, so each step multiplies the doubt.
5. **Report the interval, then check it later.** A forecast you never score teaches nothing.

## See it
![[Forecast cone.png|700]]
*What to look at:* the shaded band widens with every year ahead.

## Why it is this way
Decisions are about the future: quotas, burns, reintroductions. A bare number hides the risk the decision carries. Tredennick and colleagues separate forecasting from explanation because the best model for one is often not the best for the other.

## In R
```r
set.seed(4)
sims <- replicate(2000, cumprod(c(100, 1 + rnorm(5, 0.05, 0.10))))   # 2000 possible futures
t(apply(sims, 1, quantile, c(0.05, 0.5, 0.95)))                      # rows = year 0 to 5
```
The middle column is the forecast. The outer columns are a 90% interval that widens each year.

## In the course
Prediction is one of three modeling goals in [[Tredennick et al. 2021]]. Hobbs and Hooten treat forecasts as posterior predictive distributions ([[Posterior Predictive Distribution]]).

## Common confusions
- **"A forecast is a single number."** Without the interval it is a guess.
- **"A model that explains well forecasts well."** Explanation and prediction reward different models.

## Explain it back
- Why does a forecast interval widen with the horizon?
- What is a hindcast for?

*Pass test:* you can describe a forecast as a central value plus a widening interval.

## Connections
- **Builds on:** [[Predictive Modeling]], [[Uncertainty]]
- **Leads to:** [[Prediction Interval]], [[Out-of-sample Prediction]], [[Posterior Predictive Distribution]]
- **Part of:** [[MOC - Modeling Foundations]], molecular note [[Exploration, Inference and Prediction]]

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
