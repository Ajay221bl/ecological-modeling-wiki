---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The bootstrap estimates how much a statistic would vary between samples by repeatedly resampling the observed data with replacement and recomputing the statistic each time."
aliases:
  - "Bootstrapping"
  - "Nonparametric bootstrap"
  - "Resampling"
status: seedling
---

# Bootstrap

You have one bag of 50 marbles drawn from a huge factory bin and want to know how much the share of red marbles varies from bag to bag, but you cannot go back to the factory. So treat your bag as a miniature factory: draw 50 marbles from it, putting each back before drawing the next, note the share of red, and do that a thousand times. The **bootstrap** estimates how much a statistic would vary between samples this way. Treat the sample as a stand-in for the population, draw n observations from it with replacement, compute the statistic on that resample, and repeat 1,000 or more times. The spread of the results approximates the [[Sampling Distribution]], and its SD is the bootstrap [[Standard Error|standard error]]. The figure shows one sample, many resamples and the resulting [[Histogram|histogram]].

It works because resampling from the sample mimics sampling from the population, as far as the sample resembles the population ([[Random Sampling]]). Its great use is that it needs no formula: medians, ratios, differences of predictions from complex models, anything you can compute. In the code below, the median of 40 skewed values gets a bootstrap standard error and a 95% interval from 4,000 resamples ([[Percentile Bootstrap Interval]]); the last line shows that in one resample some rows appear once, some several times and the rest not at all. Sampling with replacement is essential, since without it every resample would be the original sample.

Resample the right unit: with [[Hierarchical Data|grouped data]], resample whole groups, or you destroy the dependence you are trying to respect. It has limits with tiny samples and extreme quantiles, and it cannot fix a biased sample. Bootstrapping does not create more data; it reveals the variability already implied by the sample. Simulating new data from the fitted model instead of resampling rows is the [[Parametric Bootstrap]], used by [[bootMer()]] in the mixed-model labs ([[Zuur et al. 2009 Ch5]], [[Johnson and Omland 2004]], [[Course Website]], [[Cross-validation]]).

![[Bootstrap.png|700]]
*What to look at:* one sample, many resamples, one statistic from each, and the histogram that results.

```r
set.seed(13); y <- rgamma(40, shape = 2, rate = 0.25)
boot_med <- replicate(4000, median(sample(y, replace = TRUE)))
c(median = median(y), boot_se = sd(boot_med)); quantile(boot_med, c(0.025, 0.975))
table(table(sample(1:40, replace = TRUE)))        # in one resample some rows are used once, some several times, and the rest not at all
```

## Connections
- **Builds on:** [[Sampling Distribution]], [[Random Sampling]], [[Standard Error]], [[Histogram]]
- **Leads to:** [[Parametric Bootstrap]], [[Percentile Bootstrap Interval]], [[bootMer()]], [[Cross-validation]], [[Hierarchical Data]]
- **See also:** [[For Loop]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

What is the bootstrap?
??
Resampling the observed data with replacement many times to approximate the sampling distribution of a statistic.
![[Bootstrap.png]]
++++

What is the bootstrap standard error?
??
The standard deviation of the statistic across bootstrap resamples.
++++

With grouped data, what should be resampled?
??
Whole groups, to preserve within-group dependence.
++++
