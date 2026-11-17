---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Probit"
  - "Probit regression"
status: seedling
---

# Probit Link

**In one line:** the probit link converts a probability into the z-score that has that much of the standard normal distribution below it, and models that z-score as a linear function of predictors.

> [!info] Before this, it helps to know
> [[Standard Normal Distribution]] (its basis) · [[Quantile Function]] (the link is `qnorm`) · [[Logit Link]] (the usual alternative)

## The everyday picture
A hidden tolerance. Each seed has its own threshold of moisture needed to germinate, and thresholds vary among seeds like a bell curve. The share of seeds germinating at a given moisture is the share of the bell below that moisture.

## Start from zero
1. **probit(p) = qnorm(p).** Inverse: p = pnorm(η).
2. **S-shaped like the logit,** with slightly thinner tails.
3. **Fits are nearly indistinguishable from logit fits.** Probit coefficients are roughly logit coefficients divided by 1.6 to 1.8.
4. **Interpretation:** a latent normal variable crossing a threshold.
5. **Why you might meet it:** dose-response work, and Bayesian samplers where the normal form is convenient.
6. **Why logit is more common in ecology:** odds ratios are easier to explain than shifts in a latent z-score.

## In R
```r
qnorm(c(0.1, 0.5, 0.9)); qlogis(c(0.1, 0.5, 0.9))
set.seed(9); x <- rnorm(500); y <- rbinom(500, 1, plogis(0.3 + 1.2 * x))
cl <- coef(glm(y ~ x, family = binomial)); cp <- coef(glm(y ~ x, family = binomial("probit"))); rbind(logit = cl, probit = cp, ratio = cl / cp)
```

## In the course
Listed as an alternative link in [[Zuur et al. 2009 Ch10]].

## Common confusions
- **"Probit and logit give different conclusions."** Rarely. They differ mainly in the scale of the coefficients.

## Explain it back
- What is the inverse of the probit link?

*Pass test:* you can say how probit differs from logit.

## Connections
- **Builds on:** [[Standard Normal Distribution]], [[Logit Link]]
- **Leads to:** [[Complementary Log-log Link]], [[Latent Variable]], [[Logistic Regression]]
- **Part of:** [[MOC - Generalized Linear Models]]

## Flashcards

What is the probit link?
??
qnorm(p): the standard normal quantile of the probability.
++++
