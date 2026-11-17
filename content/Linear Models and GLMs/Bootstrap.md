---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Bootstrapping"
  - "Nonparametric bootstrap"
  - "Resampling"
status: seedling
---

# Bootstrap

**In one line:** the bootstrap estimates how much a statistic would vary between samples by repeatedly resampling the observed data with replacement and recomputing the statistic each time.

> [!info] Before this, it helps to know
> [[Sampling Distribution]] (what it approximates) · [[Random Sampling]] (what it imitates) · [[For Loop]] (how it runs)

## The everyday picture
You have one bag of 50 marbles drawn from a huge factory bin, and you want to know how much the share of red marbles varies from bag to bag. You can't go back to the factory. So you treat your bag as a miniature factory: draw 50 marbles from it, putting each back before drawing the next, and note the share of red. Do that a thousand times.

## Start from zero
1. **Treat the sample as a stand-in for the population.**
2. **Draw n observations from it with replacement.** Some appear twice, some not at all.
3. **Compute the statistic** on this resample.
4. **Repeat 1,000 or more times.**
5. **The spread of the results approximates the sampling distribution.** Its SD is the bootstrap standard error.
6. **Why it works:** resampling from the sample mimics sampling from the population, as far as the sample resembles the population.
7. **Why it is useful:** it needs no formula. Medians, ratios, differences of predictions from complex models, anything you can compute.
8. **Resample the right unit.** With grouped data, resample whole groups, or you destroy the dependence you are trying to respect.
9. **Limits:** tiny samples, extreme quantiles, and it cannot fix a biased sample.

## See it
![[Bootstrap.png|700]]
*What to look at:* one sample, many resamples, one statistic from each, and the histogram that results.

## In R
```r
set.seed(13); y <- rgamma(40, shape = 2, rate = 0.25)
boot_med <- replicate(4000, median(sample(y, replace = TRUE)))
c(median = median(y), boot_se = sd(boot_med)); quantile(boot_med, c(0.025, 0.975))
table(table(sample(1:40, replace = TRUE)))        # in one resample some rows are used once, some several times, and the rest not at all
```

## In the course
`bootMer()` in the mixed-model labs ([[Course Website]]). [[Zuur et al. 2009 Ch5]], [[Johnson and Omland 2004]].

## Common confusions
- **"Bootstrapping creates more data."** It creates no new information. It reveals the variability already implied by the sample.
- **"With replacement is optional."** Without replacement every resample would be the original sample.

## Explain it back
- Why must resampling be with replacement?

*Pass test:* you can bootstrap a standard error for any statistic.

## Connections
- **Builds on:** [[Sampling Distribution]], [[Random Sampling]]
- **Leads to:** [[Parametric Bootstrap]], [[Percentile Bootstrap Interval]], [[bootMer()]], [[Cross-validation]]
- **Part of:** [[MOC - Likelihood and Estimation]]

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
