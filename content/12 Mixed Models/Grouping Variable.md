---
type: atomic
tags:
  - mixed-models
  - flashcards/eco/mixed
description: "A grouping variable is a column that labels which cluster each row belongs to (which point, which site, which observer), so a model can know which rows go together."
aliases:
  - "grouping variables"
  - "cluster variable"
  - "Grouping Factor"
  - "Random-effect grouping factor"
  - "Levels of a random effect"
  - "Grouping Factor and Levels"
status: seedling
---

# Grouping Variable

Imagine a class register with a column "Family name". Two students named Singh might be siblings. That column does not measure anything; it just says who belongs with whom. A **grouping variable** is that kind of column in a [[Data Table Rows and Columns|data table]]: a [[Categorical Variable]] (one whose values are labels, not amounts) whose job is to say "these rows share something". In R it is usually stored as one of the [[Factors in R]]. In the grassland bird data, `PtNum` says "these three visits were all at point BK1001". Rows cluster like this whenever the same unit is measured more than once, as in [[Repeated Measures]], and before a model can deal with related rows ([[Pseudoreplication]], treating related rows as if they were independent) you have to name the relationship. The grouping variable is the name tag; as [[Harrison et al. 2018]] put it, "Random effects typically represent some grouping variable" (p. 2).

Why do labels need care? Two sites each number their points 1, 2, 3. If a model groups by the point label alone, it thinks point 1 at BK and point 1 at CR are the same place and [[Joins|joins]] their rows. Give them labels like `BK1` and `CR1` and the problem disappears. Harrison et al. give two habits (p. 10): tabulate your rows by each grouping variable (R's `table()`) to see how many rows each group has, and give every group a unique label. In a [[Mixed Effects Model|mixed model]] the grouping variable (also called a grouping factor) goes to the right of the bar, as in `(1 | Site)`, and it must be a factor or character, not a number, so a site coded 1, 2, 3 as numeric needs `factor(Site)`; its categories are the levels, and the number of levels limits what can be estimated, since a variance from 3 levels is very uncertain ([[How Many Levels for a Random Effect]]). For nested designs either give plots unique labels or write `(1 | site/plot)` ([[Nested Random Effects]]). Then each grouping variable needs a decision: ignore it (risky if rows really are alike), include it as a [[Fixed Effect]] (estimate each group's own value) or include it as a [[Random Effect]] (estimate how much groups differ in general). The choice depends on how many groups there are, whether you care about each one by name and the design ([[Nested vs Crossed Random Effects]]). In the project, `Site` does not exist in the raw file; the wrangling script builds it from the point label:

```r
# norun: line from the mutate() in GrasslandBirdRichness_Wrangling.R
         Site = str_extract(PtNum, "^[A-Za-z]+"))
```

Because labels like `BK1001` start with the site code, every point label is unique across sites, exactly the habit Harrison et al. recommend, and `table(datClean$Site)` in the analysis script is the tabulate habit. The project's grouping variables are `PtNum` (376 modelled points of 416, 3 or 4 visits each), a [[Random Intercept|random intercept]]; `Site` (5 properties), a fixed effect ([[Why Site is fixed not random]]); `Survey` (3 rounds), made a factor but not modelled; `Date` (39 survey dates), not modelled; `Obs` (observer codes, some of them teams), not modelled ([[Observer Effects]]); and Year (2), which cannot be used because it is identical to a split of the sites ([[Confounding]]). Three confusions: a grouping variable is not always a [[Predictor Variable|predictor]] you care about (Site is, PtNum is not; its first job is bookkeeping); number-like labels are still categories, so point 1002 is not "bigger" than point 1001; and not every grouping variable can go in the model (Year here).

## Connections
- **Builds on:** [[Categorical Variable]], [[Factors in R]], [[Repeated Measures]], [[Pseudoreplication]], [[Data Table Rows and Columns]], [[Joins]], [[Mixed Effects Model]], [[Random Intercept]], [[Predictor Variable]]
- **Leads to:** [[Fixed Effect]], [[Random Effect]], [[How Many Levels for a Random Effect]], [[Nested Random Effects]], [[Nested vs Crossed Random Effects]], [[Why Site is fixed not random]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]
- **Go deeper:** [[Harrison et al. 2018]], [[Observer Effects]], [[Confounding]], [[Dataset]]

## Flashcards

Name two grouping variables in the project data and say which is random and which is fixed.
??
PtNum (376 modelled points) is a random intercept: it only needs to absorb point-to-point differences. Site (5 properties) is fixed: its differences are the question, and 5 groups are too few to estimate a spread well.
++++

Why must every group have a unique label?::A model joins any rows that share a label, so two different places both called "1" would be treated as the same group.
