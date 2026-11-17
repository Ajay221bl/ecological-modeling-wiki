---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A result is called statistically significant when its p-value falls below the chosen significance level, meaning the data would be unusual if the null hypothesis were true."
aliases:
  - "Significant"
  - "Statistically significant"
  - "Significance"
  - "Significance stars"
status: seedling
---

# Statistical Significance

A metal detector beeping says "something metallic is probably here", not whether it is a gold ring or a bottle cap. A result is **statistically significant** when its [[P-value]] falls below the chosen [[Significance Level]], meaning the data would be unusual if the null hypothesis were true. It answers one narrow question: can chance alone, under H₀, plausibly explain this? And it turns a continuous measure into a yes/no, discarding information.

Significant does not mean large. In the code below, with 100,000 observations a slope of 0.01 is highly significant, yet explains about 0.01% of the variation. Not significant does not mean absent, either, since small samples miss large effects ([[Effect Size]]). And the difference between significant and not significant is not itself significant: one study at p = 0.04 and another at p = 0.06 are in agreement, not conflict.

Better practice is to report the estimate, its interval and the exact p, and discuss biological meaning; that is the advice for results sections in the 24 November session ([[Writing Results Sections]], [[Guthery and Bingham 2007]]). The course moves beyond the pass/fail line to information-theoretic and Bayesian approaches, which compare models and estimate effects directly ([[Anderson and Burnham 2002]], [[Null Hypothesis Significance Testing]]). "Significant" in statistics means distinguishable from zero, not important, and significance stars rank p-values, not effects.

```r
set.seed(6); n <- 1e5; x <- rnorm(n); y <- 0.01 * x + rnorm(n)
s <- summary(lm(y ~ x)); c(slope = s$coefficients[2, 1], p = s$coefficients[2, 4], r2 = s$r.squared)     # "significant", yet explains about 0.01% of the variation
```

## Connections
- **Builds on:** [[P-value]], [[Significance Level]]
- **Leads to:** [[Effect Size]], [[Null Hypothesis Significance Testing]], [[Writing Results Sections]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]], molecular note [[Statistical vs Biological Significance]]

## Flashcards

What does "statistically significant" mean?
??
The p-value is below the chosen α, so the data would be unusual under the null hypothesis.
++++

Does statistical significance imply a large or important effect?
??
No. It depends on sample size as well as effect size.
++++
