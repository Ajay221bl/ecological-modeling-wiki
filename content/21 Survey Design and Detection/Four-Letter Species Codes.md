---
type: atomic
tags:
  - survey-design
  - data-cleaning
  - flashcards
aliases:
  - "alpha codes"
  - "banding codes"
  - "SpeciesCode"
  - "species codes"
status: seedling
---

# Four-Letter Species Codes
**In one line:** Short four-letter nicknames for bird species (DICK = Dickcissel, NOBO = Northern Bobwhite) so observers can write fast in the field.

> [!info] Before this, it helps to know
> [[Data Table Rows and Columns]] (the code sits in one column) · [[Variable and Observation]] (a species code is a text variable)

## Start from zero
You stand in a field for a few minutes and write down what you see and hear. Birds call over each other. Writing "Northern Bobwhite" each time is slow; "NOBO" is quick and clear.

North American bird surveys use a standard set of these codes, often called banding codes or alpha codes. The rule of thumb:
- Two-word names take two letters from each word: **Fi**eld **Sp**arrow = FISP, **Eu**ropean **St**arling = EUST.
- One-word names take the first four letters: **Dick**cissel = DICK.
(There are extra rules for clashes, so always check the official list rather than guessing.)

## Why it exists
Speed and consistency in the field. But there is a computer twist.

To R, a code is **text** (a "string"). R compares text letter by letter, including spaces. So "FISP" and " FISP" (with a leading space) look the same to you but are **two different values** to R. A function that counts different values, like `n_distinct()`, would count them as two species.

## A tiny example
A visit has these codes typed in:

| Row | SpeciesCode as typed |
|---|---|
| 1 | FISP |
| 2 | DICK |
| 3 | `FISP ` (trailing space) |

You see 2 species. R's `n_distinct()` sees 3. After trimming spaces with [[str_trim()]], R also sees 2.

## In my project
After trimming spaces, the file has **89 species codes**, every one exactly four letters. The raw file shows 91 because of two stray spaces:
- " FISP" (leading space, 1 row) vs "FISP" (296 rows): Field Sparrow
- "EUST " (trailing space, 1 row) vs "EUST" (16 rows): European Starling

GrasslandBirdRichness_Wrangling.R (Oct 13 version) trims the spaces right after reading the data, on species **and** observer codes ([[str_trim()]], [[Observer Effects]]):

```r
  mutate(SpeciesCode = str_trim(SpeciesCode),
         Obs = str_trim(Obs),
```

Then it counts species per visit:

```r
  summarize(Richness = n_distinct(SpeciesCode),
            FocalRichness = n_distinct(SpeciesCode[SpeciesCode %in% focalSpecies]),
```

In words: "for each visit, count how many different SpeciesCode values there are and call it Richness; then count how many of them are in the list of six focal codes and call it FocalRichness" ([[group_by and summarize]], [[Functions and Arguments]], [[Focal Species]]).

History: the Sep 10 script had no trim (fixed Oct 13). Even then, no single visit held both spellings, so per-visit richness was never inflated. But the species list showed 91 "species" instead of 89, and any per-species summary would have split Field Sparrow and European Starling.

Common codes in my data: INBU (Indigo Bunting, 873 rows), NOCA (Northern Cardinal, 691), RWBL (Red-winged Blackbird, 510), DICK ([[Dickcissel]], 331), FISP (297), NOBO ([[Northern Bobwhite]], 204). Aerial species such as CHSW (Chimney Swift), TUVU (Turkey Vulture) and MIKI (Mississippi Kite) appear mostly as [[Fly-over Detections]].

## Common confusions
- **"It looks right, so it is right."** Invisible spaces are real characters to R. Trim first.
- **"Codes are always the first letters."** Mostly, but clashes get special codes; look them up.
- **"Rows per code = number of birds."** Rows count visits where the species was recorded, not individuals.

## Connections
- **Builds on:** [[Point Count Survey]], [[README Data Dictionary]], [[Data Table Rows and Columns]]
- **Leads to:** [[str_trim()]], [[Species Richness]], [[group_by and summarize]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]], [[MOC 12 - Reproducible Coding and Figures|MOC - R and Reproducibility]]

> [!question]- Check yourself
> Why does R count "EUST" and "EUST " as two species, and what one-line fix prevents it?
> ?
> R compares text exactly, so a trailing space makes a different value and `n_distinct()` counts it separately. Trimming with `str_trim(SpeciesCode)` before counting makes them identical.
