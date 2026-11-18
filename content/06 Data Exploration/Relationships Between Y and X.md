---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "Checking the relationship between Y and X means plotting the response against each predictor to see what shape, if any, connects them."
aliases:
  - "Response-predictor relationships"
  - "Functional form"
status: seedling
---

# Relationships Between Y and X

You try on a jacket before buying it. The model you plan to fit assumes a shape, usually a [[Equation of a Line|straight line]] ([[Linear Function]]), and checking the **relationships between Y and X** means plotting the response against each [[Predictor Variable|predictor]], with a smoother, to see whether that shape fits ([[Scatterplot]]). Straight means a linear term will do ([[Linearity]]). Curved one way suggests a log of X or Y, or a GLM with a [[Log Link|log link]] ([[Transformation]]). Humped suggests a [[Quadratic Term]] or a smooth ([[Generalized Additive Model]]). Flat may mean no effect, or an effect hidden by another variable. And note whether the spread changes along X, for the variance check.

The example below shows why this matters. The response grows exponentially with x and its spread grows too, so on the raw scale the smoother curves upward and the scatter fans out ([[Nonlinear Function]]). On the log scale the relationship is straight and the spread even, and a straight line fitted to [[Log Transformation|log(y)]] explains far more of the variation than one fitted to y. Fitting a straight line to a curve without looking gives a confident, wrong slope and a residual pattern you might not think to look for. This check is step 6 of the protocol ([[Zuur et al. 2010]]).

Hold back on conclusions. These plots show each predictor alone, and with several [[Collinearity|correlated predictors]] the pattern for one can be created by another. They tell you about the *shape* of relationships, not which predictors matter; choosing predictors by eye from these plots is [[Data Dredging|data snooping]].

```r
set.seed(13)
x <- runif(80, 1, 50); y <- exp(1 + 0.05 * x + rnorm(80, 0, 0.3))
op <- par(mfrow = c(1, 2))
plot(x, y); lines(lowess(x, y), col = 2)             # curved, spread grows
plot(x, log(y)); lines(lowess(x, log(y)), col = 2)   # straight, even spread
par(op)
c(summary(lm(y ~ x))$r.squared, summary(lm(log(y) ~ x))$r.squared)
```
The log scale straightens the relationship and evens out the spread.

## Connections
- **Builds on:** [[Scatterplot]], [[Equation of a Line]], [[Predictor Variable]], [[Log Transformation]], [[Collinearity]]
- **Leads to:** [[Linearity]], [[Transformation]], [[Quadratic Term]], [[Generalized Additive Model]], [[Log Link]], [[Data Dredging]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

Why plot Y against each X before modeling?
??
To see whether the relationship is straight, curved or humped, so the model's assumed shape fits.
++++

What does a curved Y-X plot with spread growing along X suggest?
??
A log transformation or a GLM with a log link.
++++
