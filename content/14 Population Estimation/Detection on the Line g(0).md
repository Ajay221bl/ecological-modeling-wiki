---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "G(0) is the probability of detecting an animal exactly on the transect line or at the point, and standard distance sampling assumes it equals 1."
aliases:
  - "g(0)"
  - "g(0) = 1"
  - "Perfect detection on the line"
status: seedling
---

# Detection on the Line g(0)

**g(0)** is the probability of detecting an animal exactly on the transect line or at the point, and standard distance sampling assumes it equals 1 ([[Detection Function]], [[Distance Sampling]]). Everything else is estimated relative to g(0), so if g(0) is really 0.7, density is underestimated by 30 percent. It fails for diving whales, burrowing animals and birds in the canopy directly overhead ([[Availability for Detection]]).

Fixes are double-observer or [[Mark-Recapture|mark-recapture]] distance sampling to estimate g(0), and dive-cycle corrections for marine mammals ([[Double-observer Methods]]). Powell and Gale (Ch14) cite Johnson (2010): a survey that violates such assumptions may be no better than an index ([[Population Index]]).

It is discussed in [[Powell and Gale 2015]] Ch14 and Ch19. g(0) = 1 is not checked by the model fit: the fit cannot tell, because it is a design assumption.

## Connections
- **Builds on:** [[Detection Function]], [[Mark-Recapture]]
- **Leads to:** [[Double-observer Methods]], [[Availability for Detection|Availability and Presence Probability]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

What is g(0)?
??
The probability of detecting an animal on the line or at the point; assumed to be 1.
++++

If g(0) is really 0.8, how biased is D̂?
??
20 percent too low.
++++
