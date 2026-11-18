---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "`bootMer()` performs a parametric bootstrap for lme4 models: it simulates new responses from the fitted model, refits the model to each, and collects any statistic you ask for."
aliases:
  - "bootMer"
  - "Parametric bootstrap for mixed models"
  - "Bootstrap with lme4"
status: seedling
---

# bootMer()

`bootMer()` performs a [[Parametric Bootstrap]] for lme4 models: it simulates new responses from the fitted model, refits the model to each, and collects any statistic you ask for ([[lmer()|lmer() and glmer()]], [[Simulating Data]]). The call is `bootMer(m, FUN = function(fit) fixef(fit), nsim = 1000, type = "parametric")`, and FUN can return anything: [[Fixed Effect|fixed effects]], SDs from `as.data.frame(VarCorr(fit))$sdcor`, or predictions. Each simulation draws new [[Random Effect|random effects]] and residuals from the fitted model (the default `use.u = FALSE`).

Take quantiles of the [[Replication|replicates]] for intervals, or use `boot::boot.ci(b, type = "perc", index = 1)`. It is slow because each replicate refits, so use `parallel = "multicore", ncpus = 4` (not on Windows) or `"snow"` ([[Parallel Computing in R]]). Prediction intervals for new groups can be built by bootstrapping `predict(fit, newdata, re.form = NA)` and adding simulated group and residual variation ([[Confidence Envelopes]]). In the code below 200 replicates give [[Quantile|percentile]] intervals of 9 to 12 ms per day for the Days slope and 25.5 to 50.0 for the subject SD, similar to the profile intervals ([[Confidence Intervals for Variance Components]]).

It is run in parallel in the [[GLMM]] lab and the CIs for [[Mixed Effects Model|mixed models]] lab ([[Course Website]]). `bootMer` does not resample rows: it simulates new data from the model, which is parametric, not case resampling ([[Bootstrap]]).

```r
library(lme4); m <- lmer(Reaction ~ Days + (1 | Subject), sleepstudy); set.seed(1)
b <- bootMer(m, function(f) c(Days = fixef(f)[["Days"]], sd_subj = as.data.frame(VarCorr(f))$sdcor[1]), nsim = 200)
round(apply(b$t, 2, quantile, c(0.025, 0.975)), 1)         # percentile intervals for the slope and the subject SD
```

## Connections
- **Builds on:** [[Parametric Bootstrap]], [[lmer()|lmer() and glmer()]], [[Simulating Data]], [[Fixed Effect]], [[Random Effect]], [[Replication]], [[Quantile]], [[GLMM]], [[Mixed Effects Model]]
- **Leads to:** [[Confidence Intervals for Variance Components]], [[Percentile Bootstrap Interval]], [[Parallel Computing in R]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

What does bootMer() do?
??
Simulates new responses from a fitted lme4 model, refits, and collects a statistic each time (parametric bootstrap).
++++
