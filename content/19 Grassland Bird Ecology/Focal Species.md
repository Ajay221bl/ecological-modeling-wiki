---
type: atomic
tags:
  - grassland-bird-ecology
  - species
  - flashcards
aliases:
  - "six focal species"
  - "focal birds"
  - "target species"
status: seedling
---

# Focal Species
**In one line:** The short list of species a study chooses to concentrate on because they share the need or the problem the study is about; in Berry's study, six declining grassland birds.

> [!info] Before this, it helps to know
> [[Species and Scientific Names]] (what counts as one species) · [[Grassland Bird Decline]] (why these birds were picked) · [[Species Richness]] (counting species)

## Start from zero
Stand in an Arkansas field at dawn and listen. In ten minutes you might hear fifteen kinds of birds: a cardinal in the hedge, a crow overhead, an Indigo Bunting on a power line, a meadowlark out in the grass.

If your question is "is this a good grassland?", those voices are not equally useful. The cardinal lives happily in any backyard. The meadowlark lives only where there is open grass. So researchers pick a **focal species** list: the species whose presence actually speaks to the question.

A focal species is not "more important" in general. It is the right **measuring stick** for one question.

## Why it exists
Three problems push a study toward a focal list.

1. **Signal vs noise.** Counting every species mixes birds that need grassland with birds that only tolerate it, or that sing from the hedge next door. Those generalists can swamp the signal ([[Grassland Specialists vs Generalists]]).
2. **Model assumptions.** A [[Multi-species Occupancy Model]] lets rare species borrow information from common ones ([[Partial Pooling]]). That only makes sense if the species respond to habitat in broadly similar ways, the [[Ecological Similarity Assumption]]. A list of birds that all depend on grassland comes closer to meeting it.
3. **Conservation need.** Effort goes furthest for species that are in trouble.

## A tiny example
One point, one visit, 8 species detected:

| Species | Grassland-dependent? |
|---|---|
| Northern Cardinal | no |
| Indigo Bunting | no |
| American Crow | no |
| Red-winged Blackbird | no |
| Tufted Titmouse | no |
| Field Sparrow | partly |
| Dickcissel | yes (focal) |
| Northern Bobwhite | yes (focal) |

All-species richness = 8. Focal-species richness = 2. A point beside a hedgerow could score 10 on the first and 0 on the second.

## In my project
[[Berry et al. 2026]] and the data release [[Roberts et al. 2025]] use six focal species. Counts below are point-visits (out of all 1,250, ground detections only) in my data:

| Code | Species | Point-visits | Points |
|---|---|---|---|
| DICK | [[Dickcissel]] | 331 | 164 |
| NOBO | [[Northern Bobwhite]] | 202 | 138 |
| EAME | [[Eastern Meadowlark]] | 90 | 57 |
| STFL | [[Scissor-tailed Flycatcher]] | 32 | 22 |
| EAKI | [[Eastern Kingbird]] | 9 | 8 |
| LOSH | [[Loggerhead Shrike]] | 8 | 8 |

The metadata gives two reasons for the choice. All six are grassland-dependent (citing Vickery et al. 1999), which meets the ecological similarity assumption (Devarajan, Morelli and Tenan 2020). And all six are declining across much of their range (Ziolkowski et al. 2023).

The surprise: the most often detected species in my data are **not** focal. Indigo Bunting (863 point-visits), Northern Cardinal (685), Red-winged Blackbird (501) and American Crow (481) all beat Dickcissel (331). On the 376 points used in the models (Oct 13 run), the average number of focal species per point-visit is only **0.55**, and **59%** of visits had none at all. BK is highest (**0.99**), then HO (0.58), with CR and HB lowest (0.25 each). Yet BK has the **lowest** all-species richness (4.73) and CR the **highest** (7.58). Full tables: [[Preliminary Results]]. The two kinds of richness rank the sites in nearly opposite order ([[Why all-species and focal-species richness can disagree]]).

BK's top focal score does not make BK an intact grassland. It is driven by Dickcissel (158 of BK's 288 visits) and Eastern Meadowlark (73), two species that use open grass and farm mosaics, and about 42% of the ground near BK points is soybean or rice ([[Percent Cover]]). BK is open and treeless, much of it cropland.

**Focal richness** is the secondary response (final proposal, Oct 12): the number of the six focal species detected at a point-visit, 0 to 3 in my data. The wrangling script computes it as `n_distinct(SpeciesCode[SpeciesCode %in% focalSpecies])` ([[Four-Letter Species Codes]]), and it gets the same candidate models as all-species richness ([[Analysis Plan]]). In the Oct 13 results it responded to habitat much more than to property: all three habitat-only models beat the property-only model, and it fell about 45% per SD of tree cover ([[Hypotheses]], [[Preliminary Results]]).

### What Berry's study found, species by species
The data release abstract says only that "the strength of tree-grass boundary avoidance was idiosyncratic across species" ([[Roberts et al. 2025]]). From my reading of a summary of Berry's 2024 thesis (University of Arkansas):

| Species | Response to tree-grass boundaries |
|---|---|
| [[Dickcissel]] | Strong avoidance. The strongest positive response to spatial covariance of the six, rising as values approached zero, though its model fit was reported as poor. |
| [[Scissor-tailed Flycatcher]] | Strong avoidance. |
| [[Loggerhead Shrike]] | Strong avoidance, from very few records. |
| [[Eastern Meadowlark]] | Weak: the 80% [[Credible Interval]] overlapped zero. |
| [[Eastern Kingbird]] | Weak: the 80% credible interval overlapped zero. |
| [[Northern Bobwhite]] | Avoided boundaries less than the others, likely because it uses woody-open mixes. |

A credible interval that overlaps zero means "the direction is uncertain", not "no response". Shrike and kingbird had fewer than 10 point-visits each in my data, so their estimates lean heavily on the other species ([[Multi-species Occupancy Model]], [[Partial Pooling]]).

> [!warning] Verify
> These per-species results come from a summary of the thesis, not the text. Check the thesis (a free PDF) or [[Berry et al. 2026]] before quoting them. This is the one place in the vault that lists them; other notes link here.

## Common confusions
- **"Focal = common."** Two of the six (EAKI, LOSH) turned up at fewer than 10 point-visits each.
- **"Focal = strictly open grass."** Bobwhite also uses shrubs, and kingbirds and shrikes need perches. "Grassland-dependent" is a broad label.
- **"Non-focal birds are thrown away."** They stay in my file and in my main [[Species Richness]] response. The focal list is for the habitat question.

## Connections
- **Builds on:** [[Species Richness]], [[Grassland Bird Decline]], [[Four-Letter Species Codes]]
- **Leads to:** [[Grassland Specialists vs Generalists]], [[Multi-species Occupancy Model]], [[Why all-species and focal-species richness can disagree]]
- **Part of:** [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]]
- **Go deeper:** [[Berry et al. 2026]], [[Roberts et al. 2025]]

> [!question]- Check yourself
> CR has the highest all-species richness but the lowest focal-species richness. How can both be true?
> ?
> CR points pick up many woodland, shrub and edge birds, which push the total species count up, while the grassland-dependent focal birds are scarce there. The two measures answer different questions.
