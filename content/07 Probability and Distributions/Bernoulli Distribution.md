---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The Bernoulli distribution is the distribution of a single yes/no outcome: it gives 1 with probability p and 0 with probability 1 − p."
aliases:
  - "dbern"
  - "Binary distribution"
status: seedling
---

# Bernoulli Distribution

Picture a bar chart with only two bars, one over 0 and one over 1, with heights 1 − p and p. The **Bernoulli distribution** is the distribution of a single yes/no outcome ([[Bernoulli Trial]]): it gives 1 with probability p and 0 with probability 1 − p. Its support is {0, 1} and its one parameter is p. Its [[Probability Mass Function]] can be written in one line as P(Y = y) = p^y (1 − p)^(1 − y): plug in y = 1 and you get p, plug in y = 0 and you get 1 − p.

Its mean is p and its variance p(1 − p). With p = 0.7 the mean is 0.7 and the variance 0.21, which the code below confirms from 100,000 simulated trials. The variance is fixed by the mean: it is largest at p = 0.5, where it is 0.25, and shrinks toward zero as p nears 0 or 1, as the last line shows. With p = 0.2 it is 0.16. There is no separate spread parameter, so single 0/1 observations cannot be overdispersed.

It is the [[Binomial Distribution]] with one trial, so R handles it with `dbinom(y, 1, p)`; Bernoulli and binomial are not different families. It is the response distribution for [[Logistic Regression]] on individual 0/1 outcomes such as [[Presence-Absence Data]], and the distribution of the hidden "occupied or not" state in occupancy models ([[Hobbs and Hooten 2015 Ch3]]).

```r
p <- 0.7; dbinom(c(0, 1), 1, p)
set.seed(11); y <- rbinom(1e5, 1, p); c(mean(y), var(y), p * (1 - p))
sapply(c(0.1, 0.5, 0.9), function(p) p * (1 - p))        # variance peaks at 0.5
```

## Connections
- **Builds on:** [[Bernoulli Trial]]
- **Leads to:** [[Binomial Distribution]], [[Logistic Regression]], [[Presence-Absence Data]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What are the mean and variance of a Bernoulli(p)?
??
Mean p, variance p(1 − p).
++++

How is the Bernoulli related to the binomial?
??
It is the binomial with a single trial (n = 1).
++++
