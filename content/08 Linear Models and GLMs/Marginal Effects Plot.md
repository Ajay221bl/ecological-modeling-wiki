---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A marginal effects plot shows how a model's predicted response changes as one predictor varies, with every other predictor held at a fixed value such as its mean, and with an interval around the curve."
aliases:
  - "Marginal effects plot"
  - "Partial effects plot"
  - "Effects plot"
  - "Predicted effects plot"
  - "Conditional effects plot"
  - "Marginal effect"
status: seedling
---

# Marginal Effects Plot

To see what the oven temperature alone does to a cake, you bake several cakes changing only the temperature and keeping flour, sugar and baking time fixed. A **marginal effects plot** does that with a fitted model. It makes a grid of values for one [[Predictor Variable|predictor]], holds every other predictor at a fixed value (usually its mean, or a [[Reference Level|reference level]] for a factor), asks the model for the predicted response at each grid point, and draws the curve with its confidence or credible band ([[predict()]], [[Plotting Model Predictions with Ribbons]]). It is the clearest way to show a reader what a [[Regression Coefficient|coefficient]] means in the units of the response.

For a GLM the curve and the band must be built on the [[Link Scale|link scale]] and transformed, so they bend and stay inside the possible range: a probability band must never go below 0 ([[Predictions on Link vs Response Scale]]). For a Bayesian model you compute the prediction for every posterior draw and take quantiles, which brms does with `conditional_effects()` ([[conditional_effects()]], [[Credible Interval]]). Holding other predictors at their means is a choice that should be stated, because with interactions or a nonlinear link the curve changes with the values you hold the others at.

Homework 2 asks for one with a [[Confidence Interval|confidence interval]], and Homeworks 3 and 6 ask for them from the top Bayesian model, one panel per important predictor, combined with cowplot ([[Multi-panel Figures]]). "Marginal" here means "varying one predictor at the margin", not averaging over the others; some packages use "marginal effect" for the average slope instead, so say which you mean ([[Conditional vs Marginal Predictions]]).

```r
set.seed(3); d <- data.frame(area = runif(80, 1, 50), rain = runif(80, 500, 1000))
d$y <- rbinom(80, 1, plogis(-2 + 0.08 * d$area + 0.001 * d$rain))
m <- glm(y ~ area + rain, family = binomial, data = d)
nd <- data.frame(area = seq(1, 50, length.out = 50), rain = mean(d$rain))    # vary area, hold rain at its mean
p <- predict(m, nd, type = "link", se.fit = TRUE)
nd$fit <- plogis(p$fit); nd$lo <- plogis(p$fit - 1.96 * p$se.fit); nd$hi <- plogis(p$fit + 1.96 * p$se.fit)
plot(fit ~ area, nd, type = "l", ylim = c(0, 1), ylab = "P(present)"); lines(lo ~ area, nd, lty = 2); lines(hi ~ area, nd, lty = 2)
round(range(c(nd$lo, nd$hi)), 3)                                              # stays inside 0 to 1
```

## Connections
- **Builds on:** [[predict()]], [[Plotting Model Predictions with Ribbons]], [[Predictor Variable]], [[Reference Level]], [[Regression Coefficient]], [[Link Scale]], [[Confidence Interval]]
- **Leads to:** [[conditional_effects()]], [[Multi-panel Figures]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]], molecular note [[Homework 3 - Woodland Birds and Landscape Scale]], [[Homework 6 - Penguin Body Mass in brms]]

## Flashcards

What does a marginal effects plot hold fixed?
??
Every predictor except the one on the x axis, usually at its mean or reference level.
++++

Why build a GLM's effects band on the link scale?
??
So it transforms into a band that stays inside the possible range, for example 0 to 1 for a probability.
++++

Why must you state the values you held other predictors at?
??
With interactions or a nonlinear link, the curve changes with those values.
++++
