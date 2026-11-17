---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "AICc is AIC with an extra penalty for small samples, AICc = AIC + 2K(K + 1)/(n − K − 1), which matters when there are few observations per parameter."
aliases:
  - "Corrected AIC"
  - "Small-sample AIC"
  - "AICc (small-sample correction)"
  - "Second-order AIC"
status: seedling
---

# AICc

Junior leagues use a stricter handicap, because with few games played a lucky streak can look like skill. **AICc** is AIC with an extra penalty for small samples: AICc = AIC + 2K(K + 1)/(n − K − 1) ([[AIC]], [[Number of Parameters]], [[Sample Size]]). AIC's penalty is derived for large samples, so with small n it under-penalises and overfitting creeps in ([[Overfitting]]). With n = 20 and K = 5 the correction adds 2 × 5 × 6 / 14 = 4.3; with n = 200 it would add only 0.3.

The correction grows quickly as K approaches n and vanishes as n grows, so AICc becomes AIC. Burnham and Anderson's rule of thumb is to use AICc when n/K < 40, and since it converges to AIC anyway many people use it always. In the code below, with only 15 observations, AIC prefers a fourth-degree polynomial (45.1 against 48.0 for a straight line), while AICc prefers the straight line (50.2 against 55.6).

Use one criterion consistently across the model set, and note that n is ambiguous for mixed models, observations or groups. AICc is used throughout the model selection lab ([[Course Website]], [[Anderson and Burnham 2002]]) and in [[Delta AIC]] tables; [[QAIC]] has a small-sample version too. AICc is not only for tiny datasets: what matters is n relative to K.

```r
aicc <- function(m) { k <- attr(logLik(m), "df"); n <- nobs(m); AIC(m) + 2 * k * (k + 1) / (n - k - 1) }
set.seed(5); x <- runif(15); y <- 1 + x + rnorm(15); m1 <- lm(y ~ x); m4 <- lm(y ~ poly(x, 4))
round(rbind(AIC = c(m1 = AIC(m1), m4 = AIC(m4)), AICc = c(aicc(m1), aicc(m4))), 1)      # with n = 15, AIC prefers the 4th-degree curve. AICc does not.
2 * 5 * 6 / (20 - 5 - 1); 2 * 5 * 6 / (200 - 5 - 1)
```

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
