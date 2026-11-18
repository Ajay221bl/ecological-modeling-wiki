---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Capture heterogeneity models are the family of closed-population models (M0, Mt, Mb, Mh and combinations) that let capture probability vary by time, behaviour or individual, and are compared to choose the best description."
aliases:
  - "Otis models"
  - "M0"
  - "Mt"
  - "Mb"
  - "Mh"
  - "Mtbh"
  - "Closed capture models M0 Mt Mb Mh"
  - "Individual heterogeneity"
status: seedling
---

# Capture Heterogeneity Models

**Capture heterogeneity models** are the family of closed-population models, M0, Mt, Mb, Mh and their combinations, that let capture probability vary by time, behaviour or individual, and are compared to choose the best description ([[Capture Probability]], [[Behavioral Response to Capture]], [[Model Selection]]). M0 has one p for everyone on every occasion, the [[Null Model|null model]]; Mt lets p vary by occasion, with weather or effort; Mb lets first capture p differ from recapture c; and Mh gives each individual its own p, from size, boldness or [[Home Range|home range]] position. Combinations include Mtb, Mth, Mbh and Mtbh.

Mh is the hardest to fit and causes the most bias: heterogeneity biases N̂ low, because easy-to-catch animals dominate the recaptures and make the population look smaller. Compare the models with AIC; Powell and Gale (Ch8) note that Otis et al.'s (1978) habit of comparing several models helped lead ecology toward AIC-based model selection ([[AIC]]). In the code below model M0 is fitted by [[Maximum Likelihood Estimation|maximum likelihood]] to five occasions of a population of 120 with p = 0.25: 95 animals were caught, and the model estimates N̂ = 119.4 and p̂ = 0.27.

They are covered in [[Powell and Gale 2015]] Ch8 and the course site ([[Course Website]], [[Huggins Closed Capture Model]], [[Program MARK]]). More capture occasions do not remove heterogeneity bias; they help, but Mh still needs its own model.

```r
set.seed(2); N <- 120; K <- 5; Y <- matrix(rbinom(N * K, 1, 0.25), N, K); Y <- Y[rowSums(Y) > 0, ]
r <- nrow(Y); tot <- sum(Y)   # model M0: one p, unknown N
nll <- function(b) { Nh <- r + exp(b[1]); pp <- plogis(b[2]); -(lgamma(Nh + 1) - lgamma(Nh - r + 1) + tot * log(pp) + (Nh * K - tot) * log(1 - pp)) }
f <- optim(c(log(20), 0), nll); round(c(caught = r, N_hat = r + exp(f$par[1]), p_hat = plogis(f$par[2])), 2)
```

## Connections
- **Builds on:** [[Capture Probability]], [[Model Selection]], [[Null Model]], [[Maximum Likelihood Estimation]]
- **Leads to:** [[Huggins Closed Capture Model]], [[Program MARK]], [[AIC]], [[Home Range]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

What do M0, Mt, Mb and Mh assume about capture probability?
??
Constant; varies by time; differs after first capture; varies among individuals.
++++

Which way does individual heterogeneity bias N̂?
??
Low, because easily caught animals dominate recaptures.
++++
