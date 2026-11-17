---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "Hazard"
  - "Hazard function"
  - "Instantaneous mortality rate"
  - "Mortality rate"
  - "Cause-specific hazard"
status: seedling
---

# Hazard Rate

**In one line:** the hazard rate is the instantaneous risk of death at a given time for an animal that has survived until then.

> [!info] Before this, it helps to know
> [[Survival Rate]] · [[Kaplan-Meier Estimator]]

## Start from zero
1. **Survival over a period** comes from accumulating the hazard: S(t) = exp(−∫ h(u) du).
2. **Constant hazard h** gives exponential survival, S(t) = e^(−ht). Mayfield's constant daily survival is the discrete version.
3. **Changing hazard:** high in juveniles, low in prime adults, rising in old age.
4. **Cox proportional hazards models** let covariates multiply the hazard.
5. **Not a probability:** it can exceed 1 per unit time when time units are long.
6. **Also the name of a detection function** in distance sampling (a different idea).

## In R
```r
h <- 1 / 20; t <- c(10, 20, 30)
round(exp(-h * t), 2)   # survival with constant hazard 0.05 per day
```

## In the course
[[Powell and Gale 2015]] Ch9 (Kaplan and Meier's survival function).

## Common confusions
- **"Hazard rate and probability of death are the same."** Over a short interval they are close; in general the hazard is a rate.

## Explain it back
- What survival curve does a constant hazard give?

*Pass test:* you can link hazard and survival.

## Connections
- **Builds on:** [[Survival Rate]], [[Kaplan-Meier Estimator]]
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
