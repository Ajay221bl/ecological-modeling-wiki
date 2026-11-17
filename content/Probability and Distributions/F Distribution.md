---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "F"
  - "df()"
  - "Fisher's F"
status: seedling
---

# F Distribution

**In one line:** the F distribution describes the ratio of two independent variance estimates, and is used to judge whether one source of variation is larger than another.

> [!info] Before this, it helps to know
> [[Chi-square Distribution]] (its building block) · [[Variance]] (what is being compared) · [[Degrees of Freedom]] (it has two)

## The everyday picture
Comparing the noise in two rooms by dividing one loudness reading by the other. If both rooms are equally noisy, the ratio hovers around 1. A ratio of 6 suggests the first room is truly louder. The F distribution tells you how far from 1 the ratio wanders by chance alone.

## Start from zero
1. **Take two independent chi-square variables.** Divide each by its df. Take the ratio.
2. **Two parameters:** numerator df and denominator df.
3. **Support:** positive. Centred near 1 when the two variances are equal.
4. **In ANOVA and regression:** F = (variation explained per parameter) ÷ (residual variation per residual df).
5. **If the predictors do nothing, both estimate the same noise variance** and F is about 1. A large F is evidence that the model explains real variation.
6. **Link to t:** an F with 1 numerator df is the square of a t.
7. **Why F and not chi-square in linear models:** the residual variance is estimated, and the denominator accounts for that, just as t does compared with z.

## In R
```r
qf(0.95, 2, 27)                                  # critical value for 3 groups, 30 observations: 3.35
set.seed(9); g <- gl(3, 10); Fs <- replicate(5000, anova(lm(rnorm(30) ~ g))$F[1])
c(mean(Fs), mean(Fs > qf(0.95, 2, 27)))          # centred near 1, exceeds the cut-off 5% of the time
qt(0.975, 20)^2; qf(0.95, 1, 20)                 # t squared equals F with 1 numerator df
```

## In the course
The F statistic in `summary(lm())` and `anova()` ([[Zuur et al. 2009 Ch2]]).

## Common confusions
- **"A big F says which groups differ."** It says only that some variation is explained.

## Explain it back
- What value does F take on average when the null is true?

*Pass test:* you can explain F as a ratio of explained to unexplained variance.

## Connections
- **Builds on:** [[Chi-square Distribution]], [[Variance]]
- **Leads to:** [[F-test]], [[ANOVA]], [[Student t Distribution]]
- **Part of:** [[MOC - Probability and Distributions]]

## Flashcards

What does an F statistic compare?
??
Variation explained per model degree of freedom against residual variation per residual degree of freedom.
++++

How is F related to t?
??
F with 1 numerator df equals t squared.
++++
