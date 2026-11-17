---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "A nested experimental design applies treatments to large units and then measures smaller units inside them, so the large units, not the small ones, are the replicates for the treatment."
aliases:
  - "Nested design"
  - "Split-plot design"
  - "Hierarchical design"
  - "Subsampling design"
status: seedling
---

# Nested Experimental Design

A **nested experimental design** applies treatments to large units and then measures smaller units inside them, so the large units, not the small ones, are the replicates for the treatment ([[Replication]], [[Sampling Unit]], [[Nested Random Effects]]). With 6 ponds, 3 fertilised and 3 controls, and 10 fish measured in each pond, the treatment n is 3 ponds per group, not 30 fish. In a split-plot design whole plots get one treatment and subplots inside them another, and each factor has its own error level.

Analyse it with a random effect for the large unit, `lmer(size ~ treatment + (1 | pond))`, so the treatment effect is tested against pond-to-pond variation. Ignoring the nesting is [[Pseudoreplication]] (Hurlbert 1984). In the code below there is no real treatment effect, only pond differences: a plain `lm()` on the 60 fish gives a falsely significant p = 0.004, while the mixed model gives p = 0.46.

It is used in the mixed models labs ([[Course Website]], [[Zuur et al. 2009 Ch5]]). Subsamples do not add replication for the treatment; they improve the estimate for each unit, not the number of units.

```r
set.seed(7); d <- data.frame(pond = factor(rep(1:6, each = 10)), trt = rep(c("fert", "ctrl"), each = 30)); d$size <- 10 + rnorm(6, 0, 2)[d$pond] + rnorm(60)
round(c(p_wrong_lm = summary(lm(size ~ trt, d))$coef[2, 4], p_mixed = anova(lmerTest::lmer(size ~ trt + (1 | pond), d))[["Pr(>F)"]]), 3)
```

## Connections
- **Builds on:** [[Replication]], [[Sampling Unit]], [[Nested Random Effects]]
- **Leads to:** [[Pseudoreplication]], [[Two-way ANOVA]], [[Blocking]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

In a nested design, what is the replicate for the treatment?
??
The large unit the treatment was applied to, not the subsamples within it.
++++
