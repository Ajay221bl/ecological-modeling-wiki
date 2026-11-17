---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
description: "The deterministic component of a model is the rule that gives the expected (average) value for given conditions, written μ = g(θ, x). Same inputs, same answer, every time."
aliases:
  - "Deterministic part"
  - "Deterministic model"
  - "Process function"
status: seedling
---

# Deterministic Component

A weather forecast says "tomorrow: 20 °C". That number comes from rules about the season, the pressure map and the wind, and feeding the same conditions in again gives 20 again. The **deterministic component** of a model is that rule-based best guess: the part that gives the expected, or average, value of the response for given conditions. Hobbs and Hooten write it as μ = g(θ, x), where μ ("mu") is the expected value, g is the function or rule, θ ("theta") stands for its parameters, and x for the predictors fed in ([[Hobbs and Hooten 2015 Ch2]], [[Functions in Maths]]). *Deterministic* means no randomness: same input, same output, every time.

Take grass biomass and rainfall with μ = 3 + 1.2 × rainfall. Rainfall 0 gives μ = 3, rainfall 5 gives 9, rainfall 10 gives 15, and asking again for rainfall 5 always gives 9. Real plots at rainfall 5 might weigh 8, 10 or 14, and the rule does not claim any plot weighs 9; it claims plots at rainfall 5 *average* 9 ([[Mean]]). The rule leaves out grazing, soil and luck, which is why individual plots scatter around it. In R, `lm(dist ~ speed, data = cars)` estimates the parameters of exactly such a straight-line rule.

Keeping this part free of randomness makes the scientific claim sharp: "on average, this much more grass per unit of rain". Its shape is itself a hypothesis, since a straight line, a curve that levels off, and a threshold each say something different about nature ([[Deterministic Functions in Ecology]]). But it cannot be fitted alone. To judge how well data match the rule you must say how observations scatter around it, which is the job of its partner, the [[Stochastic Component]] ([[Deterministic and Stochastic Components]]). Two confusions to avoid: the line predicts the mean at each x, not each observation, and deterministic means "no randomness", not "correct".

![[Deterministic and stochastic components.png|700]]
*What to look at:* the blue line is the deterministic component.

```r
g <- function(rain, b0 = 3, b1 = 1.2) b0 + b1 * rain   # the deterministic rule
g(c(0, 5, 10))                                        # 3 9 15, the same every time
fit <- lm(dist ~ speed, data = cars)
coef(fit)          # estimated parameters of the deterministic part
```

## Connections
- **Builds on:** [[Functions in Maths]], [[Mean]]
- **Leads to:** [[Stochastic Component]], [[Deterministic Functions in Ecology]], [[Linear Regression]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]], molecular notes [[Deterministic and Stochastic Components]], [[Why every statistical model has a deterministic and a stochastic part]]
- **Go deeper:** [[Hobbs and Hooten 2015 Ch2]]

## Flashcards

What is the deterministic component of a model?
??
The rule μ = g(θ, x) that gives the expected value for given predictors and parameters, with no randomness.
![[Deterministic and stochastic components.png]]
++++

In a regression, what does the deterministic part predict?
??
The mean (expected value) of y for a given x, not each individual observation.
++++
