---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Ratio of likelihoods"
  - "Relative likelihood"
  - "Evidence ratio from likelihoods"
status: seedling
---

# Likelihood Ratio

**In one line:** a likelihood ratio is the likelihood under one parameter value or model divided by the likelihood under another, measuring how much better the first explains the data.

> [!info] Before this, it helps to know
> [[Likelihood]] (numerator and denominator) · [[Log-likelihood]] (its difference is the log ratio)

## The everyday picture
Two witnesses' stories. Under the first story, the evidence found would be seen 30% of the time. Under the second, 3% of the time. The evidence favours the first story by 10 to 1.

## A tiny example
7 of 10 successes. L(p = 0.7) = 0.267, L(p = 0.5) = 0.117. Ratio 2.3: the data are 2.3 times more probable under 0.7.

## Start from zero
1. **LR = L(A) / L(B).**
2. **LR > 1 favours A. LR < 1 favours B.**
3. **On the log scale it is a difference:** log LR = ℓ(A) − ℓ(B).
4. **It is the proper way to read likelihoods,** since single values have no absolute meaning.
5. **A bigger model always has a likelihood at least as high** as a smaller one nested in it. So a raw ratio between such models always "favours" the bigger one. Tests and information criteria correct for that.
6. **It appears everywhere:** likelihood ratio tests, AIC differences, Bayes factors, the Metropolis acceptance rule.

## In R
```r
dbinom(7, 10, 0.7) / dbinom(7, 10, 0.5)
exp(dbinom(7, 10, 0.7, log = TRUE) - dbinom(7, 10, 0.5, log = TRUE))      # same, via log-likelihoods
dbinom(70, 100, 0.7) / dbinom(70, 100, 0.5)                               # same proportions, ten times the data: ratio in the thousands
```

## In the course
[[Hobbs and Hooten 2015 Ch4]], [[Johnson and Omland 2004]].

## Common confusions
- **"A ratio of 2.3 means A is 2.3 times more likely to be true."** It means the data are 2.3 times more probable under A.

## Explain it back
- Why does a larger nested model always have a likelihood at least as high?

*Pass test:* you can compute a likelihood ratio from two log-likelihoods.

## Connections
- **Builds on:** [[Likelihood]], [[Log-likelihood]]
- **Leads to:** [[Likelihood Ratio Test]], [[Evidence Ratio]], [[Bayes Factor]], [[Deviance]]
- **Part of:** [[MOC - Likelihood and Estimation]]

## Flashcards

What is a likelihood ratio?
??
The likelihood of the data under one hypothesis or model divided by that under another.
++++

How is a likelihood ratio obtained from log-likelihoods?
??
exp(ℓ(A) − ℓ(B)).
++++
