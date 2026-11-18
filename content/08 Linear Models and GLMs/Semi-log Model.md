---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A semi-log model is a regression in which the response is logged and the predictor is left on its original scale, so the response changes by a constant percentage per unit of the predictor."
aliases:
  - "Log-linear regression"
  - "Log-level model"
  - "Exponential regression"
status: seedling
---

# Semi-log Model

Graph paper whose vertical axis is marked 1, 10, 100, 1000 turns a curve of steady percentage growth into a [[Equation of a Line|straight line]]. A **semi-log model** is a regression in which the response is logged and the [[Predictor Variable|predictor]] left on its original scale: log(y) = β₀ + β₁x ([[Log Transformation]]). Back on the original scale that is y = e^(β₀) · e^(β₁x), an exponential curve ([[Exponential Function]]). So β₁ is the proportional change in y per unit of x, with multiplier e^(β₁) ([[Multiplicative Effects]]).

It suits growth or decay through time, decline with distance, and anything changing by a constant percentage ([[Exponential Growth Model]]). In the code below, a population starting near 50 and growing about 8% a year is fitted with `lm(log(N) ~ t)`: the intercept back-transforms to about 50 and the slope to a multiplier of about 1.08 ([[Back-transformation]]). The same model fitted on the mean scale is a GLM with a [[Log Link]].

The mirror image, the level-log model y = β₀ + β₁ log(x), describes diminishing returns: each doubling of x adds β₁ · log(2) to y. Logging both variables gives the [[Log-log Model]]. Guthery and Bingham's point is that the same β means very different things in linear, semi-log and log-log models, so you must know which you fitted before interpreting it ([[Guthery and Bingham 2007]]). Semi-log and log-log are not the same: one logs one variable, the other both.

```r
set.seed(5); t <- 0:20; N <- 50 * exp(0.08 * t + rnorm(21, 0, 0.1))
m <- lm(log(N) ~ t); coef(m); exp(coef(m))        # start about 50, growing about 8% per year
plot(t, N); lines(t, exp(fitted(m)))
```

## Connections
- **Builds on:** [[Log Transformation]], [[Multiplicative Effects]], [[Equation of a Line]], [[Predictor Variable]]
- **Leads to:** [[Log-log Model]], [[Exponential Growth Model]], [[Back-transformation]], [[Log Link]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]], molecular note [[Linear, Semi-log and Log-log Models]]

## Flashcards

What does the slope mean in log(y) = β₀ + β₁x?
??
Each unit of x multiplies y by exp(β₁), roughly a 100·β₁ percent change for small β₁.
++++
