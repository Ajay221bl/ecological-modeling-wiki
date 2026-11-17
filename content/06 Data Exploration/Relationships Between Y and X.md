---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "Response-predictor relationships"
  - "Functional form"
status: seedling
---

# Relationships Between Y and X

**In one line:** checking the relationship between Y and X means plotting the response against each predictor to see what shape, if any, connects them.

> [!info] Before this, it helps to know
> [[Scatterplot]] (the tool) · [[Linear Function]] and [[Nonlinear Function]] (the shapes to tell apart)

## The everyday picture
Trying on a jacket before buying. The model you plan to fit assumes a shape, usually a straight line. Looking first tells you whether that shape fits the data's shoulders.

## Start from zero
1. **Plot Y against each X,** with a smoother.
2. **Straight?** A linear term will do.
3. **Curved one way?** Consider a log of X or Y, or a GLM with a log link.
4. **Humped?** A quadratic term or a smooth.
5. **Flat?** Maybe no effect, or an effect hidden by another variable.
6. **Does the spread change along X?** Note it for the variance check.
7. **Why not just fit and see:** a straight line fitted to a curve gives a confident, wrong slope and a residual pattern you might not look for.
8. **Hold back on conclusions.** These plots show each predictor alone. With several correlated predictors, the pattern for one can be created by another.

## In R
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

## In the course
Protocol step 6 ([[Zuur et al. 2010]]).

## Common confusions
- **"These plots tell me which predictors matter."** They tell you about shape. Choosing predictors by eye from the data is snooping.

## Explain it back
- What are three shapes to look for and the usual response to each?

*Pass test:* you can match a scatterplot shape to a modeling choice.

## Connections
- **Builds on:** [[Scatterplot]]
- **Leads to:** [[Linearity]], [[Transformation]], [[Quadratic Term]], [[Generalized Additive Model]]
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
