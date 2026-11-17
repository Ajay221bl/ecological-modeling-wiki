---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Inverse CDF"
  - "qnorm()"
  - "Percent point function"
status: seedling
---

# Quantile Function

**In one line:** the quantile function answers the reverse question to the CDF: given a probability, which value has that much probability below it?

> [!info] Before this, it helps to know
> [[Cumulative Distribution Function]] (what it inverts) · [[Quantile]] (the same idea in data)

## The everyday picture
A height chart at a clinic. The CDF question is "my child is 110 cm, what percentile is that?" The quantile question is "what height is the 90th percentile?"

## Start from zero
1. **Input: a probability p. Output: the value y with P(Y ≤ y) = p.**
2. **It undoes the CDF:** qnorm(pnorm(y)) = y.
3. **In R these are the `q` functions.**
4. **Intervals come from it.** The middle 95% of a distribution lies between its 0.025 and 0.975 quantiles.
5. **Critical values come from it.** The famous 1.96 is `qnorm(0.975)`.
6. **Random numbers come from it.** Feed uniform random numbers through a quantile function and out come draws from that distribution.

## In R
```r
qnorm(0.9, 170, 10)                      # the 90th percentile of height: 182.8
qnorm(c(0.025, 0.975))                   # -1.96 and 1.96
qnorm(pnorm(180, 170, 10), 170, 10)      # back to 180
set.seed(8); mean(qexp(runif(1e5), rate = 2))   # uniform draws pushed through a quantile function: mean 0.5
```

## Common confusions
- **"Quantile function and `quantile()` are the same."** `qnorm` uses a theoretical distribution. `quantile()` computes quantiles of data.

## Explain it back
- Where does 1.96 come from?

*Pass test:* you can get interval endpoints with q functions.

## Connections
- **Builds on:** [[Cumulative Distribution Function]], [[Quantile]]
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
