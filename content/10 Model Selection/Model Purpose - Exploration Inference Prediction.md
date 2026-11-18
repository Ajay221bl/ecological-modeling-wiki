---
type: atomic
tags:
  - model-selection-diagnostics
  - flashcards
aliases:
  - "model purpose"
  - "modeling goal"
  - "exploration inference prediction"
  - "three modeling goals"
status: seedling
---

# Model Purpose - Exploration Inference Prediction
**In one line:** Before building a model, decide what it is for: finding ideas (exploration), testing ideas you already had (inference), or forecasting new data (prediction).

> [!info] Before this, it helps to know
> [[Statistical Model]] (the tool) · [[Hypothesis]] (what inference tests) · [[Sample vs Population]] (why "new data" matters)

## Start from zero
A map can be for three jobs. A hiker exploring wants to spot interesting trails. A surveyor checking a boundary wants to confirm one specific line. A delivery driver wants the fastest route tomorrow. Same land, different maps, different ways to judge if the map is good.

Models are the same. Ask "best model **for what**?" before asking "which model is best?"

- **Exploration:** look around for patterns. Output: new hypotheses.
- **Inference:** test a hypothesis you wrote down beforehand. Output: evidence for or against it.
- **Prediction:** guess values you have not seen yet. Output: forecasts, judged by how close they come.

## Why it exists
[[Tredennick et al. 2021]] argue that much confusion about model selection comes from skipping this question (p. 2). They separate the three goals (pp. 3-5; Table 2, p. 13):

| Goal | Purpose | Main risk |
|---|---|---|
| Exploration | generate hypotheses | fooling yourself with spurious, overfitted patterns |
| Inference | test a priori hypotheses | passing off exploratory results as planned tests |
| Prediction | forecast accurately | never checking predictions against independent data |

("A priori" means "decided before seeing the data".)

The key rule for inference: "we cannot formally test hypotheses on the same data set used to generate those hypotheses" (p. 4). Why? If you spot a pattern in the data and then "test" it on the same data, it will pass, because you picked it for looking good. That is circular.

A surprise for beginners: [[AIC]] was designed for prediction. Akaike's goal "was to approximate a model's out-of-sample predictive skill", and AIC is "more forgiving of possibly spurious covariates" than significance tests, so results used for inference "should be interpreted cautiously" (pp. 5-6). With more than a handful of models, "it is likely that you are actually still in the exploration phase" (p. 13).

## A tiny example
You notice in your data that visits with Observer X had 2 more species on average.
- If you then report "Observer X detects more birds (confirmed)", that is exploration dressed as inference.
- Honest version: "Exploratory: Observer X averaged 2 more species. This is a hypothesis to test with next season's data."
- Prediction version: "Next year, a visit by Observer X at site BK should record about N species", checked when next year's data arrive.

## In my project
My project is **inference**. The final proposal (Oct 12) states three hypotheses before any model is fitted: H1 property identity, H2 local habitat, H3 repeated visits ([[Hypotheses]]). The six candidate models (M0 Null, M1 Property, M2a to M2c habitat at three scales, M3 Property plus the best habitat model) map onto them ([[Candidate Model Set]]). (The Sep 10 proposal had two hypotheses and five models; since Oct 13 the R scripts fit the final six instead. Results: [[Preliminary Results]].)

What this means in practice:
- Keep the model set small (it is: 6 models per response, all named in advance).
- Because AIC leans toward prediction, do not stop at the AIC table. Also report the property and habitat estimates with [[Confidence Interval|confidence intervals]], and say how big the effects are ([[Interpreting Poisson Coefficients]]).
- Anything I notice after looking at results (an observer pattern, a better way to code Wind) is **exploration**. It can go in the Report, labelled as such ([[Data Dredging]]).
- Prediction is not a goal now. Predicting richness at new properties or years would need checking on data not used to fit the model.

## Common confusions
- **"Exploration is second-class."** No, it is where new ideas come from. It just must be labelled honestly.
- **"The model with the lowest AIC is the true explanation."** AIC asks "which predicts best", which is related to, but not the same as, "which hypothesis is right".
- **"Good fit = good prediction."** A model can fit its own data perfectly and predict new data badly ([[Overfitting]]).

## Connections
- **Builds on:** [[Statistical Model]], [[Hypothesis]], [[Hypotheses]], [[Sample vs Population]]
- **Leads to:** [[Candidate Model Set]], [[AIC]], [[Data Dredging]], [[Why compare models with AIC rather than only p-values]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection and Diagnostics]]
- **Go deeper:** [[Tredennick et al. 2021]] (the whole paper is about this distinction)

> [!question]- Check yourself
> Is my project's main goal exploration, inference or prediction, and what is one consequence for how I report results?
> ?
> Inference: the hypotheses came before the analysis. So the candidate set stays small and planned, and I should report effect sizes with confidence intervals alongside AIC, labelling any after-the-fact discoveries as exploratory.
