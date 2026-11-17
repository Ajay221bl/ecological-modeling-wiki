---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "Data are balanced when every group or combination of groups has the same number of observations."
aliases:
  - "Balanced design"
  - "Unbalanced data"
  - "Balance"
  - "Balanced vs Unbalanced Data"
status: seedling
---

# Balanced Data

A pair of scales with the same number of weights in each pan gives a clean comparison, because neither side has an advantage; load one pan with twenty weights and the other with two, and the result mostly reflects the heavy pan. Data are **balanced** when every group, or every combination of groups, has the same number of observations ([[Categorical Variable]], [[Replication]]). Count them with `table()`. Burned and unburned plots crossed with grazed and ungrazed is balanced with 10 plots in each of the four cells; with 18, 2, 5 and 15 it is unbalanced, because most burned plots are grazed and most unburned ones are not.

Balance is prized in designed experiments because the factors are then uncorrelated with each other, so each effect is estimated separately and with the best precision for the total effort ([[Study Design]]). Unbalanced data make factors partly collinear: in the example, "burned" and "grazed" travel together ([[Collinearity]]). One visible consequence is that sequential sums of squares in `anova()` depend on the order of terms. In the code below, the variation credited to burning is different when it is entered before grazing than after, for the same model. Another is that small cells, such as the 2 burned ungrazed plots, are estimated poorly.

Field data are almost always unbalanced, and that is not a reason they cannot be analysed; interpretation just needs more care. Modern tools cope well: likelihood-based mixed models do not need balance, and they pull poorly sampled groups toward the overall mean ([[Partial Pooling]], [[Mixed Effects Model|Mixed Model]]), which Zuur notes classical repeated-measures ANOVA cannot do ([[Zuur et al. 2009 Ch5]]). Balance means equal group sizes, not equal group means.

```r
set.seed(12)
d <- data.frame(burn = rep(c("b", "u"), c(20, 20)), graze = c(rep(c("g", "n"), c(18, 2)), rep(c("g", "n"), c(5, 15))))
table(d$burn, d$graze)
d$y <- 10 + 2 * (d$burn == "b") + 3 * (d$graze == "g") + rnorm(40)
anova(lm(y ~ burn + graze, d))[1:2, "Sum Sq"]       # burn first
anova(lm(y ~ graze + burn, d))[2:1, "Sum Sq"]       # graze first: different sums of squares for the same terms
```
With unbalanced cells, how much variation each factor "explains" depends on the order you enter them.

## Connections
- **Builds on:** [[Replication]], [[Study Design]]
- **Leads to:** [[Collinearity]], [[Partial Pooling]], [[Mixed Effects Model|Mixed Model]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

What is balanced data?
??
Equal numbers of observations in every group or combination of groups.
++++

What problem does imbalance create?
??
Factors become partly confounded, so effects are harder to separate and sequential tests depend on order.
++++
