---
type: atomic
tags:
  - model-selection-diagnostics
  - missing-data
  - flashcards/eco/selection
description: "Complete-case analysis fits every model only to the rows that have no missing value in any variable any of the models uses, so all the models are judged on exactly the same data."
aliases:
  - "complete cases"
  - "complete-case set"
  - "complete case analysis"
  - "listwise deletion"
status: seedling
---

# Complete-Case Analysis

Two runners claim to be faster. One ran 5 km, the other 4 km. Comparing their total times is meaningless, because the longer course takes longer no matter who is faster; a fair race uses the same course. [[Model Selection|Model comparison]] works the same way. A [[Missing Values|missing value]] (NA, "not available") is an empty cell, and a *complete case* is a row with no empty cells in the columns that matter. **Complete-case analysis** throws away every incomplete row first, then fits all the models to what is left, so every model runs the same course. It matters because [[AIC]] is built from a [[Likelihood]] that adds up one piece per row, so more rows means a bigger total even when the model is no better: "one cannot validly compare an information criterion across different data sets" ([[Anderson and Burnham 2002]], p. 917).

Take four points. A has [[Species Richness|richness]] 5, Wind 0 and [[Spatial Covariance|spatial covariance]] −40; B has 7, 1 and NA; C has 6, 0 and 10; D has 4, 2 and NA. A weather-only model could use all 4 rows and a habitat model only A and C, so their AIC values would be sums over 4 and 2 rows, not comparable. Worse, R does this silently: it fits each model to the rows complete for that model's own variables, so a model without habitat terms keeps rows a habitat model drops, which can "invalidate the proper comparison of AIC values" (p. 917). Complete-case analysis fits both models to A and C. Notice what is lost: fewer rows means less precise estimates, and if B and D are the wet spots, the comparison now says nothing about wet spots; deleting incomplete rows "may result in biased parameter estimates" and reduces power ([[Harrison et al. 2018]], p. 19). Methods such as multiple [[Missing Data in Bayesian Models|imputation]] fill in plausible values instead (Harrison et al., p. 19), but they are beyond this project.

In the project, spatial covariance is missing at 39 flood-masked points (BK 2, CR 12, DC 0, HB 21, HO 4), where satellite pixels classed as water or flooded vegetation were removed ([[Flood Masking]]). So every model, including M0 and M1 that use no habitat, is fitted to the same 376 points and 1,130 visits ([[Analysis Plan]], [[Candidate Model Set]]). The wrangling script does this right after joining the habitat file with [[filter()]], keeping a row only if none of the five habitat values is missing:

```r
# norun: needs the project data
  filter(!is.na(SpCov3), !is.na(SpCov9), !is.na(SpCov27),
         !is.na(Tree50), !is.na(Scrub50))
```

Why 376 and not 377? 416 − 39 = 377 points have spatial covariance, but one of them, HB51, has no land-cover values (WD50, FO50 and SC50 are all NA), so it has no tree or scrub cover and drops too; HB72 is also missing land cover but is already among the 39 masked points (checked in Python on Oct 12 and confirmed by the R run on Oct 13). About a tenth of the points are lost, unevenly: CR loses a quarter of its 47 points and HB a quarter of its 84. They are not a random subset: the dropped points are the wettest places, so the models describe the drier part of each property, which deserves one sentence in the Report's limitations. Three confusions: letting M0 use all the rows because it needs no habitat makes its AIC incomparable; complete cases are a fair sample only if values are missing by pure chance, and flood masking is not chance; and all-species and focal richness use the same rows but still each get their own [[Model Ranking Tables|AIC table]] ([[MuMIn model.sel()]]).

```r
d <- data.frame(Richness = c(5, 7, 6, 4), Wind = c(0, 1, 0, 2), SpCov = c(-40, NA, 10, NA))
nrow(d)                 # 4 rows for a weather-only model
nrow(d[!is.na(d$SpCov), ])   # 2 complete cases for the habitat model
```

## Connections
- **Builds on:** [[Missing Values]], [[AIC]], [[Likelihood]], [[Model Selection]], [[Species Richness]], [[Missing Data in Bayesian Models]], [[Model Ranking Tables]]
- **Leads to:** [[Flood Masking]], [[filter()]], [[Candidate Model Set]], [[MuMIn model.sel()]], [[Analysis Plan]], [[Spatial Covariance]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection and Diagnostics]]
- **Go deeper:** [[Population and Sample]], [[Anderson and Burnham 2002]], [[Harrison et al. 2018]]

## Flashcards

Why is M0 fitted to 1,130 visits rather than all 1,250, even though it uses no habitat variable?
??
Because AIC is only comparable between models fitted to identical rows. If M0 used the extra visits at the flood-masked points, its score would be a sum over more rows, and comparing it with the habitat models would be meaningless.
++++

Why are the dropped flood-masked points not a random subset?::They are the wettest places, so the models describe only the drier parts of each property.
