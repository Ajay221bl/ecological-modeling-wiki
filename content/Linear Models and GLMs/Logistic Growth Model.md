---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Logistic growth"
  - "Verhulst model"
status: seedling
---

# Logistic Growth Model

**In one line:** the logistic growth model describes a population that grows nearly exponentially when small and slows as it approaches a ceiling set by the environment, tracing an S-shaped curve.

> [!info] Before this, it helps to know
> [[Exponential Growth Model]] (its starting behaviour) · [[Asymptote]] (its ceiling) · [[Population Growth Rate]] (r)

## The everyday picture
Lilies spreading over a pond. Early on, each new lily has open water and the patch doubles quickly. As the pond fills, new lilies have nowhere to go, and growth stalls when the surface is covered.

## Start from zero
1. **Start with exponential growth:** dN/dt = rN.
2. **Add a brake that tightens as N rises:** dN/dt = rN(1 − N/K).
3. **K is the carrying capacity,** the size at which growth stops.
4. **When N is tiny, (1 − N/K) ≈ 1:** exponential growth.
5. **When N = K/2, growth in numbers is fastest.**
6. **When N = K, the bracket is zero:** no growth.
7. **Solution:** N(t) = K / (1 + ((K − N₀)/N₀) e^(−rt)).
8. **Why it matters in this course:** Hobbs and Hooten use it as a standard process model, with r and K as the biologically meaningful parameters to estimate.

## See it
![[Logistic growth curve.png|700]]
*What to look at:* the S shape, the steepest point at K/2 and the flattening at K.

## In R
```r
K <- 500; r <- 0.4; N0 <- 10; t <- 0:30
N <- K / (1 + ((K - N0) / N0) * exp(-r * t)); round(N[c(1, 6, 11, 21, 31)])
t[which.max(diff(N))]; N[which.max(diff(N))]          # fastest growth near N = K/2
```

## In the course
[[Hobbs and Hooten 2015 Ch2]] and their Bayesian examples. [[Powell and Gale 2015 Ch2]].

## Common confusions
- **"Logistic growth = logistic regression."** They share the S-curve formula, but one is a population process and the other a model for probabilities.

## Explain it back
- At what population size is growth fastest?

*Pass test:* you can explain each term of rN(1 − N/K).

## Connections
- **Builds on:** [[Exponential Growth Model]], [[Asymptote]]
- **Leads to:** [[Carrying Capacity]], [[Logistic Function]], [[Process Model]], [[Density Dependence]]
- **Part of:** [[MOC - Linear Models and GLMs]]

## Flashcards

What is the logistic growth equation in rate form?
??
dN/dt = rN(1 − N/K).
![[Logistic growth curve.png]]
++++

What does K represent?
??
The carrying capacity: the population size at which growth is zero.
++++
