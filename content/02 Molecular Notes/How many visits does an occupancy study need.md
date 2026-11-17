---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - popest
aliases:
  - "Survey Effort and Number of Visits"
  - "Number of visits in occupancy"
  - "Visits versus sites"
status: seedling
---

# How many visits does an occupancy study need

> [!summary] In plain words
> an occupancy study needs enough visits per site that a present species is likely to be detected at least once, and enough sites to estimate ψ precisely, with the best balance depending on p.

## The question
How many sites and how many visits per site should I use?

## Built from
- [[Cumulative Detection Probability]]: d = 1 − (1 − p)^K.
- [[Single-season Occupancy]]: at least two visits.
- [[Detection Probability]].

## The reasoning, step by step
1. **At least two visits** per site, or p cannot be estimated.
2. **Aim for d of about 0.85 to 0.95.** Solve K = log(1 − d) / log(1 − p).
3. **Low p (below about 0.3):** more visits per site are worth more than more sites.
4. **High p (above about 0.5):** two or three visits suffice; spend effort on more sites.
5. **Simulate** your design with plausible ψ and p before fieldwork; [[Simulation Model]] code is cheap.
6. **Keep visiting after detection** unless you use a removal design deliberately.
p = 0.25: K = 9 for d ≥ 0.9 (8 gives 0.8999). p = 0.6: K = 3 (d = 0.936).

## So in practice
Run a short pilot to estimate p, then choose K from the formula and the rest of the budget for sites.

## What would go wrong otherwise
Fixing three visits for every species regardless of detectability.

## Explain it back
- How many visits for d ≥ 0.9 when p = 0.4?

*Pass test:* you can plan visits and sites from a pilot p.

## Connections
- **Related:** [[Naive vs Estimated Occupancy]], [[Occupancy Workflow in R]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Population Estimation]]

## Flashcards

How many visits give d ≥ 0.9 when p = 0.4?
??
Five (1 − 0.6⁵ = 0.92; four gives 0.87).
++++
