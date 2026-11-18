---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
description: "Inferential modeling weighs the evidence for a few hypotheses that were stated before looking at the data. It cares most about the size and certainty of the effects (the coefficients)."
aliases:
  - "Inference (goal)"
  - "Confirmatory analysis"
status: seedling
---

# Inferential Modeling

You have heard the market district has the best food. To test it fairly you decide *in advance*: five meals there, five elsewhere, same price range, scored the same way. Only then do you eat, and because the plan came first, the result means something. **Inferential modeling** is that kind of planned test: it weighs the evidence for a few hypotheses that were stated *a priori*, before looking at the data, and it cares most about the size, sign and certainty of the effects, the estimated coefficients (β̂). It is the second of Tredennick and colleagues' [[Model Purpose - Exploration Inference Prediction|three modeling goals]], after exploration and before prediction ([[Tredennick et al. 2021]]).

An example with R's built-in `mtcars` data. The a priori question: does engine power affect fuel economy once car weight is accounted for? Write the two answers as two *nested* models, where one is the other with a term removed ([[Nested Models]]): Model 0 is mpg ~ weight, Model 1 is mpg ~ weight + power. A [[Likelihood Ratio Test]], which asks whether the extra term improves the fit more than chance would, gives p ≈ 0.001, so the data support the hypothesis that power matters. Then you read the [[Regression Coefficient|coefficient]] for power, its size and its uncertainty, because the question is "how strong is this effect?", not "how well can I forecast?". One planned comparison, one answer, no searching.

The enemy of inference is fooling yourself with chance. Every extra comparison is another chance of a *[[Type I Error|false positive]]*, concluding an effect is real when it is not, so inference keeps [[Model Selection|model selection]] minimal and commits to hypotheses in advance. "Inference" here does not mean any statistics at all; it means the specific goal of testing hypotheses stated beforehand. The biggest danger Tredennick and colleagues name is exploring first and then reporting the p-values as if they were planned tests. Hypotheses often come from [[Exploratory Modeling]] on earlier data; inference tests them fairly on new data ([[Hypothesis]]).

![[Exploration inference prediction.png|700]]
*What to look at:* inference sits between exploration (which supplies hypotheses) and prediction.

```r
m0 <- lm(mpg ~ wt, data = mtcars)
m1 <- lm(mpg ~ wt + hp, data = mtcars)
anova(m0, m1)      # does adding hp improve fit more than chance would?
coef(m1)           # the effect sizes inference cares about
```

## Connections
- **Builds on:** [[Hypothesis]], [[Exploratory Modeling]]
- **Leads to:** [[Likelihood Ratio Test]], [[Nested Models]], [[Predictive Modeling]], [[Model Purpose - Exploration Inference Prediction]], [[Regression Coefficient]], [[Type I Error]], [[Model Selection]]
- **See also:** [[MOC 10 - Model Selection]]
- **Part of:** [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]], molecular note [[Exploration, Inference and Prediction]]
- **Go deeper:** [[Tredennick et al. 2021]]

## Flashcards

What is inferential modeling?
??
Weighing the evidence for a few hypotheses stated before seeing the data, focusing on effect sizes (coefficients) and their uncertainty.
![[Exploration inference prediction.png]]
++++

Why can't you test a hypothesis on the data that suggested it?
??
The pattern may be a chance quirk of that dataset; the test would be biased toward confirming it. You need independent data.
++++
