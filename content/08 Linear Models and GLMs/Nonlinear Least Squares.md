---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Nonlinear least squares fits a curve whose parameters do not enter by simple adding, by searching numerically for the parameter values that minimise the sum of squared residuals."
aliases:
  - "nls()"
  - "Nonlinear regression"
status: seedling
---

# Nonlinear Least Squares

A straight ruler can be placed by formula, but a bendy one with a specific mathematical shape has to be adjusted by trial until it sits as close as possible to the pegs. **Nonlinear least squares** fits a curve whose parameters do not enter by simple adding, by searching numerically for the parameter values that minimise the sum of squared residuals ([[Least Squares]], [[Numerical Optimization]]). Choose a function with biological meaning, such as y = a·x/(b + x) ([[Nonlinear Function]]). Its parameters are not multiplied onto fixed terms, so `lm()` cannot fit it. Instead you supply starting values and call `nls(y ~ a * x / (b + x), start = list(a = , b = ))`.

In the code below, data simulated from a [[Michaelis-Menten Function]] with a = 8 and b = 2 are fitted from starting values of 5 and 1. The output looks like `lm()`, with estimates, standard errors and t-tests, recovers values close to 8 and 2, and `predict()` works as usual.

The typical failure is "singular gradient", from poor starting values or parameters the data cannot separate. It assumes normal errors with constant variance; for other distributions, write the likelihood yourself or fit the curve in a Bayesian model. It is how the [[Deterministic Functions in Ecology]] of Hobbs and Hooten's Chapter 2 are fitted by least squares ([[Hobbs and Hooten 2015 Ch2]]). A polynomial does not need `nls()`: it is linear in its coefficients, so `lm()` fits it.

```r
set.seed(13); x <- runif(60, 0, 30); y <- 8 * x / (2 + x) + rnorm(60, 0, 0.5)
m <- nls(y ~ a * x / (b + x), start = list(a = 5, b = 1)); round(summary(m)$coefficients, 3)
predict(m, data.frame(x = c(2, 20)))
```

## Connections
- **Builds on:** [[Least Squares]], [[Nonlinear Function]]
- **Leads to:** [[Michaelis-Menten Function]], [[Numerical Optimization]], [[Deterministic Functions in Ecology]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

When is nonlinear least squares needed?
??
When the model is not linear in its parameters, as in y = a·x/(b + x).
++++

What must you supply to nls() that lm() doesn't need?
??
Starting values for the parameters.
++++
