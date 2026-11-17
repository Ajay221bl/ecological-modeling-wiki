---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Chi-squared distribution"
  - "χ² distribution"
  - "dchisq()"
status: seedling
---

# Chi-square Distribution

**In one line:** the chi-square distribution is the distribution of a sum of squared standard normal values, and it is the yardstick for sums of squared discrepancies.

> [!info] Before this, it helps to know
> [[Standard Normal Distribution]] (what is squared) · [[Degrees of Freedom]] (how many are summed) · [[Sum of Squares]] (the kind of quantity it measures)

## The everyday picture
Total penalty points in a game where each round's penalty is your miss distance squared. One round gives a small total most of the time. Many rounds give a larger, steadier total. The chi-square with k degrees of freedom is the total after k rounds.

## Start from zero
1. **Take k independent standard normal values.** Square each. Add.
2. **The sum is chi-square with k degrees of freedom.**
3. **Support:** positive numbers.
4. **Mean = k. Variance = 2k.**
5. **Right-skewed,** becoming more symmetric as k grows.
6. **Use 1: likelihood ratio tests.** For nested models, the drop in deviance is approximately chi-square, with df equal to the number of extra parameters.
7. **Use 2: goodness of fit and overdispersion.** A sum of squared Pearson residuals is compared with a chi-square. Because its mean equals its df, *the ratio (sum of squared Pearson residuals) ÷ (residual df) should be near 1*.

## In R
```r
set.seed(8); x <- rowSums(matrix(rnorm(4e5)^2, ncol = 4)); c(mean(x), var(x))    # df 4: mean 4, variance 8
qchisq(0.95, 1:3)                               # critical values: 3.84, 5.99, 7.81
1 - pchisq(6.2, 2)                              # p-value for a deviance drop of 6.2 with 2 extra parameters
```

## In the course
Used for analysis of deviance in [[Zuur et al. 2009 Ch9]] and for the dispersion statistic.

## Common confusions
- **"Chi-square is only for contingency tables."** That test is one application.

## Explain it back
- What is the mean of a chi-square with 10 df?

*Pass test:* you can use `pchisq` to get a p-value for a deviance difference.

## Connections
- **Builds on:** [[Standard Normal Distribution]], [[Degrees of Freedom]]
- **Leads to:** [[Likelihood Ratio Test]], [[Deviance]], [[Overdispersion]], [[F Distribution]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What is a chi-square random variable with k df?
??
The sum of k squared independent standard normal variables.
++++

What is the mean of a chi-square distribution?
??
Its degrees of freedom.
++++

Which test statistic is compared with a chi-square for nested models?
??
The difference in deviance (likelihood ratio statistic).
++++
