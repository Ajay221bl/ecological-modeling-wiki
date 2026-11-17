---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
description: "Precision is how close repeated estimates land to each other. A precise estimate would come out nearly the same if you repeated the study."
aliases:
  - "Precise"
  - "Imprecision"
status: seedling
---

# Precision

Throw darts at a board. If they land in a tight little group, you are precise, wherever that group is; darts spread all over the board are imprecise, even if their average is the bull's-eye. **Precision** is how closely repeated estimates land to one another: a precise estimate would come out nearly the same if you repeated the study. It is measured by the [[Standard Error]] (SE), the standard deviation of the estimates you would get across repeated studies, or by the width of a [[Confidence Interval]]; Powell and Gale equate a precise estimate with a small SE or a narrow 95% interval ([[Powell and Gale 2015 Ch2]]).

An example. True survival is 0.80 and the tags are harmless, so the method is unbiased. Tag 10 elk, repeat the study many times, and the estimates scatter with an SE of about 0.13: one study might say 0.6, another 1.0. Tag 200 elk and the SE drops to about 0.03, so studies agree to within a few hundredths. Same method, same truth; only the sample size changed, and precision improved about fourfold. The reason is that averages of more values wobble less, and the SE shrinks with the square root of n, so 20 times the data gives about √20 ≈ 4.5 times the precision.

Precision answers "if I did this again, how different would the answer be?", and it is the part of uncertainty you can buy down with effort, which is why sample-size planning is all about precision. But precise does not mean right. A biased method can be very precise, landing tightly in the wrong place, and no amount of extra data moves the cluster to the truth ([[Bias]]). Precision is also a property of the estimate, and of the method and sample size behind it, not of the data themselves ([[Estimator]]). How close an estimate tends to land depends on both bias and precision, which is what people loosely call [[Accuracy]].

![[Bias and precision.png|700]]
*What to look at:* tight clusters are precise; compare the first and third targets to see that precision alone can mislead.

```r
set.seed(5)
est_10  <- replicate(2000, mean(rbinom(10, 1, 0.8)))
est_200 <- replicate(2000, mean(rbinom(200, 1, 0.8)))
c(sd(est_10), sd(est_200))   # about 0.13 vs 0.03: more data, more precise
```

## Connections
- **Builds on:** [[Estimator]], [[Standard Error]]
- **Leads to:** [[Bias]], [[Accuracy]], [[Confidence Interval]], [[Bias-Variance Trade-off]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]], molecular note [[Bias and Precision]]
- **Go deeper:** [[Powell and Gale 2015 Ch2]]

## Flashcards

What is precision?
??
How close repeated estimates are to each other; measured by a small standard error or a narrow confidence interval.
![[Bias and precision.png]]
++++

Can a precise estimate be wrong?
??
Yes. A biased method can give tightly clustered estimates that all miss the truth.
++++
