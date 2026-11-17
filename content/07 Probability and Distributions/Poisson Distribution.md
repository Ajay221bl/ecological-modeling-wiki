---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The Poisson distribution gives the probability of each possible count of events in a fixed amount of time or space when events occur independently at a constant average rate."
aliases:
  - "dpois()"
  - "Poisson"
status: seedling
---

# Poisson Distribution

In a light shower, each paving stone gets some whole number of raindrops. Most get about the average, a few get none, a few get many. The drops do not coordinate, and that independence produces the Poisson pattern. The **Poisson distribution** gives the probability of each possible count of events in a fixed amount of time or space when events occur independently at a constant average rate ([[Count Data]]). It has one parameter, λ, the mean count, and its support is 0, 1, 2, … with no upper limit. Its [[Probability Mass Function]] is P(Y = y) = λ^y e^(−λ) / y! ([[Factorial]]).

For birds per point count with λ = 3, P(0) = e⁻³ = 0.050, P(3) = 0.224 and P(10 or more) = 0.001. Its defining property, and its weakness, is that the variance equals the mean: the spread is dictated by λ. The code below simulates 100,000 counts with mean 3 and gets a variance of 3. The figure shows its shape: right-skewed and leaning against zero for small λ, nearly a symmetric bell for large λ. It arises when there are many opportunities for an event, each with a tiny independent probability, so it is the limit of a binomial with large n and small p; the last line shows a binomial with n = 1,000 and p = 0.003 giving almost the same P(2) as a Poisson with mean 3. Sums stay Poisson: independent plots with means 2 and 3 total a Poisson with mean 5.

It is the default distribution for counts in a [[Poisson Regression]] with a log link ([[Zuur et al. 2009 Ch8]], [[Hobbs and Hooten 2015 Ch3]]). Real ecological counts usually vary more than λ, which is [[Overdispersion]], and then the [[Negative Binomial Distribution]] is the usual next step. Two confusions: counts are not automatically Poisson, since Poisson is one model for them and often too tight; and λ need not be a whole number, since the mean can be any positive number even though the data are whole. The waiting times between Poisson events follow the [[Exponential Distribution]].

![[Poisson distribution.png|700]]
*What to look at:* at λ = 1 the bars lean against zero. At λ = 10 they form a bell.

```r
dpois(0:3, 3); 1 - ppois(9, 3)
set.seed(13); y <- rpois(1e5, 3); c(mean(y), var(y))            # both about 3
c(dbinom(2, 1000, 0.003), dpois(2, 3))                          # binomial with large n, small p is nearly Poisson
```

## Connections
- **Builds on:** [[Count Data]], [[Factorial]]
- **Leads to:** [[Poisson Regression]], [[Overdispersion]], [[Negative Binomial Distribution]], [[Exponential Distribution]]
- **See also:** [[Exponent]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]], molecular note [[Binomial vs Poisson]], [[Poisson vs Negative Binomial]]

## Flashcards

What does the Poisson distribution describe?
??
Counts of independent events occurring at a constant average rate in a fixed interval of time or space.
![[Poisson distribution.png]]
++++

How are the Poisson's mean and variance related?
??
They are equal: both are λ.
++++

Poisson PMF?
??
P(Y = y) = λ^y e^(−λ) / y!
++++
