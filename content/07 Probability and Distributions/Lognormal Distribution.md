---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Log-normal"
  - "dlnorm()"
status: seedling
---

# Lognormal Distribution

**In one line:** the lognormal distribution describes a positive quantity whose logarithm is normally distributed, giving a right-skewed shape with a long upper tail.

> [!info] Before this, it helps to know
> [[Normal Distribution]] (on the log scale) · [[Natural Logarithm]] (the link between scales) · [[Log Transformation]] (the same idea applied to data)

## The everyday picture
Incomes. Most people earn modest amounts, a few earn enormous ones, and nobody earns less than zero. Take logs and the lopsided pile becomes a tidy bell.

## Start from zero
1. **If log(Y) ~ Normal(μ, σ), then Y is lognormal.**
2. **Support:** positive numbers only.
3. **Right-skewed.** The larger σ, the stronger the skew.
4. **Its parameters live on the log scale.** μ is the mean of log Y, not of Y.
5. **Median of Y = exp(μ). Mean of Y = exp(μ + σ²/2).** The mean is pulled above the median by the long tail.
6. **Why it arises:** multiply many small independent factors together (growth each day, survival each stage) and the product is lognormal, just as sums are normal.
7. **Its SD grows in proportion to its mean:** a constant coefficient of variation.
8. **In models:** body sizes, concentrations, abundances as continuous quantities, multiplicative process error in population models.

## See it
![[Lognormal distribution.png|700]]
*What to look at:* skewed on the raw scale, symmetric after taking logs.

## In R
```r
set.seed(2); y <- rlnorm(1e5, meanlog = 2, sdlog = 0.6)
c(median(y), exp(2)); c(mean(y), exp(2 + 0.6^2 / 2))        # median 7.4, mean 8.8
c(mean(log(y)), sd(log(y)))                                 # the log-scale parameters: 2 and 0.6
prod_growth <- replicate(1e4, prod(runif(30, 0.8, 1.25))); hist(log(prod_growth))   # products of many factors: log is bell shaped
```

## In the course
[[Hobbs and Hooten 2015 Ch3]], which favours it for positive continuous quantities and process models.

## Common confusions
- **"`meanlog` is the log of the mean."** It is the mean of the logs. exp(meanlog) is the median.

## Explain it back
- Why is the mean of a lognormal larger than exp(μ)?

*Pass test:* you can convert lognormal parameters to a median and a mean.

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
