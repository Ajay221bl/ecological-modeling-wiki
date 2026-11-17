---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Log-linear regression"
  - "Log-level model"
  - "Exponential regression"
status: seedling
---

# Semi-log Model

**In one line:** a semi-log model is a regression in which the response is logged and the predictor is left on its original scale, so the response changes by a constant percentage per unit of the predictor.

> [!info] Before this, it helps to know
> [[Log Transformation]] (of the response) · [[Multiplicative Effects]] (the interpretation) · [[Exponential Function]] (the curve it implies)

## The everyday picture
A straight line on graph paper whose vertical axis is marked 1, 10, 100, 1000. Straight on that paper means a curve of steady percentage growth on ordinary paper.

## Start from zero
1. **Model:** log(y) = β₀ + β₁x.
2. **On the original scale:** y = e^(β₀) · e^(β₁x). An exponential curve.
3. **β₁ is the proportional change in y per unit of x.** Multiplier e^(β₁).
4. **Use it for** growth or decay through time, decline with distance, anything changing by a constant percentage.
5. **The mirror image (level-log):** y = β₀ + β₁ log(x). Each doubling of x adds β₁ · log(2) to y. Diminishing returns.
6. **Guthery and Bingham's point:** the same β means very different things in linear, semi-log and log-log models. You must know which you fitted before interpreting.

## In R
```r
set.seed(5); t <- 0:20; N <- 50 * exp(0.08 * t + rnorm(21, 0, 0.1))
m <- lm(log(N) ~ t); coef(m); exp(coef(m))        # start about 50, growing about 8% per year
plot(t, N); lines(t, exp(fitted(m)))
```

## In the course
[[Guthery and Bingham 2007]].

## Common confusions
- **"Semi-log and log-log are the same."** One logs one variable, the other both.

## Explain it back
- What does β₁ = −0.1 mean in log(y) = β₀ + β₁x?

*Pass test:* you can interpret a semi-log slope as a percentage change.

## Connections
- **Builds on:** [[Log Transformation]], [[Multiplicative Effects]]
- **Leads to:** [[Log-log Model]], [[Exponential Growth Model]], [[Back-transformation]], [[Log Link]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]], molecular note [[Linear, Semi-log and Log-log Models]]

## Flashcards

What does the slope mean in log(y) = β₀ + β₁x?
??
Each unit of x multiplies y by exp(β₁), roughly a 100·β₁ percent change for small β₁.
++++
