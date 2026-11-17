---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "Incomplete detection"
  - "Imperfect detectability"
  - "Detection error"
  - "False absence"
  - "False negative (ecology)"
status: seedling
---

# Imperfect Detection

**In one line:** imperfect detection means a survey can miss animals or species that are really there, so what you record is smaller than what exists.

> [!info] Before this, it helps to know
> [[Count Data]] · [[Latent Variable]] · [[Observation Error]]

## The everyday picture
Looking for your keys in a messy room. Not finding them does not prove they are not there. How hard you looked, and how good you are at spotting keys, decides how much "not found" should convince you.

## Start from zero
1. **The count C is almost never the true number N.** Powell and Gale (2015 Ch14) write this as C ≠ N, with C ≤ N when there are no false positives.
2. **A zero is ambiguous:** absent, or present and missed (a false negative).
3. **Detection varies.** Thick habitat, bad weather, shy animals and tired observers lower it, so raw counts can mislead even as a relative measure.
4. **The fix is a second source of information about detection:** repeat visits, marks, two observers, distances or removals. Each method in this folder is one such source.
5. **Guélat and Kéry (2018)** simulated abundance data and found that ignoring imperfect detection (with a Poisson GLM) badly damaged abundance maps, especially when combined with spatial autocorrelation.

## See it
mermaid:
flowchart LR
  N["True state N (or present / absent)"] -->|"detection p < 1"| C["What you record C"]
  C -.->|"needs extra info: repeats, marks, distances"| N
*What to look at:* the dashed arrow is the hard part; every estimation method is a way of drawing it.

## Why it is this way
If detection is lower in dense forest than in open grassland, raw counts will say the forest has fewer animals even when it has more. Habitat conclusions then reflect where animals are easy to see, not where they live.

## In the course
Population estimation guest lectures ([[Course Website]]). [[Powell and Gale 2015]] Ch14 and Ch15. [[Guélat and Kéry 2018]].

## Common confusions
- **"A careful observer has no detection problem."** Even perfect observers miss animals that are underground, silent or behind a bush.

## Explain it back
- Why is a survey zero ambiguous?

*Pass test:* you can explain why a count underestimates the true number and why that matters for comparisons.

## Connections
- **Builds on:** [[Count Data]], [[Latent Variable]], [[Observation Error]]
- **Leads to:** [[Detection Probability]], [[Occupancy]], [[N-mixture Model]], [[Mark-Recapture]], [[Distance Sampling]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Why raw counts mislead]], [[Naive vs Estimated Occupancy]]

## Flashcards

What is imperfect detection?
??
A survey can miss animals or species that are present, so records undercount reality.
++++

What two things can a survey zero mean?
??
The species or animal is absent, or it is present but was missed.
++++
