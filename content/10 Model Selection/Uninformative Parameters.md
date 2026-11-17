---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Pretending variables"
  - "Pretending Variables"
  - "Uninformative parameter"
  - "Arnold 2010"
status: seedling
---

# Uninformative Parameters

**In one line:** an uninformative parameter is an extra term that lands a model within about 2 AIC units of the best model only because the AIC penalty is small, while it barely improves the log-likelihood.

> [!info] Before this, it helps to know
> [[AIC]] (why it happens) · [[Delta AIC]] (where it shows) · [[Nested Models]] (the setting)

## The everyday picture
A passenger who gets into a winning team photo. The team won without them. They are standing close enough to appear in the picture.

## A tiny example
Best model: log L −120.0, K = 3, AIC 246.0. Same model plus `noise`: log L −119.8, K = 4, AIC 247.6. Δ = 1.6, "substantial support" by the usual guide. But log L improved by only 0.2.

## Start from zero
1. **Add any parameter to the best model.** Log L rises a little (it can't fall).
2. **AIC rises by 2 minus twice the gain in log L.**
3. **So a useless parameter sits at Δ ≈ 2 or just below.**
4. **The Δ < 2 guide then labels it "supported".** Anderson (2008) called these "pretending variables". Arnold (2010) showed how common the problem is.
5. **Spot them:** a model within 2 of the best that is the best model plus one term, with nearly the same log L, and a confidence interval for the extra coefficient that comfortably includes zero.
6. **Don't count them as support** for the variable. Report and discuss, or drop from the confidence set.

## In R
```r
set.seed(12); x <- runif(80); noise <- rnorm(80); y <- rpois(80, exp(1 + x))
m <- glm(y ~ x, family = poisson); mp <- glm(y ~ x + noise, family = poisson)
round(c(logL_gain = as.numeric(logLik(mp) - logLik(m)), delta_AIC = AIC(mp) - AIC(m)), 2); round(confint.default(mp)["noise", ], 2)
```

## In the course
Discussed in the model selection lab ([[Course Website]]). Related to cautions in [[Anderson and Burnham 2002]].

## Common confusions
- **"Every model with Δ < 2 is competitive."** Check whether its extra parameter does anything.

## Explain it back
- Why does a useless parameter end up near Δ = 2?

*Pass test:* you can identify a pretending variable in a ranking table.

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
