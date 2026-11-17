---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A linear function is a rule of the form y = a + b·x, whose graph is a straight line that rises or falls by the same amount for every one-unit step in x."
aliases:
  - "Straight-line function"
  - "y = a + bx"
status: seedling
---

# Linear Function

A taxi fare is a fixed charge when you get in plus the same amount for every kilometre; double the distance and the per-kilometre part doubles. A **linear function** is a rule of that form, y = a + b·x, whose graph is a straight line. The number a is the intercept, the value of y when x = 0; b is the slope, the change in y per unit of x ([[Functions in Maths]]). Positive b rises, negative b falls, and b = 0 is flat.

Take y = 3 + 2x. At x = 0, y = 3; at x = 1, y = 5; at x = 2, y = 7. Every step of 1 in x adds 2 to y, and the code below shows those constant steps with `diff()`. That constancy is what "linear" means: the [[Rate of Change]] is the same everywhere.

It is the default deterministic part of a model because one number, the slope, summarises the whole relationship ([[Linear Regression]], [[Linear Predictor]]). Its weakness is that it has no floor or ceiling: followed far enough it predicts negative counts or probabilities above 1, which is one reason ecologists turn to curves ([[Nonlinear Function]]). Do not confuse linear with proportional. Proportional means the line passes through zero (a = 0), so doubling x doubles y; a linear function allows any intercept.

```r
f <- function(x) 3 + 2 * x
f(0:4); diff(f(0:4))            # constant steps of 2
curve(f, 0, 10)
```

## Connections
- **Builds on:** [[Functions in Maths]], [[Rate of Change]]
- **Leads to:** [[Linear Regression]], [[Nonlinear Function]], [[Linear Predictor]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]], molecular note [[Linear vs Nonlinear Function]]

## Flashcards

What is the form of a linear function?
??
y = a + b·x, with intercept a and constant slope b.
++++
