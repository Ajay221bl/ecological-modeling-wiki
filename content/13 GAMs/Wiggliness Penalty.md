---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "The wiggliness penalty measures how much a curve bends, usually as the integral of its squared second derivative, and is added to the fitting criterion to discourage needless bends."
aliases:
  - "Penalty matrix"
  - "Roughness penalty"
  - "Smoothing penalty"
  - "Integrated squared second derivative"
status: seedling
---

# Wiggliness Penalty

The **wiggliness penalty** measures how much a curve bends, usually as the integral of its squared second derivative, J(f) = ∫ f″(x)² dx, the total squared curvature ([[Derivative]], [[Integral]]). A [[Equation of a Line|straight line]] has J = 0, and every bend adds to J. It is added to the fitting criterion to discourage needless bends ([[Penalized Regression Spline]]).

For a [[Basis Function|basis expansion]] J = βᵀSβ, where S is a fixed penalty matrix. The null space is the set of functions with zero penalty, straight lines for m = 2, and these are never shrunk unless a double penalty is used ([[Double Penalty Selection]]). It is the same idea as ridge regression with a structured penalty ([[Regularization]]). In the code below the straight line 2x has J = 0, while sin(4x) over 0 to 1 has J = 112.2.

The penalty matrix is shown in [[Pedersen et al. 2019]], and its weight is the [[Smoothing Parameter]]. The penalty is not applied to the data; it is applied to the curve's shape.

```r
f1 <- function(x) 2 * x; f2 <- function(x) sin(4 * x); d2 <- function(f, x, h = 1e-3) (f(x + h) - 2 * f(x) + f(x - h)) / h^2
round(c(line = integrate(function(x) d2(f1, x)^2, 0, 1)$value, wavy = integrate(function(x) d2(f2, x)^2, 0, 1)$value), 2)
```

## Connections
- **Builds on:** [[Derivative]], [[Integral]], [[Penalized Regression Spline]], [[Equation of a Line]], [[Basis Function]]
- **Leads to:** [[Smoothing Parameter]], [[Double Penalty Selection]], [[Regularization]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

What does the usual GAM wiggliness penalty measure?
??
The integrated squared second derivative of the smooth (total curvature).
++++
