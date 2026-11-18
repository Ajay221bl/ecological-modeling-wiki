---
type: atomic
tags:
  - r-reproducibility
  - metadata
  - flashcards
aliases:
  - "README"
  - "data dictionary"
  - "metadata"
  - "Data Dictionary"
status: seedling
---

# README Data Dictionary
**In one line:** A README data dictionary is a plain-text file that says where the data came from and what every column means (and in what units), so a stranger could use the data correctly without asking you.

> [!info] Before this, it helps to know
> [[Variable and Observation]] (a column is a variable) · [[Data Table Rows and Columns]] (how a data file is laid out)

## Start from zero
Open a spreadsheet you have never seen. One column is called `Sky` and holds numbers from 0 to 5. What does 5 mean? Clear sky? Heavy rain? You cannot tell. Another column is `Dist_400`. Is that a distance in metres, or a count of birds out to 400 m?

A **data dictionary** is the key to the map. For each column it says what the values mean and what units they are in. A **README** is a file whose name literally says "read me first". Putting the dictionary inside a README means it travels with the data.

A README also records **provenance**: who collected the data, when, how, and what to cite. "Metadata" is the general word for this kind of data about the data.

## Why it exists
Without a key, people guess. Wrong guesses become wrong models, and nobody notices because the code still runs. A README prevents that, makes the data reusable, and is one of the required parts of the zipped project for the Report.

## A tiny example
Here is the same row with and without a dictionary.

| Column | Value | Without a key | With the key |
|---|---|---|---|
| Dist_50 | 5 | 5 metres? | 5 birds of this species within 50 m |
| FlyOver | 4 | ? | 4 birds of this species flying over the point |
| Wind | 0 | ? | a wind code (0 is the calmest) |

That row is real: Barn Swallow (BARS) at BK1001 on 8 July 2022. With the key you can see it was both on the ground nearby and overhead, which matters for the fly-over rule.

## In my project
`README_for_GrasslandBirdSpeciesRichness.txt` follows the style of Dr. Roberts' `README_for_FireLegaciesInEasternPonderosaPine_RobertsCP.txt`: a citation, then `column = meaning` lines for each dataset. It was updated on ajay's Mac on **Oct 13**, and it now contains, in order:
- **Title, course and author.**
- **Provenance:** the USGS data release ([[Roberts et al. 2025]]) and the paper it supports ([[Berry et al. 2026]]).
- **The five properties with names and years:** BK Bald Knob NWR (2022), CR Camp Robinson SUA (2023), DC Dark Corner tract of Cache River NWR (2022), HB Holla Bend NWR (2023), HO Howell tract of Cache River NWR (2022), with a note that property and year cannot be separated ([[Study Sites]], [[Why site and year cannot be separated]]).
- **How to run:** open `GrasslandBirdRichness.Rproj` in RStudio so `here()` finds the files, then source the Analysis script, which sources the wrangling script itself; about a minute ([[here()]], [[RProject]]).
- **The bird file:** one row per species per visit, 7,742 rows, 416 points; an honest missing-values note (Dist_50 has 1 missing value and FlyOver has 5, despite "NAOMIT" in the name); the stray spaces in " FISP", "EUST " and "EAL " and that the script trims them ([[str_trim()]]); then every column, for example `Dist_50 = count of individuals of this species detected within 50 m of the point` ([[Distance Bands]], [[Fly-over Detections]]).
- **The habitat file:** one row per point, joined by `PtNum`; the columns used (coordinates, the three spatial covariance columns with their window sizes and the 39 flood-masked NAs, `WD50`, `FO50`, `SC50`); and why the field vegetation columns are not used ([[Dataset]]).
- **The derived table `datClean`:** built by the script, not stored as a file; 1,130 point-visits at 376 points. It defines `Site`, `Year`, `Richness` (species counted on the ground in any distance band, so fly-over-only detections are excluded), `FocalRichness` (the six focal species), `SpCov3/9/27`, `Tree50` = WD50 + FO50, `Scrub50` = SC50, and the standardized `_z` versions.
- **Scripts:** one paragraph on what each script does ([[Wrangling vs Analysis Scripts]]).
- **Outputs:** each of the 4 CSVs in the Results folder and 5 PNGs in the Figures folder, with a one-line description.

The old errors are fixed. The Sep 10 README claimed "Rows with missing values have already been removed from this file", which was false, and its fly-over wording did not match the code's `FlyOver == 0` filter. Now the missing values are stated, and the Richness definition matches the script's ground-detection filter ([[Why exclude fly-overs]]).

## Common confusions
- **"The column names are self-explanatory."** To you, today. Not to a reader, or to you next year.
- **"The README is a formality."** A wrong README is worse than none: readers trust it and skip checking.
- **"Only raw columns need describing."** Columns you *create* (like Richness) need definitions most, because they encode your decisions.

## Connections
- **Builds on:** [[Reproducibility]], [[Variable and Observation]], [[Dataset]]
- **Leads to:** [[Wrangling vs Analysis Scripts]], [[Four-Letter Species Codes]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - R and Reproducibility]]
- **Go deeper:** [[Roberts et al. 2025]] (the data release the README cites)

> [!question]- Check yourself
> Why is a README that claims "no missing values" worse than no claim at all?
> ?
> A reader trusts it and skips checking, so the hidden NAs can silently change counts or break code. A wrong dictionary spreads errors; an honest one lets the reader handle them.
