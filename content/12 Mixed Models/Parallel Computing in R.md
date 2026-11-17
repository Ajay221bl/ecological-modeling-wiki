---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "parallel package"
  - "mclapply()"
  - "parLapply()"
  - "detectCores()"
  - "makeCluster()"
  - "Multicore"
status: seedling
---

# Parallel Computing in R

**In one line:** parallel computing splits a repetitive job, such as many bootstrap refits, across several processor cores so it finishes sooner.

> [!info] Before this, it helps to know
> [[Loops, apply and map]] (the serial version) · [[Bootstrap]] (a common use)

## Start from zero
1. **`parallel::detectCores()`** counts cores. Leave one free for the computer.
2. **Forking (`mclapply(x, f, mc.cores = 4)`):** simple, works on Mac and Linux, not Windows.
3. **Clusters (`makeCluster(4)`, `parLapply()`, `stopCluster()`):** work everywhere, but each worker starts empty: load packages and export objects with `clusterEvalQ()` and `clusterExport()`.
4. **Random numbers:** use `RNGkind("L'Ecuyer-CMRG")` and `set.seed()` (or `clusterSetRNGStream()`) for reproducible parallel streams.
5. **Speed-up is less than the number of cores** because of overhead. It pays off for slow tasks.
6. **Many functions have a built-in switch:** `bootMer(..., parallel = "multicore", ncpus = 4)`, `boot()`, brms `cores = 4`.

## In R
```r
library(parallel); RNGkind("L'Ecuyer-CMRG"); set.seed(1)
res <- mclapply(1:4, function(i) mean(rnorm(1e5)), mc.cores = 2); round(unlist(res), 4); detectCores() >= 1
```

## In the course
CIs for mixed models lab uses the parallel package for bootstrapping ([[Course Website]]).

## Common confusions
- **"Parallel code gives identical random numbers to serial code."** Not unless you set up parallel RNG streams.

## Explain it back
- Why must a cluster worker load packages separately?

*Pass test:* you can parallelise a bootstrap.

## Connections
- **Builds on:** [[Loops, apply and map]], [[Bootstrap]]
- **Leads to:** [[bootMer()]], [[Random Numbers and set.seed()]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

Which parallel function works on Mac and Linux but not Windows?
??
mclapply() (forking).
++++

What must you do for each worker in a makeCluster() cluster?
??
Load packages and export needed objects to it.
++++
