---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "Candidate models"
  - "Model set"
  - "Set of candidate models"
  - "A priori model set"
  - "A Priori Model Set"
status: seedling
---

# Candidate Model Set

**In one line:** the candidate model set is the list of models, each representing a plausible hypothesis, that you decide to compare before looking at the data.

> [!info] Before this, it helps to know
> [[Multiple Working Hypotheses]] (where the models come from) · [[Model Selection]] (what is done with them)

## The everyday picture
The shortlist for a prize, drawn up before any entry is read. If the judges could add new categories after seeing the entries, any entry could be made a winner.

## Start from zero
1. **Start from the science:** what processes could produce the pattern?
2. **Write one model per hypothesis** (or combination of hypotheses).
3. **Fix the set before analysing.** "A priori" means before seeing the results.
4. **Keep it small and thoughtful.** Each model should be defensible as an idea. Burnham and Anderson warn against sets with very many models.
5. **Usually include a null or intercept-only model** as a baseline and a global model as the most complex.
6. **All models must use the same response and the same rows.**
7. **Inference is relative to the set.** If every model is poor, the best one is still poor.
8. **Exploratory analysis after the a priori set** is fine if labelled as such.

## In R
```r
cands <- c(null = "birds ~ 1", predation = "birds ~ tree", food = "birds ~ shrub", additive = "birds ~ tree + shrub", interaction = "birds ~ tree * shrub"); data.frame(formula = cands)
```

## In the course
[[Anderson and Burnham 2002]], [[Johnson and Omland 2004]]. Building the candidate set is the first task in the model selection lab ([[Course Website]]).

## Common confusions
- **"More models make a more thorough analysis."** More models mean more chances to find spurious winners.

## Explain it back
- Why must the set be fixed before seeing the data?

*Pass test:* you can build a candidate set from three hypotheses.

## Connections
- **Builds on:** [[Multiple Working Hypotheses]], [[Model Selection]]
- **Leads to:** [[Global Model]], [[Data Dredging]], [[Balanced Model Set]], [[AIC]]
- **Part of:** [[MOC - Model Selection]], molecular note [[Why build the candidate model set before seeing the data]]

## Flashcards

What is a candidate model set?
??
The models, each representing a hypothesis, chosen for comparison before analysing the data.
++++

Why should the candidate set be small and defined a priori?
??
Large or data-driven sets increase the chance of selecting spurious models (data dredging).
++++
