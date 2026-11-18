---
type: molecular
tags:
  - r-reproducibility
  - workflow
  - flashcards/eco/why
description: "Why the project keeps two scripts: the wrangling script turns the messy raw files into one clean table, and the analysis script explores it, fits models and makes figures, starting by running the wrangling script so the two never fall out of step."
aliases:
  - "Wrangling vs Analysis Scripts"
status: seedling
---

# Wrangling vs Analysis Scripts

> [!summary] In plain words
> Wrangling is the prep: fixing codes, dropping rows that do not belong and reshaping the data so one row is one point-visit. Analysis is the cooking: exploring, fitting models and making figures. Keeping them in two scripts, with the analysis script running the wrangling script first, means every analysis starts from freshly cleaned data.

## The question
Why split the R code into a wrangling script and an analysis script, and why does the analysis script `source()` the other instead of reading a saved clean file?

## Built from
- [[Script]]: a text file of R commands run from top to bottom
- [[Data Wrangling]]: cleaning and reshaping raw data into an analysable table
- [[Splitting Scripts]]: giving each stage its own file, joined with `source()`
- [[Sampling Unit]]: what one row of the clean table should be
- [[Reproducibility]]: why every step is code

## The reasoning, step by step
1. **Each file should have one job.** *Why:* a shorter file is easier to read and debug.
2. **Decisions about what the data are stay apart from decisions about how to model them.** Which rows count, which species are focal and what the habitat columns mean live in wrangling; anything that uses the clean table lives in analysis.
3. **The analysis script runs the wrangling script itself.** *Why:* then there is no saved "clean copy" that could quietly go out of date after a fix.

**A worked example in numbers.** Point BK1001's first visit (8 July 2022) has 6 raw rows, one per species (INBU, COYE, RWBL, BARS, BLJA, YBCH). Wrangling turns them into 1 clean row: PtNum BK1001, Date 7/8/2022, Survey 1, Richness 6, Wind 0, Sky 1, plus FocalRichness and BK1001's habitat values. Richness is 6 because the ground-detection filter keeps BARS, seen on the ground and flying over (the Sep 10 filter dropped it, giving 5). Analysis then takes the 1,130 such rows at 376 points.

## So in practice
The link is one line in `GrasslandBirdRichness_Analysis.R`, matching Dr. Roberts' Pine Ridge script:

```r
# norun: needs the project folder
source(here("GrasslandBirdRichness_Wrangling.R"))
```

`source()` runs another script from top to bottom and [[here()]] builds its address; afterwards `datClean` exists in memory. The wrangling script reads the bird and habitat files; trims stray spaces ([[str_trim()]]); makes `Site` from the point label; keeps species seen on the ground ([[Why exclude fly-overs]]); counts all-species and focal richness per visit ([[group_by()]]), giving a fly-over-only visit 0; builds SpCov3/9/27, Tree50 and Scrub50; joins habitat and keeps complete cases ([[Complete-Case Analysis]]); [[Standardizing|standardizes]] the habitat columns; and makes `Site` and `Survey` [[Factors in R|factors]]. It ends with sanity checks: `nrow(datClean)` should be 1,130, `n_distinct(datClean$PtNum)` 376, and `colSums(is.na(datClean))` zero for the model columns. The analysis script loads packages ([[librarian shelf()]]), makes the Results and Figures folders, sources wrangling, explores, fits six models per response with [[glmer()]] inside `fitCandidates()`, ranks them ([[MuMIn model.sel()]]), checks the top model ([[check_overdispersion()]], [[DHARMa Simulated Residuals]], a spatial autocorrelation test), builds rate-ratio tables with `coefTable()` and saves 4 CSVs and 5 PNGs ([[ggsave()]]). There is no third "functions" script; the two home-made functions sit in the analysis script, which the syllabus allows ([[Functions in R]], [[R Scripts Walkthrough]]). (The Sep 10 scripts read only the bird CSV, dropped 90 mixed rows, had no trim and fit five different models; rewritten Oct 12 to 13 and run in ajay's RStudio on Oct 13.)

## What would go wrong otherwise
- Saving a clean CSV and analysing that works once, but after any fix in wrangling the saved copy is stale unless you remember to re-save it.
- Putting model-guiding exploration in the wrangling script mixes "what the data are" with "how to model them" (small checks like `str(rawDat)` are fine there).
- Running the wrangling script by hand first is unnecessary and easy to forget; the analysis script does it.

## Connections
- **Related:** [[Data Wrangling]], [[Splitting Scripts]], [[Reproducibility]], [[RProject]], [[Data Frame]], [[Pipe]], [[R Scripts Walkthrough]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 12 - Reproducible Coding and Figures|MOC - R and Reproducibility]]
- **Go deeper:** [[Zuur et al. 2010]]

## Flashcards

Why does the analysis script `source()` the wrangling script instead of reading a saved clean CSV?
??
Sourcing reruns the cleaning every time, so a fix in the wrangling script (like adding str_trim) automatically flows into the analysis. A saved clean file could quietly go out of date.
++++

What three numbers do the wrangling script's sanity checks confirm?::1,130 rows, 376 points, and no missing values in the columns the models use.
