---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
aliases:
  - "Bias variance tradeoff"
  - "Bias-variance"
status: seedling
---

# Bias-Variance Trade-off

**In one line:** adding parameters to a model reduces its bias but makes each estimate wobblier (more variance); removing them does the reverse. The best model balances the two.

> [!info] Before this, it helps to know
> [[Bias]] · [[Precision]] · [[Overfitting]] · [[Underfitting]]

## The everyday picture
Describing a friend's face to a sketch artist with a limited number of words. With 3 words ("round, smiling, bald") the sketch is recognisable but crude: biased. With 300 words you'll mention the pimple and the shadow from that day's light, details that won't be there next week, and every word you use is less carefully chosen. Somewhere in between, the sketch is best.

*Where the picture stops working:* words don't wobble. Model parameters do, because each one is estimated from the same limited data.

## Words you'll need
- **Bias:** systematic miss from leaving things out ([[Bias]]).
- **Variance (of an estimate):** how much it would wobble across samples; the opposite of precision ([[Precision]]).
- **Mean squared error:** bias² + variance; the total expected miss ([[Accuracy]]).
- **Shrinkage / regularization:** pulling estimates toward a central value, accepting a little bias for less variance ([[Partial Pooling]]).

## A tiny example
Using the [[Parsimony]] simulation: on new data,
- the straight line (3 parameters) has mean squared error **1.17**;
- the degree-10 polynomial (12 parameters) has **6.23**.
The polynomial has almost no bias on the fitting data but huge variance; the line accepts a little rigidity and wins overall. Tredennick et al.'s ridge regression, a deliberately biased fit, beat an unpenalised one at forecasting butterfly growth for the same reason ([[Tredennick et al. 2021]]).

## Start from zero
1. **Few parameters: the model can't follow reality closely.** High bias ([[Underfitting]]).
2. **Many parameters: it can follow anything, including noise.** *Why variance rises:* the same data are spread over more things to estimate, so each is pinned down less precisely ([[Overfitting]]).
3. **Total error = bias² + variance.** *Why add them:* both push estimates away from the truth.
4. **So error is lowest somewhere in the middle.** That's the sweet spot parsimony aims for.
5. **Some tools trade on purpose:** priors, ridge regression and mixed-model shrinkage add a little bias to cut a lot of variance.

## See it
![[Parsimony.png|700]]
*What to look at:* the left panel is the bias end, the right panel the variance end.

## Why it is this way
Data are finite, and every parameter takes a share of them. That fixed budget is why you can't drive both bias and variance to zero at once, and why model selection exists.

## In R
```r
set.seed(3)
x <- sort(runif(15, 0, 10)); y <- 2 + 0.5 * x + rnorm(15, 0, 1)
set.seed(30)
x_new <- runif(200, min(x), max(x)); y_new <- 2 + 0.5 * x_new + rnorm(200, 0, 1)
mse <- function(d) mean((y_new - predict(lm(y ~ poly(x, d)), data.frame(x = x_new)))^2)
round(sapply(1:10, mse), 2)    # error on new data for curves of degree 1 to 10
```

## In the course
Behind model selection (Sep 15), priors (Units 5 and 7) and partial pooling in mixed models ([[Partial Pooling]]).

## Common confusions
- **"Unbiased is always best."** A slightly biased, much more precise estimate can land closer to the truth.
- **"Variance here means data variance."** It means the wobble of estimates across samples.

## Explain it back
- Use the sketch artist to explain the trade-off.
- Why does adding parameters increase the variance of each estimate?
- Why can a deliberately biased method forecast better?

*Pass test:* you can say where on the bias-variance line a given model sits and why.

## Connections
- **Builds on:** [[Bias]], [[Precision]], [[Overfitting]], [[Underfitting]]
- **Leads to:** [[Partial Pooling]], [[AIC]], [[Prior Distribution|Prior]]
- **Part of:** [[MOC - Modeling Foundations]]; the principle behind it: [[Parsimony]]
- **Go deeper:** [[Tredennick et al. 2021]]

## Flashcards

What is the bias-variance trade-off?
??
More parameters reduce bias but increase variance (each is estimated less precisely); fewer parameters do the reverse.
![[Parsimony.png]]
++++

Why can a deliberately biased method (ridge, shrinkage) predict better?
??
It accepts a little bias in exchange for a large cut in variance, lowering total error (bias² + variance).
++++
