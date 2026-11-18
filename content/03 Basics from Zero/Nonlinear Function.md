---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "A nonlinear function is any rule where equal steps in x do not give equal steps in y, so its graph is a curve."
aliases:
  - "Curved relationship"
  - "Nonlinear relationship"
status: seedling
---

# Nonlinear Function

Compare filling a bucket with spreading a rumour. A tap adds the same litre every second, so the amount of water against time is a [[Equation of a Line|straight line]]. A rumour spreads faster the more people already know it, then slows when nearly everyone has heard, so its graph is a curve. A **nonlinear function** is any rule from input to output ([[Functions in Maths]]) where equal steps in x do *not* give equal steps in y. In a [[Linear Function]] the slope, the change in y per unit of x, is the same everywhere; in a nonlinear one the slope changes along the way. Most living things behave like the rumour, because biology is full of feedback (growth feeds on itself), limits (resources run out) and saturation (an enzyme or a predator can only work so fast).

You can test for nonlinearity straight from a table. A population doubles each year from 10: 10, 20, 40, 80. From year 0 to 1 it adds 10, from year 2 to 3 it adds 40. Equal steps in time, unequal steps in animals, so it is nonlinear. Now take natural logs: 2.30, 3.00, 3.69, 4.38. Each step adds 0.69, so on the log scale it is a straight line, with slope 0.693 = log(2), one doubling per year. This shows the first of three ways to handle a curve: transform a variable until the relationship straightens ([[Log Transformation]]). The second is to add powers of x, as in y = a + bx + cx² ([[Polynomial]], [[Quadratic Term]]). The third is to fit a genuinely curved function, such as the saturating y = ax / (b + x) ([[Michaelis-Menten Function]]), or let the data draw the curve with a smoother ([[Generalized Additive Model]]).

The second option hides a source of confusion. y = a + bx + cx² is curved in x, yet [[lm()]] fits it, and it is still called a "[[Linear Model|linear model]]". That is because "linear model" means linear *in the parameters*: the model adds up each parameter times a known [[Vector|column of numbers]], and x² is just another column. So a linear model can draw curves, and a curve does not automatically need special software. A straight line says "more always gives the same extra, forever", and nature rarely agrees: there are ceilings, floors and optimum points. Recognising those shapes is the first step in picking a sensible deterministic function ([[Deterministic Functions in Ecology]], [[Hobbs and Hooten 2015 Ch2]]), and in [[Generalized Linear Model|GLMs]] a [[Link Function]] is what lets a [[Linear Predictor|linear predictor]] produce a curved response.

![[Function shapes.png|700]]
*What to look at:* only the first panel has the same slope everywhere.

```r
year <- 0:3; N <- c(10, 20, 40, 80)
diff(N)            # 10 20 40: unequal steps, nonlinear
diff(log(N))       # 0.69 0.69 0.69: linear on the log scale
coef(lm(log(N) ~ year))   # slope 0.693 = log(2), a doubling per year
```
A log turned a curve into a line, so a linear model can estimate the growth rate.

## Connections
- **Builds on:** [[Functions in Maths]], [[Linear Function]], [[Equation of a Line]], [[Vector]]
- **Leads to:** [[Polynomial]], [[Deterministic Functions in Ecology]], [[Link Function]], [[lm()]], [[Linear Model]], [[Generalized Linear Model]], [[Linear Predictor]]
- **See also:** [[MOC 15 - GAMs|MOC - GAMs]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]], molecular note [[Linear vs Nonlinear Function]]

## Flashcards

What makes a function nonlinear?
??
Equal steps in x give unequal steps in y, so the graph is curved.
![[Function shapes.png]]
++++

What does "linear model" really require?
??
That the model is linear in its parameters, not that the fitted shape is a straight line in x.
++++

Name three ways to handle a curved relationship.
??
Transform a variable, add polynomial terms, or use a nonlinear function or smoother.
++++
