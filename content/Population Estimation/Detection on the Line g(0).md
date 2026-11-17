---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "g(0)"
  - "g(0) = 1"
  - "Perfect detection on the line"
status: seedling
---

# Detection on the Line g(0)

**In one line:** g(0) is the probability of detecting an animal exactly on the transect line or at the point, and standard distance sampling assumes it equals 1.

> [!info] Before this, it helps to know
> [[Detection Function]]

## Start from zero
1. **Everything else is estimated relative to g(0).** If g(0) is really 0.7, density is underestimated by 30 percent.
2. **Fails for** diving whales, burrowing animals, birds in canopy directly overhead.
3. **Fixes:** double-observer or mark-recapture distance sampling to estimate g(0); dive-cycle corrections.
4. **Powell and Gale (Ch14)** cite Johnson (2010): a survey that violates such assumptions may be no better than an index.

## In the course
[[Powell and Gale 2015]] Ch14 and Ch19.

## Common confusions
- **"g(0) = 1 is checked by the model fit."** The fit cannot tell; it is a design assumption.

## Explain it back
- What happens to D̂ if g(0) = 0.8?

*Pass test:* you can explain why g(0) = 1 matters and how to relax it.

## Connections
- **Builds on:** [[Detection Function]]
- **Leads to:** [[Double-observer Methods]], [[Availability for Detection|Availability and Presence Probability]]
- **Part of:** [[MOC - Population Estimation]]

## Flashcards

What is g(0)?
??
The probability of detecting an animal on the line or at the point; assumed to be 1.
++++

If g(0) is really 0.8, how biased is D̂?
??
20 percent too low.
++++
