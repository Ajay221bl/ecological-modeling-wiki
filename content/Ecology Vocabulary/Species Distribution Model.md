---
type: atomic
tags:
  - ecology
  - flashcards/eco/ecology
aliases:
  - "SDM"
  - "Species distribution models"
  - "Habitat suitability model"
  - "Ecological niche model"
  - "Range map model"
status: seedling
---

# Species Distribution Model

**In one line:** a species distribution model relates where a species occurs (or how abundant it is) to environmental variables, so it can predict and map occurrence across a region.

> [!info] Before this, it helps to know
> [[Logistic Regression]] · [[Habitat]] · [[Occupancy]]

## Start from zero
1. **Response:** presence-absence, presence-only, counts.
2. **Methods:** GLMs, GAMs, random forests, MaxEnt, occupancy and N-mixture models.
3. **Guélat and Kéry (2018):** imperfect detection and residual spatial autocorrelation both damaged SDM abundance maps, especially together; spatial N-mixture models recovered the true maps.
4. **Spatial terms** (CAR random effects, 2D splines) handle autocorrelation.
5. **Validate on independent data;** Guélat and Kéry checked predictions against an independent monitoring dataset.

## In R
```r
set.seed(5); temp <- runif(300, 0, 30); occ <- rbinom(300, 1, plogis(-6 + 0.8 * temp - 0.02 * temp^2))
m <- glm(occ ~ temp + I(temp^2), family = binomial)
round(predict(m, data.frame(temp = c(5, 15, 25)), type = "response"), 2)
```

## In the course
[[Guélat and Kéry 2018]]. Lab datasets ([[Course Website]]).

## Common confusions
- **"An SDM map shows where the species lives."** It shows predicted suitability, which depends on detection and model assumptions.

## Explain it back
- What two problems did Guélat and Kéry study?

*Pass test:* you can describe an SDM and its pitfalls.

## Connections
- **Builds on:** [[Logistic Regression]], [[Habitat]], [[Occupancy]]
- **Leads to:** [[N-mixture Model]], [[Spatial Smooths]], [[Conditional Autoregressive Model]]
- **Part of:** [[MOC - Ecology Vocabulary]]

## Flashcards

What is a species distribution model?
??
A model linking occurrence or abundance to environment to predict and map it.
++++
