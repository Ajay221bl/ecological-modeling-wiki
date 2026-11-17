---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Corrected AIC"
  - "Small-sample AIC"
  - "AICc (small-sample correction)"
  - "Second-order AIC"
status: seedling
---

# AICc

**In one line:** AICc is AIC with an extra penalty for small samples, AICc = AIC + 2K(K + 1)/(n − K − 1), which matters when there are few observations per parameter.

> [!info] Before this, it helps to know
> [[AIC]] (what it corrects) · [[Number of Parameters]] and [[Sample Size]] (the ratio that matters)

## The everyday picture
A stricter handicap in junior leagues. With few games played, a lucky streak can look like skill, so complex models get a heavier penalty until there is enough data to trust them.

## A tiny example
n = 20, K = 5. Correction = 2 × 5 × 6 / 14 = 4.3 extra. With n = 200 it would be 0.3.

## Start from zero
1. **AIC's penalty is derived for large samples.** With small n it under-penalises, so overfitting creeps in.
2. **Correction term:** 2K(K + 1)/(n − K − 1).
3. **It grows quickly as K approaches n.**
4. **It vanishes as n grows,** so AICc becomes AIC.
5. **Rule of thumb from Burnham and Anderson:** use AICc when n/K < 40. Since it converges to AIC anyway, many people use it always.
6. **Use one criterion consistently** across the model set.
7. **n is the number of observations,** which is ambiguous for mixed models (observations or groups).

## In R
```r
aicc <- function(m) { k <- attr(logLik(m), "df"); n <- nobs(m); AIC(m) + 2 * k * (k + 1) / (n - k - 1) }
set.seed(5); x <- runif(15); y <- 1 + x + rnorm(15); m1 <- lm(y ~ x); m4 <- lm(y ~ poly(x, 4))
round(rbind(AIC = c(m1 = AIC(m1), m4 = AIC(m4)), AICc = c(aicc(m1), aicc(m4))), 1)      # with n = 15, AIC prefers the 4th-degree curve. AICc does not.
2 * 5 * 6 / (20 - 5 - 1); 2 * 5 * 6 / (200 - 5 - 1)
```

## In the course
Used throughout the model selection lab ([[Course Website]]). [[Anderson and Burnham 2002]].

## Common confusions
- **"AICc is only for tiny datasets."** The issue is n relative to K.

## Explain it back
- Compute the correction for n = 30, K = 4.

*Pass test:* you can say when AICc differs meaningfully from AIC.

## Connections
- **Builds on:** [[AIC]], [[Number of Parameters]]
- **Leads to:** [[Delta AIC]], [[QAIC]], [[Overfitting]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

What is the AICc formula?
??
AICc = AIC + 2K(K + 1)/(n − K − 1).
++++

When should AICc be used instead of AIC?
??
When n/K is small (Burnham and Anderson suggest below about 40).
++++
