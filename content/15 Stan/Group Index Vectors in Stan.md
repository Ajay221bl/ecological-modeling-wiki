---
type: atomic
tags:
  - stan
  - flashcards/eco/stan
description: "A group index vector is an integer array giving each observation's group number, so a vector of group effects can be looked up per observation with `u[g]`."
aliases:
  - "Index variables in Stan"
  - "Group indices"
  - "u[g]"
  - "Indexing random effects in Stan"
status: seedling
---

# Group Index Vectors in Stan

A **group index vector** is an integer array giving each observation's group number, so a vector of group effects can be looked up per observation with `u[g]` ([[Data Types in Stan]], [[Grouping Variable|Grouping Factor]], [[Random Intercept]]). `sleepstudy` has 180 rows and 18 subjects: `g = as.integer(Subject)` gives values 1 to 18, and in Stan `u[g]` returns a vector of 180 subject effects, one per row.

Declare it as `array[N] int<lower=1, upper=J> g;`, build it in R with `as.integer(factor(group))`, which numbers groups 1 to J, and use it as `y ~ normal(a + u[g] + b * x, sigma);` ([[Vectorized Sampling Statements]]). Random slopes use `b_g[g] .* x`, an elementwise product ([[Random Slope]]). Nested groups need one index per level, such as site within region ([[Nested Random Effects]]). Check that the largest index equals J, or Stan errors.

It is used in the Stan lab on [[Mixed Effects Model|mixed models]] ([[Course Website]], [[Random Intercepts in Stan]]). Don't pass the factor directly: Stan needs integers 1 to J.

## Connections
- **Builds on:** [[Data Types in Stan]], [[Grouping Variable|Grouping Factor]], [[Mixed Effects Model]]
- **Leads to:** [[Random Intercepts in Stan]], [[Vectorized Sampling Statements]]
- **Part of:** [[MOC 17 - Stan|MOC - Stan]]

## Flashcards

How does Stan look up each observation's random intercept?
??
With an integer group index vector: u[g].
++++
