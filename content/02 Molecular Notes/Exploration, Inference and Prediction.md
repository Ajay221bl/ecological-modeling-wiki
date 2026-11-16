---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - modeling
aliases:
  - "Modeling goals"
  - "Three goals of modeling"
status: seedling
---

# Exploration, Inference and Prediction

> [!summary] In plain words
> Models serve three different jobs. **Exploration** searches data for patterns to generate ideas. **Inference** tests a few ideas stated in advance. **Prediction** forecasts new data as accurately as possible. Each job has different rules, and mixing them up is one of the commonest mistakes in ecology (Tredennick et al. 2021).

## The everyday picture
A detective. First she looks around the scene for anything odd (exploration). Then she tests a specific suspect's alibi (inference). Finally she predicts where the suspect will go next (prediction). Treating an odd thing she noticed as proof would be a mistake; so would judging her forecast by how well it explains yesterday.

*Where the picture stops working:* a detective can always go back to the scene. Data can only be "fresh" once.

## The question
How do the three goals differ, and why must you pick one before you start?

## Built from
- [[Exploratory Modeling]]: search for patterns; results are hypotheses
- [[Inferential Modeling]]: test a priori hypotheses; care about coefficients
- [[Predictive Modeling]]: forecast; judge on unseen data

## See it
![[Exploration inference prediction.png|700]]
*What to look at:* each goal has its own question, method and way of judging success.

## The reasoning, step by step
1. **Exploration finds patterns, some of them by chance.** *Why:* search enough variables and some look significant ([[Exploratory Modeling]]).
2. **So exploration's results are ideas, not findings.** They need testing on new data.
3. **Inference tests ideas stated before seeing the data,** so a p-value or AIC means what it says ([[Inferential Modeling]]).
4. **Prediction cares about accuracy on new data,** not whether each coefficient makes sense ([[Predictive Modeling]]).
5. **The goal sets the rules.** *Why choose first:* the same model and data give honest or misleading results depending on how they're used.

**A worked example in numbers.** Screen 100 noise variables: about 5 come out "significant" by chance (exploration gone wrong if reported as findings). Test one planned comparison, mpg ~ weight + power: p ≈ 0.001 (inference). Forecast 200 new points: the simple line's error is 1.17, the wiggly curve's 6.23, even though the curve fitted the old data better (prediction).

## So in practice
Write your goal at the top of the analysis script, and follow that goal's rules ([[Candidate Model Set]], [[Leave-one-out Cross-validation]]).

## What would go wrong otherwise
- You'd report chance patterns as discoveries ([[Data Dredging]]).
- You'd pick forecasting models by in-sample fit and get poor forecasts ([[Overfitting]]).

## Explain it back
- Use the detective to explain the three goals.
- Why are exploratory results hypotheses, not findings?

*Pass test:* for any study, you can say which goal it serves and what that rules out.

## Connections
- **Related:** [[Why model at all]], [[Tredennick et al. 2021]], [[Theoretical vs Empirical Modeling]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Modeling Foundations]]

## Flashcards

What are the three goals of modeling (Tredennick et al. 2021)?
??
Exploration (find patterns, generate hypotheses), inference (test a priori hypotheses), and prediction (forecast new data accurately).
![[Exploration inference prediction.png]]
++++

Why must you choose the modeling goal before you start?
??
Each goal has different rules; using exploratory results as inference, or in-sample fit for prediction, gives misleading answers.
++++
