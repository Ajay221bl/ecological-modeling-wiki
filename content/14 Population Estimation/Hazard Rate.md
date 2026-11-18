---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "The hazard rate is the instantaneous risk of death at a given time for an animal that has survived until then."
aliases:
  - "Hazard"
  - "Hazard function"
  - "Instantaneous mortality rate"
  - "Mortality rate"
  - "Cause-specific hazard"
status: seedling
---

# Hazard Rate

The **hazard rate** is the instantaneous risk of death at a given time for an animal that has survived until then ([[Survival Rate]], [[Kaplan-Meier Estimator]]). Survival over a period comes from accumulating the hazard: S(t) = exp(−∫ h(u) du) ([[Integral]]). A constant hazard h gives exponential survival, S(t) = e^(−ht), and Mayfield's constant daily survival is the discrete version ([[Mayfield Nest Survival]], [[Exponential Distribution]]).

Real hazards change: high in juveniles, low in prime adults and rising in old age. Cox proportional hazards models let [[Predictor Variable|covariates]] multiply the hazard. It is not a probability, so it can exceed 1 per unit time when the time units are long. In the code below a constant hazard of 0.05 per day gives survival of 0.61, 0.37 and 0.22 at days 10, 20 and 30.

It underlies Kaplan and Meier's survival function in [[Powell and Gale 2015]] Ch9. "Hazard rate" is also the name of a distance-sampling detection function, a different idea ([[Detection Function]]). Hazard rate and probability of death are not the same: over a short interval they are close, but in general the hazard is a rate.

```r
h <- 1 / 20; t <- c(10, 20, 30)
round(exp(-h * t), 2)   # survival with constant hazard 0.05 per day
```

## Connections
- **Builds on:** [[Survival Rate]], [[Kaplan-Meier Estimator]], [[Predictor Variable]]
- **Leads to:** [[Exponential Distribution]], [[Detection Function]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

What is a hazard rate?
??
The instantaneous risk of death at time t for an animal alive at t.
++++

What survival curve does a constant hazard h give?
??
S(t) = e^(−ht).
++++
