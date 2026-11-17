---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "An effect size is how big a difference or relationship is, expressed in units that mean something."
aliases:
  - "Effect"
  - "Size of an effect"
  - "Biological significance"
  - "Magnitude of effect"
status: seedling
---

# Effect Size

"This medicine works" and "this medicine lowers fever by 0.1 degrees" can both be true, but only the second tells you whether to bother taking it. An **effect size** is how big a difference or relationship is, expressed in units that mean something. Raw effect sizes are a [[Slope]], a difference between group means or a ratio, in real units. Standardised effect sizes are per standard deviation, or a correlation or R², which are unit-free and comparable across studies. Either way, report it with an interval to show its [[Uncertainty]].

It matters more than a p-value because a p-value mixes effect size with sample size ([[P-value]]). The code below makes the point twice. With 100,000 observations, a trivial difference of 0.02 between two groups gives a tiny p-value; with 12 observations, a large difference of about 1 may give a p-value above 0.05. A small p does not mean a large effect, and a large p does not mean a small one ([[Statistical Significance]]).

Judge an effect size against biology: what change would matter to the population or the manager? That is the point Guthery and Bingham press, and it is how results should be written up, leading with effect sizes and intervals ([[Guthery and Bingham 2007]], [[Writing Results Sections]], [[Interpreting Regression Coefficients]]).

```r
set.seed(6); big_n <- data.frame(g = rep(0:1, each = 50000)); big_n$y <- 10 + 0.02 * big_n$g + rnorm(1e5)
round(summary(lm(y ~ g, big_n))$coefficients[2, c(1, 4)], 4)       # effect 0.02 (trivial), p tiny
small_n <- data.frame(g = rep(0:1, each = 6)); small_n$y <- 10 + 1 * small_n$g + rnorm(12)
round(summary(lm(y ~ g, small_n))$coefficients[2, c(1, 4)], 3)     # effect about 1 (large), p may exceed 0.05
```

## Connections
- **Builds on:** [[Slope]], [[Uncertainty]]
- **Leads to:** [[Statistical Significance]], [[P-value]], [[Interpreting Regression Coefficients]], [[Writing Results Sections]]
- **Part of:** [[MOC 06 - Linear Models and GLMs|MOC - Linear Models and GLMs]]

## Flashcards

What is an effect size?
??
The magnitude of a difference or relationship, in meaningful units.
++++

Why is effect size more informative than a p-value alone?
??
A p-value depends on sample size as well as on the size of the effect.
++++
