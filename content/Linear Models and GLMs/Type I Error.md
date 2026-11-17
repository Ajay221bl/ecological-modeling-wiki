---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "False positive"
  - "Type 1 error"
  - "False alarm"
status: seedling
---

# Type I Error

**In one line:** a Type I error is rejecting a null hypothesis that is actually true: concluding there is an effect when there is none.

> [!info] Before this, it helps to know
> [[Null Hypothesis]] (which is true here) · [[Significance Level]] (its rate)

## The everyday picture
A smoke alarm going off when there is no fire. Or a court convicting an innocent person.

## Start from zero
1. **Reality:** no effect. **Decision:** "significant".
2. **Its probability is α** when the null is true and assumptions hold.
3. **It multiplies with testing.** Test 20 true nulls at 0.05 and expect one false positive.
4. **Practices that inflate it:** trying many predictors and reporting the winners, testing after peeking, ignoring non-independence, stepwise selection.
5. **Why ecology worries about it:** a literature of unreplicable "effects".

## In R
```r
set.seed(7); mean(replicate(1000, { y <- rnorm(30); X <- matrix(rnorm(30 * 20), 30); min(apply(X, 2, function(x) cor.test(y, x)$p.value)) < 0.05 }))
1 - 0.95^20
```
Testing 20 unrelated predictors one at a time, about 64% of datasets yield at least one "significant" result.

## In the course
[[Anderson and Burnham 2002]] on data dredging. [[Harrison et al. 2018]] on inflated Type I error from ignoring random effects.

## Common confusions
- **"Type I error is making any mistake."** It is specifically a false positive.

## Explain it back
- Why do multiple tests raise the false-positive rate?

*Pass test:* you can define it and name two things that inflate it.

## Connections
- **Builds on:** [[Null Hypothesis]], [[Significance Level]]
- **Leads to:** [[Type II Error]], [[Data Dredging]], [[Pseudoreplication]], [[Pairwise Comparisons]]
- **Part of:** [[MOC - Likelihood and Estimation]], molecular note [[Type I and Type II Errors]]

## Flashcards

What is a Type I error?
??
Rejecting a true null hypothesis (a false positive).
++++

What is the probability of a Type I error when the null is true?
??
α, the significance level.
++++
