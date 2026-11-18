---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The Student t distribution looks like a normal curve with heavier tails, and it describes an estimate divided by its estimated standard error when the sample is small."
aliases:
  - "t distribution"
  - "dt()"
  - "Student's t"
status: seedling
---

# Student t Distribution

Suppose you measure with a ruler you had to make yourself. If you knew the true [[Standard Deviation|standard deviation]], a [[Standardizing|standardised]] estimate would follow the normal curve; but you estimated it from the same small sample, so your ruler wobbles, and extreme-looking results happen more often. The **Student t distribution** accounts for that wobble. It looks like a normal curve, symmetric about zero, with heavier tails, and it describes an estimate divided by its *estimated* [[Standard Error]]. It has one [[Distribution Parameters|shape parameter]], the [[Degrees of Freedom]] (df): the smaller df, the heavier the tails, and as df grows it becomes the [[Standard Normal Distribution]], as the figure shows.

In regression, df is n minus the number of coefficients estimated. The 95% multiplier for an interval is `qt(0.975, df)`, which is larger than 1.96 for small samples: 4.30 with 2 df, 2.57 with 5, 2.23 with 10, 2.04 with 30, and 1.96 once df is large. The same statistic of 2.5 gives p = 0.037 under t with 8 df, but 0.012 if you wrongly use the normal. The simulation in the code below takes samples of 5 from a normal with true mean 0: using 1.96 as the cut-off rejects about 12% of the time, while the t cut-off gives the intended 5%.

It has two uses. It underlies the tests and intervals for every [[Regression Coefficient|coefficient]] in a [[Linear Model|linear model]]: the `t value` column of `summary(lm())` refers to it ([[Zuur et al. 2009 Ch2]], [[t-test]], [[Confidence Interval]]). And with a location and scale added, its heavy tails make it a robust [[Error Distribution (Family)|error distribution]] that tolerates [[Outlier|outliers]] ([[Robust Regression]]) and a useful prior; brms uses Student t with 3 df for some default priors, and the half-Cauchy is a t with 1 df folded at zero ([[Half-Cauchy Prior]]). So it is not only for t-tests.

![[Student t vs normal.png|700]]
*What to look at:* more area in the tails for small df, converging on the normal as df rises.

```r
qt(0.975, c(2, 5, 10, 30, 1000))               # 4.30, 2.57, 2.23, 2.04, 1.96
2 * (1 - pt(2.5, 8)); 2 * (1 - pnorm(2.5))     # same statistic: p = 0.037 under t(8), 0.012 under normal
set.seed(7); tstat <- replicate(2e4, { y <- rnorm(5); mean(y) / (sd(y) / sqrt(5)) })
mean(abs(tstat) > 1.96); mean(abs(tstat) > qt(0.975, 4))    # using 1.96 rejects too often (about 12%). The t cut-off gives 5%
```

## Connections
- **Builds on:** [[Standard Normal Distribution]], [[Degrees of Freedom]], [[Standard Deviation]], [[Standardizing]], [[Distribution Parameters]], [[Outlier]]
- **Leads to:** [[t-test]], [[Confidence Interval]], [[Robust Regression]], [[Half-Cauchy Prior]], [[Regression Coefficient]], [[Linear Model]], [[Error Distribution (Family)]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

How does the t distribution differ from the standard normal?
??
It has heavier tails, more so with fewer degrees of freedom.
![[Student t vs normal.png]]
++++

Why is the t used for coefficient tests in linear models?
??
The standard error is estimated from the data, adding uncertainty that the heavier tails account for.
++++

What does the t distribution approach as df increases?
??
The standard normal.
++++
