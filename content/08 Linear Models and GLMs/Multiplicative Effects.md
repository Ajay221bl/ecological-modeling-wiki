---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A multiplicative effect changes the response by a constant factor or percentage for each unit of the predictor, where an additive effect changes it by a constant amount."
aliases:
  - "Multiplicative effect"
  - "Proportional change"
  - "Percentage change"
status: seedling
---

# Multiplicative Effects

A pay rise of 500 a year adds the same amount each time; a pay rise of 3% a year adds more each year, because 3% of a growing salary keeps growing. An **additive effect** changes the response by a constant amount per unit of the predictor, which is what a [[Slope]] describes. A **multiplicative effect** changes it by a constant factor or percentage. If abundance multiplies by 1.2 per degree of warming, then starting at 10 it goes 12, 14.4, 17.3, and the steps grow: +2, +2.4, +2.9.

Taking logs turns multiplying into adding: if y is multiplied by m per unit of x, log(y) goes up by log(m) ([[Logarithm]]). So any model that is linear on the log scale, such as a log-transformed response or a Poisson GLM with a log link, has multiplicative effects on the original scale ([[Log Link]], [[Log Transformation]]). To read them, exponentiate the coefficient ([[Exponential Function]]): exp(0.18) = 1.20, a 20% increase per unit. In the code below, counts simulated with a log-scale slope of 0.18 give back a multiplier of about 1.2 from a Poisson GLM. For small coefficients the coefficient itself is close to the proportional change, 0.05 being about 5%, but not for large ones: exp(0.5) = 1.65, a 65% increase, not 50%. A coefficient of −0.22 gives exp(−0.22) = 0.80, a 20% decrease.

Biology is often multiplicative because growth, survival and reproduction act per individual, so changes scale with what is already there. Logistic regression is multiplicative on the odds ([[Odds Ratio]]). Which kind of effect a coefficient describes depends on which variables were logged ([[Semi-log Model]]).

```r
exp(0.18); exp(c(0.01, 0.05, 0.1, 0.5))        # small coefficients are close to percentage changes. Large ones aren't
10 * 1.2^(0:3); diff(10 * 1.2^(0:3))
set.seed(4); x <- runif(200, 0, 10); y <- rpois(200, exp(1 + 0.18 * x)); exp(coef(glm(y ~ x, family = poisson))[2])    # about 1.2
```

## Connections
- **Builds on:** [[Logarithm]], [[Exponential Function]]
- **Leads to:** [[Log Link]], [[Odds Ratio]], [[Log Transformation]], [[Semi-log Model]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

How do you turn a log-scale coefficient into a multiplicative effect?
??
Exponentiate it: each unit of x multiplies the response by exp(b).
++++

Why are log-scale models multiplicative on the original scale?
??
Adding on the log scale corresponds to multiplying on the original scale.
++++
