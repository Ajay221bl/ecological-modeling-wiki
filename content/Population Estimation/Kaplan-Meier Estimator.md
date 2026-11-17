---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "Kaplan-Meier"
  - "Product-limit estimator"
  - "KM curve"
  - "survfit()"
  - "Kaplan-Meier survival curve"
status: seedling
---

# Kaplan-Meier Estimator

**In one line:** the Kaplan-Meier estimator gives cumulative survival as the product of interval survivals, Ŝ(t) = Π (n_i − d_i) / n_i, where n_i animals are at risk and d_i die in interval i, allowing censoring and changing risk over time.

> [!info] Before this, it helps to know
> [[Product Notation]] · [[Censoring]] · [[Known-fate Models]]

## The everyday picture
Climbing a staircase where each step has its own chance of tripping. Your chance of reaching the top is the product of not tripping on each step.

## Start from zero
1. **Kaplan and Meier (1958)** wanted survival without assuming constant mortality, and with losses (censoring).
2. **Each interval** gets survival (n_i − d_i) / n_i, the same form as Mayfield's for that interval.
3. **Multiply them** to get cumulative survival to any time.
4. **Censored animals leave the risk set** after their last check without counting as deaths.
5. **Variance is based on number of animals,** not exposure days (Powell and Gale Ch9).
6. **The step plot** shows when risk is high or low, which Mayfield's constant-rate method cannot.

## In R
```r
library(survival); set.seed(5); n <- 60; t_death <- rexp(n, 1 / 20); t_cens <- runif(n, 5, 40)
time <- pmin(t_death, t_cens); status <- as.integer(t_death <= t_cens)
km <- survfit(Surv(time, status) ~ 1)
round(rbind(KM = summary(km, times = c(10, 20, 30))$surv, truth = exp(-c(10, 20, 30) / 20)), 2); sum(status == 0)  # censored
```

## In the course
[[Powell and Gale 2015]] Ch9.

## Common confusions
- **"Kaplan-Meier assumes constant survival."** It lets survival change from interval to interval.

## Explain it back
- What happens to a censored animal in the risk set?

*Pass test:* you can compute and read a Kaplan-Meier curve.

## Connections
- **Builds on:** [[Product Notation]], [[Censoring]], [[Known-fate Models]]
- **Leads to:** [[Staggered Entry Design]], [[Hazard Rate]]
- **Part of:** [[MOC - Population Estimation]], molecular note [[Mayfield vs Kaplan-Meier]]

## Flashcards

Write the Kaplan-Meier estimator.
??
Ŝ(t) = Π (n_i − d_i) / n_i over intervals up to t.
++++

How does Kaplan-Meier treat censored animals?
??
They leave the risk set after their last check, without being counted as deaths.
++++
