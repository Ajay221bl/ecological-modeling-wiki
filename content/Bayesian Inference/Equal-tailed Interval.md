---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "ETI"
  - "Quantile interval"
  - "Percentile interval (posterior)"
  - "Central interval"
  - "Equal-tailed credible interval"
status: seedling
---

# Equal-tailed Interval

**In one line:** an equal-tailed interval is a credible interval that leaves the same amount of posterior probability outside each end, such as 2.5% below and 2.5% above.

> [!info] Before this, it helps to know
> [[Credible Interval]] (the general idea) · [[Quantile]] (how it is found)

## The everyday picture
Trimming the same length from both ends of a loaf.

## Start from zero
1. **95% ETI = from the 2.5% quantile to the 97.5% quantile.**
2. **Simple to compute** and the default in brms and Stan.
3. **Stable:** quantiles are easy to estimate from draws.
4. **Invariant to transformation:** the ETI of exp(θ) is exp of the ETI of θ. Convenient for back-transforming.
5. **For symmetric posteriors** it equals the highest density interval.
6. **For strongly skewed posteriors** it can leave out the most probable values near a boundary and include less probable ones in the long tail.

## In R
```r
set.seed(4); d <- rexp(20000, 1); quantile(d, c(0.025, 0.975))            # for this skewed posterior the mode (0) lies outside the equal-tailed interval
exp(quantile(log(d), c(0.025, 0.975)))                                    # transformation-invariant: same interval via the log scale
```

## In the course
[[Hobbs and Hooten 2015 Ch8]].

## Common confusions
- **"The ETI always contains the most probable value."** Not when the posterior piles up against a boundary.

## Explain it back
- Why is the ETI convenient under back-transformation?

*Pass test:* you can compute an ETI and name its weakness.

## Connections
- **Builds on:** [[Credible Interval]], [[Quantile]]
- **Leads to:** [[Highest Posterior Density Interval]], [[Back-transformation]]
- **Part of:** [[MOC - Bayesian Inference]], molecular note [[Equal-tailed vs Highest Density Interval]]

## Flashcards

What is an equal-tailed 95% interval?
??
The interval between the 2.5% and 97.5% posterior quantiles.
++++
