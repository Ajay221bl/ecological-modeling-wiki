---
type: atomic
tags:
  - ecology-basics
  - flashcards
aliases:
  - "biological diversity"
  - "species diversity"
  - "evenness"
status: seedling
---

# Biodiversity
**In one line:** Biodiversity is the variety of life, counted at several levels: genes within a species, species within a place, and kinds of ecosystems across a region.

> [!info] Before this, it helps to know
> [[Species and Scientific Names]] (what counts as a different species) · [[Ecological Community]] (biodiversity is mostly measured on communities)

## Start from zero
Picture two gardens: one long row of identical tomato plants, and a plot with tomatoes, beans, sunflowers, bees, ladybugs and a wren in the fence. The second is clearly more **diverse**. Biodiversity puts that feeling into numbers.

It works at three levels:
- **Genetic diversity:** variety within one species (not all Dickcissels are genetically the same).
- **Species diversity:** how many species, and how evenly they are represented.
- **Ecosystem diversity:** how many different kinds of ecosystem a region contains (grassland, forest, wetland).

Species diversity itself has two parts:
- **Richness:** the number of species ([[Species Richness]]).
- **Evenness:** whether those species are about equally common, or one dominates.

## Why it exists
Biodiversity is the main thing conservation tries to protect, so we need ways to measure it. But "more" is not automatically "better", which is the main lesson for my project. A place can gain species while losing the ones that matter most. Measuring diversity carefully means asking *which* species and *where*.

Ecologists also separate diversity by spatial scale:
- **Alpha diversity:** diversity at one spot (one survey point).
- **Beta diversity:** how different the spots are from each other.
- **Gamma diversity:** the total across the whole region.

## A tiny example
Two fields, each with 4 species and 100 birds:

| Species | Field A | Field B |
|---|---|---|
| Dickcissel | 25 | 97 |
| Meadowlark | 25 | 1 |
| Bobwhite | 25 | 1 |
| Field Sparrow | 25 | 1 |

**Richness is the same (4).** But Field A is perfectly **even**, and Field B is dominated by one species. Most people, and most diversity indices, would call Field A more diverse. Richness alone cannot see the difference.

## In my project
- My response is **richness at a point-visit**: alpha diversity, counted as the number of species detected. It ignores evenness and ignores which species they are.
- **Edges raise richness.** Where grassland meets woods, both grassland and woodland birds can be detected at one point. In my exploratory analysis, all-species richness was higher near edges (Spearman correlation -0.41 with spatial covariance at the largest window). The minus sign means richness went up as covariance got more negative, and negative covariance marks a tree-grass boundary ([[Edge Effects]], [[EDA Findings]]).
- **But the focal grassland species go the other way.** Focal-species richness was higher where spatial covariance was near zero (+0.26 at the smallest window). On the 376 model points, Camp Robinson has the highest all-species richness (7.58 per visit) and among the fewest focal species (0.25); Bald Knob has the lowest all-species richness (4.73) and the most focal species (0.99). See [[Why all-species and focal-species richness can disagree]].
- So a higher richness number could mean a *more degraded* grassland, if the extra species are woodland and edge generalists ([[Grassland Specialists vs Generalists]]).

The conservation concern behind the study is a loss of birds, not just of species: North American bird populations have fallen steeply since 1970, and grassland birds more than most ([[Rosenberg et al. 2019]], [[Grassland Bird Decline]]).

> [!warning] Verify
> Commonly quoted figures from Rosenberg et al. (2019) are roughly 3 billion birds lost since 1970 and grassland birds down by about 53%. Check the exact numbers in the paper before quoting them.

## Common confusions
- **"Biodiversity = species richness."** Richness is one piece. Evenness, composition, genetic and ecosystem diversity also count.
- **"More species = better habitat."** Not for a target group. Adding edge birds can raise richness while grassland specialists disappear.
- **"Local and regional diversity move together."** Making every site a little bit of everything raises alpha diversity but can lower gamma diversity if specialists vanish everywhere.
- **Observed vs true.** Species detected undercount species present ([[Why observed richness is not true richness]]).

## Connections
- **Builds on:** [[Species and Scientific Names]], [[Ecological Community]]
- **Leads to:** [[Species Richness]], [[Why all-species and focal-species richness can disagree]], [[Focal Species]], [[Grassland Bird Decline]]
- **Part of:** [[MOC 19 - Ecology Vocabulary|MOC - Ecology from Zero]]
- **Go deeper:** [[Rosenberg et al. 2019]] (the scale of North American bird loss)

> [!question]- Check yourself
> Camp Robinson has the highest all-species richness but the fewest focal grassland species. How can both be true?
> ?
> Richness counts every species equally. If a site has many woodland and edge birds, its richness is high even when the grassland specialists are scarce. High richness is not the same as good grassland habitat.
