---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Multiple comparisons"
  - "Post hoc tests"
  - "Tukey test"
  - "emmeans contrasts"
status: seedling
---

# Pairwise Comparisons

**In one line:** pairwise comparisons estimate the difference between every pair of group means after fitting a model with a multi-level factor.

> [!info] Before this, it helps to know
> [[Reference Level]] (which gives only some of the pairs) · [[ANOVA]] (which says only that some differ) · [[P-value]] (which needs adjusting)

## The everyday picture
A round-robin after the group stage. The ANOVA told you the teams aren't all equal. Now each plays each to find who differs from whom.

## Start from zero
1. **A factor with K levels has K(K − 1)/2 pairs.** The model's coefficients show only the K − 1 comparisons with the reference.
2. **Compute the rest from the fitted model.** `emmeans(m, pairwise ~ factor)`.
3. **Many comparisons inflate false positives.** With 10 tests at 0.05, the chance of at least one false alarm is about 40%.
4. **Adjust.** Tukey's method widens the intervals to keep the family-wide error rate at 5%.
5. **Report differences with intervals,** not letters and stars alone.

## In R
```r
library(emmeans)
d <- data.frame(hab = factor(rep(c("forest", "grass", "wetland"), each = 6)), y = c(6, 8, 7, 9, 7, 8, 10, 12, 11, 13, 11, 12, 11, 13, 12, 14, 12, 13))
m <- lm(y ~ hab, d); emmeans(m, pairwise ~ hab)$contrasts
1 - 0.95^10
```

## Common confusions
- **"Run every pairwise t-test separately."** That ignores the multiplicity and the pooled variance.

## Explain it back
- Why adjust p-values for multiple comparisons?

*Pass test:* you can get all pairwise differences from one model.

## Connections
- **Builds on:** [[Reference Level]], [[ANOVA]]
- **Leads to:** [[Type I Error]], [[Statistical Significance]]
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
