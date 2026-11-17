---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "Data cleaning"
  - "Data preparation"
  - "Data munging"
status: seedling
---

# Data Wrangling

**In one line:** data wrangling is the work of turning raw, messy files into one clean, tidy table ready for plotting and modeling.

> [!info] Before this, it helps to know
> [[Tidy Data]] (the target shape) · [[Tidyverse]] (the tools)

## The everyday picture
Preparing vegetables before cooking. Washing, peeling, chopping. Nobody admires it, it takes most of the time, and the meal fails without it.

## Start from zero
1. **Import** each raw file ([[Reading Data into R]]).
2. **Fix names and types.** Clear column names, numbers as numbers, categories as factors, dates as dates.
3. **Fix values.** Typos in categories, missing-value codes such as 999 or "n/a".
4. **Reshape to tidy** ([[pivot_longer()]]).
5. **Combine tables** ([[Joins]]).
6. **Derive variables.** Richness from a species list, presence from counts, centred predictors.
7. **Save the clean table** to `data/processed/`.
*Why all in a script:* every one of these steps is a decision. Done by hand in a spreadsheet, the decisions are invisible and unrepeatable.

## In R
```r
library(dplyr); library(tidyr)
raw <- data.frame(Site.Code = c("VC-01", "VC-01", "sa-02", "SA-02"), Year = c("2020", "2021", "2020", "2021"),
                  robin = c(2, 3, 0, 999), wren = c(1, 0, 4, 2))
clean <- raw |>
  rename(code = Site.Code, year = Year) |>
  mutate(code = toupper(code), year = as.integer(year), across(c(robin, wren), \(x) na_if(x, 999))) |>
  separate_wider_delim(code, "-", names = c("site", "plot")) |>
  pivot_longer(c(robin, wren), names_to = "species", values_to = "count")
clean
clean |> group_by(site, year) |> summarise(richness = sum(count > 0, na.rm = TRUE), .groups = "drop")
```

## In the course
Homework 1 and Homework 3 are mostly wrangling: splitting codes, computing richness, joining tables ([[Course Website]]).

## Common confusions
- **"Wrangling isn't analysis."** Choices made here, such as what counts as missing, change the results.

## Explain it back
- Why should wrangling be scripted?

*Pass test:* you can list the usual wrangling steps in order.

## Connections
- **Builds on:** [[Tidy Data]], [[Tidyverse]]
- **Leads to:** [[Data Exploration]], [[Splitting Scripts]], [[Joins]]
- **Part of:** [[MOC - Data Exploration]]

## Flashcards

What is data wrangling?
??
Importing, cleaning, reshaping, combining and deriving variables to turn raw files into a tidy analysis table.
++++

Why script every wrangling step?
??
Each step is a decision that affects results, and only code makes those decisions visible and repeatable.
++++
