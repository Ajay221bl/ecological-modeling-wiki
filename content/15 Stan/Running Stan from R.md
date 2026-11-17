---
type: atomic
tags:
  - stan
  - flashcards/eco/stan
description: "You run Stan from R by passing the model code and a named data list to an interface, rstan (`stan()`) or cmdstanr (`cmdstan_model()` then `$sample()`), which compiles the model to C++ and returns posterior draws."
aliases:
  - "rstan"
  - "Compiling Stan Models with cmdstanr"
  - "stan()"
  - "sampling()"
  - "cmdstan_model()"
  - "Compiling Stan models"
status: seedling
---

# Running Stan from R

You run Stan from R by passing the model code and a named data list to an interface, rstan's `stan()` or cmdstanr's `cmdstan_model()` followed by `$sample()`, which compiles the model to C++ and returns posterior draws ([[Stan]], [[Stan Program Blocks]], [[Lists in R]]). Write the model in a `.stan` file, which is best, or a text string. Make a named list whose names and sizes match the data block exactly. Compile it, which takes about a minute in this wiki's setup and is reused if the code has not changed.

Then sample, choosing chains, iterations, warmup, seed and cores, and check the diagnostics before looking at estimates ([[R-hat]], [[Effective Sample Size]], [[Divergent Transitions]]). rstan runs inside R, while cmdstanr calls the CmdStan program and is usually newer and lighter; the model code is identical. The code below, not run because cmdstanr is not installed here, shows the cmdstanr route; the rstan versions run in the other Stan notes ([[Generated Quantities]]).

This is the workflow of the Stan labs ([[Course Website]], [[Step Size and Maximum Tree Depth]]). Data can't be a data frame: Stan needs a named list matching the data block, with sizes like N.

```r
# norun (cmdstanr is not installed here; rstan versions run in the other Stan notes)
library(cmdstanr)
mod <- cmdstan_model("regression.stan")
fit <- mod$sample(data = list(N = 50, x = x, y = y), chains = 4, parallel_chains = 4, seed = 1)
fit$summary(c("a", "b", "sigma")); fit$diagnostic_summary()
```

## Connections
- **Builds on:** [[Stan]], [[Stan Program Blocks]]
- **Leads to:** [[Step Size and Maximum Tree Depth]], [[R-hat]], [[Effective Sample Size]], [[Divergent Transitions]]
- **Part of:** [[MOC 17 - Stan|MOC - Stan]], molecular note [[Writing a Stan Model Step by Step]]

## Flashcards

What must the R data list passed to Stan match?
??
The names, types and sizes declared in the data block.
++++

Two R interfaces to Stan?
??
rstan (stan()) and cmdstanr (cmdstan_model() then $sample()).
++++
