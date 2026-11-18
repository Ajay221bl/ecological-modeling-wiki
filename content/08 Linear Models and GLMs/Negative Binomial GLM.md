---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "A negative binomial GLM is a count regression like Poisson regression with one extra parameter that lets the variance exceed the mean."
aliases:
  - "Negative binomial regression"
  - "glm.nb()"
  - "nbinom2"
  - "NB GLM"
status: seedling
---

# Negative Binomial GLM

Picture the same forecast curve as a Poisson model, now with an honest, wider band around it: the curve says what to expect, and the band admits how clumped real counts are. A **negative binomial GLM** is a count regression like [[Poisson Regression]] with one extra parameter that lets the variance exceed the mean: yᵢ ~ NegBin(μᵢ, k), log(μᵢ) = ηᵢ, and variance = μ + μ²/k ([[Negative Binomial Distribution]]). k, called theta, is estimated along with the coefficients. Coefficients are interpreted exactly as in Poisson regression, with exp(β) a [[Rate Ratio|rate ratio]], and offsets work the same way.

When the data are overdispersed, its standard errors are larger and more honest. In the code below, counts simulated with k = 1.5 give a similar slope estimate under Poisson and negative binomial models but a larger [[Standard Error|standard error]] under the negative binomial, which also has a much lower AIC and an estimated theta near 1.5. As k grows toward infinity it becomes the Poisson, so a [[Likelihood Ratio Test|likelihood ratio test]] or AIC compares the two ([[Overdispersion]]).

In R it is `MASS::glm.nb(y ~ x)` or `glmmTMB(y ~ x, family = nbinom2)`. glmmTMB has two flavours: `nbinom2`, with variance μ + μ²/k, the usual one, and `nbinom1`, with variance μ(1 + α), [[Proportional To|proportional to]] the mean like [[Quasi-Poisson]] ([[Dispersion Parameter]], [[Zuur et al. 2009 Ch9]], [[Course Website]]). Two confusions. It does not change the mean model, only the variance. And theta is not "the overdispersion": small theta means large overdispersion. If [[Zero Inflation|excess zeros]] remain, the next step is a [[Zero-inflated Model]].

```r
library(MASS); set.seed(20); d <- data.frame(tree = runif(200, 0, 60)); d$y <- rnbinom(200, mu = exp(2.3 - 0.02 * d$tree), size = 1.5)
mp <- glm(y ~ tree, family = poisson, d); mnb <- glm.nb(y ~ tree, d)
rbind(poisson = summary(mp)$coefficients[2, 1:2], negbin = summary(mnb)$coefficients[2, 1:2])     # similar estimate, larger SE
c(theta = mnb$theta, AIC_poisson = AIC(mp), AIC_negbin = AIC(mnb))
```

## Connections
- **Builds on:** [[Negative Binomial Distribution]], [[Poisson Regression]], [[Rate Ratio]], [[Standard Error]], [[Likelihood Ratio Test]], [[Proportional To]], [[Zero Inflation]]
- **Leads to:** [[Overdispersion]], [[Quasi-Poisson]], [[Zero-inflated Model]], [[Dispersion Parameter]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]], molecular note [[Poisson vs Negative Binomial]]

## Flashcards

What does a negative binomial GLM add to a Poisson GLM?
??
A dispersion parameter (k or theta) allowing variance = μ + μ²/k.
++++

Are negative binomial coefficients interpreted differently from Poisson ones?
??
No. With a log link, exp(β) is still a rate ratio.
++++
