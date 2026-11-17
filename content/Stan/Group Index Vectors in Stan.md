---
type: atomic
tags:
  - stan
  - flashcards/eco/stan
aliases:
  - "Index variables in Stan"
  - "Group indices"
  - "u[g]"
  - "Indexing random effects in Stan"
status: seedling
---

# Group Index Vectors in Stan

**In one line:** a group index vector is an integer array giving each observation's group number, so a vector of group effects can be looked up per observation with `u[g]`.

> [!info] Before this, it helps to know
> [[Data Types in Stan]] · [[Grouping Factor]] · [[Random Intercept]]

## A tiny example
sleepstudy has 180 rows and 18 subjects. `g = as.integer(Subject)` gives values 1 to 18; in Stan, `u[g]` returns a vector of 180 subject effects, one per row.

## Start from zero
1. **Declare:** `array[N] int<lower=1, upper=J> g;`
2. **Build in R:** `as.integer(factor(group))`, which numbers groups 1 to J.
3. **Use:** `y ~ normal(a + u[g] + b * x, sigma);`
4. **Random slopes:** `b_g[g] .* x` (elementwise product).
5. **Nested groups** need one index per level (site within region).
6. **Check** that the largest index equals J, or Stan errors.

## In the course
Stan lab: mixed models ([[Course Website]]).

## Common confusions
- **"Pass the factor directly."** Stan needs integers 1 to J.

## Explain it back
- How do you turn a factor into Stan group indices?

*Pass test:* you can index group effects in Stan.

## Connections
- **Builds on:** [[Data Types in Stan]], [[Grouping Factor]]
- **Leads to:** [[Random Intercepts in Stan]], [[Vectorized Sampling Statements]]
- **Part of:** [[MOC - Stan]]

## Flashcards

How does Stan look up each observation's random intercept?
??
With an integer group index vector: u[g].
++++
