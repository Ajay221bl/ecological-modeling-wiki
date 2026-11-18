---
type: atomic
tags:
  - survey-design
  - detection
  - hierarchical-models
  - flashcards
aliases:
  - "MSOM"
  - "MSOMs"
  - "multispecies occupancy model"
  - "community occupancy model"
  - "multi-species occupancy models"
status: seedling
---

# Multi-species Occupancy Model
**In one line:** An occupancy model fitted to several species at once, where each species gets its own estimates but those estimates are tied together by a shared "community" pattern, so rare species can borrow information from common ones.

> [!info] Before this, it helps to know
> [[Occupancy Model]] (one species, presence versus detection) · [[Partial Pooling]] (borrowing strength across groups) · [[Hierarchical Model]]

## Start from zero
An [[Occupancy Model]] asks, for one species: how likely is it really present at a point (ψ, "psi"), and how likely are we to notice it when it is (p)?

That works well for a common bird. Dickcissels were detected on 331 point-visits in my data, plenty to estimate both chances. Loggerhead Shrikes were detected on only **8**. Eight detections cannot pin down two probabilities plus a habitat effect. A one-species model for the shrike would give wild, uncertain answers.

Here is the trick. The shrike is not a stranger. It lives in the same open country as the Dickcissel, the meadowlark and the kingbird. If most of those species avoid tree lines, that is useful information about the shrike too.

A **multi-species occupancy model (MSOM)** fits all the species together. Each species gets its own ψ, p and habitat slope. But the model also learns a **community average** and how much species vary around it. Each species' estimate is then a blend of its own data and the community pattern ([[Partial Pooling]]).

## Why it exists
It solves the rare-species problem. Grassland birds of most concern are often the rarest, and rarity means few detections.
- A species with lots of data mostly follows its own data.
- A species with little data is pulled toward the community average, which keeps its estimate sensible.

It also answers community questions directly: "does the grassland bird community, as a whole, avoid tree-grass boundaries?" is a question about the community-level slope.

The price is an assumption: species must be similar enough that a shared average makes sense ([[Ecological Similarity Assumption]]).

## A tiny example
Made-up habitat slopes (negative = avoids boundaries) from separate one-species fits:

| Species | Detections | Own estimate | After pooling (roughly) |
|---|---|---|---|
| DICK | 331 | -1.0 | -1.0 |
| NOBO | 202 | -0.4 | -0.4 |
| EAME | 90 | -0.8 | -0.8 |
| LOSH | 8 | +2.5 (very uncertain) | about -0.5 |

The community average of the well-measured species is about -0.7. The shrike's wild +2.5, based on 8 detections, is pulled most of the way toward it. The common species barely move. (Real models do this weighting automatically, based on how uncertain each species' own estimate is.)

## In my project
Berry and colleagues used **Bayesian** multi-species occupancy models for six declining grassland species: [[Northern Bobwhite]], [[Dickcissel]], [[Eastern Meadowlark]], [[Scissor-tailed Flycatcher]], [[Eastern Kingbird]] and [[Loggerhead Shrike]] ([[Berry et al. 2026]], [[Roberts et al. 2025]]).
- Data: whether each focal species was seen or heard **within 100 m** during a three-minute count, on each of **3 visits** per point.
- Habitat predictor on ψ: [[Spatial Covariance]] at three window sizes.
- The data release abstract reports that the community avoided tree-grass boundaries at all scales and that the smallest window (0.81 ha) explained occupancy best.

- How strongly each species avoided boundaries differed; the per-species list (approximate, to verify) is in [[Focal Species]].

Detections per species in my data (point-visits, ground only): DICK 331, NOBO 202, EAME 90, STFL 32, EAKI 9, LOSH 8. The last three are exactly why pooling was needed.

My own project models richness with a Poisson [[GLMM]], not occupancy. A single-species occupancy model for Dickcissel is one Final Draft option; an MSOM like Berry's is listed only as a stretch and is probably too much for this semester ([[Next Steps]], [[How the project could grow into Bayesian and occupancy models]]).

## Common confusions
- **"It is just six occupancy models run together."** Separate models share nothing; an MSOM links them through the community level.
- **"Pooling makes rare species look like common ones."** It pulls them only as far as their own data are weak.
- **"MSOMs estimate richness from counts."** They work on detection histories (1s and 0s), and richness can be derived from them as a by-product.

## Connections
- **Builds on:** [[Occupancy Model]], [[Partial Pooling]], [[Hierarchical Model]], [[Imperfect Detection]]
- **Leads to:** [[Ecological Similarity Assumption]], [[Focal Species]], [[Credible Interval]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]], [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]
- **Go deeper:** [[Berry et al. 2026]]

> [!question]- Check yourself
> Why would a separate occupancy model for Loggerhead Shrike, with 8 detections, be a problem, and how does an MSOM help?
> ?
> Eight detections are too few to estimate occupancy, detection and a habitat effect reliably, so the estimates would be extreme and uncertain. An MSOM pulls the shrike's estimates toward the community pattern from the other grassland species, more strongly the weaker its own data.
