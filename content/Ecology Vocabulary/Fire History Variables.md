---
type: atomic
tags:
  - ecology
  - flashcards/eco/ecology
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

**In one line:** fire severity measures how much a fire changed vegetation and soil, time since fire counts years since the last burn, and burn status records whether a site burned, all common predictors in disturbance ecology.

> [!info] Before this, it helps to know
> [[Explanatory Variable]] · [[Categorical Variable]]

## Start from zero
1. **Burn status** is binary (burned or unburned), a two-level factor.
2. **Severity** is often ordinal (low, moderate, high) or continuous from satellite indices such as dNBR.
3. **Time since fire** is continuous but often nonlinear: plants and animals recover over years, suiting GAMs or quadratic terms.
4. **Fire is rarely randomised,** so burned and unburned sites can differ in other ways (confounding).
5. **Repeated surveys of the same sites** need site random effects.

## In the course
Lab datasets ([[Course Website]]).

## Common confusions
- **"Burned vs unburned is an experiment."** Without random assignment it is observational.

## Explain it back
- Why is time since fire often modelled nonlinearly?

*Pass test:* you can code fire variables correctly in a model.

## Connections
- **Builds on:** [[Explanatory Variable]], [[Categorical Variable]]
- **Leads to:** [[Ordinal Variable]], [[Confounding Variable]], [[Generalized Additive Model]]
- **Part of:** [[MOC - Ecology Vocabulary]]

## Flashcards

Burn status, severity and time since fire: what variable types?
??
Binary factor; ordinal or continuous; continuous (often nonlinear).
++++
