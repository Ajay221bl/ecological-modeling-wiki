---
type: atomic
tags:
  - modeling
  - flashcards/eco/modeling
aliases:
  - "Inference (goal)"
  - "Confirmatory analysis"
status: seedling
---

# Inferential Modeling

**In one line:** inferential modeling weighs the evidence for a few hypotheses that were stated before looking at the data. It cares most about the size and certainty of the effects (the coefficients).

> [!info] Before this, it helps to know
> [[Hypothesis]] · [[Exploratory Modeling]] (where hypotheses often come from)

## The everyday picture
You've heard the market district has the best food. To test it fairly, you decide *in advance*: five meals there, five elsewhere, same price range, scored the same way. Only then do you eat. Because the plan came first, the result means something.

*Where the picture stops working:* a food test is quick to redo. A field season isn't, so the "decide first" rule is easy to bend afterwards, and that's exactly what ruins inference.

## Words you'll need
- **A priori:** decided before seeing the data.
- **Coefficient (β̂):** an estimated effect size; inference is about these.
- **Nested models:** one model is the other with some terms removed ([[Nested Models]]).
- **Likelihood ratio test:** compares nested models to ask if the extra terms help more than chance ([[Likelihood Ratio Test]]).
- **False positive:** concluding an effect is real when it isn't.

## A tiny example
A priori question: does engine power affect fuel economy once weight is accounted for?
- Model 0: mpg ~ weight. Model 1: mpg ~ weight + power.
- A likelihood ratio test compares them. In R's built-in `mtcars` data, adding power clearly improves the fit (p ≈ 0.001), so the evidence supports the hypothesis.
- One planned comparison, one answer. No searching.

## Start from zero
1. **State a few hypotheses before looking.** *Why:* only then can the data test them fairly.
2. **Write each as a model** ([[Hypothesis]]).
3. **Keep model selection minimal.** *Why:* every extra comparison is another chance of a false positive.
4. **Compare with tests designed for it,** such as likelihood ratio tests on nested models.
5. **Focus on the coefficients:** their size, sign and uncertainty. *Why:* the question is "how strong is this effect?", not "how well can I forecast?"

## See it
![[Exploration inference prediction.png|700]]
*What to look at:* inference sits between exploration (which supplies hypotheses) and prediction.

## Why it is this way
Inference's enemy is fooling yourself with chance. Committing to hypotheses in advance and comparing as few models as possible is the defence.

## In R
```r
m0 <- lm(mpg ~ wt, data = mtcars)
m1 <- lm(mpg ~ wt + hp, data = mtcars)
anova(m0, m1)      # does adding hp improve fit more than chance would?
coef(m1)           # the effect sizes inference cares about
```

## In the course
The second goal in Tredennick et al. 2021 ([[Tredennick et al. 2021]]); likelihood ratio tests come in the model selection unit ([[MOC - Model Selection]]).

## Common confusions
- **"Inference means any statistics."** Here it means the specific goal of testing a priori hypotheses.
- **"Explore, then report p-values as tests."** That's the biggest danger Tredennick et al. name.

## Explain it back
- Use the planned food test to explain inferential modeling.
- Why keep model selection minimal?
- Why does inference focus on coefficients rather than predictions?

*Pass test:* you can say which hypotheses you fixed before seeing your data.

## Connections
- **Builds on:** [[Hypothesis]], [[Exploratory Modeling]]
- **Leads to:** [[Likelihood Ratio Test]], [[Nested Models]], [[Predictive Modeling]]
- **Part of:** [[MOC - Modeling Foundations]], molecular note [[Exploration, Inference and Prediction]]
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
