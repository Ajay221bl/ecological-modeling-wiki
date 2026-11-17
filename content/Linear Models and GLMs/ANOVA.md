---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Analysis of variance"
  - "One-way ANOVA"
  - "aov()"
  - "anova()"
status: seedling
---

# ANOVA

**In one line:** analysis of variance compares the means of several groups by asking whether the variation between group means is larger than expected from the variation within groups.

> [!info] Before this, it helps to know
> [[Sum of Squares]] (what is split) · [[Dummy Coding]] (ANOVA is a regression on dummies) · [[F Distribution]] (the yardstick)

## The everyday picture
Three classrooms' test scores. If the classes truly differ, the class averages will be far apart compared with how much pupils differ inside each class. If the averages are no further apart than the within-class scatter would produce by luck, there is no evidence of a difference.

## A tiny example
Three habitats, means 11, 7, 16, each from 2 plots with small scatter. Between-group variation is large, within-group small, so F is large.

## Start from zero
1. **Total variation:** sum of squared deviations of every observation from the grand mean.
2. **Split it in two:** between groups (group means around the grand mean) and within groups (observations around their group mean).
3. **Divide each by its degrees of freedom** to get mean squares.
4. **F = between mean square ÷ within mean square.**
5. **F near 1:** group differences are no bigger than noise. **F large:** evidence that at least one mean differs.
6. **It is a linear model.** `lm(y ~ factor)` and `aov(y ~ factor)` are the same fit. ANOVA is one way of summarising it.
7. **It doesn't say which groups differ or by how much.** Look at the coefficients or contrasts for that.
8. **In R, `anova(m)` on a model with several terms tests them in sequence.** Order matters when data are unbalanced.

## See it
![[ANOVA partition.png|700]]
*What to look at:* the same data with deviations measured from the grand mean, then split into between-group and within-group pieces.

## In R
```r
d <- data.frame(hab = factor(rep(c("grass", "forest", "wetland"), each = 4)), y = c(10, 12, 11, 13, 6, 8, 7, 9, 15, 17, 14, 16))
m <- lm(y ~ hab, d); anova(m)
ss_between <- sum(4 * (tapply(d$y, d$hab, mean) - mean(d$y))^2); ss_within <- sum(resid(m)^2)
c(ss_between, ss_within, F = (ss_between / 2) / (ss_within / 9))
```

## In the course
[[Zuur et al. 2009 Appendix A]]. Homework 1 uses a two-factor version ([[Course Website]]).

## Common confusions
- **"ANOVA and regression are different methods."** ANOVA is regression with categorical predictors.
- **"ANOVA analyses variances."** It uses variances to compare means.

## Explain it back
- What two sources of variation does the F ratio compare?

*Pass test:* you can explain the F ratio and show that ANOVA is a linear model.

## Connections
- **Builds on:** [[Sum of Squares]], [[Dummy Coding]], [[F Distribution]]
- **Leads to:** [[F-test]], [[Two-way ANOVA]], [[ANCOVA]], [[Variance Components|Variance Component]]
- **Part of:** [[MOC - Linear Models and GLMs]]

## Flashcards

What does one-way ANOVA test?
??
Whether the means of several groups are all equal.
![[ANOVA partition.png]]
++++

How is the F statistic in ANOVA formed?
??
Between-group mean square divided by within-group mean square.
++++

How is ANOVA related to regression?
??
It is a linear model with categorical predictors.
++++
