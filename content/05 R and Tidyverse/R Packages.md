---
type: atomic
tags:
  - r-reproducibility
  - r-basics
  - r-packages
  - flashcards
aliases:
  - "package"
  - "packages"
  - "R package"
  - "library"
status: seedling
---

# R Packages

**In one line:** a package is a free add-on bundle of functions that other people wrote; you install it once, then load it every session before using its functions.

> [!info] Before this, it helps to know
> [[Functions and Arguments]] (packages are mostly collections of functions)

## Start from zero
A new phone comes with a few built-in apps. For anything else you go to the app store, **install** the app once, then **open** it whenever you want to use it.

R is the same:
- **Base R** is the built-in apps: `mean()`, `hist()`, `table()`, `log()`.
- A **package** is an app from the store (for R the store is called CRAN). It adds new functions, like `glmer()` for mixed models.
- **Install** (`install.packages("lme4")`) downloads it to your computer. Once per computer.
- **Load** (`library(lme4)` or `require(lme4)`) switches it on for this R session. Every session.

If you skip loading, R says `could not find function "glmer"`. If the package was never installed, loading fails with "there is no package called...".

## Why it exists
Nobody could write mixed models, AIC tables and publication-quality plots from scratch for every project. Packages let thousands of statisticians share well-tested tools. Using a widely used package also means other people can check and repeat your work.

The catch: your script now depends on things that are *not* in the script. A collaborator who lacks a package cannot run your code. That is why the top of a reproducible script must say which packages it needs, and ideally install them automatically. See [[Reproducibility]].

## A tiny example
```r
mean(c(5, 7, 6))      # base R: works straight away
glmer(...)            # Error: could not find function "glmer"
library(lme4)         # load the package that contains glmer()
glmer(...)            # now it works
```

## In my project
Both scripts start the same way (from `GrasslandBirdRichness_Analysis.R`; it ran in ajay's RStudio on Oct 13, and R is not installed in Claude's environment, so rerun any change there):

```r
shelf(tidyverse,
      lme4,
      MuMIn,
      performance,
      DHARMa,
      here,
      lib = tempdir(),
      quiet = TRUE)
```

`shelf()` (from the librarian package) installs anything missing and loads everything in one step. The lines above it install librarian itself if needed. See [[librarian shelf()]].

Which package gives me which function:

| Package | Functions I use | What for |
|---|---|---|
| tidyverse (a bundle: readr, dplyr, stringr, tidyr, ggplot2 ...) | `read_csv()`, `mutate()`, `filter()`, `group_by()`, `summarize()`, `left_join()`, `str_trim()`, `str_extract()`, `replace_na()`, `ggplot()`, `ggsave()` | reading, cleaning and plotting data |
| lme4 | `glmer()` | fitting the Poisson mixed model |
| MuMIn | `model.sel()` | the AIC model selection table |
| performance | `check_overdispersion()` | checking whether Poisson fits |
| DHARMa | `simulateResiduals()`, `testDispersion()`, `recalculateResiduals()`, `testSpatialAutocorrelation()` | simulated residual checks, including spatial autocorrelation |
| here | `here()` | file paths that work on any computer |

Notes for each: [[group_by and summarize]], [[str_trim()]], [[glmer()]], [[MuMIn model.sel()]], [[check_overdispersion()]], [[DHARMa Simulated Residuals]], [[here()]], [[ggplot2 and ggsave()]].

The Wrangling script only loads tidyverse and here, because it does no modelling.

## Common confusions
- **Install is not load.** Installing every session is wasteful; loading every session is required.
- **Same function name in two packages.** If two loaded packages both have a `filter()`, the one loaded last wins. Writing `dplyr::filter()` names the package explicitly. (`::` means "the function from this package".)
- **"Library" has two meanings.** `library()` is the load command, but a "library" is also the folder where packages are installed. `lib = tempdir()` in my scripts points that folder to a temporary location.
- **Package versions change.** A script can break years later when a package updates. Recording versions (for example with `sessionInfo()`) helps.

## Connections
- **Builds on:** [[Functions and Arguments]]
- **Leads to:** [[librarian shelf()]], [[glmer()]], [[Reproducibility]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - R and Reproducibility]]
- **Go deeper:** [[R Scripts Walkthrough]]

> [!question]- Check yourself
> R says `could not find function "model.sel"`. What is the most likely cause and fix?
> ?
> The MuMIn package (which contains `model.sel()`) is not loaded in this session. Run the package-loading block at the top of the script (the `shelf()` call), which installs it if needed and loads it.
