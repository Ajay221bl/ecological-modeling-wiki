---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "Age structure"
  - "Time-dependent survival"
  - "phi(t)p(t)"
  - "Age classes in survival"
  - "Time-since-marking"
status: seedling
---

# Age and Time Structure in Survival Models

**In one line:** age and time structure are the ways survival and detection parameters are allowed to vary in mark-recapture models: by occasion (t), by age class, by time since marking, or held constant (.).

> [!info] Before this, it helps to know
> [[Cormack-Jolly-Seber Model]] · [[Model Selection]]

## Start from zero
1. **Notation:** φ(.)p(.) has constant survival and detection; φ(t)p(t) lets both vary by occasion.
2. **Age:** juveniles often survive less than adults; animals marked as young change class after a year.
3. **Time since marking:** a "transient" effect when animals passing through are marked but never return.
4. **Groups** (sex, site) multiply the parameters.
5. **Compare structures with AICc** (Powell and Gale Ch4 for AIC; Ch10 for CJS models), adjusting for overdispersion with c-hat.
6. **More structure needs more data;** the fully time-dependent model has confounded last parameters.

## In the course
[[Powell and Gale 2015]] Ch4, Ch10 and Ch12.

## Common confusions
- **"Always start with φ(t)p(t) as the answer."** It is the general starting model for goodness of fit, not necessarily the best model.

## Explain it back
- What does φ(.)p(t) mean?

*Pass test:* you can read and build survival model notation.

## Connections
- **Builds on:** [[Cormack-Jolly-Seber Model]], [[Model Selection]]
- **Leads to:** [[Parameter Index Matrix]], [[Design Matrix in Program MARK]], [[Goodness of Fit and c-hat]]
- **Part of:** [[MOC - Population Estimation]]

## Flashcards

What does φ(.)p(t) mean?
??
Constant survival and occasion-specific detection probability.
++++
