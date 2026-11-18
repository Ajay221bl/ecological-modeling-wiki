---
type: atomic
tags:
  - model-selection-diagnostics
  - flashcards/eco/selection
description: "A model's purpose is what it is for, decided before building it: finding ideas (exploration), testing ideas you already had (inference), or forecasting new data (prediction)."
aliases:
  - "model purpose"
  - "modeling goal"
  - "exploration inference prediction"
  - "three modeling goals"
status: seedling
---

# Model Purpose - Exploration Inference Prediction

A map can do three jobs. A hiker exploring wants to spot interesting trails; a surveyor checking a boundary wants to confirm one specific line; a delivery driver wants the fastest route tomorrow. Same land, different maps, and different ways to judge whether a map is good. A [[Statistical Model]] is the same, so before asking "which model is best?" you ask "best for what?" A **model's purpose** is one of three. *Exploration* looks around for patterns, and its output is new hypotheses ([[Exploratory Modeling]]). *Inference* tests a [[Hypothesis]] you wrote down beforehand ("a priori", decided before seeing the data), and its output is evidence for or against it ([[Inferential Modeling]]). *Prediction* guesses values you have not seen yet, and its output is forecasts judged by how close they come ([[Predictive Modeling]], [[Out-of-sample Prediction]]). [[Tredennick et al. 2021]] argue that much confusion about [[Model Selection|model selection]] comes from skipping this question (p. 2).

Each purpose has its own main risk (Tredennick et al., pp. 3-5; Table 2, p. 13): exploration risks fooling yourself with spurious, overfitted patterns ([[Overfitting]]); inference risks passing off exploratory results as planned tests; prediction risks never checking forecasts against independent data. The key rule for inference is that "we cannot formally test hypotheses on the same data set used to generate those hypotheses" (p. 4): if you spot a pattern and then "test" it on the same data, it will pass, because you picked it for looking good. Try it on an example. You notice that visits by Observer X had 2 more species on average. Reporting "Observer X detects more birds (confirmed)" is exploration dressed as inference ([[Data Dredging]]); the honest version is "Exploratory: Observer X averaged 2 more species; a hypothesis to test with next season's data"; and the prediction version is "next year a visit by Observer X at BK should record about N species", checked when the data arrive. A surprise for beginners: [[AIC]] was designed for prediction. Akaike's goal "was to approximate a model's out-of-sample predictive skill", and AIC is "more forgiving of possibly spurious [[Predictor Variable|covariates]]" than significance tests, so results used for inference "should be interpreted cautiously" (pp. 5-6); with more than a handful of models, "it is likely that you are actually still in the exploration phase" (p. 13).

The grassland bird project is inference: the final proposal (Oct 12) states three hypotheses before any model is fitted, H1 property identity, H2 local habitat and H3 [[Repeat-Visit Design|repeated visits]] ([[Hypotheses]]), and the six candidate models map onto them ([[Candidate Model Set]]). In practice that means keeping the set small and named in advance (6 per response); not stopping at the [[Model Ranking Tables|AIC table]] but also reporting the property and habitat estimates with [[Confidence Interval|confidence intervals]] and saying how big the effects are ([[Interpreting Poisson Coefficients]]); labelling anything noticed after looking at results, such as an observer pattern or a better way to code Wind, as exploration; and not claiming prediction, which would need checking on data not used to fit the model. Three confusions: exploration is not second-class, it is where new ideas come from and just needs honest labelling; the lowest-AIC model is not the true explanation, since AIC asks which predicts best, related to but not the same as which hypothesis is right ([[Why compare models with AIC rather than only p-values]]); and good fit is not good prediction, because a model can fit its own data perfectly and predict new data badly. (The Sep 10 proposal had two hypotheses and five models; the scripts have fitted the final six since Oct 13, [[Preliminary Results]].)

## Connections
- **Builds on:** [[Statistical Model]], [[Hypothesis]], [[Model Selection]], [[Predictor Variable]], [[Model Ranking Tables]]
- **Leads to:** [[Exploratory Modeling]], [[Inferential Modeling]], [[Predictive Modeling]], [[Out-of-sample Prediction]], [[Overfitting]], [[Data Dredging]], [[AIC]], [[Candidate Model Set]], [[Repeat-Visit Design]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection and Diagnostics]]
- **Go deeper:** [[Hypotheses]], [[Why compare models with AIC rather than only p-values]], [[Interpreting Poisson Coefficients]], [[Tredennick et al. 2021]]

## Flashcards

Is the project's main goal exploration, inference or prediction, and what is one consequence for how results are reported?
??
Inference: the hypotheses came before the analysis. So the candidate set stays small and planned, and effect sizes with confidence intervals are reported alongside AIC, with any after-the-fact discoveries labelled as exploratory.
++++

Why can you not test a hypothesis on the same data that suggested it?::The pattern was picked because it looked good in those data, so it will pass; the test is circular.
