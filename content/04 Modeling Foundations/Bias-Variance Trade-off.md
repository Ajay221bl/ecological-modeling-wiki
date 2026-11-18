---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
description: "Adding parameters to a model reduces its bias but makes each estimate wobblier (more variance); removing them does the reverse. The best model balances the two."
aliases:
  - "Bias variance tradeoff"
  - "Bias-variance"
status: seedling
---

# Bias-Variance Trade-off

Imagine describing a friend's face to a sketch artist. With 3 words ("round, smiling, bald") the sketch is recognisable but crude. With 300 words you start describing the pimple and the shadow from that day's light, details that will not be there next week, and each word is less carefully chosen. Somewhere in between, the sketch is best. The **bias-variance trade-off** is the same tension in models. A model with few parameters cannot follow reality closely, so it misses systematically: that is *bias* ([[Bias]], [[Underfitting]]). A model with many parameters can follow anything, including noise, and because the same limited data are spread over more things to estimate, each estimate wobbles more from sample to sample: that is *variance*, the opposite of [[Precision]] ([[Overfitting]]). Here "variance" means the wobble of estimates across samples, not the spread of the data.

The total expected miss is the mean squared error, bias² + variance ([[Accuracy]]), and because one term falls while the other rises as parameters are added, total error is lowest somewhere in the middle. A simulation from the [[Parsimony]] note shows it: 15 points are generated from a [[Equation of a Line|straight line]] plus noise, and curves of increasing degree are fitted and then tested on 200 new points. The straight line (3 parameters) has a mean squared error of 1.17 on the new data; the degree-10 polynomial (12 parameters), which hugs the original points almost perfectly, has 6.23, more than five times worse. The error climbs steadily with degree in between. The polynomial has almost no bias on the fitting data but enormous variance; the line accepts a little rigidity and wins overall.

The reason is a fixed budget: data are finite and every parameter takes a share of them, so you cannot drive both bias and variance to zero at once, and that is why [[Model Selection|model selection]] exists. Some tools trade on purpose, adding a little bias to cut a lot of variance; this is called *[[Shrinkage|shrinkage]]* or *[[Regularization|regularization]]*, pulling estimates toward a central value. Priors in Bayesian models, ridge regression, and the [[Partial Pooling]] of [[Mixed Effects Model|mixed models]] all work this way. Tredennick and colleagues' ridge regression, a deliberately biased fit, beat an unpenalised one at [[Forecast|forecasting]] butterfly population growth for exactly this reason ([[Tredennick et al. 2021]]). So unbiased is not always best: a slightly biased but much more precise estimate can land closer to the truth.

![[Parsimony.png|700]]
*What to look at:* the left panel is the bias end, the right panel the variance end.

```r
set.seed(3)
x <- sort(runif(15, 0, 10)); y <- 2 + 0.5 * x + rnorm(15, 0, 1)
set.seed(30)
x_new <- runif(200, min(x), max(x)); y_new <- 2 + 0.5 * x_new + rnorm(200, 0, 1)
mse <- function(d) mean((y_new - predict(lm(y ~ poly(x, d)), data.frame(x = x_new)))^2)
round(sapply(1:10, mse), 2)    # error on new data for curves of degree 1 to 10
```

## Connections
- **Builds on:** [[Bias]], [[Precision]], [[Overfitting]], [[Underfitting]], [[Equation of a Line]], [[Forecast]]
- **Leads to:** [[Partial Pooling]], [[AIC]], [[Prior Distribution|Prior]], [[Model Selection]], [[Shrinkage]], [[Regularization]], [[Mixed Effects Model]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]]; the principle behind it: [[Parsimony]]
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
