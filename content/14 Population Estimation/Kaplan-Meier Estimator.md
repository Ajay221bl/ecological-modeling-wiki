---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "The Kaplan-Meier estimator gives cumulative survival as the product of interval survivals, Ŝ(t) = Π (n_i − d_i) / n_i, where n_i animals are at risk and d_i die in interval i, allowing censoring and changing risk over time."
aliases:
  - "Kaplan-Meier"
  - "Product-limit estimator"
  - "KM curve"
  - "survfit()"
  - "Kaplan-Meier survival curve"
status: seedling
---

# Kaplan-Meier Estimator

Climbing a staircase where each step has its own chance of tripping, your chance of reaching the top is the product of not tripping on each step. The **Kaplan-Meier estimator** gives cumulative survival as the product of interval survivals, Ŝ(t) = Π (nᵢ − dᵢ) / nᵢ, where nᵢ animals are at risk and dᵢ die in interval i, allowing censoring and changing risk over time ([[Product Notation]], [[Censoring]], [[Known-fate Models]]). Kaplan and Meier (1958) wanted survival without assuming constant mortality and with losses. Each interval's survival has the same form as Mayfield's for that interval, and multiplying them gives cumulative survival to any time.

Censored animals leave the risk set after their last check without counting as deaths, and the variance is based on the number of animals, not [[Exposure Days|exposure days]] (Powell and Gale Ch9) ([[Staggered Entry Design]]). The step plot shows when risk is high or low, which Mayfield's constant-rate method cannot ([[Mayfield Nest Survival]]). In the code below 60 animals with a constant daily hazard of 0.05 are followed, 22 of them censored, and `survfit()` estimates survival of 0.69, 0.36 and 0.25 at days 10, 20 and 30 against true values of 0.61, 0.37 and 0.22 ([[Hazard Rate]]).

It is covered in [[Powell and Gale 2015]] Ch9. Kaplan-Meier does not assume constant survival; it lets survival change from interval to interval.

```r
library(survival); set.seed(5); n <- 60; t_death <- rexp(n, 1 / 20); t_cens <- runif(n, 5, 40)
time <- pmin(t_death, t_cens); status <- as.integer(t_death <= t_cens)
km <- survfit(Surv(time, status) ~ 1)
round(rbind(KM = summary(km, times = c(10, 20, 30))$surv, truth = exp(-c(10, 20, 30) / 20)), 2); sum(status == 0)  # censored
```

## Connections
- **Builds on:** [[Product Notation]], [[Censoring]], [[Known-fate Models]], [[Exposure Days]]
- **Leads to:** [[Staggered Entry Design]], [[Hazard Rate]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Mayfield vs Kaplan-Meier]]

## Flashcards

Write the Kaplan-Meier estimator.
??
Ŝ(t) = Π (n_i − d_i) / n_i over intervals up to t.
++++

How does Kaplan-Meier treat censored animals?
??
They leave the risk set after their last check, without being counted as deaths.
++++
