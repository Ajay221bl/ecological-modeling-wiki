---
type: atomic
tags:
  - survey-design
  - data-cleaning
  - flashcards/eco/survey
description: "Four-letter species codes are short standard nicknames for bird species (DICK = Dickcissel, NOBO = Northern Bobwhite) so observers can write fast in the field."
aliases:
  - "alpha codes"
  - "banding codes"
  - "SpeciesCode"
  - "species codes"
status: seedling
---

# Four-Letter Species Codes

Birds call over each other during a count, and writing "Northern Bobwhite" each time is slow; "NOBO" is quick and clear. North American bird surveys use a standard set of these **four-letter species codes**, often called banding or alpha codes. The rule of thumb: a two-word name takes two letters from each word (**Fi**eld **Sp**arrow = FISP, **Eu**ropean **St**arling = EUST), and a one-word name takes its first four letters (**Dick**cissel = DICK). There are extra rules for clashes, so always check the official list rather than guessing. In a data file the code sits in one column, one [[Variable and Observation|variable]] whose values are text ([[Data Table Rows and Columns]]).

They are fast and consistent in the field, but there is a computer twist. To R a code is a string of characters ([[Strings in R]]), compared letter by letter, spaces included, so "FISP" and " FISP" look the same to you but are two different values to R, and a function that counts [[unique()|distinct values]], such as `n_distinct()`, counts them as two species. Take a visit with codes typed as FISP, DICK and "FISP " (trailing space). You see 2 species; R sees 3. After trimming spaces with [[str_trim()]], R also sees 2. That is exactly what happened in the grassland bird file: after trimming it has 89 species codes, each exactly four letters, but the raw file shows 91 because of " FISP" (1 row, against 296 for "FISP") and "EUST " (1 row, against 16). The Oct 13 wrangling script trims species and observer codes right after reading the data ([[Observer Effects]]), then counts species per visit with [[group_by()]] and `summarize()`, as in the code below: Richness is the number of different codes at a visit, and FocalRichness the number of those in the list of six [[Focal Species]].

Three confusions. "It looks right, so it is right": invisible spaces are real characters to R, so trim first. Codes are not always the first letters, since clashes get special codes. And rows per code are not birds: rows count visits where a species was recorded. The Sep 10 script had no trim; no single visit held both spellings, so per-visit [[Species Richness]] was never inflated, but the species list showed 91 instead of 89 and any per-species summary would have split Field Sparrow and European Starling. Common codes in the data: INBU (Indigo Bunting, 873 rows), NOCA (Northern Cardinal, 691), RWBL (Red-winged Blackbird, 510), DICK ([[Dickcissel]], 331), FISP (297) and NOBO ([[Northern Bobwhite]], 204); aerial species such as CHSW (Chimney Swift) and TUVU (Turkey Vulture) appear mostly as [[Fly-over Detections]]. The codes are documented in the project [[README]].

```r
library(stringr); library(dplyr)
codes <- c("FISP", "DICK", "FISP ")
n_distinct(codes)              # 3: R sees "FISP " as a different value
n_distinct(str_trim(codes))    # 2: trimming the space fixes it
```

## Connections
- **Builds on:** [[Variable and Observation]], [[Data Table Rows and Columns]], [[Strings in R]], [[Point Count Survey]], [[unique()]]
- **Leads to:** [[str_trim()]], [[group_by()]], [[Species Richness]], [[Focal Species]], [[Observer Effects]], [[README]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]], [[MOC 12 - Reproducible Coding and Figures|MOC - Reproducible Coding and Figures]]
- **Go deeper:** [[Fly-over Detections]], [[Dickcissel]], [[Northern Bobwhite]]

## Flashcards

Why does R count "EUST" and "EUST " as two species, and what one-line fix prevents it?
??
R compares text exactly, so a trailing space makes a different value and `n_distinct()` counts it separately. Trimming with `str_trim(SpeciesCode)` before counting makes them identical.
++++

What is the code for a two-word bird name?::Two letters from each word, such as FISP for Field Sparrow (with special rules for clashes).
