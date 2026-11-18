---
type: atomic
tags:
  - grassland-bird-ecology
  - species
  - flashcards
aliases:
  - "EAKI"
  - "Tyrannus tyrannus"
  - "kingbird"
  - "Eastern Kingbirds"
status: seedling
---

# Eastern Kingbird
**In one line:** A black-and-white flycatcher with a white band at the tip of its tail (*Tyrannus tyrannus*, code EAKI) that hunts insects from perches in open country and fearlessly chases away much bigger birds.

> [!info] Before this, it helps to know
> [[Scissor-tailed Flycatcher]] (its close relative) · [[Focal Species]] (why it is one of the six)

## Start from zero
Watch a crow fly over a field in June. Suddenly a small dark bird shoots up from a fence post, dives at the crow's back, and chases it far across the field. That small bird is very often an Eastern Kingbird.

Its scientific name, *Tyrannus tyrannus*, means "tyrant tyrant". The name fits. Kingbirds attack hawks, crows and herons that come near their nest, sometimes landing on the bigger bird's back. Males also have a hidden patch of red-orange crown feathers they rarely show.

Like the scissortail, it is a **flycatcher**: it watches from a perch and sallies out to catch flying insects. It favours open land with scattered trees, fence lines, field edges and the shores of rivers and ponds.

It is a long-distance migrant. It breeds across much of North America and winters in South America, where it switches to eating mostly fruit.

## Why it exists (why it matters here)
**A grassland bird that likes edges.** Of the six [[Focal Species]], the kingbird is the most comfortable near trees. It needs perches and often nests in a tree at the edge of a field. So we might expect it to avoid tree-grass boundaries **less** than a meadowlark does, or not at all.

**The trouble with rare species.** In my data it is one of the two rarest focal species. With so few records, any estimate about it is uncertain. That uncertainty is a feature of the data, not proof that the bird does not care about habitat.

> [!warning] Verify
> The thesis summary reports that Eastern Kingbird responded **weakly** to tree-grass boundaries, with an 80% [[Credible Interval]] overlapping zero (all six compared in [[Focal Species]]). Treat this as approximate until checked in [[Berry et al. 2026]]. Behaviour, range and diet details here are from general knowledge; check a species account before citing them.

## A tiny example
What does "the interval overlaps zero" mean? Suppose a model estimates how a species' chance of being present changes as boundaries get stronger. Negative means "avoids boundaries".

| Species | Best guess | 80% credible interval | Overlaps zero? |
|---|---|---|---|
| A, many detections | -1.2 | -1.6 to -0.8 | no |
| B, 9 detections | -0.4 | -1.5 to +0.7 | yes |

Species B's best guess is still negative. But the plausible range includes zero and even positive values. The honest reading is "we cannot tell the direction", not "it does not respond". Fewer detections give a wider interval ([[Credible Interval]], [[Imperfect Detection]]).

## In my project
Eastern Kingbird was found at only 9 point-visits (out of all 1,250, ground detections only) at 8 points, with 10 birds counted. By site: CR 6, DC 2, HO 1. None at BK or HB.

That pattern is interesting. CR has the most negative median 3x3 [[Spatial Covariance]] (-41.0), meaning many tree-grass boundaries, and the fewest focal species overall. Yet two-thirds of the kingbird visits came from there. That fits a bird that tolerates edges. But 6 visits is far too few to lean on, and CR was also counted earliest in the season (May 16 to 22, 2023), when migrants may still be settling ([[Breeding Season Timing]]). Site, date and habitat are all tangled ([[Confounding]]).

## Common confusions
- **"Kingbird is a kind of bird of prey."** It is a songbird (a tyrant flycatcher); the "tyrant" is its temper, not its diet.
- **"Weak result = no effect."** With 9 detections, the data cannot tell the direction.
- **"Edge-tolerant means not a grassland bird."** It still hunts over open land; it just accepts trees nearby.

## Connections
- **Builds on:** [[Focal Species]], [[Scissor-tailed Flycatcher]], [[Four-Letter Species Codes]]
- **Leads to:** [[Credible Interval]], [[Multi-species Occupancy Model]], [[Edge Effects]]
- **Part of:** [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]]
- **Go deeper:** [[Berry et al. 2026]], [[Roberts et al. 2025]]

> [!question]- Check yourself
> The kingbird's boundary effect has an 80% credible interval that overlaps zero. Does that mean kingbirds ignore tree-grass boundaries?
> ?
> No. It means the data cannot pin down the direction. With only 9 detections, the plausible range is wide enough to include avoiding, ignoring and even preferring boundaries.
