---
type: atomic
tags:
  - bayes
  - flashcards/eco/bayes
description: "Cmdstanr is an R interface to CmdStan, the command-line version of Stan, and can be used as the engine behind brms in place of rstan."
aliases:
  - "cmdstanr"
  - "CmdStan"
  - "backend = \"cmdstanr\""
status: seedling
---

# cmdstanr Backend

R can reach [[Stan]] in two ways: `rstan`, with Stan compiled into an R package, and **cmdstanr**, where R calls a separate installation of CmdStan, the command-line version of Stan. cmdstanr can be used as the engine behind [[brms]] in place of rstan. Its advantages are that it tracks the newest Stan release, often compiles and samples faster, and is less prone to installation problems when R is updated.

Install the `cmdstanr` package from the Stan repository, then run `cmdstanr::install_cmdstan()` once; it needs a C++ toolchain. Use it with `brm(..., backend = "cmdstanr")` or set `options(brms.backend = "cmdstanr")` ([[brm()]]). It can also be used directly: `mod <- cmdstan_model("model.stan"); fit <- mod$sample(data = data_list)`. The commented code below shows the installation and the brms call.

It is covered in the course setup instructions and the Stan labs ([[Course Website]]). cmdstanr does not give different answers from rstan: the model and sampler are the same and only the plumbing differs, so apart from random-number differences they agree.

```r
# norun (needs CmdStan installed)
# install.packages("cmdstanr", repos = c("https://stan-dev.r-universe.dev", getOption("repos")))
# cmdstanr::install_cmdstan()
# fit <- brm(y ~ x, data = d, backend = "cmdstanr")
```

## Connections
- **Builds on:** [[Stan]], [[brms]]
- **Leads to:** [[brm()]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]

## Flashcards

What is cmdstanr?
??
An R interface to CmdStan that can serve as the backend for brms in place of rstan.
++++
