---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Multiplicative effect"
  - "Proportional change"
  - "Percentage change"
status: seedling
---

# Multiplicative Effects

**In one line:** a multiplicative effect changes the response by a constant factor or percentage for each unit of the predictor, where an additive effect changes it by a constant amount.

> [!info] Before this, it helps to know
> [[Logarithm]] (which turns multiplying into adding) · [[Exponential Function]] (which turns it back) · [[Slope]] (the additive version)

## The everyday picture
A pay rise of 500 a year versus a pay rise of 3% a year. The first adds the same amount each time. The second adds more each year, because 3% of a growing salary keeps growing.

## A tiny example
Abundance multiplies by 1.2 per degree of warming. Starting at 10: 12, 14.4, 17.3. The steps grow: +2, +2.4, +2.9.

## Start from zero
1. **Additive: y goes up by b** per unit of x.
2. **Multiplicative: y is multiplied by a factor m** per unit of x.
3. **Taking logs turns the second into the first:** log(y) goes up by log(m) per unit of x.
4. **So any model that is linear on the log scale has multiplicative effects on the original scale.** A log-transformed response, a Poisson GLM with log link.
5. **To read them: exponentiate the coefficient.** exp(0.18) = 1.20, a 20% increase per unit.
6. **For small coefficients, b ≈ the proportional change.** 0.05 is about 5%.
7. **Why biology is often multiplicative:** growth, survival and reproduction act per individual, so changes scale with what is already there.
8. **Logistic regression is multiplicative on the odds.**

## In R
```r
exp(0.18); exp(c(0.01, 0.05, 0.1, 0.5))        # small coefficients are close to percentage changes. Large ones aren't
10 * 1.2^(0:3); diff(10 * 1.2^(0:3))
set.seed(4); x <- runif(200, 0, 10); y <- rpois(200, exp(1 + 0.18 * x)); exp(coef(glm(y ~ x, family = poisson))[2])    # about 1.2
```

## Common confusions
- **"A log-scale slope of 0.5 is a 50% increase."** exp(0.5) = 1.65, a 65% increase.

## Explain it back
- Convert a log-scale coefficient of −0.22 to a percentage change.

*Pass test:* you can turn a log-scale coefficient into a multiplier.

## Connections
- **Builds on:** [[Logarithm]], [[Exponential Function]]
- **Leads to:** [[Log Link]], [[Odds Ratio]], [[Log Transformation]], [[Semi-log Model]]
- **Part of:** [[MOC - Linear Models and GLMs]]

## Flashcards

How do you turn a log-scale coefficient into a multiplicative effect?
??
Exponentiate it: each unit of x multiplies the response by exp(b).
++++

Why are log-scale models multiplicative on the original scale?
??
Adding on the log scale corresponds to multiplying on the original scale.
++++
