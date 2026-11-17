---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "The closure assumption says the true state you are estimating (which sites are occupied, or how many animals are present) does not change during the repeated surveys."
aliases:
  - "Closure"
  - "Population closure"
  - "Closed to changes in occupancy"
  - "Geographic closure"
  - "Demographic closure"
status: seedling
---

# Closure Assumption

Taking a class register several times in one lesson, the absences tell you about the register-taker's attention only if no student walks in or out between calls. The **closure assumption** says the true state you are estimating, which sites are occupied or how many animals are present, does not change during the repeated surveys ([[Occupancy]], [[Abundance]], [[Latent Variable]]). It matters because repeat surveys estimate detection only if a 0 after a 1 means "missed", not "left".

Occupancy closure is at the species level: one leopard leaving is fine if another still uses the site (Powell and Gale Ch15). Mark-recapture and N-mixture closure is at the individual level, with no births, deaths, immigration or emigration (ΔN = 0), which is stricter ([[Closed Population]], [[N-mixture Model]]). Random movement in and out keeps ψ unbiased but changes its meaning to "proportion of sites used", and p then includes the chance of being present ([[Availability for Detection]]). Non-random shifts, such as seasonal habitat changes, bias ψ, so restrict surveys to a period before the shift.

"Short" is relative: a month may be too long for mice but fine for elephants (Powell and Gale Ch7) ([[Powell and Gale 2015]] Ch7, Ch8 and Ch15, [[Open Population]]). Closure does not mean animals never move; occupancy closure only needs each site's species status to stay the same.

## Connections
- **Builds on:** [[Occupancy]], [[Abundance]]
- **Leads to:** [[Single-season Occupancy]], [[Closed Population]], [[Robust Design]], [[Temporary Emigration]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Open vs Closed Populations]]

## Flashcards

What does the closure assumption require in occupancy models?
??
Each site's occupancy status does not change during the season's repeat surveys.
++++

What happens to ψ if animals move in and out at random?
??
It stays unbiased but means "proportion of sites used", not "occupied".
++++
