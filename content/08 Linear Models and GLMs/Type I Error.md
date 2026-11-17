---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A Type I error is rejecting a null hypothesis that is actually true: concluding there is an effect when there is none."
aliases:
  - "False positive"
  - "Type 1 error"
  - "False alarm"
status: seedling
---

# Type I Error

A smoke alarm going off when there is no fire, or a court convicting an innocent person: a **Type I error** is rejecting a null hypothesis that is actually true, concluding there is an effect when there is none ([[Null Hypothesis]]). It is a false positive. When the null is true and the assumptions hold, its probability is α, the [[Significance Level]].

It multiplies with testing. Test 20 true nulls at 0.05 and you expect one false positive, and the chance of at least one is 1 − 0.95²⁰ = 0.64. The code below checks this by simulation: testing 20 unrelated predictors one at a time against a random response, about 64% of datasets yield at least one "significant" result.

Practices that inflate it include trying many predictors and reporting the winners ([[Data Dredging]]), testing after peeking at the data, stepwise selection, and ignoring non-independence, which makes standard errors too small ([[Pseudoreplication]], [[Harrison et al. 2018]]). Ecology worries about it because it fills the literature with unreplicable "effects" ([[Anderson and Burnham 2002]]). Adjustments such as Tukey's for [[Pairwise Comparisons]] exist to control it. A Type I error is not any mistake; it is specifically a false positive. Its counterpart is the [[Type II Error]].

```r
set.seed(7); mean(replicate(1000, { y <- rnorm(30); X <- matrix(rnorm(30 * 20), 30); min(apply(X, 2, function(x) cor.test(y, x)$p.value)) < 0.05 }))
1 - 0.95^20
```
Testing 20 unrelated predictors one at a time, about 64% of datasets yield at least one "significant" result.

## Connections
- **Builds on:** [[Null Hypothesis]], [[Significance Level]]
- **Leads to:** [[Type II Error]], [[Data Dredging]], [[Pseudoreplication]], [[Pairwise Comparisons]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]], molecular note [[Type I and Type II Errors]]

## Flashcards

What is a Type I error?
??
Rejecting a true null hypothesis (a false positive).
++++

What is the probability of a Type I error when the null is true?
??
α, the significance level.
++++
