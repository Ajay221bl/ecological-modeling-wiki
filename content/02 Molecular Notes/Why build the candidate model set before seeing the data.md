---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - selection
aliases: []
status: seedling
---

# Why build the candidate model set before seeing the data

> [!summary] In plain words
> if you choose which models to compare after looking at the data, you have used the data twice, so the winning model will look better supported than it really is and is unlikely to hold up in new data.

## The question
Why do Burnham and Anderson insist the models be specified a priori? What harm is there in adding a model that the plots suggest?

## Built from
- [[Candidate Model Set]]: what should be fixed.
- [[Data Dredging]]: what happens otherwise.
- [[Post hoc Analysis]]: the honest place for data-inspired models.
- [[Overfitting]]: the result.
- [[Model Selection Uncertainty]]: what is understated.

## The reasoning, step by step
1. Every model you consider is another chance to fit noise.
2. Choosing models by looking at the data adds unrecorded comparisons (the ones you rejected in your head).
3. The final AIC weights ignore those hidden comparisons, so they overstate support.
4. Patterns noticed in this sample are partly noise and partly signal. A model built around them fits that noise.
5. In new data the noise is different. The model's apparent advantage shrinks or vanishes.
6. Fixing the set beforehand makes the comparison honest: the data judge, they don't also choose the contestants.
7. Data-inspired models are still useful. Label them post hoc and test them later.

**A worked example in numbers.** one simulated noise response tested against 40 noise predictors (n = 100): 4 had p < 0.05, the best at p = 0.026. A model built around those would rank well on these data and fail on new data.

## So in practice
Write the candidate set (and why each model is there) before analysis, ideally in a pre-registration or lab notebook. Report later additions separately.

## What would go wrong otherwise
"We examined the data and then fitted the models suggested by the plots" turns confirmatory language onto exploratory work.

## Explain it back
- How do hidden comparisons inflate support?

*Pass test:* you can explain a priori sets to a skeptical labmate.

## Connections
- **Related:** [[Null Hypothesis Testing vs Model Selection]], [[Why AIC rewards fit but punishes complexity]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

Why should a candidate model set be specified before seeing the data?
??
Choosing models from the data uses it twice, inflating apparent support and producing models that fail on new data.
++++
