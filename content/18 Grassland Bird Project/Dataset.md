---
type: project
tags:
  - project
  - grassland-bird-richness
  - data
  - flashcards/eco/project
aliases:
  - "The data"
  - "SSP data"
  - "SSP_AllBirdData"
status: seedling
---

# Dataset

> [!summary] In plain words
> My data come in two files. The bird file is one big spreadsheet where each row says "this species was detected at this point on this visit": 7,742 rows covering 416 points, 5 properties and 89 species from 2022-2023. The habitat file has one row per point, with its map location and measures of the habitat around it (tree, scrub and crop cover, and the spatial covariance metric). The two are joined by point ID.

Both files come from Dr. Roberts' USGS data release [[Roberts et al. 2025]] (DOI 10.5066/P1IL2ZRC), which supports [[Berry et al. 2026]] (Ecosphere 17(3): e70515). A DOI is a permanent web address for a paper or dataset. A CSV ("comma-separated values") file is a plain-text spreadsheet. A data table is made of **rows** (one per record) and **columns** (one per kind of information) ([[Data Table Rows and Columns]], [[Variable and Observation]]).

## File 1: the bird counts
`SSP_AllBirdData_NewPointNums_NAOMIT.csv`, given to me by Dr. Roberts; a copy sits in `GrasslandBirdRichness_Data/`.

- **7,742 rows x 12 columns.** One row = one species detected at one point-visit (a detection record, not a richness value). A visit where 6 species were found takes up 6 rows.
- **416 points** at **5 properties** (BK, CR, DC, HB, HO; names in [[Study Sites]]); 414 points have 3 visits, 2 have 4.
- **1,250 point-visits** (PtNum x Date x Survey: each unique combination of point, date and visit round), 39 survey dates, 2022-2023.
- **89 species** after trimming stray spaces (91 raw codes).
- The bird file alone has no habitat variables and no coordinates; those are in the habitat file.

| Column | Meaning | Concept note |
|---|---|---|
| Obs | observer initials (some are teams, e.g. "KAS, CPR") | [[Observer Effects]] |
| Date | survey date, m/d/yyyy | |
| PtNum | point ID; leading letters = property (BK1001 → BK) | [[Grouping Variable]] |
| Survey | visit round within season (1, 2, 3) | [[Repeat-Visit Design]] |
| StartTime | time the count began | |
| Wind | Beaufort wind code, 0 = calm (0-3 in the data) | [[Detection Covariates]] |
| Sky | sky condition code, 0 = clear (0-5 in the data) | [[Detection Covariates]] |
| SpeciesCode | four-letter code, e.g. DICK, NOBO | [[Four-Letter Species Codes]] |
| Dist_50, Dist_100, Dist_400 | individuals within 0-50 m, 51-100 m, 101-400 m | [[Distance Bands]] |
| FlyOver | individuals that flew over without staying within 400 m | [[Fly-over Detections]] |

## File 2: the habitat file
`FieldVeg50m_RemoteVeg_JUNMASK_forDataRelease.csv`: **one row per point**, matching all 416 `PtNum` values in the bird file ([[Field vs Remote Vegetation Measures]]).

| Columns | Meaning | Used? |
|---|---|---|
| PtNum, Site | point ID and property code | join key; Site = property |
| Roadside | 1 = roadside point, 0 = not ([[Roadside Surveys]]) | no |
| longitude, latitude | map location in decimal degrees | yes, for the residual map ([[Spatial Autocorrelation]]) |
| 30m_PFG_TRE_3W_22, _9W_22, _27W_22 | [[Spatial Covariance]] between tree and perennial forb and grass cover in 3x3, 9x9 and 27x27 pixel windows (0.81, 7.29, 65.61 ha), from 2022 [[Rangeland Analysis Platform]] imagery; NA where flood-masked | yes, one per model; renamed SpCov3, SpCov9, SpCov27 in the code (R names cannot start with a number) |
| ROBEL_AVG | average Robel pole visual obstruction ([[Visual Obstruction (Robel Pole)]]) | no, too many NAs |
| DENS_NO101, DENS_101, DBH_AVG | distance from point to trees, and tree diameter ([[Tree Density]], [[Diameter at Breast Height]]) | no, too many NAs |
| CG50, CO50, FO50, GM50, IA50, LA50, NG50, OF50, RI50, SC50, SO50, WA50, WD50 | % cover within 50 m of: cool grass, corn, forest, grass mix, inactive agriculture, lawn, native warm-season grass, old field, rice, scrub, soybean, water, woodland ([[Percent Cover]]) | FO50 + WD50 = tree cover; SC50 = scrub cover |

Missing values in the habitat file:
- **Spatial covariance:** NA at 39 flood-masked points (BK 2, CR 12, DC 0, HB 21, HO 4) ([[Flood Masking]]).
- **Field vegetation** (ROBEL_AVG, DENS_101, DBH_AVG): missing at 112 to 224 of the 416 points, mostly roadside points.

Joining the two files and keeping complete cases leaves **376 points and 1,130 visits** (BK 94 points, CR 35, DC 93, HB 62, HO 92), the rows every model uses ([[Complete-Case Analysis]], [[Analysis Plan]]). The wrangling script does this join, builds Tree50 = WD50 + FO50 and Scrub50 = SC50, and adds standardized copies ending in `_z` (done Oct 13, [[R Scripts Walkthrough]]).

## A tiny example: from rows to richness
| PtNum | Date | Survey | SpeciesCode | Dist_50 | FlyOver |
|---|---|---|---|---|---|
| BK1001 | (a date) | 1 | DICK | 2 | 0 |
| BK1001 | (same) | 1 | NOBO | 1 | 0 |
| BK1001 | (same) | 1 | TUVU | 0 | 1 |

Three rows, one point-visit. The Turkey Vulture was only overhead, with nothing in any distance band, so it does not count: richness for this visit = 2. (Illustrative rows, not copied from the file.) The full rule and a real example: [[Why exclude fly-overs]].

## Known data issues (bird file, re-checked Oct 12; code fixes done Oct 13)
1. **Stray spaces:** " FISP", "EUST " (species) and "EAL " (observer). To a computer, " FISP" is a different word from "FISP", so without [[str_trim()]] Field Sparrow and European Starling are counted twice. **Fixed in code (Oct 13):** the wrangling script trims SpeciesCode and Obs.
2. **Missing values despite "NAOMIT":** NA means "not available", an empty cell. Dist_50 has 1, FlyOver has 5. **Fixed (Oct 13):** the ground-detection sum wraps every band in `coalesce(..., 0)`, so a missing band counts as 0, and FlyOver is no longer used to filter. The README now describes the missing values correctly ([[README]]).
3. **Mixed rows:** 90 rows have both a ground count and a fly-over count. The old `FlyOver == 0` filter dropped them. **Fixed in code (Oct 13):** the ground-detection rule keeps any row with at least one bird in a distance band. A visit with only fly-overs is kept with richness 0 (HO55 on Jun 20, 2022) ([[Why exclude fly-overs]]).
4. **Wind and Sky never change within a visit,** so taking the first value per visit is safe.
5. **Property is fully confounded with year** (BK, DC, HO 2022; CR, HB 2023): details in [[Study Sites]] and [[Why site and year cannot be separated]].
6. **UTF-8 byte-order mark** (an invisible character at the start of the file). `read_csv()` handles it, but other tools may show the first column name oddly.

## Fly-overs and focal species at a glance
- Fly-overs: 207 of 7,742 rows (2.7%), mostly aerial species (Turkey Vulture, Mississippi Kite, Chimney Swift).
- Rows for the six focal species of the original paper: Dickcissel 331, Northern Bobwhite 204, Eastern Meadowlark 92, Scissor-tailed Flycatcher 33, Eastern Kingbird 9, Loggerhead Shrike 8 ([[Focal Species]], [[Dickcissel]], [[Northern Bobwhite]]).

## Connections
- **Builds on:** [[Data Table Rows and Columns]], [[Variable and Observation]], [[Roberts et al. 2025]], [[Study Sites]]
- **Leads to:** [[Complete-Case Analysis]], [[Why exclude fly-overs]], [[str_trim()]], [[EDA Findings]], [[Data Frame]], [[R Scripts Walkthrough]]
- **Part of:** [[MOC 23 - Grassland Bird Richness Project|MOC - Grassland Bird Richness Project]]
- **Go deeper:** [[README]], [[Field vs Remote Vegetation Measures]], [[Berry et al. 2026]]

## Flashcards

How many rows, points and point-visits are in the bird file, and what is one row?::7,742 rows, 416 points, 1,250 point-visits; one row is one species detected at one point-visit.

Why do the models use 376 points and 1,130 visits rather than all 416 points?::Spatial covariance is missing at 39 flood-masked points and one more point lacks land cover, and every model must use the same complete rows.
