---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - gam
aliases: []
status: seedling
---

# by= Smooths vs Factor Smooths

> [!summary] In plain words
> by= smooths give each group its own smooth and its own smoothing parameter and need a separate group effect, while factor smooths (bs = "fs") give all groups one shared smoothing parameter and include group intercepts automatically.

## The question
For a smooth per group, should I use s(x, by = g) or s(x, g, bs = "fs")?

## Built from
- [[by= Smooths]] and [[Factor-smooth Interaction]].
- [[Shared Wiggliness]]: the core difference.
- [[Random-effect Smooth]]: what by= needs alongside.

## The reasoning, step by step
1. **by=:** separate λ per level, curves can differ in complexity. Add `g` (or `s(g, bs = "re")`) for group means.
2. **fs:** one λ, curves penalised toward zero like random effects, group intercepts included.
3. **Few groups, each with lots of data and possibly different dynamics:** by=.
4. **Many groups, modest data each, similar dynamics:** fs.
5. **In HGAM terms:** fs gives GS or S; by= gives GI or I.

| | `s(x, by = g)` | `s(x, g, bs = "fs")` |
|---|---|---|
| Smoothing parameters | One per level | One shared |
| Group intercepts | Add separately | Included |
| Penalised toward | Each own null space | Zero (random-effect-like) |
| Suits | Few, distinct groups | Many, similar groups |
| HGAM type | GI, I | GS, S |

## So in practice
Start with fs when groups are a sample; use by= when the groups are a few levels you care about individually.

## What would go wrong otherwise
Using by= without a group main effect, forcing all groups to the same mean.

## Explain it back
- Which one includes group intercepts?

*Pass test:* you can pick between them for your data.

## Connections
- **Related:** [[Choosing an HGAM Model Type]], [[Fixed vs Random Effects]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - GAMs]]

## Flashcards

Which group-smooth form needs a separate group main effect?
??
s(x, by = g).
++++
