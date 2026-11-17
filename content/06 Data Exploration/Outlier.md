---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "An outlier is an observation that lies far from the bulk of the others."
aliases:
  - "Outliers"
  - "Extreme value"
  - "Unusual observation"
status: seedling
---

# Outlier

One very tall person in a class photo might be a teacher who wandered in, a mistake, or the tallest pupil, real and interesting. The photo only tells you to go and ask. An **outlier** is an observation that lies far from the bulk of the others. How far counts as "far" needs a yardstick, such as the [[Interquartile Range]], and outliers matter because they can drag summaries like the [[Mean]] and fitted lines toward themselves.

An example. Tree cover on 8 plots is 5, 8, 9, 11, 12, 14, 15 and 95%. The mean is 21.1 with the last plot and 10.6 without it, so one plot doubled the mean, while the median, 11.5, barely notices. In the code below, the same odd plot also changes a regression slope a lot when it is dropped. Is 95 a typo for 9.5, or a real closed-canopy plot? The number cannot say. The steps are: spot it, ideally with a [[Cleveland Dot Plot]] or a [[Boxplot]]; check for error (typo, wrong unit, a missing-value code such as 999) and fix errors at the source; if it is real, ask whether it belongs to the population you mean to study; and ask how much it matters by fitting with and without it, reporting if the conclusion flips. Outliers in X and in Y differ: an extreme X value can lever the fitted line toward itself ([[Leverage]]), while an extreme Y far from the line is a large residual, and [[Cook's Distance]] measures how much a single point moves the fit.

Means and least squares weight points by squared distance, so one extreme value can outvote dozens of ordinary ones, which is why outliers are step 1 of the [[Data Exploration Protocol]]. But do not delete a point just for being inconvenient. Extremes are often genuine ecology, and removing them makes the model answer a different question. "Far from the others" is defined by the distribution you assumed, so many outliers are really a sign that the distribution is wrong: a big count is ordinary for a negative binomial and an "outlier" only for a normal. The course lab's advice is to consider another distribution, a transformation or more data before deleting anything ([[Zuur et al. 2010]], [[Course Website]]). The 1.5 × IQR rule flags points to look at, not points to remove.

![[Outlier influence.png|700]]
*What to look at:* one extreme point pulls the fitted line toward itself.

```r
tree <- c(5, 8, 9, 11, 12, 14, 15, 95)
c(mean(tree), mean(tree[-8]), median(tree))     # 21.1, 10.6, 11.5
boxplot.stats(tree)$out                         # flagged: 95
set.seed(2); y <- 10 - 0.2 * tree + rnorm(8); y[8] <- 9   # the odd plot also has an odd response
coef(lm(y ~ tree)); coef(lm(y ~ tree, subset = -8))        # slope changes a lot
```
The median barely notices the outlier. The mean and the regression slope do.

## Connections
- **Builds on:** [[Interquartile Range]], [[Mean]]
- **Leads to:** [[Cleveland Dot Plot]], [[Boxplot]], [[Leverage]], [[Cook's Distance]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

What is an outlier?
??
An observation far from the bulk of the data.
![[Outlier influence.png]]
++++

What should you do before removing an outlier?
??
Check whether it is an error, whether it belongs to the study population, and how much it changes the result.
++++

Why can a different distribution "fix" outliers?
??
Large values that are improbable under a normal distribution are expected under skewed distributions such as the negative binomial.
++++
