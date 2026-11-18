---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - mixed
aliases: []
status: seedling
---

# Nested vs Crossed Random Effects

> [!summary] In plain words
> nested random effects describe groups inside groups (plots within sites), crossed random effects describe groupings that combine freely (sites and years), and the difference is in how the labels map onto each other.

## The question
Is my design nested or crossed, and how do I write it?

## Built from
- [[Nested Random Effects]] and [[Crossed Random Effects]].
- [[Grouping Variable|Grouping Factor]]: labels.
- [[lme4 Random-effect Syntax]].

## The reasoning, step by step
1. **Ask:** does each level of B occur within only one level of A? Then B is nested in A.
2. **Does each level of B occur with several levels of A?** Then they are crossed.
3. **Nested syntax:** `(1 | A/B)`, or `(1 | A) + (1 | B)` if B labels are unique.
4. **Crossed syntax:** `(1 | A) + (1 | B)`.
5. **The trap:** with non-unique B labels, `(1 | A) + (1 | B)` wrongly treats them as crossed.
6. **Draw it** (Schielzeth and Nakagawa 2013 via Harrison et al.) or tabulate `table(A, B)`.

| | Nested | Crossed |
|---|---|---|
| Example | Chicks within nests | Sites by years |
| table(A, B) | Each B column has one non-zero A row | Many non-zero cells |
| lme4 | `(1 \| A/B)` | `(1 \| A) + (1 \| B)` |
| nlme lme | Supported | Awkward |

## So in practice
Give every lower-level unit a unique label (`interaction(site, plot)`) and the syntax worries disappear.

## What would go wrong otherwise
Labelling plots 1 to 4 within every site and fitting `(1 | plot)`: four "plots" pooled across all sites.

## Explain it back
- How does table(A, B) reveal nesting?

*Pass test:* you can write the right syntax for your design.

## Connections
- **Related:** [[Random Intercept vs Random Slope]], [[Fixed vs Random Effects]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

How can you check whether B is nested in A?
??
table(A, B): if each level of B appears with only one level of A, B is nested.
++++
