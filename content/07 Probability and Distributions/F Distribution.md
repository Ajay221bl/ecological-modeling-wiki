---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The F distribution describes the ratio of two independent variance estimates, and is used to judge whether one source of variation is larger than another."
aliases:
  - "F"
  - "df()"
  - "Fisher's F"
status: seedling
---

# F Distribution

To compare the noise in two rooms, divide one loudness reading by the other. If both rooms are equally noisy the ratio hovers around 1; a ratio of 6 suggests the first room really is louder. The **F distribution** tells you how far from 1 such a ratio wanders by chance alone. It is the ratio of two independent chi-square variables, each divided by its own degrees of freedom ([[Chi-square Distribution]], [[Degrees of Freedom]]), so it has two parameters, the numerator df and the denominator df. It lives on positive numbers and is centred near 1 when the two [[Variance|variances]] are equal.

In [[ANOVA]] and regression, F = (variation explained per parameter) ÷ (residual variation per residual df). If the predictors do nothing, both pieces estimate the same noise variance and F is about 1; a large F is evidence that the model explains real variation. With 3 groups and 30 observations the df are 2 and 27, and the 5% critical value is 3.35. The simulation in the code below fits pure noise to three groups 5,000 times: the F values centre near 1 and exceed 3.35 about 5% of the time, as they should.

F is used instead of chi-square in linear models because the residual variance is estimated, and the F's denominator accounts for that, just as t does compared with z. In fact an F with 1 numerator df is the square of a t, which the last line checks ([[Student t Distribution]]). This is the F statistic printed by `summary(lm())` and `anova()` ([[F-test]], [[Zuur et al. 2009 Ch2]]). A big F says only that some variation is explained, not which groups differ.

```r
qf(0.95, 2, 27)                                  # critical value for 3 groups, 30 observations: 3.35
set.seed(9); g <- gl(3, 10); Fs <- replicate(5000, anova(lm(rnorm(30) ~ g))$F[1])
c(mean(Fs), mean(Fs > qf(0.95, 2, 27)))          # centred near 1, exceeds the cut-off 5% of the time
qt(0.975, 20)^2; qf(0.95, 1, 20)                 # t squared equals F with 1 numerator df
```

## Connections
- **Builds on:** [[Chi-square Distribution]], [[Variance]]
- **Leads to:** [[F-test]], [[ANOVA]], [[Student t Distribution]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What does an F statistic compare?
??
Variation explained per model degree of freedom against residual variation per residual degree of freedom.
++++

How is F related to t?
??
F with 1 numerator df equals t squared.
++++
