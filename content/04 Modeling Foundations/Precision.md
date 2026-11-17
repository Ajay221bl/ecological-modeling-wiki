---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
aliases:
  - "Precise"
  - "Imprecision"
status: seedling
---

# Precision

**In one line:** precision is how close repeated estimates land to each other. A precise estimate would come out nearly the same if you repeated the study.

> [!info] Before this, it helps to know
> [[Estimator]] · [[Standard Error]] (the usual measure of precision)

## The everyday picture
Darts again. If your darts land in a tight little group, you're precise, wherever that group is. Darts spread all over the board are imprecise, even if their average is the bull's-eye.

*Where the picture stops working:* a tight group of darts can be anywhere. Precision says nothing about whether you're near the truth; that's [[Bias]].

## Words you'll need
- **Precision:** how tightly repeated estimates cluster.
- **Standard error (SE):** the standard deviation of repeated estimates; small SE means precise ([[Standard Error]]).
- **Confidence interval:** a range of plausible values; narrow means precise ([[Confidence Interval]]).
- **Sample size (n):** the main lever on precision.

## A tiny example
True survival 0.80, unbiased tags.
- Tag **10** elk: repeated estimates scatter with SE ≈ **0.13**. One study might say 0.6, another 1.0.
- Tag **200** elk: SE ≈ **0.03**. Studies agree to within a few hundredths.
- Same method, same truth; only the sample size changed, and precision improved about fourfold.

## Start from zero
1. **Repeat the study many times and look at the spread of estimates.**
2. **That spread is the (im)precision.** Measured by the standard error.
3. **Precision improves with more data.** *Why:* averages of more values wobble less; the SE shrinks with √n ([[Standard Error]]).
4. **Powell and Gale equate a precise estimate with a small SE or a narrow 95% CI** ([[Powell and Gale 2015 Ch2]], p. 16).
5. **Precision is not correctness.** *Why:* a biased method can be very precise, landing tightly in the wrong place.

## See it
![[Bias and precision.png|700]]
*What to look at:* tight clusters are precise; compare the first and third targets to see that precision alone can mislead.

## Why it is this way
Precision answers "if I did this again, how different would the answer be?" It's the part of uncertainty you can buy down with effort, which is why sample-size planning is all about precision.

## In R
```r
set.seed(5)
est_10  <- replicate(2000, mean(rbinom(10, 1, 0.8)))
est_200 <- replicate(2000, mean(rbinom(200, 1, 0.8)))
c(sd(est_10), sd(est_200))   # about 0.13 vs 0.03: more data, more precise
```

## In the course
Powell and Gale's chapter on inference ([[Powell and Gale 2015 Ch2]], p. 16); every SE in the labs is a measure of precision.

## Common confusions
- **"Precise means right."** It means consistent.
- **"Precision is a property of the data."** It's a property of the estimate (and the method and sample size behind it).

## Explain it back
- Use darts to explain precision.
- Why did tagging 200 elk instead of 10 make the estimate more precise?
- Why can a precise estimate still be wrong?

*Pass test:* you can read an SE as "how much this would change if I repeated the study".

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
