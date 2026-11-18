---
type: atomic
tags:
  - r-reproducibility
  - tidyverse
  - r-functions
  - flashcards
aliases:
  - "group_by()"
  - "summarize()"
  - "summarise"
  - "group_by"
status: seedling
---

# group_by and summarize
**In one line:** `group_by()` sorts the rows of a table into piles that share the same values, and `summarize()` boils each pile down to one row of summary numbers.

> [!info] Before this, it helps to know
> [[Pipe]] (the `%>%` "and then") · [[Data Frames]] (tables in R) · [[Sampling Unit]] (what one row should represent)

## Start from zero
Imagine a stack of index cards, one card per bird species seen at a point on a given day. You want "how many species at each point on each day". You would:
1. **Split:** sort the cards into piles, one pile per point and day.
2. **Apply:** count the different species in each pile.
3. **Combine:** write one line per pile into a new, shorter table.

That is "split, apply, combine". `group_by()` does the split. `summarize()` does the apply and the combine.

## Why it exists
Raw data often arrive at a finer level than the question. My CSV has one row per *species* per point-visit, but my [[Sampling Unit]] is the *point-visit*. Getting from one level to the other in code, rather than by hand, is what makes the [[Response Variable]] reproducible.

## A tiny example
Visit 2 of point BK1001 (11 July 2022) has 7 rows:

| PtNum | Date | SpeciesCode |
|---|---|---|
| BK1001 | 7/11/2022 | INBU |
| BK1001 | 7/11/2022 | CACH |
| BK1001 | 7/11/2022 | BLGR |
| BK1001 | 7/11/2022 | COYE |
| BK1001 | 7/11/2022 | RWBL |
| BK1001 | 7/11/2022 | BEVI |
| BK1001 | 7/11/2022 | FISP |

Group by PtNum and Date, then count distinct codes: one row, `BK1001, 7/11/2022, Richness = 7`. The visits on 7/8 and 7/12 become their own rows (6 and 6 with the script's ground-detection filter).

## In my project
The core of `GrasslandBirdRichness_Wrangling.R` (it ran in ajay's RStudio on Oct 13; R is not installed in Claude's environment, so test any change there):

```r
richnessSum <-
  groundDat %>%
  group_by(PtNum, Date, Survey) %>%
  summarize(Richness = n_distinct(SpeciesCode),
            FocalRichness = n_distinct(SpeciesCode[SpeciesCode %in% focalSpecies]),
            .groups = "drop")
```

Word by word:
- `richnessSum <-`: save the result under this name.
- `groundDat %>%`: take the ground detections (species seen only flying over are already removed), and then...
- `group_by(PtNum, Date, Survey)`: make one pile per unique combination of these three columns (commas separate them). One point, on one date, in one survey round is a point-visit (see [[Why the point-visit is the sampling unit]]).
- `summarize(Richness = n_distinct(SpeciesCode), ...)`: for each pile, make a new column called `Richness` holding the number of *distinct* (different) species codes. That is [[Species Richness]].
- `FocalRichness = ...`: the same count, but only for codes that are `%in%` the list of six [[Focal Species]]. The square brackets keep just those codes before counting.
- `.groups = "drop"`: afterwards, forget the piles, so later steps do not accidentally work pile by pile.

Dr. Roberts' version is `summarize(BirdRichness = length(unique(species)))`, grouped by `point` only, because his points were summarized across visits. Same idea, different sampling unit.

Before that, the script builds the list of every visit, with its detection conditions:

```r
visitDat <-
  rawDat %>%
  group_by(PtNum, Site, Date, Survey) %>%
  summarize(Wind = first(Wind),
            Sky = first(Sky),
            .groups = "drop")
```

`first()` takes the first value in each pile. That is safe because Wind and Sky never change within a visit (checked in the data). It uses `rawDat`, not the ground detections, so every one of the 1,250 visits is listed, even the 2 where every bird was a fly-over. `Site` is included just to carry it along; it never varies within a point.

The two tables are then joined with `left_join(visitDat, richnessSum, by = c("PtNum", "Date", "Survey"))`, keeping every visit, and `replace_na(Richness, 0)` gives a fly-over-only visit a richness of 0 instead of dropping it (HO55 on Jun 20, 2022 is one). (The Sep 10 script started the join from the richness table, which dropped those 2 visits; fixed Oct 12 to 13.) See [[R Scripts Walkthrough]] for the full chain.

Things to know:
- `n_distinct()` would treat `" FISP"` and `"FISP"` as different codes, which is why the script runs [[str_trim()]] first.
- Two points (DC67 and HO55) have 4 visits, with a Survey number repeated on different dates; grouping by Date keeps them separate.

## Common confusions
- **`n()` vs `n_distinct()`.** `n()` counts rows; `n_distinct(x)` counts different values. If a species appeared on two rows of one visit, `n()` would count it twice.
- **Forgetting `.groups = "drop"`.** The table stays grouped and later steps can give surprising per-group results.
- **Grouping by too few columns.** Leave out Date and you merge different visits into one pile.

## Connections
- **Builds on:** [[Pipe]], [[Sampling Unit]], [[Data Frames]]
- **Leads to:** [[Species Richness]], [[Mean-Variance Relationship]], [[glmer()]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - R and Reproducibility]]

> [!question]- Check yourself
> What would richness mean if I grouped only by `PtNum`?
> ?
> It would be the total number of species at each point across all its visits, a different sampling unit with more effort per row. I would lose the repeated visits that the random intercept for point is built to handle.
