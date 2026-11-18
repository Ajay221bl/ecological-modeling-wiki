---
type: atomic
tags:
  - ecology
  - flashcards/eco/ecology
description: "Fire severity measures how much a fire changed vegetation and soil, time since fire counts years since the last burn, and burn status records whether a site burned, all common predictors in disturbance ecology."
aliases:
  - "Fire Severity and Time Since Fire"
  - "Fire severity"
  - "Years since fire"
  - "Time since fire"
  - "Burn severity"
  - "Burn Status"
  - "Burned vs unburned"
  - "Fire history"
status: seedling
---

# Fire History Variables

**Fire severity** measures how much a fire changed vegetation and soil, **time since fire** counts years since the last burn, and **burn status** records whether a site burned; all are common predictors in disturbance ecology ([[Predictor Variable|Explanatory Variable]], [[Categorical Variable]]). Burn status is binary, a two-level factor. Severity is often ordinal (low, moderate, high) or continuous from satellite indices such as dNBR ([[Ordinal Variable]]). Time since fire is continuous but often nonlinear, as plants and animals recover over years, suiting GAMs or quadratic terms ([[Generalized Additive Model]]).

Fire is rarely randomised, so burned and unburned sites can differ in other ways, which is confounding ([[Confounding|Confounding Variable]]). Repeated surveys of the same sites need site [[Random Effect|random effects]] ([[Random Intercept]]).

These variables appear in the lab datasets ([[Course Website]], [[Habitat Structure]], [[Woody Encroachment]]). Burned against unburned is not an experiment: without [[Randomization|random assignment]] it is observational.

## Connections
- **Builds on:** [[Predictor Variable|Explanatory Variable]], [[Categorical Variable]], [[Random Effect]], [[Randomization]]
- **Leads to:** [[Ordinal Variable]], [[Confounding|Confounding Variable]], [[Generalized Additive Model]]
- **Part of:** [[MOC 19 - Ecology Vocabulary|MOC - Ecology Vocabulary]]

## Flashcards

Burn status, severity and time since fire: what variable types?
??
Binary factor; ordinal or continuous; continuous (often nonlinear).
++++
