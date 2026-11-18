---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Age and time structure are the ways survival and detection parameters are allowed to vary in mark-recapture models: by occasion (t), by age class, by time since marking, or held constant (.)."
aliases:
  - "Age structure"
  - "Time-dependent survival"
  - "phi(t)p(t)"
  - "Age classes in survival"
  - "Time-since-marking"
status: seedling
---

# Age and Time Structure in Survival Models

**Age and time structure** are the ways survival and detection parameters are allowed to vary in [[Mark-Recapture|mark-recapture models]]: by occasion (t), by age class, by time since marking, or held constant (.) ([[Cormack-Jolly-Seber Model]], [[Model Selection]]). φ(.)p(.) has constant survival and detection; φ(t)p(t) lets both vary by occasion. Juveniles often survive less than adults, and animals marked as young change class after a year. A time-since-marking effect captures "transients", animals passing through that are marked but never return. Groups such as sex or site multiply the parameters.

Compare structures with [[AICc]] (Powell and Gale Ch4 for AIC, Ch10 for CJS models), [[Holding Other Variables Constant|adjusting for]] [[Overdispersion|overdispersion]] with ĉ ([[AIC]], [[Goodness of Fit and c-hat]]). More structure needs more data, and the fully time-dependent model has [[Confounding|confounded]] last parameters. In [[Program MARK]] the structure is set with the [[Parameter Index Matrix]] and the [[Design Matrix in Program MARK]].

It is covered in [[Powell and Gale 2015]] Ch4, Ch10 and Ch12 ([[Cohort]]). Don't start with φ(t)p(t) as the answer; it is the general starting model for [[Model Validation|goodness of fit]], not necessarily the best model.

## Connections
- **Builds on:** [[Cormack-Jolly-Seber Model]], [[Model Selection]], [[Mark-Recapture]], [[AICc]], [[Holding Other Variables Constant]], [[Overdispersion]], [[Confounding]], [[Model Validation]]
- **Leads to:** [[Parameter Index Matrix]], [[Design Matrix in Program MARK]], [[Goodness of Fit and c-hat]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

What does φ(.)p(t) mean?
??
Constant survival and occasion-specific detection probability.
++++
