---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - popest
aliases: []
status: seedling
---

# Why raw counts mislead

> [!summary] In plain words
> raw counts confuse how many animals there are with how easy they are to detect, so differences in counts between habitats, years or observers may be differences in detection rather than abundance.

## The question
Why can't I just compare raw counts between sites or years?

## Built from
- [[Imperfect Detection]] and [[Detection Probability]]: what counts miss.
- [[Population Index]]: the assumption that makes counts comparable.
- [[Availability for Detection|Availability and Presence Probability]]: why detection changes with behaviour and habitat.

## The reasoning, step by step
1. **A count is C = N × p** on average (ignoring area).
2. **Compare two sites:** C₁/C₂ = (N₁/N₂) × (p₁/p₂).
3. **The count ratio equals the abundance ratio only if p₁ = p₂.**
4. **Detection usually differs:** vegetation, noise, weather, observer skill, season, animal behaviour.
5. **So habitat effects on counts can be detection effects.** Dense forest may hold more birds but give fewer counts.
6. **Fixes:** estimate p with repeat visits ([[N-mixture Model]], [[Occupancy]]), distances ([[Distance Sampling]]), marks ([[Mark-Recapture]]) or two observers ([[Double-observer Methods]]); or at least standardize effort and model detection covariates.
Site A: 100 birds, p = 0.6, expected count 60. Site B: 150 birds, p = 0.3, expected count 45. B has 50 percent more birds but 25 percent fewer counted.

## So in practice
Before interpreting a count difference, ask: could detection differ in the same direction? If yes, you need an estimate of detection or a design that holds it constant.

## What would go wrong otherwise
Concluding that a bird avoids forest because counts are lower there, when singing birds are simply harder to hear among trees.

## Explain it back
- When does a ratio of counts equal a ratio of abundances?

*Pass test:* you can show with numbers how detection differences reverse a comparison.

## Connections
- **Related:** [[Census vs Index vs Estimate]], [[Naive vs Estimated Occupancy]], [[Choosing a Population Estimation Method]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

When does a ratio of counts equal a ratio of abundances?
??
Only when detection probability is the same in both places or years.
++++
