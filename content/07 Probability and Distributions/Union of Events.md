---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "The union of two events is the event that at least one of them happens."
aliases:
  - "P(A or B)"
  - "Addition rule"
  - "A ∪ B"
status: seedling
---

# Union of Events

Shine two overlapping circles of light on a floor. The lit area is the union, and if you add the areas of the two circles, you count the overlap twice, so you must take it away once. The **union** of two events is the event that at least one of them happens, written "A or B" or A ∪ B ([[Event]]). In probability "or" is inclusive: it includes the case where both happen. Its probability is P(A or B) = P(A) + P(B) − P(A, B), subtracting the overlap that was counted in both ([[Joint Probability]]).

An example. P(a site has trees) = 0.5, P(it has shrubs) = 0.4, and P(both) = 0.1, so P(trees or shrubs) = 0.5 + 0.4 − 0.1 = 0.8. If the events are [[Disjoint Events|disjoint]], the overlap is zero and the rule becomes a plain sum.

A handy shortcut is P(at least one) = 1 − P(none), because "none" is often easier to calculate. With [[Independent Events|independent events]] P(none) is a simple product. If a species is detected with probability 0.3 on each of 4 independent visits, the chance it is missed every time is 0.7⁴ = 0.24, so P(detected at least once) = 1 − 0.24 = 0.76, as the code shows. That calculation is the heart of occupancy survey design, deciding how many visits are needed before a non-detection is convincing ([[Detection Probability]], [[Hobbs and Hooten 2015 Ch3]]).

```r
0.5 + 0.4 - 0.1
p_detect <- 0.3; 1 - (1 - p_detect)^4        # P(detected at least once in 4 independent visits) = 0.76
```
Four visits each with a 30% chance give a 76% chance of at least one detection.

## Connections
- **Builds on:** [[Event]], [[Joint Probability]], [[Independent Events]]
- **Leads to:** [[Disjoint Events]], [[Detection Probability]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What is the addition rule for P(A or B)?
??
P(A) + P(B) − P(A, B).
++++

What is the shortcut for "at least one" with independent trials?
??
1 − P(none) = 1 − (1 − p)^n.
++++
