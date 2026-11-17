---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "The candidate model set is the list of models, each representing a plausible hypothesis, that you decide to compare before looking at the data."
aliases:
  - "Candidate models"
  - "Model set"
  - "Set of candidate models"
  - "A priori model set"
  - "A Priori Model Set"
status: seedling
---

# Candidate Model Set

A prize shortlist is drawn up before any entry is read; if the judges could add categories after seeing the entries, any entry could be made a winner. The **candidate model set** is the list of models, each representing a plausible hypothesis, that you decide to compare before looking at the data ([[Multiple Working Hypotheses]], [[Model Selection]]). Start from the science, asking what processes could produce the pattern, and write one model per hypothesis or combination of hypotheses. Fix the set before analysing; "a priori" means before seeing the results.

Keep it small and thoughtful, since each model should be defensible as an idea and Burnham and Anderson warn against sets with very many models. Usually include a null, intercept-only model as a baseline ([[Null Model]]) and a [[Global Model]] as the most complex. All models must use the same response and the same rows, as [[AIC]] requires. The code below lists five candidates for bird counts: null, predation (tree), food (shrub), additive and interaction.

Inference is relative to the set, so if every model is poor the best one is still poor. Exploratory analysis after the a priori set is fine if labelled as such ([[Post hoc Analysis]]), and a [[Balanced Model Set]] is needed for variable-level summaries. Building it is the first task in the model selection lab ([[Anderson and Burnham 2002]], [[Johnson and Omland 2004]], [[Course Website]]). More models do not make a more thorough analysis: they mean more chances to find spurious winners ([[Data Dredging]]).

```r
cands <- c(null = "birds ~ 1", predation = "birds ~ tree", food = "birds ~ shrub", additive = "birds ~ tree + shrub", interaction = "birds ~ tree * shrub"); data.frame(formula = cands)
```

## Connections
- **Builds on:** [[Multiple Working Hypotheses]], [[Model Selection]]
- **Leads to:** [[Global Model]], [[Data Dredging]], [[Balanced Model Set]], [[AIC]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]], molecular note [[Why build the candidate model set before seeing the data]]

## Flashcards

What is a candidate model set?
??
The models, each representing a hypothesis, chosen for comparison before analysing the data.
++++

Why should the candidate set be small and defined a priori?
??
Large or data-driven sets increase the chance of selecting spurious models (data dredging).
++++
