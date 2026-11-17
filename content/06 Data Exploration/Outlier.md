---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "Outliers"
  - "Extreme value"
  - "Unusual observation"
status: seedling
---

# Outlier

**In one line:** an outlier is an observation that lies far from the bulk of the others.

> [!info] Before this, it helps to know
> [[Interquartile Range]] (a yardstick for "far") · [[Mean]] (which outliers drag)

## The everyday picture
One very tall person in a class photo. They might be a teacher who wandered in (a mistake), or the tallest pupil (real and interesting). The photo only tells you to go and ask.

## A tiny example
Tree cover on 8 plots: 5, 8, 9, 11, 12, 14, 15, 95.
- Mean with the last plot: 21.1. Without: 10.6.
- One plot doubled the mean.
- Was 95 a typo for 9.5? A real closed-canopy plot? The number can't say.

## Start from zero
1. **Spot it.** Boxplot or, better, a Cleveland dot plot.
2. **Check for error.** Typo, wrong unit, missing-value code such as 999. Fix errors at the source.
3. **If real, ask whether it belongs.** Is it from the population you mean to study?
4. **Ask how much it matters.** Fit with and without. If the conclusion flips, say so.
5. **Don't delete just for being inconvenient.** *Why:* extremes are often genuine ecology, and removing them makes the model answer a different question.
6. **Prefer a model that expects such values.** Skewed counts are normal for a negative binomial and "outliers" only for a normal distribution.
7. **Outliers in X and in Y differ.** An extreme X can lever the fitted line ([[Leverage]]). An extreme Y far from the line is a large residual.

## See it
![[Outlier influence.png|700]]
*What to look at:* one extreme point pulls the fitted line toward itself.

## Why it is this way
Least squares and means weight points by squared distance, so one extreme value can outvote dozens of ordinary ones. That makes outliers the first thing to look for. But "far from the others" is defined by the distribution you assumed, so many outliers are really a sign that the assumed distribution is wrong.

## In R
```r
tree <- c(5, 8, 9, 11, 12, 14, 15, 95)
c(mean(tree), mean(tree[-8]), median(tree))     # 21.1, 10.6, 11.5
boxplot.stats(tree)$out                         # flagged: 95
set.seed(2); y <- 10 - 0.2 * tree + rnorm(8); y[8] <- 9   # the odd plot also has an odd response
coef(lm(y ~ tree)); coef(lm(y ~ tree, subset = -8))        # slope changes a lot
```
The median barely notices the outlier. The mean and the regression slope do.

## In the course
Step 1 of the protocol. The lab's warning: don't delete outliers first. Consider another distribution, a transformation or more data ([[Course Website]]; [[Zuur et al. 2010]]).

## Common confusions
- **"Outliers are errors."** Some are. Many are real.
- **"The 1.5 × IQR rule identifies outliers to remove."** It identifies points to look at.

## Explain it back
- What three questions do you ask about an outlier?
- Why might changing the distribution make an outlier disappear?

*Pass test:* you can describe a defensible way to handle an extreme value.

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
