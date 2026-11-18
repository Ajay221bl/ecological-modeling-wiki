---
type: molecular
tags:
  - molecular
  - grassland-ecology
  - inference
  - flashcards/eco/why
aliases:
  - "Site vs habitat"
  - "Why habitat covariates"
status: seedling
---

# Why site identity is a weak test of a habitat hypothesis
> [!summary] In plain words
> A habitat idea says the birds respond to the habitat around them. But in the model, "Site" is just a name tag, and each property differs in many ways at once (habitat, year, dates, observers). Finding that properties differ shows *that* they differ, not *why*. A habitat variable measured at each point tests the habitat idea directly, which is what Dr. Roberts suggested and what the final proposal (Oct 12) does.

## The question
My Sep 10 proposal said less fragmented properties should have higher richness, and planned to test it with Site alone. If the model shows that properties differ, does that support a habitat explanation? Dr. Roberts' feedback suggested it is not enough on its own. Why?

## Built from
- [[Hypothesis]]: what a habitat claim says and what would count as a test.
- [[Habitat Fragmentation]]: the mechanism the Sep 10 hypothesis was about.
- [[Reference Level|Categorical Predictor and Reference Level]]: Site enters the model as a label with 5 levels, not as a measurement of habitat.
- [[Confounding]] and [[Correlation vs Causation]]: everything else that differs between properties rides along with the label.
- [[Spatial Covariance]] and [[Grassland Core Habitat]]: the kind of habitat measurement that would test the mechanism directly.
- [[Candidate Model Set]]: where a Site model and a Habitat model can compete.

## The reasoning, step by step
1. **A habitat hypothesis is a cause-and-effect story.** Fragmentation (more edges, less core grassland, trees and shrubs creeping in, see [[Woody Encroachment|Woody Plant Encroachment]]) lowers richness.
2. **Site is only a name.** In the model, Site is BK, CR, DC, HB or HO. A Site effect says "these places differ" but not why.
3. **Each property differs in many ways at once.** Amount of grassland, tree cover, surrounding landscape, management, the year it was surveyed, the dates, and who counted. My data add a sharp example: Site is completely tied to year (BK, DC, HO in 2022 only; CR, HB in 2023 only), see [[Why site and year cannot be separated]].
4. **Five properties is very few data points.** For "fragmentation level" I effectively have 5 values. Rank 5 properties by richness and by fragmentation: by chance alone, the two rankings match exactly 1 time in 120 (5 x 4 x 3 x 2 x 1 possible orders), and come *close* to matching much more often than that. So a neat match is weak evidence.
5. **A habitat measurement is much stronger.** A covariate measured at each point (tree cover, scrub cover, or the spatial covariance metric from [[Berry et al. 2026]]) varies across hundreds of points, inside and between properties. Inside one property, year and crew are the same for every point, so a habitat effect there cannot be a year or crew effect in disguise. It names the mechanism, so a relationship between it and richness is a much more direct test.
6. **Dr. Roberts said this on the proposal.** His comment, attached to the sentence about weather making birds harder to "detect regardless of habitat quality", reads: "True, but I suggest you leverage some of the habitat data too. Would be useful for your stated hypothesis: if the site is more predictive than the habitat, then your hypothesis is supported." His point is to put Site and Habitat side by side as competing models and let model selection ([[AIC]]) show which explains richness better.
7. **His own example shows the style.** His example project models bird richness with a measured habitat variable (`BirdRichness ~ Severity + ShrubCoverMean` in PineRidgeFireLegacies).

## So in my project
- The bird CSV alone has no habitat variables, but the data release's habitat file does: spatial covariance at three window sizes, percent cover within 50 m, and coordinates, one row per point ([[Dataset]]).
- The final proposal (Oct 12) turns Dr. Roberts' logic into competing hypotheses: **H1** property identity (model M1) versus **H2** local habitat (models M2a-c), with M3 combining both, all ranked by AIC ([[Hypotheses]], [[Analysis Plan]]). If M1 wins, property matters beyond the habitat measured; if a habitat model wins and property adds little, the property differences mostly reflect habitat.
- One caution carries over: a habitat measure can mislead too. BK's near-zero spatial covariance reflects open cropland as much as grassland, so "near zero" is not proof of a grassland core ([[EDA Findings]]).
- The habitat models were added to the scripts and run on Oct 13 (until then the scripts fit the Site-only Sep 10 set). The result: property plus habitat (M3) beat either alone for both responses, and habitat effects showed up *within* properties, e.g. focal richness about 45% lower per SD of tree cover. A Site-only model could never have shown that ([[Preliminary Results]]).

## What would go wrong otherwise
- Writing "richness differs among properties, therefore fragmentation reduces richness" would be an overreach: year, observers, dates or any other site-level difference could produce the same pattern.
- A reviewer could fairly say the hypothesis was never tested, only restated.
- Without within-property habitat variation, the property-year confounding would leave no way to separate habitat from survey year ([[Why site and year cannot be separated]]).
- The project would miss the most interesting link to the original study, which used remotely sensed spatial covariance ([[Berry et al. 2026]]).

## Connections
- **Related:** [[Why Site is fixed not random]], [[Proposal Feedback from Dr Roberts]], [[Edge Effects]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]]

## Flashcards

Why does a significant Site effect not show that habitat matters?::Site is a name tag bundling habitat, year, dates and observers, so it shows that properties differ, not why.

What tests the habitat idea more directly?::Habitat variables measured at each point, such as tree cover, scrub cover and spatial covariance.
