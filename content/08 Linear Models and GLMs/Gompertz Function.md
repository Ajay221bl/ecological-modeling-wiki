---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The Gompertz function is an S-shaped growth curve that is lopsided: it rises quickly early on and approaches its ceiling slowly."
aliases:
  - "Gompertz curve"
  - "Gompertz growth"
status: seedling
---

# Gompertz Function

A child's growth has a rapid early spurt, then years of slowing growth creeping toward adult height; the fastest growth happens well before half the final size is reached. The **Gompertz function** is an S-shaped growth curve with that lopsided shape: it rises quickly early on and approaches its ceiling slowly. Its formula uses the exponential twice: y = a·exp(−b·e^(−c·x)) ([[Exponential Function]]). a is the [[Asymptote]], b sets where the curve starts, and c is the growth-rate constant.

Its steepest point is at y = a/e ≈ 0.37a, not at a/2 as in the symmetric logistic curve. The code below finds the steepest point numerically for a = 100 and confirms it is at 36.8, then draws the Gompertz beside a symmetric logistic for comparison. The mechanism behind it is a per-capita growth rate that declines exponentially through time, or linearly with log size.

It is used for tumour and body growth, and for population models in which [[Density Dependence]] acts on log abundance, common in time-series models of abundance ([[Hobbs and Hooten 2015 Ch2]]). Gompertz and logistic do not differ only in name: their inflection points and tails differ, which matters when fitting growth data ([[Logistic Growth Model]]).

```r
gomp <- function(x, a = 100, b = 5, c = 0.5) a * exp(-b * exp(-c * x)); x <- seq(0, 20, 0.01)
y <- gomp(x); c(y_at_steepest = y[which.max(diff(y))], a_over_e = 100 / exp(1))
curve(gomp(x), 0, 20); curve(100 / (1 + exp(-0.5 * (x - 5))), add = TRUE, col = 2)     # red: symmetric logistic
```

## Connections
- **Builds on:** [[Exponential Function]], [[Asymptote]]
- **Leads to:** [[Logistic Growth Model]], [[Density Dependence]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

How does a Gompertz curve differ from a logistic curve?
??
It is asymmetric, with its inflection at about 37% of the asymptote instead of 50%.
++++
