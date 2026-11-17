---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "t distribution"
  - "dt()"
  - "Student's t"
status: seedling
---

# Student t Distribution

**In one line:** the Student t distribution looks like a normal curve with heavier tails, and it describes an estimate divided by its estimated standard error when the sample is small.

> [!info] Before this, it helps to know
> [[Standard Normal Distribution]] (its limit) · [[Degrees of Freedom]] (its parameter) · [[Standard Error]] (the source of the extra uncertainty)

## The everyday picture
Measuring with a ruler you had to make yourself. If you knew the true SD, your standardised estimate would follow the normal curve. But you estimated the SD from the same small sample, so your ruler is a bit unreliable. Extreme-looking results happen more often. The t distribution's fatter tails account for the ruler's wobble.

## Start from zero
1. **One shape parameter: degrees of freedom (df).**
2. **Symmetric about zero,** bell-like.
3. **Heavier tails than the normal.** Smaller df, heavier tails.
4. **As df grows it becomes the standard normal.** By df = 30 the difference is small.
5. **Where df comes from in regression:** n minus the number of coefficients estimated.
6. **Use 1: tests and intervals in linear models.** The 95% multiplier is `qt(0.975, df)`, larger than 1.96. With df = 5 it is 2.57.
7. **Use 2: a robust error distribution or prior.** With location and scale added, its heavy tails tolerate outliers. brms uses Student t(3) defaults for some priors.

## See it
![[Student t vs normal.png|700]]
*What to look at:* more area in the tails for small df, converging on the normal as df rises.

## In R
```r
qt(0.975, c(2, 5, 10, 30, 1000))               # 4.30, 2.57, 2.23, 2.04, 1.96
2 * (1 - pt(2.5, 8)); 2 * (1 - pnorm(2.5))     # same statistic: p = 0.037 under t(8), 0.012 under normal
set.seed(7); tstat <- replicate(2e4, { y <- rnorm(5); mean(y) / (sd(y) / sqrt(5)) })
mean(abs(tstat) > 1.96); mean(abs(tstat) > qt(0.975, 4))    # using 1.96 rejects too often (about 12%). The t cut-off gives 5%
```

## In the course
The `t value` column of `summary(lm())` refers to this distribution ([[Zuur et al. 2009 Ch2]]).

## Common confusions
- **"t is only for t-tests."** It underlies every coefficient test in a linear model and serves as a heavy-tailed prior.

## Explain it back
- Why does the t have heavier tails than the normal?

*Pass test:* you can get a t critical value and say why it exceeds 1.96.

## Connections
- **Builds on:** [[Standard Normal Distribution]], [[Degrees of Freedom]]
- **Leads to:** [[t-test]], [[Confidence Interval]], [[Robust Regression]], [[Half-Cauchy Prior]]
- **Part of:** [[MOC - Probability and Distributions]]

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
