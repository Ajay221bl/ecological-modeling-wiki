---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Analysis of variance compares the means of several groups by asking whether the variation between group means is larger than expected from the variation within groups."
aliases:
  - "Analysis of variance"
  - "One-way ANOVA"
  - "aov()"
  - "anova()"
status: seedling
---

# ANOVA

Compare three classrooms' test scores. If the classes truly differ, the class averages will be far apart compared with how much pupils differ within each class; if the averages are no further apart than the within-class scatter would produce by luck, there is no evidence of a difference. **Analysis of variance** (ANOVA) compares the means of several groups this way. It splits the total variation, the [[Sum of Squares]] of every observation from the grand mean, into two parts: *between* groups (group means around the grand mean) and *within* groups (observations around their group mean). Each is divided by its degrees of freedom to give a mean square, and F = between mean square ÷ within mean square ([[F Distribution]]). F near 1 means group differences are no bigger than noise; a large F is evidence that at least one mean differs.

In the code below, three habitats have four plots each, with means 11.5, 7.5 and 15.5. The between-group sum of squares is 128 on 2 df and the within-group 15 on 9 df, so F = 64 / 1.67 = 38.4, a very large value. The code computes both sums by hand and matches `anova()`, and the figure shows the same split as deviations from the grand mean.

ANOVA is a linear model: `lm(y ~ factor)` and `aov(y ~ factor)` are the same fit, a regression on dummy variables, and ANOVA is one way of summarising it ([[Dummy Coding]], [[F-test]]). It uses variances to compare means; it does not analyse variances as such. It does not say which groups differ or by how much, for which you look at coefficients or contrasts. With several terms, `anova(m)` tests them in sequence, so order matters when data are unbalanced ([[Zuur et al. 2009 Appendix A]]). Extensions are [[Two-way ANOVA]] and [[ANCOVA]], and the same partitioning idea becomes a [[Variance Components|Variance Component]] in mixed models.

![[ANOVA partition.png|700]]
*What to look at:* the same data with deviations measured from the grand mean, then split into between-group and within-group pieces.

```r
d <- data.frame(hab = factor(rep(c("grass", "forest", "wetland"), each = 4)), y = c(10, 12, 11, 13, 6, 8, 7, 9, 15, 17, 14, 16))
m <- lm(y ~ hab, d); anova(m)
ss_between <- sum(4 * (tapply(d$y, d$hab, mean) - mean(d$y))^2); ss_within <- sum(resid(m)^2)
c(ss_between, ss_within, F = (ss_between / 2) / (ss_within / 9))
```

## Connections
- **Builds on:** [[Sum of Squares]], [[Dummy Coding]], [[F Distribution]]
- **Leads to:** [[F-test]], [[Two-way ANOVA]], [[ANCOVA]], [[Variance Components|Variance Component]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

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
