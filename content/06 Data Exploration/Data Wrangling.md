---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "Data wrangling is the work of turning raw, messy files into one clean, tidy table ready for plotting and modeling."
aliases:
  - "Data cleaning"
  - "Data preparation"
  - "Data munging"
status: seedling
---

# Data Wrangling

Preparing vegetables before cooking, washing, peeling and chopping, takes most of the time, nobody admires it, and the meal fails without it. **Data wrangling** is the work of turning raw, messy files into one clean, tidy table ready for plotting and modeling ([[Tidy Data]]). It usually runs: import each raw file ([[Reading Data into R]]); fix names and types, so numbers are numbers, categories are factors and dates are dates; fix values, such as typos in categories and missing-value codes like 999 or "n/a"; reshape to tidy form ([[pivot_longer()]]); combine tables ([[Joins]]); derive new variables, such as [[Species Richness|richness]] from a species list or presence from counts; and save the clean table, for example to `data/processed/`.

The code below does most of this in one pipe with [[Tidyverse]] verbs. A raw table has awkward names, years stored as text, site codes in mixed case ("sa-02" and "SA-02") and a 999 that means "not counted". The pipe renames the columns, converts the codes to upper case and the years to integers, turns 999 into `NA`, splits the code into site and plot, and reshapes the species columns into one count column. The last line computes species richness per site and year, the number of species with a count above zero. Homework 1 and 3 in the course are mostly work of this kind ([[Course Website]]).

Every one of these steps is a decision, which is why they belong in a script rather than being done by hand in a spreadsheet, where the decisions are invisible and unrepeatable. Wrangling is not separate from analysis: choices made here, such as what counts as missing or whether two spellings are the same site, change the results. Keeping wrangling in its own script makes it easy to rerun and review ([[Splitting Scripts]]), and the clean table is where [[Data Exploration]] begins.

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

## Connections
- **Builds on:** [[Tidy Data]], [[Tidyverse]], [[Species Richness]]
- **Leads to:** [[Data Exploration]], [[Splitting Scripts]], [[Joins]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

What is data wrangling?
??
Importing, cleaning, reshaping, combining and deriving variables to turn raw files into a tidy analysis table.
++++

Why script every wrangling step?
??
Each step is a decision that affects results, and only code makes those decisions visible and repeatable.
++++
