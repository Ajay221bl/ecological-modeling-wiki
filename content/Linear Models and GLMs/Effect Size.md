---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Effect"
  - "Size of an effect"
  - "Biological significance"
  - "Magnitude of effect"
status: seedling
---

# Effect Size

**In one line:** an effect size is how big a difference or relationship is, expressed in units that mean something.

> [!info] Before this, it helps to know
> [[Slope]] (the commonest effect size) · [[Uncertainty]] (which must accompany it)

## The everyday picture
The difference between "this medicine works" and "this medicine lowers fever by 0.1 degrees". Both can be true. Only the second tells you whether to bother taking it.

## Start from zero
1. **Raw effect sizes:** a slope, a difference between group means, a ratio. In real units.
2. **Standardised effect sizes:** per standard deviation, or as a correlation or R². Unit-free and comparable across studies.
3. **Report with an interval.**
4. **Why it matters more than a p-value:** a p-value mixes effect size with sample size. A tiny, biologically irrelevant effect becomes "significant" with enough data, and a large one can be "non-significant" with little.
5. **Judge against biology.** What change would matter to the population or the manager?

## In R
```r
set.seed(6); big_n <- data.frame(g = rep(0:1, each = 50000)); big_n$y <- 10 + 0.02 * big_n$g + rnorm(1e5)
round(summary(lm(y ~ g, big_n))$coefficients[2, c(1, 4)], 4)       # effect 0.02 (trivial), p tiny
small_n <- data.frame(g = rep(0:1, each = 6)); small_n$y <- 10 + 1 * small_n$g + rnorm(12)
round(summary(lm(y ~ g, small_n))$coefficients[2, c(1, 4)], 3)     # effect about 1 (large), p may exceed 0.05
```

## In the course
Emphasised in [[Guthery and Bingham 2007]] and in the Nov 24 results-writing session.

## Common confusions
- **"Small p means large effect."** No.

## Explain it back
- Why can a trivial effect be highly significant?

*Pass test:* you can report an effect with units and interval and comment on its biological size.

## Connections
- **Builds on:** [[Slope]], [[Uncertainty]]
- **Leads to:** [[Statistical Significance]], [[P-value]], [[Interpreting Regression Coefficients]], [[Writing Results Sections]]
- **Part of:** [[MOC - Linear Models and GLMs]]

## Flashcards

What is an effect size?
??
The magnitude of a difference or relationship, in meaningful units.
++++

Why is effect size more informative than a p-value alone?
??
A p-value depends on sample size as well as on the size of the effect.
++++
