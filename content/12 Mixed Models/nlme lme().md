---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "lme()"
  - "nlme package"
status: seedling
---

# nlme lme()

**In one line:** `lme()` from the nlme package fits linear mixed models and, unlike lme4, also accepts residual correlation structures and variance structures.

> [!info] Before this, it helps to know
> [[Linear Mixed Model]] · [[Correlation Structure]] · [[Variance Structures]]

## Start from zero
1. **Syntax:** `lme(y ~ x, random = ~ 1 | site, data = d)`. Nested: `random = ~ 1 | site/plot`.
2. **Extra arguments:** `correlation = corAR1(form = ~ year | site)` and `weights = varIdent(form = ~ 1 | sex)`.
3. **REML by default** (`method = "ML"` to change).
4. **Prints p-values** for fixed effects using its own denominator degrees of freedom.
5. **Weaknesses:** no crossed random effects in a simple way, Gaussian only (`glmmPQL` in MASS wraps it for GLMMs).
6. **Zuur et al. (2009) use nlme throughout** because of the correlation and variance options.

## In R
```r
library(nlme); m <- lme(Reaction ~ Days, random = ~ Days | Subject, data = lme4::sleepstudy); round(fixef(m), 2); round(as.numeric(VarCorr(m)[, "StdDev"]), 1)
```

## In the course
[[Zuur et al. 2009 Ch5]].

## Common confusions
- **"lme and lmer give different answers."** For the same model and method they agree closely.

## Explain it back
- What can lme() do that lmer() cannot?

*Pass test:* you can translate between lme and lmer syntax.

## Connections
- **Builds on:** [[Linear Mixed Model]], [[Correlation Structure]], [[Variance Structures]]
- **Leads to:** [[lmer() and glmer()]], [[Generalized Least Squares]], [[Penalized Quasi-likelihood]]
- **Part of:** [[MOC 14 - Mixed Models|MOC - Mixed Models]]

## Flashcards

What does nlme's lme() offer that lme4's lmer() does not?
??
Residual correlation structures and variance structures.
++++

How is a random intercept by site written in lme()?
??
random = ~ 1 | site.
++++
