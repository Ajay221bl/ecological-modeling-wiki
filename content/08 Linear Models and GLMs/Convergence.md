---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Convergence means an iterative algorithm has settled on a stable answer and further steps would no longer change it."
aliases:
  - "Converged"
  - "Non-convergence"
  - "Convergence of an algorithm"
status: seedling
---

# Convergence

A ball rolling in a bowl swings widely at first and eventually sits still at the bottom; if the bowl is nearly flat, or tilted off the table, it never settles. **Convergence** means an iterative algorithm has settled on a stable answer and further steps would no longer change it. Iterative methods improve an answer step by step ([[For Loop]]) and stop when the change per step is below a tolerance; that is convergence. If they reach a maximum number of steps without settling, they have failed to converge. In optimisation, converged means a possibly local optimum was found ([[Numerical Optimization]]). In MCMC the word has a related meaning: the chains have reached, and are sampling from, the posterior distribution ([[R-hat]]).

In the code below, a logistic regression on ordinary data converges in a few iterations. The same model on perfectly separated data, where y is 1 exactly when x > 0, has no finite answer: the slope runs off toward infinity, and `glm()` stops with a huge slope ([[Complete Separation]]).

Estimates from an unconverged fit are simply where the algorithm happened to stop, so do not interpret them. The usual causes are too little data for the model's complexity, predictors on wildly different scales, parameters at a boundary such as a variance of zero ([[Singular Fit]]), collinearity, and bad starting values. The usual fixes are to rescale predictors, simplify the model, change optimiser, increase iterations or supply starting values ([[Convergence Warnings]], [[Harrison et al. 2018]], [[Hobbs and Hooten 2015 Ch7]]). No warning does not mean the model is right: convergence says only that the algorithm finished, not that the model suits the data.

```r
set.seed(4); x <- rnorm(30); y <- rbinom(30, 1, plogis(x))
m <- glm(y ~ x, family = binomial); c(converged = m$converged, iterations = m$iter)
y2 <- as.numeric(x > 0); m2 <- suppressWarnings(glm(y2 ~ x, family = binomial)); c(converged = m2$converged, iterations = m2$iter, slope = coef(m2)[2])   # perfectly separated data: no finite answer
```

## Connections
- **Builds on:** [[Numerical Optimization]]
- **Leads to:** [[Convergence Warnings]], [[Complete Separation]], [[R-hat]], [[Singular Fit]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

What does convergence mean for a fitting algorithm?
??
The iterations have stabilised so that further steps no longer change the estimates beyond a tolerance.
++++

What should you do with estimates from a model that failed to converge?
??
Not interpret them. Diagnose and refit.
++++
