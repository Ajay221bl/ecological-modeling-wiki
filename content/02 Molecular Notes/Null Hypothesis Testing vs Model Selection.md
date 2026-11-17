---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - selection
aliases: []
status: seedling
---

# Null Hypothesis Testing vs Model Selection

> [!summary] In plain words
> null hypothesis testing asks whether data are surprising under one "no effect" hypothesis, while model selection weighs the evidence for several substantive hypotheses at once.

## The everyday picture
A court trial versus a talent show. A trial asks one question: is the evidence against innocence strong enough? A talent show ranks every act against every other.

## The question
When should I test a null hypothesis and when should I compare models?

## Built from
- [[Null Hypothesis Significance Testing]]: one null, one alternative, a p-value.
- [[Model Selection]] and [[Information Theory]]: many models, relative support.
- [[Multiple Working Hypotheses]]: the philosophy behind model selection.
- [[Criticisms of p-values]]: why ecologists moved.

## The reasoning, step by step
1. **NHST:** set up H₀ (no effect), compute a statistic, get p, reject or not.
2. **Model selection:** write a model per hypothesis, compute AIC (or WAIC, LOO), rank and weight.
3. **NHST's null is often a straw man** in observational ecology. Model selection compares real alternatives.
4. **NHST gives binary decisions.** Model selection gives graded evidence.
5. **NHST fits experiments well:** a planned treatment, randomisation, a clear null.
6. **Model selection fits observational studies with several competing explanations.**
7. **Don't mix them:** p-values on the AIC-best model ignore the selection step.

| | NHST | Model selection |
|---|---|---|
| Hypotheses | One null vs one alternative | Several substantive |
| Output | p-value, reject or not | Ranks, weights, evidence ratios |
| Nested models | Usually | Not required |
| Best suited to | Designed experiments | Observational, many explanations |

## So in practice
Decide the framework before analysis, according to the question and design.

## What would go wrong otherwise
"Significance" hunting among dozens of candidate predictors, or AIC dredging over hundreds of models: both distort the evidence.

## Explain it back
- Give one study best served by each approach.

*Pass test:* you can justify a framework for a given design.

## Connections
- **Related:** [[Likelihood Ratio Test vs AIC]], [[What a p-value does and does not tell you]], [[Frequentist vs Bayesian Inference]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 10 - Model Selection|MOC - Model Selection]], [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]]

## Flashcards

What does model selection give that a single null hypothesis test does not?
??
Graded relative support for several substantive hypotheses.
++++

When is null hypothesis testing most appropriate?
??
In designed experiments with a clear null and randomised treatments.
++++
