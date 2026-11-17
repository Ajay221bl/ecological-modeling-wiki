---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Exponential growth"
  - "Exponential decay"
  - "Malthusian growth"
  - "N(t) = N0 e^(rt)"
status: seedling
---

# Exponential Growth Model

**In one line:** the exponential growth model describes a quantity that changes at a rate proportional to its current size, so it multiplies by a fixed factor in each unit of time.

> [!info] Before this, it helps to know
> [[Exponential Function]] (its form) · [[Population Growth Rate]] (its parameter) · [[Multiplicative Effects]] (its behaviour)

## The everyday picture
Bacteria in a fresh dish. One becomes two, two become four, four become eight. The more there are, the more are added in the next round.

## A tiny example
N₀ = 100, r = 0.1 per year. After 1 year 110.5, after 10 years 272, after 23 years about 1000.

## Start from zero
1. **Assumption:** each individual contributes the same net number of new individuals per unit time, regardless of crowding.
2. **Rate form:** dN/dt = rN.
3. **Solution:** N(t) = N₀ e^(rt).
4. **Discrete form:** N(t+1) = λN(t), with λ = e^r.
5. **r > 0 grows, r < 0 decays, r = 0 stays.**
6. **Doubling time = ln(2)/r ≈ 0.69/r.**
7. **On a log scale it is a straight line:** log N = log N₀ + rt. Fit with a semi-log regression or a log-link GLM.
8. **Its limit:** nothing grows exponentially forever. It suits short periods, small populations or decay processes.

## In R
```r
N0 <- 100; r <- 0.1; t <- c(1, 10, 23); N0 * exp(r * t)
log(2) / r                                  # doubling time 6.9 years
exp(r)                                      # lambda 1.105
curve(100 * exp(0.1 * x), 0, 30, ylab = "N")
```

## In the course
[[Hobbs and Hooten 2015 Ch2]]. [[Powell and Gale 2015 Ch1]] and Ch2 use it as the first population model.

## Common confusions
- **"Exponential means fast."** It means proportional. With small r it is slow for a long time.

## Explain it back
- What is the doubling time when r = 0.05?

*Pass test:* you can project a population and compute its doubling time.

## Connections
- **Builds on:** [[Exponential Function]], [[Population Growth Rate]]
- **Leads to:** [[Logistic Growth Model]], [[Semi-log Model]], [[Log Link]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What is the exponential growth equation?
??
N(t) = N₀ e^(rt).
++++

What assumption produces exponential growth?
??
The per-individual growth rate is constant regardless of population size.
++++

Doubling time under exponential growth?
??
ln(2)/r.
++++
