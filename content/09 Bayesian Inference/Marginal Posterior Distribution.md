---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "A marginal posterior distribution is the posterior of one parameter on its own, with the uncertainty in all other parameters averaged over."
aliases:
  - "Marginal posterior"
  - "Marginal posterior density"
status: seedling
---

# Marginal Posterior Distribution

Seen from the side, a mountain range's silhouette against the sky collapses its width into a single profile. A **marginal posterior distribution** is the posterior of one parameter on its own, with the uncertainty in all other parameters averaged over ([[Joint Posterior Distribution]], [[Marginal Probability]]). Mathematically you integrate everything else out of the joint posterior; with MCMC draws it is trivial, since you take that parameter's column and ignore the others ([[Posterior Draws]]).

A [[Histogram|histogram]] or density of that column is the marginal posterior, and the summaries reported in tables, the mean, [[Standard Deviation|standard deviation]] and [[Credible Interval]], describe marginals ([[Posterior Summary]]). In the code below, the slope column of a regression's draws has mean 0.58 and 95% interval 0.48 to 0.68.

The marginal posterior does not fix the other parameters at their best values; it averages over them, so their uncertainty is already included ([[Hobbs and Hooten 2015 Ch8]]).

```r
set.seed(6); x <- runif(40, 10, 20); y <- 2 + 0.5 * x + rnorm(40); m <- lm(y ~ x)
draws <- MASS::mvrnorm(4000, coef(m), vcov(m)); slope <- draws[, "x"]             # one column = marginal posterior of the slope
c(mean = mean(slope), quantile(slope, c(0.025, 0.975)))
```

## Connections
- **Builds on:** [[Joint Posterior Distribution]], [[Marginal Probability]], [[Histogram]], [[Standard Deviation]]
- **Leads to:** [[Credible Interval]], [[Posterior Summary]], [[Posterior Draws]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is a marginal posterior distribution?
??
The posterior of a single parameter, averaged over the uncertainty in all the others.
++++

How is a marginal posterior obtained from MCMC output?
??
Take the column of draws for that parameter.
++++
