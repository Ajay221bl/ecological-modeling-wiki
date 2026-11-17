---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - selection
aliases: []
status: seedling
---

# AIC vs BIC

> [!summary] In plain words
> AIC aims to pick the model that predicts best when no candidate is true, while BIC aims to identify the true model if it is among the candidates, so BIC's heavier penalty picks smaller models.

## The question
Why do AIC and BIC sometimes disagree, and which should I trust?

## Built from
- [[AIC]] and [[BIC]].
- [[Full Reality]]: AIC's assumption that truth isn't in the set.
- [[Marginal Likelihood]]: BIC's origin.
- [[Overfitting]] and [[Underfitting]]: the errors each risks.

## The reasoning, step by step
1. **Formulas:** AIC = −2 log L + 2K. BIC = −2 log L + K log n.
2. **Penalty per parameter:** AIC 2. BIC log n, which is 4.6 at n = 100.
3. **Goals:** AIC, best approximation for prediction (efficiency). BIC, the true model (consistency).
4. **Worldview:** AIC assumes reality is complex and no model is true. BIC assumes a true, fairly simple model is in the set.
5. **Typical errors:** AIC includes some spurious small effects. BIC drops some real small effects.
6. **In ecology** many small real effects are plausible, so AIC's view often fits better. Where a few strong effects are expected and parsimony matters, BIC is reasonable.

| | AIC | BIC |
|---|---|---|
| Penalty per parameter | 2 | log n |
| Goal | Predictive accuracy | Find the true model |
| Assumes true model in set | No | Yes |
| Tends to pick | Larger models | Smaller models |

**A worked example in numbers.** in 200 simulated datasets of n = 500 with a small real slope (0.08), AIC preferred the model with the slope 59% of the time and BIC only 26%.

## So in practice
Choose before analysis, according to your goal, and report one.

## What would go wrong otherwise
Computing both and reporting whichever agrees with your expectations.

## Explain it back
- When does BIC's penalty equal AIC's?

*Pass test:* you can explain the disagreement in terms of goals.

## Connections
- **Related:** [[Why AIC rewards fit but punishes complexity]], [[Bayes Factors vs Predictive Criteria]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Model Selection]]

## Flashcards

What different goals do AIC and BIC serve?
??
AIC: best predictive approximation. BIC: identifying the true model, assuming it is in the set.
++++
