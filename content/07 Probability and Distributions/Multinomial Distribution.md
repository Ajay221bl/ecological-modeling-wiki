---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The multinomial distribution gives the probability of each possible set of counts when n independent trials each fall into one of several categories with fixed probabilities."
aliases:
  - "dmultinom()"
  - "Multinomial"
  - "Categorical distribution"
status: seedling
---

# Multinomial Distribution

Roll a die 60 times and record how many 1s, 2s and so on up to 6s you get. The six counts must add to 60, so getting more of one face leaves fewer rolls for the others. The **multinomial distribution** gives the probability of each possible set of counts when n independent trials each fall into exactly one of K categories with fixed probabilities p₁ to p_K that add to 1 ([[Categorical Variable]]). One outcome is a [[Vector]] of K counts adding to n, and the expected count in category i is n pᵢ. With K = 2 it is the [[Binomial Distribution]].

An example. 100 marked animals each end the year in one of three states: alive and seen (0.5), alive and unseen (0.2), or dead (0.3). The expected counts are 50, 20 and 30, and one year's data might be (52, 17, 31). The code below draws three such datasets, computes the probability of (52, 17, 31) with `dmultinom()`, and confirms over 10,000 draws that the means are 50, 20 and 30. It also shows that the counts are negatively correlated, about −0.5 between the first two categories, because they compete for the same fixed total.

Each category's count, on its own, is binomial, but the counts are not independent binomials, because the fixed total ties them together. In ecology the multinomial describes capture histories in [[Mark-Recapture|mark-recapture]], where Powell and Gale use it to build encounter-history likelihoods ([[Capture History]], [[Powell and Gale 2015 Ch3]]), as well as age or stage classes, diet composition and habitat categories ([[Hobbs and Hooten 2015 Ch3]]). It is a [[Multivariate Distribution]], and its Bayesian partner for the probabilities is the [[Dirichlet Distribution]].

```r
set.seed(16); rmultinom(3, size = 100, prob = c(0.5, 0.2, 0.3))     # three datasets, one per column
dmultinom(c(52, 17, 31), prob = c(0.5, 0.2, 0.3))
x <- t(rmultinom(1e4, 100, c(0.5, 0.2, 0.3))); round(colMeans(x), 1); round(cor(x)[1, 2], 2)   # means 50, 20, 30. Negative correlation
```

## Connections
- **Builds on:** [[Binomial Distribution]], [[Categorical Variable]]
- **Leads to:** [[Dirichlet Distribution]], [[Capture History]], [[Multivariate Distribution]], [[Mark-Recapture]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What does the multinomial distribution describe?
??
Counts across K categories from n independent trials with fixed category probabilities.
++++

What is the expected count in category i?
??
n × pᵢ.
++++
