---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Gaussian distribution"
  - "Bell curve"
  - "Gaussian"
  - "dnorm()"
status: seedling
---

# Normal Distribution

**In one line:** the normal distribution is the symmetric bell-shaped distribution for continuous values, fixed by its mean (the centre) and its standard deviation (the width).

> [!info] Before this, it helps to know
> [[Probability Density Function]] (it is one) · [[Mean]] and [[Standard Deviation]] (its two parameters)

## The everyday picture
Heights of adults in a crowd. Most are near the average. Fewer are a bit taller or shorter. Very few are extremely tall or short, and the falling-off is the same on both sides.

## A tiny example
Wing length ~ Normal(mean 60 mm, SD 2 mm).
- About 68% of birds are between 58 and 62.
- About 95% between 56 and 64.
- About 99.7% between 54 and 66.

## Start from zero
1. **Two parameters:** mean μ sets the centre, SD σ sets the width.
2. **Symmetric:** mean = median = mode.
3. **Support:** every real number, negative ones included.
4. **The 68-95-99.7 rule:** those shares fall within 1, 2 and 3 SDs of the mean.
5. **Mean and variance are separate dials.** *This sets it apart:* in most other distributions the variance is tied to the mean.
6. **Why it is everywhere:** sums of many small independent effects are approximately normal (central limit theorem).
7. **In models:** it is the error distribution of linear regression, the distribution of random effects, a common prior, and the large-sample shape of most estimators.
8. **When it is wrong:** counts, proportions, strictly positive skewed data, anything bounded.

## See it
![[Normal distribution rule.png|700]]
*What to look at:* the bands at 1, 2 and 3 standard deviations and the share of area in each.

## In R
```r
pnorm(62, 60, 2) - pnorm(58, 60, 2)       # 0.683
pnorm(64, 60, 2) - pnorm(56, 60, 2)       # 0.954
qnorm(c(0.025, 0.975), 60, 2)             # middle 95%: 56.1 to 63.9
set.seed(1); y <- rnorm(1e4, 60, 2); c(mean(y), sd(y), mean(y < 0))
```

## In the course
First distribution in the "Data-generating distributions" lab ([[Course Website]]). [[Zuur et al. 2009 Ch2]], [[Hobbs and Hooten 2015 Ch3]].

## Common confusions
- **"Normal means usual or correct."** It is just a name. Most ecological responses are not normal.
- **"`rnorm(n, 10, 4)` has variance 4."** The third argument is the SD. Variance is 16.

## Explain it back
- State the 68-95-99.7 rule.
- Why is the normal a poor choice for small counts?

*Pass test:* you can sketch a normal from its mean and SD and state the coverage rule.

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
