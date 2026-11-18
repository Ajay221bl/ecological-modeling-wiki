---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "Testing whether a random-effect variance is zero is awkward because zero is the smallest value a variance can take, so the usual chi-square reference distribution is wrong and gives p-values that are too large."
aliases:
  - "Testing on the boundary"
  - "Boundary problem"
  - "Halving the p-value"
  - "Mixture chi-square"
  - "RLRsim"
status: seedling
---

# Boundary Problem When Testing Variances

Testing whether a random-effect variance is zero is awkward because zero is the smallest value a variance can take, so the [[Null Hypothesis|null hypothesis]] H₀: σ²_b = 0 sits on the edge of the parameter space ([[Likelihood Ratio Test]], [[Variance Components]]). Under H₀ the LRT statistic is 0 half the time, when the estimate hits the boundary, and χ²₁ the other half, so the correct reference is a 50:50 [[Mixture Distribution|mixture]] of 0 and χ²₁ ([[Chi-square Distribution]]). Its 5% critical value is 2.71, not 3.84, and the naive test gives p-values that are too large. The figure shows the naive cut-off sitting to the right of the correct one.

For one variance the practical fix is to halve the naive p-value (Harrison et al.; Zuur Ch5); for more complex cases use a [[Parametric Bootstrap]] or `RLRsim::exactRLRT()`. AIC has the same boundary issue and doesn't escape it, and random structures should be compared with REML fits with the same [[Fixed Effect|fixed effects]] ([[REML]]). In the code below ten groups with small real variation give an LRT of 3.06: the naive p = 0.080 misses it, while the halved p = 0.040 does not.

It is covered as "Why LRTs fail: variance null hypothesis on the boundary" in the linear [[Mixed Effects Model|mixed models]] lab ([[Course Website]], [[Harrison et al. 2018]], [[Zuur et al. 2009 Ch5]]). The naive LRT p-value is not fine for variances: for one variance it is about double the correct value.

![[Boundary mixture.png|700]]
*What to look at:* the naive cut-off sits to the right of the correct one, so naive tests are too conservative.

```r
library(lme4); set.seed(2); d <- data.frame(g = factor(rep(1:10, each = 6))); d$y <- 5 + rnorm(10, 0, 0.5)[d$g] + rnorm(60)      # small real group variation
m1 <- lmer(y ~ 1 + (1 | g), d); lrt <- as.numeric(2 * (logLik(m1) - logLik(lm(y ~ 1, d), REML = TRUE)))        # both REML likelihoods
round(c(LRT = lrt, p_naive = pchisq(lrt, 1, lower.tail = FALSE), p_halved = 0.5 * pchisq(lrt, 1, lower.tail = FALSE)), 3)     # the naive test misses it, the corrected one doesn't
```

## Connections
- **Builds on:** [[Likelihood Ratio Test]], [[Chi-square Distribution]], [[Variance Components]], [[Null Hypothesis]], [[Mixture Distribution]], [[Fixed Effect]], [[Mixed Effects Model]]
- **Leads to:** [[Parametric Bootstrap]], [[REML]], [[p-values in Mixed Models]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

Why is testing a random-effect variance against zero a boundary problem?
??
Zero is the edge of the variance's possible range, so the LRT statistic doesn't follow a chi-square distribution.
![[Boundary mixture.png]]
++++

What simple correction applies to an LRT of one variance component?
??
Halve the naive chi-square p-value.
++++
