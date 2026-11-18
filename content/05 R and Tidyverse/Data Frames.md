---
type: atomic
tags:
  - r-reproducibility
  - r-basics
  - flashcards
aliases:
  - "data frame"
  - "data frames"
  - "dataframe"
  - "tibble"
status: seedling
---

# Data Frames

**In one line:** a data frame is R's version of a spreadsheet table: columns are variables, rows are observations, and each column holds one kind of value.

> [!info] Before this, it helps to know
> [[Data Table Rows and Columns]] (the tidy table idea) · [[R Objects and Assignment]] (a data frame is stored in an object)

## Start from zero
You already know a spreadsheet: named columns across the top, one record per row. A **data frame** is that table living inside R, stored in an object with a name like `rawDat` or `datClean`.

Under the hood, a data frame is a set of columns stuck side by side. Each column is a **vector**: a list of values that are all the same kind (all numbers, or all text, or all TRUE/FALSE). Every column has the same length, which is the number of rows.

So a data frame can mix kinds *across* columns (text in PtNum, numbers in Wind) but not *within* a column.

A **tibble** is the tidyverse's slightly modernised data frame. `read_csv()` gives you a tibble. For everything in my project you can treat the two as the same.

## Why it exists
Statistical functions need data in a predictable shape. A model function like `glmer()` expects to be told "the data are in this table; find columns named Richness, Site, Wind". The data frame is that shared shape. Almost every function in my scripts takes a data frame in and gives one back.

Forcing each column to be one kind of value also catches mistakes. If a column you expected to be numbers comes in as text, something in the file is wrong (a stray letter, a typo).

## A tiny example
Making a small one by hand:

```r
toy <- data.frame(PtNum    = c("BK1001", "BK1001", "BK1001"),
                  Survey   = c(1, 2, 3),
                  Richness = c(5, 7, 6))
```

| PtNum | Survey | Richness |
|---|---|---|
| BK1001 | 1 | 5 |
| BK1001 | 2 | 7 |
| BK1001 | 3 | 6 |

Useful ways to look at it:
- `toy$Richness` gives one column as a vector: 5 7 6.
- `mean(toy$Richness)` gives 6.
- `nrow(toy)` gives 3.
- `str(toy)` lists each column and its kind.

## In my project
- `rawDat <- read_csv(here(DataPath, "SSP_AllBirdData_NewPointNums_NAOMIT.csv"))` makes a data frame of 7,742 rows (one species at one point-visit) and 12 columns, from Obs to FlyOver.
- `habDat` holds the habitat file: one row per survey point (416 rows), with coordinates, spatial covariance and land cover.
- `datClean` is the analysis data frame: one row per point-visit, 1,130 rows at the 376 points with complete habitat data. Its columns include PtNum, Site, Date, Survey, Year, Wind, Sky, Richness, FocalRichness and the habitat values with their standardized `_z` versions ([[README Data Dictionary]]).
- The scripts inspect data frames with exactly the tools above (they ran in ajay's RStudio on Oct 13; R is not installed in Claude's environment):

```r
str(datClean)                 # each column and its type
table(datClean$Site)          # how many point-visits per site
nrow(datClean)                # should be one row per point-visit
colSums(is.na(datClean))      # count missing values in each column
```

- Building `datClean` takes two `left_join()` steps: the visit list plus richness (matching on PtNum, Date and Survey), then that plus the habitat table (matching on PtNum).
- `colSums(is.na(...))` is how you spot missing values. In the raw bird data Dist_50 has 1 and FlyOver has 5; in the habitat file spatial covariance is missing at 39 points. The README now says so (it once claimed there were none).

## Common confusions
- **Column types matter.** Dates read from the CSV arrive as text ("7/8/2022") until `as.Date()` converts them. Categories arrive as text until `factor()` converts them. See [[Factors]].
- **`$` needs exact spelling.** `datClean$richness` (lower case r) returns NULL, not an error, which can quietly break later steps.
- **One row is not always one observation in the statistical sense.** In `rawDat` one row is one species record; the sampling unit is the point-visit. See [[Sampling Unit]].

## Connections
- **Builds on:** [[Data Table Rows and Columns]], [[R Objects and Assignment]]
- **Leads to:** [[Factors]], [[Pipe]], [[group_by and summarize]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - R and Reproducibility]]
- **Go deeper:** [[Dataset]] (what every column means)

> [!question]- Check yourself
> Why can't a single data frame column hold both the number 3 and the text "BK"?
> ?
> Each column is a vector, and a vector holds one kind of value. R would turn the whole column into text ("3" and "BK"), so the 3 would no longer behave like a number.
