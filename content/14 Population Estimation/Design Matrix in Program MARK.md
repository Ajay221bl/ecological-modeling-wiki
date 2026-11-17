---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "Linear Models in Program MARK (design matrix)"
  - "MARK design matrix"
  - "Logit link in MARK"
status: seedling
---

# Design Matrix in Program MARK

**In one line:** the design matrix in Program MARK writes each parameter as a linear model on the logit (or other link) scale, so survival or detection can depend on time trends, groups and covariates with few coefficients.

> [!info] Before this, it helps to know
> [[Model Matrix]] · [[Logit Link]] · [[Parameter Index Matrix]]

## Start from zero
1. **Same idea as an R model matrix:** rows are parameters from the PIMs, columns are β coefficients.
2. **logit(φ_t) = β₀ + β₁ × t** gives a linear trend in survival with two coefficients instead of one per year.
3. **Groups and interactions** are dummy columns, exactly as in [[Dummy Coding|Dummy Variable]] coding.
4. **Individual covariates** enter by name in the design matrix.
5. **Powell and Gale (Ch6)** introduce linear models for this purpose before the mark-recapture chapters.

## In the course
[[Powell and Gale 2015]] Ch6 (linear models) and Ch10.

## Common confusions
- **"The design matrix is the data."** It describes the model for the parameters, not the capture histories.

## Explain it back
- How many coefficients does a linear trend in survival need?

*Pass test:* you can relate MARK's design matrix to an R model matrix.

## Connections
- **Builds on:** [[Model Matrix]], [[Logit Link]], [[Parameter Index Matrix]]
- **Leads to:** [[Age and Time Structure in Survival Models]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

What does Program MARK's design matrix do?
??
Expresses parameters as linear models (on the logit scale) of time, groups and covariates.
++++
