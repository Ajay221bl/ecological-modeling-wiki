---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "Penalty matrix"
  - "Roughness penalty"
  - "Smoothing penalty"
  - "Integrated squared second derivative"
status: seedling
---

# Wiggliness Penalty

**In one line:** the wiggliness penalty measures how much a curve bends, usually as the integral of its squared second derivative, and is added to the fitting criterion to discourage needless bends.

> [!info] Before this, it helps to know
> [[Derivative]] · [[Integral]] · [[Penalized Regression Spline]]

## Start from zero
1. **J(f) = ∫ f″(x)² dx:** total squared curvature.
2. **A straight line has J = 0.** Every bend adds to J.
3. **For a basis expansion J = βᵀSβ,** where S is a fixed penalty matrix.
4. **The null space** is the set of functions with zero penalty (straight lines for m = 2). They are never shrunk unless a double penalty is used.
5. **Same idea as ridge regression** with a structured penalty.

## In R
```r
f1 <- function(x) 2 * x; f2 <- function(x) sin(4 * x); d2 <- function(f, x, h = 1e-3) (f(x + h) - 2 * f(x) + f(x - h)) / h^2
round(c(line = integrate(function(x) d2(f1, x)^2, 0, 1)$value, wavy = integrate(function(x) d2(f2, x)^2, 0, 1)$value), 2)
```

## In the course
[[Pedersen et al. 2019]] (penalty matrix).

## Common confusions
- **"The penalty is applied to the data."** It is applied to the curve's shape.

## Explain it back
- Which functions have zero penalty when m = 2?

*Pass test:* you can say what the penalty measures.

## Connections
- **Builds on:** [[Derivative]], [[Integral]], [[Penalized Regression Spline]]
- **Leads to:** [[Smoothing Parameter]], [[Double Penalty Selection]], [[Regularization]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

What does the usual GAM wiggliness penalty measure?
??
The integrated squared second derivative of the smooth (total curvature).
++++
