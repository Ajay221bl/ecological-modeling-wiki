---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
description: "A quantile is the value below which a chosen fraction of the data falls, such as the value with 25% of observations beneath it."
aliases:
  - "Percentile"
  - "Quartile"
status: seedling
---

# Quantile

On a child's growth chart, "on the 90th percentile for height" means taller than 90 of every 100 children of that age. A **quantile** turns "how big?" into "bigger than what share of the others?": it is the value below which a chosen fraction of the data falls. Stated in percent it is called a *percentile*, so the 0.25 quantile is the 25th percentile. The three quantiles that cut the data into quarters are the *quartiles*: Q1 (0.25), Q2 (0.50, which is the [[Median]]) and Q3 (0.75). A percentile is a value on the data's own scale, such as a mass in grams, not a percentage.

Sorted masses of 9 mice are 14, 15, 16, 18, 19, 21, 22, 25 and 30 g. The median is the 5th value, 19 g. Q1 is the 3rd value, 16 g, and Q3 is the 7th, 22 g, so the middle half of the mice weigh between 16 and 22 g. R finds the position with 1 + (n − 1) × p, which for p = 0.25 gives 1 + 8 × 0.25 = 3, the third value. When the position is not a whole number the quantile falls between two observations, and R takes a weighted mix of them. R actually offers nine slightly different rules (`type = 1` to `9`), which agree for large samples. With small samples, an extreme quantile such as the 90th is only a rough guess between two values.

Quantiles matter because they describe any shape. The mean and [[Standard Deviation|standard deviation]] summarise well only when data are roughly bell-shaped, but "where do chosen fractions of the data sit?" works for lopsided data too. A pair of quantiles makes an interval: the 0.025 and 0.975 quantiles hold the middle 95% of values. That is exactly how intervals are read off thousands of [[Bootstrap|bootstrap]] or [[Posterior Draws|MCMC draws]] ([[Percentile Bootstrap Interval]], [[Credible Interval]]), which is why Bayesian and resampling methods lean on quantiles. Quantiles of named distributions come from functions such as `qnorm(0.975)` = 1.96 ([[Quantile Function]]). Quartiles also build the [[Boxplot]] and the [[Interquartile Range]], and comparing your data's quantiles with a distribution's quantiles is what a [[QQ Plot]] does.

![[Quantiles and IQR.png|700]]
*What to look at:* the quartiles cut the sorted data into four equal-sized groups, whatever the shape.

```r
mass <- c(14, 15, 16, 18, 19, 21, 22, 25, 30)
quantile(mass, c(0.25, 0.5, 0.75))   # 16 19 22
quantile(mass, c(0.025, 0.975))      # ends of the middle 95%
# theoretical quantile: the value below which 97.5% of a standard normal lies
qnorm(0.975)                          # 1.96
```
`quantile()` works on data. `qnorm()` and friends give quantiles of named distributions ([[Quantile Function]]).

## Connections
- **Builds on:** [[Median]], [[Proportion]], [[Standard Deviation]]
- **Leads to:** [[Interquartile Range]], [[Boxplot]], [[QQ Plot]], [[Quantile Function]], [[Bootstrap]], [[Posterior Draws]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]

## Flashcards

What is the 0.25 quantile?
??
The value with 25% of the data below it, also called the first quartile or 25th percentile.
![[Quantiles and IQR.png]]
++++

How do quantiles give a 95% interval from simulated values?
??
Take the 0.025 and 0.975 quantiles. The middle 95% of values lie between them.
++++

Is a percentile a percentage?
??
No. It is a value on the data's own scale below which that percent of observations fall.
++++
