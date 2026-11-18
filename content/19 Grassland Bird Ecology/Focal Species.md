---
type: atomic
tags:
  - grassland-bird-ecology
  - species
  - flashcards/eco/grassland
description: "Focal species are the short list of species a study concentrates on because they share the need or problem the study is about; in Berry's study, six declining grassland birds."
aliases:
  - "six focal species"
  - "focal birds"
  - "target species"
status: seedling
---

# Focal Species

Stand in an Arkansas field at dawn and in ten minutes you might hear fifteen kinds of birds: a cardinal in the hedge, a crow overhead, an Indigo Bunting on a power line, a meadowlark out in the grass. If your question is "is this a good grassland?", those voices are not equally useful. The cardinal lives happily in any backyard; the meadowlark lives only where there is open grass. So researchers pick a **focal species** list: the [[Species and Scientific Names|species]] whose presence actually speaks to the question. A focal species is not "more important" in general; it is the right measuring stick for one question.

Three problems push a study toward such a list. The first is signal versus noise: counting every species mixes birds that need grassland with birds that only tolerate it, and those [[Habitat Generalist|generalists]] can swamp the signal ([[Grassland Specialists vs Generalists]]). Take one point and one visit with 8 species detected: Northern Cardinal, Indigo Bunting, American Crow, Red-winged Blackbird, Tufted Titmouse, Field Sparrow (partly grassland), [[Dickcissel]] and [[Northern Bobwhite]]. All-species [[Species Richness]], the number of species, is 8; focal-species richness is 2. A point beside a hedgerow could score 10 on the first and 0 on the second. The second problem is model assumptions: a [[Multi-species Occupancy Model]] lets rare species borrow information from common ones ([[Partial Pooling]]), which only makes sense if they respond to habitat in broadly similar ways, the [[Ecological Similarity Assumption]], and a list of birds that all depend on grassland comes closer to meeting it. The third is conservation need, since effort goes furthest for species in trouble ([[Grassland Bird Decline]]).

[[Berry et al. 2026]] and the data release ([[Roberts et al. 2025]]) use six focal species, chosen because all are grassland-dependent and all are declining across much of their range; their [[Four-Letter Species Codes|codes]] and point-visit counts in the project data are in the table below. The surprise is that the most often detected species are not focal: Indigo Bunting (863 point-visits), Northern Cardinal (685), Red-winged Blackbird (501) and American Crow (481) all beat Dickcissel (331). On the 376 modelled points the average number of focal species per point-visit is only 0.55, and 59% of visits had none. BK is highest (0.99), then HO (0.58), with CR and HB lowest (0.25 each); yet BK has the lowest all-species richness (4.73) and CR the highest (7.58), so the two measures rank sites in nearly opposite order ([[Why all-species and focal-species richness can disagree]]). BK's lead is driven by Dickcissel and [[Eastern Meadowlark]], which use open grass and farm mosaics, and about 42% of the ground near BK points is cropland ([[Percent Cover]]). *Focal richness*, the number of the six detected at a point-visit (0 to 3 in the data), is the project's secondary response; in the Oct 13 results it responded to habitat much more than to property, falling about 45% per [[Standard Deviation|standard deviation]] of tree cover ([[Hypotheses]], [[Preliminary Results]]). Three confusions: focal does not mean common (two of the six had fewer than 10 point-visits); it does not mean strictly open grass (bobwhite uses shrubs, kingbirds and shrikes need perches); and non-focal birds are not thrown away, they stay in the main richness response. The per-species boundary results below come from a summary of Berry's 2024 thesis, not the paper, and a [[Credible Interval]] that overlaps zero means "direction uncertain", not "no response"; check them before quoting. This is the one place in the wiki that lists them.

| Code | Species | Point-visits (points) | Response to tree-grass boundaries (thesis summary) |
|---|---|---|---|
| DICK | [[Dickcissel]] | 331 (164) | Strong avoidance; model fit reported as poor |
| NOBO | [[Northern Bobwhite]] | 202 (138) | Avoided boundaries least; uses woody-open mixes |
| EAME | [[Eastern Meadowlark]] | 90 (57) | Weak: 80% interval overlapped zero |
| STFL | [[Scissor-tailed Flycatcher]] | 32 (22) | Strong avoidance |
| EAKI | [[Eastern Kingbird]] | 9 (8) | Weak: 80% interval overlapped zero |
| LOSH | [[Loggerhead Shrike]] | 8 (8) | Strong avoidance, from very few records |

## Connections
- **Builds on:** [[Species and Scientific Names]], [[Species Richness]], [[Grassland Bird Decline]], [[Four-Letter Species Codes]], [[Habitat Generalist]], [[Standard Deviation]]
- **Leads to:** [[Multi-species Occupancy Model]], [[Partial Pooling]], [[Ecological Similarity Assumption]], [[Credible Interval]], [[Dickcissel]], [[Northern Bobwhite]], [[Eastern Meadowlark]], [[Scissor-tailed Flycatcher]], [[Eastern Kingbird]], [[Loggerhead Shrike]]
- **Part of:** [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]]
- **Go deeper:** [[Grassland Specialists vs Generalists]], [[Why all-species and focal-species richness can disagree]], [[Percent Cover]], [[Hypotheses]], [[Preliminary Results]], [[Berry et al. 2026]], [[Roberts et al. 2025]]

## Flashcards

What is a focal species?::A species a study concentrates on because its presence speaks directly to the study's question.

CR has the highest all-species richness but the lowest focal-species richness. How can both be true?
??
CR points pick up many woodland, shrub and edge birds, which push the total species count up, while the grassland-dependent focal birds are scarce there. The two measures answer different questions.
++++

Why does a multi-species occupancy model want focal species that are ecologically similar?
??
It lets rare species borrow information from common ones, which only makes sense if they respond to habitat in broadly similar ways.
++++
