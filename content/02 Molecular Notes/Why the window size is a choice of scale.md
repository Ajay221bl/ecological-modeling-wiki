---
type: molecular
tags:
  - molecular
  - landscape-ecology
  - remote-sensing
aliases:
  - "Choosing the window size"
  - "Which spatial covariance scale"
status: seedling
---

# Why the window size is a choice of scale
> [!summary] In plain words
> Spatial covariance is computed inside a square "window" around each point, and the window can be small (90 m across), medium (270 m) or large (810 m). Each size answers a different question: "is there a tree line right here?" versus "is this point in a wooded neighbourhood?". Bigger windows almost always catch more forest edge, so their values are more negative. Which size matters most is an ecological question about how far birds "look", so it is tested, not assumed.

## The question
The habitat file gives three spatial covariance columns for each point: 3x3, 9x9 and 27x27 windows. Why three, why do their values differ so much, and how should I pick one?

## Built from
- [[Spatial Scale (Grain and Extent)]]: grain is the pixel size, extent is the window size.
- [[Pixels and Spatial Resolution]]: each pixel is 30 m x 30 m.
- [[Moving Window Analysis]]: the window slides across the map, scoring every pixel.
- [[Spatial Covariance]]: the score computed inside each window.
- [[Area Sensitivity]] and [[Habitat Selection]]: birds respond to their surroundings at particular distances.
- [[Collinearity]] and [[AIC]]: why I fit one scale per model and compare.

## The reasoning, step by step
1. **The same place looks different at different zooms.** Zoomed in on a map, a point might be in pure grass. Zoom out and a forest appears at the edge of the screen. Neither view is wrong; they answer different questions.
2. **Window sizes, worked out.** Pixels are 30 m on a side.
   - 3x3: 3 x 30 = 90 m per side; 90 x 90 = 8,100 m² = **0.81 ha** (1 ha = 10,000 m²).
   - 9x9: 270 m per side; 270 x 270 = 72,900 m² = **7.29 ha**.
   - 27x27: 810 m per side; 810 x 810 = 656,100 m² = **65.61 ha**.
   Each step is 3 times wider and 9 times the area.
3. **Compare with the survey.** A 50 m circle around the observer covers 3.14 x 50 x 50 = 7,850 m², about 0.79 ha, almost exactly the 3x3 window. The 100 m circle used for focal species is about 3.1 ha, between the 3x3 and 9x9 windows. Points are 400 m apart ([[Systematic Grid Sampling]]), so 27x27 windows (810 m wide) around neighbouring points **overlap heavily** and share much of their information ([[Spatial Autocorrelation]]).
4. **Bigger windows catch more edge.** In fragmented sites, almost any 810 m square contains some forest. More contrast inside the window means larger negative covariance. That is why the medians fall from **-2.6** (3x3) to **-69.8** (9x9) to **-182.4** (27x27).
5. **The values are not on one ruler.** A -70 in a 9x9 window is not "worse" than a -40 in a 3x3 window; they summarise different areas. Compare points within one window size, not across sizes.
6. **Birds have their own scale.** A Dickcissel defends a small territory but might avoid nesting where a hawk perch is visible from hundreds of metres. Which distance matters is not known in advance, and it may differ by species ([[Area Sensitivity]]).
7. **So test it.** Fit the same model with each window size and let the data say which fits best. Putting all three in one model would fail: they measure overlapping areas, so they are strongly correlated and the model cannot separate their effects ([[Collinearity]]).

## So in my project
- The data release abstract reports that the grassland bird community avoided boundaries at all three scales, but that the **smallest** window (0.81 ha) best explained occupancy ([[Roberts et al. 2025]], [[Berry et al. 2026]]).
- My models (proposal Oct 12, fit Oct 13) follow the same logic: spatial covariance at **one scale per model**, standardized, with tree and scrub cover. M2a uses 0.81 ha, M2b 7.29 ha and M2c 65.61 ha, and they compete with the Property model (M1) by [[AIC]] ([[Candidate Model Set]], [[Analysis Plan]]).
- The three columns are correlated in my points (Spearman 0.63 for 3x3 vs 9x9, 0.76 for 9x9 vs 27x27, 0.47 for 3x3 vs 27x27), which is the [[Collinearity]] reason for keeping them in separate models.
- **The two responses picked different scales, and that is a real result** (Oct 13, [[Preliminary Results]]). All-species richness fit best at **65.61 ha** (it was about 7% higher per SD toward edges). Focal richness fit best at **0.81 ha**, the same small scale as in Berry's study (17% higher per SD toward cores). The EDA had hinted at this (Spearman -0.41 with 27x27; +0.26 with 3x3). A plain reading: specialists respond to the tree line right beside them, while the total species count reflects how wooded the wider neighbourhood is, because woodland birds come in from it ([[Why all-species and focal-species richness can disagree]]).
- The gaps differ in size. For all species, 65.61 ha beat the next scale by 22 AIC units. For focal species, 0.81 ha beat the next by about 5 units: still clearly better (more than 2), but a smaller margin.
- Because the three scales were named in advance and all three are reported, picking the best is not data dredging (see below). Note that the Report's Figure 2 plots raw counts against the 7.29 ha window, which neither response picked.
- All three columns use 2022 imagery only, even for the 2023 sites (CR, HB). Change between years is assumed to be small.

## What would go wrong otherwise
- **Picking one scale without saying why** could miss the relevant one, and a reader could suspect it was chosen because it "worked".
- **Trying every scale and reporting only the best** is a mild form of [[Data Dredging]]. The fix is to name the three scales in advance and report all of them.
- **Mixing scales in one model** would give unstable, uninterpretable coefficients.
- **Reading a big negative 27x27 value as a bad point** ignores that large windows are negative almost everywhere in fragmented country.

## Connections
- **Related:** [[Why negative spatial covariance marks a tree-grass boundary]], [[Landscape Ecology]], [[Why compare models with AIC rather than only p-values]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 25 - Landscape and Remote Sensing|MOC - Landscape and Remote Sensing]]
