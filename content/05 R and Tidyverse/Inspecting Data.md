---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "Inspecting data means looking at a dataset's size, column types and value ranges before doing anything else with it."
aliases:
  - "str()"
  - "head()"
  - "summary()"
  - "glimpse()"
status: seedling
---

# Inspecting Data

Before driving off in a rental car, you walk around it, note the dents and check the fuel; two minutes now saves an argument later. **Inspecting data** is the same habit: looking at a dataset's size, column types and value ranges before doing anything else with it ([[Data Frame]]). It is the first step of every lab and of Zuur and colleagues' protocol for data exploration ([[Data Exploration Protocol]]).

A handful of functions do the work. `dim()` gives the number of rows and columns: is it what you expected? `str()`, or `glimpse()` in the tidyverse, lists each column's type and first values ([[Data Types in R]]). `head()` shows the first rows. `summary()` gives each column's minimum, quartiles, mean, maximum and number of `NA`s, and `table()` on each categorical column lists its categories with counts ([[table()]]). In the small example below, ten seconds of inspection find two problems: `summary()` shows a maximum tree cover of 999, a missing-value code rather than a measurement, and `table(d$site)` shows "a" and "A", the same site typed two ways, which a model would treat as two sites.

What to look for: impossible values (negative counts, 999), numbers stored as text, unexpected missing values ([[Missing Values]]), misspelled category levels, and extreme points worth a second look ([[Outlier]]). Looking at the data in a spreadsheet program is not a substitute, because it hides types and trailing spaces. Inspection is where the broader process of [[Data Exploration]] begins.

```r
d <- data.frame(site = c("A", "a", "B", "B"), tree = c(10, 30, 999, 50), birds = c(9, 6, NA, 3))
dim(d)
str(d)
summary(d)            # tree max 999: a missing-value code, not a measurement
table(d$site)         # "a" and "A": the same site typed two ways
head(d, 2)
```
Two problems found in ten seconds: a 999 code and inconsistent capitalisation.

## Connections
- **Builds on:** [[Data Frame]], [[Data Types in R]]
- **Leads to:** [[Data Exploration]], [[table()]], [[Missing Values]], [[Outlier]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

Name four functions for a first look at a dataset.
??
dim(), str(), head() and summary().
++++

What does summary() reveal about a numeric column?
??
Its minimum, quartiles, mean, maximum and number of NAs, exposing impossible values.
++++
