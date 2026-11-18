---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "AIC scores a model by its fit penalised for its number of parameters, AIC = −2 log-likelihood + 2K, and the model with the lowest AIC is estimated to lose the least information."
aliases:
  - "Akaike Information Criterion"
  - "Akaike's information criterion"
  - "AIC()"
status: seedling
---

# AIC

A sports handicap adds to each player's raw score for each advantage they bring, so a player with many advantages wins only if they play well enough to overcome it. **AIC**, the Akaike Information Criterion, scores a model by its fit penalised for its number of parameters: AIC = −2 log-likelihood + 2K ([[Log-likelihood]], [[Number of Parameters]]). −2 log L measures misfit and 2K penalises complexity; the model with the lowest AIC is estimated to lose the least information ([[Kullback-Leibler Information]]). Model A with log-likelihood −120 and K = 3 has AIC = 240 + 6 = 246. Model B with log-likelihood −118.5 and K = 5 has AIC = 237 + 10 = 247: B fits better, but not by enough to pay for two extra parameters.

The penalty isn't arbitrary: it corrects the optimism of judging a model on the data it was fitted to, so AIC estimates out-of-sample performance, and it is asymptotically equivalent to [[Leave-one-out Cross-validation]]. Each parameter must pay its way by raising log L by more than 1. K counts every estimated parameter, including σ in a normal model and [[Variance Components|variance components]] in a [[Mixed Effects Model|mixed model]]. Only differences matter, so use [[Delta AIC]] and the [[Akaike Weight]]; for small samples use [[AICc]]. In the code below the straight-line model's AIC computed by hand matches `AIC()` at 131.5 with K = 3 (intercept, slope and σ), and a fourth-degree polynomial on the same data scores 134.8.

AIC is the centre of the [[Model Selection|model selection]] lecture and lab ([[Course Website]], [[Anderson and Burnham 2002]], [[Johnson and Omland 2004]]); its stricter sibling is [[BIC]]. Three confusions. An AIC of 246 is neither good nor bad; only differences between models fitted to exactly the same data mean anything. AIC can't compare a model of y with a model of [[Log Transformation|log(y)]], since the responses differ and the likelihoods aren't comparable without a [[Jacobian Adjustment|Jacobian]] correction. And the lowest AIC means the best of the set, not a good model, so validate it.

```r
set.seed(4); x <- runif(50); y <- 1 + 2 * x + rnorm(50); m1 <- lm(y ~ x); m2 <- lm(y ~ poly(x, 4))
c(by_hand = -2 * as.numeric(logLik(m1)) + 2 * attr(logLik(m1), "df"), AIC = AIC(m1)); attr(logLik(m1), "df")     # K = 3: intercept, slope, sigma
AIC(m1, m2)
```

## Connections
- **Builds on:** [[Log-likelihood]], [[Number of Parameters]], [[Kullback-Leibler Information]], [[Model Selection]], [[Log Transformation]]
- **Leads to:** [[AICc]], [[Delta AIC]], [[Akaike Weight]], [[BIC]], [[Leave-one-out Cross-validation]], [[Variance Components]], [[Mixed Effects Model]], [[Jacobian Adjustment]]
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
