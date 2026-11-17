---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The lognormal distribution describes a positive quantity whose logarithm is normally distributed, giving a right-skewed shape with a long upper tail."
aliases:
  - "Log-normal"
  - "dlnorm()"
status: seedling
---

# Lognormal Distribution

Incomes are lopsided: most people earn modest amounts, a few earn enormous ones, and nobody earns less than zero. Take the log of every income and the lopsided pile becomes a tidy bell. The **lognormal distribution** describes a positive quantity whose logarithm is normally distributed ([[Natural Logarithm]], [[Normal Distribution]]). If log(Y) ~ Normal(μ, σ), then Y is lognormal: it lives on positive numbers only and is right-skewed, more so the larger σ is.

Its parameters live on the log scale, which causes the usual mistake. μ ("meanlog" in R) is the mean of log Y, not of Y. The median of Y is exp(μ), and the mean of Y is exp(μ + σ²/2), pulled above the median by the long upper tail. With meanlog 2 and sdlog 0.6, the median is exp(2) = 7.4 and the mean is exp(2.18) = 8.8; the code below confirms both by simulation and recovers 2 and 0.6 as the mean and SD of the logs. The figure shows the same data skewed on the raw scale and symmetric after taking logs.

It arises the way the normal does, but with multiplication: multiply many small independent factors together, such as growth each day or survival at each stage, and the product is lognormal, because the log of a product is a sum of logs. The last line of the code shows it, with products of 30 random growth factors whose logs form a bell. Its standard deviation grows in proportion to its mean, a constant coefficient of variation. Ecologists use it for body sizes, concentrations, continuous abundances and multiplicative process error, and Hobbs and Hooten favour it for positive continuous quantities ([[Hobbs and Hooten 2015 Ch3]], [[Multiplicative Effects]]). It is the distributional form of a [[Log Transformation]], and going back to the original scale needs care ([[Back-transformation]]). The [[Gamma Distribution]] is the other common choice for positive skewed data.

![[Lognormal distribution.png|700]]
*What to look at:* skewed on the raw scale, symmetric after taking logs.

```r
set.seed(2); y <- rlnorm(1e5, meanlog = 2, sdlog = 0.6)
c(median(y), exp(2)); c(mean(y), exp(2 + 0.6^2 / 2))        # median 7.4, mean 8.8
c(mean(log(y)), sd(log(y)))                                 # the log-scale parameters: 2 and 0.6
prod_growth <- replicate(1e4, prod(runif(30, 0.8, 1.25))); hist(log(prod_growth))   # products of many factors: log is bell shaped
```

## Connections
- **Builds on:** [[Normal Distribution]], [[Natural Logarithm]]
- **Leads to:** [[Log Transformation]], [[Back-transformation]], [[Gamma Distribution]], [[Multiplicative Effects]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

When is Y lognormally distributed?
??
When log(Y) is normally distributed.
![[Lognormal distribution.png]]
++++

What are the median and mean of a lognormal with parameters μ and σ?
??
Median exp(μ). Mean exp(μ + σ²/2).
++++

What process produces lognormal variation?
??
Multiplying many independent positive factors.
++++
