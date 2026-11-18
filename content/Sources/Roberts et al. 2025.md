---
type: source
tags:
  - source
  - project-source
  - dataset
aliases:
  - "Roberts 2025"
  - "USGS data release"
  - "Roberts et al 2025"
status: seedling
---

# Roberts et al. 2025

> [!summary] In plain words
> This is the official U.S. Geological Survey data release holding the bird surveys that Ajay's CSV comes from. It is where the data officially live, so it is what Ajay cites as his data source. It matters for the Report's Methods, the README and the citation list.

**Citation:** Roberts, C. P., L. Berry, and B. A. DeGregorio. 2025. Spatial covariance tracks grassland bird community occupancy in fragmented grasslands [Data release]. U.S. Geological Survey. https://doi.org/10.5066/P1IL2ZRC

**Syllabus week:** Not a syllabus reading. It is the data source for Ajay's project, cited in the README and the proposal.

> [!warning] Verify
> Ajay uploaded the release's metadata file on Oct 12, 2026. It lists the authors as Caleb P. Roberts, Lauren L. Berry and Brett A. DeGregorio, a publication date of March 2025, and the title above. Use the full initials (Roberts, C. P., L. L. Berry, and B. A. DeGregorio) and check the version on the USGS ScienceBase page before citing.

## What it's about
The U.S. Geological Survey data release holding the point-count surveys behind [[Berry et al. 2026]]. Ajay's file `SSP_AllBirdData_NewPointNums_NAOMIT.csv` comes from this research (given to him by Dr. Roberts).

## Key ideas I use
- What the CSV holds (re-checked values): 7,742 detection rows (one species at one point-visit), 416 points, 5 site codes, 89 species after trimming codes, 2022-2023 -> [[Dataset]], [[Point Count Survey]]
- Columns include distance bands (Dist_50, Dist_100, Dist_400) and a FlyOver flag -> [[Distance Bands]], [[Fly-over Detections]]
- Species are recorded as four-letter codes, two of which carry stray spaces; Wrangling.R trims them with `str_trim()` (fixed Oct 13) -> [[Four-Letter Species Codes]], [[str_trim()]]
- Site is fully confounded with year (BK, DC, HO 2022 only; CR, HB 2023 only) -> [[Why site and year cannot be separated]]
- Cite the release as the data source in the README. The README now says that, despite "NAOMIT" in the file name, Dist_50 has 1 missing value and FlyOver has 5 (its old "no missing values" line was fixed Oct 13) -> [[README|README Data Dictionary]]

## What the metadata adds (uploaded Oct 12, 2026)
- **Two files in the release:** the bird file Ajay already uses, and `FieldVeg50m_RemoteVeg_JUNMASK_forDataRelease.csv`, one row per point with coordinates, a Roadside flag, spatial covariance at three scales, field vegetation measures and percent cover within 50 m -> [[Field vs Remote Vegetation Measures]], [[Percent Cover]]
- **Site codes defined:** BK Bald Knob NWR, CR Camp Robinson SUA, DC Dark Corner tract and HO Howell tract of Cache River NWR, HB Holla Bend NWR -> [[Study Sites]]
- **Survey protocol:** points on a 400 m grid with a random anchor, plus roadside points; three visits; 30 minutes before to 5 hours after sunrise; wind under 19.3 km/h and no rain; Beaufort wind and BBS sky codes -> [[Systematic Grid Sampling]], [[Roadside Surveys]], [[Breeding Bird Survey]]
- **Study area:** [[Mississippi Alluvial Valley]] and [[Arkansas River Valley]] [[Ecoregions]]; all sites restored with mowing, burning and disking -> [[Grassland Restoration and Management]]
- **Spatial covariance method and flood mask** -> [[Spatial Covariance]], [[Flood Masking]]
- The metadata says 424 points; Ajay's bird file has 416. Use the count in the data.
- **How the project uses the habitat file (proposal Oct 12; done in the Oct 13 scripts):** joined to the bird data by `PtNum` (all 416 points match), it supplies spatial covariance, tree cover (WD50 + FO50) and scrub cover (SC50) as predictors, and the coordinates for the Moran's I residual check. Keeping complete cases leaves 376 points and 1,130 visits. The field vegetation measures are left out because they are missing at many roadside points -> [[Analysis Plan]], [[Spatial Autocorrelation]], [[Preliminary Results]]

## Notes that rely on it
- [[Dataset]]
- [[Preliminary Results]]
- [[README|README Data Dictionary]]
- [[Study Sites]]
- [[Point Count Survey]]

## Connections
- **Part of:** [[MOC 21 - Course Readings|MOC - Course Readings]], [[MOC 23 - Grassland Bird Richness Project|MOC - Grassland Bird Richness Project]]
- **Paper:** [[Berry et al. 2026]]
