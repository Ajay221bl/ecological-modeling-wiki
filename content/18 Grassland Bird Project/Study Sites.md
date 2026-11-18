---
type: project
tags:
  - project
  - grassland-bird-richness
  - study-sites
aliases:
  - "Sites"
  - "Properties"
  - "BK CR DC HB HO"
status: seedling
---

# Study Sites

> [!summary] In plain words
> The birds were counted at five grassland properties in north-central Arkansas: Bald Knob NWR (BK), Camp Robinson SUA (CR), the Dark Corner (DC) and Howell (HO) tracts of Cache River NWR, and Holla Bend NWR (HB). BK has the fewest species per visit (about 4.5) and CR the most (about 7.8). But the sites also differ in year, season and survey crew, so this ranking does not yet tell me that habitat is the cause.

> [!success] Site names confirmed (Oct 12, 2026)
> The USGS data release metadata ([[Roberts et al. 2025]]) defines every code, and the published paper uses the same five sites ([[Berry et al. 2026]]). **CR is Camp Robinson, not Cache River.** The earlier version of this note said the mapping was unconfirmed; that question is now answered (see [[Decision Log]]).

## Which code is which
NWR means National Wildlife Refuge, land run by the U.S. Fish and Wildlife Service mainly for wildlife. SUA means Special Use Area, here a state wildlife area on Camp Robinson, a military training site.

| Code | Property | Roadside points (of all points) |
|---|---|---|
| BK | Bald Knob NWR | 67 of 96 |
| CR | Camp Robinson Special Use Area | 0 of 47 |
| DC | Dark Corner tract, Cache River NWR | 52 of 93 |
| HB | Holla Bend NWR | 75 of 84 |
| HO | Howell tract, Cache River NWR | 44 of 96 |

Roadside counts come from the habitat file in the data release ([[Roadside Surveys]]). DC and HO are two separate pieces ("tracts") of the same refuge, so they are two sites in the data but share one refuge's management.

The sites lie in two [[Ecoregions]]: the [[Mississippi Alluvial Valley]] (flat, flood-prone river bottomland) and the [[Arkansas River Valley]] (between the Ozark and Ouachita Mountains). Each is patchy remnant grassland set in a forested or farmed surrounding area ([[Patch, Matrix and Corridor]]).

> [!warning] Verify
> Which ecoregion each site falls in, and the per-site management below, come from my reading of Berry's 2024 thesis, not the metadata. Check the thesis Study Area section before writing it into the Report.
> - Holla Bend: minimal management.
> - Cache River tracts (DC, HO): last burned in 2019; frequently disked and mowed.
> - Bald Knob: largely row-crop agriculture, often flooded for waterfowl.
> - Camp Robinson: burned frequently.
>
> The metadata itself says only that all sites have had grassland restoration including [[Mowing]], burning ([[Prescribed Fire]]) and [[Disking]], in varying amounts.

## What the codes are
Each code is the letter prefix of `PtNum` (e.g. BK1001 → BK). `GrasslandBirdRichness_Wrangling.R` extracts it with:
```r
  mutate(Site = str_extract(PtNum, "^[A-Za-z]+"))
```
In words: "make a new column called Site, filled with the letters at the start of PtNum." (`^[A-Za-z]+` is a text pattern meaning "one or more letters at the very start".) See [[R Scripts Walkthrough]] for every line.

In the models Site is a **fixed effect** with BK as the **reference level**. A fixed effect is something whose effect the model estimates directly, one number per site ([[Fixed Effect]], [[Why Site is fixed not random]]). The reference level is the baseline: the model reports CR, DC, HB and HO each as "how different from BK" ([[Reference Level|Categorical Predictor and Reference Level]]). BK is the baseline only because it comes first alphabetically, not because it is special.

## Per-site summary (re-checked Oct 13: codes trimmed, ground-detection filter)
"Mean richness" is the average number of species per visit ([[Mean|Average (Mean)]]). "Var/mean" divides the variance (a measure of how spread out the numbers are, see [[Variance]] and [[Spread and Variability]]) by the mean. For a Poisson count this ratio should be about 1 ([[Mean-Variance Relationship]]).

| Site | Year surveyed | Survey dates | Points | Point-visits | Mean richness | Var/mean | Observer codes |
|---|---|---|---|---|---|---|---|
| BK | 2022 | Jun 24 - Jul 12 | 96 | 288 | 4.73 | 0.94 | 3 |
| CR | 2023 | May 16 - May 22 | 47 | 141 | 7.84 | 0.66 | 4 |
| DC | 2022 | Jun 7 - Jul 12 | 93 | 280 | 6.54 | 0.75 | 6 |
| HB | 2023 | Jun 1 - Jun 9 | 84 | 252 | 6.62 | 0.56 | 2 |
| HO | 2022 | Jun 6 - Jul 12 | 96 | 289 | 5.53 | 0.66 | 4 |
| **Total** | | 39 dates | **416** | **1,250** | 6.05 | 0.56-0.94 | 10 (after trimming) |

Notes on the table:
- An earlier version of this table (Oct 12) used the old `FlyOver == 0` filter, which gave BK 4.53 and a var/mean range of 0.55 to 1.08; superseded Oct 13.
- Point-visit counts include 2 fly-over-only visits (one at BK, one at HO) counted as richness 0. The final R script also keeps them as 0 (the old one dropped them; fixed Oct 13). See [[R Scripts Walkthrough]].
- **The models use 376 of these points** (complete habitat data). On those, mean richness is BK 4.73, HO 5.56, DC 6.54, HB 6.64, CR 7.58: the same order at the ends, BK lowest and CR highest. Full summary: [[Preliminary Results]].
- "Observer codes" counts distinct values of `Obs` after trimming; several codes are teams (e.g. "KAS, CPR"), so this is a rough guide to how many different crews surveyed each site.
- CR has about half as many points as the others, so its estimates will be less precise. Fewer data points means a wider range of plausible values ([[Standard Error]], [[Population and Sample|Sample vs Population]]).

## What the table already tells me
1. **Site is fully confounded with year.** BK, DC, HO: 2022 only. CR, HB: 2023 only. No point surveyed in both years. "Confounded" means the two always change together, so if 2023 was simply a good bird year, CR and HB would look rich for reasons that have nothing to do with the sites ([[Confounding]], [[Why site and year cannot be separated]]).
2. **Survey timing differs.** CR was surveyed in mid-May, a few weeks earlier in the season than everything else. Early or late season can change which species are present and singing, and so how likely each is to be detected ([[Detection Probability]]).
3. **Crews differ.** HB was surveyed by 2 observer codes, DC by 6. People differ in how well they hear and identify birds ([[Observer Effects]]).
4. **BK is lowest and CR highest** in mean richness, but points 1-3 mean this ranking cannot be read as a habitat or fragmentation ranking. Even after habitat is in the model, CR, HB and DC keep more species than BK, and that leftover difference could be property, year, dates or crew ([[Why site identity is a weak test of a habitat hypothesis]], [[Correlation vs Causation]]).

## Ecological context
The properties are grassland conservation areas in a fragmented landscape, where [[Habitat Fragmentation]] (grassland broken into smaller pieces), [[Woody Encroachment|Woody Plant Encroachment]] (trees and shrubs spreading into grassland) and [[Edge Effects]] (changes where grassland meets woods) shape which birds can use them. The original study measured this with [[Spatial Covariance]], a satellite-based measure of whether grass and trees are separated by a boundary near each point, to locate [[Grassland Core Habitat]] (the large open middles of grassland, away from edges). Nearby points within a site may also be similar simply because they are close ([[Spatial Autocorrelation]]). The bird file has no coordinates, but the habitat file in the data release does (latitude and longitude for every point). The Oct 13 check found weak but significant spatial autocorrelation in the model residuals ([[Preliminary Results]]).

Management and land cover differ a lot, and not always as expected: CR is said to be burned often (see the Verify box above), yet it is the most wooded property in the habitat file (woodland 40% + forest 10% within 50 m), while BK is open largely because much of it is cropland ([[EDA Findings]]). Measured habitat at each point, not the site code, is what can test a habitat explanation ([[Grassland Restoration and Management]], [[Why site identity is a weak test of a habitat hypothesis]]).

**Part of:** [[MOC 23 - Grassland Bird Richness Project|MOC - Grassland Bird Richness Project]], [[MOC 25 - Landscape and Remote Sensing|MOC - Landscape and Remote Sensing]]
