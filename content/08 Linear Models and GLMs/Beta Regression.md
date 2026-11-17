---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
description: "Beta regression models a continuous response that lies strictly between 0 and 1, such as percent cover, using a beta distribution whose mean depends on predictors through a logit link."
aliases:
  - "Beta GLM"
  - "beta_family"
  - "Regression for continuous proportions"
status: seedling
---

# Beta Regression

The fill levels of glasses on a tray are each somewhere between empty and full, with no "trials" behind them: each is simply a fraction. **Beta regression** models such a response, a continuous value strictly between 0 and 1 like percent cover, fraction of time or a similarity index, using a [[Beta Distribution]] whose mean depends on predictors through a [[Logit Link]]. The model is yᵢ ~ Beta with mean μᵢ and precision φ, and logit(μᵢ) = ηᵢ. Its variance is μ(1 − μ)/(1 + φ): largest near 0.5, shrinking toward the ends, with φ setting the overall level. Coefficients are interpreted as in logistic regression, as log-odds of the mean proportion.

In the code below, proportions are simulated with logit-mean −1 + 2x and precision 10, and `glmmTMB(y ~ x, family = beta_family())` recovers coefficients close to −1 and 2 with φ near 10. Other routes are the `betareg` package and `brms` with `family = Beta()`.

Exact 0s and 1s are outside the support, so either nudge them inward or use a zero-one-inflated beta model. Two confusions. The binomial is not for any proportion: it needs the number of trials ([[Binomial GLM for Proportions]]). And arcsine-transforming proportions is an outdated fix; model them with a beta or binomial instead ([[Choosing a Distribution for Your Response]]).

```r
library(glmmTMB); set.seed(13); x <- runif(200); mu <- plogis(-1 + 2 * x); phi <- 10
y <- rbeta(200, mu * phi, (1 - mu) * phi)
m <- glmmTMB(y ~ x, family = beta_family()); round(fixef(m)$cond, 2); sigma(m)        # close to the true -1 and 2, with phi near 10
range(y)
```

## Connections
- **Builds on:** [[Beta Distribution]], [[Logit Link]]
- **Leads to:** [[Binomial GLM for Proportions]], [[Choosing a Distribution for Your Response]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]], molecular note [[Binomial vs Beta for Proportions]]

## Flashcards

When is beta regression appropriate?
??
For continuous proportions strictly between 0 and 1 that are not counts out of a known total.
++++
