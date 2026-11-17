---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - popest
aliases:
  - "Static vs dynamic occupancy"
  - "Single vs multi-season occupancy"
status: seedling
---

# Single-season vs Multi-season Occupancy

> [!summary] In plain words
> a single-season model estimates where a species is during one closed season, while a multi-season model also estimates how sites change between seasons through colonization and local extinction; a stacked single-season model sits between them.

## The question
Should I fit a single-season, stacked or multi-season occupancy model?

## Built from
- [[Single-season Occupancy]]: ψ and p in one closed season.
- [[Multi-season Occupancy]], [[Colonization Probability]] and [[Local Extinction Probability]]: change between seasons.
- [[Stacked Occupancy Design]]: several years without dynamics.
- [[Robust Design]]: the same closed-within, open-between structure for marked animals.

## See it
```mermaid
flowchart LR
  S1["Season 1: closed, repeat visits"] -->|"open: gamma, epsilon"| S2["Season 2: closed, repeat visits"]
  S2 -->|"open: gamma, epsilon"| S3["Season 3: closed, repeat visits"]
```
*What to look at:* like the robust design, each season is closed inside and open between, which is what the guest lecture's "Season 1, Open, Season 2" diagram shows.

## The reasoning, step by step
1. **One season, one question about where.** Single-season model: ψ and p, covariates on both.
2. **Several seasons, and you want to know how sites change.** Multi-season (dynamic) model: initial ψ₁, then γ, ε and p for each season or constrained to be equal.
3. **Several seasons but few detections.** Stacked single-season model: each site-year is a row with year as a covariate; it estimates ψ per year but not γ or ε.
4. **Time structure is a modelling choice.** The guest lecture: γ, ε and p can be fully time-varying, all equal, or vary by "event" (fire, timber harvest, regulation change), with structures compared by [[AIC]].

| | Single-season | Stacked single-season | Multi-season |
|---|---|---|---|
| Closure | within the season | within each year | within each season |
| Estimates | ψ, p | ψ per year, p | ψ₁, γ, ε, p |
| Links years at a site | n/a | no | yes |
| Data needed | modest | modest | many sites changing state |
| unmarked | occu() | occu() with year | colext() |
With ψ₁ = 0.2, γ = 0.15 and ε = 0.10, the dynamic model predicts ψ₂ = 0.2 × 0.9 + 0.8 × 0.15 = 0.30, heading to γ / (γ + ε) = 0.6. [[Happe et al. 2020]] had only 30 hexes with detections over four years, too few for γ and ε, so they stacked 263 site-years.

## So in practice
Decide by the question first and by the data second: if your question is "is the range expanding?", you need γ and ε, so plan enough sites and seasons to see turnover; if you only need yearly ψ, stack.

## What would go wrong otherwise
Comparing naive occupancy between years and calling the difference colonization: changes in detection between years then masquerade as changes in occupancy.

## Explain it back
- Why can't a stacked model estimate colonization?

*Pass test:* you can pick the right model for a multi-year occupancy question and say what each one can and cannot estimate.

## Connections
- **Related:** [[Assumptions of Occupancy Models]], [[Open vs Closed Populations]], [[Fisher Occupancy Case Study]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

What extra parameters does a multi-season occupancy model estimate?
??
Colonization γ and local extinction ε (plus initial ψ₁).
++++

Why did Happe et al. (2020) stack years instead of fitting colonization and extinction?
??
Too few fisher detections to estimate γ and ε.
++++
