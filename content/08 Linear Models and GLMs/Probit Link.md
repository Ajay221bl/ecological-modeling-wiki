---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "The probit link converts a probability into the z-score that has that much of the standard normal distribution below it, and models that z-score as a linear function of predictors."
aliases:
  - "Probit"
  - "Probit regression"
status: seedling
---

# Probit Link

Each seed has its own threshold of moisture needed to germinate, and thresholds vary among seeds like a bell curve. The share of seeds germinating at a given moisture is the share of the bell below that moisture. The **probit link** builds on that picture: it converts a probability into the z-score that has that much of the [[Standard Normal Distribution]] below it, probit(p) = qnorm(p), and models that z-score as a linear function of predictors ([[Quantile Function]]). Its inverse is p = pnorm(η). The interpretation is a hidden normal variable crossing a threshold ([[Latent Variable]]).

It is S-shaped like the logit, with slightly thinner tails, and fits are nearly indistinguishable from logit fits. The code below compares the probit and logit of 0.1, 0.5 and 0.9, then fits the same simulated data with both links: the probit coefficients are about the logit coefficients divided by 1.6 to 1.8 ([[Logit Link]]).

You may meet it in dose-response work and in Bayesian samplers where the normal form is convenient. It is less common in ecology because odds ratios are easier to explain than shifts in a latent z-score ([[Zuur et al. 2009 Ch10]], [[Logistic Regression]]). Probit and logit rarely give different conclusions; they differ mainly in the scale of the coefficients. An asymmetric alternative is the [[Complementary Log-log Link]].

```r
qnorm(c(0.1, 0.5, 0.9)); qlogis(c(0.1, 0.5, 0.9))
set.seed(9); x <- rnorm(500); y <- rbinom(500, 1, plogis(0.3 + 1.2 * x))
cl <- coef(glm(y ~ x, family = binomial)); cp <- coef(glm(y ~ x, family = binomial("probit"))); rbind(logit = cl, probit = cp, ratio = cl / cp)
```

## Connections
- **Builds on:** [[Standard Normal Distribution]], [[Logit Link]]
- **Leads to:** [[Complementary Log-log Link]], [[Latent Variable]], [[Logistic Regression]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

What is the probit link?
??
qnorm(p): the standard normal quantile of the probability.
++++
