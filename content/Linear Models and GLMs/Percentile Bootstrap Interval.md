---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Bootstrap confidence interval"
  - "Percentile interval"
  - "Bootstrap CI"
status: seedling
---

# Percentile Bootstrap Interval

**In one line:** a percentile bootstrap interval is a confidence interval read directly from the bootstrap results: for 95%, the values that cut off the lowest and highest 2.5% of the bootstrap estimates.

> [!info] Before this, it helps to know
> [[Bootstrap]] or [[Parametric Bootstrap]] (the source of the values) · [[Quantile]] (how it is read off) · [[Confidence Interval]] (what it is)

## The everyday picture
Lining up a thousand bootstrap estimates from smallest to largest and walking in 25 from each end. What lies between those two markers is the interval.

## Start from zero
1. **Generate B bootstrap estimates** (at least 1,000 for intervals).
2. **Sort them.**
3. **Take the 2.5th and 97.5th percentiles.**
4. **No normality assumed.** The interval is asymmetric if the bootstrap distribution is.
5. **Works for any quantity,** including predictions and functions of parameters.
6. **Weakness:** can be off when the estimator is biased or the bootstrap distribution is very skewed. Corrected versions (BCa) exist.

## In R
```r
set.seed(15); y <- rexp(30, rate = 0.2)
b <- replicate(5000, mean(sample(y, replace = TRUE)))
quantile(b, c(0.025, 0.975)); mean(y) + c(-1.96, 1.96) * sd(y) / sqrt(30)     # percentile interval is shifted right relative to the symmetric one
```

## In the course
One of the three interval types compared for lmer models ([[Course Website]]).

## Common confusions
- **"More bootstrap samples narrow the interval."** They make it more stable, not narrower. Width depends on the data.

## Explain it back
- How do you read a 90% interval from bootstrap estimates?

*Pass test:* you can extract a percentile interval with `quantile()`.

## Connections
- **Builds on:** [[Bootstrap]], [[Quantile]]
- **Leads to:** [[Wald Confidence Interval]], [[Profile Likelihood Confidence Interval]], [[Credible Interval]]
- **Part of:** [[MOC - Likelihood and Estimation]], molecular note [[Wald, Profile and Bootstrap Intervals]]

## Flashcards

How is a 95% percentile bootstrap interval obtained?
??
From the 2.5th and 97.5th percentiles of the bootstrap estimates.
++++
