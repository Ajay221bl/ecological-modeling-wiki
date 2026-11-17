---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "ESW"
  - "μ"
  - "Effective detection radius"
  - "EDR"
  - "Effective area surveyed"
status: seedling
---

# Effective Strip Width

**In one line:** the effective strip width is the distance from the line within which the number of animals missed equals the number seen beyond it, so the survey acts like a perfect count of a strip that wide.

> [!info] Before this, it helps to know
> [[Detection Function]] · [[Distance Sampling]]

## The everyday picture
A torch beam that fades with distance. The ESW is the width of an imaginary sharp-edged beam that would light up the same number of objects.

## A tiny example
For a half-normal detection function with σ = 30 m and no truncation, ESW = σ√(π/2) ≈ 37.6 m. A 10 km transect then effectively surveys 2 × 37.6 m × 10 km ≈ 75 ha.

## Start from zero
1. **ESW = ∫ g(x) dx** from 0 to the truncation distance w.
2. **Average detection probability in the strip** is ESW / w.
3. **Point counts** use the effective detection radius (EDR) and effective area π × EDR².
4. **Density:** D̂ = n / (2 × ESW × L).

## In R
```r
sigma <- 30
c(formula = sigma * sqrt(pi / 2), integral = integrate(function(x) exp(-x^2 / (2 * sigma^2)), 0, Inf)$value)
```

## In the course
[[Powell and Gale 2015]] Ch19.

## Common confusions
- **"ESW is the farthest distance anything was seen."** It is usually much shorter.

## Explain it back
- Why is ESW / w the average detection probability?

*Pass test:* you can compute ESW and use it in a density estimate.

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
