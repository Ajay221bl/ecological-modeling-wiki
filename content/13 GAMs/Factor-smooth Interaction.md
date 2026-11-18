---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "A factor-smooth interaction fits a smooth for each level of a factor that all share one smoothing parameter and are penalised toward zero, behaving like random smooth curves."
aliases:
  - "bs = \"fs\""
  - "Factor smooth"
  - "Factor-smooth interaction (fs)"
  - "s(x, f, bs = \"fs\")"
status: seedling
---

# Factor-smooth Interaction

A **factor-smooth interaction** fits a smooth for each level of a factor, all sharing one [[Smoothing Parameter|smoothing parameter]] and penalised toward zero, so they behave like random smooth curves ([[Smoothing Function s()]]; [[Random Slope]] is its linear analogue). It is written `s(x, f, bs = "fs", m = 2)`. With one λ for all levels the curves have similar wiggliness ([[Shared Wiggliness]]). Because the penalty null space is penalised too, it includes group-level intercepts and slopes, so no separate [[Random Intercept|random intercept]] is needed.

It is efficient for many levels each with modest data, and it is the group-level term in Pedersen's model GS, with a [[Global Smoother]], and model S, without ([[Hierarchical GAM]], [[Group-level Smoothers]]). In the code below the `CO2` uptake data of 12 plants get a global smooth with edf 3.8 and plant-level curves with a combined edf of 36.7.

The example is Pedersen's CO2 model GS ([[Pedersen et al. 2019]]). `fs` doesn't need a separate random intercept; it already includes group-level intercepts.

```r
library(mgcv); CO2$Plant_uo <- factor(CO2$Plant, ordered = FALSE)
m <- gam(log(uptake) ~ s(log(conc), k = 5, m = 2) + s(log(conc), Plant_uo, k = 5, bs = "fs", m = 2), data = CO2, method = "REML"); round(summary(m)$s.table[, "edf"], 1)
```

## Connections
- **Builds on:** [[Smoothing Function s()]], [[Random Slope]], [[Smoothing Parameter]], [[Random Intercept]]
- **Leads to:** [[by= Smooths]], [[Group-level Smoothers]], [[Shared Wiggliness]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]], molecular note [[by= Smooths vs Factor Smooths]]

## Flashcards

What does bs = "fs" fit?
??
A smooth per factor level, all sharing one smoothing parameter and penalised toward zero like random effects.
++++
