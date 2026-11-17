---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A confidence interval is a range of parameter values computed from the data by a procedure that captures the true value in a stated percentage of repeated studies."
aliases:
  - "CI"
  - "95% confidence interval"
  - "confint()"
  - "Interval estimate"
status: seedling
---

# Confidence Interval

Throw a hoop at a fixed peg. The peg, the true value, does not move; your hoop lands in a different place on every throw. A "95% thrower" is someone whose hoop ends up around the peg in 95 throws out of 100, though on any one throw the peg is either inside the hoop or not. A **confidence interval** is a range of parameter values computed from the data by a procedure that captures the true value in a stated percentage of repeated studies ([[Sampling Distribution]]). The usual recipe is estimate ± multiplier × [[Standard Error]], with a multiplier of about 2: 1.96 for large samples, larger from the t distribution for small ones ([[Quantile Function]]).

For the bird-plot slope of −0.17 with standard error 0.019 and 3 residual df, the multiplier is qt(0.975, 3) = 3.18, so the interval is −0.17 ± 3.18 × 0.019 = (−0.23, −0.11); the code below gets the same from `confint()`. It then repeats a study 5,000 times and finds about 95% of the intervals contain the true mean. The figure shows 50 such intervals, most covering the true value and a few, in orange, missing it. So "95%" describes the procedure, not this particular interval. In practice, values inside the interval are reasonably compatible with the data and values far outside are not. Width shows precision: narrow intervals come from more data, less noise or a wider spread in x.

A 95% interval that excludes zero corresponds to p < 0.05, but the interval is better to report than a p-value because it shows effect size and uncertainty together ([[Powell and Gale 2015 Ch4]], [[Zuur et al. 2009 Appendix A]], [[Course Website]]). Intervals come in several kinds: the quick [[Wald Confidence Interval]], the [[Profile Likelihood Confidence Interval]] and bootstrap intervals. Two confusions. "There is a 95% probability the true value is in this interval" is the meaning of a Bayesian [[Credible Interval]], not a confidence interval. And a confidence interval is about a parameter, not about where 95% of the data lie, which is a [[Prediction Interval]].

![[Confidence interval coverage.png|700]]
*What to look at:* 50 intervals from 50 repeated studies. Most cover the true value. A few, in orange, miss.

```r
d <- data.frame(tree = c(0, 10, 20, 30, 40), rich = c(12, 11, 9, 8, 5)); m <- lm(rich ~ tree, d)
confint(m); coef(m)[2] + c(-1, 1) * qt(0.975, 3) * summary(m)$coefficients[2, 2]
set.seed(11); covered <- replicate(5000, { y <- rnorm(20, 10, 3); ci <- t.test(y)$conf.int; ci[1] < 10 & ci[2] > 10 }); mean(covered)    # about 0.95
```

## Connections
- **Builds on:** [[Sampling Distribution]], [[Standard Error]]
- **Leads to:** [[Wald Confidence Interval]], [[Profile Likelihood Confidence Interval]], [[Credible Interval]], [[Prediction Interval]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]], molecular note [[Confidence vs Credible Interval]]

## Flashcards

What does "95% confidence" mean?
??
95% of intervals constructed this way in repeated studies would contain the true parameter value.
![[Confidence interval coverage.png]]
++++

What is the usual formula for a confidence interval?
??
Estimate ± multiplier × standard error, with a multiplier near 2.
++++

What does it mean if a 95% CI for a slope excludes zero?
??
The slope differs from zero at the 5% significance level.
++++
