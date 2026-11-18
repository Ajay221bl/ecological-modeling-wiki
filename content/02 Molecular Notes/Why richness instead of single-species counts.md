---
type: molecular
tags:
  - molecular
  - grassland-ecology
  - count-data
aliases:
  - "Richness vs single species"
status: seedling
---

# Why richness instead of single-species counts
> [!summary] In plain words
> Any one bird species is missing from most visits, so its counts are mostly zeros with a few big clumps, which are hard to model. The number of species per visit is almost never zero, behaves like a tidy count, and summarizes the whole bird community in one number. The cost is that richness hides *which* species are there, so a property could gain edge species and lose grassland specialists without richness changing. That is why the project also models a second, narrower richness: the six focal grassland species.

## The question
I could have modelled the count of one bird, such as Dickcissel. Why use the number of species per point-visit instead, and what does that choice cost?

## Built from
- [[Species Richness]]: the community-level response chosen.
- [[Count Data]]: both options are counts, but they behave very differently.
- [[Spread and Variability]]: how spread out the counts are, the heart of the modelling problem.
- [[Overdispersion]]: the problem single-species counts in this data set have.
- [[Dickcissel]]: the obvious single-species alternative.
- [[Occupancy vs Abundance vs Richness]]: the three common ways to summarize bird surveys.

## The reasoning, step by step
1. **Start with what you get at each visit.** Almost every point-visit has at least one species (range 0 to 14; a single visit, where every bird was a fly-over, has 0). A single species is absent from most visits: Dickcissel appears in 331 rows, Northern Bobwhite in 204, Loggerhead Shrike in only 8 (values from the earlier exploration), out of about 1,250 point-visits.
2. **Mostly-zero, clumped counts are awkward.** Picture 10 visits of one species: 0, 0, 0, 0, 0, 0, 0, 1, 3, 6. The average is 1.0 but the variance is 4.0, four times the average. A Poisson model expects them to be equal.
3. **That is what the real data do.** Dickcissel counts have a variance/mean ratio of about 12, so they would need a [[Negative Binomial Distribution]] and possibly a zero-inflated model. Richness has ratios of 0.56 to 0.93 within properties and is close to a simple [[Poisson Distribution]] (if anything a little *less* spread out; see [[Underdispersion]]).
4. **Richness matches the question's scale.** It summarizes the whole community in one number, which fits a property-level question, and it is something "land managers could track directly from field surveys", as my proposal put it.
5. **The cost: richness hides identity.** A point that loses one grassland specialist but gains two edge or woodland species goes *up* in richness. Fragmentation can, in principle, raise richness by adding edge species ([[Edge Effects]]), even while specialists decline ([[Grassland Bird Decline]]).
6. **That is why the original study did something else.** It focused on six declining grassland species with occupancy models ([[Berry et al. 2026]]). My richness question is simpler and complementary, not a replacement.

## So in my project
- The main response is `Richness = n_distinct(SpeciesCode)` per point-visit: the number of distinct species detected on the ground ([[group_by and summarize]]), after trimming codes with [[str_trim()]] and leaving out fly-over-only detections.
- **The cost in step 5 is partly paid back by a second response.** `FocalRichness` counts only the six declining grassland species from Berry et al. (0 to 3 per visit). It keeps the tidy "count of species" form but restores some identity.
- **And the two disagreed, just as step 5 warned.** In the Oct 13 results, all-species richness rose toward tree-grass edges (about 7% more per SD) and showed no clear tree-cover effect, while focal richness fell about 45% per SD of tree cover and rose toward cores ([[Preliminary Results]], [[Why all-species and focal-species richness can disagree]]). All-species richness alone would have hidden the specialists' response.
- In the Report, describe the main response as total richness of all detected species, not grassland-specialist richness.
- Single-species ideas are kept as extensions: a Dickcissel occupancy model is a Final Draft option after the Nov 3-5 occupancy guest lecture ([[How the project could grow into Bayesian and occupancy models]]), and "Wind → Dickcissel counts" was a backup idea ([[Alternatives Considered]]).

## What would go wrong otherwise
- A single-species Poisson model on Dickcissel would be badly overdispersed, giving falsely precise results.
- Rare species (shrike, kingbird) have too few detections to model at all.
- Interpreting richness as "grassland quality" without noting the edge-species caveat could mislead managers.

## Connections
- **Related:** [[Northern Bobwhite]], [[Why observed richness is not true richness]], [[Why check overdispersion before trusting Poisson]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]]
