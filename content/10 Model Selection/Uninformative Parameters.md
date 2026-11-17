---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "An uninformative parameter is an extra term that lands a model within about 2 AIC units of the best model only because the AIC penalty is small, while it barely improves the log-likelihood."
aliases:
  - "Pretending variables"
  - "Pretending Variables"
  - "Uninformative parameter"
  - "Arnold 2010"
status: seedling
---

# Uninformative Parameters

A passenger who climbs into a winning team's photo was close enough to appear, but the team won without them. An **uninformative parameter** is an extra term that lands a model within about 2 AIC units of the best model only because the AIC penalty is small, while it barely improves the log-likelihood ([[AIC]], [[Delta AIC]], [[Nested Models]]). Best model: log L −120.0, K = 3, AIC 246.0. The same model plus `noise`: log L −119.8, K = 4, AIC 247.6. Δ = 1.6, "substantial support" by the usual guide, but log L improved by only 0.2.

Adding any parameter raises log L a little, since it can't fall, and AIC rises by 2 minus twice the gain, so a useless parameter sits at Δ ≈ 2 or just below. The Δ < 2 guide then labels it "supported"; Anderson (2008) called these "pretending variables", and Arnold (2010) showed how common they are. In the code below, adding a noise variable to a Poisson model raises log L by 0.06 and lands at ΔAIC 1.87, and its coefficient's 95% interval, −0.14 to 0.09, comfortably includes zero.

Spot them as models within 2 of the best that are the best model plus one term, with nearly the same log L and an interval for the extra coefficient that includes zero ([[Model Ranking Tables]], [[Number of Parameters]]). Don't count them as support for the variable, including in [[Relative Variable Importance]]; report and discuss them, or drop them from the confidence set ([[Course Website]], [[Anderson and Burnham 2002]]). Not every model with Δ < 2 is competitive: check whether its extra parameter does anything.

```r
set.seed(12); x <- runif(80); noise <- rnorm(80); y <- rpois(80, exp(1 + x))
m <- glm(y ~ x, family = poisson); mp <- glm(y ~ x + noise, family = poisson)
round(c(logL_gain = as.numeric(logLik(mp) - logLik(m)), delta_AIC = AIC(mp) - AIC(m)), 2); round(confint.default(mp)["noise", ], 2)
```

## Connections
- **Builds on:** [[AIC]], [[Delta AIC]], [[Nested Models]]
- **Leads to:** [[Model Ranking Tables]], [[Relative Variable Importance]], [[Number of Parameters]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

What is an uninformative (pretending) parameter?
??
An added term that keeps a model within about 2 AIC units of the best only because the penalty is small, while barely improving the log-likelihood.
++++

How do you spot one in a ranking table?
??
The model is the top model plus one term, with a nearly identical log-likelihood and ΔAIC near 2.
++++
