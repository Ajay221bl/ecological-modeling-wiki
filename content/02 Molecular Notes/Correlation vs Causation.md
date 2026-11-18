---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - modeling
aliases:
  - "Correlation is not causation"
  - "Association vs causation"
status: seedling
---

# Correlation vs Causation

> [!summary] In plain words
> two variables can be correlated because one causes the other, because a third variable drives both, by chance, or because of how data were selected, so a correlation alone cannot show cause; experiments with randomisation, or careful reasoning about confounders, are needed.

## The question
Two variables are strongly related. Can I say one causes the other?

## Built from
- [[Correlation]].
- [[Confounding|Confounding Variable]] and [[Omitted Variable Bias]].
- [[Randomization]] and [[Experimental Study]].
- [[Observational Study]].

## The reasoning, step by step
1. **List explanations for the correlation:** X causes Y; Y causes X; Z causes both; chance; selection.
2. **Randomisation breaks links to confounders,** so in an experiment X is unrelated to any Z on average.
3. **In observational data,** include measured confounders as covariates and reason about unmeasured ones.
4. **Mechanism helps:** a known process (a mechanistic model) makes a causal reading more credible.
5. **Ecology relies on both:** experiments for mechanism, observational studies for scale and realism.
In the [[Omitted Variable Bias]] simulation, ice cream sales "predict" sunburn with slope 1.05, but the slope drops to 0.00 once sunshine is included.

## So in practice
Write results of observational studies as "associated with" unless you have an argument for cause; say which confounders you controlled.

## What would go wrong otherwise
"Sites with more deer have less understory, so deer remove understory," without considering that deer may prefer open sites.

## Explain it back
- What does randomisation do to confounders?

*Pass test:* you can list four non-causal reasons for a correlation.

## Connections
- **Related:** [[Observational vs Experimental Study]], [[Mechanistic vs Phenomenological Model]], [[Induction vs Deduction]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]], [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

Name three non-causal reasons for a correlation.
??
A confounder drives both, reverse causation, chance (or selection).
++++

How does an experiment support causation?
??
Randomisation makes the treatment unrelated to confounders.
++++
