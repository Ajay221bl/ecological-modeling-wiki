---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "Nested design"
  - "Split-plot design"
  - "Hierarchical design"
  - "Subsampling design"
status: seedling
---

# Nested Experimental Design

**In one line:** a nested experimental design applies treatments to large units and then measures smaller units inside them, so the large units, not the small ones, are the replicates for the treatment.

> [!info] Before this, it helps to know
> [[Replication]] · [[Sampling Unit]] · [[Nested Random Effects]]

## Start from zero
1. **Example:** 6 ponds, 3 fertilised and 3 controls, 10 fish measured in each pond. Treatment n is 3 ponds per group, not 30 fish.
2. **Split-plot:** whole plots get one treatment, subplots inside them another. Each factor has its own error level.
3. **Analyse with a random effect for the large unit:** `lmer(size ~ treatment + (1 | pond))`.
4. **The treatment effect is tested against pond-to-pond variation,** which the mixed model handles automatically.
5. **Ignoring the nesting is pseudoreplication** (Hurlbert 1984).

## In R
```r
set.seed(7); d <- data.frame(pond = factor(rep(1:6, each = 10)), trt = rep(c("fert", "ctrl"), each = 30)); d$size <- 10 + rnorm(6, 0, 2)[d$pond] + rnorm(60)
round(c(p_wrong_lm = summary(lm(size ~ trt, d))$coef[2, 4], p_mixed = anova(lmerTest::lmer(size ~ trt + (1 | pond), d))[["Pr(>F)"]]), 3)
```

## In the course
Mixed models labs ([[Course Website]]). [[Zuur et al. 2009 Ch5]].

## Common confusions
- **"Subsamples add replication for the treatment."** They improve the estimate of each unit, not the number of units.

## Explain it back
- In the pond example, what is n for the treatment?

*Pass test:* you can identify the replicate in a nested design.

## Connections
- **Builds on:** [[Replication]], [[Sampling Unit]], [[Nested Random Effects]]
- **Leads to:** [[Pseudoreplication]], [[Two-way ANOVA]], [[Blocking]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

In a nested design, what is the replicate for the treatment?
??
The large unit the treatment was applied to, not the subsamples within it.
++++
