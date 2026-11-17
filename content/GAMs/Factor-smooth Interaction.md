---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
aliases:
  - "bs = \"fs\""
  - "Factor smooth"
  - "Factor-smooth interaction (fs)"
  - "s(x, f, bs = \"fs\")"
status: seedling
---

# Factor-smooth Interaction

**In one line:** a factor-smooth interaction fits a smooth for each level of a factor that all share one smoothing parameter and are penalised toward zero, behaving like random smooth curves.

> [!info] Before this, it helps to know
> [[Smoothing Function s()]] · [[Random Slope]] (its linear analogue)

## Start from zero
1. **`s(x, f, bs = "fs", m = 2)`.**
2. **One λ shared by all levels:** curves have similar wiggliness.
3. **Includes group-level intercepts and slopes** (the penalty null space is also penalised), so no separate random intercept is needed.
4. **Efficient for many levels,** each with modest data.
5. **This is the group-level term in Pedersen's model GS** (with a global smooth) and model S (without).
6. **Like a random slope model, but with whole curves.**

## In R
```r
library(mgcv); CO2$Plant_uo <- factor(CO2$Plant, ordered = FALSE)
m <- gam(log(uptake) ~ s(log(conc), k = 5, m = 2) + s(log(conc), Plant_uo, k = 5, bs = "fs", m = 2), data = CO2, method = "REML"); round(summary(m)$s.table[, "edf"], 1)
```

## In the course
[[Pedersen et al. 2019]] (CO2 model GS).

## Common confusions
- **"fs needs a separate random intercept."** It already includes group-level intercepts.

## Explain it back
- How many smoothing parameters does an fs term share across levels?

*Pass test:* you can fit a factor smooth.

## Connections
- **Builds on:** [[Smoothing Function s()]], [[Random Slope]]
- **Leads to:** [[by= Smooths]], [[Group-level Smoothers]], [[Shared Wiggliness]]
- **Part of:** [[MOC - GAMs]], molecular note [[by= Smooths vs Factor Smooths]]

## Flashcards

What does bs = "fs" fit?
??
A smooth per factor level, all sharing one smoothing parameter and penalised toward zero like random effects.
++++
