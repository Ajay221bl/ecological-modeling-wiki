---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The logistic growth model describes a population that grows nearly exponentially when small and slows as it approaches a ceiling set by the environment, tracing an S-shaped curve."
aliases:
  - "Logistic growth"
  - "Verhulst model"
status: seedling
---

# Logistic Growth Model

Lilies spreading over a pond double quickly at first, because each new lily has open water. As the pond fills they have nowhere to go, and growth stalls when the surface is covered. The **logistic growth model** describes a population that grows nearly exponentially when small and slows as it approaches a ceiling set by the environment, tracing an S-shaped curve. Start with exponential growth, dN/dt = rN ([[Exponential Growth Model]]), and add a brake that tightens as N rises: dN/dt = rN(1 − N/K). K is the [[Carrying Capacity]], the size at which growth stops ([[Asymptote]]). When N is tiny the bracket is about 1 and growth is exponential; when N = K the bracket is zero and growth stops.

Growth in numbers is fastest at N = K/2, the steepest point of the S in the figure. The solution is N(t) = K / (1 + ((K − N₀)/N₀) e^(−rt)). In the code below, with K = 500, r = 0.4 and N₀ = 10, the population is about 66, 264 and 492 after 5, 10 and 20 years, and its fastest one-year increase, from about 214 to 264, straddles 250, half of K. The brake is [[Density Dependence]]: the per-capita growth rate falls as the population rises ([[Population Growth Rate]]).

Hobbs and Hooten use it as a standard [[Process Model]], with r and K as the biologically meaningful parameters to estimate ([[Hobbs and Hooten 2015 Ch2]], [[Powell and Gale 2015 Ch2]]). Logistic growth is not [[Logistic Regression|logistic regression]]: they share the S-curve formula ([[Logistic Function]]), but one is a population process and the other a model for probabilities.

![[Logistic growth curve.png|700]]
*What to look at:* the S shape, the steepest point at K/2 and the flattening at K.

```r
K <- 500; r <- 0.4; N0 <- 10; t <- 0:30
N <- K / (1 + ((K - N0) / N0) * exp(-r * t)); round(N[c(1, 6, 11, 21, 31)])
t[which.max(diff(N))]; N[which.max(diff(N))]          # fastest growth near N = K/2
```

## Connections
- **Builds on:** [[Exponential Growth Model]], [[Asymptote]], [[Logistic Regression]]
- **Leads to:** [[Carrying Capacity]], [[Logistic Function]], [[Process Model]], [[Density Dependence]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

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
