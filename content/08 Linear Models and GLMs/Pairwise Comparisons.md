---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Pairwise comparisons estimate the difference between every pair of group means after fitting a model with a multi-level factor."
aliases:
  - "Multiple comparisons"
  - "Post hoc tests"
  - "Tukey test"
  - "emmeans contrasts"
status: seedling
---

# Pairwise Comparisons

After a league's group stage shows the teams are not all equal, a round-robin finds who differs from whom. **Pairwise comparisons** do this for a fitted model with a multi-level factor: they estimate the difference between every pair of group means. A factor with K levels has K(K − 1)/2 pairs, but the model's coefficients show only the K − 1 comparisons with the [[Reference Level]], and an [[ANOVA]] says only that some means differ. The rest are computed from the fitted model, usually with `emmeans(m, pairwise ~ factor)`.

Many comparisons inflate false positives. With 10 independent tests at the 0.05 level, the chance of at least one false alarm is 1 − 0.95¹⁰ = 0.40 ([[Type I Error]]). So the comparisons are adjusted: Tukey's method widens the intervals to keep the chance of any false alarm across the whole family at 5%. The code below fits three habitats and prints all three Tukey-adjusted differences, with forest clearly below both grass and wetland.

Report the differences with their intervals, not just letters and stars ([[Statistical Significance]]). The common mistake is to run every pairwise [[t-test]] separately, which ignores both the multiplicity and the pooled variance estimate from the model.

```r
library(emmeans)
d <- data.frame(hab = factor(rep(c("forest", "grass", "wetland"), each = 6)), y = c(6, 8, 7, 9, 7, 8, 10, 12, 11, 13, 11, 12, 11, 13, 12, 14, 12, 13))
m <- lm(y ~ hab, d); emmeans(m, pairwise ~ hab)$contrasts
1 - 0.95^10
```

## Connections
- **Builds on:** [[Reference Level]], [[ANOVA]], [[t-test]]
- **Leads to:** [[Type I Error]], [[Statistical Significance]]
- **See also:** [[P-value]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

Why are multiple-comparison adjustments needed?
??
The chance of at least one false positive grows with the number of tests.
++++

Which R package computes pairwise contrasts from a fitted model?
??
emmeans.
++++
