---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "Partial pooling estimates each group as a compromise between its own data and the average of all groups, leaning toward the average when a group has little or noisy data."
aliases:
  - "Partial pooling model"
  - "Adaptive pooling"
  - "Compromise estimate"
  - "Borrowing Strength"
  - "Borrowing information"
  - "Sharing information across groups"
  - "Borrowing strength across groups"
status: seedling
---

# Partial Pooling

A restaurant with two glowing reviews shouldn't rank above the city's best; you nudge its rating toward the average until more reviews arrive. **Partial pooling** estimates each group as a compromise between its own data and the average of all groups, leaning toward the average when a group has little or noisy data ([[Complete Pooling]], [[No Pooling]]). Roughly, group estimate ≈ w × (group's own mean) + (1 − w) × (overall mean), with w = σ²_b / (σ²_b + σ²/nⱼ) for a random-intercept model. More data in a group, larger nⱼ, put w near 1 and pool little; very similar groups, small σ²_b, put w near 0 and pool strongly.

It is what a [[Random Effect]] does automatically, with the amount of pooling learned from the data, giving better estimates for small groups on average and sensible predictions for new groups ([[Shrinkage]]). In the figure, arrows are long for sites with 2 or 3 observations and short for sites with 20 or more. In the code below the `sleepstudy` slopes vary with an SD of 6.6 when fitted separately and 5.5 under partial pooling: the [[Mixed Effects Model|mixed model]] pulls them together.

In Bayesian hierarchical models this is called "borrowing strength": groups come from a common distribution, every group's data inform that distribution, and it then acts as a prior for each group ([[Hobbs and Hooten 2015 Ch6]]). It assumes the groups are exchangeable, nothing known beforehand marking any of them as different; if something does, add it as a group-level [[Predictor Variable|predictor]] ([[Group-level Model]]). The lab plots group intercepts against per-group fits, and [[Harrison et al. 2018]] call it "a principal benefit of fitting something as a random effect" ([[Course Website]]). Shrinkage does not distort the truth; on average it moves estimates closer to it. And borrowing strength does not use the same data twice: each observation informs its own group directly and the others through the shared distribution.

![[Partial pooling shrinkage.png|700]]
*What to look at:* arrows are long for sites with 2 or 3 observations and short for sites with 20 or more.

```r
library(lme4); m <- lmer(Reaction ~ Days + (Days | Subject), data = sleepstudy); L <- lmList(Reaction ~ Days | Subject, data = sleepstudy)
round(c(sd_slopes_no_pooling = sd(coef(L)$Days), sd_slopes_partial_pooling = sd(coef(m)$Subject$Days)), 2)     # partial pooling pulls slopes together
```

## Connections
- **Builds on:** [[Complete Pooling]], [[No Pooling]], [[Random Effect]], [[Mixed Effects Model]], [[Predictor Variable]]
- **Leads to:** [[Shrinkage]], [[Conditional Modes]], [[Hierarchical Model]], [[Bias-Variance Trade-off]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]], molecular note [[Complete, No and Partial Pooling]]

## Flashcards

What is partial pooling?
??
Estimating each group as a weighted compromise between its own data and the overall mean.
![[Partial pooling shrinkage.png]]
++++

Which groups are pulled most toward the mean under partial pooling?
??
Groups with few or noisy observations.
++++
