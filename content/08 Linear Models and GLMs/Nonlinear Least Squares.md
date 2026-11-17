---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "nls()"
  - "Nonlinear regression"
status: seedling
---

# Nonlinear Least Squares

**In one line:** nonlinear least squares fits a curve whose parameters do not enter by simple adding, by searching numerically for the parameter values that minimise the sum of squared residuals.

> [!info] Before this, it helps to know
> [[Least Squares]] (the criterion) · [[Nonlinear Function]] (the curve) · [[Numerical Optimization]] (the search)

## The everyday picture
Bending a flexible ruler to fit a set of pegs. A straight ruler can be placed by formula. A bendy one with a specific mathematical shape has to be adjusted by trial until it sits as close as possible.

## Start from zero
1. **Choose a function** with biological meaning: y = a·x/(b + x).
2. **The parameters aren't multiplied onto fixed terms,** so `lm()` can't fit it.
3. **Supply starting values.**
4. **`nls(y ~ a * x / (b + x), start = list(a = , b = ))`** searches for the least-squares values.
5. **Output looks like `lm`:** estimates, SEs, t-tests.
6. **Typical failure:** "singular gradient", from poor starting values or parameters the data can't separate.
7. **Assumes normal errors with constant variance.** For other distributions write the likelihood yourself or fit the curve in a Bayesian model.

## In R
```r
set.seed(13); x <- runif(60, 0, 30); y <- 8 * x / (2 + x) + rnorm(60, 0, 0.5)
m <- nls(y ~ a * x / (b + x), start = list(a = 5, b = 1)); round(summary(m)$coefficients, 3)
predict(m, data.frame(x = c(2, 20)))
```

## In the course
Supports the deterministic functions of [[Hobbs and Hooten 2015 Ch2]].

## Common confusions
- **"A polynomial needs nls."** A polynomial is linear in its coefficients. `lm` fits it.

## Explain it back
- Why can't `lm()` fit a Michaelis-Menten curve directly?

*Pass test:* you can fit a saturating curve with `nls()`.

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
