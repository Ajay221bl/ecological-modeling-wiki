---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "library()"
  - "install.packages()"
  - "R packages"
status: seedling
---

# Packages in R

**In one line:** a package is a bundle of extra functions and data that someone wrote for R, which you install once and load each session.

> [!info] Before this, it helps to know
> [[R and RStudio]] (the base system) · [[Function Arguments]] (using the functions inside)

## The everyday picture
Apps on a phone. The phone works out of the box. For banking or maps you download an app once (install), then tap it each time you want it (load). Deleting the phone's memory at night means tapping it again tomorrow.

## Start from zero
1. **Install once per computer:** `install.packages("lme4")`. This downloads from [[CRAN]].
2. **Load once per session:** `library(lme4)`.
3. **Put `library()` calls at the top of the script.** *Why:* a reader sees at a glance what the script needs.
4. **Never put `install.packages()` in a shared script.** It reinstalls every run.
5. **`pkg::fun()` uses one function without loading the package,** and settles name clashes.
6. **Two packages can share a function name.** The later-loaded one wins and R prints a "masked" message.

## In R
```r
library(stats)               # already installed with R
# install.packages("lme4")   # once per computer, typed in the console
library(lme4)                # every session, at the top of the script
packageVersion("lme4")
stats::sd(c(1, 2, 3))        # package::function, explicit about the source
```

## In the course
Course packages include tidyverse, lme4, glmmTMB, brms, DHARMa, MuMIn, AICcmodavg, loo, sf, ncf and mgcv ([[Course Website]]). The course loads them with [[librarian shelf()]].

## Common confusions
- **"Error: could not find function."** The package isn't loaded this session, even if it is installed.
- **"library() installs."** It only loads what is already installed.

## Explain it back
- What is the difference between installing and loading?
- What does `dplyr::filter()` mean?

*Pass test:* you can install, load and name the source package of a function.

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
