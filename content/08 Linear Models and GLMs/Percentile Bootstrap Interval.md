---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A percentile bootstrap interval is a confidence interval read directly from the bootstrap results: for 95%, the values that cut off the lowest and highest 2.5% of the bootstrap estimates."
aliases:
  - "Bootstrap confidence interval"
  - "Percentile interval"
  - "Bootstrap CI"
status: seedling
---

# Percentile Bootstrap Interval

Line up a thousand bootstrap estimates from smallest to largest and walk in 25 from each end; what lies between the two markers is the interval. A **percentile bootstrap interval** is a confidence interval read directly from the bootstrap results ([[Bootstrap]], [[Parametric Bootstrap]]). Generate at least 1,000 bootstrap estimates, sort them, and take the 2.5th and 97.5th percentiles for a 95% interval ([[Quantile]], [[Confidence Interval]]).

No normality is assumed, so the interval is asymmetric whenever the bootstrap distribution is, and it works for any quantity, including predictions and functions of parameters. In the code below, the mean of 30 strongly skewed values gets a percentile interval that is shifted to the right of the symmetric estimate ± 1.96 SE, following the skew.

Its weakness is that it can be off when the estimator is biased or the bootstrap distribution very skewed; corrected versions such as BCa exist. It is one of the three interval types compared for lmer models, alongside the [[Wald Confidence Interval]] and the [[Profile Likelihood Confidence Interval]] ([[Course Website]]). More bootstrap samples make it more stable, not narrower; its width depends on the data. Its Bayesian counterpart, read the same way from posterior draws, is the equal-tailed [[Credible Interval]].

```r
set.seed(15); y <- rexp(30, rate = 0.2)
b <- replicate(5000, mean(sample(y, replace = TRUE)))
quantile(b, c(0.025, 0.975)); mean(y) + c(-1.96, 1.96) * sd(y) / sqrt(30)     # percentile interval is shifted right relative to the symmetric one
```

## Connections
- **Builds on:** [[Bootstrap]], [[Quantile]]
- **Leads to:** [[Wald Confidence Interval]], [[Profile Likelihood Confidence Interval]], [[Credible Interval]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]], molecular note [[Wald, Profile and Bootstrap Intervals]]

## Flashcards

How is a 95% percentile bootstrap interval obtained?
??
From the 2.5th and 97.5th percentiles of the bootstrap estimates.
++++
