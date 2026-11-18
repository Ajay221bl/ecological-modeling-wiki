---
type: atomic
tags:
  - mixed-models
  - flashcards
aliases:
  - "grouping variables"
  - "grouping factor"
  - "cluster variable"
status: seedling
---

# Grouping Variable
**In one line:** a column that labels which cluster each row belongs to (which point, which site, which observer), so a model can know which rows go together.

> [!info] Before this, it helps to know
> [[Data Table Rows and Columns]] (a grouping variable is a column) · [[Factors]] (it is a category, not a measurement) · [[Repeated Measures]] (why rows cluster)

## Start from zero
Imagine a class register with a column "Family name". Two students named Singh might be siblings. That column does not measure anything; it just says who belongs with whom.

A **grouping variable** is that kind of column. It is a category ([[Factors]]) whose job is to tell you "these rows share something". In my data, `PtNum` says "these three visits were all at point BK1001".

## Why it exists
Before you can deal with rows that are related ([[Pseudoreplication]]), you have to name the relationship. The grouping variable is the name tag. [[Harrison et al. 2018]] put it plainly: "Random effects typically represent some grouping variable" (p. 2).

They give two habits (p. 10):
1. **Tabulate** your rows by each grouping variable (for example R's `table()`) to see how many rows each group has.
2. **Give every group a unique label.** A model joins any rows that share a label, even if they are different places in the field.

Once grouping variables are listed, each one needs a decision:
- **ignore it** (risky if rows really are alike),
- include it as a [[Fixed Effect]] (estimate each group's own value), or
- include it as a [[Random Effect]] (estimate how much groups differ in general).

That choice depends on how many groups there are, whether you care about each one by name, and the design ([[Nested vs Crossed Random Effects]]).

## A tiny example
Why unique labels matter. Two sites each number their points 1, 2, 3:

| Site | Point label | Real place |
|---|---|---|
| BK | 1 | a point at BK |
| CR | 1 | a different point at CR |

If the model groups by "Point label" alone, it thinks both rows are the same point. With labels like `BK1` and `CR1`, the problem disappears.

## In my project
My data have several grouping variables:

| Grouping variable | Levels | How it is used |
|---|---|---|
| `PtNum` (survey point) | 376 modelled points (416 in all), 3 or 4 visits each | random intercept |
| `Site` (property) | 5 (BK, CR, DC, HB, HO) | fixed effect |
| `Survey` (round) | 3 | made a factor in the wrangling script, but not in the models |
| `Date` | 39 survey dates | not in the model |
| `Obs` (observer code) | several codes, some are teams | not in the model ([[Observer Effects]]) |
| Year | 2 | cannot be used: identical to a Site split ([[Confounding]]) |

`Site` does not exist in the raw file; the wrangling script builds it from the point label:

```r
         Site = str_extract(PtNum, "^[A-Za-z]+"))
```
(the last line of the `mutate()` that also trims the species and observer codes)
(`GrasslandBirdRichness_Wrangling.R`)

Because labels like `BK1001` start with the site code, every point label is unique across sites, which is exactly the habit Harrison et al. recommend. The quick check `table(datClean$Site)` in `GrasslandBirdRichness_Analysis.R` is the "tabulate" habit.

Why `PtNum` is random but `Site` is fixed is its own note: [[Why Site is fixed not random]].

## Common confusions
- **"A grouping variable is a predictor I care about."** Sometimes (Site), often not (PtNum). Its first job is bookkeeping.
- **"Numbers as labels are numbers."** `PtNum` must be treated as a category; point 1002 is not "bigger" than point 1001.
- **"Every grouping variable must go in the model."** Each needs a decision; some cannot be used (Year here).

## Connections
- **Builds on:** [[Categorical Predictor and Reference Level]], [[Repeated Measures]], [[Dataset]], [[Factors]]
- **Leads to:** [[Fixed Effect]], [[Random Effect]], [[Nested vs Crossed Random Effects]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]
- **Go deeper:** [[Harrison et al. 2018]] (practical habits for grouping factors)

> [!question]- Check yourself
> Name two grouping variables in my data and say which is random and which is fixed.
> ?
> PtNum (376 modelled points) is a random intercept: I only need to absorb point-to-point differences. Site (5 properties) is fixed: its differences are the question, and 5 groups are too few to estimate a spread well.
