---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
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

**In one line:** a credible interval is a range that contains a stated share, such as 95%, of the posterior probability for a parameter.

> [!info] Before this, it helps to know
> [[Posterior Distribution]] (what it is cut from) · [[Quantile]] (how it is usually computed) · [[Confidence Interval]] (its frequentist counterpart)

## The everyday picture
"I'm 95% sure the keys are in one of these three rooms." A direct statement of where you believe the thing is, given what you know.

## A tiny example
Posterior draws of a slope: 2.5% quantile 0.21, 97.5% quantile 0.88. "Given the model and data, there is a 95% probability that the slope lies between 0.21 and 0.88."

## Start from zero
1. **Take the posterior of a parameter.**
2. **Find a range holding 95% of it.**
3. **Meaning:** P(lower < θ < upper | data) = 0.95.
4. **That is what most people wrongly think a confidence interval says.**
5. **Two common constructions:** equal-tailed (cut 2.5% off each end) and highest posterior density (the narrowest range holding 95%).
6. **From draws:** `quantile(draws, c(0.025, 0.975))`.
7. **It is conditional on the model and prior.** A wrong model gives a misleading interval.
8. **95% is a habit.** 89% or 90% intervals are also used, and estimating their ends needs fewer effective draws.
9. **Often numerically close to a confidence interval** when priors are weak and data plentiful. The interpretation still differs.

## See it
![[Credible intervals.png|700]]
*What to look at:* a skewed posterior with the equal-tailed and the highest-density 95% intervals marked. Both hold 95% of the area.

## In R
```r
set.seed(3); draws <- rbeta(10000, 4, 8); quantile(draws, c(0.025, 0.975)); qbeta(c(0.025, 0.975), 4, 8)
mean(draws > 0.109 & draws < 0.610)                                       # the interval holds 95% of the draws
```

## In the course
`l-95% CI` and `u-95% CI` in brms output ([[Course Website]]). [[Hobbs and Hooten 2015 Ch8]].

## Common confusions
- **"Credible and confidence intervals are the same thing."** They answer different questions and need different assumptions.
- **"If the 95% interval excludes zero the effect is significant."** Bayesian analysis has no significance test. Report the probability of the effect's direction or size.

## Explain it back
- State in words what a 95% credible interval means.

*Pass test:* you can compute and interpret a credible interval from draws.

## Connections
- **Builds on:** [[Posterior Distribution]], [[Quantile]]
- **Leads to:** [[Equal-tailed Interval]], [[Highest Posterior Density Interval]], [[Confidence Interval]], [[Probability of Direction]]
- **Part of:** [[MOC - Bayesian Inference]], molecular note [[Confidence vs Credible Interval]]

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
