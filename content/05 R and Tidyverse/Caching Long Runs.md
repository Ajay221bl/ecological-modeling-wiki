---
type: atomic
tags:
  - r
  - flashcards/eco/r
aliases:
  - "save() and load()"
  - "saveRDS()"
  - ".RData"
  - "Caching results"
status: seedling
---

# Caching Long Runs

**In one line:** caching means saving the result of a slow computation to a file so that later runs load it instead of computing it again.

> [!info] Before this, it helps to know
> [[If-Else]] (the test "does the file exist?") · [[File System Functions in R]] (reading and writing files)

## The everyday picture
Cooking a big pot of stock on Sunday and freezing it. All week you make soup in minutes. You only make new stock when the recipe changes.

## Start from zero
1. **Some steps are slow:** Bayesian fits, bootstraps, spline correlograms.
2. **After computing, save the object.** `saveRDS(fit, "results/fit.rds")` for one object, or `save(a, b, file = "x.RData")` for several.
3. **Before computing, check whether the file exists.** If so, load it.
4. **`readRDS()` returns the object for you to name. `load()` restores objects under their old names.**
5. **Why the course requires it:** the grader must be able to knit your work without waiting hours. The rule on the setup page is to cache anything over about two minutes.
6. **Delete the cache when the data or model change.** *The danger:* a stale cache silently reports old results.

## In R
```r
cache <- file.path(tempdir(), "boot_means.rds")
if (file.exists(cache)) {
  boot <- readRDS(cache)                               # fast path
} else {
  set.seed(1)
  boot <- replicate(2000, mean(sample(mtcars$mpg, replace = TRUE)))   # the "slow" step
  saveRDS(boot, cache)
}
quantile(boot, c(0.025, 0.975))
# brms does this itself: brm(..., file = "results/fit_m1")
```

## Common confusions
- **"RStudio saves my workspace, that's a cache."** The automatic `.RData` hides what your code depends on. Turn it off and cache explicitly.
- **"save and saveRDS are the same."** `saveRDS` stores one object without its name. `save` stores named objects.

## Explain it back
- What is the risk of a cache, and how do you guard against it?

*Pass test:* you can wrap a slow step in a check-load-or-compute-and-save block.

## Connections
- **Builds on:** [[If-Else]], [[File System Functions in R]]
- **Leads to:** [[brm()]], [[bootMer()]], [[Knitting]]
- **Part of:** [[MOC 12 - Reproducible Coding and Figures|MOC - Reproducible Coding and Figures]]

## Flashcards

What is caching in an analysis script?
??
Saving a slow result to file and loading it on later runs instead of recomputing.
++++

What is the danger of a cached result?
??
It can be stale: if data or code changed, the old result is loaded without warning.
++++
