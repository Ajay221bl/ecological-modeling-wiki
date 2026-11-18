---
type: atomic
tags:
  - grassland-bird-ecology
  - habitat
  - flashcards
aliases:
  - "woody encroachment"
  - "Woody Encroachment"
  - "encroachment"
status: seedling
---

# Woody Plant Encroachment
**In one line:** Trees and shrubs slowly spreading into grassland, gradually turning open prairie into shrubland or woods.

> [!info] Before this, it helps to know
> [[Grassland Bird Decline]] (what is at stake) · [[Edge Effects]] (why trees in grass hurt nesting birds)

## Start from zero
**Woody plants** are trees and shrubs: plants with hard, woody stems that survive year after year. Grasses die back to the ground each winter.

Left alone in much of the eastern and central US, a grassy field does not stay grassy. Seeds blow or get dropped by birds, seedlings sprout, and in a couple of decades you have shrubs, then trees. Prairies stayed open historically because something kept killing those seedlings: mainly **fire**, and grazing by animals like bison.

Take fire away and the trees move in. That creeping takeover is **woody plant encroachment**.

## Why it exists
**Why it can lock in.** Once trees get big enough, they shade out grass. Less grass means less dry fuel, so fires burn weaker or not at all. Weaker fires kill fewer seedlings, so more trees grow. Each step makes the next more likely: a **self-reinforcing loop**. That is why encroachment is often described as a possible [[Regime Shifts and Spatial Early Warning Signals|regime shift]] rather than a simple gradual change. In the Great Plains a common invader is eastern redcedar, often spreading from planted windbreaks.

**Why trees in a prairie are bad news for a meadowlark.** A meadowlark nests on the ground in open grass.
- A tree gives hawks and crows a lookout perch over its nest area.
- Cowbirds, which lay eggs in other birds' nests, watch from trees to find nests.
- Woods shelter nest predators like raccoons and snakes, which then hunt into the grass.
- The open view the bird seems to need for spotting danger is broken.

So even a scattered line of trees shrinks the area grassland birds actually use, creating new [[Edge Effects]] and splitting habitat into pieces ([[Habitat Fragmentation]]). Some species tolerate or even need a little woody cover; [[Northern Bobwhite]] is the classic example.

> [!warning] Verify
> Statements about eastern redcedar as the main encroaching species and fire suppression as the main driver are well established for the Great Plains. Check how far they apply to the Arkansas properties in my data (and what Berry et al. 2026 says about woody cover there) before writing them into the Report.

## A tiny example
A made-up field over time with no fire:

| Year | Tree cover | Grass fuel | Chance a fire carries through |
|---|---|---|---|
| 0 | 5% | High | High |
| 10 | 20% | Medium | Medium |
| 20 | 50% | Low | Low |

Each row makes the next one more likely. Getting back to year 0 now needs cutting trees, not just a match.

## In my project
My bird CSV has weather (Wind, Sky) and bird detections but no tree or shrub cover. Dr. Roberts pointed out that gap and suggested adding tree cover, shrub cover or the [[Spatial Covariance]] metric as predictors, because property identity alone is a weak test of habitat ([[Proposal Feedback from Dr Roberts]], [[Why site identity is a weak test of a habitat hypothesis]]).

The habitat file in the data release fills it. It has percent woodland (WD50), forest (FO50) and scrub (SC50) cover within 50 m of each point. The wrangling script (Oct 13) builds tree cover `Tree50 = WD50 + FO50` and scrub cover `Scrub50 = SC50`, standardized, as per-point [[Predictor Variable|predictors]] alongside [[Spatial Covariance]] ([[Percent Cover]], [[Field vs Remote Vegetation Measures]], [[Analysis Plan]]). Across the 414 points with values, the median for each is 0% but the means are about 18 to 19% for woodland and forest and about 7% for scrub: most points are open, a minority are quite woody. CR is the most wooded property (woodland 40% plus forest 10% near its points).

H2 expected more tree cover to raise all-species richness (forest and edge birds join in) but lower focal grassland richness, as in [[Berry et al. 2026]] ([[Hypotheses]]). The Oct 13 results ([[Preliminary Results]]): focal richness was about **45% lower** per SD of tree cover (rate ratio 0.55, 95% CI 0.48 to 0.63), the strongest habitat effect in the project. All-species richness showed **no** tree effect (1.00), so that half of the prediction was not supported. For why trees spread in the first place, see [[Why trees take over grasslands without fire]] and [[Ecological Succession]].

## Common confusions
- **"Trees are always good for wildlife."** Good for forest birds; bad for grassland specialists.
- **"Encroachment just reverses if fire returns."** Past a point, there is too little fuel; it may need active removal.
- **"All grassland birds avoid trees equally."** Bobwhite use some shrubs; meadowlarks avoid them.

## Connections
- **Builds on:** [[Grassland Bird Decline]], [[Habitat Fragmentation]]
- **Leads to:** [[Grassland Core Habitat]], [[Spatial Covariance]], [[Regime Shifts and Spatial Early Warning Signals]]
- **Part of:** [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]]
- **Go deeper:** [[Brennan and Kuvlesky 2005]], [[Berry et al. 2026]]

> [!question]- Check yourself
> Why is woody encroachment often self-reinforcing?
> ?
> Trees shade out grass, which removes the fuel that carries fire. Less fire means more seedlings survive, so more trees, so even less fire. The system can lock into a woody state.
