---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "Restricted maximum likelihood"
  - "Residual maximum likelihood"
  - "REML estimation"
status: seedling
---

# REML

**In one line:** REML estimates variance components after removing the information used up by the fixed effects, which avoids the downward bias in variances that ordinary maximum likelihood has.

> [!info] Before this, it helps to know
> [[Maximum Likelihood Estimation]] · [[Variance Components]] · [[Degrees of Freedom]]

## The everyday picture
Dividing by n − 1 instead of n for a sample variance, generalised. ML forgets that the fixed effects were estimated from the same data; REML remembers.

## Start from zero
1. **ML variance estimates are biased low,** because they treat the estimated fixed effects as if known.
2. **REML maximises a likelihood of residual contrasts** that don't depend on the fixed effects.
3. **For a simple sample, ML variance divides by n; REML by n − 1.**
4. **Use REML** for final estimates of variance components and for comparing models that differ only in random effects (same fixed effects).
5. **Use ML** for comparing models with different fixed effects. REML likelihoods for different fixed structures are not comparable.
6. **The difference is small with many groups and few fixed effects,** large with few groups.
7. **Default in `lmer()` and `lme()`. Not available for GLMMs in lme4** (glmer uses ML).

## In R
```r
library(lme4); m_reml <- lmer(Reaction ~ Days + (1 | Subject), sleepstudy); m_ml <- update(m_reml, REML = FALSE)
round(rbind(REML = as.data.frame(VarCorr(m_reml))$sdcor, ML = as.data.frame(VarCorr(m_ml))$sdcor), 2)       # ML variances slightly smaller
```

## In the course
[[Zuur et al. 2009 Ch5]] (REML for random structure, ML for fixed). [[Harrison et al. 2018]]. Linear mixed models lab ([[Course Website]]).

## Common confusions
- **"Compare any two models by AIC from REML fits."** Only if their fixed effects are identical.

## Explain it back
- Why are ML variance estimates biased low?

*Pass test:* you can choose REML or ML for each comparison.

## Connections
- **Builds on:** [[Maximum Likelihood Estimation]], [[Variance Components]], [[Degrees of Freedom]]
- **Leads to:** [[REML vs ML]], [[Top-down Model Selection Protocol]], [[Why the variance divides by n minus 1]]
- **Part of:** [[MOC - Mixed Models]]

## Flashcards

What is REML?
??
Restricted maximum likelihood: estimating variances after accounting for the fixed effects, which reduces bias.
++++

When must you use ML rather than REML?
??
When comparing models with different fixed effects.
++++
