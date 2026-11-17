---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - mixed
aliases:
  - "Population-level vs Group-level Predictions"
  - "re.form"
  - "Predictions for a typical group"
  - "Predictions for new groups"
status: seedling
---

# Conditional vs Marginal Predictions

> [!summary] In plain words
> conditional (group-level) predictions include a group's estimated random effect, while marginal (population-level) predictions set random effects to zero, giving the prediction for a typical group, and the two differ in meaning and in uncertainty.

## The question
When I predict from a mixed model, which prediction am I getting and which do I want?

## Built from
- [[Conditional Modes]]: what group-level predictions add.
- [[Marginal Model]]: population-averaged effects.
- [[predict()]]: how to ask for each.
- [[Prediction vs Confidence Interval]]: the uncertainty layers.

## The reasoning, step by step
1. **Group-level:** `predict(m, newdata, re.form = NULL)` (default) uses each known group's deviation.
2. **Population-level (typical group):** `predict(m, newdata, re.form = NA)` sets random effects to 0.
3. **New group:** `allow.new.levels = TRUE` gives the population-level prediction for unseen levels.
4. **For a new group's real uncertainty,** add the random-effect variance (and residual variance for a new observation).
5. **On non-identity links,** "typical group" (random effect = 0) is not the population average. For a logit model the population-average curve is flatter. Average over simulated group effects to get it.
6. **brms:** `re_formula = NA` versus `NULL`, with full posterior uncertainty.

| Question | Prediction | lme4 |
|---|---|---|
| This known site | Conditional | `re.form = NULL` |
| A typical site | Marginal at b = 0 | `re.form = NA` |
| A new site, with its uncertainty | Marginal + group variance | simulate or bootstrap |
| Population average (non-linear link) | Average over b | simulate |

**A worked example in numbers.** for the simulated binary GLMM in the Marginal Model note, the conditional logit slope was 1.00 and the population-averaged slope 0.64.

## So in practice
State which prediction each figure shows. The GLMM lab predicts "for a typical farm".

## What would go wrong otherwise
Plotting re.form = NA predictions and calling them the population-average probability in a logistic GLMM.

## Explain it back
- What does re.form = NA do?

*Pass test:* you can produce each type of prediction.

## Connections
- **Related:** [[Prediction vs Confidence Interval]], [[Fixed vs Random Effects]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Mixed Models]]

## Flashcards

What does predict(m, re.form = NA) give for an lme4 model?
??
Population-level predictions with random effects set to zero (a typical group).
++++

Why isn't a "typical group" prediction the population average in a logistic GLMM?
??
Averaging the inverse-logit over group effects flattens the curve, so the average differs from the curve at b = 0.
++++
