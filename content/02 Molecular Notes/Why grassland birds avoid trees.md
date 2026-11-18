---
type: molecular
tags:
  - molecular
  - grassland-ecology
  - behaviour
aliases:
  - "Tree avoidance by grassland birds"
  - "Boundary avoidance"
status: seedling
---

# Why grassland birds avoid trees
> [!summary] In plain words
> Grassland birds nest on or near the ground in open country, where their main defence is seeing danger early and being hard to find. Trees break that: they give hawks, crows and cowbirds lookout posts, shelter nest predators, and block the view. Over many generations, birds that settled away from trees raised more young, so today's grassland birds tend to avoid tree lines. The strength varies: bobwhite like some shrubby cover, while Dickcissels and shrikes avoid forest edges strongly.

## The question
The data release reports that the grassland bird community avoided tree-grass boundaries. A tree is just a plant. Why should a bird in a field care about one 100 m away?

## Built from
- [[Habitat Selection]]: birds choose where to settle using cues from the landscape.
- [[Edge Effects]]: what changes near a boundary.
- [[Grassland Specialists vs Generalists]]: why some species avoid edges and others seek them.
- [[Area Sensitivity]]: why some species need large open patches, not just some grass.
- [[Focal Species]]: the six birds the response was measured on.
- [[Woody Plant Encroachment]]: where the trees come from.

## The reasoning, step by step
1. **Grassland birds nest low.** Meadowlarks and bobwhite nest on the ground; Dickcissels nest in grass and low shrubs. A nest in the grass cannot be defended by size or strength, only by being hidden and by adults spotting danger early.
2. **Trees are lookouts for enemies.** Hawks, crows and Brown-headed Cowbirds (which lay eggs in other birds' nests) watch from trees to find nests and prey.
3. **Woods shelter nest predators.** Raccoons, opossums and snakes live in wooded strips and hunt out into the field. Nest losses tend to be higher near edges ([[Edge Effects]]).
4. **Natural selection turns risk into preference.** Picture two made-up groups of 100 pairs. Pairs nesting near trees fledge young in 30 of 100 nests; pairs far from trees in 50 of 100. Over many generations, the habit of settling away from trees spreads, because more of the young come from those pairs ([[Habitat Selection]]).
5. **The avoidance becomes a rule of thumb.** Birds may avoid trees even where predators happen to be scarce, because the cue (a tree line) usually signals the risk.
6. **But "trees" means different things.** A lone shrub or fence post is a useful perch for a shrike, kingbird or Scissor-tailed Flycatcher hunting insects. A **forest wall** is a different thing: a boundary full of predators that cuts the open view. Spatial covariance picks up the wall, not the lone shrub ([[Why negative spatial covariance marks a tree-grass boundary]]).
7. **Species differ.** [[Northern Bobwhite]] need shrubby cover to hide coveys from hawks and weather, so they use woody-open mixes. Kingbirds often nest in trees. So a community-wide avoidance is an average with real variation around it ([[Ecological Similarity Assumption]]).

## So in my project
- The data release abstract: the community "avoided tree-grass boundaries (negative spatial covariance)" at all scales, and "The strength of tree-grass boundary avoidance was idiosyncratic across species" ([[Roberts et al. 2025]], [[Berry et al. 2026]]).
- Species differed: by a summary of Berry's 2024 thesis, some avoided boundaries strongly and bobwhite least. The species-by-species list, with its Verify caution, lives in [[Focal Species]].
- My EDA agrees in direction: focal-species richness is higher where spatial covariance is near zero (Spearman +0.26 with the 3x3 value), while all-species richness rises near edges ([[Why all-species and focal-species richness can disagree]]).
- The final proposal (Oct 12) turned this into a prediction (H2): focal richness lower with more tree cover and higher where spatial covariance is near zero or slightly positive ([[Hypotheses]]). The Oct 13 models support it: focal richness was about **45% lower per SD of tree cover within 50 m** (rate ratio 0.55), while all-species richness showed **no** tree effect (1.00). Trees push out the grassland specialists, and other species take their place, so the total barely moves ([[Preliminary Results]]).
- Caution on small numbers: Loggerhead Shrike was detected on only 8 point-visits and Eastern Kingbird on 9 in my data, so their individual responses rest on very little information ([[Multi-species Occupancy Model]]).

## What would go wrong otherwise
- Assuming all birds like trees ("more trees, more habitat") would mean planting or tolerating trees that drive out the declining grassland species ([[Grassland Bird Decline]]).
- Assuming all grassland birds avoid trees equally would mismanage bobwhite, which need some shrub cover.
- Ignoring the mechanism (predation, perches, view) would leave the pattern unexplained and make it harder to predict which management helps ([[Defend the Core]]).

## Connections
- **Related:** [[Why trees take over grasslands without fire]], [[Grassland Core Habitat]], [[Habitat Fragmentation]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]]
