---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "Testing on the boundary"
  - "Boundary problem"
  - "Halving the p-value"
  - "Mixture chi-square"
  - "RLRsim"
status: seedling
---

# Boundary Problem When Testing Variances

**In one line:** testing whether a random-effect variance is zero is awkward because zero is the smallest value a variance can take, so the usual chi-square reference distribution is wrong and gives p-values that are too large.

> [!info] Before this, it helps to know
> [[Likelihood Ratio Test]] · [[Chi-square Distribution]] · [[Variance Components]]

## Start from zero
1. **H₀: σ²_b = 0** sits on the edge of the parameter space.
2. **Under H₀ the LRT statistic is 0 half the time** (the estimate hits the boundary) and χ²₁ the other half.
3. **So the correct reference is a 50:50 mixture of 0 and χ²₁.** Its 5% critical value is 2.71, not 3.84.
4. **Practical fix for one variance:** halve the naive p-value (Harrison et al.; Zuur Ch5).
5. **For more complex cases:** parametric bootstrap, or `RLRsim::exactRLRT()`.
6. **AIC has the same boundary issue** (Zuur Ch5); it doesn't escape it.
7. **Compare random structures with REML** (same fixed effects).

## See it
![[Boundary mixture.png|700]]
*What to look at:* the naive cut-off sits to the right of the correct one, so naive tests are too conservative.

## In R
```r
library(lme4); set.seed(2); d <- data.frame(g = factor(rep(1:10, each = 6))); d$y <- 5 + rnorm(10, 0, 0.5)[d$g] + rnorm(60)      # small real group variation
m1 <- lmer(y ~ 1 + (1 | g), d); lrt <- as.numeric(2 * (logLik(m1) - logLik(lm(y ~ 1, d), REML = TRUE)))        # both REML likelihoods
round(c(LRT = lrt, p_naive = pchisq(lrt, 1, lower.tail = FALSE), p_halved = 0.5 * pchisq(lrt, 1, lower.tail = FALSE)), 3)     # the naive test misses it, the corrected one doesn't
```

## In the course
"Why LRTs fail: variance null hypothesis on the boundary" in the linear mixed models lab ([[Course Website]]). [[Harrison et al. 2018]]. [[Zuur et al. 2009 Ch5]].

## Common confusions
- **"The naive LRT p-value is fine for variances."** It is roughly double the correct value for one variance.

## Explain it back
- What is the correct reference distribution for testing one variance?

*Pass test:* you can correct an LRT for a variance.

## Connections
- **Builds on:** [[Likelihood Ratio Test]], [[Chi-square Distribution]], [[Variance Components]]
- **Leads to:** [[Parametric Bootstrap]], [[REML]], [[p-values in Mixed Models]]
- **Part of:** [[MOC - Mixed Models]]

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
