---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Two models are nested when the simpler one can be obtained from the more complex one by fixing some of its parameters, usually at zero."
aliases:
  - "Nested model"
  - "Nesting of models"
  - "Reduced and full model"
status: seedling
---

# Nested Models

Take a car with extras and remove the sunroof and the radio, and you have the basic model; a motorbike, by contrast, is not a stripped-down car. Two models are **nested** when the simpler one can be obtained from the more complex one by fixing some of its parameters, usually at zero ([[Model]], [[Regression Coefficient]]). y ~ tree is nested in y ~ tree + elevation, by setting the elevation coefficient to 0. A Poisson is nested in a negative binomial, by letting k go to infinity. But y ~ tree and y ~ elevation are not nested, because neither contains the other. The small model is called "reduced" or "null", the big one "full".

The full model always fits at least as well, so the question is whether its improvement is more than chance. In the code below, the bigger of two nested Poisson models has a log-likelihood that is never lower, and a likelihood ratio test asks whether the gain is real. The non-nested pair is compared by AIC instead.

The distinction matters because [[F-test|F-tests]] and [[Likelihood Ratio Test|likelihood ratio tests]] are valid only for nested pairs; non-nested models are compared with information criteria such as [[AIC]] or with cross-validation ([[Johnson and Omland 2004]], [[Anderson and Burnham 2002]], [[Zuur et al. 2009 Ch5]], [[Candidate Model Set]]). Both models must be fitted to exactly the same data: missing values in an extra predictor can silently drop rows and break this. And "nested models" is not "nested data", a different idea in which observations are grouped in units.

```r
set.seed(7); d <- data.frame(tree = runif(60, 0, 60), elev = rnorm(60, 900, 50)); d$y <- rpois(60, exp(2.3 - 0.02 * d$tree))
m_small <- glm(y ~ tree, poisson, d); m_big <- glm(y ~ tree + elev, poisson, d); m_other <- glm(y ~ elev, poisson, d)
c(logLik(m_small), logLik(m_big))              # the bigger nested model is never lower
anova(m_small, m_big, test = "Chisq")$`Pr(>Chi)`[2]
AIC(m_small, m_other)                          # non-nested pair: compare by AIC
```

## Connections
- **Builds on:** [[Regression Coefficient]], [[Model]]
- **Leads to:** [[Likelihood Ratio Test]], [[F-test]], [[AIC]], [[Candidate Model Set]]
- **Part of:** [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

When are two models nested?
??
When the simpler model is a special case of the more complex one, obtained by fixing some parameters (usually to zero).
++++

Which comparison tools require nested models?
??
F-tests and likelihood ratio tests.
++++
