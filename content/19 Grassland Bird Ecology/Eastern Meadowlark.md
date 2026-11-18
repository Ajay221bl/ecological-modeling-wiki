---
type: atomic
tags:
  - grassland-bird-ecology
  - species
  - flashcards
aliases:
  - "EAME"
  - "Sturnella magna"
  - "meadowlark"
  - "meadowlarks"
  - "Eastern Meadowlarks"
status: seedling
---

# Eastern Meadowlark
**In one line:** A chunky, yellow-breasted bird (*Sturnella magna*, code EAME) that walks through open grass, nests on the ground and sings a clear, sweet whistle from fence posts; a true grassland specialist.

> [!info] Before this, it helps to know
> [[Grassland Specialists vs Generalists]] (why it is a "strict" grassland bird) · [[Focal Species]] (why it is one of the six)

## Start from zero
Drive past a pasture in spring and look at the fence posts. A bird the size of a robin sits on one, bright yellow underneath with a black "V" across its chest. It throws back its head and whistles a slurred "see-you, see-yeeer". That is an Eastern Meadowlark.

Despite the name it is not a lark. It belongs to the blackbird and oriole family. It spends most of its time **walking** on the ground, probing for insects and seeds.

The female builds her nest in a small dip on the ground, often weaving a **roof** of grass over it, so it is nearly invisible. That is why meadowlarks need fairly tall, dense grass, and lots of it.

They avoid trees. A meadowlark field is open from edge to edge, with fence posts or a lone shrub as song perches.

## Why it exists (why it matters here)
**A textbook grassland specialist.** If any focal species should avoid tree-grass boundaries, it is this one. That makes it a test case for whether [[Spatial Covariance]] tracks the grassland birds it is meant to track ([[Why grassland birds avoid trees]]).

**A declining bird.** Meadowlarks are still widespread, but [[Breeding Bird Survey]] trends have been downward for decades as pastures and hayfields were ploughed, built on or allowed to grow into woods ([[Grassland Bird Decline]]).

**Ground nests are vulnerable.** [[Mowing]] during the nesting season can destroy nests, so the timing of management matters ([[Breeding Season Timing]]).

> [!warning] Verify
> The thesis summary reports that Eastern Meadowlark responded **weakly** to tree-grass boundaries, with an 80% [[Credible Interval]] overlapping zero (all six compared in [[Focal Species]]). Treat this as approximate until checked in [[Berry et al. 2026]]. Also check exact BBS trend figures before quoting any.

## A tiny example
Where were meadowlarks found? Almost every point was visited 3 times, so a site's number of point-visits is about 3 times its number of points.

| Site | Points | Point-visits | Visits with EAME | Share |
|---|---|---|---|---|
| BK | 96 | 288 | 73 | 73 / 288 = 25% |
| DC | 93 | 280 | 9 | 3% |
| HB | 84 | 252 | 6 | 2% |
| HO | 96 | 289 | 2 | under 1% |
| CR | 47 | 141 | 0 | 0% |

One site holds 73 of the 90 meadowlark visits (81%). That is a strong signal, but it is about **one place**, not yet about habitat.

## In my project
Eastern Meadowlark was found at 90 point-visits (out of all 1,250, ground detections only) at 57 points, with 113 birds counted. Almost all came from BK. None came from CR.

That fits the site summaries. BK has the median 3x3 spatial covariance closest to zero (0.0), the highest focal-species rate (0.99 per point-visit on the 376 model points) and the **lowest** all-species richness (4.73). CR has the most negative median spatial covariance (-41.0), the lowest focal rate and the highest all-species richness. Meadowlarks (with Dickcissels) are part of why those rankings flip.

But BK's near-zero covariance means "open and treeless", not "intact grassland". The habitat file shows that about 42% of the ground within 50 m of BK points is soybean or rice, with grass mixes making up much of the rest ([[Percent Cover]]). Meadowlarks use open grass and farm mosaics, so BK suits them without being a grassland core. BK also differs from the other sites in year (2022) and crew ([[Study Sites]]). With most detections at one site, it is hard to tell "meadowlarks like open ground" from "meadowlarks like BK" ([[Why site identity is a weak test of a habitat hypothesis]], [[Confounding]]). The per-point habitat predictors (tree cover, scrub cover, spatial covariance) are meant to separate the two, and the Oct 13 models include them. Even after them, all four other properties have fewer focal species than BK (rate ratios 0.43 to 0.76; [[Preliminary Results]]). So BK's lead is not explained by trees and spatial covariance alone; cropland, year or crew could still be part of it.

## Common confusions
- **"It is a lark."** It is in the blackbird family (Icteridae).
- **"Seen at BK, so BK is good grassland."** Meadowlarks also use pastures, hayfields and crop margins, and much of BK is cropland. Presence is not proof of high-quality grassland.
- **"Weak boundary response means it does not care about trees."** With most detections at one site, the model has little contrast to work with. Weak can mean "not enough information".

## Connections
- **Builds on:** [[Focal Species]], [[Grassland Specialists vs Generalists]], [[Four-Letter Species Codes]]
- **Leads to:** [[Why grassland birds avoid trees]], [[Area Sensitivity]], [[Mowing]]
- **Part of:** [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]]
- **Go deeper:** [[Berry et al. 2026]], [[Roberts et al. 2025]]

> [!question]- Check yourself
> 73 of the 90 meadowlark visits were at BK. Why is that not enough to conclude meadowlarks prefer open grassland?
> ?
> Because site and habitat are tangled together: BK differs from the other sites in many ways (year, land use, management). Only a habitat measure taken at each point can show that meadowlarks follow open grass rather than just one property.
