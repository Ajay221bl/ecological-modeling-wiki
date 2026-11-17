---
type: atomic
tags:
  - stan
  - flashcards/eco/stan
aliases:
  - "Stan types"
  - "int and real"
  - "vector, matrix, array"
  - "array[N] int"
  - "Stan declarations"
status: seedling
---

# Data Types in Stan

**In one line:** Stan is statically typed: every variable is declared with a type (int, real, vector, row_vector, matrix or array) and size before it is used.

> [!info] Before this, it helps to know
> [[Stan Program Blocks]]

## Start from zero
1. **int:** whole numbers (counts, indices). **real:** decimals.
2. **vector[N]:** a column of N reals, for linear algebra and vectorised likelihoods.
3. **matrix[N, K]:** a design matrix of N rows and K predictors.
4. **array[N] int:** a list of N integers, used for counts and group indices. (Older code wrote `int y[N];`.)
5. **Parameters must be real-valued;** discrete unknowns (like occupancy states) are summed out of the likelihood.
6. **Sizes come from data,** such as N, and are checked when data are read.
7. **Mismatched types fail at compile time,** which catches errors early.

## In the course
Stan labs ([[Course Website]]).

## Common confusions
- **"vector and array of real are the same."** Only vectors and matrices support matrix algebra.
- **"Stan can sample discrete parameters."** It cannot; they must be marginalised.

## Explain it back
- Which type holds a count response?

*Pass test:* you can declare data and parameters with correct types.

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
