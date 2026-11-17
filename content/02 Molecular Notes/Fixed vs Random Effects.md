---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - mixed
aliases: []
status: seedling
---

# Fixed vs Random Effects

> [!summary] In plain words
> a fixed effect estimates each level's value directly and only describes those levels, while a random effect estimates the spread of a population of levels and shrinks each level toward the average, allowing generalisation to new levels.

## The question
What is actually different between treating a factor as fixed and treating it as random?

## Built from
- [[Fixed Effect]] and [[Random Effect]].
- [[Partial Pooling]] and [[Shrinkage]]: what random effects add.
- [[How Many Levels for a Random Effect]]: the practical limit.

## The reasoning, step by step
1. **Parameters:** fixed uses J − 1 coefficients. Random uses one variance (plus predicted deviations).
2. **Information sharing:** none for fixed. Random levels borrow strength.
3. **Inference target:** fixed describes these levels. Random describes the population they come from.
4. **New levels:** fixed can't predict them. Random can (the average, with group variance).
5. **Few levels:** fixed is stable. Random variance is imprecise below about five levels.
6. **Testing levels against each other:** easy with fixed. With random, compare predicted deviations with care.

| | Fixed | Random |
|---|---|---|
| Estimates | Each level | Variance across levels |
| Parameters for J levels | J − 1 | 1 (per variance) |
| Shrinkage | No | Yes |
| Predict new levels | No | Yes |
| Good with few levels | Yes | Imprecise |
| Typical use | Treatments, sex | Sites, individuals, years |

## So in practice
Grouping that reflects sampling (sites, individuals, years): random. Factors whose levels you care about and would repeat (treatments): fixed.

## What would go wrong otherwise
Fitting individual ID as a fixed effect to "control for it" in a study of 50 birds: it uses 49 df and gives no repeatability estimate (Harrison et al.).

## Explain it back
- What can a random effect do with a new level that a fixed effect can't?

*Pass test:* you can justify fixed or random for each factor in your design.

## Connections
- **Related:** [[Why use a random effect instead of a fixed effect]], [[Complete, No and Partial Pooling]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Mixed Models]]

## Flashcards

How many parameters does a fixed factor with J levels use versus a random factor?
??
Fixed: J − 1. Random: one variance (per random term).
++++
