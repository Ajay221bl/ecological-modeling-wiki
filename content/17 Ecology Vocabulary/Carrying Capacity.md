---
type: atomic
tags:
  - ecology
  - flashcards/eco/ecology
description: "Carrying capacity K is the population size an environment can support in the long run, where births balance deaths because resources limit further growth."
aliases:
  - "Carrying capacity (K)"
  - "Equilibrium population size"
status: seedling
---

# Carrying Capacity

A lifeboat with 20 seats is easy to climb into when nearly empty, harder near 20, and above 20 some people fall out. **Carrying capacity** K is the population size an environment can support in the long run, where births balance deaths because resources limit further growth ([[Population Dynamics]]). In the [[Logistic Growth Model]], dN/dt = rN(1 − N/K): growth slows as N approaches K and stops at K. The mechanism is [[Density Dependence]], with per-capita growth falling as density rises.

K is not fixed: it shifts with food, habitat, weather and management. In the code below a population starting at 10 with r = 0.3 and K = 500 reaches 42 after 5 time steps, 145 after 10, 446 after 20 and 500 after 40, an S-shaped approach to K.

[[Guthery and Bingham 2007]] discuss interpreting regressions of populations and habitat: a fitted asymptote is a statistical summary, not proof of a carrying capacity. In GAMs or nonlinear models a plateau in counts can look like K but may reflect detection saturation ([[Imperfect Detection]], [[Hobbs and Hooten 2015]] Ch2). Populations do not sit at K; they fluctuate around it, overshoot it or stay below it.

```r
logistic <- function(t, N0, r, K) K / (1 + (K / N0 - 1) * exp(-r * t))
round(logistic(c(0, 5, 10, 20, 40), N0 = 10, r = 0.3, K = 500))
```

## Connections
- **Builds on:** [[Logistic Growth Model]], [[Population Dynamics]]
- **Leads to:** [[Density Dependence]], [[Asymptote]]
- **Part of:** [[MOC 19 - Ecology Vocabulary|MOC - Ecology Vocabulary]]

## Flashcards

What is carrying capacity?
??
The long-run population size an environment can support, where births balance deaths.
++++

In the logistic model, what is growth at N = K?
??
Zero.
++++
