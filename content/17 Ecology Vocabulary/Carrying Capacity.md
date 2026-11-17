---
type: atomic
tags:
  - ecology
  - flashcards/eco/ecology
aliases:
  - "Carrying capacity (K)"
  - "Equilibrium population size"
status: seedling
---

# Carrying Capacity

**In one line:** carrying capacity K is the population size an environment can support in the long run, where births balance deaths because resources limit further growth.

> [!info] Before this, it helps to know
> [[Logistic Growth Model]] · [[Population Dynamics]]

## The everyday picture
A lifeboat with 20 seats. Below 20, more people can climb in easily; near 20, every newcomer makes it harder; above 20, some fall out.

## Start from zero
1. **In the logistic model:** dN/dt = rN(1 − N/K). Growth slows as N approaches K and stops at K.
2. **K is not fixed:** it shifts with food, habitat, weather and management.
3. **Density dependence** is the mechanism: per-capita growth falls as density rises.
4. **Guthery and Bingham (2007)** discuss interpreting regressions of populations and habitat; a fitted asymptote is a statistical summary, not proof of a carrying capacity.
5. **In GAMs or nonlinear models,** a plateau in counts can look like K but may reflect detection saturation.

## In R
```r
logistic <- function(t, N0, r, K) K / (1 + (K / N0 - 1) * exp(-r * t))
round(logistic(c(0, 5, 10, 20, 40), N0 = 10, r = 0.3, K = 500))
```

## In the course
[[Hobbs and Hooten 2015]] Ch2 (deterministic models). [[Guthery and Bingham 2007]].

## Common confusions
- **"Populations sit at K."** They fluctuate around it, overshoot or stay below it.

## Explain it back
- What happens to logistic growth when N = K?

*Pass test:* you can explain K in the logistic model.

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
