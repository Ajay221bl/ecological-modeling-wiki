---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "A marginal probability is the probability of one thing on its own, found by adding up its joint probabilities over every possibility for the other thing."
aliases:
  - "Marginal distribution"
  - "Marginalising"
  - "Summing out"
  - "Integrating out"
status: seedling
---

# Marginal Probability

A table of sales by product and month has a "total" column in its right margin, giving sales per product with month no longer in the picture. A **marginal probability** is the probability of one thing on its own, found by adding up its joint probabilities over every possibility for the other thing ([[Joint Probability]]). The other variable has been "summed out", or *marginalised*. For continuous variables the sum becomes an integral, and the phrase is "integrated out".

In the occupancy example, P(present, detected) = 0.30 and P(absent, detected) = 0, so P(detected) = 0.30 + 0 = 0.30: the [[Detection Probability|probability of detection]] whatever the true state. In the code below, `rowSums()` of the joint table gives the marginal probabilities of the true state (0.4 present, 0.6 absent) and `colSums()` those of detection (0.3 and 0.7). Writing the same sum with conditional probabilities gives the [[Law of Total Probability]].

Marginalising matters because you often care about one quantity while others are nuisances you had to include, and marginalising gives a statement about the one that accounts for uncertainty in the others. In Bayesian work it is almost effortless: the marginal posterior of a slope is what you get by looking only at that parameter's column in the MCMC output, ignoring the others, as the last lines of the code do with simulated draws ([[Marginal Posterior Distribution]]). That simple act is an [[Integral|integration]]. The denominator of [[Bayes' Theorem|Bayes' theorem]] is also a marginal ([[Marginal Likelihood]]). "Marginal" here means "in the margin of the table", not "unimportant" ([[Joint, Marginal and Conditional Probability]], [[Hobbs and Hooten 2015 Ch3]]).

```r
tab <- matrix(c(0.30, 0.10, 0.00, 0.60), 2, byrow = TRUE, dimnames = list(c("present", "absent"), c("detected", "not detected")))
rowSums(tab)        # marginal of true state: 0.4, 0.6
colSums(tab)        # marginal of detection: 0.3, 0.7
set.seed(2); draws <- data.frame(a = rnorm(4000, 2, 1), b = rnorm(4000, 0.5, 0.1))   # pretend posterior draws of two parameters
quantile(draws$b, c(0.025, 0.975))     # marginal interval for b: just use its column
```

## Connections
- **Builds on:** [[Joint Probability]], [[Integral]]
- **Leads to:** [[Law of Total Probability]], [[Marginal Likelihood]], [[Marginal Posterior Distribution]], [[Detection Probability]], [[Bayes' Theorem]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]], molecular note [[Joint, Marginal and Conditional Probability]]

## Flashcards

How is a marginal probability obtained from a joint distribution?
??
By summing (or integrating) the joint probabilities over all values of the other variable.
++++

How do you get a marginal posterior from MCMC draws?
??
Look at that parameter's draws alone, ignoring the other columns.
++++
