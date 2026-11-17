---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "Bartlett's test asks whether several groups could all have the same variance."
aliases:
  - "bartlett.test()"
  - "Test of equal variances"
status: seedling
---

# Bartlett Test

A referee checks whether every team's players are equally spread across the pitch, and blows the whistle when one team's spread differs from the others by more than chance would allow. **Bartlett's test** asks whether several groups could all have the same variance, a formal check of [[Homogeneity of Variance]]. Its [[Null Hypothesis]] is that all group variances are equal. It computes each group's variance and a pooled variance, combines them into a statistic that is near zero when the group variances agree, and compares that with a chi-square distribution with (number of groups − 1) degrees of freedom. A small [[P-value]] is evidence that the variances differ.

In the code below, groups A and B have standard deviation 1 and group C has standard deviation 3. With all three groups the p-value is tiny; with only A and B there is no evidence of a difference. The test has a known weakness: it is very sensitive to non-normality, so a skewed dataset with equal variances can trigger it.

Zuur prefers plots, such as side-by-side [[Boxplot|boxplots]], to tests like this, because a test's answer depends on sample size: with little data it misses serious differences, and with lots it flags trivial ones, while a plot shows how big the difference actually is ([[Zuur et al. 2009 Ch2]]). A non-significant result does not prove the variances are equal; it may only reflect a small sample. When variances do differ, model them ([[Variance Structures]]).

```r
set.seed(11)
d <- data.frame(g = rep(c("A", "B", "C"), each = 30), y = c(rnorm(30, 10, 1), rnorm(30, 10, 1), rnorm(30, 10, 3)))
tapply(d$y, d$g, var)
bartlett.test(y ~ g, data = d)$p.value        # tiny: variances differ
bartlett.test(y ~ g, data = subset(d, g != "C"))$p.value   # A and B: no evidence of a difference
```

## Connections
- **Builds on:** [[Homogeneity of Variance]]
- **Leads to:** [[Variance Structures]], [[P-value]], [[Boxplot]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

What does Bartlett's test assess?
??
Whether several groups have equal variances.
++++

What is its main weakness?
??
It is sensitive to non-normality, and like all tests its verdict depends on sample size.
++++
