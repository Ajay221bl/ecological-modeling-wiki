---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - popest
aliases: []
status: seedling
---

# True vs Apparent Survival

> [!summary] In plain words
> true survival S is the probability of staying alive, while apparent survival φ = S × F also requires staying in the study area, so CJS estimates φ and other designs are needed to estimate S.

## The question
Why is apparent survival lower than true survival, and how do I get true survival?

## Built from
- [[Apparent Survival]] and [[Survival Rate]].
- [[Cormack-Jolly-Seber Model]].
- [[Dead Recovery Models]], [[Joint Live-dead Encounter Models]], [[Known-fate Models]], [[Multi-state Models]].

## The reasoning, step by step
1. **CJS histories end in zeros** for animals that died or left; the model cannot tell which.
2. **So φ = S × F,** survival times fidelity.
3. **Options for S:**
   - Known-fate telemetry (you find the animal wherever it goes).
   - Dead recoveries from anywhere (S directly).
   - Joint live-dead models (S and F).
   - Multi-state models across sites (reduces the problem when emigrants move to monitored sites).
4. **When φ is enough:** for local population dynamics, losing an animal to emigration matters as much as death.
S = 0.8, F = 0.75 gives φ = 0.6. A CJS study would suggest 40 percent "mortality" when real mortality is 20 percent.

## So in practice
State clearly that CJS estimates apparent survival; for juveniles, which disperse, expect φ to be much lower than S.

## What would go wrong otherwise
Comparing CJS φ from a small plot with known-fate S from telemetry and concluding survival differs between methods.

## Explain it back
- Which data give true survival directly?

*Pass test:* you can explain φ versus S and choose a design for S.

## Connections
- **Related:** [[Choosing a Survival Model]], [[Open vs Closed Populations]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

What is the relation between apparent and true survival?
??
φ = S × F, where F is site fidelity.
++++
