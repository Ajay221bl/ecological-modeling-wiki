---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Analysis of deviance compares nested GLMs by testing whether the drop in deviance from adding terms is larger than chance would give, using a chi-square distribution."
aliases:
  - "Analysis of deviance table"
  - "anova() for GLMs"
  - "Deviance test"
  - "Chi-square test of nested GLMs"
status: seedling
---

# Analysis of Deviance

Did the golf lessons improve your score by more than your scores bounce around anyway? **Analysis of deviance** asks that of nested GLMs: it tests whether the drop in [[Deviance]] from adding terms is larger than chance would give ([[Nested Models]]). Fit two nested models; the drop in deviance, deviance(small) − deviance(big), equals the likelihood ratio statistic ([[Likelihood Ratio Test]]); compare it with a [[Chi-square Distribution]] with df equal to the number of extra parameters. If the deviance without `tree` is 160 on 98 df and with `tree` 110 on 97 df, the drop is 50 on 1 df, far above the 5% cut-off of 3.84, so there is strong evidence for `tree`.

In R, `anova(m_small, m_big, test = "Chisq")` compares models, and `drop1(m, test = "Chisq")` tests each term in turn. The code below compares an intercept-only model, a tree-cover model and a model adding grass cover; tree cover gives a big drop and grass, which has no real effect, a small one. When a dispersion is estimated, as in quasi families, gamma or normal models, use `test = "F"` instead.

It is more reliable than [[Wald Test|Wald z-tests]] in small samples and for factors with several levels, because it gives one test for the whole factor; it is the GLM version of [[ANOVA]] ([[Zuur et al. 2009 Ch9]], [[Course Website]]). One trap: `anova(m)` on a single model is sequential, testing each term after those listed before it, so order matters with correlated predictors. `drop1()` or `car::Anova()` gives tests adjusted for all other terms. For non-nested models use [[AIC]].

```r
set.seed(5); d <- data.frame(tree = runif(100, 0, 60), grass = runif(100, 0, 100)); d$y <- rpois(100, exp(2 - 0.02 * d$tree))
m0 <- glm(y ~ 1, family = poisson, d); m1 <- glm(y ~ tree, family = poisson, d); m2 <- glm(y ~ tree + grass, family = poisson, d)
anova(m0, m1, m2, test = "Chisq")
drop1(m2, test = "Chisq")
```

## Connections
- **Builds on:** [[Deviance]], [[Likelihood Ratio Test]], [[Nested Models]]
- **Leads to:** [[Chi-square Distribution]], [[ANOVA]], [[Wald Test]], [[AIC]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]], molecular note [[Wald Test vs Likelihood Ratio Test]]

## Flashcards

What does an analysis of deviance test?
??
Whether adding terms to a GLM reduces the deviance more than expected by chance, via a chi-square (likelihood ratio) test.
++++

Which R call compares two nested GLMs?
??
anova(small, big, test = "Chisq").
++++
