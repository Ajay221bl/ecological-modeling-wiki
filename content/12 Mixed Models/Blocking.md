---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "Blocking groups experimental units that are similar (same field, same day) and applies every treatment within each block, so differences between blocks don't blur treatment comparisons."
aliases:
  - "Block"
  - "Randomized block design"
  - "Blocking factor"
  - "Block effect"
status: seedling
---

# Blocking

**Blocking** groups similar experimental units, such as plots in the same field or runs on the same day, and applies every treatment within each block, so differences between blocks don't blur treatment comparisons ([[Study Design|Experimental Design]]). For example, four fields are each split into plots and every fertiliser level goes in every field. Treatments are compared within blocks, removing field-to-field variation from the error.

Blocks are usually a [[Random Effect]], `(1 | field)`, because they are a sample of possible fields; with only 2 or 3 blocks a fixed block effect is also common ([[How Many Levels for a Random Effect]]). Blocks and treatments are crossed, unlike a [[Nested Experimental Design]] where treatments are applied to whole units. In the code below five fields with large differences give a [[Standard Error|standard error]] of 1.41 for the high-fertiliser effect if blocks are ignored, and 0.34 with a random block effect.

[[Shipley et al. 2022]] use nest as a blocking variable. Blocking is not the same as nesting: in a block design every treatment occurs in every block.

```r
set.seed(8); d <- expand.grid(field = factor(1:5), fert = factor(c("lo", "mid", "hi"), levels = c("lo", "mid", "hi"))); d$y <- 10 + rnorm(5, 0, 3)[d$field] + c(0, 1, 2)[d$fert] + rnorm(15, 0, 0.5)
round(c(SE_ignoring_blocks = summary(lm(y ~ fert, d))$coef["ferthi", 2], SE_with_blocks = summary(lme4::lmer(y ~ fert + (1 | field), d))$coef["ferthi", 2]), 2)
```

## Connections
- **Builds on:** [[Study Design|Experimental Design]], [[Random Effect]], [[Standard Error]]
- **Leads to:** [[Nested Experimental Design]], [[Crossed Random Effects]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

What is blocking?
??
Grouping similar units and applying every treatment within each group, so block differences don't inflate error.
++++
