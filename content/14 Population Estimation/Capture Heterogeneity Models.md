---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
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

**In one line:** capture heterogeneity models are the family of closed-population models (M0, Mt, Mb, Mh and combinations) that let capture probability vary by time, behaviour or individual, and are compared to choose the best description.

> [!info] Before this, it helps to know
> [[Capture Probability]] · [[Behavioral Response to Capture]] · [[Model Selection]]

## Start from zero
1. **M0:** one p for everyone, every occasion (the null model).
2. **Mt:** p varies by occasion (weather, effort).
3. **Mb:** first capture p differs from recapture c (trap response).
4. **Mh:** each individual has its own p (size, boldness, home range position). Hardest to fit; the cause of the most bias.
5. **Combinations** such as Mtb, Mth, Mbh and Mtbh.
6. **Compare them with AIC.** Powell and Gale (Ch8) note that Otis et al.'s (1978) habit of comparing several models helped lead ecology toward AIC-based model selection.
7. **Heterogeneity biases N̂ low:** easy-to-catch animals dominate recaptures, making the population look smaller.

## In R
```r
set.seed(2); N <- 120; K <- 5; Y <- matrix(rbinom(N * K, 1, 0.25), N, K); Y <- Y[rowSums(Y) > 0, ]
r <- nrow(Y); tot <- sum(Y)   # model M0: one p, unknown N
nll <- function(b) { Nh <- r + exp(b[1]); pp <- plogis(b[2]); -(lgamma(Nh + 1) - lgamma(Nh - r + 1) + tot * log(pp) + (Nh * K - tot) * log(1 - pp)) }
f <- optim(c(log(20), 0), nll); round(c(caught = r, N_hat = r + exp(f$par[1]), p_hat = plogis(f$par[2])), 2)
```

## In the course
[[Powell and Gale 2015]] Ch8. Site labs ([[Course Website]]).

## Common confusions
- **"More capture occasions removes heterogeneity bias."** It helps, but Mh still needs its own model.

## Explain it back
- Which model lets each animal have its own p?

*Pass test:* you can describe the Otis models and choose among them.

## Connections
- **Builds on:** [[Capture Probability]], [[Model Selection]]
- **Leads to:** [[Huggins Closed Capture Model]], [[Program MARK]], [[AIC]]
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
