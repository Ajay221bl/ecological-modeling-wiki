---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
description: "An unbiased estimator is a recipe whose answers, averaged over many repeated samples, land exactly on the true value."
aliases:
  - "Unbiasedness"
status: seedling
---

# Unbiased Estimator

A kitchen scale that is sometimes 2 g high and sometimes 2 g low, with no lean either way, is off on any one reading, yet weigh the same thing many times and the average is right. A scale that always reads 5 g high is biased, however steady it is. An **unbiased estimator** is a recipe ([[Estimator]]) like the first scale: imagine repeating the study many times, each repeat giving a different estimate, and average all those estimates; that long-run average is the estimator's [[Expected Value]], and if it equals the [[Parameter|true value]], the estimator is unbiased. If it does not, the gap is its [[Bias]]. You can test a scale with a known weight, but an estimator's truth is unknown, so unbiasedness is shown by maths or by simulation.

A simulation makes it concrete. True survival is 0.8 and each study follows 10 animals. Estimator 1, survivors divided by n, averages 0.80 over 20,000 imaginary studies: unbiased. Estimator 2, survivors divided by n + 1, averages 8 / 11 = 0.727: biased low by 0.073. Yet any single use of estimator 1 can still give 0.6 or 1.0. That is the key point: unbiasedness is a property of the recipe over many repeats, not a promise about one result, and a single estimate is one draw that can be far off. Unbiasedness explains some small details you meet early, such as dividing by n − 1 in the [[Variance|sample variance]] ([[Degrees of Freedom]]).

Unbiasedness is the minimum honesty test for a method: at least it does not systematically push you one way. But it is a virtue, not a law. Total error depends on both bias and spread, so an estimator with a little bias and much less variance can be closer to the truth on average ([[Bias-Variance Trade-off]]). [[Shrinkage]] methods such as [[Regularization|ridge regression]] and the [[Partial Pooling]] of [[Mixed Effects Model|mixed models]] deliberately accept a small bias for a large gain in precision, and Tredennick and colleagues show a deliberately biased method winning on prediction ([[Tredennick et al. 2021]]). Powell and Gale define the bias of estimators in [[Powell and Gale 2015 Ch2]].

![[Bias and precision.png|700]]
*What to look at:* unbiased means the cloud is centred on the bullseye, whatever its width.

```r
set.seed(21)
alive <- rbinom(20000, 10, 0.8)
mean(alive / 10)      # 0.80: unbiased
mean(alive / 11)      # 0.727: biased low
range(alive / 10)     # single estimates still range widely
```
Averages over 20,000 imaginary studies reveal the bias that no single study could.

## Connections
- **Builds on:** [[Estimator]], [[Bias]], [[Parameter]], [[Variance]]
- **Leads to:** [[Degrees of Freedom]], [[Bias-Variance Trade-off]], [[Partial Pooling]], [[Shrinkage]], [[Regularization]], [[Mixed Effects Model]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]], molecular note [[Bias and Precision]]

## Flashcards

What is an unbiased estimator?
??
One whose estimates average exactly to the true value over many repeated samples.
![[Bias and precision.png]]
++++

Does an unbiased estimator guarantee a correct estimate?
??
No. Any single estimate can be far from the truth.
++++

Why might a biased estimator be preferred?
??
If its bias is small and its variance much lower, its total error is smaller.
++++
