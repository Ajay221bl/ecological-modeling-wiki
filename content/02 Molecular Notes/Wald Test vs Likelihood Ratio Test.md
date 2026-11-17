---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - lm-glm
aliases:
  - "Wald vs LRT"
  - "z-test vs likelihood ratio test"
  - "summary() p-values vs anova() p-values"
status: seedling
---

# Wald Test vs Likelihood Ratio Test

> [!summary] In plain words
> a Wald test judges a parameter by its estimate divided by its standard error, using only the curvature at the peak of the likelihood, while a likelihood ratio test refits the model without the parameter and compares the two log-likelihoods; they agree in large samples, but the likelihood ratio test is more reliable in small samples, near boundaries and with skewed likelihoods.

## The question
Why do the p-values from summary() and anova() disagree for my GLM?

## Built from
- [[Wald Test]] and [[z-test]].
- [[Likelihood Ratio Test]] and [[Nested Models]].
- [[Likelihood Profile]] and [[Hessian Matrix]].

## The reasoning, step by step
1. **Wald:** z = β̂ / SE(β̂), compared to a normal; it assumes the log-likelihood is a parabola around β̂.
2. **LRT:** 2 × (ℓ_full − ℓ_reduced), compared to a χ² with df = number of dropped parameters.
3. **When the log-likelihood is a parabola,** both give the same answer.
4. **When it is skewed** (small n, logistic models with strong effects, parameters near a boundary), Wald SEs can be badly off; in extreme cases a huge effect gives a small z (the Hauck-Donner effect).
5. **The same split appears in intervals:** Wald intervals vs profile-likelihood intervals.
6. **In R:** `summary()` reports Wald z or t tests; `anova(m0, m1, test = "Chisq")` or `drop1(m, test = "Chisq")` gives LRTs.

| | Wald | Likelihood ratio |
|---|---|---|
| Fits needed | One | Two |
| Uses | Peak and curvature | Whole drop in log-likelihood |
| Small samples | Can mislead | Better |
| Where in R | `summary()` | `anova()`, `drop1()` |
For a small logistic data set (10 birds, survival rising with mass), the Wald test gives p = 0.088 and the likelihood ratio test p = 0.009 for the same slope.

## So in practice
For GLMs and small samples, report likelihood ratio tests (or profile intervals) for key effects rather than the Wald p-values in `summary()`.

## In R
```r
x <- 1:10; y <- c(0, 0, 0, 1, 0, 0, 1, 1, 1, 1)
m1 <- glm(y ~ x, family = binomial); m0 <- glm(y ~ 1, family = binomial)
round(c(wald_p = summary(m1)$coef[2, 4], lrt_p = anova(m0, m1, test = "Chisq")$`Pr(>Chi)`[2]), 3)
```

## What would go wrong otherwise
Concluding "no effect" from a non-significant Wald test in a logistic model with near-complete separation.

## Explain it back
- What does the Wald test assume about the log-likelihood?

*Pass test:* you can run both tests in R and explain any disagreement.

## Connections
- **Related:** [[Wald, Profile and Bootstrap Intervals]], [[Likelihood Ratio Test vs AIC]], [[Probability vs Likelihood]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]], [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

Wald test vs LRT in one line?
??
Wald: estimate/SE from one fit. LRT: compare log-likelihoods of two nested fits.
++++

Which is more reliable in small samples?
??
The likelihood ratio test.
++++
