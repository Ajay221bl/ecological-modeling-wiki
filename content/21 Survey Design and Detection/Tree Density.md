---
type: atomic
tags:
  - survey-design
  - field-methods
  - vegetation
  - flashcards/eco/survey
description: "Tree density describes how crowded with trees the land around a survey point is, measured in the field as the average distance from the point to the nearest trees."
aliases:
  - "Tree Density and DBH"
  - "DENS_101"
  - "DBH_AVG"
status: seedling
---

# Tree Density

Stand in a field and look for the nearest tree. If it is 5 m away you are among trees; if it is 80 m away you are in the open. **Tree density**, how many trees stand on a given area, can be judged that way without counting every tree on a hectare: the closer the nearest trees, the denser the stand. Foresters turn distances into density with a rough rule, trees per hectare ≈ 10,000 divided by the mean distance squared, which comes from the point-centred quarter method and assumes trees are scattered at random. Density answers "how many trees?"; its partner measure, [[Diameter at Breast Height]] (DBH, trunk thickness at 1.37 m), answers "how big are they?". Together they tell a manager how far [[Woody Encroachment]] has gone: many thin saplings mean early encroachment that [[Prescribed Fire]] can still kill, while big trunks mean the point has crossed into woodland and needs saws and money ([[Ecological Resilience and Alternative States]]).

Distances have a practical snag: a search limit. Say the observer looks in four directions up to 100 m and finds trees at 10 m (northeast), 20 m (southeast), none within 100 m (southwest) and 14 m (northwest). You can average two ways. Cap the missing one at 101 m: (10 + 20 + 101 + 14) / 4 = 36.25 m, "fairly open on one side". Or leave it out: (10 + 20 + 14) / 3 = 14.7 m, which sounds like dense woods. Neither is wrong; they answer slightly different questions, and if no tree is found in any direction the "leave it out" version has nothing to average and becomes NA ([[Missing Values]]), while the capped version is simply 101. Because distances are capped and skewed, the median often describes them better than the [[Mean]] ([[Spread and Variability]]).

Three confusions. A "density" column holding distances runs backwards: bigger means fewer trees, a direction easy to flip when reading a [[Regression Coefficient|coefficient]]. A value of 101 m is not a real measurement but a placeholder for "more than 100 m". And missing does not mean no trees; it may mean not measured. The grassland bird habitat file has `DENS_101` (average distance to trees, beyond 100 m set to 101), present at 304 of 416 points with median 15.6 m; `DENS_NO101` (the same with far trees excluded); and `DBH_AVG` (3.81 to 207 cm, present at 192 points; the 3.81 cm minimum is exactly 1.5 inches, hinting at a size cut-off) ([[Roberts et al. 2025]]). The metadata do not say how many trees were measured per point or whether the quarter method was used, so confirm with Dr. Roberts before converting to trees per hectare. The project's models use field cover instead (`Tree50` = woodland + forest cover within 50 m, [[Percent Cover]]) plus [[Spatial Covariance]], because the distance and DBH measures are missing mostly at [[Roadside Surveys|roadside points]] ([[Field vs Remote Vegetation Measures]]).

## Connections
- **Builds on:** [[Woody Encroachment]], [[Mean]], [[Spread and Variability]], [[Missing Values]], [[Regression Coefficient]], [[Roadside Surveys]]
- **Leads to:** [[Diameter at Breast Height]], [[Prescribed Fire]], [[Ecological Resilience and Alternative States]], [[Percent Cover]], [[Spatial Covariance]], [[Field vs Remote Vegetation Measures]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]]
- **Go deeper:** [[Why trees take over grasslands without fire]], [[Defend the Core]], [[Roberts et al. 2025]]

## Flashcards

Point A has DENS_101 = 90 and point B has DENS_101 = 8. Which point has more trees nearby, and why might DBH also matter?
??
Point B: its trees are on average only 8 m away. DBH tells you whether those trees are small saplings that fire can still kill or large established trees that would need cutting.
++++

Why is a value of 101 in DENS_101 not a real distance?::It is a placeholder meaning "no tree within the 100 m search limit".
