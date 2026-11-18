---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "CRAN is the official online warehouse from which R and most of its packages are downloaded."
aliases:
  - "Comprehensive R Archive Network"
status: seedling
---

# CRAN

An app store with a strict review desk lists only apps that pass its checks, and removes ones that later break. **CRAN**, the Comprehensive R Archive Network, is that store for R: the official online warehouse, mirrored around the world, from which R itself and most of its packages are downloaded. `install.packages()` fetches from CRAN by default ([[Packages in R]]). Each package has a CRAN page with its reference manual and *[[Help Files in R|vignettes]]* (worked tutorials), and CRAN Task Views list packages by topic, such as Environmetrics and Spatial.

Every package on CRAN must pass automated checks on several operating systems: it installs cleanly, its examples run, and it is documented. A package that later breaks and is not fixed is archived. But these checks are about software, not statistics. Being on CRAN means the code runs, not that the method is right for your data, so "on CRAN means statistically validated" is a misunderstanding.

Not everything lives on CRAN. Development versions and some tools are installed from [[GitHub]] or other repositories, and `cmdstanr`, used by the course's Bayesian labs, comes from Stan's own [[Repository|repository]], as the code below shows ([[cmdstanr Backend]]). Whatever the source, `citation("lme4")` tells you how to cite a package, and recording versions makes the analysis reproducible ([[Session Info]], [[librarian shelf()]]).

```r
# norun
install.packages("lme4")                                   # from CRAN
install.packages("cmdstanr", repos = c("https://stan-dev.r-universe.dev", getOption("repos")))  # not on CRAN
citation("lme4")                                           # how to cite a package
```

## Connections
- **Builds on:** [[Packages in R]], [[Help Files in R]], [[GitHub]], [[Repository]]
- **Leads to:** [[librarian shelf()]], [[cmdstanr Backend]], [[Session Info]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

What is CRAN?
??
The official archive from which R and most packages are installed.
++++

Does being on CRAN mean a package's statistics are verified?
??
No. CRAN checks that the package installs and runs, not that its methods are right for your problem.
++++
