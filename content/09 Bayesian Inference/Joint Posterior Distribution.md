---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "The joint posterior distribution describes the plausibility of all the model's parameters together, including how uncertainty in one is tied to uncertainty in another."
aliases:
  - "Joint posterior"
  - "Full posterior"
status: seedling
---

# Joint Posterior Distribution

A weather forecast for temperature and rain together might find "hot and dry" and "cool and wet" both plausible but "hot and wet" not; separate forecasts would lose that link. The **joint posterior distribution** is the posterior over all a model's parameters at once, such as P(β₀, β₁, σ | y), including how uncertainty in one is tied to uncertainty in another ([[Posterior Distribution]], [[Joint Probability]]). Parameters are often correlated in it ([[Correlation]]): with an uncentered predictor, a steeper slope goes with a lower intercept.

MCMC output represents it as a table with one row per draw and one column per parameter, and each row is one jointly plausible set of values ([[Posterior Draws]]). So always compute with whole rows: a prediction uses the intercept and slope from the same draw ([[Derived Quantities]]). In the code below, the intercept and slope of a regression with x between 10 and 20 have a posterior correlation of −0.98; a prediction at x = 15 using matched rows has a standard deviation of 0.17, while shuffling the slopes between rows inflates it to 1.21, about seven times too wide.

Pair plots of draws show the joint shape, and strong posterior correlations slow samplers, which [[Centering]] predictors helps ([[Hobbs and Hooten 2015 Ch6]]). Each parameter's own column can be used on its own only for statements about that parameter alone; that column is the [[Marginal Posterior Distribution]].

```r
set.seed(5); x <- runif(40, 10, 20); y <- 2 + 0.5 * x + rnorm(40); m <- lm(y ~ x)
draws <- MASS::mvrnorm(4000, coef(m), vcov(m))                      # approximate joint posterior of intercept and slope
cor(draws)[1, 2]                                                     # strongly negative
pred_joint <- draws[, 1] + draws[, 2] * 15; pred_mixed <- draws[, 1] + sample(draws[, 2]) * 15
c(sd_joint = sd(pred_joint), sd_mixed_rows = sd(pred_mixed))        # breaking the pairing inflates the uncertainty many-fold
```

## Connections
- **Builds on:** [[Posterior Distribution]], [[Joint Probability]]
- **Leads to:** [[Marginal Posterior Distribution]], [[Posterior Draws]], [[Derived Quantities]], [[Centering]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is the joint posterior?
??
The posterior distribution of all parameters together, including their dependence on each other.
++++

What does one row of MCMC output represent?
??
One draw from the joint posterior: a jointly plausible set of values for all parameters.
++++
