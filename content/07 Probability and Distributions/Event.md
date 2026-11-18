---
type: atomic
tags:
  - distributions
  - flashcards/eco/distributions
description: "An event is any collection of outcomes from the sample space that you might ask the probability of."
aliases:
  - "Events"
  - "Outcome set"
status: seedling
---

# Event

A bet that a die "lands on an even number" wins on 2, 4 or 6. An **event** is that set of winning outcomes: any collection of outcomes from the [[Sample Space]] that you might ask the probability of. Pick a statement that is true for some outcomes and false for others; the event is the set of outcomes that make it true, and its probability is the [[Law of Total Probability|total probability]] of those outcomes. An event can be a single outcome or many.

Take a clutch of 4 eggs, with sample space {0, 1, 2, 3, 4} hatching. "At least one hatches" is the event {1, 2, 3, 4}; "all hatch" is {4}; "none hatch" is {0}, which is "not at least one". If each egg hatches with probability 0.6, the code below lists the probability of each outcome and finds P(at least one hatches) two ways: by adding the probabilities of 1, 2, 3 and 4, or as 1 minus P(none), giving 0.974 either way.

Events combine: "A and B" means both happen ([[Joint Probability]]), "A or B" means at least one does ([[Union of Events]]), and "not A" is everything outside A. Two special relationships between events have their own names: [[Independent Events]], where one tells you nothing about the other, and [[Disjoint Events]], which cannot both happen. Thinking in events pays off because every statistical question is the probability of an event: "the count exceeds 10", "the slope is positive", "the species is present".

```r
p <- dbinom(0:4, 4, 0.6); names(p) <- 0:4; round(p, 3)     # each egg hatches with probability 0.6
sum(p[c("1", "2", "3", "4")])                              # P(at least one hatches)
1 - p["0"]                                                 # same thing, via "not none"
```

## Connections
- **Builds on:** [[Sample Space]], [[Law of Total Probability]]
- **Leads to:** [[Union of Events]], [[Joint Probability]], [[Independent Events]], [[Disjoint Events]]
- **Part of:** [[MOC 05 - Probability and Distributions|MOC - Probability and Distributions]]

## Flashcards

What is an event?
??
A set of outcomes from the sample space to which a probability can be assigned.
++++
