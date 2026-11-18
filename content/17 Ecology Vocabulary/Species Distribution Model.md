---
type: atomic
tags:
  - ecology
  - flashcards/eco/ecology
description: "A species distribution model relates where a species occurs (or how abundant it is) to environmental variables, so it can predict and map occurrence across a region."
aliases:
  - "SDM"
  - "Species distribution models"
  - "Habitat suitability model"
  - "Ecological niche model"
  - "Range map model"
status: seedling
---

# Species Distribution Model

A **species distribution model** (SDM) relates where a species occurs, or how abundant it is, to environmental variables, so it can predict and map occurrence across a region ([[Logistic Regression]], [[Habitat]], [[Occupancy]]). The response can be presence-absence, presence-only or counts, and methods include [[Generalized Linear Model|GLMs]], GAMs, random forests, MaxEnt, and occupancy and N-mixture models ([[Generalized Additive Model]], [[N-mixture Model]]).

[[Guélat and Kéry 2018]] found that imperfect detection and residual [[Spatial Autocorrelation|spatial autocorrelation]] both damaged SDM abundance maps, especially together, and spatial N-mixture models recovered the true maps; spatial terms such as CAR [[Random Effect|random effects]] or 2-D splines handle autocorrelation ([[Conditional Autoregressive Model]], [[Spatial Smooths]]). Validate on independent data, as Guélat and Kéry did with an independent monitoring dataset. In the code below occurrence peaks at middle temperatures, and a quadratic logistic model predicts probabilities of 0.10, 0.82 and 0.78 at 5, 15 and 25 °C, against true values of 0.08, 0.82 and 0.82 ([[Polynomial|Polynomial Regression]]).

SDMs appear in Guélat and Kéry and the lab datasets ([[Course Website]]). An SDM map does not show where the species lives; it shows predicted suitability, which depends on detection and model assumptions ([[Imperfect Detection]]).

```r
set.seed(5); temp <- runif(300, 0, 30); occ <- rbinom(300, 1, plogis(-6 + 0.8 * temp - 0.02 * temp^2))
m <- glm(occ ~ temp + I(temp^2), family = binomial)
round(predict(m, data.frame(temp = c(5, 15, 25)), type = "response"), 2)
```

## Connections
- **Builds on:** [[Logistic Regression]], [[Habitat]], [[Occupancy]], [[Generalized Linear Model]], [[Spatial Autocorrelation]], [[Random Effect]]
- **Leads to:** [[N-mixture Model]], [[Spatial Smooths]], [[Conditional Autoregressive Model]]
- **Part of:** [[MOC 19 - Ecology Vocabulary|MOC - Ecology Vocabulary]]

## Flashcards

What is a species distribution model?
??
A model linking occurrence or abundance to environment to predict and map it.
++++
