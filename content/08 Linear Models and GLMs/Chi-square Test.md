---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A chi-square test compares counts you observed in categories with the counts you would expect under a hypothesis, and asks whether the gap is bigger than chance would give."
aliases:
  - "Chi-squared test"
  - "χ² test"
  - "Chi-square goodness-of-fit test"
  - "chisq.test()"
status: seedling
---

# Chi-square Test

If a die is fair, 60 rolls should give about 10 of each face. Getting 14 sixes is a bit high, but is it high enough to call the die loaded? A **chi-square test** compares counts you observed in categories with the counts you would expect under a hypothesis, and asks whether the gap is bigger than chance would give ([[Null Hypothesis Significance Testing]], [[Test Statistic]]). Its statistic adds up, for every category, (observed − expected)² / expected: squaring makes every gap positive, and dividing by the expected count means a gap of 4 matters more when you expected 10 than when you expected 100.

If the hypothesis is true, that sum follows a [[Chi-square Distribution|chi-square distribution]] with (number of categories − 1) [[Degrees of Freedom|degrees of freedom]] in the goodness-of-fit version, and the p-value is the chance of a sum at least as large ([[P-value]]). It needs counts, not percentages, and expected counts of about 5 or more in each category. In the code below, 42 fisher detections split 15, 15 and 12 among wilderness, other federal and other lands, against [[Sampling Effort|sampling effort]] of 34%, 31% and 35%, give χ² = 0.83 and p = 0.66: no sign that fishers were detected out of proportion to effort.

[[Happe et al. 2020]] report this comparison as χ² = 0.855, P = 0.65; the counts here are rebuilt from their rounded percentages, so the numbers differ slightly ([[Fisher Occupancy Case Study]]). A large p-value does not show that the proportions are equal, only that these data cannot tell them apart ([[What a p-value does and does not tell you]]).

```r
chisq.test(c(wilderness = 15, federal = 15, other = 12), p = c(0.34, 0.31, 0.35))
```

## Connections
- **Builds on:** [[Null Hypothesis Significance Testing]], [[Test Statistic]], [[Chi-square Distribution]], [[Degrees of Freedom]], [[Sampling Effort]]
- **Leads to:** [[P-value]], [[Kruskal-Wallis Test]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]], molecular note [[What a p-value does and does not tell you]]

## Flashcards

What does a chi-square goodness-of-fit test compare?
??
Observed counts in categories with the counts expected under a hypothesis.
++++

Write the chi-square statistic.
??
Sum over categories of (observed − expected)² / expected.
++++
