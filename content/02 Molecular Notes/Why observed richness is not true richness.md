---
type: molecular
tags:
  - molecular
  - detection
  - survey-design
aliases:
  - "Observed vs true richness"
  - "apparent richness"
status: seedling
---

# Why observed richness is not true richness
> [!summary] In plain words
> In a few minutes at a point, some birds that are there will stay silent or hidden, so the observer records fewer species than are present. That is fine for comparisons only if the "missing rate" is the same everywhere. If weather, observers or season differ between properties, part of any difference in counts is a difference in *finding* birds, not in birds being there.

## The question
My response is "the number of species detected". Why is that not the same as the number of species actually present, and does it matter for comparing properties?

## Built from
- [[Imperfect Detection]]: species present can be missed.
- [[Probability]] and [[Detection Probability]]: the chance a present species is recorded.
- [[Detection Covariates]]: measured things (wind, sky) that change that chance.
- [[Observer Effects]]: people differ in skill at hearing and identifying birds.
- [[Occupancy Model]]: the model family built to separate presence from detection.

## The reasoning, step by step
1. **Start in the field.** During a few minutes at a point, a bird can be present but silent, hidden in grass, or drowned out by wind. Hobbs and Hooten use a lizard example: "some lizards that are present inevitably escape detection" ([[Hobbs and Hooten 2015 Ch6]], p. 129).
2. **So the count is filtered.** Observed richness = true richness passed through a detection filter. Each present species has some chance, below 1, of being recorded.
3. **A tiny example.** Two points each truly hold 10 species. If each species has an 80% chance of being detected, you expect to record about 8 at each. If one point's species have only a 60% chance (windy morning, newer observer), you expect about 6. Same birds, a 2-species gap.
4. **Equal filters are harmless for comparisons.** If detection were 80% everywhere, observed richness would be a fair, if low, index, and differences between properties would still mean something.
5. **Unequal filters are the danger.** Weather, observer, time of season and vegetation density can all differ by property. Then part of a "site difference" is a detection difference.
6. **There is a formal way to say this.** Hierarchical models write a separate observation model (how data relate to the true state) and process model (how the true state relates to ecology) ([[Hobbs and Hooten 2015 Ch1]], p. 10).
7. **Repeat visits are the key to measuring detection.** If a species is heard on visit 1 but not visit 2 at the same point, within a season when it did not leave, it was missed on visit 2. Patterns like that let a model estimate detection ([[Repeat-Visit Design]]), which is what occupancy models do.

## So in my project
- I partly handle detection by including Wind and Sky ([[Why include wind and sky]]). The Oct 13 results show the filter is real: all-species richness was about 11% lower per one-step rise in wind (rate ratio 0.89; [[Preliminary Results]]). Wind is unlikely to change which species live at a point from one morning to the next, so that drop is mostly birds being missed, not birds being absent.
- Observers are not in the model, and they differ a lot by site (for example, HB's visits were done by 2 observer codes, DC's by 6), as noted in the Oct 12 re-check. Survey dates also differ (CR was surveyed May 16-22, 2023; the 2022 sites in June and early July).
- In writing, call the response "observed species richness per point-visit" or "number of species detected", and state in Methods that richness is not corrected for detection.
- A detection-corrected approach (a Dickcissel occupancy model) is a Final Draft option: [[How the project could grow into Bayesian and occupancy models]].

## What would go wrong otherwise
- Claiming "CR has more species than BK" when the honest claim is "more species were detected at CR".
- Missing a detection explanation: a property surveyed by more experienced observers, or at a more vocal time of season, would look richer.
- A reviewer familiar with the original study, which used occupancy models to correct for detection ([[Berry et al. 2026]]), would flag the gap.

## Connections
- **Related:** [[Point Count Survey]], [[Species Richness]], [[Why site and year cannot be separated]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]]
