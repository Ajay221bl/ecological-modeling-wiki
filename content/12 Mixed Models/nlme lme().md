---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
description: "`lme()` from the nlme package fits linear mixed models and, unlike lme4, also accepts residual correlation structures and variance structures."
aliases:
  - "lme()"
  - "nlme package"
status: seedling
---

# nlme lme()

`lme()` from the nlme package fits [[Linear Mixed Model|linear mixed models]] and, unlike lme4, also accepts residual correlation structures and [[Variance Structures]] ([[Correlation Structure]]). The syntax puts the random part in its own argument: `lme(y ~ x, random = ~ 1 | site, data = d)`, or `random = ~ 1 | site/plot` for nesting. Extra arguments add `correlation = corAR1(form = ~ year | site)` and `weights = varIdent(form = ~ 1 | sex)`. It uses [[REML]] by default (`method = "ML"` to change) and prints p-values for [[Fixed Effect|fixed effects]] using its own [[p-values in Mixed Models|denominator degrees of freedom]].

Its weaknesses are that [[Crossed Random Effects|crossed random effects]] are awkward and it is [[Normal Distribution|Gaussian]] only, though `MASS::glmmPQL` wraps it for GLMMs ([[Penalized Quasi-likelihood]]). In the code below `lme()` fits the same `sleepstudy` model as `lmer()` and gives the same fixed effects, 251.41 and 10.47, and the same SDs, 24.7 for intercepts, 5.9 for slopes and 25.6 for the residual.

Zuur et al. (2009) use nlme throughout because of its correlation and variance options ([[Zuur et al. 2009 Ch5]]). `lme` and `lmer` do not give different answers: for the same model and method they agree closely.

```r
library(nlme); m <- lme(Reaction ~ Days, random = ~ Days | Subject, data = lme4::sleepstudy); round(fixef(m), 2); round(as.numeric(VarCorr(m)[, "StdDev"]), 1)
```

## Connections
- **Builds on:** [[Linear Mixed Model]], [[Correlation Structure]], [[Variance Structures]], [[REML]], [[Fixed Effect]], [[p-values in Mixed Models]], [[Crossed Random Effects]], [[Normal Distribution]]
- **Leads to:** [[lmer()|lmer() and glmer()]], [[Generalized Least Squares]], [[Penalized Quasi-likelihood]]
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
