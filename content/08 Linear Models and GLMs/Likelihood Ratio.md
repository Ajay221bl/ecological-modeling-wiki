---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A likelihood ratio is the likelihood under one parameter value or model divided by the likelihood under another, measuring how much better the first explains the data."
aliases:
  - "Ratio of likelihoods"
  - "Relative likelihood"
  - "Evidence ratio from likelihoods"
status: seedling
---

# Likelihood Ratio

Two witnesses tell different stories. Under the first, the evidence found would be seen 30% of the time; under the second, 3% of the time. The evidence favours the first story by 10 to 1. A **likelihood ratio** is the likelihood under one parameter value or model divided by the likelihood under another, LR = L(A) / L(B), measuring how much better the first explains the data ([[Likelihood]]). LR > 1 favours A and LR < 1 favours B. On the log scale it is a difference, log LR = ℓ(A) − ℓ(B) ([[Log-likelihood]]). It is the proper way to read likelihoods, since single values have no absolute meaning.

With 7 successes in 10 trials, L(p = 0.7) = 0.267 and L(p = 0.5) = 0.117, a ratio of 2.3: the data are 2.3 times more probable under 0.7. The code below computes it directly and from log-likelihoods, then shows that 70 successes in 100, the same proportion with ten times the data, gives a ratio in the thousands. More data make the evidence sharper.

One caution: a bigger model always has a likelihood at least as high as a smaller one nested in it, so a raw ratio between such models always "favours" the bigger one. Tests and information criteria correct for that ([[Likelihood Ratio Test]], [[Evidence Ratio]]). Likelihood ratios appear everywhere: in likelihood ratio tests, [[Delta AIC|AIC differences]], [[Bayes Factor|Bayes factors]], [[Deviance]] and the Metropolis acceptance rule ([[Hobbs and Hooten 2015 Ch4]], [[Johnson and Omland 2004]]). A ratio of 2.3 does not mean A is 2.3 times more likely to be true; it means the data are 2.3 times more probable under A.

```r
dbinom(7, 10, 0.7) / dbinom(7, 10, 0.5)
exp(dbinom(7, 10, 0.7, log = TRUE) - dbinom(7, 10, 0.5, log = TRUE))      # same, via log-likelihoods
dbinom(70, 100, 0.7) / dbinom(70, 100, 0.5)                               # same proportions, ten times the data: ratio in the thousands
```

## Connections
- **Builds on:** [[Likelihood]], [[Log-likelihood]]
- **Leads to:** [[Likelihood Ratio Test]], [[Evidence Ratio]], [[Bayes Factor]], [[Deviance]], [[Delta AIC]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

What is a likelihood ratio?
??
The likelihood of the data under one hypothesis or model divided by that under another.
++++

How is a likelihood ratio obtained from log-likelihoods?
??
exp(ℓ(A) − ℓ(B)).
++++
