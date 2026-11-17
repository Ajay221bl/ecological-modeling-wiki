---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "If-else makes code choose between actions depending on whether a condition is true."
aliases:
  - "if statement"
  - "Conditional"
  - "ifelse()"
status: seedling
---

# If-Else

At a fork in a trail a signpost says: "If the river is high, take the bridge; otherwise wade across." One test, two paths. **If-else** makes code choose between actions depending on whether a condition is true. `if (test) { A } else { B }` checks a single TRUE or FALSE ([[Data Types in R]]) and runs A or B. In the first example below, `if (sum(larvae) > 0)` decides whether to report "some infection found".

Plain `if` looks at one value only; give it a whole column and R stops with an error. For a column you want `ifelse(test, yes, no)`, which tests every element and returns a vector: `ifelse(larvae > 0, 1, 0)` turns counts of 0, 3, 0 and 12 into presence and absence, 0, 1, 0, 1, which is how the GLMM lab builds its [[Presence-Absence Data]]. The test itself is the same kind of comparison used in indexing, such as `x > 5` ([[Indexing in R]]). When there are more than two outcomes, `case_when()` is clearer than nesting `ifelse()` calls ([[case_when()]]).

A single `if` is ideal for decisions about the workflow rather than the data. The last lines of the code show the course's caching pattern: if a saved result does not exist yet, fit the model and save it; then read it back. Slow models are then fitted once instead of every time the script runs ([[Caching Long Runs]]). One caution: `ifelse()` can strip factor and date attributes from its result, so check the type of what comes back.

```r
larvae <- c(0, 3, 0, 12)
if (sum(larvae) > 0) "some infection found" else "no infection"
present <- ifelse(larvae > 0, 1, 0); present        # 0 1 0 1: counts to presence/absence
# cache pattern from the course: only refit if the saved result is missing
f <- file.path(tempdir(), "fit.rds")
if (!file.exists(f)) saveRDS(lm(dist ~ speed, cars), f)
fit <- readRDS(f)
```
The last three lines are the "don't rerun slow code" pattern ([[Caching Long Runs]]).

## Connections
- **Builds on:** [[Data Types in R]]
- **Leads to:** [[case_when()]], [[Presence-Absence Data]], [[Caching Long Runs]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What is the difference between if and ifelse()?
??
if tests one condition to choose a block of code. ifelse() tests every element of a vector and returns a vector.
++++

How do you convert counts to presence/absence?
??
ifelse(count > 0, 1, 0).
++++
