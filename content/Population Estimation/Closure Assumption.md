---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "Closure"
  - "Population closure"
  - "Closed to changes in occupancy"
  - "Geographic closure"
  - "Demographic closure"
status: seedling
---

# Closure Assumption

**In one line:** the closure assumption says the true state you are estimating (which sites are occupied, or how many animals are present) does not change during the repeated surveys.

> [!info] Before this, it helps to know
> [[Occupancy]] · [[Abundance]] · [[Latent Variable]]

## The everyday picture
Taking a class register several times in one lesson. Absences only tell you about the register-taker's attention if no student walks in or out between calls.

## Start from zero
1. **Why it matters:** repeat surveys estimate detection only if a 0 after a 1 means "missed", not "left".
2. **Occupancy closure is at the species level.** One leopard leaving is fine if another still uses the site (Powell and Gale Ch15).
3. **Mark-recapture and N-mixture closure is at the individual level:** no births, deaths, immigration or emigration (ΔN = 0), which is stricter.
4. **Random movement in and out** keeps ψ unbiased but changes its meaning to "proportion of sites used", and p then includes the chance of being present.
5. **Non-random shifts** (seasonal habitat changes) bias ψ; restrict surveys to a period before the shift.
6. **"Short" is relative:** a month may be too long for mice but fine for elephants (Powell and Gale Ch7).

## In the course
[[Powell and Gale 2015]] Ch7, Ch8 and Ch15.

## Common confusions
- **"Closure means animals never move."** Occupancy closure only needs the species status of each site to stay the same.

## Explain it back
- How does random movement change the meaning of ψ?

*Pass test:* you can judge whether closure holds and what happens if it fails.

## Connections
- **Builds on:** [[Occupancy]], [[Abundance]]
- **Leads to:** [[Single-season Occupancy]], [[Closed Population]], [[Robust Design]], [[Temporary Emigration]]
- **Part of:** [[MOC - Population Estimation]], molecular note [[Open vs Closed Populations]]

## Flashcards

What does the closure assumption require in occupancy models?
??
Each site's occupancy status does not change during the season's repeat surveys.
++++

What happens to ψ if animals move in and out at random?
??
It stays unbiased but means "proportion of sites used", not "occupied".
++++
