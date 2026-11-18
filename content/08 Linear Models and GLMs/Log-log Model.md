---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A log-log model is a regression with both the response and the predictor logged, whose slope says by what percentage the response changes for a one percent change in the predictor."
aliases:
  - "Double-log model"
  - "Power-law regression"
  - "Elasticity"
status: seedling
---

# Log-log Model

When you scale up a recipe, double the people means double the flour, a ratio of 1, but not double the oven time, a ratio below 1. A **log-log model** captures how one quantity scales as another is multiplied: both the response and the [[Predictor Variable|predictor]] are logged, log(y) = β₀ + β₁ log(x) ([[Log Transformation]]). On the original scale that is y = e^(β₀) · x^(β₁), a [[Power Function]]. The slope β₁ is the scaling exponent: a 1% rise in x goes with about a β₁% rise in y. β₁ = 1 means proportional; below 1, y grows more slowly than x; above 1, faster.

Take metabolic rate: log(rate) = a + 0.75 · log(mass). An animal 10 times heavier has 10^0.75 = 5.6 times the metabolic rate, not 10 times. In general, doubling x multiplies y by 2^(β₁), here 1.68. The code below simulates metabolic rates over five orders of [[Absolute Value|magnitude]] of body mass, fits `lm(log(rate) ~ log(mass))`, and recovers an exponent of about 0.75 and a constant of about 3.

It is the standard model for size and scaling relationships ([[Allometry]]) and for species-area curves, and the crash course's brain and body mass example is one ([[Course Website]], [[Guthery and Bingham 2007]]). The common confusion is to read the slope as the change in y per unit of x; it is a ratio of percentage changes. Logging only the response gives the [[Semi-log Model]], and turning predictions back into original units needs care ([[Back-transformation]]).

```r
set.seed(6); mass <- exp(runif(100, log(0.01), log(1000))); rate <- 3 * mass^0.75 * exp(rnorm(100, 0, 0.2))
m <- lm(log(rate) ~ log(mass)); coef(m); exp(coef(m)[1])        # exponent about 0.75, constant about 3
2^coef(m)[2]                                                     # doubling mass multiplies rate by about 1.68
```

## Connections
- **Builds on:** [[Log Transformation]], [[Power Function]], [[Predictor Variable]], [[Absolute Value]]
- **Leads to:** [[Allometry]], [[Semi-log Model]], [[Back-transformation]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]], molecular note [[Linear, Semi-log and Log-log Models]]

## Flashcards

What does the slope of a log-log regression represent?
??
The exponent of a power law: the percent change in y for a one percent change in x.
++++

What original-scale function does log(y) = a + b·log(x) imply?
??
y = e^a · x^b.
++++
