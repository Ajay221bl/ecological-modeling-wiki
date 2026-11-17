---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "Parallel computing splits a repetitive job, such as many bootstrap refits, across several processor cores so it finishes sooner."
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

**Parallel computing** splits a repetitive job, such as many bootstrap refits, across several processor cores so it finishes sooner ([[Loops, apply and map]] for the serial version, [[Bootstrap]] for a common use). `parallel::detectCores()` counts the cores; leave one free for the computer. Forking with `mclapply(x, f, mc.cores = 4)` is simple and works on Mac and Linux, not Windows. Clusters, with `makeCluster(4)`, `parLapply()` and `stopCluster()`, work everywhere, but each worker starts empty, so load packages and export objects with `clusterEvalQ()` and `clusterExport()`.

For reproducible random numbers use `RNGkind("L'Ecuyer-CMRG")` and `set.seed()`, or `clusterSetRNGStream()`. The speed-up is less than the number of cores because of overhead, so it pays off for slow tasks. Many functions have a built-in switch: `bootMer(..., parallel = "multicore", ncpus = 4)` ([[bootMer()]]), `boot()`, and brms's `cores = 4`. In the code below `mclapply()` computes four means of 100,000 normal draws on two cores (0.0025, −0.0014, −0.0024, −0.0043), reproducibly because of the L'Ecuyer RNG.

The CIs for mixed models lab uses the parallel package for bootstrapping ([[Course Website]]). Parallel code doesn't give the same random numbers as serial code unless you set up parallel RNG streams.

```r
library(parallel); RNGkind("L'Ecuyer-CMRG"); set.seed(1)
res <- mclapply(1:4, function(i) mean(rnorm(1e5)), mc.cores = 2); round(unlist(res), 4); detectCores() >= 1
```

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
