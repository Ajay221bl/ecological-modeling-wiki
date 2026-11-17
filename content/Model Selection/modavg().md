---
type: atomic
tags:
  - selection
  - flashcards/eco/selection
aliases:
  - "AICcmodavg"
  - "modavg"
  - "modavgPred()"
  - "model.avg()"
  - "MuMIn model averaging"
status: seedling
---

# modavg()

**In one line:** `modavg()` and `modavgPred()` in the AICcmodavg package, and `model.avg()` in MuMIn, compute model-averaged coefficients or predictions with unconditional standard errors from a list of fitted models.

> [!info] Before this, it helps to know
> [[Model Averaging]] (what they compute) · [[Model Ranking Tables]] (the same packages make them)

## Start from zero
1. **AICcmodavg:** `aictab(cand.set, modnames)`, `modavg(cand.set, parm = "tree", modnames)`, `modavgPred(cand.set, modnames, newdata)`.
2. **`modavg()` averages a coefficient conditionally** over models that contain it, and returns the unconditional SE and interval.
3. **`modavgPred()` averages predictions** over all models.
4. **MuMIn:** `dredge()` builds all subsets, `model.avg()` averages them and reports both full and conditional averages.
5. **Both use AICc by default.**
6. **The same arithmetic is easy by hand,** as in the Model Averaging note.

## In R
```r
# norun (AICcmodavg and MuMIn are not installed in the wiki's build environment)
library(AICcmodavg)
cands <- list(glm(birds ~ tree, poisson, d), glm(birds ~ shrub, poisson, d), glm(birds ~ tree + shrub, poisson, d))
nm <- c("tree", "shrub", "both")
aictab(cands, modnames = nm)
modavg(cands, parm = "tree", modnames = nm)
modavgPred(cands, modnames = nm, newdata = data.frame(tree = 30, shrub = 15), type = "response")
```

## In the course
Model selection lab ([[Course Website]]).

## Common confusions
- **"modavg uses all models."** It uses only those containing the parameter.

## Explain it back
- Which function gives averaged predictions?

*Pass test:* you can run the AICcmodavg workflow.

## Connections
- **Builds on:** [[Model Averaging]], [[Model Ranking Tables]]
- **Leads to:** [[Unconditional Variance]], [[Conditional vs Full Model Averaging]]
- **Part of:** [[MOC - Model Selection]]

## Flashcards

Which AICcmodavg functions build a ranking table and average a coefficient?
??
aictab() and modavg().
++++
