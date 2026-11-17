---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Gompertz curve"
  - "Gompertz growth"
status: seedling
---

# Gompertz Function

**In one line:** the Gompertz function is an S-shaped growth curve that is lopsided: it rises quickly early on and approaches its ceiling slowly.

> [!info] Before this, it helps to know
> [[Exponential Function]] (used twice) · [[Asymptote]] (the ceiling) · [[Logistic Growth Model]] (the symmetric alternative)

## The everyday picture
A child's growth. A rapid early spurt, then years of slowing growth creeping toward adult height. The fastest growth happens well before half the final size is reached.

## Start from zero
1. **y = a·exp(−b·e^(−c·x)).**
2. **a:** the asymptote. **b:** sets where the curve starts. **c:** the growth-rate constant.
3. **Asymmetric:** the steepest point is at y = a/e ≈ 0.37a, not at a/2 as in the logistic.
4. **Mechanism behind it:** the per-capita growth rate declines exponentially through time (or linearly with log size).
5. **Uses:** tumour and body growth, population models where density dependence acts on log abundance (common in time-series models of abundance).

## In R
```r
gomp <- function(x, a = 100, b = 5, c = 0.5) a * exp(-b * exp(-c * x)); x <- seq(0, 20, 0.01)
y <- gomp(x); c(y_at_steepest = y[which.max(diff(y))], a_over_e = 100 / exp(1))
curve(gomp(x), 0, 20); curve(100 / (1 + exp(-0.5 * (x - 5))), add = TRUE, col = 2)     # red: symmetric logistic
```

## In the course
[[Hobbs and Hooten 2015 Ch2]].

## Common confusions
- **"Gompertz and logistic differ only in name."** Their inflection points and tails differ, which matters when fitting growth data.

## Explain it back
- Where is the Gompertz curve steepest?

*Pass test:* you can distinguish it from the logistic.

## Connections
- **Builds on:** [[Exponential Function]], [[Asymptote]]
- **Leads to:** [[Logistic Growth Model]], [[Density Dependence]]
- **Part of:** [[MOC - Linear Models and GLMs]]

## Flashcards

How does a Gompertz curve differ from a logistic curve?
??
It is asymmetric, with its inflection at about 37% of the asymptote instead of 50%.
++++
