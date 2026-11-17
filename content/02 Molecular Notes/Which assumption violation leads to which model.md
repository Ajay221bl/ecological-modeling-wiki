---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - lm-glm
aliases:
  - "From broken assumption to better model"
  - "Assumption violations and fixes"
status: seedling
---

# Which assumption violation leads to which model

> [!summary] In plain words
> each way a linear model's assumptions can fail points to a specific extension: the wrong response type to a GLM, unequal variance to variance structures, grouped data to mixed models, correlated residuals to correlation structures, curved relationships to GAMs, and missed detections to occupancy or N-mixture models.

## The question
My residuals look wrong. Which model do I move to?

## Built from
- [[Linear Model Assumptions]] and [[Model Validation]].
- [[plot() Diagnostics for lm]] and [[Residuals vs Fitted Plot]].
- [[Data Exploration Protocol]].

## See it
mermaid:
flowchart TD
  A[Residual problem] --> B{What kind?}
  B -->|Response is counts, 0/1, proportions| C[GLM]
  B -->|Spread changes with fitted or a covariate| D[Weights or variance structure, GLS]
  B -->|Observations grouped| E[Mixed model]
  B -->|Residuals correlated in time or space| F[Correlation structure or spatial smooth]
  B -->|Curved pattern in residuals| G[Polynomial, nonlinear model or GAM]
  C --> H{Variance bigger than expected?}
  H -->|Yes| I[Negative binomial, quasi or OLRE]
  H -->|Too many zeros| J[Zero-inflated or hurdle]
*What to look at:* each branch is one assumption; real data often need two branches at once, such as a Poisson GLMM.

## The reasoning, step by step
1. **Diagnose first:** residuals vs fitted, residuals vs each covariate, QQ plot, residuals vs time and space, residuals by group.
2. **Non-normal response with mean-variance link:** [[Generalized Linear Model]].
3. **Unequal spread not explained by the family:** [[Weighted Regression]] or [[Variance Structures]] ([[Generalized Least Squares]]).
4. **Grouped observations:** [[Random Effect]] in a [[Linear Mixed Model]] or [[GLMM]].
5. **Temporal or spatial dependence:** [[Correlation Structure]], [[AR(1) Error Structure]], [[Spatial Smooths]].
6. **Nonlinearity:** add terms, use a mechanistic function, or a [[Generalized Additive Model]].
7. **Overdispersion or excess zeros in counts:** [[Negative Binomial GLM]], [[Observation-level Random Effect]], [[Zero-inflated Model]], [[Hurdle Model]].
8. **Imperfect detection:** [[Occupancy]] or [[N-mixture Model]].
9. **Zuur et al. (2009)** build their whole book along this path, from lm to GLS, mixed models, GLMs, GAMs and GLMMs.

| Symptom | Assumption broken | Move to |
|---|---|---|
| Predictions outside possible values | Normal response | GLM |
| Funnel in residuals vs fitted | Homogeneity | Variance structure or GLM family |
| Residuals cluster by site | Independence | Mixed model |
| Residual ACF spikes | Independence | Correlation structure |
| Curve in residuals vs x | Linearity | GAM or nonlinear term |
| Residual deviance far above df | Poisson variance | Negative binomial or OLRE |

## So in practice
Fix the biggest violation first, refit, and check the residuals again. Do not stack every fix at once.

## What would go wrong otherwise
Log-transforming everything until the QQ plot looks straight, while ignoring that the observations come from repeated visits to the same sites.

## Explain it back
- Which violation leads to a mixed model?

*Pass test:* you can map any residual symptom to a model.

## Connections
- **Related:** [[Linear Model vs GLM]], [[OLS vs GLS]], [[Transform the data or change the model]], [[What to do about overdispersion]], [[Why use a random effect instead of a fixed effect]], [[GLM vs GAM]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Linear Models and GLMs]], [[MOC - Data Exploration]], [[MOC - Mixed Models]]

## Flashcards

Residuals cluster by site: which model?
??
A mixed model with site as a random effect.
++++

Funnel-shaped residuals: what options?
??
A different GLM family, weights, or a variance structure (GLS).
++++

Curved pattern in residuals vs x?
??
Add a nonlinear term or use a GAM.
++++
