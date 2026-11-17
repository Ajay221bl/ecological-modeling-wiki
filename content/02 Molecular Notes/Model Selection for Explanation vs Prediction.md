---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - selection
aliases: []
status: seedling
---

# Model Selection for Explanation vs Prediction

> [!summary] In plain words
> if the goal is to understand which processes matter, choose among a few hypothesis-driven models and interpret effects with care, but if the goal is accurate prediction, choose by out-of-sample performance and don't over-interpret the coefficients.

## The question
Does it matter whether I want to explain or to predict when I select a model?

## Built from
- [[Inferential Modeling]] and [[Predictive Modeling]]: the two goals.
- [[Candidate Model Set]]: central for explanation.
- [[Cross-validation]] and [[Regularization]]: central for prediction.
- [[Collinearity]]: harmless for prediction, damaging for explanation.

## The reasoning, step by step
1. **Explanation:** each model is a hypothesis. A small a priori set. Criteria: AIC, LRT, Bayes factors. Coefficients and their uncertainty are the result.
2. **Prediction:** any model that predicts well is welcome. Large sets, regularisation and machine learning are fine if validated on held-out data. Coefficients are a by-product.
3. **Collinearity:** for prediction, correlated predictors share credit harmlessly. For explanation, they make effects unidentifiable.
4. **Validation:** for prediction, test on data that mimic the target (new sites, future years).
5. **The best predictive model can be a poor explanation,** and vice versa.

| | Explanation | Prediction |
|---|---|---|
| Model set | Few, a priori | Many allowed |
| Main criterion | AIC, LRT, BF | Cross-validated error, LOO |
| Coefficients | The result | By-product |
| Collinearity | Serious | Tolerable |
| Regularisation | Use with care | Encouraged |

## So in practice
State the goal in the first paragraph of the methods. It decides everything after.

## What would go wrong otherwise
Interpreting a lasso's selected predictors as "the drivers" of a pattern, or judging an explanatory model only by its predictive score.

## Explain it back
- Why is collinearity tolerable for prediction?

*Pass test:* you can say which tools belong to which goal.

## Connections
- **Related:** [[Why build the candidate model set before seeing the data]], [[AIC vs BIC]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

How does collinearity affect explanatory versus predictive models?
??
It makes individual effects unreliable for explanation but often does little harm to prediction.
++++
