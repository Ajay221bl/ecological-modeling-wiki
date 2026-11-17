---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - popest
aliases: []
status: seedling
---

# Mark-Recapture vs Unmarked Survey Methods

> [!summary] In plain words
> mark-recapture uses individual identities to estimate detection, giving survival and movement as well as abundance, while unmarked methods (occupancy, N-mixture, distance, removal, double-observer) estimate detection from survey patterns without handling animals but with their own strong assumptions.

## The question
Should I mark animals or use unmarked survey methods?

## Built from
- [[Mark-Recapture]], [[Capture History]].
- [[Occupancy]], [[N-mixture Model]], [[Distance Sampling]], [[Removal Sampling]], [[Double-observer Methods]].

## The reasoning, step by step
1. **What do you need?** Survival, movement or individual traits require marks. Distribution or density can use unmarked methods.
2. **Cost and disturbance:** marking needs capture, handling and permits; unmarked surveys cover more sites.
3. **Assumptions:**
   - Marking: equal catchability, no mark loss, closure or known openness.
   - N-mixture: individual closure across visits, no double counting.
   - Distance: g(0) = 1, accurate distances, no movement before detection.
4. **Natural marks** (camera traps, photo-ID, genetics) blur the line.

| Method | Data | Estimates | Key assumption |
|---|---|---|---|
| Mark-recapture | Individual histories | N, φ, movement | Equal catchability |
| Occupancy | 1/0 by visit | ψ, p | Species-level closure |
| N-mixture | Counts by visit | λ, p | Individual closure |
| Distance | Distances | Density | g(0) = 1 |
| Removal | Declining catches | N, p | Constant p |
| Double observer | Who saw what | p, N | Equal animal detectability |

## So in practice
Match the method to the question first, then to the species: noisy birds suit point counts with distances; secretive mammals suit cameras and occupancy; fish in small streams suit removal.

## What would go wrong otherwise
Using N-mixture models on highly mobile animals that move between sites across visits.

## Explain it back
- Which methods require individual marks?

*Pass test:* you can choose a method from the question and species.

## Connections
- **Related:** [[Choosing a Population Estimation Method]], [[Open vs Closed Populations]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Population Estimation]]

## Flashcards

What can mark-recapture estimate that unmarked survey methods cannot?
??
Survival, movement and individual-level effects.
++++
