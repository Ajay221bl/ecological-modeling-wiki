---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - lm-glm
aliases: []
status: seedling
---

# How to interpret a logistic regression coefficient

> [!summary] In plain words
> a logistic regression slope is a change in log-odds, which you can translate into an odds ratio by exponentiating, or into a change in probability only by stating where on the curve you start.

## The question
My logistic regression gives a slope of 0.8. What does that mean in words a reader will understand?

## Built from
- [[Logistic Regression]]: the model.
- [[Log Odds]] and [[Odds]]: the scale of the coefficient.
- [[Odds Ratio]]: exp(β).
- [[Logit Link]]: the divide-by-4 rule.
- [[Response Scale]]: predicted probabilities.

## See it
![[Logistic function.png|700]]
*What to look at:* the same sideways step moves the probability a lot in the middle and hardly at all at the ends.

## The reasoning, step by step
1. **Literal meaning:** each unit of x adds β to the log-odds of a "yes".
2. **Odds ratio:** exp(β) multiplies the odds. β = 0.8 gives 2.23, so the odds more than double per unit.
3. **Sign:** positive means the probability rises with x, negative that it falls.
4. **Upper bound on the probability change:** β/4 = 0.20 per unit, reached where p = 0.5.
5. **Actual probability change:** depends on the starting point. From p = 0.5: to 0.69 (+0.19). From p = 0.95: to 0.977 (+0.027).
6. **So report** the odds ratio with its interval, plus predicted probabilities at a few meaningful x values or a plotted curve.
7. **Intercept:** `plogis(β₀)` is the probability when all predictors are 0. Center predictors to make that meaningful.

**A worked example in numbers.** β = 0.8. Odds 1 (p = 0.50) become 2.23 (p = 0.69). Odds 19 (p = 0.95) become 42.3 (p = 0.977). Same odds ratio, very different probability change.

## So in practice
Write: "Each additional metre of shrub height multiplied the odds of nest survival by 2.2 (95% CI 1.4 to 3.5). Predicted survival rose from 0.31 at 0.5 m to 0.69 at 2.5 m (Fig. 2)."

## What would go wrong otherwise
Saying "the probability increases by 0.8 per unit" (impossible), or "2.2 times more likely" (that describes probability, not odds, and the two differ unless the event is rare).

## Explain it back
- Translate β = −0.5 into an odds ratio and a sentence.

*Pass test:* you can give all three readings: log-odds, odds ratio, probability at chosen points.

## Connections
- **Related:** [[Probability, Odds and Log Odds]], [[Predictions on Link vs Response Scale]], [[Interpreting Regression Coefficients]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]]

## Flashcards

A logistic slope of 0.8 corresponds to what odds ratio?
??
exp(0.8) ≈ 2.2: the odds are multiplied by 2.2 per unit of the predictor.
![[Logistic function.png]]
++++

Why can't a logistic coefficient be stated as a fixed change in probability?
??
The change in probability depends on the starting probability, because the logistic curve is nonlinear.
++++
