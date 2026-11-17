---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The Kruskal-Wallis test asks whether three or more groups differ in their typical value by comparing the ranks of the data rather than the raw numbers, so it does not need normal data."
aliases:
  - "Kruskal-Wallis"
  - "Kruskal-Wallis rank sum test"
  - "kruskal.test()"
  - "Nonparametric ANOVA"
status: seedling
---

# Kruskal-Wallis Test

Line up every pupil from three classes by height, number them 1 to 90 from shortest to tallest, and look at each class's average position in the line. If one class's pupils mostly sit near the end of the line, that class is taller, and you never needed the heights themselves. The **Kruskal-Wallis test** asks whether three or more groups differ in their typical value by comparing the ranks of the data rather than the raw numbers ([[Null Hypothesis Significance Testing]], [[Median]]). Working on ranks makes it "nonparametric": it does not assume the data are normal, and one extreme value can only be the last rank, so it cannot drag the result.

It is the rank-based cousin of one-way ANOVA, used when data are skewed, bounded (like proportions) or have outliers ([[ANOVA|Analysis of Variance]], [[Outlier]]). A significant result says at least one group differs, not which, so it is followed by pairwise comparisons with a correction for multiple tests. In the code below, the share of large trees around sites in three land types (simulated) have medians of 0.78 (wilderness), 0.56 (federal) and 0.24 (other), and the test gives p = 3.8 × 10⁻⁹, a clear difference.

[[Happe et al. 2020]] used it to compare forest composition among wilderness, other federal lands, other lands and fisher detection sites, followed by Dwass, Steel, Critchlow-Fligner pairwise comparisons ([[Fisher Occupancy Case Study]]). Kruskal-Wallis does not compare means, and with groups of different shapes it is not purely a test of medians either; it asks whether values in one group tend to rank higher than in another.

```r
set.seed(14)
large_trees <- c(rbeta(20, 8, 2), rbeta(20, 5, 4), rbeta(20, 2, 5))       # share of large trees per buffer
land <- factor(rep(c("wilderness", "federal", "other"), each = 20))
round(tapply(large_trees, land, median), 2); kruskal.test(large_trees ~ land)
```

## Connections
- **Builds on:** [[Null Hypothesis Significance Testing]], [[Median]]
- **Leads to:** [[ANOVA|Analysis of Variance]], [[Chi-square Test]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

What does the Kruskal-Wallis test compare?
??
Whether three or more groups differ, using the ranks of the data instead of raw values.
++++

What must follow a significant Kruskal-Wallis result?
??
Pairwise comparisons, corrected for multiple tests, to find which groups differ.
++++
