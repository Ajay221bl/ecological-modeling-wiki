---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
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

**In one line:** partial pooling estimates each group as a compromise between its own data and the average of all groups, leaning toward the average when a group has little or noisy data.

> [!info] Before this, it helps to know
> [[Complete Pooling]] · [[No Pooling]] · [[Random Effect]] (the tool that does it)

## The everyday picture
Rating a restaurant with two reviews against one with two hundred. Two glowing reviews shouldn't put a place above the city's best; you nudge it toward the average until more reviews arrive.

## Start from zero
1. **Group estimate ≈ w × (group's own mean) + (1 − w) × (overall mean).**
2. **For a random-intercept model, w = σ²_b / (σ²_b + σ²/nⱼ).**
3. **More data in a group (larger nⱼ):** w near 1, little pooling.
4. **Groups very similar (small σ²_b):** w near 0, strong pooling.
5. **It is what random effects do automatically,** with the amount of pooling learned from the data.
6. **The result:** better estimates for small groups on average, and sensible predictions for new groups.
7. **Called "borrowing strength"** in Bayesian hierarchical models ([[Hobbs and Hooten 2015 Ch6]]): groups are assumed to come from a common distribution, every group's data inform that distribution, and it then acts as a prior for each group.
8. **Assumption: the groups are exchangeable,** meaning nothing known beforehand marks any of them as different. If something does, add it as a group-level predictor ([[Group-level Model]]).

## See it
![[Partial pooling shrinkage.png|700]]
*What to look at:* arrows are long for sites with 2 or 3 observations and short for sites with 20 or more.

## In R
```r
library(lme4); m <- lmer(Reaction ~ Days + (Days | Subject), data = sleepstudy); L <- lmList(Reaction ~ Days | Subject, data = sleepstudy)
round(c(sd_slopes_no_pooling = sd(coef(L)$Days), sd_slopes_partial_pooling = sd(coef(m)$Subject$Days)), 2)     # partial pooling pulls slopes together
```

## In the course
Shrinkage plot of group intercepts versus per-group fits in the linear mixed models lab ([[Course Website]]). [[Harrison et al. 2018]] ("a principal benefit of fitting something as a random effect").

## Common confusions
- **"Shrinkage distorts the truth."** On average it moves estimates closer to the truth.
- **"Borrowing strength uses the same data twice."** Each observation is used once. It informs its own group directly and the others through the shared distribution.

## Explain it back
- Which groups are shrunk most?

*Pass test:* you can explain and compute the pooling weight.

## Connections
- **Builds on:** [[Complete Pooling]], [[No Pooling]], [[Random Effect]]
- **Leads to:** [[Shrinkage]], [[Conditional Modes]], [[Hierarchical Model]], [[Bias-Variance Trade-off]]
- **Part of:** [[MOC - Mixed Models]], molecular note [[Complete, No and Partial Pooling]]

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
