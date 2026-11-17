---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
aliases:
  - "Events"
  - "Outcome set"
status: seedling
---

# Event

**In one line:** an event is any collection of outcomes from the sample space that you might ask the probability of.

> [!info] Before this, it helps to know
> [[Sample Space]] (events are parts of it)

## The everyday picture
A bet. "It lands on an even number" is a bet that wins on 2, 4 or 6. An event is the set of outcomes on which the bet pays.

## A tiny example
Clutch of 4 eggs. Sample space {0, 1, 2, 3, 4} hatch.
- Event A: "at least one hatches" = {1, 2, 3, 4}.
- Event B: "all hatch" = {4}.
- Event C: "none hatch" = {0}, which is "not A".

## Start from zero
1. **Pick a statement that is true for some outcomes and false for others.**
2. **The event is the set of outcomes that make it true.**
3. **Its probability is the total probability of those outcomes.**
4. **Events combine:** "A and B" (both), "A or B" (at least one), "not A".
5. **Why think in events:** every statistical question is the probability of an event. "The count exceeds 10." "The slope is positive." "The species is present."

## In R
```r
p <- dbinom(0:4, 4, 0.6); names(p) <- 0:4; round(p, 3)     # each egg hatches with probability 0.6
sum(p[c("1", "2", "3", "4")])                              # P(at least one hatches)
1 - p["0"]                                                 # same thing, via "not none"
```

## Common confusions
- **"An event is a single outcome."** It can be one outcome or many.

## Explain it back
- Write "fewer than two hatch" as a set of outcomes.

*Pass test:* you can turn a statement into a set of outcomes and add up its probability.

## Connections
- **Builds on:** [[Sample Space]]
- **Leads to:** [[Union of Events]], [[Joint Probability]], [[Independent Events]], [[Disjoint Events]]
- **Part of:** [[MOC - Probability and Distributions]]

## Flashcards

What is an event?
??
A set of outcomes from the sample space to which a probability can be assigned.
++++
