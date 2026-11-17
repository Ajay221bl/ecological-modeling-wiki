---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "A package is a bundle of extra functions and data that someone wrote for R, which you install once and load each session."
aliases:
  - "library()"
  - "install.packages()"
  - "R packages"
status: seedling
---

# Packages in R

A phone works out of the box, but for banking or maps you download an app once (install) and then tap it each time you want it (load). A **package** is R's app: a bundle of extra functions, data and documentation that someone wrote, which you install once per computer and load once per session ([[R and RStudio]]). `install.packages("lme4")` downloads it, normally from [[CRAN]]; `library(lme4)` loads it so its functions can be used.

Put the `library()` calls at the top of the script, so a reader sees at a glance what the script needs, and never put `install.packages()` in a shared script, because it would reinstall on every run. "Error: could not find function" almost always means the package is not loaded in this session, even though it is installed; `library()` loads but never installs. Sometimes you want one function without loading a whole package, or two packages share a function name; writing `package::function()`, as with `stats::sd()` in the code below, says exactly which one you mean. When two loaded packages do clash, the one loaded later wins and R prints a "masked" message.

Packages are what turn base R into a modeling toolkit. This course uses tidyverse for data handling, lme4 and glmmTMB for mixed models, brms for Bayesian models, DHARMa for residual checks, MuMIn and AICcmodavg for model selection, and others ([[Course Website]], [[Tidyverse]]). Because results can change between package versions, reports should record which versions were used ([[Session Info]]), and the course loads packages with a helper that installs anything missing ([[librarian shelf()]], [[Function Arguments]]).

```r
library(stats)               # already installed with R
# install.packages("lme4")   # once per computer, typed in the console
library(lme4)                # every session, at the top of the script
packageVersion("lme4")
stats::sd(c(1, 2, 3))        # package::function, explicit about the source
```

## Connections
- **Builds on:** [[R and RStudio]]
- **Leads to:** [[CRAN]], [[librarian shelf()]], [[Tidyverse]], [[Session Info]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What is the difference between install.packages() and library()?
??
install.packages() downloads a package once per computer. library() loads it for the current session.
++++

How do you use one function from a package without loading the whole package?
??
Write the package name, two colons, then the function name (see the In R example).
++++
