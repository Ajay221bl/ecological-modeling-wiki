---
type: project
tags:
  - project
  - grassland-bird-richness
  - data-exploration
aliases:
  - "Exploratory findings"
status: seedling
---

# EDA Findings

> [!summary] In plain words
> Before fitting any model I looked at the numbers. A typical visit found about 6 species (anywhere from 1 to 14), BK had the fewest and CR the most, and the counts are no more spread out than a Poisson count model expects. The habitat file then showed that all-species richness is higher near tree-grass edges, while the six focal grassland species do better where spatial covariance is near zero. One trap: BK looks "open" by that measure mostly because much of it is cropland, not intact grassland.

Exploratory data analysis (EDA) means looking at the data with tables and plots before modelling ([[Data Exploration]], [[Why explore data before modeling]]). It is like walking a field before setting up an experiment: you spot the rocks before you trip on them.

## Bird data (re-checked Oct 12, 2026: codes trimmed, fly-overs excluded)
Computed in Python by Claude (R is not available in Claude's environment), copying what the wrangling script does plus [[str_trim()]]. These use the old `FlyOver == 0` rule on all 416 points. The final scripts (ground-detection rule, 376 complete-case points) were run in RStudio on Oct 13 and shifted them slightly: on the 376 points richness ranges 0 to 14 (mean 5.96) and BK still has the fewest species, CR the most. The model-ready numbers are in [[Preliminary Results]].

- 7,742 rows, **89 species**, 416 points, **1,250 point-visits** (the Sep 10 script dropped the 2 fly-over-only visits, giving 1,248; the final script keeps them as 0). Each point has 3 visits except 2 points with 4.
- Richness per point-visit ranges 1 to 14, mean about 6.0 ([[Average (Mean)]]).
- **By property:** mean richness from 4.73 (BK) to 7.84 (CR); variance/mean from 0.56 to 0.94 on all 416 points, and **0.56 to 0.93 on the 376 model points** (Oct 13 run). The per-property table lives in [[Study Sites]]. (The Oct 12 figures, BK 4.53 and a ratio range of 0.55 to 1.08, came from the old `FlyOver == 0` filter; superseded Oct 13.)

**How to read "variance/mean".** The variance measures how spread out the numbers are around their average ([[Variance]], [[Spread and Variability]]). A Poisson count has a built-in rule: its variance equals its mean, so variance divided by mean should be about 1 ([[Poisson Distribution]], [[Mean-Variance Relationship]]). Tiny example: visits with 5, 7 and 6 species have mean 6 and (sample) variance 1, so var/mean = 1/6 ≈ 0.17, much less spread than Poisson expects.

- **Variance/mean 0.56 to 0.94 (416 points), 0.56 to 0.93 (376 points)**: Poisson looks reasonable. Most properties sit a bit below 1, mild **underdispersion**. The worrying case would be well above 1, **overdispersion** ([[Underdispersion]], [[Overdispersion]], [[Why check overdispersion before trusting Poisson]]). These raw ratios are a first look; the proper check is on the fitted model. That check (Oct 13) found the fitted models underdispersed, with dispersion ratios 0.66 and 0.60 ([[Preliminary Results]]).
- **Wind and Sky are constant within each visit**, so `first()` per visit is safe.
- **Weather levels:** Wind 0 on 871 visits, 1 on 278, 2 on 93, 3 on only 8 (27 rows). Sky 5 on only 1 visit (4 rows). Rare levels give the model very little to learn from.
- **Fly-overs:** 207 rows (2.7%); **90 rows** have both ground and fly-over counts ([[Why exclude fly-overs]]).
- **Missing values:** Dist_50 has 1, FlyOver has 5.
- **Property is fully confounded with year**, and survey dates and crews differ by property ([[Study Sites]], [[Why site and year cannot be separated]]).
- **Focal species:** Dickcissel counts are strongly overdispersed (variance/mean about 12), one reason the project models richness rather than one species ([[Why richness instead of single-species counts]]).

## Habitat data (Oct 12, from the revised-proposal work)
From the habitat file ([[Dataset]]):
- **All-species richness is higher near edges:** Spearman correlation -0.41 with 27x27 (65.61 ha) spatial covariance. More negative covariance means a tree-grass boundary nearby ([[Why negative spatial covariance marks a tree-grass boundary]], [[Edge Effects]]).
- **Focal richness is higher where spatial covariance is near zero:** Spearman +0.26 with 3x3 (0.81 ha) covariance.
- **The three covariance scales are correlated** (Spearman 0.47 to 0.76), so each goes in its own model ([[Collinearity]]).
- **Missing habitat values:** spatial covariance NA at 39 flood-masked points; field vegetation missing at 112 to 224 points, mostly roadside. Complete cases: 376 points, 1,130 visits ([[Complete-Case Analysis]]).

These are raw correlations, before accounting for weather, property or repeat visits, so they suggest patterns rather than test them ([[Correlation vs Causation]]). The models (Oct 13) kept both signs after those adjustments ([[Preliminary Results]]). The two opposite signs match the idea in [[Why all-species and focal-species richness can disagree]].

### Land cover by property (mean % within 50 m of the points; top classes)
| Property | Top classes |
|---|---|
| BK Bald Knob NWR | soybean 23, rice 19, grass mix 17, cool grass 15, woodland 8 |
| CR Camp Robinson SUA | woodland 40, scrub 17, old field 15, native grass 14, forest 10 |
| DC Dark Corner (Cache River NWR) | woodland 22, forest 21, grass mix 13, native grass 13, old field 9 |
| HB Holla Bend NWR | forest 50, soybean 12, corn 10, native grass 10, grass mix 6 |
| HO Howell (Cache River NWR) | woodland 30, grass mix 18, scrub 13, cool grass 11, soybean 10 |

([[Percent Cover]], [[Land-Use Change and Agriculture]])

> [!warning] BK is open, not necessarily grassland core
> BK's median 3x3 spatial covariance is 0.0, but its points are largely cropland (soybean and rice about 42%) plus grass. Near-zero covariance means "no tree-grass boundary nearby", and a treeless soybean field also scores about 0. So near zero is *consistent with* a [[Grassland Core Habitat|grassland core]] but does not prove one. Describe BK as "open and treeless (much of it cropland)".
>
> BK's high focal richness (0.98 focal species per visit) is driven by [[Dickcissel]] (158 visits) and [[Eastern Meadowlark]] (73 visits), species that use open grass and farm mosaics.

**CR fits the edge story:** it is the most wooded property (woodland 40 + forest 10), has the most negative spatial covariance of the five (median -41.0) and the highest all-species richness.

## Earlier values (superseded)
> [!warning] Superseded
> From a chat before the Oct 12 re-check: computed **before** trimming codes and **with** fly-overs included. Kept only for the record; do not use in the Report.
> - Mean richness by property: BK 4.8, CR 7.9, DC 6.6, HB 6.7, HO 5.7; overall mean about 6.1; variance/mean 0.55-0.97.
> - Means dropped slightly after the fix because trimming merges duplicate codes and removing fly-overs removes transient species. The ranking did not change (BK lowest, CR highest).

## A small R detail (fixed Oct 13)
The old script removed fly-over rows before counting, so the 2 fly-over-only visits (one BK, one HO) disappeared rather than becoming 0, giving 1,248 visits. The final wrangling script lists every visit first and then joins richness onto it, so a fly-over-only visit is kept as 0: all 1,250 visits stay, and HO55 on Jun 20, 2022 is in the 376-point set with richness 0. See [[R Scripts Walkthrough]] and [[Decision Log]].

**Part of:** [[MOC 23 - Grassland Bird Richness Project|MOC - Grassland Bird Richness Project]]
