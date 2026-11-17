---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The normal distribution is the symmetric bell-shaped distribution for continuous values, fixed by its mean (the centre) and its standard deviation (the width)."
aliases:
  - "Gaussian distribution"
  - "Bell curve"
  - "Gaussian"
  - "dnorm()"
status: seedling
---

# Normal Distribution

Look at the heights of adults in a crowd. Most are near the average, fewer are a bit taller or shorter, very few are extremely tall or short, and the falling-off is the same on both sides. The **normal distribution** is that symmetric bell shape for continuous values. It has two parameters: the mean μ, which sets the centre, and the standard deviation σ, which sets the width ([[Mean]], [[Standard Deviation]]). Because it is symmetric, its mean, median and mode are the same value, and its [[Support of a Distribution|support]] is every real number, negatives included. Its curve is a [[Probability Density Function]], so probabilities are areas under it.

A worked example. If wing length follows Normal(mean 60 mm, SD 2 mm), about 68% of birds lie between 58 and 62 mm (within 1 SD), about 95% between 56 and 64 (2 SDs), and about 99.7% between 54 and 66 (3 SDs). That is the 68-95-99.7 rule, shown as bands in the figure; the code below computes 0.683 and 0.954 exactly and finds the middle 95% runs from 56.1 to 63.9 mm. One feature sets the normal apart from most other families: its mean and variance are separate dials, so the spread does not change when the centre moves. In most other distributions the variance is tied to the mean ([[Mean-Variance Relationship]]).

It is everywhere because sums of many small independent effects are approximately normal, the [[Central Limit Theorem]]. That is why it is the error distribution of [[Linear Regression]], the usual distribution of random effects, a common prior, and the large-sample shape of most estimators ([[Zuur et al. 2009 Ch2]], [[Hobbs and Hooten 2015 Ch3]]). It is the wrong choice for counts, proportions, strictly positive skewed data and anything bounded. Two confusions: "normal" does not mean usual or correct, since most ecological responses are not normal; and in `rnorm(n, 10, 4)` the third argument is the standard deviation, so the variance is 16, not 4. On a log scale the normal becomes the [[Lognormal Distribution]], and rescaled to mean 0 and SD 1 it is the [[Standard Normal Distribution]].

![[Normal distribution rule.png|700]]
*What to look at:* the bands at 1, 2 and 3 standard deviations and the share of area in each.

```r
pnorm(62, 60, 2) - pnorm(58, 60, 2)       # 0.683
pnorm(64, 60, 2) - pnorm(56, 60, 2)       # 0.954
qnorm(c(0.025, 0.975), 60, 2)             # middle 95%: 56.1 to 63.9
set.seed(1); y <- rnorm(1e4, 60, 2); c(mean(y), sd(y), mean(y < 0))
```

## Connections
- **Builds on:** [[Mean]], [[Standard Deviation]]
- **Leads to:** [[Standard Normal Distribution]], [[Central Limit Theorem]], [[Linear Regression]], [[Lognormal Distribution]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What are the parameters of the normal distribution?
??
The mean μ (centre) and standard deviation σ (spread).
![[Normal distribution rule.png]]
++++

What share of a normal distribution lies within 1, 2 and 3 SDs of the mean?
??
About 68%, 95% and 99.7%.
++++

What is the support of the normal distribution?
??
All real numbers.
++++
