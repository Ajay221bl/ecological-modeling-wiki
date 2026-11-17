---
type: atomic
tags:
  - mixed
  - flashcards/eco/mixed
aliases:
  - "Nested random effect"
  - "(1 | site/plot)"
  - "Hierarchical random effects"
  - "Nested grouping"
status: seedling
---

# Nested Random Effects

**In one line:** random effects are nested when each level of a lower grouping belongs to exactly one level of a higher grouping, such as plots within sites or chicks within nests.

> [!info] Before this, it helps to know
> [[Grouping Factor]] · [[Hierarchical Data]]

## Start from zero
1. **Each plot belongs to one site.** Plot 1 at site A and plot 1 at site B are different plots.
2. **lme4:** `(1 | site/plot)` expands to `(1 | site) + (1 | site:plot)`.
3. **If plot labels are already unique across sites,** `(1 | site) + (1 | plot)` gives the same model.
4. **Danger:** non-unique labels with `(1 | plot)` alone wrongly pools all "plot 1"s across sites.
5. **Each level gets its own variance component.**
6. **Draw the design** to see whether factors are nested or crossed (Harrison et al.; Schielzeth and Nakagawa 2013).

## In R
```r
set.seed(1); d <- expand.grid(site = factor(1:6), plot = factor(1:4), rep = 1:3); s <- rnorm(6, 0, 2); p <- rnorm(24, 0, 1); d$y <- 10 + s[d$site] + p[as.integer(d$site) + 6 * (as.integer(d$plot) - 1)] + rnorm(72)
m <- lme4::lmer(y ~ 1 + (1 | site/plot), data = d); as.data.frame(lme4::VarCorr(m))[, c("grp", "sdcor")]
```

## In the course
[[Harrison et al. 2018]]. [[Zuur et al. 2009 Ch5]] (nested data). Linear mixed models lab ([[Course Website]]).

## Common confusions
- **"Nested and crossed are about the biology."** They are about how labels map onto each other in the data.

## Explain it back
- What does (1 | site/plot) expand to?

*Pass test:* you can specify nested random effects safely.

## Connections
- **Builds on:** [[Grouping Factor]], [[Hierarchical Data]]
- **Leads to:** [[Crossed Random Effects]], [[lme4 Random-effect Syntax]], [[Nested Experimental Design]]
- **Part of:** [[MOC - Mixed Models]], molecular note [[Nested vs Crossed Random Effects]]

## Flashcards

What does (1 | site/plot) mean in lme4?
??
Random intercepts for site and for plot within site: (1 | site) + (1 | site:plot).
++++

When are random effects nested?
??
When each level of the lower factor occurs in only one level of the higher factor.
++++
