---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - lm-glm
aliases:
  - "Log-linear vs linear-log vs log-log"
  - "Interpreting logged variables"
  - "Semi-log vs log-log"
status: seedling
---

# Linear, Semi-log and Log-log Models

> [!summary] In plain words
> logging the response, the predictor or both changes what a slope means: in a linear model it is a change in y per unit of x, with log(y) it is a percentage change in y per unit of x, with log(x) it is a change in y per proportional change in x, and in a log-log model it is the percentage change in y per percent change in x.

## The question
How do I interpret a slope when y or x is logged?

## Built from
- [[Semi-log Model]] and [[Log-log Model]].
- [[Logarithm]] and [[Natural Logarithm]].
- [[Allometry]] and [[Multiplicative Effects]].

## The reasoning, step by step
1. **Linear (y ~ x):** y changes by b per unit x.
2. **Log-linear (log y ~ x):** y is multiplied by e^b per unit x; for small b, about 100b percent.
3. **Linear-log (y ~ log x):** doubling x adds b log(2) = 0.69b to y.
4. **Log-log (log y ~ log x):** y ∝ x^b; a 1 percent increase in x gives about b percent change in y. Doubling x multiplies y by 2^b. Allometry lives here.
5. **A Poisson or gamma GLM with log link** has the same reading as log-linear for the mean.

| Model | Slope b means |
|---|---|
| y = a + bx | +b in y per unit x |
| log y = a + bx | ×e^b in y per unit x |
| y = a + b log x | +0.69b in y per doubling of x |
| log y = a + b log x | ×2^b in y per doubling of x |
log(mass) = 1 + 0.75 log(length): doubling length multiplies mass by 2^0.75 = 1.68. In log(y) = 2 + 0.05x, one unit of x multiplies y by e^0.05 = 1.051, a 5.1 percent rise.

## So in practice
State the scale in words when reporting: "each 1 °C rise multiplied abundance by 1.05 (5 percent increase)."

## What would go wrong otherwise
Reporting the slope of log(y) ~ x as "y increases by 0.05 units".

## Explain it back
- What does b mean in a log-log model?

*Pass test:* you can turn any of the four slopes into a sentence.

## Connections
- **Related:** [[Transform the data or change the model]], [[Linear vs Nonlinear Function]], [[Predictions on Link vs Response Scale]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Linear Models and GLMs]]

## Flashcards

Slope b in log(y) = a + bx means?
??
y is multiplied by e^b per unit x (about 100b percent for small b).
++++

Slope b in a log-log model means?
??
Elasticity: about b percent change in y per 1 percent change in x; doubling x multiplies y by 2^b.
++++
