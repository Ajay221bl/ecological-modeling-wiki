---
type: atomic
tags:
  - r-reproducibility
  - r-functions
  - data-cleaning
  - flashcards/eco/r
description: "str_trim(), from the stringr package (part of the tidyverse), removes invisible spaces from the start and end of text, so \" FISP\" and \"FISP\" become the same code."
aliases:
  - "str_trim"
  - "whitespace trimming"
status: seedling
---

# str_trim()

To a person, `FISP` and ` FISP` (with a space in front) are obviously the same thing: Field Sparrow, written as one of the [[Four-Letter Species Codes]]. To a computer, text is a row of characters compared one by one ([[Strings in R]]), and a space is a character, so `"FISP"`, `" FISP"` and `"FISP "` are three different values. Stray spaces sneak in during data entry, often from copying and pasting, and they are invisible in a spreadsheet. **`str_trim()`**, from the stringr package in the [[Tidyverse]], removes *whitespace* (spaces, tabs and similar blank characters) from the two ends of a piece of text, but not from the middle: "Field Sparrow" keeps its middle space.

Why bother? Any step that counts, groups, filters or [[Joins|joins]] on text silently treats the spaced and unspaced versions as different categories, giving extra species, split observers and missing rows with no error message. Take one visit's list "FISP", " FISP", "INBU": it has 3 distinct codes before trimming and 2 after, and the true answer is 2 species, so without trimming richness is inflated by 1. The raw project CSV has three affected codes: `" FISP"` (1 row) and `"EUST "` (1 row, European Starling) in `SpeciesCode`, which makes the file show 91 species codes instead of the real 89, and `"EAL "` in `Obs` (479 rows), which splits one observer into two (11 observer codes instead of 10). The wrangling script trims both columns right after reading the data, inside [[mutate()]] (which changes or adds columns), joined by the [[Pipe]] `%>%` ("and then"):

```r
# norun: needs the project data
rawDat <-
  rawDat %>%
  mutate(SpeciesCode = str_trim(SpeciesCode),
         Obs = str_trim(Obs),
         Site = str_extract(PtNum, "^[A-Za-z]+"))
length(unique(rawDat$SpeciesCode))   # should be 89
length(unique(rawDat$Obs))           # should be 10
```

The two check lines use [[unique()]], which keeps one copy of each value, and `length()`, which counts them; everything after `#` is a comment R ignores. Trimming must come first, at the very start of wrangling, because richness is counted with `n_distinct(SpeciesCode)` after [[group_by()]], and that counts distinct text values exactly as they are, so by the time you trimmed, Field Sparrow would already have been counted twice ([[Species Richness]]). In this particular file each stray code happens to be the only record of that species at its visit (HO55 and CR64), so per-visit richness comes out the same, but the species list, any single-species filter (`SpeciesCode == "FISP"` would miss a row) and any observer analysis ([[Observer Effects]]) would be wrong, and an updated data file could make the bug bite. The trim was added Oct 12 to 13; the Sep 10 script had none.

```r
library(stringr)
codes <- c("FISP", " FISP", "INBU")
length(unique(codes))             # 3
length(unique(str_trim(codes)))   # 2
```

## Connections
- **Builds on:** [[Four-Letter Species Codes]], [[Strings in R]], [[Tidyverse]], [[mutate()]], [[Pipe]], [[Joins]]
- **Leads to:** [[unique()]], [[group_by()]], [[Species Richness]], [[Observer Effects]], [[Data Exploration]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - R and Reproducibility]]
- **Go deeper:** [[Data Table Rows and Columns]], [[R Scripts Walkthrough]], [[Zuur et al. 2010]]

## Flashcards

Why should `str_trim()` run before `group_by()` and `n_distinct()`, not after?
??
Grouping and counting work on the text exactly as it is. If spaces are still there, " FISP" and "FISP" are already counted as two species by the time you trim, so the trim must come first.
++++

Does `str_trim()` remove the space in "Field Sparrow"?::No. It only removes whitespace at the start and end of the text.
