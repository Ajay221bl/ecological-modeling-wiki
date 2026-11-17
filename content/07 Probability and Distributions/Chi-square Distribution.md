---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The chi-square distribution is the distribution of a sum of squared standard normal values, and it is the yardstick for sums of squared discrepancies."
aliases:
  - "Chi-squared distribution"
  - "χ² distribution"
  - "dchisq()"
status: seedling
---

# Chi-square Distribution

In a game, each round's penalty is your miss distance squared. One round usually gives a small total; many rounds give a larger, steadier total. The **chi-square distribution** with k degrees of freedom is that total: take k independent standard normal values, square each, and add them ([[Standard Normal Distribution]], [[Degrees of Freedom]]). It lives on positive numbers, is right-skewed, and becomes more symmetric as k grows. Its mean is k and its variance 2k; the code below adds 4 squared normals many times and gets a mean of 4 and a variance of 8.

It is the yardstick for sums of squared discrepancies ([[Sum of Squares]]). For two nested models, the drop in [[Deviance]] when you add parameters is approximately chi-square with df equal to the number of extra parameters, which is the [[Likelihood Ratio Test]]. The 5% critical values are 3.84 for 1 df, 5.99 for 2 and 7.81 for 3, and a deviance drop of 6.2 with 2 extra parameters gives p = 0.045.

It also judges fit and [[Overdispersion]]. A sum of squared Pearson residuals is compared with a chi-square, and because a chi-square's mean equals its df, the ratio of that sum to the residual df should be near 1 if the model's variance is right ([[Zuur et al. 2009 Ch9]]). The common confusion is to think chi-square is only for contingency tables; that test is just one application. A ratio of two chi-squares, each divided by its df, is the [[F Distribution]].

```r
set.seed(8); x <- rowSums(matrix(rnorm(4e5)^2, ncol = 4)); c(mean(x), var(x))    # df 4: mean 4, variance 8
qchisq(0.95, 1:3)                               # critical values: 3.84, 5.99, 7.81
1 - pchisq(6.2, 2)                              # p-value for a deviance drop of 6.2 with 2 extra parameters
```

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
