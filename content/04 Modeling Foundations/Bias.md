---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
description: "Bias is how far an estimator's answers land from the truth *on average*: a systematic miss in one direction."
aliases:
  - "Biased estimator"
  - "Systematic error"
status: seedling
---

# Bias

Throw darts at a board many times. If they cluster in the top-left corner, every throw misses the same way, and it does not matter how tightly they cluster: the centre of the cluster is not the bull's-eye. That systematic miss is **bias**: how far an [[Estimator]]'s answers land from the true [[Parameter]] *on average*. Formally, bias = (average estimate over many repeated studies) − (true value), and an estimator with zero bias is *unbiased* ([[Unbiased Estimator]]). In estimation the bull's-eye is invisible, so you learn about bias by reasoning about your method or by simulation: imagine repeating the study many times and averaging the estimates, so that random wobble cancels out and only the systematic miss is left.

An example. True elk survival is 0.80, but your tags slightly injure the animals, so tagged elk survive at 0.70. Tag 200 elk, repeat the study many times, and the estimates average 0.70: a bias of 0.70 − 0.80 = −0.10. Now tag 2,000 elk. The estimates are much less spread out, but they still average 0.70. More data did not help, because the method itself misses: every new data point carries the same systematic error. Powell and Gale name two sources of bias ([[Powell and Gale 2015 Ch2]]). *Small-sample bias* affects some estimators when n is small and fades as n grows. *Model bias* comes from a wrong assumption, such as harmful tags or animals that become shy of traps, and it does not fade; only redesigning the sampling or the analysis fixes it.

That is why bias is the error more effort cannot wash out, and why Powell and Gale value lack of bias over precision when you must choose. A tight cluster in the wrong place is still wrong, so a precise estimate is not automatically a good one ([[Precision]]). Yet bias is not always bad: some modern tools deliberately accept a little bias in exchange for much less wobble, as in [[Partial Pooling]], because the total error can then be smaller ([[Bias-Variance Trade-off]]). The two together decide how close an estimate tends to land, which is what people loosely call [[Accuracy]].

![[Bias and precision.png|700]]
*What to look at:* the third target's tight cluster is far from the centre. That's high bias.

```r
set.seed(5)
truth <- 0.8
est <- replicate(2000, mean(rbinom(200, 1, 0.7)))  # tags lower survival to 0.7
mean(est) - truth                                  # bias about -0.10
est_big <- replicate(2000, mean(rbinom(2000, 1, 0.7)))
mean(est_big) - truth                              # still about -0.10
```

## Connections
- **Builds on:** [[Estimator]], [[Parameter]]
- **Leads to:** [[Precision]], [[Accuracy]], [[Bias-Variance Trade-off]], [[Representative Sample]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]], molecular note [[Bias and Precision]]
- **Go deeper:** [[Powell and Gale 2015 Ch2]]

## Flashcards

What is bias?
??
How far an estimator's estimates sit from the truth on average; a systematic miss in one direction.
![[Bias and precision.png]]
++++

What are the two sources of bias Powell and Gale name?
??
Small-sample bias (estimator misbehaves at low n) and model bias (wrong assumptions, e.g., tags reduce survival, trap-shyness).
++++
