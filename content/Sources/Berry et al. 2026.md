---
type: source
tags:
  - source
  - project-source
  - grassland-birds
aliases:
  - "Berry 2026"
  - "Berry et al 2026"
  - "Finding the (small) cores"
status: seedling
---

# Berry et al. 2026

> [!summary] In plain words
> This is the published paper built on the same bird surveys Ajay is using. It measured how open or broken-up each patch of grassland is from satellite images and asked where six declining grassland bird species live, using models that correct for birds being missed. It matters because it is the background story for Ajay's project, and his models (proposal Oct 12, fit Oct 13) borrow its habitat measure as a predictor.

**Citation:** Berry, L. L., B. A. DeGregorio, D. R. Uden, and C. P. Roberts. 2026. Finding the (small) cores: Spatial covariance tracks grassland bird community occupancy in fragmented grasslands. *Ecosphere* 17(3): e70515. https://doi.org/10.1002/ecs2.70515 (open access)

**Syllabus week:** Not a syllabus reading. It is the published paper behind Ajay's data, cited in the proposal.

> [!warning] Verify
> There is no PDF of this paper in the readings folder. Volume 17(3) and article number e70515 were found online on Oct 12, 2026 (the USGS publications record lists it). The method details below come from the USGS data release metadata ([[Roberts et al. 2025]]), whose abstract matches the paper's; the species-by-species results (listed in [[Focal Species]]) come from my reading of a summary of Berry's 2024 M.S. thesis (University of Arkansas, a free PDF), which the paper grew out of. Check both against the paper itself before citing specific numbers.

## What it's about
Dr. Roberts' group's paper using the same point-count surveys as Ajay's project. It measured habitat with a remote-sensing **spatial covariance** metric and used Bayesian multi-species occupancy models for six declining grassland bird species. The community avoided tree-grass edges and favoured grassland cores.

## Key ideas I use
(No page numbers: no PDF in the folder.)
- Spatial covariance from remote sensing as a measure of grassland structure -> [[Spatial Covariance]], [[Grassland Core Habitat]]
- Multi-species occupancy models that separate detection from occurrence -> [[Occupancy Model]], [[Imperfect Detection]]
- Edges where trees meet grassland matter for grassland birds -> [[Edge Effects]], [[Woody Plant Encroachment]], [[Habitat Fragmentation]]
- Five sites in north-central Arkansas, with codes confirmed by the data release metadata (CR = Camp Robinson, not Cache River) -> [[Study Sites]]
- Dr. Roberts suggested its spatial covariance metric as a habitat covariate, and the final proposal (Oct 12) used it. H2 expected focal grassland richness to follow the paper's pattern (higher in cores, lower with more tree cover), and the Oct 13 results did -> [[Proposal Feedback from Dr Roberts]], [[Hypotheses]], [[Preliminary Results]]

## What the method actually was (from the data release metadata)
- **Habitat measure:** spatial covariance between perennial forb and grass cover and tree cover, from the [[Rangeland Analysis Platform]], computed in a [[Moving Window Analysis]] at 3x3, 9x9 and 27x27 pixels of 30 m (0.81, 7.29 and 65.61 ha). Negative values mark tree-grass boundaries; values near zero can mark grassland cores -> [[Spatial Covariance]], [[Why negative spatial covariance marks a tree-grass boundary]]
- **Flooded pixels removed** using Dynamic World land cover -> [[Flood Masking]]
- **Six focal species:** [[Northern Bobwhite]], [[Dickcissel]], [[Eastern Meadowlark]], [[Scissor-tailed Flycatcher]], [[Eastern Kingbird]], [[Loggerhead Shrike]], all grassland-dependent and declining -> [[Focal Species]], [[Ecological Similarity Assumption]]
- **Model:** Bayesian [[Multi-species Occupancy Model]], compared across the three window sizes -> [[Why the window size is a choice of scale]]
- **Main result (abstract):** the community avoided tree-grass boundaries and favoured intact cores at all three scales; the smallest scale (0.81 ha) explained occupancy best; how strongly each species avoided boundaries was "idiosyncratic" (differed species to species) -> [[Why grassland birds avoid trees]], [[Defend the Core]]

## Notes that rely on it
- [[Project Overview]]
- [[Study Sites]]
- [[Spatial Covariance]]
- [[Why site identity is a weak test of a habitat hypothesis]]
- [[How the project could grow into Bayesian and occupancy models]]
- [[Dataset]]
- [[Preliminary Results]]: in Ajay's Oct 13 models, focal richness fit best at the same 0.81 ha window and rose toward cores (rate ratio 1.17 per SD).

## Connections
- **Part of:** [[MOC 21 - Course Readings|MOC - Course Readings]], [[MOC 23 - Grassland Bird Richness Project|MOC - Grassland Bird Richness Project]]
- **Data release:** [[Roberts et al. 2025]]
