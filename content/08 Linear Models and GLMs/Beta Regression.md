---
type: atomic
tags:
  - lm-glm
  - flashcards/eco/lm-glm
aliases:
  - "Beta GLM"
  - "beta_family"
  - "Regression for continuous proportions"
status: seedling
---

# Beta Regression

**In one line:** beta regression models a continuous response that lies strictly between 0 and 1, such as percent cover, using a beta distribution whose mean depends on predictors through a logit link.

> [!info] Before this, it helps to know
> [[Beta Distribution]] (the random part) · [[Logit Link]] (the link) · [[Binomial GLM for Proportions]] (what it is not)

## The everyday picture
The fill level of glasses on a tray. Each is somewhere between empty and full. There were no "trials" behind the level, it is simply a fraction.

## Start from zero
1. **Response:** a continuous proportion in (0, 1) with no count behind it. Cover, fraction of time, a similarity index.
2. **yᵢ ~ Beta with mean μᵢ and precision φ.**
3. **logit(μᵢ) = ηᵢ.**
4. **Variance = μ(1 − μ)/(1 + φ).** Largest near 0.5, shrinking toward the ends, with φ setting the overall level.
5. **Coefficients are interpreted as in logistic regression** (log-odds of the mean proportion).
6. **Exact 0s and 1s are outside the support.** Either nudge them inward or use a zero-one-inflated beta model.
7. **In R:** `glmmTMB(y ~ x, family = beta_family())`, `betareg`, or `brms` with `family = Beta()`.

## In R
```r
library(glmmTMB); set.seed(13); x <- runif(200); mu <- plogis(-1 + 2 * x); phi <- 10
y <- rbeta(200, mu * phi, (1 - mu) * phi)
m <- glmmTMB(y ~ x, family = beta_family()); round(fixef(m)$cond, 2); sigma(m)        # close to the true -1 and 2, with phi near 10
range(y)
```

## Common confusions
- **"Use binomial for any proportion."** Binomial needs the number of trials.
- **"Arcsine-transform proportions."** An outdated fix. Model them with a beta or binomial.

## Explain it back
- When do you use beta regression and when a binomial GLM?

*Pass test:* you can choose between beta and binomial for a proportion.

## Connections
- **Builds on:** [[Beta Distribution]], [[Logit Link]]
- **Leads to:** [[Binomial GLM for Proportions]], [[Choosing a Distribution for Your Response]]
- **Part of:** [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]], molecular note [[Binomial vs Beta for Proportions]]

## Flashcards

When is beta regression appropriate?
??
For continuous proportions strictly between 0 and 1 that are not counts out of a known total.
++++
