---
type: atomic
tags:
  - stan
  - flashcards/eco/stan
description: "Stan is statically typed: every variable is declared with a type (int, real, vector, row_vector, matrix or array) and size before it is used."
aliases:
  - "Stan types"
  - "int and real"
  - "vector, matrix, array"
  - "array[N] int"
  - "Stan declarations"
status: seedling
---

# Data Types in Stan

Stan is statically typed: every variable is declared with a type and size before it is used ([[Stan Program Blocks]]). `int` holds whole numbers such as counts and indices, and `real` holds decimals. `vector[N]` is a column of N reals for linear algebra and vectorised likelihoods; `matrix[N, K]` is a design matrix of N rows and K predictors ([[Model Matrix]]); and `array[N] int` is a list of N integers, used for counts and group indices (older code wrote `int y[N];`) ([[Group Index Vectors in Stan]]).

Sizes come from the data, such as N, and are checked when the data are read, and mismatched types fail at compile time, which catches errors early. Parameters must be real-valued, so discrete unknowns, such as occupancy states, are summed out of the likelihood rather than sampled ([[Occupancy]], [[Sampling Statements and target +=]]). Only vectors and matrices support matrix algebra, so `vector` and an array of reals are not interchangeable ([[Vectorized Sampling Statements]]).

Types are used throughout the Stan labs ([[Course Website]], [[Constrained Parameters]]). Stan cannot sample discrete parameters; they must be marginalised.

## Connections
- **Builds on:** [[Stan Program Blocks]]
- **Leads to:** [[Constrained Parameters]], [[Group Index Vectors in Stan]]
- **Part of:** [[MOC 17 - Stan|MOC - Stan]]

## Flashcards

Which Stan type stores a count response of length N?
??
array[N] int (with lower=0).
++++

Why can't Stan sample a discrete parameter?
??
HMC needs gradients, so discrete unknowns must be summed out of the likelihood.
++++
