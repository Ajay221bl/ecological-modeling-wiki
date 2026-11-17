---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
aliases:
  - "Unbiasedness"
status: seedling
---

# Unbiased Estimator

**In one line:** an unbiased estimator is a recipe whose answers, averaged over many repeated samples, land exactly on the true value.

> [!info] Before this, it helps to know
> [[Estimator]] (a recipe for estimates) · [[Bias]] (systematic error) · [[Expected Value]] (long-run average)

## The everyday picture
A kitchen scale that is sometimes 2 g high and sometimes 2 g low, with no lean either way. Any one reading is off, but weigh the same thing many times and the average is right. A scale that always reads 5 g high is biased, however steady.

*Where the picture stops working:* you can test a scale with a known weight. An estimator's truth is unknown, so unbiasedness is shown by maths or simulation.

## A tiny example
True survival is 0.8. Samples of 10 animals.
- Estimator 1: survivors / n. Average over many samples: **0.80**. Unbiased.
- Estimator 2: survivors / (n + 1). Average: 8 / 11 = **0.727**. Biased low by 0.073.
- Yet any single use of estimator 1 can give 0.6 or 1.0.

## Start from zero
1. **Imagine repeating the study many times.**
2. **Each repeat gives a different estimate.**
3. **Average them.** That average is the estimator's expected value.
4. **If it equals the truth, the estimator is unbiased.**
5. **Unbiased is about the recipe, not one result.** *Why:* a single estimate is one draw and can be far off.
6. **Unbiased is not always best.** A slightly biased estimator with much less spread can have smaller total error ([[Bias-Variance Trade-off]]).

## See it
![[Bias and precision.png|700]]
*What to look at:* unbiased means the cloud is centred on the bullseye, whatever its width.

## Why it is this way
Unbiasedness is the minimum honesty test for a method: at least it isn't systematically pushing you one way. It explains small details such as the n − 1 in the variance. But Tredennick and colleagues show that deliberately biased methods such as ridge regression can predict better, so it is a virtue, not a law.

## In R
```r
set.seed(21)
alive <- rbinom(20000, 10, 0.8)
mean(alive / 10)      # 0.80: unbiased
mean(alive / 11)      # 0.727: biased low
range(alive / 10)     # single estimates still range widely
```
Averages over 20,000 imaginary studies reveal the bias that no single study could.

## In the course
[[Powell and Gale 2015 Ch2]] defines bias of estimators. [[Tredennick et al. 2021]] shows a biased estimator winning on prediction.

## Common confusions
- **"Unbiased means my estimate is correct."** It means the method is right on average.
- **"Biased estimators are always bad."** Shrinkage methods accept a little bias for a large gain in precision.

## Explain it back
- How would you check by simulation whether an estimator is unbiased?
- Why might you prefer a slightly biased estimator?

*Pass test:* you can explain unbiasedness as a property of the recipe over repeated samples.

## Connections
- **Builds on:** [[Estimator]], [[Bias]]
- **Leads to:** [[Degrees of Freedom]], [[Bias-Variance Trade-off]], [[Partial Pooling]]
- **Part of:** [[MOC - Modeling Foundations]], molecular note [[Bias and Precision]]

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
