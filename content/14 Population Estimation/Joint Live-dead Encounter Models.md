---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "Joint live-dead encounter models combine live recaptures in the study area with dead recoveries from anywhere, which lets them separate true survival from permanent emigration (site fidelity)."
aliases:
  - "Burnham model"
  - "Barker model"
  - "Live and dead encounters"
  - "Joint live and dead recovery models"
  - "Fidelity F"
status: seedling
---

# Joint Live-dead Encounter Models

**Joint live-dead encounter models** combine live recaptures in the study area with dead recoveries from anywhere, which lets them separate true survival from permanent emigration, or site fidelity ([[Cormack-Jolly-Seber Model]], [[Dead Recovery Models]], [[Apparent Survival]]). Live recaptures inform φ = S × F, and dead recoveries inform S alone, so together they estimate S, F, p and the recovery probability r.

Burnham (1993) introduced the model, and Barker's extension adds resightings between occasions. It needs both kinds of data in useful numbers ([[Encounter Probability]], [[Program MARK]]).

It is covered in [[Powell and Gale 2015]] Ch11 and Ch12. Adding recoveries does not just increase [[Sample Size|sample size]]: it changes what is estimable, S and F separately.

## Connections
- **Builds on:** [[Cormack-Jolly-Seber Model]], [[Dead Recovery Models]], [[Sample Size]]
- **Leads to:** [[Multi-state Models]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[True vs Apparent Survival]]

## Flashcards

What do joint live-dead models separate that CJS cannot?
??
True survival S and site fidelity F.
++++
