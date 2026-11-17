---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "Block"
  - "Randomized block design"
  - "Blocking factor"
  - "Block effect"
status: seedling
---

# Blocking

**In one line:** blocking groups experimental units that are similar (same field, same day) and applies every treatment within each block, so differences between blocks don't blur treatment comparisons.

> [!info] Before this, it helps to know
> [[Study Design|Experimental Design]] · [[Random Effect]] (blocks are often random)

## Start from zero
1. **Example:** four fields, each split into plots, every fertiliser level in every field.
2. **Treatments are compared within blocks,** removing field-to-field variation from the error.
3. **Blocks are usually random effects** (`(1 | field)`) because they are a sample of possible fields.
4. **With few blocks (2 or 3)** a fixed block effect is also common.
5. **Blocks and treatments are crossed,** unlike nested designs where treatments are applied to whole units.

## In R
```r
set.seed(8); d <- expand.grid(field = factor(1:5), fert = factor(c("lo", "mid", "hi"), levels = c("lo", "mid", "hi"))); d$y <- 10 + rnorm(5, 0, 3)[d$field] + c(0, 1, 2)[d$fert] + rnorm(15, 0, 0.5)
round(c(SE_ignoring_blocks = summary(lm(y ~ fert, d))$coef["ferthi", 2], SE_with_blocks = summary(lme4::lmer(y ~ fert + (1 | field), d))$coef["ferthi", 2]), 2)
```

## In the course
Shipley et al. (2022) use nest as a blocking variable ([[Shipley et al. 2022]]).

## Common confusions
- **"Blocking is the same as nesting."** In a block design every treatment occurs in every block.

## Explain it back
- Why does blocking shrink treatment SEs?

*Pass test:* you can analyse a randomised block design.

## Connections
- **Builds on:** [[Study Design|Experimental Design]], [[Random Effect]]
- **Leads to:** [[Nested Experimental Design]], [[Crossed Random Effects]]
- **Part of:** [[MOC - Mixed Models]]

## Flashcards

What is blocking?
??
Grouping similar units and applying every treatment within each group, so block differences don't inflate error.
++++
