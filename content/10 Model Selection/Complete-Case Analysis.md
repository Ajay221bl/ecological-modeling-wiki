---
type: atomic
tags:
  - model-selection-diagnostics
  - missing-data
  - flashcards
aliases:
  - "complete cases"
  - "complete-case set"
  - "complete case analysis"
  - "listwise deletion"
status: seedling
---

# Complete-Case Analysis
**In one line:** Fitting every model only to the rows that have no missing value in any variable any of the models uses, so all the models are judged on exactly the same data.

> [!info] Before this, it helps to know
> [[AIC]] (the score that needs identical rows) · [[Likelihood]] (why the score depends on how many rows there are) · [[Sample vs Population]] (what is lost when rows are dropped)

## Start from zero
Two runners claim to be faster. One ran 5 km, the other 4 km. Comparing their total times is meaningless: the longer course takes longer no matter who is faster. A fair race uses the same course.

Model comparison works the same way. Each model gets a score ([[AIC]]) built from how well it fits *every row* it was given. If one model sees 1,250 rows and another sees 1,130, their scores are on different courses.

A **missing value** (NA, "not available") is an empty cell. A **complete case** is a row with no empty cells in the columns that matter. **Complete-case analysis** throws away every incomplete row first, then fits all the models to what is left.

## Why it exists
- **AIC adds up over rows.** The fit part of AIC is a sum, one piece per row ([[Likelihood]]). More rows means a bigger total even if the model is no better. So "one cannot validly compare an information criterion across different data sets" ([[Anderson and Burnham 2002]], p. 917).
- **Software drops rows silently.** R fits each model to the rows that are complete *for that model's own variables*. A model without habitat terms would keep rows that a habitat model drops. Anderson and Burnham warn that the way software treats missing data can "invalidate the proper comparison of AIC values" (p. 917).
- **The cost.** Fewer rows means less information, so estimates get less precise. Worse, if the dropped rows differ systematically from the kept ones, results describe only the kind of place that was kept; deleting incomplete rows "may result in biased parameter estimates" and reduces power ([[Harrison et al. 2018]], p. 19).

## A tiny example
| Point | Richness | Wind | Spatial covariance |
|---|---|---|---|
| A | 5 | 0 | -40 |
| B | 7 | 1 | NA |
| C | 6 | 0 | 10 |
| D | 4 | 2 | NA |

A weather-only model could use all 4 rows; a habitat model only A and C. Their AIC values would be sums over 4 and 2 rows: not comparable. Complete-case analysis fits *both* to A and C. Notice what is lost: if B and D are the wet spots, the comparison now says nothing about wet spots.

## In my project
Spatial covariance is missing at **39 flood-masked points** (BK 2, CR 12, DC 0, HB 21, HO 4), where satellite pixels classed as water or flooded vegetation were removed ([[Flood Masking]]). So every model, including M0 and M1 that use no habitat, is fit to the same **376 points and 1,130 visits** (BK 94, CR 35, DC 93, HB 62, HO 92) ([[Analysis Plan]], [[Candidate Model Set]]). Since Oct 13 the wrangling script does this right after joining the habitat file:

```r
  filter(!is.na(SpCov3), !is.na(SpCov9), !is.na(SpCov27),
         !is.na(Tree50), !is.na(Scrub50))
```

In words: keep a row only if none of the five habitat values is missing. The script's sanity check then confirms 1,130 rows at 376 points, and ajay's Oct 13 run matched.

What is lost:
- About a tenth of the points, but unevenly: CR loses a quarter of its 47 points and HB a quarter of its 84.
- **They are not a random subset.** The dropped points are the wettest places, so the models describe the drier part of each property. That deserves one sentence in the Report's limitations.

**Why 376 and not 377?** 416 - 39 flood-masked points = 377 points with spatial covariance. One of those, HB51, has no land-cover values (WD50, FO50 and SC50 are all NA), so it has no tree or scrub cover and drops too. A second HB point, HB72, is missing land cover as well, but it is already among the 39 masked points. That leaves 376 (checked in Python against the habitat file on Oct 12, and confirmed by the R run on Oct 13).

## Common confusions
- **"M0 needs no habitat, so let it use all the rows."** Then its AIC is not comparable with the habitat models. Same rows for all, or the table is invalid.
- **"Complete cases are a fair sample."** Only if values are missing by pure chance. Flood masking is not chance.
- **"Dropping rows is the only option."** Methods such as multiple imputation fill in plausible values instead (Harrison et al., p. 19), but they are beyond this project.
- **Different responses.** All-species and focal richness use the same rows, but each gets its own AIC table.

## Connections
- **Builds on:** [[AIC]], [[Likelihood]], [[Sample vs Population]]
- **Leads to:** [[Candidate Model Set]], [[MuMIn model.sel()]], [[Data Exploration]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection and Diagnostics]]
- **Go deeper:** [[Anderson and Burnham 2002]] (same data for all models, p. 917), [[Harrison et al. 2018]] ("Dealing with missing data", p. 19)

> [!question]- Check yourself
> Why is M0 fitted to 1,130 visits rather than all 1,250, even though it uses no habitat variable?
> ?
> Because AIC is only comparable between models fitted to identical rows. If M0 used the extra visits at the flood-masked points, its score would be a sum over more rows, and comparing it with the habitat models would be meaningless.
