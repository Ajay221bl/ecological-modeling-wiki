---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "Fixed effects"
  - "Population-level effect"
  - "Fixed factor"
status: seedling
---

# Fixed Effect

**In one line:** a fixed effect is a parameter estimated directly as a single value, such as an average slope or the difference between treatments, that applies to the whole population of interest.

> [!info] Before this, it helps to know
> [[Parameter]] · [[Regression Coefficient]]

## Start from zero
1. **Every coefficient in an ordinary `lm()` is a fixed effect.**
2. **In a mixed model, fixed effects are the "average" relationships,** the population-level part.
3. **A grouping variable fitted as fixed** gets one parameter per level (minus one). Each level is estimated on its own, with no sharing of information.
4. **Use fixed effects for:** the predictors you want to test or interpret, treatments, and factors with few levels that are all of interest (sex, treatment).
5. **`fixef(m)`** extracts them from an lme4 model.
6. **"Fixed" has several meanings in the literature** (Gelman lists five), so say what you mean.

## In R
```r
library(lme4); m <- lmer(Reaction ~ Days + (1 | Subject), data = sleepstudy); round(fixef(m), 2)
```

## In the course
[[Harrison et al. 2018]]. Linear mixed models lab ([[Course Website]]).

## Common confusions
- **"Fixed effects are the important ones."** They are the ones estimated individually.

## Explain it back
- What does fixef() return?

*Pass test:* you can say which terms in your model are fixed.

## Connections
- **Builds on:** [[Parameter]], [[Regression Coefficient]]
- **Leads to:** [[Random Effect]], [[Mixed Effects Model]]
- **Part of:** [[MOC - Mixed Models]], molecular note [[Fixed vs Random Effects]]

## Flashcards

What is a fixed effect?
??
A parameter estimated directly as a single value applying to the whole population, such as an average slope.
++++
