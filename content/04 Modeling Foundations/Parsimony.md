---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
description: "Parsimony means choosing the simplest model that still captures the important pattern. Too simple and it misses real patterns (underfitting); too complex and it chases random noise (overfitting)."
aliases:
  - "Principle of parsimony"
  - "Occam's razor"
status: seedling
---

# Parsimony

Three students prepare for an exam. The first memorises last year's paper word for word and is lost when the questions change. The second learns one rule of thumb, "the answer is usually C", and is never badly surprised but usually wrong. The third learns the main ideas and ignores the quirks of any one paper, and does best. **Parsimony** is the third student's strategy for models: choose the simplest model that still captures the important pattern. Too complex, and the model chases random noise ([[Overfitting]]); too simple, and it misses real structure and gives systematically wrong answers ([[Underfitting]]). Powell and Gale open their book with the question "How complex should I make my model?", and the answer depends on its purpose ([[Powell and Gale 2015 Ch1]]).

The simulation used across these notes shows it. Fifteen points come from a [[Equation of a Line|straight line]] plus noise, so the truth is simple. The straight line (3 parameters: intercept, slope and residual SD) gets R² = 0.57; a wiggly degree-10 polynomial (12 parameters) gets 0.98 and looks far better. On 200 new points from the same process, the mean squared error is 1.17 for the line and 6.23 for the polynomial, five times worse. Statistics turns parsimony into numbers with scores that reward fit and charge for each parameter: [[AIC]] adds a penalty of 2 per parameter, and AICc adds a small-sample correction ([[AICc]]). Here plain AIC is fooled (about 46 for the line against 15 for the polynomial), because with only 15 points its approximation breaks down, but AICc is not: 48.6 for the line against 171.1 for the polynomial. [[Cross-validation]] reaches the same verdict by testing on held-back data ([[Leave-one-out Cross-validation]], [[Why AIC rewards fit but punishes complexity]]).

Why it works: data are limited and every parameter takes a share of them, so with typical ecological sample sizes each unnecessary parameter makes all the others shakier. That is the [[Bias-Variance Trade-off]]: adding parameters cuts bias but increases variance. Anderson and Burnham tie parsimony to [[Information Theory|information theory]], the aim being the model that loses the least information about the real process, not the one that fits these particular data best ([[Anderson and Burnham 2002]]). Three confusions to avoid. Simplest is not always best: as simple as possible, but no simpler, since leaving out an important [[Predictor Variable|predictor]] biases everything else. High R² does not mean a good model, because it can only rise as predictors are added ([[R-squared]]). And parsimony means no *unnecessary* terms for the question, not few terms, so a prediction model and an explanation model can need different amounts ([[Model]], [[Statistical Model]]). The same idea returns in choosing [[Random Effect|random effects]] ([[How Many Levels for a Random Effect]]) and in priors and [[Regularization|ridge regression]] that pull estimates toward zero ([[Tredennick et al. 2021]]).

![[Parsimony.png|700]]
*What to look at:* the right panel passes close to every point, yet it would predict a new point terribly.

```r
set.seed(3)
x <- sort(runif(15, 0, 10)); y <- 2 + 0.5 * x + rnorm(15, 0, 1)   # truth: a straight line
simple  <- lm(y ~ x)
complex <- lm(y ~ poly(x, 10))
c(summary(simple)$r.squared, summary(complex)$r.squared)  # 0.57 vs 0.98: complex "fits better"

# The real test: new data from the same process
set.seed(30)
x_new <- runif(200, min(x), max(x)); y_new <- 2 + 0.5 * x_new + rnorm(200, 0, 1)
mse <- function(m) mean((y_new - predict(m, data.frame(x = x_new)))^2)
c(simple = mse(simple), complex = mse(complex))           # 1.17 vs 6.23: complex predicts far worse

# AICc: AIC with a small-sample correction, 2k(k+1)/(n-k-1)
aicc <- function(m) { k <- length(coef(m)) + 1; n <- nobs(m); AIC(m) + 2 * k * (k + 1) / (n - k - 1) }
c(simple = aicc(simple), complex = aicc(complex))         # 48.6 vs 171.1: AICc picks the simple model
```

## Connections
- **Builds on:** [[Model]], [[Statistical Model]], [[Equation of a Line]], [[Predictor Variable]]
- **Leads to:** [[AIC]], [[Leave-one-out Cross-validation]], [[Uninformative Parameters]], [[Why AIC rewards fit but punishes complexity]], [[Cross-validation]], [[Information Theory]], [[Random Effect]], [[Regularization]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]]
- **Go deeper:** [[Anderson and Burnham 2002]], [[Tredennick et al. 2021]]

## Flashcards

What are overfitting and underfitting?
??
Overfitting: a too-complex model chases noise and predicts new data badly. Underfitting: a too-simple model misses real structure and is biased.
![[Parsimony.png]]
++++

Why does adding parameters always improve fit to the data you have?
??
Extra flexibility can absorb random noise as well as real patterns, so in-sample fit can only stay the same or get better.
![[Parsimony.png]]
++++

What is the bias-variance trade-off?
??
More parameters reduce bias but increase variance (each is estimated less precisely); fewer parameters do the reverse.
++++
