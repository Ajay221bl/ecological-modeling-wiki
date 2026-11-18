---
type: atomic
tags:
  - r-reproducibility
  - workflow
  - flashcards
aliases:
  - "wrangling script"
  - "analysis script"
  - "data wrangling"
  - "Wrangling Script"
  - "Analysis Script"
status: seedling
---

# Wrangling vs Analysis Scripts
**In one line:** The wrangling script turns the messy raw file into one clean table; the analysis script explores that table, fits models and makes figures, and it starts by running the wrangling script so the two can never fall out of step.

> [!info] Before this, it helps to know
> [[Data Table Rows and Columns]] (what a table is) · [[Reproducibility]] (why every step is code) · [[Data Frames]] (how R holds a table)

## Start from zero
Cooking again. Before you cook, you prep: wash, peel, chop. Then you cook. A good kitchen keeps prep and cooking as separate stations.

In data work:
- **Wrangling** is the prep: fixing typos in codes, dropping rows that do not belong, and reshaping the data so that one row is one thing you want to study (your [[Sampling Unit]]).
- **Analysis** is the cooking: looking at the clean data ([[Data Exploration]]), fitting models, comparing them, and making figures.

A **script** is a text file of R commands that runs from top to bottom.

## Why it exists
Keeping two scripts helps because:
- each file has one job, so it is shorter, easier to read, and easier to debug;
- decisions about *what the data are* (wrangling) stay apart from decisions about *how to model them* (analysis);
- the analysis script runs the wrangling script itself, so every analysis starts from freshly cleaned data. There is no saved "clean copy" sitting around that could quietly go out of date after you fix something.

## A tiny example
Point BK1001 on its first visit (8 July 2022) has 6 raw rows, one per species. Wrangling turns them into one row:

| Raw rows (6) | Clean row (1) |
|---|---|
| INBU, COYE, RWBL, BARS, BLJA, YBCH, each with counts | PtNum BK1001, Date 7/8/2022, Survey 1, Richness 6, Wind 0, Sky 1 |

(Richness is 6 because the script's ground-detection filter keeps BARS, seen on the ground *and* flying over. The Sep 10 filter dropped it and gave 5.) The clean row also gets FocalRichness and BK1001's habitat values.

Analysis then takes the 1,130 such clean rows (376 points with complete habitat data) and asks whether richness is better explained by property, by habitat, or by both.

## In my project
The link between the two scripts is one line in `GrasslandBirdRichness_Analysis.R`:

```r
source(here("GrasslandBirdRichness_Wrangling.R"))
```

`source()` is a function that runs another script from top to bottom. `here(...)` builds that script's address ([[here()]]). After this line, the clean table `datClean` exists in memory. This matches Dr. Roberts' `source(here("PineRidgeFireLegacies_Wrangling.R"))`.

**`GrasslandBirdRichness_Wrangling.R` does:** read the bird CSV and the habitat file; trim stray spaces from codes ([[str_trim()]]); make `Site` from the letters at the start of PtNum; keep only species seen on the ground, in any distance band ([[Why exclude fly-overs]]); list every visit with its Wind and Sky; count all-species and focal richness per visit ([[group_by and summarize]]); join the counts onto the visit list, giving a fly-over-only visit 0 rather than dropping it; rename and build the habitat columns (SpCov3/9/27, Tree50, Scrub50); join habitat by PtNum and keep complete cases ([[Complete-Case Analysis]]); standardize the habitat columns ([[Standardizing Predictors]]); and make `Site` and `Survey` categories ([[Factors]]). Output: `datClean`, 1,130 rows, one per point-visit.

**`GrasslandBirdRichness_Analysis.R` does:** load packages ([[librarian shelf()]]); make the Results and Figures folders with `dir.create()`; source the wrangling script; explore (structure, visits per site, histograms, mean and variance by site, Spearman correlations of the habitat columns, boxplot); fit six candidate models per response with the function `fitCandidates()` and [[glmer()]]; rank them ([[MuMIn model.sel()]]); check the top model (dispersion with [[check_overdispersion()]], [[DHARMa Simulated Residuals]], and a spatial autocorrelation test); turn the estimates into rate ratios with the function `coefTable()`; save the point variance; and draw and save three figures ([[ggplot2 and ggsave()]]). Output: 4 CSVs and 5 PNGs.

The split follows a simple rule: anything that decides *what the data are* (which rows count, which species are focal, what the habitat columns mean) lives in wrangling; anything that *uses* the clean table lives in analysis. There is no third "functions" script: the two home-made functions sit in the analysis script, which is allowed ([[Functions and Arguments]]). The full code, chunk by chunk, is in [[R Scripts Walkthrough]].

The last wrangling lines, `nrow(datClean)`, `n_distinct(datClean$PtNum)` and `colSums(is.na(datClean))`, are sanity checks: there should be 1,130 rows at 376 points and no missing values in the columns the models use.

(History: the Sep 10 scripts read only the bird CSV, used a `FlyOver == 0` filter that dropped 90 mixed rows, had no trim, and fit five different models. Rewritten Oct 12 to 13; the new code ran in ajay's RStudio on Oct 13. R is not installed in Claude's environment, so rerun any change there.)

## Common confusions
- **"I should save a clean CSV and analyse that."** It works once, but after any fix in wrangling, the saved copy is stale unless you remember to re-save. Sourcing avoids that.
- **"Exploration belongs in wrangling."** Small checks like `str(rawDat)` are fine there, but plots and model-guiding exploration live in the analysis script.
- **"Run the wrangling script first by hand."** No need: the analysis script does it for you.

## Connections
- **Builds on:** [[Reproducibility]], [[RProject]], [[Data Frames]]
- **Leads to:** [[Pipe]], [[group_by and summarize]], [[R Scripts Walkthrough]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - R and Reproducibility]]
- **Go deeper:** [[Zuur et al. 2010]] (why checking data before modelling matters)

> [!question]- Check yourself
> Why does the analysis script `source()` the wrangling script instead of reading a saved clean CSV?
> ?
> Sourcing reruns the cleaning every time, so a fix in the wrangling script (like adding str_trim) automatically flows into the analysis. A saved clean file could quietly go out of date.
