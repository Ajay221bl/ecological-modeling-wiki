---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Akaike Information Criterion"
  - "Akaike's information criterion"
  - "AIC()"
status: seedling
---

# AIC

**In one line:** AIC scores a model by its fit penalised for its number of parameters, AIC = −2 log-likelihood + 2K, and the model with the lowest AIC is estimated to lose the least information.

> [!info] Before this, it helps to know
> [[Log-likelihood]] (the fit term) · [[Number of Parameters]] (the penalty) · [[Kullback-Leibler Information]] (what it estimates)

## The everyday picture
A sports handicap. Each player's score is their raw result plus a handicap for each advantage they bring. Complex models bring many parameters, so they carry a bigger handicap. They win only if their fit is good enough to overcome it.

## A tiny example
Model A: log-likelihood −120, K = 3. AIC = 240 + 6 = 246.
Model B: log-likelihood −118.5, K = 5. AIC = 237 + 10 = 247.
B fits better but not by enough to pay for two extra parameters.

## Start from zero
1. **−2 log L** measures misfit (smaller is better).
2. **2K** penalises complexity.
3. **AIC = −2 log L + 2K.**
4. **The penalty isn't arbitrary:** it corrects the optimism of judging a model on the data it was fitted to, so AIC estimates out-of-sample performance.
5. **Only differences matter.** The absolute AIC value means nothing.
6. **Models must be fitted to exactly the same data** (same rows, same response, same transformation).
7. **Each parameter must pay its way:** it must raise log L by more than 1 to lower AIC.
8. **K counts every estimated parameter,** including σ in a normal model and variance components in a mixed model.
9. **For small samples use AICc.**
10. **AIC is asymptotically equivalent to leave-one-out cross-validation.**

## In R
```r
set.seed(4); x <- runif(50); y <- 1 + 2 * x + rnorm(50); m1 <- lm(y ~ x); m2 <- lm(y ~ poly(x, 4))
c(by_hand = -2 * as.numeric(logLik(m1)) + 2 * attr(logLik(m1), "df"), AIC = AIC(m1)); attr(logLik(m1), "df")     # K = 3: intercept, slope, sigma
AIC(m1, m2)
```

## In the course
Model selection lecture and lab ([[Course Website]]). [[Anderson and Burnham 2002]], [[Johnson and Omland 2004]].

## Common confusions
- **"An AIC of 246 is good."** Only differences between models fitted to the same data mean anything.
- **"AIC can compare a model of y with a model of log(y)."** The responses differ, so the likelihoods aren't comparable (without a Jacobian correction).
- **"Lowest AIC means the model is good."** It is the best of the set. Validate it.

## Explain it back
- How much must an extra parameter raise the log-likelihood to lower AIC?
- Why does K include σ?

*Pass test:* you can compute and compare AIC values correctly.

## Connections
- **Builds on:** [[Log-likelihood]], [[Number of Parameters]], [[Kullback-Leibler Information]]
- **Leads to:** [[AICc]], [[Delta AIC]], [[Akaike Weight]], [[BIC]], [[Leave-one-out Cross-validation]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]], molecular note [[Why AIC rewards fit but punishes complexity]], [[Likelihood Ratio Test vs AIC]], [[AIC vs BIC]]

## Flashcards

What is the formula for AIC?
??
AIC = −2 log L + 2K, where K is the number of estimated parameters.
++++

What does a lower AIC indicate?
??
Less estimated information loss: better expected out-of-sample performance among the models compared.
++++

Can AIC compare models fitted to different datasets?
??
No. All models must use the same observations and response.
++++
