---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "A one-to-many join copies each row of a small table (one row per site) onto every matching row of a big table (many rows per site), such as one-time landscape measurements onto every year's survey."
aliases:
  - "Many-to-one join"
  - "One to many join"
  - "Joining repeated surveys to site covariates"
  - "relationship = \"many-to-one\""
status: seedling
---

# One-to-many Join

A school has one table of students' home addresses and another of every test each student took. To put the address next to every test, you match on the student ID and copy the address onto each of that student's tests. That is a **one-to-many join**: each row of the small table matches many rows of the big table and is copied onto all of them ([[Joins]]). In Homework 3 the landscape table `mlrland` has one row per patch, measured once, while the bird table `mlrbird` has one row per patch per year, two years, so it has twice as many rows. `left_join(mlrbird, mlrland, by = c("Patch", "Name"))` gives every bird row its patch's landscape values.

Two checks keep it honest. Count rows before and after: a correct join of bird rows to landscape keeps the bird table's row count exactly. If it grows, the key was not unique in the landscape table, and some rows were duplicated. dplyr can check this for you with `relationship = "many-to-one"`, which stops with an error if any landscape key appears twice. Then look for NAs in the joined columns, which mark bird rows whose key had no match, often from a typo or a different spelling of the site name ([[Missing Values]]).

The join also creates a modeling issue. The two years at one patch share all their landscape values and are not [[Independence of Observations|independent observations]] of the landscape effect, so the second year adds less information than a new patch would. Including Year as a [[Predictor Variable|predictor]], or a [[Random Intercept]] for Patch, accounts for this ([[Pseudoreplication]], [[Repeated Measures]]).

```r
library(dplyr)
land <- tibble(Patch = 1:3, PA = c(12, 40, 7))                   # one row per patch
bird <- tibble(Year = rep(1:2, each = 3), Patch = rep(1:3, 2), grcu = c(1, 0, 1, 1, 1, 0))
j <- left_join(bird, land, by = "Patch", relationship = "many-to-one")
c(bird = nrow(bird), joined = nrow(j), missing = sum(is.na(j$PA))); j
```

## Connections
- **Builds on:** [[Joins]], [[Tidy Data]], [[Predictor Variable]]
- **Leads to:** [[Repeated Measures]], [[Random Intercept]], [[Independence of Observations]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]], molecular note [[Homework 3 - Woodland Birds and Landscape Scale]]

## Flashcards

What is a one-to-many join?
??
Each row of a small table is copied onto every matching row of a larger table.
++++

How do you check a one-to-many join went right?
??
The row count of the big table is unchanged and no joined columns are unexpectedly NA.
++++

What does relationship = "many-to-one" do in left_join?
??
Stops with an error if a key appears more than once in the right-hand table.
++++
