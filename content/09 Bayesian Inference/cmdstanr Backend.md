---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
aliases:
  - "cmdstanr"
  - "CmdStan"
  - "backend = \"cmdstanr\""
status: seedling
---

# cmdstanr Backend

**In one line:** cmdstanr is an R interface to CmdStan, the command-line version of Stan, and can be used as the engine behind brms in place of rstan.

> [!info] Before this, it helps to know
> [[Stan]] (what it runs) · [[brms]] (which can call it)

## Start from zero
1. **Two ways for R to reach Stan:** `rstan` (Stan compiled into an R package) and `cmdstanr` (R calls a separate CmdStan installation).
2. **Why cmdstanr:** it tracks the newest Stan release, often compiles and samples faster, and is less prone to R-version installation problems.
3. **Install:** the `cmdstanr` package from the Stan repository, then `cmdstanr::install_cmdstan()` once. It needs a C++ toolchain.
4. **Use with brms:** `brm(..., backend = "cmdstanr")`. Or set `options(brms.backend = "cmdstanr")`.
5. **Results are the same model and sampler.** Only the plumbing differs.
6. **Direct use:** `mod <- cmdstan_model("model.stan"); fit <- mod$sample(data = data_list)`.

## In R
```r
# norun (needs CmdStan installed)
# install.packages("cmdstanr", repos = c("https://stan-dev.r-universe.dev", getOption("repos")))
# cmdstanr::install_cmdstan()
# fit <- brm(y ~ x, data = d, backend = "cmdstanr")
```

## In the course
Course setup instructions and the Stan labs ([[Course Website]]).

## Common confusions
- **"cmdstanr gives different answers from rstan."** Apart from random-number differences, they agree.

## Explain it back
- What is the difference between rstan and cmdstanr?

*Pass test:* you can switch the brms backend.

## Connections
- **Builds on:** [[Stan]], [[brms]]
- **Leads to:** [[brm()]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is cmdstanr?
??
An R interface to CmdStan that can serve as the backend for brms in place of rstan.
++++
