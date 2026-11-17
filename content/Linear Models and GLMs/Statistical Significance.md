---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Significant"
  - "Statistically significant"
  - "Significance"
  - "Significance stars"
status: seedling
---

# Statistical Significance

**In one line:** a result is called statistically significant when its p-value falls below the chosen significance level, meaning the data would be unusual if the null hypothesis were true.

> [!info] Before this, it helps to know
> [[P-value]] (the measure) · [[Significance Level]] (the cut-off) · [[Effect Size]] (what it is often confused with)

## The everyday picture
A metal detector beeping. The beep says "something metallic is probably here". It doesn't say whether it is a gold ring or a bottle cap.

## Start from zero
1. **p < α:** "significant". **p ≥ α:** "not significant".
2. **It answers one narrow question:** can chance alone (under H₀) plausibly explain this?
3. **It turns a continuous measure into yes/no,** discarding information.
4. **Significant ≠ large.** Huge samples make trivial effects significant.
5. **Not significant ≠ absent.** Small samples miss large effects.
6. **The difference between significant and not significant is not itself significant.** One study at p = 0.04 and another at p = 0.06 are in agreement.
7. **Better practice:** report the estimate, its interval and the exact p. Discuss biological meaning.
8. **Why the course moves beyond it:** information-theoretic and Bayesian approaches compare models and estimate effects without a pass/fail line.

## In R
```r
set.seed(6); n <- 1e5; x <- rnorm(n); y <- 0.01 * x + rnorm(n)
s <- summary(lm(y ~ x)); c(slope = s$coefficients[2, 1], p = s$coefficients[2, 4], r2 = s$r.squared)     # "significant", yet explains about 0.01% of the variation
```

## In the course
[[Anderson and Burnham 2002]], [[Guthery and Bingham 2007]]. Writing about it: Nov 24 session.

## Common confusions
- **"Significant means important."** In statistics it means "distinguishable from zero".
- **"Stars rank the effects."** Stars rank p-values.

## Explain it back
- Give an example of a significant but unimportant result.

*Pass test:* you can separate statistical from biological significance.

## Connections
- **Builds on:** [[P-value]], [[Significance Level]]
- **Leads to:** [[Effect Size]], [[Null Hypothesis Significance Testing]], [[Writing Results Sections]]
- **Part of:** [[MOC - Likelihood and Estimation]], molecular note [[Statistical vs Biological Significance]]

## Flashcards

What does "statistically significant" mean?
??
The p-value is below the chosen α, so the data would be unusual under the null hypothesis.
++++

Does statistical significance imply a large or important effect?
??
No. It depends on sample size as well as effect size.
++++
