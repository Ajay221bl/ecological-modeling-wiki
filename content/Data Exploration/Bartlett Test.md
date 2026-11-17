---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "bartlett.test()"
  - "Test of equal variances"
status: seedling
---

# Bartlett Test

**In one line:** Bartlett's test asks whether several groups could all have the same variance.

> [!info] Before this, it helps to know
> [[Homogeneity of Variance]] (the assumption tested) · [[P-value]] (its output) · [[Null Hypothesis]] (equal variances)

## The everyday picture
A referee measuring whether every team's players are equally spread across the pitch. The referee blows the whistle when one team's spread differs from the others by more than chance would allow.

## Start from zero
1. **Null hypothesis:** all group variances are equal.
2. **Compute each group's variance and a pooled variance.**
3. **Combine them into a statistic** that is near zero when the group variances agree.
4. **Compare with a chi-square distribution** with (number of groups − 1) degrees of freedom.
5. **Small p-value:** evidence that variances differ.
6. **Weakness: it is very sensitive to non-normality.** A skewed but equal-variance dataset can trigger it.
7. **Why Zuur prefers plots:** a test's answer depends on sample size. With little data it misses serious differences. With lots it flags trivial ones. A plot shows how big the difference is.

## In R
```r
set.seed(11)
d <- data.frame(g = rep(c("A", "B", "C"), each = 30), y = c(rnorm(30, 10, 1), rnorm(30, 10, 1), rnorm(30, 10, 3)))
tapply(d$y, d$g, var)
bartlett.test(y ~ g, data = d)$p.value        # tiny: variances differ
bartlett.test(y ~ g, data = subset(d, g != "C"))$p.value   # A and B: no evidence of a difference
```

## In the course
Mentioned in [[Zuur et al. 2009 Ch2]], which advises graphical checks over tests.

## Common confusions
- **"A non-significant test proves equal variances."** It may only reflect a small sample.

## Explain it back
- What is the null hypothesis of Bartlett's test?

*Pass test:* you can run the test and say why a plot is still needed.

## Connections
- **Builds on:** [[Homogeneity of Variance]]
- **Leads to:** [[Variance Structures]], [[P-value]], [[Boxplot]]
- **Part of:** [[MOC - Data Exploration]]

## Flashcards

What does Bartlett's test assess?
??
Whether several groups have equal variances.
++++

What is its main weakness?
??
It is sensitive to non-normality, and like all tests its verdict depends on sample size.
++++
