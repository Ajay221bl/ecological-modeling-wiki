---
type: project
tags:
  - project
  - grassland-bird-richness
  - hypotheses
aliases:
  - "H1"
  - "H2"
  - "H3"
  - "My hypotheses"
status: seedling
---

# Hypotheses

> [!summary] In plain words
> The final proposal (Oct 12) sets two explanations against each other. H1: richness depends on *which property* a point is on, for reasons beyond the habitat I measured. H2: richness depends on the *habitat right around the point*, and properties differ only because their habitat differs. H3 is the housekeeping guess that visits to the same point are alike, so every model gives each point its own baseline. Model comparison with AIC decides between H1 and H2. **First results (Oct 13):** the model with both property and habitat won for both responses, so H1 and H2 each get support; H3 holds for focal species only ([[Preliminary Results]]).

A **hypothesis** is a clear, testable guess about how the world works, stated before you look at the answer ([[Hypothesis]]). Each hypothesis below becomes one or more models that I compare ([[Candidate Model Set]]). The models themselves (formulas, predictors, data) live in [[Analysis Plan]]; this note says what each hypothesis claims and which result would support it.

## Final proposal (Oct 12, 2026)
**Research question:** Is the number of bird species detected per point-count visit better explained by the habitat around each survey point or by which of five Arkansas properties the point is on, after accounting for repeated visits to the same point and for weather?

"Property" means the same thing as "site": the `Site` column, with five values ([[Study Sites]]).

### H1, property identity
Richness differs among properties for reasons beyond the habitat measured at each point, for example management history or the size of the grassland block.

*In plain words:* knowing the property tells you something that the local habitat numbers do not. **Support:** M1 (Property) has lower AIC than the habitat models, and adding habitat to M1 helps little.

**Outcome (Oct 13): supported, but not alone.** Adding property to the best habitat model lowered AIC a lot for both responses, and for all species M1 beat every habitat-only model. Habitat also helped, though (see H2), and a property effect may partly be a year, date or crew effect ([[Preliminary Results]]).

### H2, local habitat
Richness depends on the habitat around each point, and property differences mostly reflect habitat differences. **Support:** a habitat model (M2a, M2b or M2c) beats M1, and Property adds little once habitat is in. I expect two different patterns depending on which species are counted:
- **All species:** higher at tree-grass edges (more negative [[Spatial Covariance]]) and with more tree cover, because edges add woodland birds to the grassland list ([[Edge Effects]]).
- **Focal grassland species:** higher in cores (spatial covariance near zero or slightly positive) and lower with more tree cover, as [[Berry et al. 2026]] found for the six declining species ([[Grassland Core Habitat]], [[Focal Species]]).

Why the two can point in opposite directions: [[Why all-species and focal-species richness can disagree]].

**Outcome (Oct 13): supported, with one miss.** Adding habitat to property lowered AIC for both responses, and for focal species all three habitat-only models beat M1. The signs match the two predictions: all species rise toward edges (about 7% per SD of more negative covariance at 65.61 ha), and focal species fall with tree cover (about 45% fewer per SD) and rise toward cores (about 17% per SD at 0.81 ha). The miss: the all-species tree-cover effect was predicted positive but is about zero (rate ratio 1.00) ([[Preliminary Results]]).

> [!warning] Verify: what counts as a "core"
> The data release metadata says spatial covariance "at or near 0" can indicate a core; the paper's abstract says "near-zero or slightly positive"; Berry's thesis describes cores as positive. The vault uses "near zero or slightly positive" until this is settled ([[Open Questions]]).

### H3, repeated visits
Visits to the same point are more alike than visits to different points, because the point's location and habitat do not change between visits. Treating them as independent would be [[Pseudoreplication]] ([[Hurlbert 1984]]). **Expectation:** the variance of the [[Random Intercept]] for point is clearly greater than zero. The random intercept is in every model ([[Bolker et al. 2009]]), so H3 is built in rather than ranked by AIC ([[Why a random intercept for point]]).

**Outcome (Oct 13): half supported.** For focal species the point variance is 0.20 (SD 0.45), clearly above zero. For all species it is 0, a singular fit: once property, habitat and weather were in, visits to the same point were no more alike than visits to different points ([[Variance Components|Variance Component]], [[Preliminary Results]]). The random intercept stays in every model as designed.

### How the hypotheses map onto the models
All models include Wind, Sky and the random intercept for point. Full formulas: [[Analysis Plan]].

| Model | Adds | Hypothesis | Reading if it ranks top |
|---|---|---|---|
| M0 Null | nothing | weather and point only | neither property nor habitat helps |
| M1 Property | Property | H1 | supports H1 |
| M2a / M2b / M2c | spatial covariance (0.81, 7.29 or 65.61 ha) + tree cover + scrub cover | H2 | supports H2; the winning window hints at the scale that matters ([[Why the window size is a choice of scale]]) |
| M3 | Property + the best habitat model | H1 and H2 together | both contribute (the Oct 13 result for both responses) |

"Ranks top" means lowest [[AIC]]; models within 2 AIC units count as similarly supported ([[Anderson and Burnham 2002]]). The same set is fitted to focal grassland richness, so H2's two predicted patterns can be checked separately.

This is also how Dr. Roberts' comment, "if the site is more predictive than the habitat, then your hypothesis is supported", now reads: that outcome supports H1 ([[Proposal Feedback from Dr Roberts]]).

### Cautions when reading the results
- **Property is confounded with year, dates and crew,** so an M1 win cannot say which of those is the reason ([[Why site and year cannot be separated]]). Habitat varies *within* properties, where year and crew are constant, which is why the habitat comparison is informative ([[Why site identity is a weak test of a habitat hypothesis]]).
- **Near-zero spatial covariance is not proof of grassland.** A treeless soybean field also scores about 0. BK points are largely cropland, so BK's near-zero values mean "open and treeless (much of it cropland)", not "intact grassland core" ([[EDA Findings]]).
- **Observed richness is not true richness:** missed birds are not counted ([[Why observed richness is not true richness]]).

## Sep 10 proposal version (superseded Oct 12)
> [!note] Kept for the record
> These were the hypotheses in the submitted proposal. They were replaced by the final proposal above. **Numbering changed:** the old H2 (repeated visits) is now H3. A note that says "H2" meaning repeated visits is using Sep 10 numbering.
>
> **H1 (Sep 10):** Species richness per point-visit differs by property; properties with more open, less fragmented grassland should have more species per visit ([[Habitat Fragmentation]]).
>
> **H2 (Sep 10):** After accounting for repeated visits with a random intercept for point, real differences between properties should still appear.
>
> Old model mapping: H1 was tested by Site, Additive and Global (`Site * Wind`) against Weather and Null; H2 was built into all five models through `(1|PtNum)`. The R scripts implemented those five models until Oct 12; they were replaced in the code on Oct 13 ([[R Scripts Walkthrough]]).

**What the final version fixed:** the Sep 10 H1 bundled a pattern ("properties differ", testable) with a mechanism ("because of fragmentation", not testable with Site alone). The final version tests the mechanism directly with measured habitat, as Dr. Roberts suggested ([[Correlation vs Causation]]). Decisions: [[Decision Log]].

**Part of:** [[MOC 23 - Grassland Bird Richness Project|MOC - Grassland Bird Richness Project]]
