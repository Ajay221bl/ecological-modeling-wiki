---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - gam
aliases: []
status: seedling
---

# Polynomial vs Spline

> [!summary] In plain words
> a polynomial bends the whole curve at once with a few global terms, while a spline bends locally between knots, so splines follow local features without wild swings elsewhere.

## The question
Why not just add x² and x³ instead of using a smooth?

## Built from
- [[Polynomial|Polynomial Regression]] and [[Spline]].
- [[Penalized Regression Spline]]: the modern form.
- [[Extrapolation]]: where polynomials misbehave.

## The reasoning, step by step
1. **A polynomial term affects the curve everywhere.** Fitting a bump on the left changes the right.
2. **High-degree polynomials oscillate,** especially near the edges (Runge's phenomenon).
3. **Splines join low-degree pieces at knots,** so a bump on the left stays on the left.
4. **Penalised splines choose their own complexity;** polynomials need degree chosen by hand.
5. **Polynomials are fine for gentle curvature** and give interpretable terms (an optimum from a quadratic).

| | Polynomial | Spline |
|---|---|---|
| Bends | Globally | Locally |
| Complexity | Degree, by hand | k and penalty, data-chosen |
| Edges | Often wild | Better behaved |
| Interpretable terms | Yes (optimum of a quadratic) | Curve only |

**A worked example in numbers.** in the Spline note's example (sine-shaped data), a cubic polynomial reached R² = 0.23 and a B-spline with 6 df reached 0.84.

## So in practice
Use a quadratic when a single optimum is the hypothesis. Use a smooth when the shape is unknown.

## What would go wrong otherwise
Fitting a 6th-degree polynomial and reporting its coefficients.

## Explain it back
- Why do polynomials behave badly at the edges?

*Pass test:* you can explain the local-versus-global difference.

## Connections
- **Related:** [[GLM vs GAM]], [[Why penalize wiggliness]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

Why do splines handle local features better than polynomials?
??
Spline pieces bend locally between knots, while polynomial terms change the whole curve.
++++
