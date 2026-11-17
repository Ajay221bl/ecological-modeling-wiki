---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "if statement"
  - "Conditional"
  - "ifelse()"
status: seedling
---

# If-Else

**In one line:** if-else makes code choose between actions depending on whether a condition is true.

> [!info] Before this, it helps to know
> [[Data Types in R]] (logical values) · [[Indexing in R]] (tests such as `x > 5`)

## The everyday picture
A fork in a trail with a signpost: "If the river is high, take the bridge. Otherwise wade across." One test, two paths.

## Start from zero
1. **`if (test) { A } else { B }` checks one TRUE or FALSE.**
2. **It handles a single decision,** such as "is this file already downloaded?".
3. **For a whole column use `ifelse(test, yes, no)`.** *Why:* `if` looks at one value only, while `ifelse` tests every element.
4. **For several categories use `case_when()`** ([[case_when()]]).

## In R
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

## In the course
The GLMM lab turns larval counts into presence and absence this way ([[Presence-Absence Data]]).

## Common confusions
- **"`if` works on a column."** It uses a single TRUE/FALSE. A vector gives an error.
- **"ifelse keeps types."** It can strip factor and date attributes. Check the result.

## Explain it back
- When do you need `ifelse()` instead of `if`?
- Write a line turning counts into 0/1.

*Pass test:* you can choose correctly between `if` and `ifelse()`.

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
