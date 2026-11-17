---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The exponential growth model describes a quantity that changes at a rate proportional to its current size, so it multiplies by a fixed factor in each unit of time."
aliases:
  - "Exponential growth"
  - "Exponential decay"
  - "Malthusian growth"
  - "N(t) = N0 e^(rt)"
status: seedling
---

# Exponential Growth Model

In a fresh dish, one bacterium becomes two, two become four, four become eight: the more there are, the more are added in the next round. The **exponential growth model** describes a quantity that changes at a rate proportional to its current size, so it multiplies by a fixed factor in each unit of time ([[Multiplicative Effects]]). Its assumption is that each individual contributes the same net number of new individuals per unit time, regardless of crowding. In rate form, dN/dt = rN, whose solution is N(t) = N₀ e^(rt) ([[Exponential Function]]). In discrete form, N(t+1) = λN(t), with λ = e^r. r > 0 grows, r < 0 decays, and r = 0 stays put ([[Population Growth Rate]]).

With N₀ = 100 and r = 0.1 per year, the population is 110.5 after one year, 272 after ten, and about 1,000 after 23. λ = e^0.1 = 1.105, and the doubling time is ln(2)/r = 0.69/0.1 = 6.9 years; the code below computes each. On a log scale the model is a straight line, log N = log N₀ + rt, so it is fitted with a [[Semi-log Model]] or a GLM with a [[Log Link]].

Nothing grows exponentially forever, so the model suits short periods, small populations or decay processes; adding a ceiling gives the [[Logistic Growth Model]]. It is the first population model in Powell and Gale and a basic deterministic function in Hobbs and Hooten ([[Powell and Gale 2015 Ch1]], [[Hobbs and Hooten 2015 Ch2]]). "Exponential" does not mean fast; it means proportional, and with small r it is slow for a long time.

```r
N0 <- 100; r <- 0.1; t <- c(1, 10, 23); N0 * exp(r * t)
log(2) / r                                  # doubling time 6.9 years
exp(r)                                      # lambda 1.105
curve(100 * exp(0.1 * x), 0, 30, ylab = "N")
```

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
