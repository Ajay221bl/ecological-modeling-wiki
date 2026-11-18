---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - exploration
aliases:
  - "Homework 1"
  - "HW1"
  - "Valles Caldera homework"
  - "Riparian vegetation homework"
  - "Data wrangling homework"
status: seedling
---

# Homework 1 - Riparian Plant Diversity

> [!summary] In plain words
> Homework 1 is a data wrangling and exploration exercise on 13 years of riparian plant data from a grazing exclosure experiment, and the approach is to tidy the site codes, compute richness and inverse Simpson per row, then explore outliers, balance, relationships, collinearity and the year × treatment interaction before any model.

## The question
How do I approach Homework 1, and what does each question teach?

## Built from
- [[Exclosure]], [[Grazing]], [[Riparian Zone]]: the ecology and the C, LE, UE design.
- [[Strings in R]], [[separate_wider_delim()]], [[mutate()]]: splitting the site code.
- [[Species Richness]], [[Inverse Simpson Index]]: the two responses.
- [[Boxplot]], [[Histogram]], [[Cleveland Dot Plot]]: outliers (Q3).
- [[Balanced Data]]: Q4.
- [[Collinearity]], [[Interaction Plot]]: Q6 and Q7.
- [[Data Exploration Protocol]]: the order of the whole thing.

## The reasoning, step by step
1. **Read the data and look at it.** 203 rows, one per plot per year, with year, site and treatment and then 177 species columns of point-intercept hits out of 300 ([[Riparian Zone]]).
2. **Q1, split the site code.** "RS1C1" holds the site (RS1) and the plot code (C1). The site is always the first 3 characters, so `substr(site, 1, 3)`; the plot code is the rest, `substr(site, 4, nchar(site))`, which handles both 1- and 2-character codes such as "C" and "C1". Create plotCode before you overwrite site, or the information is gone ([[Strings in R]]).
3. **Q2, the responses.** Richness is the number of species columns greater than zero in each row, `rowSums(species > 0)`; inverse Simpson is `vegan::diversity(species, "invsimpson")`. Select the species columns by position or by excluding the metadata, never by typing 177 names ([[Inverse Simpson Index]]).
4. **Look before trusting the numbers.** All 39 rows from 2014 have zero hits in every species column and one NA column: they are empty records, not plots with no plants. A richness of 0 there is false, and inverse Simpson is undefined (0/0). Flag them, say so in a comment, and treat them as missing rather than as real zeros ([[Missing Values]]).
5. **Q3, outliers.** A boxplot and a histogram of each response; points far from the rest deserve a check of the raw row before you decide anything. A value is not wrong just because it is extreme ([[Outlier]]).
6. **Q4, balance.** `table(site, year)` and `table(treatment, year)`. Here there are 96 control rows but only 51 LE and 56 UE, years 2009 to 2013 are missing, RS1 has more plots than the rest, and RS6 to RS8 are absent in 2014. So it is not balanced, and comparisons between treatments partly mix in differences between sites and years ([[Balanced Data]]).
7. **Q5, relationships.** Boxplots of each response by treatment, by site and by year, or a scatter against year coloured by treatment. Describe what you see in words: direction, size and how consistent across sites.
8. **Q6, collinearity.** All three predictors are categorical (year can be treated either way). Collinearity among them comes from imbalance: if one site was only measured in some years, site and year carry overlapping information. A table, or `performance::check_collinearity()` on a fitted model, shows it ([[Collinearity]], [[Variance Inflation Factor]]).
9. **Q7, interaction.** An interaction plot of mean richness by year with one line per treatment. If the exclosure lines pull away from the control over time, recovery is building up and year × treatment belongs in a model ([[Interaction Plot]]).

**A worked example in numbers.** Over 2002 to 2008 richness ranges from 23 to 64 species per plot (mean 40.5) and inverse Simpson from 4.9 to 26.7 (mean 12.8): a typical plot has about 40 species but behaves like about 13 equally common ones, because a few species dominate the cover.

## So in practice
Treat the homework as Zuur's protocol on a real dataset: every question is one step, and the written comments (what you see and what it means for a later model) are what earn the points.

## In R
```r
library(dplyr); library(vegan)
url <- "https://raw.githubusercontent.com/LivingLandscapes/Course_EcologicalModeling/master/data/rip.dat.02-14.csv"
dat <- read.csv(url)
dat <- dat %>% mutate(plotCode = substr(site, 4, nchar(site)), site = substr(site, 1, 3)) %>% relocate(plotCode, .after = site)
sp <- dat[, -(1:4)]                                                   # species columns only
empty <- rowSums(sp, na.rm = TRUE) == 0
table(year = dat$year, empty)                                         # the 2014 rows are empty records
dat$Richness_total <- ifelse(empty, NA, rowSums(sp > 0, na.rm = TRUE))
dat$Diversity_InvSimp <- ifelse(empty, NA, diversity(replace(sp, is.na(sp), 0), "invsimpson"))
round(sapply(dat[, c("Richness_total", "Diversity_InvSimp")], summary), 1)
table(dat$treatment, dat$year)                                         # balance
```

## What would go wrong otherwise
Computing richness on the empty 2014 rows and reporting that plant richness collapsed to zero in the final year.

## Explain it back
- Why must you create plotCode before overwriting site?
- Why are the 2014 rows not real zeros, and what should you do with them?

*Pass test:* you can explain what each of the seven questions checks and why it comes before modeling.

## Connections
- **Related:** [[How to Approach a Course Homework]], [[Why explore data before modeling]], [[Homework 2 - Coral Bleaching]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 04 - Data Exploration|MOC - Data Exploration]], [[MOC 22 - Homework|MOC - Homework]]

## Flashcards

How do you get the plot code from "RS1C1" in R?
??
substr(site, 4, nchar(site)), which gives "C1".
++++

What is odd about the 2014 rows in Homework 1?
??
Every species column is zero (one is NA), so they are empty records and their richness and diversity are missing, not zero.
++++

Is the Homework 1 design balanced?
??
No: 96 control vs 51 LE and 56 UE rows, no data 2009 to 2013, uneven plots per site, and three sites missing in 2014.
++++
