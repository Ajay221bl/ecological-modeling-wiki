---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Sampling distribution of an estimator"
  - "Distribution of an estimate"
status: seedling
---

# Sampling Distribution

**In one line:** the sampling distribution of an estimate is the distribution of values that estimate would take if the study were repeated many times in the same way.

> [!info] Before this, it helps to know
> [[Estimator]] (the recipe) · [[Sampling Variation]] (why estimates differ) · [[Probability Distribution]] (its form)

## The everyday picture
A hundred research teams each survey 30 plots from the same landscape and each compute a mean. Their hundred means differ. A histogram of those means is the sampling distribution of "the mean of 30 plots".

## Start from zero
1. **A sample is one random draw from all the samples you could have got.**
2. **Any statistic computed from it would differ in another sample.**
3. **Imagine every possible sample. Compute the statistic for each.**
4. **The distribution of those values is the sampling distribution.**
5. **Its centre** shows whether the estimator is biased.
6. **Its standard deviation is the standard error.**
7. **Its shape is often normal** (central limit theorem).
8. **You only ever see one draw from it.** Its width is inferred from theory, from the likelihood's curvature, or by bootstrapping.
9. **Why this idea underlies frequentist inference:** confidence intervals and p-values are statements about this imaginary distribution.

## See it
![[Sampling distribution.png|700]]
*What to look at:* the population, several samples from it and the histogram of their means.

## In R
```r
set.seed(9); pop <- rgamma(1e5, shape = 2, rate = 0.25)            # a skewed population, mean 8
means <- replicate(5000, mean(sample(pop, 30)))
c(centre = mean(means), se = sd(means), theory = sd(pop) / sqrt(30))
hist(means, breaks = 40)
```

## Common confusions
- **"It is the distribution of my data."** It is the distribution of a statistic across hypothetical repeated samples.

## Explain it back
- What is the name for the SD of a sampling distribution?

*Pass test:* you can simulate a sampling distribution and read the standard error from it.

## Connections
- **Builds on:** [[Estimator]], [[Sampling Variation]]
- **Leads to:** [[Standard Error]], [[Confidence Interval]], [[Bootstrap]], [[Central Limit Theorem]]
- **Part of:** [[MOC - Likelihood and Estimation]], molecular note [[Standard Deviation vs Standard Error]]

## Flashcards

What is a sampling distribution?
??
The distribution of a statistic over hypothetical repeated samples from the same population.
![[Sampling distribution.png]]
++++

What is the standard deviation of a sampling distribution called?
??
The standard error.
++++
