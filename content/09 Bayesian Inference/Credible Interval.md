---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "A credible interval is a range that contains a stated share, such as 95%, of the posterior probability for a parameter."
aliases:
  - "Credible intervals"
  - "Bayesian credible interval"
  - "Posterior interval"
  - "Bayesian interval"
  - "CrI"
  - "Uncertainty interval"
status: seedling
---

# Credible Interval

"I'm 95% sure the keys are in one of these three rooms" is a direct statement of where you believe something is, given what you know. A **credible interval** makes that statement about a parameter: it is a range that contains a stated share, such as 95%, of the [[Posterior Distribution]]. If the posterior draws of a slope have 2.5% quantile 0.21 and 97.5% quantile 0.88, then given the model and data there is a 95% probability that the slope lies between 0.21 and 0.88: P(lower < θ < upper | data) = 0.95. That is what most people wrongly think a [[Confidence Interval]] says.

From draws it is `quantile(draws, c(0.025, 0.975))` ([[Quantile]]). There are two common constructions, shown in the figure: the [[Equal-tailed Interval]], which cuts 2.5% off each end, and the [[Highest Posterior Density Interval]], the narrowest range holding 95%; both hold 95% of the area. In the code below, 10,000 draws from the Beta(4, 8) posterior give an interval of 0.107 to 0.610, matching the exact 0.109 to 0.610, and that interval holds 95% of the draws. 95% is a habit: 89% or 90% intervals are also used and need fewer effective draws to estimate their ends.

It is conditional on the model and prior, so a wrong model gives a misleading interval. With weak priors and plentiful data it is often numerically close to a confidence interval, but the interpretation differs. It appears as `l-95% CI` and `u-95% CI` in brms output ([[Course Website]], [[Hobbs and Hooten 2015 Ch8]]). "If the 95% interval excludes zero the effect is significant" is a confusion: Bayesian analysis has no significance test, so report the [[Probability of Direction]] or the probability of a meaningful size instead.

![[Credible intervals.png|700]]
*What to look at:* a skewed posterior with the equal-tailed and the highest-density 95% intervals marked. Both hold 95% of the area.

```r
set.seed(3); draws <- rbeta(10000, 4, 8); quantile(draws, c(0.025, 0.975)); qbeta(c(0.025, 0.975), 4, 8)
mean(draws > 0.109 & draws < 0.610)                                       # the interval holds 95% of the draws
```

## Connections
- **Builds on:** [[Posterior Distribution]], [[Quantile]]
- **Leads to:** [[Equal-tailed Interval]], [[Highest Posterior Density Interval]], [[Confidence Interval]], [[Probability of Direction]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], molecular note [[Confidence vs Credible Interval]]

## Flashcards

What does a 95% credible interval mean?
??
Given the model and the data, there is a 95% probability that the parameter lies in the interval.
![[Credible intervals.png]]
++++

How is a credible interval obtained from posterior draws?
??
From quantiles of the draws, such as the 2.5% and 97.5% quantiles.
++++
