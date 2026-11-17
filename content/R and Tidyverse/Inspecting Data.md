---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "str()"
  - "head()"
  - "summary()"
  - "glimpse()"
status: seedling
---

# Inspecting Data

**In one line:** inspecting data means looking at a dataset's size, column types and value ranges before doing anything else with it.

> [!info] Before this, it helps to know
> [[Data Frame]] (what you inspect) · [[Data Types in R]] (what you check)

## The everyday picture
Checking a rental car before driving off. Walk around it, note the dents, check the fuel. Two minutes now saves an argument later.

## Start from zero
1. **`dim()`:** rows and columns. Is that what you expected?
2. **`str()` or `glimpse()`:** each column's type and first values.
3. **`head()`:** the first six rows.
4. **`summary()`:** min, quartiles, mean, max and NA count per column. *Look for:* impossible values (negative counts, 999), numbers stored as text, unexpected NAs.
5. **`table()` on each categorical column:** misspelled levels show up as extra categories.

## In R
```r
d <- data.frame(site = c("A", "a", "B", "B"), tree = c(10, 30, 999, 50), birds = c(9, 6, NA, 3))
dim(d)
str(d)
summary(d)            # tree max 999: a missing-value code, not a measurement
table(d$site)         # "a" and "A": the same site typed two ways
head(d, 2)
```
Two problems found in ten seconds: a 999 code and inconsistent capitalisation.

## In the course
First step of every lab and of Zuur's protocol ([[Data Exploration Protocol]]).

## Common confusions
- **"I looked at it in Excel."** Excel hides types and trailing spaces. Check in R.

## Explain it back
- Which function reveals a numeric column read as text?

*Pass test:* you can run a four-line health check on any new dataset.

## Connections
- **Builds on:** [[Data Frame]], [[Data Types in R]]
- **Leads to:** [[Data Exploration]], [[table()]], [[Missing Values]], [[Outlier]]
- **Part of:** [[MOC - R for Ecological Modeling]]

## Flashcards

Name four functions for a first look at a dataset.
??
dim(), str(), head() and summary().
++++

What does summary() reveal about a numeric column?
??
Its minimum, quartiles, mean, maximum and number of NAs, exposing impossible values.
++++
