---
type: atomic
tags:
  - basics
  - flashcards/eco/basics
aliases:
  - "Percentile"
  - "Quartile"
status: seedling
---

# Quantile

**In one line:** a quantile is the value below which a chosen fraction of the data falls, such as the value with 25% of observations beneath it.

> [!info] Before this, it helps to know
> [[Median]] (the 50% quantile) · [[Proportion]] (a fraction between 0 and 1)

## The everyday picture
A child's growth chart. "On the 90th percentile for height" means taller than 90 of every 100 children of that age. A quantile turns "how big?" into "bigger than what share of the others?".

*Where the picture stops working:* growth charts come from millions of children. With 10 data points, a 90th percentile is a rough guess between two values.

## Words you'll need
- **Percentile:** a quantile stated in percent. The 25th percentile is the 0.25 quantile.
- **Quartiles:** the 0.25, 0.50 and 0.75 quantiles, called Q1, Q2 (the median) and Q3.
- **Tail:** the extreme low or high end of the data.

## A tiny example
Sorted masses of 9 mice (g): 14, 15, 16, 18, 19, 21, 22, 25, 30.
- Median (0.50 quantile): 5th value = **19**.
- Q1 (0.25 quantile): 3rd value = **16**.
- Q3 (0.75 quantile): 7th value = **22**.
- So the middle half of the mice weigh between 16 and 22 g.

## Start from zero
1. **Sort the data.**
2. **Pick a fraction p.** Say 0.25.
3. **Find the position.** R's default uses 1 + (n − 1) × p = 1 + 8 × 0.25 = 3, the third value.
4. **Interpolate if the position isn't whole.** *Why:* the quantile falls between two observations, so you take a weighted mix.
5. **Pairs of quantiles make intervals.** The 0.025 and 0.975 quantiles hold the middle 95% of values. That is how intervals are read off bootstrap and posterior samples ([[Credible Interval]]).

## See it
![[Quantiles and IQR.png|700]]
*What to look at:* the quartiles cut the sorted data into four equal-sized groups, whatever the shape.

## Why it is this way
The mean and standard deviation summarise well only when data are roughly bell-shaped. Quantiles make no such assumption: they describe any shape by where chosen fractions of the data sit. They are the bridge from a pile of simulated values to an interval, which is why Bayesian and bootstrap methods lean on them.

## In R
```r
mass <- c(14, 15, 16, 18, 19, 21, 22, 25, 30)
quantile(mass, c(0.25, 0.5, 0.75))   # 16 19 22
quantile(mass, c(0.025, 0.975))      # ends of the middle 95%
# theoretical quantile: the value below which 97.5% of a standard normal lies
qnorm(0.975)                          # 1.96
```
`quantile()` works on data. `qnorm()` and friends give quantiles of named distributions ([[Quantile Function]]).

## In the course
Boxplots are drawn from quartiles ([[Boxplot]]). The confidence interval lab takes column quantiles of bootstrap output ([[Percentile Bootstrap Interval]]).

## Common confusions
- **"Percentile means percent."** A percentile is a value of the data (a mass in grams), not a percentage.
- **"There is one formula."** R offers nine slightly different rules (`type = 1` to `9`). They agree for large samples.

## Explain it back
- What does "the 0.9 quantile of rainfall is 80 mm" mean?
- How do two quantiles make a 95% interval?

*Pass test:* you can read quartiles off sorted data and explain an interval as a pair of quantiles.

## Connections
- **Builds on:** [[Median]], [[Proportion]]
- **Leads to:** [[Interquartile Range]], [[Boxplot]], [[QQ Plot]], [[Quantile Function]]
- **Part of:** [[MOC - Basics from Zero]]

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
