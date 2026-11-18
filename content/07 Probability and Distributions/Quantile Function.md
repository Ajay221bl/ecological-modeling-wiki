---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The quantile function answers the reverse question to the CDF: given a probability, which value has that much probability below it?"
aliases:
  - "Inverse CDF"
  - "qnorm()"
  - "Percent point function"
status: seedling
---

# Quantile Function

At a clinic, the CDF question is "my child is 110 cm, what percentile is that?" and the quantile question is "what height is the 90th percentile?". The **quantile function** answers the reverse question to the [[Cumulative Distribution Function]]: given a probability p, which value y has P(Y ≤ y) = p? It undoes the CDF, so `qnorm(pnorm(y))` gives back y. In R the quantile functions are the `q` functions. For heights with mean 170 cm and [[Standard Deviation|standard deviation]] 10, `qnorm(0.9, 170, 10)` is 182.8 cm, the 90th percentile ([[Quantile]]).

Three everyday tools come from it. Intervals: the middle 95% of a distribution lies between its 0.025 and 0.975 quantiles, which is how many [[Confidence Interval|confidence]] and [[Credible Interval|credible]] intervals are read off. Critical values: the famous 1.96 is `qnorm(0.975)`, the value with 97.5% of a [[Standard Normal Distribution|standard normal]] below it, so ±1.96 encloses the middle 95%. And random numbers: feed uniform random numbers between 0 and 1 through a quantile function and out come draws from that distribution, as the last line of the code does to make exponential draws with mean 0.5.

Do not confuse `qnorm()` with `quantile()`. `qnorm()` and its relatives use a theoretical distribution with given parameters; `quantile()` computes quantiles of data you have ([[Distribution Functions in R]]).

```r
qnorm(0.9, 170, 10)                      # the 90th percentile of height: 182.8
qnorm(c(0.025, 0.975))                   # -1.96 and 1.96
qnorm(pnorm(180, 170, 10), 170, 10)      # back to 180
set.seed(8); mean(qexp(runif(1e5), rate = 2))   # uniform draws pushed through a quantile function: mean 0.5
```

## Connections
- **Builds on:** [[Cumulative Distribution Function]], [[Quantile]], [[Standard Deviation]], [[Standard Normal Distribution]]
- **Leads to:** [[Confidence Interval]], [[Credible Interval]], [[Distribution Functions in R]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What does a quantile function return?
??
The value below which a given probability of the distribution lies.
++++

Which R call gives the 1.96 used for 95% intervals?
??
qnorm(0.975).
++++
