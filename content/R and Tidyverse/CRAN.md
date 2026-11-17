---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "Comprehensive R Archive Network"
status: seedling
---

# CRAN

**In one line:** CRAN is the official online warehouse from which R and most of its packages are downloaded.

> [!info] Before this, it helps to know
> [[Packages in R]] (what CRAN stores)

## The everyday picture
An app store with a strict review desk. Every package must pass automated checks on several operating systems before it is listed, and is removed if it later breaks.

## Start from zero
1. **`install.packages()` downloads from CRAN by default.**
2. **Packages there have passed basic checks.** They install cleanly and have documentation. *This is not a check that the statistics are right.*
3. **Each package has a page** with its manual and vignettes.
4. **Not everything is on CRAN.** Development versions and some tools live on GitHub. `cmdstanr`, used by the course's Bayesian labs, is installed from Stan's own repository.
5. **CRAN Task Views list packages by topic,** for example Environmetrics and Spatial.

## In R
```r
# norun
install.packages("lme4")                                   # from CRAN
install.packages("cmdstanr", repos = c("https://stan-dev.r-universe.dev", getOption("repos")))  # not on CRAN
citation("lme4")                                           # how to cite a package
```

## Common confusions
- **"On CRAN means statistically validated."** CRAN checks that code runs, not that the method suits your data.

## Explain it back
- What does CRAN check, and what doesn't it check?

*Pass test:* you can say where a package comes from and how to cite it.

## Connections
- **Builds on:** [[Packages in R]]
- **Leads to:** [[librarian shelf()]], [[cmdstanr Backend]], [[Session Info]]
- **Part of:** [[MOC - R for Ecological Modeling]]

## Flashcards

What is CRAN?
??
The official archive from which R and most packages are installed.
++++

Does being on CRAN mean a package's statistics are verified?
??
No. CRAN checks that the package installs and runs, not that its methods are right for your problem.
++++
