---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "P(A or B)"
  - "Addition rule"
  - "A ∪ B"
status: seedling
---

# Union of Events

**In one line:** the union of two events is the event that at least one of them happens.

> [!info] Before this, it helps to know
> [[Event]] (the things) · [[Joint Probability]] (the overlap to subtract)

## The everyday picture
Two overlapping circles of light on a floor. The lit area is the union. If you add the areas of both circles, you count the overlap twice, so you must take it away once.

## A tiny example
P(site has trees) = 0.5, P(site has shrubs) = 0.4, P(both) = 0.1.
- P(trees or shrubs) = 0.5 + 0.4 − 0.1 = 0.8.

## Start from zero
1. **"A or B" in probability includes "both".**
2. **P(A or B) = P(A) + P(B) − P(A, B).**
3. **Why subtract:** cases where both happen were counted in P(A) and again in P(B).
4. **If A and B are disjoint, the overlap is zero** and the rule is a plain sum.
5. **A handy shortcut:** P(at least one) = 1 − P(none). With independent events, P(none) is a simple product.

## In R
```r
0.5 + 0.4 - 0.1
p_detect <- 0.3; 1 - (1 - p_detect)^4        # P(detected at least once in 4 independent visits) = 0.76
```
Four visits each with a 30% chance give a 76% chance of at least one detection.

## In the course
[[Hobbs and Hooten 2015 Ch3]]. The "at least one detection" shortcut is the heart of occupancy survey design.

## Common confusions
- **"Or means one but not both."** In probability, "or" is inclusive.

## Explain it back
- Why is P(A, B) subtracted?

*Pass test:* you can compute the probability of at least one of two events.

## Connections
- **Builds on:** [[Event]], [[Joint Probability]]
- **Leads to:** [[Disjoint Events]], [[Detection Probability]]
- **Part of:** [[MOC - Probability and Distributions]]

## Flashcards

What is the addition rule for P(A or B)?
??
P(A) + P(B) − P(A, B).
++++

What is the shortcut for "at least one" with independent trials?
??
1 − P(none) = 1 − (1 − p)^n.
++++
