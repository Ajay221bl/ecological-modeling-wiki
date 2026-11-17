---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "factor()"
  - "Levels of a factor"
status: seedling
---

# Factors in R

**In one line:** a factor is R's way of storing a categorical variable: each value is one of a fixed list of allowed categories called levels.

> [!info] Before this, it helps to know
> [[Categorical Variable]] (named groups) · [[Data Types in R]] (kinds of values)

## The everyday picture
A multiple-choice form. The answer must be one of the printed boxes. The list of boxes exists even if nobody ticks one of them. Levels are the printed boxes.

## Start from zero
1. **`factor(x)` finds the distinct values and makes them levels.**
2. **Levels are sorted alphabetically by default.**
3. **The first level is the baseline in models.** *Why:* R compares every other level against it ([[Reference Level]]).
4. **So set the order on purpose.** `factor(x, levels = c(...))` or `relevel()`.
5. **Models need factors for categories.** A site coded 1, 2, 3 as numbers would be fitted as a slope. As a factor it gets one effect per site.
6. **Unused levels linger** after filtering. `droplevels()` removes them.

## In R
```r
burn <- c("unburned", "burned", "burned", "unburned", "burned")
f <- factor(burn); levels(f)                  # "burned" "unburned": alphabetical
f2 <- factor(burn, levels = c("unburned", "burned")); levels(f2)   # control first
table(f2)
site <- c(1, 2, 3, 1, 2, 3)
class(site); class(factor(site))              # numeric vs factor: very different in a model
```
With `f2`, a model coefficient named `burnburned` is "burned compared with unburned".

## In the course
The GLMM lab changes contrasts for the factor sex ([[Sum-to-zero Contrasts]]). Grouping variables for random effects must be factors ([[Grouping Factor]]).

## Common confusions
- **"as.numeric(factor) gives back the numbers."** It gives level positions. Use `as.numeric(as.character(f))`.
- **"Level order doesn't matter."** It sets the reference level and the order on plots.

## Explain it back
- Why does it matter which level comes first?
- What goes wrong if site number is left numeric in a model?

*Pass test:* you can make a factor with a chosen reference level.

## Connections
- **Builds on:** [[Categorical Variable]], [[Data Types in R]]
- **Leads to:** [[Dummy Coding]], [[Reference Level]], [[Grouping Factor]]
- **Part of:** [[MOC - R for Ecological Modeling]]

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
