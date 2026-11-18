---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "The derivative of a curve at a point is its slope right there, the rate of change at that instant."
aliases:
  - "Instantaneous rate of change"
  - "Slope of a curve"
  - "dy/dx"
status: seedling
---

# Derivative

Your average speed for a trip is distance divided by time, but the speedometer shows how fast you are going right now. The **derivative** is the speedometer reading of any curve: its slope at a single point, the instantaneous rate of change. An average [[Rate of Change]] needs two points; the derivative is what that average settles on as the second point slides in toward the first. Geometrically it is the slope of the *tangent*, the [[Equation of a Line|straight line]] that just touches the curve at that point with the same steepness. It is written dy/dx (read "dee y dee x") or f′(x) (read "f prime of x").

Work it out for y = x² at x = 3. From 3 to 4 the average slope is (16 − 9) / 1 = 7. From 3 to 3.1 it is (9.61 − 9) / 0.1 = 6.1. From 3 to 3.01 it is (9.0601 − 9) / 0.01 = 6.01. The numbers close in on 6. Rules save this work: the derivative of xⁿ is n·xⁿ⁻¹, so for x² it is 2x, and 2 × 3 = 6. Other handy rules: the derivative of eˣ is eˣ, and of log(x) is 1/x. Note that a derivative is not one number but a new function, giving the slope at every x. Its sign tells direction: positive means rising, negative falling, and zero means flat, which happens at a peak, at a trough, or on a level shoulder, so a zero derivative alone does not prove a maximum.

Why does a modeler care? Because "how fast is it changing here?" is the question behind growth rates and sensitivities, and above all behind fitting. [[Parameter Estimation|Fitting a model]] means finding the top of a likelihood hill, and the top is where the slope is zero ([[Finding a Maximum with Calculus]]). You will rarely differentiate by hand, since R's optimizers estimate slopes numerically ([[Numerical Optimization]]), but that is the idea they run on. Hobbs and Hooten use derivatives to find [[Maximum Likelihood Estimation|maximum likelihood]] estimates ([[Hobbs and Hooten 2015 Ch4]]), Hamiltonian Monte Carlo uses the slope of the log posterior to steer ([[Hamiltonian Monte Carlo]]), and derivatives of a GAM smooth show where a trend is changing ([[Derivatives of a Smooth]]). The reverse operation, adding up a curve, is the [[Integral]]. A line's [[Slope]] is the special case where the derivative is the same everywhere.

![[Derivative as slope.png|700]]
*What to look at:* the secant lines swing toward the tangent as the second point slides in.

```r
f <- function(x) x^2
h <- c(1, 0.1, 0.01, 0.0001)
(f(3 + h) - f(3)) / h            # 7 6.1 6.01 6.0001: closing in on 6
D(expression(x^2), "x")          # 2 * x: R can differentiate symbolically
D(expression(log(x)), "x")       # 1/x
```
Shrinking the step h reveals the derivative, and `D()` gives the rule.

## Connections
- **Builds on:** [[Rate of Change]], [[Slope]], [[Equation of a Line]]
- **Leads to:** [[Finding a Maximum with Calculus]], [[Integral]], [[Numerical Optimization]], [[Parameter Estimation]], [[Maximum Likelihood Estimation]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]

## Flashcards

What is a derivative?
??
The slope of a curve at a single point, the instantaneous rate of change.
![[Derivative as slope.png]]
++++

What does a derivative of zero tell you?
??
The curve is flat there: a maximum, a minimum or a level shoulder.
++++

What is the derivative of x²?
??
2x.
++++
