---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "bootMer"
  - "Parametric bootstrap for mixed models"
  - "Bootstrap with lme4"
status: seedling
---

# bootMer()

**In one line:** `bootMer()` performs a parametric bootstrap for lme4 models: it simulates new responses from the fitted model, refits the model to each, and collects any statistic you ask for.

> [!info] Before this, it helps to know
> [[Parametric Bootstrap]] · [[lmer() and glmer()]] · [[Simulating Data]]

## Start from zero
1. **Call:** `bootMer(m, FUN = function(fit) fixef(fit), nsim = 1000, type = "parametric")`.
2. **FUN can return anything:** fixed effects, SDs (`as.data.frame(VarCorr(fit))$sdcor`), predictions.
3. **Each simulation** draws new random effects and residuals from the fitted model (default `use.u = FALSE`).
4. **Intervals:** take quantiles of the replicates, or use `boot::boot.ci(b, type = "perc", index = 1)`.
5. **Slow:** each replicate refits. Use `parallel = "multicore", ncpus = 4` (not on Windows) or `"snow"`.
6. **Prediction intervals for new groups** can be built by bootstrapping `predict(fit, newdata, re.form = NA)` plus simulated group and residual variation.

## In R
```r
library(lme4); m <- lmer(Reaction ~ Days + (1 | Subject), sleepstudy); set.seed(1)
b <- bootMer(m, function(f) c(Days = fixef(f)[["Days"]], sd_subj = as.data.frame(VarCorr(f))$sdcor[1]), nsim = 200)
round(apply(b$t, 2, quantile, c(0.025, 0.975)), 1)         # percentile intervals for the slope and the subject SD
```

## In the course
Parametric bootstrap with `bootMer()` in the GLMM lab and the CIs for mixed models lab, run in parallel ([[Course Website]]).

## Common confusions
- **"bootMer resamples rows."** It simulates new data from the model (parametric), not case resampling.

## Explain it back
- What does use.u = FALSE mean?

*Pass test:* you can bootstrap any quantity from an lme4 model.

## Connections
- **Builds on:** [[Parametric Bootstrap]], [[lmer() and glmer()]], [[Simulating Data]]
- **Leads to:** [[Confidence Intervals for Variance Components]], [[Percentile Bootstrap Interval]], [[Parallel Computing in R]]
- **Part of:** [[MOC - Mixed Models]]

## Flashcards

What does bootMer() do?
??
Simulates new responses from a fitted lme4 model, refits, and collects a statistic each time (parametric bootstrap).
++++
