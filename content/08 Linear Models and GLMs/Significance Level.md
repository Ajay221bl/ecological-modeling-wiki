---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The significance level is the cut-off, chosen before the analysis, below which a p-value leads you to reject the null hypothesis."
aliases:
  - "Alpha"
  - "α"
  - "Alpha level"
  - "0.05 threshold"
status: seedling
---

# Significance Level

A smoke alarm's sensitivity setting trades two mistakes: very sensitive and it catches every fire but goes off for burnt toast; dull and toast is ignored, along with some real fires. The **significance level**, α, is how often you will tolerate a toast alarm. It is the cut-off, chosen before the analysis, below which a [[P-value]] leads you to reject the null hypothesis. By convention it is 0.05.

α is the false-alarm rate: if the null hypothesis is true, you will wrongly reject it a fraction α of the time ([[Type I Error]]). In the code below, 10,000 t-tests are run on data where the null is true every time; 5% give p < 0.05 and 1% give p < 0.01. Lowering α gives fewer false alarms but more missed effects ([[Statistical Power]]). A 100(1 − α)% confidence interval matches a test at level α.

0.05 is a habit, not a law; it traces to a suggestion by R. A. Fisher, and p = 0.049 and p = 0.051 are the same evidence ([[Statistical Significance]]). The common misreading is that α is the probability a significant result is wrong. It is the false-positive rate when the null is true, not the share of significant results that are false.

```r
set.seed(5); p <- replicate(10000, t.test(rnorm(15))$p.value)       # the null is true every time
c(alpha_05 = mean(p < 0.05), alpha_01 = mean(p < 0.01))
```

## Connections
- **Builds on:** [[P-value]]
- **Leads to:** [[Type I Error]], [[Statistical Significance]], [[Statistical Power]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

What is the significance level α?
??
The pre-chosen threshold for rejecting the null, equal to the probability of a false positive when the null is true.
++++
