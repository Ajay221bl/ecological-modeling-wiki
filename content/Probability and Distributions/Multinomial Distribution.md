---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "dmultinom()"
  - "Multinomial"
  - "Categorical distribution"
status: seedling
---

# Multinomial Distribution

**In one line:** the multinomial distribution gives the probability of each possible set of counts when n independent trials each fall into one of several categories with fixed probabilities.

> [!info] Before this, it helps to know
> [[Binomial Distribution]] (the two-category case) · [[Categorical Variable]] (the categories) · [[Vector]] (the counts come as one)

## The everyday picture
Rolling a die 60 times and recording how many 1s, 2s, …, 6s. The six counts must add to 60. Get more of one face and there are fewer rolls left for the others.

## A tiny example
100 marked animals, each ending the year alive and seen (0.5), alive and unseen (0.2) or dead (0.3). The counts might be (52, 17, 31).

## Start from zero
1. **n trials, each lands in exactly one of K categories.**
2. **Category probabilities p₁, …, p_K add to 1.**
3. **The outcome is a vector of K counts adding to n.**
4. **Expected count in category i: n pᵢ.**
5. **Counts are negatively correlated.** They compete for the same n trials.
6. **With K = 2 it is the binomial.**
7. **In ecology:** capture histories in mark-recapture, age or stage classes, diet composition, habitat categories in resource selection.

## In R
```r
set.seed(16); rmultinom(3, size = 100, prob = c(0.5, 0.2, 0.3))     # three datasets, one per column
dmultinom(c(52, 17, 31), prob = c(0.5, 0.2, 0.3))
x <- t(rmultinom(1e4, 100, c(0.5, 0.2, 0.3))); round(colMeans(x), 1); round(cor(x)[1, 2], 2)   # means 50, 20, 30. Negative correlation
```

## In the course
[[Powell and Gale 2015 Ch3]] uses multinomial likelihoods for encounter histories. [[Hobbs and Hooten 2015 Ch3]].

## Common confusions
- **"Each category's count is an independent binomial."** Each is binomial alone, but together they are tied by the fixed total.

## Explain it back
- Why are multinomial counts negatively correlated?

*Pass test:* you can simulate multinomial counts and compute their expectations.

## Connections
- **Builds on:** [[Binomial Distribution]], [[Categorical Variable]]
- **Leads to:** [[Dirichlet Distribution]], [[Capture History]], [[Multivariate Distribution]]
- **Part of:** [[MOC - Probability and Distributions]]

## Flashcards

What does the multinomial distribution describe?
??
Counts across K categories from n independent trials with fixed category probabilities.
++++

What is the expected count in category i?
??
n × pᵢ.
++++
