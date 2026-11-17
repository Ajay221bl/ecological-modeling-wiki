---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "A factor is R's way of storing a categorical variable: each value is one of a fixed list of allowed categories called levels."
aliases:
  - "factor()"
  - "Levels of a factor"
status: seedling
---

# Factors in R

A multiple-choice form only lets you tick one of the printed boxes, and the list of boxes exists even if nobody ticks one of them. A **factor** is R's way of storing a [[Categorical Variable]] the same way: each value must be one of a fixed list of allowed categories, called *levels*. `factor(x)` finds the distinct values in x and makes them the levels, sorted alphabetically by default. In the code below, `factor(burn)` gives the levels "burned" then "unburned".

Level order matters more than it looks, because in a model the first level becomes the *baseline*, and every other level is compared against it ([[Reference Level]], [[Dummy Coding]]). With alphabetical order, "burned" would be the baseline, which is backwards for a burn experiment. Setting `factor(burn, levels = c("unburned", "burned"))` puts the control first, so the model's coefficient, named `burnburned`, reads as "burned compared with unburned". The order also sets the order of groups on plots. Factors are also what makes R treat a variable as categories at all: a site coded 1, 2, 3 as numbers would be fitted as a slope, as if site 3 were "more" than site 1, while as a factor each site gets its own effect.

Two traps. `as.numeric()` on a factor returns the level *positions*, not the original numbers, so a factor of years 2019, 2021 becomes 1, 2; use `as.numeric(as.character(f))` instead. And after filtering, levels with no remaining data linger until `droplevels()` removes them. Grouping variables for random effects must be factors ([[Grouping Factor]]), and the GLMM lab later changes how a factor's levels are compared ([[Sum-to-zero Contrasts]], [[Data Types in R]]).

```r
burn <- c("unburned", "burned", "burned", "unburned", "burned")
f <- factor(burn); levels(f)                  # "burned" "unburned": alphabetical
f2 <- factor(burn, levels = c("unburned", "burned")); levels(f2)   # control first
table(f2)
site <- c(1, 2, 3, 1, 2, 3)
class(site); class(factor(site))              # numeric vs factor: very different in a model
```
With `f2`, a model coefficient named `burnburned` is "burned compared with unburned".

## Connections
- **Builds on:** [[Categorical Variable]], [[Data Types in R]]
- **Leads to:** [[Dummy Coding]], [[Reference Level]], [[Grouping Factor]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What is a factor in R?
??
A vector for categorical data whose values come from a fixed set of levels.
++++

Why does the order of factor levels matter?
??
The first level is the reference that model coefficients are compared against, and it sets plotting order.
++++

How do you choose the reference level?
??
factor(x, levels = c("ref", ...)) or relevel(f, ref = "ref").
++++
