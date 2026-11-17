---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Negative binomial regression"
  - "glm.nb()"
  - "nbinom2"
  - "NB GLM"
status: seedling
---

# Negative Binomial GLM

**In one line:** a negative binomial GLM is a count regression like Poisson regression with one extra parameter that lets the variance exceed the mean.

> [!info] Before this, it helps to know
> [[Negative Binomial Distribution]] (the random part) · [[Poisson Regression]] (which it extends) · [[Overdispersion]] (the reason for it)

## The everyday picture
The same forecast curve as a Poisson model, with an honest, wider band around it. The curve says what to expect. The band now admits how clumped real counts are.

## Start from zero
1. **yᵢ ~ NegBin(μᵢ, k).** log(μᵢ) = ηᵢ.
2. **Variance = μ + μ²/k.**
3. **k (theta) is estimated** along with the coefficients.
4. **Coefficients are interpreted exactly as in Poisson regression:** exp(β) is a rate ratio.
5. **Standard errors are larger and more honest** when data are overdispersed.
6. **As k → ∞ it becomes Poisson.** A likelihood ratio test or AIC compares the two.
7. **In R:** `MASS::glm.nb(y ~ x)` or `glmmTMB(y ~ x, family = nbinom2)`.
8. **Two flavours in glmmTMB:** `nbinom2` (variance = μ + μ²/k, the usual one) and `nbinom1` (variance = μ(1 + α), proportional to the mean like quasi-Poisson).
9. **Offsets work the same way.**

## In R
```r
library(MASS); set.seed(20); d <- data.frame(tree = runif(200, 0, 60)); d$y <- rnbinom(200, mu = exp(2.3 - 0.02 * d$tree), size = 1.5)
mp <- glm(y ~ tree, family = poisson, d); mnb <- glm.nb(y ~ tree, d)
rbind(poisson = summary(mp)$coefficients[2, 1:2], negbin = summary(mnb)$coefficients[2, 1:2])     # similar estimate, larger SE
c(theta = mnb$theta, AIC_poisson = AIC(mp), AIC_negbin = AIC(mnb))
```

## In the course
Count GLM lab ([[Course Website]]). [[Zuur et al. 2009 Ch9]].

## Common confusions
- **"Negative binomial changes the mean model."** Only the variance.
- **"Theta is the overdispersion."** Small theta means large overdispersion.

## Explain it back
- How do its coefficients' interpretations differ from a Poisson GLM's?

*Pass test:* you can fit both models and compare them.

## Connections
- **Builds on:** [[Negative Binomial Distribution]], [[Poisson Regression]]
- **Leads to:** [[Overdispersion]], [[Quasi-Poisson]], [[Zero-inflated Model]], [[Dispersion Parameter]]
- **Part of:** [[MOC - Generalized Linear Models]], molecular note [[Poisson vs Negative Binomial]]

## Flashcards

What does a negative binomial GLM add to a Poisson GLM?
??
A dispersion parameter (k or theta) allowing variance = μ + μ²/k.
++++

Are negative binomial coefficients interpreted differently from Poisson ones?
??
No. With a log link, exp(β) is still a rate ratio.
++++
