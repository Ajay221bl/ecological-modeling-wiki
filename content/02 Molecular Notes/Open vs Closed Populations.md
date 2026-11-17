---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - popest
aliases: []
status: seedling
---

# Open vs Closed Populations

> [!summary] In plain words
> closed-population methods assume no births, deaths or movement during sampling and estimate abundance, while open-population methods allow these changes and estimate survival, movement and recruitment.

## The question
When do I use closed versus open population models?

## Built from
- [[Closed Population]] and [[Open Population]].
- [[Closure Assumption]].
- [[Robust Design]]: both at once.

## The reasoning, step by step
1. **Closed:** short study relative to the species' life cycle. Estimates N and p.
2. **Open:** long study, deaths expected. Estimates φ, p, and with JS models N and recruitment.
3. **Two-occasion probabilities show the difference** (Powell and Gale Ch7):
   - Closed: P(11) = p₂, P(10) = 1 − p₂.
   - Open (CJS): P(11) = S₁p₂, P(10) = S₁(1 − p₂) + (1 − S₁).
4. **The robust design** nests closed occasions inside open periods.

| | Closed | Open |
|---|---|---|
| Births and deaths | None during study | Allowed |
| Movement | None | Permanent emigration (CJS) |
| Estimates | N, p | φ, p (plus N, recruitment for JS) |
| Study length | Short | Long |
| Examples | Lincoln-Petersen, M0 to Mh, removal | CJS, recoveries, multi-state |

## So in practice
Pick the period from the species' biology: no births or deaths, little movement. Mice: days. Elephants: months.

## What would go wrong otherwise
Running a closed model over a breeding season with young entering the population, which inflates N̂.

## Explain it back
- Write P(10) under closed and open models.

*Pass test:* you can choose and justify closed or open models.

## Connections
- **Related:** [[Mark-Recapture vs Unmarked Survey Methods]], [[Choosing a Survival Model]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Population Estimation]]

## Flashcards

Closed vs open: P(10) for two occasions?
??
Closed: 1 − p₂. Open (CJS): S₁(1 − p₂) + (1 − S₁).
++++
