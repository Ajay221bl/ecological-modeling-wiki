---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Double-log model"
  - "Power-law regression"
  - "Elasticity"
status: seedling
---

# Log-log Model

**In one line:** a log-log model is a regression with both the response and the predictor logged, whose slope says by what percentage the response changes for a one percent change in the predictor.

> [!info] Before this, it helps to know
> [[Log Transformation]] (of both variables) · [[Power Function]] (the curve it implies) · [[Semi-log Model]] (the one-sided version)

## The everyday picture
Scaling up a recipe. Double the people, and you need double the flour (slope 1) but not double the oven time (slope less than 1). The log-log slope says how one quantity scales as the other is multiplied.

## A tiny example
log(metabolic rate) = a + 0.75 · log(mass). An animal 10 times heavier has 10^0.75 = 5.6 times the metabolic rate, not 10 times.

## Start from zero
1. **Model:** log(y) = β₀ + β₁ log(x).
2. **On the original scale:** y = e^(β₀) · x^(β₁). A power function.
3. **β₁ is the scaling exponent.** A 1% rise in x goes with about a β₁% rise in y.
4. **β₁ = 1:** proportional. **Below 1:** y grows more slowly than x. **Above 1:** faster.
5. **Doubling x multiplies y by 2^(β₁).**
6. **Use it for** size and scaling relationships (allometry), species-area curves.

## In R
```r
set.seed(6); mass <- exp(runif(100, log(0.01), log(1000))); rate <- 3 * mass^0.75 * exp(rnorm(100, 0, 0.2))
m <- lm(log(rate) ~ log(mass)); coef(m); exp(coef(m)[1])        # exponent about 0.75, constant about 3
2^coef(m)[2]                                                     # doubling mass multiplies rate by about 1.68
```

## In the course
[[Guthery and Bingham 2007]]. The crash course's brain and body mass example ([[Course Website]]).

## Common confusions
- **"The slope is the change in y per unit x."** It is a ratio of percentage changes.

## Explain it back
- If the log-log slope is 0.5, what happens to y when x quadruples?

*Pass test:* you can interpret a log-log slope as a scaling exponent.

## Connections
- **Builds on:** [[Log Transformation]], [[Power Function]]
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
