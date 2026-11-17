---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "The effective strip width is the distance from the line within which the number of animals missed equals the number seen beyond it, so the survey acts like a perfect count of a strip that wide."
aliases:
  - "ESW"
  - "μ"
  - "Effective detection radius"
  - "EDR"
  - "Effective area surveyed"
status: seedling
---

# Effective Strip Width

A torch beam fades with distance; the **effective strip width** (ESW) is the width of an imaginary sharp-edged beam that would light up the same number of objects. Formally it is the distance from the line within which the number of animals missed equals the number seen beyond it, so the survey acts like a perfect count of a strip that wide ([[Detection Function]], [[Distance Sampling]]). ESW = ∫ g(x) dx from 0 to the truncation distance w, and the average detection probability in the strip is ESW / w ([[Integral]]).

Density is then D̂ = n / (2 × ESW × L). For a half-normal detection function with σ = 30 m and no truncation, ESW = σ√(π/2) ≈ 37.6 m, so a 10 km transect effectively surveys 2 × 37.6 m × 10 km ≈ 75 ha. The code below gets 37.6 m both from the formula and by numerically integrating g(x). Point counts use the effective detection radius (EDR) and effective area π × EDR² instead ([[Point Transects]]).

It is defined in [[Powell and Gale 2015]] Ch19 ([[Line Transects]]). The ESW is not the farthest distance anything was seen; it is usually much shorter.

```r
sigma <- 30
c(formula = sigma * sqrt(pi / 2), integral = integrate(function(x) exp(-x^2 / (2 * sigma^2)), 0, Inf)$value)
```

## Connections
- **Builds on:** [[Detection Function]], [[Distance Sampling]]
- **Leads to:** [[Line Transects]], [[Point Transects]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

What is the effective strip width?
??
The distance at which animals missed inside equal animals seen beyond; ESW = ∫ g(x) dx.
++++

ESW for half-normal σ = 30 m?
??
About 37.6 m (σ√(π/2)).
++++
