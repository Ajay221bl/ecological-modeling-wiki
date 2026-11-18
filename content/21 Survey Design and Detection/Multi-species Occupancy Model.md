---
type: atomic
tags:
  - survey-design
  - detection
  - hierarchical-models
  - flashcards/eco/survey
description: "A multi-species occupancy model fits an occupancy model to several species at once, giving each its own estimates but tying them together through a shared community pattern so rare species can borrow information from common ones."
aliases:
  - "MSOM"
  - "MSOMs"
  - "multispecies occupancy model"
  - "community occupancy model"
  - "multi-species occupancy models"
  - "Multi-species Occupancy"
  - "Two-species occupancy"
  - "Single-season multi-species occupancy"
  - "occuMulti()"
  - "Co-occurrence model"
status: seedling
---

# Multi-species Occupancy Model

An [[Occupancy Model]] asks, for one species, two things: how likely it is really present at a point (ψ, "psi", the [[Occupancy]] probability) and how likely we are to notice it when it is (p, the [[Detection Probability]]). That works for a common bird: Dickcissels were detected on 331 point-visits in the grassland bird data, plenty to estimate both. [[Loggerhead Shrike|Loggerhead Shrikes]] were detected on only 8, which cannot pin down two probabilities plus a habitat effect, so a one-species shrike model would give wild, uncertain answers. But the shrike is not a stranger: it lives in the same open country as the Dickcissel, [[Eastern Meadowlark|meadowlark]] and [[Eastern Kingbird|kingbird]], and if most of them avoid tree lines that tells us something about the shrike too. A **multi-species occupancy model** (MSOM) fits all the species together. Each species gets its own ψ, p and habitat slope, but the model also learns a community average and how much species vary around it, and each species' estimate becomes a blend of its own data and the community pattern. That blending is [[Partial Pooling]], and a model with this two-level structure is a [[Hierarchical Model]].

It solves the rare-species problem, which matters because the birds of most concern are often the rarest. Take made-up habitat slopes (negative means avoids boundaries) from separate one-species fits: DICK, 331 detections, −1.0; [[Northern Bobwhite|NOBO]], 202, −0.4; EAME, 90, −0.8; LOSH, 8, +2.5 with huge uncertainty. The community average of the well-measured species is about −0.7. After pooling the common species barely move, while the shrike's wild +2.5 is pulled most of the way, to about −0.5. Real models do this weighting automatically, by how uncertain each species' own estimate is. An MSOM also answers community questions directly: "does the grassland [[Ecological Community|bird community]] as a whole avoid tree-grass boundaries?" is a question about the community-level slope. The price is an assumption, that species are similar enough for a shared average to make sense ([[Ecological Similarity Assumption]]).

Three confusions: it is not just six occupancy models run together, since separate models share nothing; pooling does not make rare species look like common ones, it pulls them only as far as their own data are weak; and MSOMs work on [[Detection History|detection histories]] (1s and 0s from [[Repeat-Visit Design|repeat visits]]; [[Imperfect Detection]]), not counts, though [[Species Richness|richness]] can be derived as a by-product. Berry and colleagues used Bayesian MSOMs for the six [[Focal Species]] ([[Berry et al. 2026]], [[Roberts et al. 2025]]): detection or not within 100 m during three-minute counts on each of 3 visits per point, with [[Spatial Covariance]] at three window sizes as the habitat [[Predictor Variable|predictor]] on ψ. The abstract reports that the community avoided tree-grass boundaries at all scales and that the smallest window (0.81 ha) explained occupancy best, with per-species responses summarized as [[Credible Interval|credible intervals]] in Focal Species. Detections in the project data (point-visits, ground only) were DICK 331, NOBO 202, EAME 90, [[Scissor-tailed Flycatcher|STFL]] 32, EAKI 9 and LOSH 8: the last three are why pooling was needed. The project itself models richness with a Poisson [[GLMM]], not occupancy; an MSOM is listed only as a stretch goal ([[Next Steps]], [[How the project could grow into Bayesian and occupancy models]]).

## Connections
- **Builds on:** [[Occupancy Model]], [[Occupancy]], [[Detection Probability]], [[Partial Pooling]], [[Hierarchical Model]], [[Loggerhead Shrike]], [[Eastern Meadowlark]], [[Eastern Kingbird]], [[Northern Bobwhite]], [[Ecological Community]], [[Detection History]], [[Repeat-Visit Design]], [[Species Richness]], [[Predictor Variable]], [[Scissor-tailed Flycatcher]]
- **Leads to:** [[Ecological Similarity Assumption]], [[Imperfect Detection]], [[Focal Species]], [[Spatial Covariance]], [[Credible Interval]], [[GLMM]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]], [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]
- **Go deeper:** [[Next Steps]], [[How the project could grow into Bayesian and occupancy models]], [[Berry et al. 2026]], [[Roberts et al. 2025]]

## Flashcards

Why would a separate occupancy model for Loggerhead Shrike, with 8 detections, be a problem, and how does an MSOM help?
??
Eight detections are too few to estimate occupancy, detection and a habitat effect reliably, so the estimates would be extreme and uncertain. An MSOM pulls the shrike's estimates toward the community pattern from the other grassland species, more strongly the weaker its own data.
++++

In an MSOM, which species' estimates move most toward the community average?::Those with the least data (the most uncertain own estimates).
