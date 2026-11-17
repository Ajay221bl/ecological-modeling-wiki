---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Mutually exclusive events"
  - "Mutually exclusive"
status: seedling
---

# Disjoint Events

**In one line:** two events are disjoint when they cannot both happen.

> [!info] Before this, it helps to know
> [[Event]] (the things) · [[Joint Probability]] (which is zero here)

## The everyday picture
A single traffic light. It can be red or green, never both at once. Seeing red tells you with certainty it isn't green.

## A tiny example
One die roll. "Roll a 2" and "roll a 5" are disjoint. P(2 or 5) = 1/6 + 1/6 = 1/3.

## Start from zero
1. **P(A, B) = 0.**
2. **So P(A or B) = P(A) + P(B).** The addition rule in its simplest form.
3. **The outcomes of a sample space are disjoint by construction.** That is why their probabilities add to 1.
4. **Disjoint events are strongly dependent.** Knowing A happened tells you B didn't.
5. **Why it matters in modeling:** to get the probability of a range of counts, such as "2 or fewer", you add the probabilities of 0, 1 and 2, because those outcomes are disjoint.

## In R
```r
sum(dpois(0:2, 3)); ppois(2, 3)      # P(count <= 2) by adding disjoint outcomes
```

## In the course
[[Hobbs and Hooten 2015 Ch3]].

## Common confusions
- **"Disjoint and independent are the same."** They are nearly opposites.

## Explain it back
- Why are disjoint events dependent?

*Pass test:* you can say when probabilities may be added.

## Connections
- **Builds on:** [[Event]]
- **Leads to:** [[Union of Events]], [[Independent Events]], [[Probability Mass Function]]
- **Part of:** [[MOC - Probability and Distributions]], molecular note [[Independent vs Disjoint Events]]

## Flashcards

What are disjoint (mutually exclusive) events?
??
Events that cannot occur together, so P(A, B) = 0.
++++

What is P(A or B) for disjoint events?
??
P(A) + P(B).
++++
