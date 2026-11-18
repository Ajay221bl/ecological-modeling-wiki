---
type: atomic
tags:
  - basics-from-zero
  - data
  - flashcards/eco/basics
description: "A data table stores one observation per row and one variable per column, so every cell holds exactly one value."
aliases:
  - "data table"
  - "rows and columns"
status: seedling
---

# Data Table Rows and Columns

Think of a spreadsheet. Across the top are column names such as Date, PtNum, Wind and [[Four-Letter Species Codes|SpeciesCode]]; down the side, each line is one record. A **data table** follows three simple rules: each column is one [[Variable]] (a quantity or label that can differ from record to record), each row is one [[Observation]] (one recorded case), and each cell holds exactly one value. A table that follows these rules is called [[Tidy Data]]. The hard part is not the rules but deciding what one row means: before you can count, average or model anything, you must be able to finish the sentence "one row = one ...". Computers and statistics work by doing the same thing to every row ("count the rows per site", "average this column", "fit a model where each row is a data point"), and that only gives the right answer if every row is the same kind of thing. If some rows are visits and others single birds, any count is nonsense; if one cell holds two values ("BK, windy"), no program can read it reliably.

Look at real rows. The raw file for point BK1001, first visit (a few columns shown), has six rows: INBU, COYE, RWBL, BARS, BLJA and YBCH, each with Date 7/8/2022, PtNum BK1001, Survey 1 and Wind 0, and BARS with [[Fly-over Detections|FlyOver]] 4. Here one row is one species at one point-visit, and Wind repeats on every row because it belongs to the visit, not the bird. To ask "how many species per visit?" we squash these six rows into one row (7/8/2022, BK1001, Survey 1, Wind 0, [[Species Richness|Richness]] 6), and now one row is one point-visit. All 6 species count, including the Barn Swallow: it had 4 birds flying over but also 5 on the ground within 50 m, so it was using the place ([[Why exclude fly-overs]]). The squashing is done with [[group_by()]] (which groups rows sharing the same values) and `summarize()`:

```r
# norun: needs the project data
richnessSum <-
  groundDat %>%
  group_by(PtNum, Date, Survey) %>%
  summarize(Richness = n_distinct(SpeciesCode),
            FocalRichness = n_distinct(SpeciesCode[SpeciesCode %in% focalSpecies]),
            .groups = "drop")
```

In words: group the rows that share the same point, date and survey round, then count how many different species codes each group has, and how many of them are [[Focal Species|focal species]]. The project has three tables with three row meanings ([[Dataset]], [[README]]). The raw bird table (`SSP_AllBirdData_NewPointNums_NAOMIT.csv`) has 7,742 rows, one species at one point-visit, covering 89 species and 416 points. The habitat table (`FieldVeg50m_RemoteVeg_JUNMASK_forDataRelease.csv`) has 416 rows, one per survey point. The clean table `datClean` (built in `GrasslandBirdRichness_Wrangling.R`) has 1,130 rows, one point-visit each at the 376 points with complete habitat data, and its habitat values repeat on each visit to the same point, just as Wind repeats in the raw table. `groundDat` keeps only rows with at least one bird on the ground in any [[Distance Bands|distance band]], which keeps the BARS row and 89 other mixed rows; the Sep 10 script's `FlyOver == 0` filter threw them away, giving 5 here instead of 6 (fixed Oct 12 to 13). Before counting, codes are trimmed of stray spaces (" FISP" vs "FISP") with [[str_trim()]], or `n_distinct()` would count one species twice. Three confusions: the raw and clean tables describe the same surveys but answer different questions, so always say which you mean; repeated values are not a mistake; and rows are not automatically independent, since three rows for BK1001 share a spot ([[Sampling Unit]], [[Pseudoreplication]]). The same structure, held in R, is a [[Data Frame]].

## Connections
- **Builds on:** [[Variable]], [[Observation]], [[Tidy Data]]
- **Leads to:** [[group_by()]], [[Data Frame]], [[Sampling Unit]], [[Pseudoreplication]], [[str_trim()]], [[Four-Letter Species Codes]], [[Fly-over Detections]], [[Species Richness]], [[Focal Species]], [[Distance Bands]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]
- **Go deeper:** [[Variable and Observation]], [[Why exclude fly-overs]], [[Dataset]], [[README]]

## Flashcards

In the raw data, one row is one species at one point-visit. Why can't you just count raw rows per site to compare richness between sites?
??
Raw row counts mix up "more species" with "more visits" (and with species seen at several visits). First collapse to one row per point-visit with the number of distinct species, then compare those.
++++

What three rules make a data table tidy?::Each column is one variable, each row is one observation, and each cell holds one value.
