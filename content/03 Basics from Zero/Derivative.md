---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "Instantaneous rate of change"
  - "Slope of a curve"
  - "dy/dx"
status: seedling
---

# Derivative

**In one line:** the derivative of a curve at a point is its slope right there, the rate of change at that instant.

> [!info] Before this, it helps to know
> [[Rate of Change]] (average change per unit) · [[Slope]] (steepness of a line)

## The everyday picture
A speedometer. Your average speed for a trip is distance over time. The speedometer shows how fast you are going right now. The derivative is the speedometer reading of any curve.

*Where the picture stops working:* a speedometer measures directly. A derivative is found by imagining ever shorter stretches of the curve.

## Words you'll need
- **Tangent:** the straight line that just touches a curve at one point and has the same steepness there.
- **dy/dx:** read "dee y dee x", the derivative of y with respect to x.
- **f′(x):** read "f prime of x", another way to write it.

## A tiny example
y = x². What is the slope at x = 3?
- From 3 to 4: (16 − 9) / 1 = 7.
- From 3 to 3.1: (9.61 − 9) / 0.1 = 6.1.
- From 3 to 3.01: (9.0601 − 9) / 0.01 = 6.01.
- The numbers close in on **6**. The rule is slope = 2x, and 2 × 3 = 6.

## Start from zero
1. **Average slope needs two points.**
2. **Slide the second point toward the first.** The average slope settles on one value.
3. **That limiting value is the derivative.** It is the slope of the tangent line.
4. **Rules save the work.** For x^n the derivative is n·x^(n−1). For e^x it is e^x. For log(x) it is 1/x.
5. **Sign tells direction.** Positive: rising. Negative: falling. Zero: flat, a peak or a trough ([[Finding a Maximum with Calculus]]).
6. **You rarely do this by hand.** *Why:* R's optimizers compute slopes numerically, but they work on this idea.

## See it
![[Derivative as slope.png|700]]
*What to look at:* the secant lines swing toward the tangent as the second point slides in.

## Why it is this way
Curves have a different steepness everywhere, and "how fast is it changing here?" is the question behind growth rates, sensitivities and, above all, optimization. Fitting a model means finding the top of a likelihood hill, and the top is where the slope is zero. Derivatives are how the computer feels its way uphill.

## In R
```r
f <- function(x) x^2
h <- c(1, 0.1, 0.01, 0.0001)
(f(3 + h) - f(3)) / h            # 7 6.1 6.01 6.0001: closing in on 6
D(expression(x^2), "x")          # 2 * x: R can differentiate symbolically
D(expression(log(x)), "x")       # 1/x
```
Shrinking the step h reveals the derivative, and `D()` gives the rule.

## In the course
Hobbs and Hooten use derivatives to find maximum likelihood estimates ([[Hobbs and Hooten 2015 Ch4]]). Hamiltonian Monte Carlo uses the slope of the log posterior to steer ([[Hamiltonian Monte Carlo]]). Derivatives of GAM smooths show where a trend is changing ([[Derivatives of a Smooth]]).

## Common confusions
- **"A derivative is one number."** It is a new function giving the slope at every x.
- **"Zero derivative means a maximum."** It could be a minimum or a flat shoulder.

## Explain it back
- Use the speedometer to explain average versus instantaneous rate.
- What is the slope of y = x² at x = 5?

*Pass test:* you can explain a derivative as the limit of average slopes and say what a zero derivative signals.

## Connections
- **Builds on:** [[Rate of Change]], [[Slope]]
- **Leads to:** [[Finding a Maximum with Calculus]], [[Integral]], [[Numerical Optimization]]
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
