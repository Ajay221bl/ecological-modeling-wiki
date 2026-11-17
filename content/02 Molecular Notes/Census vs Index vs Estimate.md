---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - popest
aliases: []
status: seedling
---

# Census vs Index vs Estimate

> [!summary] In plain words
> a census counts every individual (C = N), an index counts some with unknown detection (C ≤ N, relation unknown), and an abundance estimate corrects a sample count with estimated detection and area to give N̂ with a measure of uncertainty.

## The question
What is the difference between a census, an index and an abundance estimate?

## Built from
- [[Census]]: complete count.
- [[Population Index]] and [[Catch per Unit Effort]]: counts without detection.
- [[Count-based Abundance Estimation]]: the correction formula.

## The reasoning, step by step
1. **Census:** possible only when every animal can be counted; no sampling error.
2. **Index:** cheap, repeatable; valid for trends only if detection is constant.
3. **Estimate:** needs extra data (repeats, marks, distances) and assumptions (closure, g(0) = 1), but gives N̂ and a standard error.
4. **Johnson (2010), via Powell and Gale Ch14:** a badly executed estimate can be worse than a well-understood index.

| | Census | Index | Estimate |
|---|---|---|---|
| Counts everyone? | Yes | No | No |
| Detection known? | Yes (1) | No | Estimated |
| Gives true N? | Yes | No | Yes, with SE |
| Cost | Only for small populations | Low | Higher |
| Main risk | Not really complete | Detection changes | Broken assumptions |

## So in practice
Choose an index when you only need direction of change and can keep methods constant; choose an estimate when you need actual numbers, comparisons across habitats, or detection itself is changing.

## What would go wrong otherwise
Calling the Christmas Bird Count a census; it is an index with varying effort.

## Explain it back
- Which of the three gives a standard error for N?

*Pass test:* you can classify a survey and say what it can and cannot tell you.

## Connections
- **Related:** [[Why raw counts mislead]], [[Choosing a Population Estimation Method]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Population Estimation]]

## Flashcards

Census vs index vs estimate in one line each?
??
Census: complete count. Index: count with unknown detection. Estimate: count corrected for estimated detection and area.
++++
