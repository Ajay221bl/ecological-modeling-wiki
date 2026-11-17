---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "Curved relationship"
  - "Nonlinear relationship"
status: seedling
---

# Nonlinear Function

**In one line:** a nonlinear function is any rule where equal steps in x do not give equal steps in y, so its graph is a curve.

> [!info] Before this, it helps to know
> [[Functions in Maths]] (a rule from input to output) · [[Linear Function]] (the straight-line case)

## The everyday picture
Filling a bucket versus growing a rumour. A tap adds the same litre every second: a straight line. A rumour spreads faster the more people know it, then slows when everyone has heard: a curve. Most living things behave like the rumour.

*Where the picture stops working:* a rumour has one shape. "Nonlinear" covers endless shapes: bending up, levelling off, peaking, stepping.

## Words you'll need
- **Linear:** a constant change in y per unit of x.
- **Curve:** a graph whose slope changes along its length.
- **Linear in the parameters:** a model that adds up parameters times known quantities, even if those quantities are curved in x.

## A tiny example
A population doubles each year from 10: 10, 20, 40, 80.
- Year 0 to 1 adds 10. Year 2 to 3 adds 40.
- Equal steps in time, unequal steps in animals. Nonlinear.
- Take logs: 2.30, 3.00, 3.69, 4.38. Each step adds 0.69. On the log scale it is a straight line.

## Start from zero
1. **Check the steps.** If each unit of x adds the same amount to y, it is linear. Otherwise it is not.
2. **Biology is full of limits and feedback.** *Why:* growth feeds on itself, resources run out, enzymes saturate. Each produces a curve.
3. **Some curves straighten with a transformation.** Exponential growth becomes linear after a log ([[Log Transformation]]).
4. **Some curves fit in a "linear model".** y = a + bx + cx² is curved in x but still a sum of parameters times things, so lm() can fit it ([[Quadratic Term]]).
5. **Others need nonlinear fitting or a smoother.** For example y = ax/(b + x) ([[Michaelis-Menten Function]]) or a [[Generalized Additive Model]].

## See it
![[Function shapes.png|700]]
*What to look at:* only the first panel has the same slope everywhere.

## Why it is this way
A straight line says "more always gives the same extra", forever. Nature rarely agrees: there are ceilings, floors and optimum points. Recognising a nonlinear pattern, and knowing the three ways to handle it (transform, add polynomial terms, or use a curved model), is central to choosing a deterministic function.

## In R
```r
year <- 0:3; N <- c(10, 20, 40, 80)
diff(N)            # 10 20 40: unequal steps, nonlinear
diff(log(N))       # 0.69 0.69 0.69: linear on the log scale
coef(lm(log(N) ~ year))   # slope 0.693 = log(2), a doubling per year
```
A log turned a curve into a line, so a linear model can estimate the growth rate.

## In the course
Hobbs and Hooten's "few good functions" are mostly nonlinear ([[Hobbs and Hooten 2015 Ch2]]). The GAM sessions exist for curves with no known formula ([[MOC 15 - GAMs|MOC - GAMs]]).

## Common confusions
- **"Linear model means straight line."** It means linear in the parameters. Curves in x are allowed.
- **"A curve needs fancy software."** Often a log or a squared term is enough.

## Explain it back
- How do you test from a table of numbers whether a relationship is linear?
- Why is y = a + bx + cx² still called a linear model?

*Pass test:* you can name three ways to model a curved relationship.

## Connections
- **Builds on:** [[Functions in Maths]], [[Linear Function]]
- **Leads to:** [[Polynomial]], [[Deterministic Functions in Ecology]], [[Link Function]]
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
