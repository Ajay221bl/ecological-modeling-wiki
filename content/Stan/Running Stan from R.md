---
type: atomic
tags:
  - stan
  - flashcards/eco/stan
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

**In one line:** you run Stan from R by passing the model code and a named data list to an interface, rstan (`stan()`) or cmdstanr (`cmdstan_model()` then `$sample()`), which compiles the model to C++ and returns posterior draws.

> [!info] Before this, it helps to know
> [[Stan]] · [[Stan Program Blocks]] · [[Lists in R]]

## Start from zero
1. **Write the model** in a `.stan` file (best) or a text string.
2. **Make a named list** whose names and sizes match the data block exactly.
3. **Compile** (about a minute in this wiki's setup; reused if the code has not changed).
4. **Sample:** chains, iterations, warmup, seed, cores.
5. **Check diagnostics** before looking at estimates.
6. **rstan** runs inside R; **cmdstanr** calls the CmdStan program and is usually newer and lighter. The model code is identical.

## In R
```r
# norun (cmdstanr is not installed here; rstan versions run in the other Stan notes)
library(cmdstanr)
mod <- cmdstan_model("regression.stan")
fit <- mod$sample(data = list(N = 50, x = x, y = y), chains = 4, parallel_chains = 4, seed = 1)
fit$summary(c("a", "b", "sigma")); fit$diagnostic_summary()
```

## In the course
Stan labs ([[Course Website]]).

## Common confusions
- **"Data can be a data frame."** Stan needs a named list matching the data block, with sizes like N.

## Explain it back
- What must the data list match?

*Pass test:* you can compile and run a Stan model from R.

## Connections
- **Builds on:** [[Stan]], [[Stan Program Blocks]]
- **Leads to:** [[Step Size and Maximum Tree Depth]], [[R-hat]], [[Effective Sample Size]], [[Divergent Transitions]]
- **Part of:** [[MOC - Stan]], molecular note [[Writing a Stan Model Step by Step]]

## Flashcards

What must the R data list passed to Stan match?
??
The names, types and sizes declared in the data block.
++++

Two R interfaces to Stan?
??
rstan (stan()) and cmdstanr (cmdstan_model() then $sample()).
++++
