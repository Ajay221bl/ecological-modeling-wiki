---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "`NA` is R's marker for \"this value exists but we don't know it\", and it spreads through calculations unless you say how to handle it."
aliases:
  - "NA"
  - "Missing data in R"
  - "na.rm"
status: seedling
---

# Missing Values

If one of ten people leaves "income" blank on a form, the honest answer to "what is the total income of these ten people?" is "can't say". R gives exactly that answer. **`NA`**, for "not available", is R's marker for a value that exists but is unknown. It is not zero and not the text "NA": a zero count was observed, an NA was not. Because an unknown plus anything is unknown, any sum or mean that touches an `NA` returns `NA`, as `mean(x)` does in the code below. Adding `na.rm = TRUE` drops the missing values for that one calculation, giving 6.67.

To find missing values use `is.na()`, and `sum(is.na(x))` counts them. The tempting `x == NA` does not work: comparing with an unknown is itself unknown, so it returns `NA` for every element. Missing values arrive easily, for example when one stray entry stops a column from being read as numbers ([[Data Types in R]]), so counting them is a standard step of [[Data Exploration|data exploration]] ([[Data Exploration Protocol]], [[Inspecting Data]]).

The most dangerous behaviour is silent. Model functions such as `lm()` and `glm()` quietly drop any row with a missing value in a variable they use. In the code below, a model with [[Predictor Variable|predictor]] `a` uses 3 rows while a model with `a` and `b` uses only 2, so the two were fitted to different data, and comparing them with AIC would be invalid, because every model in a comparison must use identical data ([[Candidate Model Set]]). Check with `nobs()`, and before comparing models cut the data to rows complete for every variable involved, for example with `na.omit()`. Finally, ask *why* a value is missing: a plot that flooded is information, and some methods can model missingness directly ([[Missing Data in Bayesian Models]]).

```r
x <- c(4, NA, 7, 9)
mean(x)                      # NA
mean(x, na.rm = TRUE)        # 6.67
is.na(x); sum(is.na(x))      # where and how many
x == NA                      # all NA: the wrong way to test
d <- data.frame(y = c(1, 2, 3, 4), a = c(1, NA, 3, 4), b = c(2, 2, NA, 5))
nobs(lm(y ~ a, d)); nobs(lm(y ~ a + b, d))   # 3 vs 2: different data!
d_complete <- na.omit(d); nrow(d_complete)   # 2 rows complete on all variables
```
Before comparing models, cut the data to rows complete for every variable used.

## Connections
- **Builds on:** [[Data Types in R]], [[Predictor Variable]]
- **Leads to:** [[Inspecting Data]], [[Candidate Model Set]], [[Missing Data in Bayesian Models]], [[Data Exploration]]
- **See also:** [[Observation]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What does NA mean in R?
??
A value that is missing or unknown. It is not zero.
++++

How do you test for missing values?
??
is.na(x). The comparison x == NA always returns NA.
++++

Why must models being compared by AIC use the same rows?
??
AIC values are only comparable when computed on identical data, and R silently drops rows with NA in any used variable.
++++
