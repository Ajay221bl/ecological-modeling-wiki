---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Analysis of deviance table"
  - "anova() for GLMs"
  - "Deviance test"
  - "Chi-square test of nested GLMs"
status: seedling
---

# Analysis of Deviance

**In one line:** analysis of deviance compares nested GLMs by testing whether the drop in deviance from adding terms is larger than chance would give, using a chi-square distribution.

> [!info] Before this, it helps to know
> [[Deviance]] (what is compared) · [[Likelihood Ratio Test]] (it is one) · [[Nested Models]] (the requirement) · [[ANOVA]] (the linear-model counterpart)

## The everyday picture
Asking whether the lessons improved your golf by more than your scores bounce around anyway.

## A tiny example
Deviance without `tree`: 160 on 98 df. With `tree`: 110 on 97 df. Drop = 50 on 1 df. The chi-square(1) 5% cutoff is 3.84. Strong evidence for `tree`.

## Start from zero
1. **Fit two nested models.**
2. **Drop in deviance = deviance(small) − deviance(big).** This equals the likelihood ratio statistic.
3. **Compare with chi-square,** df = number of extra parameters.
4. **R:** `anova(m_small, m_big, test = "Chisq")`. Or `drop1(m, test = "Chisq")` for each term in turn.
5. **`anova(m)` on one model is sequential:** each term is tested after those listed before it, so order matters with correlated predictors.
6. **When a dispersion is estimated** (quasi families, gamma, normal), use `test = "F"`.
7. **More reliable than Wald z-tests** for small samples and for factors with several levels (one test for the whole factor).

## In R
```r
set.seed(5); d <- data.frame(tree = runif(100, 0, 60), grass = runif(100, 0, 100)); d$y <- rpois(100, exp(2 - 0.02 * d$tree))
m0 <- glm(y ~ 1, family = poisson, d); m1 <- glm(y ~ tree, family = poisson, d); m2 <- glm(y ~ tree + grass, family = poisson, d)
anova(m0, m1, m2, test = "Chisq")
drop1(m2, test = "Chisq")
```

## In the course
[[Zuur et al. 2009 Ch9]] and Ch10. Used in the GLM labs to test factors ([[Course Website]]).

## Common confusions
- **"`anova(m)` tests each term adjusted for all others."** It is sequential. `drop1` or `car::Anova` gives the adjusted tests.

## Explain it back
- What distribution is the drop in deviance compared with, and with what df?

*Pass test:* you can run and read an analysis of deviance table.

## Connections
- **Builds on:** [[Deviance]], [[Likelihood Ratio Test]], [[Nested Models]]
- **Leads to:** [[Chi-square Distribution]], [[ANOVA]], [[Wald Test]], [[AIC]]
- **Part of:** [[MOC - Generalized Linear Models]], molecular note [[Wald Test vs Likelihood Ratio Test]]

## Flashcards

What does an analysis of deviance test?
??
Whether adding terms to a GLM reduces the deviance more than expected by chance, via a chi-square (likelihood ratio) test.
++++

Which R call compares two nested GLMs?
??
anova(small, big, test = "Chisq").
++++
