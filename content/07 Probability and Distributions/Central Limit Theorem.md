---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The central limit theorem says that the average (or sum) of many independent random quantities has a distribution close to normal, whatever distribution the individual quantities have."
aliases:
  - "CLT"
status: seedling
---

# Central Limit Theorem

On a Galton board, balls dropped from the top are knocked left or right by each peg at random. Any single bounce is a coin flip, but the pile at the bottom, the sum of many bounces, forms a bell every time. The **central limit theorem** says that the average, or sum, of many independent random quantities has a distribution close to normal, whatever distribution the individual quantities have, as long as their variance is finite. Take a sample of n independent values, compute its [[Mean]], and imagine repeating that many times: the means form a distribution that is approximately Normal(μ, σ²/n) ([[Normal Distribution]]). The approximation improves as n grows, and strongly skewed originals need larger n.

The bell appears because there are many ways for highs and lows to cancel into a middling average, and few ways for all values to be extreme in the same direction. The figure and code below start from exponential data, which are strongly skewed with mean 1 and [[Standard Deviation|standard deviation]] 1. The means of 10,000 samples of 30 form a near-perfect bell centred on 1, their standard deviation matches σ/√n = 1/√30 = 0.183, the [[Standard Error]], and about 95% of them fall within 1.96 standard errors of 1.

This matters in two ways. It justifies normal-based [[Confidence Interval|confidence intervals]] and tests for means and regression coefficients even when the data are not normal, because those estimates behave like averages ([[Sampling Distribution]]). And it explains why the normal is so common in nature: a trait that is the sum of many small independent influences will be roughly normal ([[Zuur et al. 2009 Ch2]], [[Hobbs and Hooten 2015 Ch3]]). Two confusions. With n above 30 the *data* do not become normal; they keep their shape, and it is the distribution of the sample mean that becomes normal. And the theorem does not rescue any analysis: it concerns means of independent values, and it does not fix dependence or bias. Its simpler partner, about where the average settles, is the [[Law of Large Numbers]].

![[Central limit theorem.png|700]]
*What to look at:* the raw data are strongly skewed, yet the means of samples of 30 are nearly a bell.

```r
set.seed(15)
means <- replicate(10000, mean(rexp(30, rate = 1)))    # exponential data: very skewed, mean 1, SD 1
c(mean(means), sd(means), 1 / sqrt(30))                # SD of the means matches sigma / sqrt(n) = 0.183
hist(means, breaks = 50)                               # bell shaped
mean(abs(means - 1) < 1.96 / sqrt(30))                 # about 95% within 1.96 SE
```

## Connections
- **Builds on:** [[Mean]], [[Normal Distribution]], [[Standard Deviation]]
- **Leads to:** [[Sampling Distribution]], [[Standard Error]], [[Confidence Interval]], [[Law of Large Numbers]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What does the central limit theorem state?
??
The mean of many independent observations is approximately normally distributed, regardless of the observations' own distribution.
![[Central limit theorem.png]]
++++

What are the mean and variance of that approximate normal?
??
Mean μ and variance σ²/n.
++++

What common misreading of the CLT should be avoided?
??
That large samples make the data themselves normal.
++++
