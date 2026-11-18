---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "Caching means saving the result of a slow computation to a file so that later runs load it instead of computing it again."
aliases:
  - "save() and load()"
  - "saveRDS()"
  - ".RData"
  - "Caching results"
status: seedling
---

# Caching Long Runs

Cook a big pot of stock on Sunday and freeze it, and all week you make soup in minutes, making new stock only when the recipe changes. **Caching** means saving the result of a slow computation, such as a Bayesian fit, a [[Bootstrap|bootstrap]] or a [[Spline Correlogram|spline correlogram]], to a file so later runs load it instead of computing it again. After computing, save the object: `saveRDS(fit, "results/fit.rds")` for one object, or `save(a, b, file = "x.RData")` for several. Before computing, check whether the file exists, and if it does, load it ([[If-Else]], [[File System Functions in R]]).

The code below does exactly that for 2,000 bootstrap means: if the cache file exists it is read, otherwise the means are computed and saved. `readRDS()` returns the object for you to name, while `load()` restores objects under their old names. brms does this itself with the `file` argument of [[brm()]], and slow [[bootMer()]] runs are good candidates too.

The course requires it because the grader must be able to knit your work without waiting hours; the setup page says to cache anything over about two minutes ([[Knitting]]). The danger is a stale cache that silently reports old results, so delete the cache when the data or model change. RStudio's automatic `.RData` workspace is not a cache: it hides what your code depends on, so turn it off and cache explicitly.

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

## Connections
- **Builds on:** [[If-Else]], [[File System Functions in R]]
- **Leads to:** [[brm()]], [[bootMer()]], [[Knitting]], [[Bootstrap]], [[Spline Correlogram]]
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
