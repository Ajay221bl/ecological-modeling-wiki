---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "NA"
  - "Missing data in R"
  - "na.rm"
status: seedling
---

# Missing Values

**In one line:** `NA` is R's marker for "this value exists but we don't know it", and it spreads through calculations unless you say how to handle it.

> [!info] Before this, it helps to know
> [[Data Types in R]] (kinds of values) · [[Observation]] (a row that may be incomplete)

## The everyday picture
A blank on a form. If one person left "income" blank, the honest answer to "what is the total income of these ten people?" is "can't say". R gives exactly that answer until you tell it to skip the blank.

## Start from zero
1. **`NA` means not available.** It is not zero and not the text "NA".
2. **Any sum or mean that touches `NA` is `NA`.** *Why:* an unknown plus anything is unknown.
3. **`na.rm = TRUE` drops them for one calculation.**
4. **Find them with `is.na()`.** `x == NA` doesn't work, because comparing with an unknown is itself unknown.
5. **Model functions drop incomplete rows silently.** Two models on different predictors may then use different rows, which makes AIC comparisons invalid.
6. **Ask why it is missing.** Missing because the plot flooded is information ([[Missing Data in Bayesian Models]]).

## In R
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

## In the course
A standard step in data exploration ([[Data Exploration Protocol]]). Model selection requires all models to use identical data ([[Candidate Model Set]]).

## Common confusions
- **"NA is zero."** A zero count was observed. An NA was not.
- **"R will warn me when it drops rows."** `lm()` and `glm()` drop them quietly. Check `nobs()`.

## Explain it back
- Why is `mean(c(1, NA))` equal to NA?
- Why can missing values break an AIC comparison?

*Pass test:* you can find, count and deliberately handle missing values.

## Connections
- **Builds on:** [[Data Types in R]]
- **Leads to:** [[Inspecting Data]], [[Candidate Model Set]], [[Missing Data in Bayesian Models]]
- **Part of:** [[MOC - R for Ecological Modeling]]

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
