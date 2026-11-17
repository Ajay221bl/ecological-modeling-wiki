---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - distributions
aliases:
  - "Independent vs mutually exclusive events"
  - "Disjoint vs independent"
status: seedling
---

# Independent vs Disjoint Events

> [!summary] In plain words
> disjoint events cannot happen together, while independent events do not affect each other's chances, so two disjoint events with any chance of happening are never independent: knowing one happened tells you the other did not.

## The question
Aren't "mutually exclusive" and "independent" the same thing?

## Built from
- [[Disjoint Events]]: P(A and B) = 0.
- [[Independent Events]]: P(A and B) = P(A) P(B).
- [[Union of Events]]: where disjointness simplifies addition.

## The reasoning, step by step
1. **Disjoint:** P(A ∩ B) = 0, so P(A ∪ B) = P(A) + P(B).
2. **Independent:** P(A ∩ B) = P(A) P(B), equivalently P(A | B) = P(A).
3. **If both P(A) and P(B) are positive,** P(A) P(B) > 0 = P(A ∩ B), so disjoint events are dependent.
4. **Disjoint is about overlap; independence is about information.**
5. **Independence matters most in modeling:** the likelihood multiplies observation probabilities only if observations are independent (or conditionally independent given parameters).
A nest is either predated (0.3) or not. "Predated" and "fledged" are disjoint: P(both) = 0, but 0.3 × 0.7 = 0.21, so they are not independent.

## So in practice
Use addition for "or" only with disjoint events; use multiplication for "and" only with independent events.

## What would go wrong otherwise
Multiplying probabilities of two outcomes of the same trial as if they were independent.

## Explain it back
- Can two disjoint events with positive probability be independent?

*Pass test:* you can show with numbers why disjoint means dependent.

## Connections
- **Related:** [[Joint, Marginal and Conditional Probability]], [[Why non-independence inflates false positives]]
- **Part of:** [[MOC - Why We Do It This Way]], [[MOC - Probability and Distributions]]

## Flashcards

Are disjoint events independent?
??
No (if both have positive probability): one happening means the other cannot.
++++

Rule for "or" with disjoint events? For "and" with independent events?
??
Add; multiply.
++++
