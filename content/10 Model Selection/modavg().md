---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
description: "`modavg()` and `modavgPred()` in the AICcmodavg package, and `model.avg()` in MuMIn, compute model-averaged coefficients or predictions with unconditional standard errors from a list of fitted models."
aliases:
  - "AICcmodavg"
  - "modavg"
  - "modavgPred()"
  - "model.avg()"
  - "MuMIn model averaging"
status: seedling
---

# modavg()

**`modavg()`** and **`modavgPred()`** in the AICcmodavg package, and **`model.avg()`** in MuMIn, compute model-averaged coefficients or predictions with unconditional standard errors from a list of fitted models ([[Model Averaging]]). In AICcmodavg, `aictab(cand.set, modnames)` builds the ranking table ([[Model Ranking Tables]]), `modavg(cand.set, parm = "tree", modnames)` averages a coefficient and `modavgPred(cand.set, modnames, newdata)` averages predictions over all models.

`modavg()` averages a coefficient conditionally, over the models that contain it, and returns the [[Unconditional Variance|unconditional SE]] and interval. In MuMIn, `dredge()` builds all subsets and `model.avg()` averages them, reporting both full and conditional averages ([[Conditional vs Full Model Averaging]]). Both packages use AICc by default. The code below shows the AICcmodavg calls for three bird models; it is not run in the wiki build because the packages are not installed there, and the same arithmetic is easy by hand, as in the Model Averaging note.

They are used in the model selection lab ([[Course Website]]). `modavg()` does not use all models: it uses only those containing the parameter.

```r
# norun (AICcmodavg and MuMIn are not installed in the wiki's build environment)
library(AICcmodavg)
cands <- list(glm(birds ~ tree, poisson, d), glm(birds ~ shrub, poisson, d), glm(birds ~ tree + shrub, poisson, d))
nm <- c("tree", "shrub", "both")
aictab(cands, modnames = nm)
modavg(cands, parm = "tree", modnames = nm)
modavgPred(cands, modnames = nm, newdata = data.frame(tree = 30, shrub = 15), type = "response")
```

## Connections
- **Builds on:** [[Model Averaging]], [[Model Ranking Tables]]
- **Leads to:** [[Unconditional Variance]], [[Conditional vs Full Model Averaging]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection]]

## Flashcards

Which AICcmodavg functions build a ranking table and average a coefficient?
??
aictab() and modavg().
++++
