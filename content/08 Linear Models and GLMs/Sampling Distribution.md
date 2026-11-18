---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The sampling distribution of an estimate is the distribution of values that estimate would take if the study were repeated many times in the same way."
aliases:
  - "Sampling distribution of an estimator"
  - "Distribution of an estimate"
status: seedling
---

# Sampling Distribution

A hundred research teams each survey 30 plots from the same landscape and each compute a mean. Their hundred means differ, and a [[Histogram|histogram]] of them is the **sampling distribution** of "the mean of 30 plots": the distribution of values an estimate would take if the study were repeated many times in the same way ([[Estimator]], [[Probability Distribution]]). A sample is one random draw from all the samples you could have got, so any statistic computed from it would differ in another sample ([[Sampling Variation]]). Imagine every possible sample, compute the statistic for each, and the distribution of those values is the sampling distribution. The figure shows a population, several samples from it and the histogram of their means.

Its centre shows whether the estimator is biased, its [[Standard Deviation|standard deviation]] is the [[Standard Error]], and its shape is often normal by the [[Central Limit Theorem]]. In the code below the population is strongly skewed with mean 8, yet 5,000 sample means of size 30 centre on 8, form a near-bell shape, and have a standard deviation matching σ/√30.

You only ever see one draw from it, so its width must be inferred: from theory, from the likelihood's curvature ([[Hessian Matrix]]), or by resampling ([[Bootstrap]]). The idea underlies [[Frequentist Inference|frequentist inference]], because [[Confidence Interval|confidence intervals]] and p-values are statements about this imaginary distribution. It is not the distribution of your data; it is the distribution of a statistic across hypothetical repeated samples.

![[Sampling distribution.png|700]]
*What to look at:* the population, several samples from it and the histogram of their means.

```r
set.seed(9); pop <- rgamma(1e5, shape = 2, rate = 0.25)            # a skewed population, mean 8
means <- replicate(5000, mean(sample(pop, 30)))
c(centre = mean(means), se = sd(means), theory = sd(pop) / sqrt(30))
hist(means, breaks = 40)
```

## Connections
- **Builds on:** [[Estimator]], [[Sampling Variation]], [[Histogram]], [[Standard Deviation]]
- **Leads to:** [[Standard Error]], [[Confidence Interval]], [[Bootstrap]], [[Central Limit Theorem]], [[Frequentist Inference]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]], molecular note [[Standard Deviation vs Standard Error]]

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
