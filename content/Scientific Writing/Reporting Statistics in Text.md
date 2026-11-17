---
type: atomic
tags:
  - writing
  - flashcards/eco/writing
aliases:
  - "Reporting estimates"
  - "Reporting intervals"
  - "Number formatting in results"
  - "Statistical reporting"
status: seedling
---

# Reporting Statistics in Text

**In one line:** reporting statistics in text means giving each estimate with its uncertainty and enough context (units, scale, model) that a reader can understand it without the code.

> [!info] Before this, it helps to know
> [[Writing Results Sections]] · [[Confidence Interval]] · [[Credible Interval]]

## A tiny example
"Each additional day of sleep deprivation added 10.5 ms to mean reaction time (95% CI 8.9 to 12.0; n = 18 subjects, 180 measurements)."

## Start from zero
1. **Estimate (interval)** with units and the interval's level and type (confidence or credible).
2. **Sensible rounding:** two or three significant figures; not 10.46729.
3. **Scale:** say whether a coefficient is on the log, logit or response scale; prefer the response scale.
4. **Sample sizes:** observations and groups for mixed models.
5. **Model comparison:** ΔAICc or Δelpd with SE, not only "the best model".
6. **p-values (if used):** exact values (p = 0.03), not stars.
7. **Variance components and R²:** marginal and conditional R² for mixed models (Harrison et al. 2018).

## In the course
[[Harrison et al. 2018]]. [[McCarthy Writing Advice]].

## Common confusions
- **"More decimal places look more precise."** Precision is in the interval, not the digits.

## Explain it back
- What four things should accompany an estimate?

*Pass test:* you can write a correctly formatted statistical sentence.

## Connections
- **Builds on:** [[Writing Results Sections]], [[Confidence Interval]], [[Credible Interval]]
- **Leads to:** [[What to Report for a Model]], [[Marginal and Conditional R-squared]]
- **Part of:** [[MOC - Scientific Writing]]

## Flashcards

How should a coefficient be reported in text?
??
Estimate with interval (level and type), units and scale, and sample size.
++++
