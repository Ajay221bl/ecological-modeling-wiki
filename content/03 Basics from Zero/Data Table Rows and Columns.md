---
type: atomic
tags:
  - basics-from-zero
  - data
  - flashcards
aliases:
  - "data table"
  - "rows and columns"
  - "tidy data"
status: seedling
---

# Data Table Rows and Columns

**In one line:** a data table stores one observation per row and one variable per column, so every cell holds exactly one value.

> [!info] Before this, it helps to know
> [[Variable and Observation]] (rows are observations, columns are variables)

## Start from zero
Think of a spreadsheet. Across the top are column names: Date, PtNum, Wind, SpeciesCode. Down the side, each line is one record.

The tidy rule is simple:
1. Each **column** is one [[Variable and Observation|variable]].
2. Each **row** is one observation.
3. Each **cell** holds one value.

That is all. A table that follows these rules is often called "tidy data".

The hard part is deciding *what one row means*. Before you can count, average or model anything, you must be able to finish the sentence "one row = one ...".

## Why it exists
Computers (and statistics) work by doing the same thing to every row. "Count the rows per site", "average this column", "fit a model where each row is one data point". That only gives the right answer if every row is the same kind of thing.

If some rows are visits and others are single birds, any count is nonsense. If one cell holds two values ("BK, windy"), no program can read it reliably.

## A tiny example
The raw file for point BK1001, first visit (real rows, a few columns shown):

| Date | PtNum | Survey | Wind | SpeciesCode | FlyOver |
|---|---|---|---|---|---|
| 7/8/2022 | BK1001 | 1 | 0 | INBU | 0 |
| 7/8/2022 | BK1001 | 1 | 0 | COYE | 0 |
| 7/8/2022 | BK1001 | 1 | 0 | RWBL | 0 |
| 7/8/2022 | BK1001 | 1 | 0 | BARS | 4 |
| 7/8/2022 | BK1001 | 1 | 0 | BLJA | 0 |
| 7/8/2022 | BK1001 | 1 | 0 | YBCH | 0 |

Here **one row = one species at one point-visit**. Notice that Wind repeats on every row: it belongs to the visit, not the bird.

To ask "how many species per visit?", we squash these rows into one:

| Date | PtNum | Survey | Wind | Richness |
|---|---|---|---|---|
| 7/8/2022 | BK1001 | 1 | 0 | 6 |

Now **one row = one point-visit**. All 6 species count, including the barn swallow (BARS): it had 4 birds flying over, but also 5 on the ground within 50 m, so it was using the place (see below).

## In my project
- **Raw table** (`SSP_AllBirdData_NewPointNums_NAOMIT.csv`): 7,742 rows, one species at one point-visit. 89 species, 416 points.
- **Habitat table** (`FieldVeg50m_RemoteVeg_JUNMASK_forDataRelease.csv`): 416 rows, one per survey point, with coordinates and habitat columns. Here one row = one point.
- **Clean table** (`datClean`, built in `GrasslandBirdRichness_Wrangling.R`): 1,130 rows, one point-visit each (at the 376 points with complete habitat data), with columns such as PtNum, Site, Date, Survey, Wind, Sky, Richness, FocalRichness and the habitat values. The habitat values repeat on each visit to the same point, just as Wind repeats in the raw table.
- The squashing is done by [[group_by and summarize]] (the code ran in ajay's RStudio on Oct 13; R is not installed in Claude's environment):

```r
richnessSum <-
  groundDat %>%
  group_by(PtNum, Date, Survey) %>%
  summarize(Richness = n_distinct(SpeciesCode),
            FocalRichness = n_distinct(SpeciesCode[SpeciesCode %in% focalSpecies]),
            .groups = "drop")
```

In words: "group the rows that share the same point, date and survey round, then count how many different species codes each group has, and how many of them are focal species".

- `groundDat` holds only rows with at least one bird on the ground, in any distance band. The BARS row above (Dist_50 = 5, plus 4 flying over) is one of 90 mixed rows this keeps. (The Sep 10 script's `FlyOver == 0` filter threw them away, giving 5 here instead of 6; fixed Oct 12 to 13.) See [[Why exclude fly-overs]].
- Before counting, the script trims stray spaces from codes (" FISP" vs "FISP"), which would otherwise make `n_distinct()` count one species twice. See [[str_trim()]].

## Common confusions
- **Same data, different row meaning.** The raw and clean tables describe the same surveys but answer different questions. Always say which one you mean.
- **Repeated values are not a mistake.** Wind repeating down the raw table is normal: it is a visit-level variable stored in a bird-level table.
- **Rows are not automatically independent.** Three rows for BK1001 (three visits) share a spot. See [[Sampling Unit]] and [[Pseudoreplication]].

## Connections
- **Builds on:** [[Variable and Observation]]
- **Leads to:** [[Data Frames]], [[Sampling Unit]], [[group_by and summarize]], [[Average (Mean)]]
- **Part of:** [[MOC 01 - Basics from Zero|MOC - Basics from Zero]]
- **Go deeper:** [[Dataset]], [[README Data Dictionary]]

> [!question]- Check yourself
> In the raw data, one row is one species at one point-visit. Why can't I just count raw rows per site to compare richness between sites?
> ?
> Raw row counts mix up "more species" with "more visits" (and with species seen at several visits). First collapse to one row per point-visit with the number of distinct species, then compare those.
