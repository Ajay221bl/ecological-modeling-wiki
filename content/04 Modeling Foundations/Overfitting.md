---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
description: "Overfitting is when a model is so flexible that it fits the random noise in your data as well as the real pattern, so it looks great on those data and predicts new data badly."
aliases:
  - "Overfit"
  - "Overfitted model"
status: seedling
---

# Overfitting

A student memorises last year's exam paper word for word, answers and all. On last year's paper she would score 100%; on this year's, with different questions, she is lost, because she learned the accidents of one paper instead of the subject. **Overfitting** is a model doing the same: it is so flexible that it fits the random *noise* in the data, the scatter that will not repeat, as well as the real pattern. Its *in-sample fit*, how well it matches the data it was fitted to, looks excellent, while its *out-of-sample error*, how badly it predicts new data, is large. Flexibility comes from parameters ([[Parameter]]): each one lets the model bend more, and more bending always fits the existing data at least as well.

A simulation makes this concrete ([[Parsimony]]). Fifteen points are generated from a [[Equation of a Line|straight line]] plus noise. A degree-10 *polynomial*, a curve built from powers of x up to x¹⁰ with 12 parameters, reaches R² = 0.98 on those 15 points, while the straight line reaches only 0.57. Then both predict 200 new points from the same process: the mean squared error is 6.23 for the polynomial and 1.17 for the line. The polynomial "memorised the paper"; its extra wiggles chased noise that is not in the new data.

A model's job is to capture what repeats, and fit to your own data rewards capturing everything, which is why in-sample fit alone cannot be trusted. High R² is not a sign of a good model, because R² can only rise as terms are added ([[R-squared]]). Nor does overfitting need a huge model: with 15 points, 12 parameters is plenty. You catch it with data the model has not seen, through [[Cross-validation|cross-validation]] ([[Leave-one-out Cross-validation]]), or with criteria such as [[AICc]] that charge a penalty for each parameter. Its opposite failure is [[Underfitting]], and the balance between them is the [[Bias-Variance Trade-off]] ([[Statistical Model]]).

![[Parsimony.png|700]]
*What to look at:* the right panel threads every point and would miss a new one badly.

```r
set.seed(3)
x <- sort(runif(15, 0, 10)); y <- 2 + 0.5 * x + rnorm(15, 0, 1)
wiggly <- lm(y ~ poly(x, 10))
summary(wiggly)$r.squared                       # 0.98 on its own data
set.seed(30)
x_new <- runif(200, min(x), max(x)); y_new <- 2 + 0.5 * x_new + rnorm(200, 0, 1)
mean((y_new - predict(wiggly, data.frame(x = x_new)))^2)   # 6.23 on new data
```

## Connections
- **Builds on:** [[Statistical Model]], [[Parameter]], [[Equation of a Line]]
- **Leads to:** [[Underfitting]], [[Bias-Variance Trade-off]], [[Leave-one-out Cross-validation]], [[AICc]], [[Cross-validation]]
- **See also:** [[Tredennick et al. 2021]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]]; the principle behind it: [[Parsimony]]
- **Go deeper:** [[Predictive Modeling]]

## Flashcards

What is overfitting?
??
A model so flexible it fits the noise in the data as well as the pattern, so it predicts new data badly.
![[Parsimony.png]]
++++

Why does adding parameters always improve fit to the data you have?
??
Extra flexibility can absorb random noise as well as real patterns, so in-sample fit can only stay the same or get better.
![[Parsimony.png]]
++++
