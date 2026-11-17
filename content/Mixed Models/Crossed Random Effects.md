---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "Crossed random effect"
  - "Cross-classified random effects"
  - "(1 | site) + (1 | year)"
status: seedling
---

# Crossed Random Effects

**In one line:** random effects are crossed when levels of two groupings combine freely, such as every site measured in every year, so each observation belongs to one site and one year independently.

> [!info] Before this, it helps to know
> [[Grouping Factor]]

## Start from zero
1. **Site 1 is measured in 2019, 2020 and 2021. So is site 2.** Year isn't inside site.
2. **lme4:** `(1 | site) + (1 | year)`.
3. **Each grouping explains its own share of variance:** site-to-site and year-to-year.
4. **Partially crossed designs** (not every combination observed) are handled the same way.
5. **lme4 handles crossed effects easily;** nlme's `lme()` does not.
6. **Christensen et al. (2020)** used random intercepts for state and for year: crossed effects.

## In R
```r
set.seed(2); d <- expand.grid(site = factor(1:10), year = factor(2015:2020)); d$y <- 5 + rnorm(10, 0, 1.5)[d$site] + rnorm(6, 0, 0.8)[d$year] + rnorm(60, 0, 0.5)
m <- lme4::lmer(y ~ 1 + (1 | site) + (1 | year), data = d); as.data.frame(lme4::VarCorr(m))[, c("grp", "sdcor")]
```

## In the course
[[Christensen et al. 2020]]. [[Harrison et al. 2018]].

## Common confusions
- **"Use site/year for repeated years."** That nests year within site, giving a separate year effect for every site.

## Explain it back
- How do you write crossed site and year intercepts in lme4?

*Pass test:* you can tell crossed from nested in your design.

## Connections
- **Builds on:** [[Grouping Factor]]
- **Leads to:** [[Nested Random Effects]], [[lme4 Random-effect Syntax]], [[nlme lme()]]
- **Part of:** [[MOC - Mixed Models]], molecular note [[Nested vs Crossed Random Effects]]

## Flashcards

When are random effects crossed?
??
When levels of two groupings combine freely, such as every site sampled in every year.
++++

How are crossed site and year random intercepts written in lme4?
??
(1 | site) + (1 | year).
++++
