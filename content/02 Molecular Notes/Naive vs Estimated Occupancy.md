---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - popest
aliases: []
status: seedling
---

# Naive vs Estimated Occupancy

> [!summary] In plain words
> naive occupancy is the share of sites where the species was seen and is biased low, while estimated occupancy ψ̂ uses repeat-visit patterns to estimate detection and adds back the occupied sites that were missed.

## The question
Why is estimated occupancy higher than the proportion of sites where I saw the species?

## Built from
- [[Naive Occupancy]] and [[Occupancy]].
- [[Detection History]]: the data pattern that informs p.
- [[Cumulative Detection Probability]]: how many occupied sites are expected to be missed.

## The reasoning, step by step
1. **Expected naive occupancy** = ψ × d, where d = 1 − (1 − p)^K.
2. **So ψ ≈ naive / d.** With naive 0.41, p = 0.26 and K = 4, d = 0.70, giving ψ ≈ 0.58.
3. **The model estimates p** from how often the species is re-detected at sites where it was seen at least once.
4. **If re-detection is common, p is high** and few all-zero sites hide the species (Study 1 in Powell and Gale Ch15).
5. **If re-detection is rare, p is low** and many all-zero sites are probably occupied (Study 2).
Simulation in [[Occupancy]]: true occupied share 0.57, naive 0.41, ψ̂ = 0.58, p̂ = 0.26. Check: 0.41 / (1 − 0.74⁴) = 0.41 / 0.70 = 0.59.

## So in practice
Report both. Naive shows the minimum; ψ̂ with its interval is the inference. If ψ̂ is far above naive, invest in more visits.

## What would go wrong otherwise
Comparing naive occupancy between habitats with different detection and calling the difference a habitat preference.

## Explain it back
- With p = 0.5 and 2 visits, what fraction of occupied sites look empty?

*Pass test:* you can explain and roughly compute the gap between naive and estimated occupancy.

## Connections
- **Related:** [[Occupancy vs Detection Probability]], [[Why raw counts mislead]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Population Estimation]]

## Flashcards

How does naive occupancy relate to ψ and p?
??
Expected naive = ψ × [1 − (1 − p)^K].
++++
