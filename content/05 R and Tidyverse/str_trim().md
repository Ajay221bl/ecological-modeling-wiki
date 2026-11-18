---
type: atomic
tags:
  - r-reproducibility
  - r-functions
  - data-cleaning
  - flashcards
aliases:
  - "str_trim"
  - "stringr"
  - "whitespace trimming"
status: seedling
---

# str_trim()
**In one line:** `str_trim()`, from the **stringr** package (part of the tidyverse), removes invisible spaces from the start and end of text, so `" FISP"` and `"FISP"` become the same code.

> [!info] Before this, it helps to know
> [[Four-Letter Species Codes]] (what FISP means) · [[Pipe]] (the `%>%` and `mutate()` used below) · [[R Objects and Assignment]] (text in quotes)

## Start from zero
To a person, `FISP` and ` FISP` (with a space in front) are obviously the same thing: Field Sparrow. To a computer, text is a row of characters, compared one by one. A space is a character. So `"FISP"`, `" FISP"` and `"FISP "` are three different values.

Stray spaces sneak in during data entry, often from copying and pasting, and they are invisible in a spreadsheet. "Whitespace" is the general word for spaces, tabs and similar blank characters. `str_trim()` deletes whitespace at the two ends of a piece of text (not in the middle).

## Why it exists
Any step that counts, groups, filters or joins on text will silently treat the spaced and unspaced versions as different categories. You get extra species, split observers and missing rows, with no error message. Trimming is cheap insurance, and it belongs at the very start of wrangling, before anything counts codes.

## A tiny example
One visit's species list, before and after trimming:

| Before | Distinct codes | After `str_trim()` | Distinct codes |
|---|---|---|---|
| "FISP", " FISP", "INBU" | 3 | "FISP", "FISP", "INBU" | 2 |

The true answer is 2 species. Without trimming, richness is inflated by 1.

## In my project
The raw CSV has three affected codes:
- `" FISP"` (1 row) and `"EUST "` (1 row, European Starling) in `SpeciesCode`, so the file shows 91 species codes instead of the real 89 (see [[Four-Letter Species Codes]]);
- `"EAL "` in `Obs` (479 rows), which splits one observer into two codes (11 observer codes instead of 10).

`GrasslandBirdRichness_Wrangling.R` trims both columns right after reading the data (added Oct 12 to 13; the Sep 10 script had no trim):

```r
rawDat <-
  rawDat %>%
  mutate(SpeciesCode = str_trim(SpeciesCode),
         Obs = str_trim(Obs),
         Site = str_extract(PtNum, "^[A-Za-z]+"))
```

Word by word: take `rawDat`, and then (`%>%`) `mutate` (change columns): replace `SpeciesCode` with its trimmed version, and (comma) replace `Obs` with its trimmed version, and make `Site` from the letters at the start of PtNum. Save the result back as `rawDat` (`<-`).

Where it matters: richness is counted with

```r
summarize(Richness = n_distinct(SpeciesCode),
          FocalRichness = n_distinct(SpeciesCode[SpeciesCode %in% focalSpecies]),
          .groups = "drop")
```

and `n_distinct()` counts distinct *text* values. If a visit had both `"FISP"` and `" FISP"`, it would count Field Sparrow twice and inflate [[Species Richness]] (see [[group_by and summarize]]). In this particular file each stray code is the only record of that species at its visit (HO55 and CR64), so per-visit richness happens to come out the same; but the species list, any single-species filter (`SpeciesCode == "FISP"` would miss a row) and any observer analysis ([[Observer Effects]]) would be wrong. A script should not rely on that luck: if the data are updated, the bug would bite.

How to check it worked (run in RStudio; R is not installed in Claude's environment):

```r
length(unique(rawDat$SpeciesCode))   # should be 89
length(unique(rawDat$Obs))           # should be 10
```

In words: `rawDat$SpeciesCode` is the SpeciesCode column (`$` picks a column by name), `unique()` keeps one copy of each value, and `length()` counts them. Everything after `#` is a comment that R ignores.

## Common confusions
- **"It removes all spaces."** Only leading and trailing ones. Text like "Field Sparrow" keeps its middle space.
- **"Trim after counting."** Too late: the counts are already wrong.
- **"Richness came out the same, so it does not matter."** It matters for species lists, filters and observers, and for any future data.

## Connections
- **Builds on:** [[Four-Letter Species Codes]], [[Pipe]], [[R Objects and Assignment]]
- **Leads to:** [[group_by and summarize]], [[Species Richness]], [[Data Exploration]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - R and Reproducibility]]
- **Go deeper:** [[Zuur et al. 2010]] (check the data before modelling)

> [!question]- Check yourself
> Why should `str_trim()` run before `group_by()` and `n_distinct()`, not after?
> ?
> Grouping and counting work on the text exactly as it is. If spaces are still there, " FISP" and "FISP" are already counted as two species by the time you trim, so the trim must come first.
