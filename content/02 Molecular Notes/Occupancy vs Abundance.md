---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - popest
aliases: []
status: seedling
---

# Occupancy vs Abundance

> [!summary] In plain words
> occupancy asks whether a species is present at sites and needs only detection or non-detection data, while abundance asks how many individuals there are and needs counts, marks or distances plus stronger assumptions.

## The question
Should I study occupancy or abundance, and how are they related?

## Built from
- [[Occupancy]] and [[Abundance]].
- [[N-mixture Model]]: the abundance counterpart of occupancy.
- [[Closure Assumption]]: species-level versus individual-level.

## The reasoning, step by step
1. **Occupancy data are cheaper:** a detection is enough, from sign, calls or cameras.
2. **Abundance needs more:** individuals counted or identified.
3. **Closure is looser for occupancy** (species stays) than for abundance (same individuals).
4. **They are linked:** ψ = P(N > 0). With Poisson abundance, ψ = 1 − e^(−λ).
5. **Occupancy saturates:** once nearly all sites are occupied, declines in abundance do not show up in ψ.
6. **Rare species:** occupancy may be all you can estimate (Powell and Gale Ch15).

| | Occupancy | Abundance |
|---|---|---|
| Question | Where is it? | How many? |
| Data | 1/0 per visit | Counts, marks, distances |
| Closure | Species level | Individual level |
| Sensitive to decline when common? | Weakly | Yes |
| Model | Occupancy (ψ, p) | N-mixture, mark-recapture, distance |
λ = 0.5 animals per site gives ψ = 0.39; λ = 3 gives 0.95; λ = 6 gives 0.998. Doubling from 3 to 6 barely moves ψ.

## So in practice
Choose occupancy for rare or elusive species, range monitoring and large areas; choose abundance when management depends on numbers or when the species is common.

## What would go wrong otherwise
Using stable occupancy of a common species to argue its population is stable.

## Explain it back
- How does ψ relate to λ under a Poisson model?

*Pass test:* you can choose between occupancy and abundance for a study.

## Connections
- **Related:** [[Choosing a Population Estimation Method]], [[Why raw counts mislead]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

Under Poisson abundance with mean λ, what is occupancy?
??
ψ = 1 − e^(−λ).
++++

Why is occupancy insensitive to declines of common species?
??
Sites stay occupied (N > 0) even when numbers fall.
++++
