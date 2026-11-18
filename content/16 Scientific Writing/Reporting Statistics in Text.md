---
type: atomic
tags:
  - writing
  - flashcards/eco/writing
description: "Reporting statistics in text means giving each estimate with its uncertainty and enough context (units, scale, model) that a reader can understand it without the code."
aliases:
  - "Reporting estimates"
  - "Reporting intervals"
  - "Number formatting in results"
  - "Statistical reporting"
status: seedling
---

# Reporting Statistics in Text

**Reporting statistics in text** means giving each estimate with its uncertainty and enough context, such as units, scale and model, that a reader can understand it without the code ([[Writing Results Sections]], [[Confidence Interval]], [[Credible Interval]]). For example: "Each additional day of sleep deprivation added 10.5 ms to mean reaction time (95% CI 8.9 to 12.0; n = 18 subjects, 180 measurements)." Give the estimate and interval with units, and say the interval's level and whether it is a confidence or credible interval. Round sensibly, to two or three significant figures, not 10.46729.

Say whether a [[Regression Coefficient|coefficient]] is on the log, [[Logit Link|logit]] or [[Response Scale|response scale]], and prefer the response scale. Give sample sizes, both observations and groups for [[Mixed Effects Model|mixed models]]. For [[Model Selection|model comparison]] give [[Delta AIC|ΔAICc]] or Δelpd with its SE, not only "the best model" ([[AIC]], [[Model Ranking Tables]]). If you use p-values, give exact values (p = 0.03), not stars ([[P-value]]). For mixed models report [[Variance Components|variance components]] and marginal and conditional R² ([[Marginal vs Conditional R-squared|Marginal and Conditional R-squared]]).

These rules follow [[Harrison et al. 2018]] and [[McCarthy Writing Advice]] ([[What to Report for a Model]]). More decimal places do not look more precise: precision is in the interval, not the digits.

## Connections
- **Builds on:** [[Writing Results Sections]], [[Confidence Interval]], [[Credible Interval]], [[Regression Coefficient]], [[Logit Link]], [[Response Scale]], [[Mixed Effects Model]], [[Model Selection]], [[Delta AIC]], [[Variance Components]]
- **Leads to:** [[What to Report for a Model]], [[Marginal vs Conditional R-squared|Marginal and Conditional R-squared]]
- **Part of:** [[MOC 18 - Scientific Writing|MOC - Scientific Writing]]

## Flashcards

How should a coefficient be reported in text?
??
Estimate with interval (level and type), units and scale, and sample size.
++++
