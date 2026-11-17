---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "The design matrix in Program MARK writes each parameter as a linear model on the logit (or other link) scale, so survival or detection can depend on time trends, groups and covariates with few coefficients."
aliases:
  - "Linear Models in Program MARK (design matrix)"
  - "MARK design matrix"
  - "Logit link in MARK"
status: seedling
---

# Design Matrix in Program MARK

The **design matrix** in [[Program MARK]] writes each parameter as a linear model on the logit, or another link, scale, so survival or detection can depend on time trends, groups and covariates with few coefficients ([[Model Matrix]], [[Logit Link]], [[Parameter Index Matrix]]). It is the same idea as an R model matrix: rows are parameters from the PIMs, and columns are β coefficients.

logit(φ_t) = β₀ + β₁ × t gives a linear trend in survival with two coefficients instead of one per year. Groups and interactions are dummy columns, exactly as in [[Dummy Coding|Dummy Variable]] coding, and individual covariates enter by name ([[Age and Time Structure in Survival Models]]).

Powell and Gale (Ch6) introduce linear models for this purpose before the mark-recapture chapters ([[Powell and Gale 2015]] Ch6 and Ch10, [[Linear Regression|Linear Model]]). The design matrix is not the data; it describes the model for the parameters, not the capture histories.

## Connections
- **Builds on:** [[Model Matrix]], [[Logit Link]], [[Parameter Index Matrix]]
- **Leads to:** [[Age and Time Structure in Survival Models]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

What does Program MARK's design matrix do?
??
Expresses parameters as linear models (on the logit scale) of time, groups and covariates.
++++
