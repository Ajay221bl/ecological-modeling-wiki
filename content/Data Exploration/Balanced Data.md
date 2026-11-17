---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "Balanced design"
  - "Unbalanced data"
  - "Balance"
  - "Balanced vs Unbalanced Data"
status: seedling
---

# Balanced Data

**In one line:** data are balanced when every group or combination of groups has the same number of observations.

> [!info] Before this, it helps to know
> [[Categorical Variable]] (the groups) · [[Replication]] (the count per group) · [[Study Design]] (where balance is decided)

## The everyday picture
A set of scales with the same number of weights in each pan. Comparisons are clean because neither side has an advantage. Load one pan with twenty weights and the other with two, and the result mostly reflects the heavy pan.

## A tiny example
Burned and unburned crossed with grazed and ungrazed.
- Balanced: 10 plots in each of the four cells.
- Unbalanced: 18, 2, 5 and 15. Most burned plots are grazed, most unburned ones aren't.

## Start from zero
1. **Count observations per cell** with `table()`.
2. **Equal counts: balanced.**
3. **Why balance is prized in experiments:** the factors are then uncorrelated with each other, so each effect is estimated separately and with the best precision for the total effort.
4. **Unbalanced data make factors partly collinear.** In the example, "burned" and "grazed" travel together.
5. **Consequences:** the order of terms can change sequential sums of squares in `anova()`, and small cells are estimated poorly.
6. **Field data are almost always unbalanced.**
7. **Modern tools cope.** Likelihood-based mixed models don't need balance, and they shrink poorly sampled groups toward the overall mean.

## In R
```r
set.seed(12)
d <- data.frame(burn = rep(c("b", "u"), c(20, 20)), graze = c(rep(c("g", "n"), c(18, 2)), rep(c("g", "n"), c(5, 15))))
table(d$burn, d$graze)
d$y <- 10 + 2 * (d$burn == "b") + 3 * (d$graze == "g") + rnorm(40)
anova(lm(y ~ burn + graze, d))[1:2, "Sum Sq"]       # burn first
anova(lm(y ~ graze + burn, d))[2:1, "Sum Sq"]       # graze first: different sums of squares for the same terms
```
With unbalanced cells, how much variation each factor "explains" depends on the order you enter them.

## In the course
Zuur notes that mixed models handle unbalanced data that classical repeated-measures ANOVA cannot ([[Zuur et al. 2009 Ch5]]).

## Common confusions
- **"Unbalanced data can't be analysed."** They can. Interpretation needs more care.
- **"Balance means equal group means."** It means equal group sizes.

## Explain it back
- Why does imbalance make sequential ANOVA depend on term order?

*Pass test:* you can check balance with a table and explain what imbalance costs.

## Connections
- **Builds on:** [[Replication]], [[Study Design]]
- **Leads to:** [[Collinearity]], [[Partial Pooling]], [[Mixed Effects Model|Mixed Model]]
- **Part of:** [[MOC - Data Exploration]]

## Flashcards

What is balanced data?
??
Equal numbers of observations in every group or combination of groups.
++++

What problem does imbalance create?
??
Factors become partly confounded, so effects are harder to separate and sequential tests depend on order.
++++
