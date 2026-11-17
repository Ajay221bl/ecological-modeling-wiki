---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Straight-line function"
  - "y = a + bx"
status: seedling
---

# Linear Function

**In one line:** a linear function is a rule of the form y = a + b·x, whose graph is a straight line that rises or falls by the same amount for every one-unit step in x.

> [!info] Before this, it helps to know
> [[Functions in Maths]] (the general idea) · [[Rate of Change]] (which is constant here)

## The everyday picture
A taxi fare. A fixed charge when you get in, plus the same amount for every kilometre. Double the distance and the per-kilometre part doubles.

## A tiny example
y = 3 + 2x. At x = 0, y = 3. At x = 1, y = 5. At x = 2, y = 7. Every step of 1 in x adds 2 to y.

## Start from zero
1. **a is the intercept:** the value of y when x = 0.
2. **b is the slope:** the change in y per unit of x.
3. **The slope is the same everywhere.** That is what "linear" means.
4. **Positive b rises, negative b falls, b = 0 is flat.**
5. **Why it is the default deterministic model:** one number, the slope, summarises the whole relationship.
6. **Its weakness:** it has no floor or ceiling. Followed far enough it predicts negative counts or probabilities above 1.

## In R
```r
f <- function(x) 3 + 2 * x
f(0:4); diff(f(0:4))            # constant steps of 2
curve(f, 0, 10)
```

## Common confusions
- **"Linear means proportional."** Proportional means the line passes through zero (a = 0). Linear allows any intercept.

## Explain it back
- What do a and b mean in y = a + bx?

*Pass test:* you can read intercept and slope from an equation.

## Connections
- **Builds on:** [[Functions in Maths]], [[Rate of Change]]
- **Leads to:** [[Linear Regression]], [[Nonlinear Function]], [[Linear Predictor]]
- **Part of:** [[MOC - Linear Models and GLMs]], molecular note [[Linear vs Nonlinear Function]]

## Flashcards

What is the form of a linear function?
??
y = a + b·x, with intercept a and constant slope b.
++++
