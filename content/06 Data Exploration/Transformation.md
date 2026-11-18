---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "A transformation replaces a variable with a mathematical function of itself, such as its logarithm, before analysis."
aliases:
  - "Data transformation"
  - "Transforming variables"
status: seedling
---

# Transformation

A map of the solar system drawn to scale puts the inner planets in one unreadable clump. Draw it with a ruler whose marks go 1, 10, 100, 1000 and every planet has room; the planets have not moved, the ruler changed. A **transformation** replaces a variable with a mathematical function of itself, such as its [[Logarithm]], [[Square Root|square root]] or logit, before analysis ([[Functions in Maths]]). Every value is transformed and the model is fitted on the new scale. People transform for three reasons: to straighten a [[Nonlinear Function|curved relationship]] ([[Linearity]]), to even out spread that changes, and to reduce the pull of extreme values.

The figure and code below show all three on one dataset where y grows exponentially with x: on the raw scale the cloud is a curved fan, the square root helps, and on the log scale it becomes a straight, even band. A model of log(y) then recovers the true slope of 0.3, which means each unit of x multiplies y by about e^0.3 ≈ 1.35, close to the 1.31 estimated from these data. The cost is that the model now describes the transformed variable: a slope is per log-unit, and back-transforming a mean does not give the mean on the original scale. The last line shows that exp(mean(log y)) is smaller than mean(y); it is the geometric mean.

Transforming a [[Predictor Variable|predictor]], such as log body mass, is harmless to the error assumptions and often sensible. Transforming the response is the delicate case. For counts and proportions, a GLM usually does the job better, because it changes the scale of the *mean* through the [[Link Function]] and leaves the data alone ([[Transform the data or change the model]]). Zuur's protocol treats transformation as one option when [[Outlier|outliers]] or heterogeneity appear, to consider before deleting outliers, while preferring a better model where possible ([[Zuur et al. 2010]]). The aim is never to make the response look normal, but a well-behaved relationship and residuals. Common choices have their own notes ([[Log Transformation]], [[Square-root Transformation]], [[Logit Link|Logit Transformation]]).

![[Transformation effect.png|700]]
*What to look at:* a curved fan becomes a straight even band on the log scale.

```r
set.seed(13)
x <- runif(100, 1, 10); y <- exp(0.3 * x + rnorm(100, 0, 0.4))
op <- par(mfrow = c(1, 3)); plot(x, y); plot(x, sqrt(y)); plot(x, log(y)); par(op)
m <- lm(log(y) ~ x); coef(m)                         # slope close to the true 0.3
exp(coef(m)[2])                                      # each unit of x multiplies y by about 1.31
c(mean(y), exp(mean(log(y))))                        # back-transformed mean of logs is NOT the mean
```

## Connections
- **Builds on:** [[Functions in Maths]], [[Logarithm]], [[Square Root]], [[Nonlinear Function]], [[Predictor Variable]], [[Outlier]]
- **Leads to:** [[Log Transformation]], [[Square-root Transformation]], [[Link Function]], [[Logit Link|Logit Transformation]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]], molecular note [[Transform the data or change the model]]

## Flashcards

What is a transformation?
??
Replacing a variable by a function of itself (log, square root, logit) before analysis.
![[Transformation effect.png]]
++++

What are the three usual aims of transforming?
??
Linearise a relationship, stabilise variance, reduce the influence of extreme values.
++++

What is lost when the response is transformed?
??
Direct interpretation on the original scale. Back-transformed means are not original-scale means.
++++
