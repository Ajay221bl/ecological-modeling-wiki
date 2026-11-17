---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - mixed
aliases:
  - "ANOVA vs mixed model"
  - "Why ANOVA missed the effect"
  - "ANOVA or GLMM"
status: seedling
---

# Two-way ANOVA vs Mixed Model

> [!summary] In plain words
> a two-way ANOVA treats every measurement as independent and its response as Normal, so on nested field data with counts it can hide a real effect that a mixed model, which separates site-to-site noise and uses a count distribution, can find.

## The question
Why can a two-way ANOVA miss an effect that a mixed model detects in the same data?

## Built from
- [[Two-way ANOVA]]: two factors and their interaction, with Normal errors and independent observations.
- [[Nested Experimental Design]] and [[Pseudoreplication]]: subplots inside plots inside sites inside regions.
- [[Random Intercept]] and [[Variance Components]]: soaking up the variation between sites.
- [[GLMM|Generalized Linear Mixed Model]], [[Bounded Count]], [[Count Data]]: a distribution that fits seedling counts.
- [[Random Effect with Few Levels]]: the region problem.

## The reasoning, step by step
1. **What the ANOVA assumes.** Every one of the 400 subplot counts is an independent draw from a Normal distribution with the same variance, and the only structure is spray, distance and their interaction ([[ANOVA]]).
2. **What the design really is.** 10 sites, each with 10 plots (5 distances × 2 spray treatments), each with 4 subplots. Subplots in one plot share soil and seed predators; plots at one site share weather and history. The real replicates of a treatment are sites, not subplots ([[Pseudoreplication]]).
3. **Where the ANOVA loses power.** Sites differ a lot in how many seedlings they produce. In an ANOVA that site-to-site variation stays in the residual, so it inflates the noise every treatment effect is compared against, and a real distance effect can disappear under it.
4. **Where it can also mislead.** Counts near zero are skewed and their variance grows with their mean, so Normal errors are wrong: some groups look more variable than others, and tests are unreliable ([[Homogeneity of Variance|Homoscedasticity]], [[Why the response type decides the distribution]]).
5. **What the mixed model changes.** A random intercept for site (and for plot within site) moves site-level variation out of the residual, so the treatment effects are judged against within-site noise. The comparison is now "at the same site, does distance change seedlings?", which is the experiment's real question ([[Why use a random effect instead of a fixed effect]]).
6. **And the distribution.** A Poisson, negative binomial or binomial GLMM fits counts that cannot go below zero and whose spread grows with the mean ([[Poisson vs Negative Binomial]], [[Bounded Count]]).
7. **Then check it.** Overdispersion, residuals by site and distance, and whether the region variance is estimable ([[DHARMa Simulated Residuals]], [[Random Effect with Few Levels]]).

**A worked example in numbers.** In the thistle data the site means are not shown here, but the treatment means are: control plots average 10.9 seedlings at 0 m and 14.0 to 19.7 farther away, while insecticide plots sit at 17.9 to 21.8 everywhere. The insecticide-minus-control gap is about 9.2 at 0 m, 7.6 at 7.5 m, 2.0 at 15 m, 4.3 at 30 m and 0.1 at 60 m: herbivores seem to cut seedlings most close to the tall thistle patch, which is a spray × distance interaction, the pattern enemy release predicts. Site means range from 2.1 to 34.7 seedlings per subplot. The two-way ANOVA on these data finds spray (p = 0.002) but not distance (p = 0.20) or the interaction (p = 0.26). A Poisson GLMM with plots nested in sites finds a positive distance effect for control plots (0.34 per SD of distance, SE 0.13) and a negative spray × distance interaction (−0.43, SE 0.17): the signal was there, hidden under site noise. That quick Poisson fit is likely overdispersed, so a final analysis should check that and may move to a negative binomial or observation-level random effect.

## So in practice
Before trusting an ANOVA on field data, draw the design as a nesting diagram, ask what the true replicate is, and give each level above the observation its own random effect.

## In R
```r
url <- "https://raw.githubusercontent.com/LivingLandscapes/Course_EcologicalModeling/master/data/C_vulgare_seedling_dataset.csv"
th <- read.csv(url); names(th) <- trimws(names(th)); th$spray <- trimws(th$spray)
th$site <- factor(th$site); th$plot <- factor(paste(th$site, th$spray, th$distance))
mu <- tapply(th$seedlings, list(th$spray, th$distance), mean); round(rbind(mu, gap = mu["i", ] - mu["c", ]), 1)
round(sort(tapply(th$seedlings, th$site, mean)), 1)                       # site-to-site variation the ANOVA leaves in the residual
summary(aov(seedlings ~ spray * factor(distance), th))[[1]][, c("Df", "F value", "Pr(>F)")]
library(lme4)
m <- glmer(seedlings ~ spray * scale(distance) + (1 | site / plot), family = poisson, data = th)
round(coef(summary(m)), 3)
```

## What would go wrong otherwise
Concluding "no effect of distance, the enemy release hypothesis is dead" from a test whose error term was swollen by site differences and whose Normal assumption did not fit the counts.

## Explain it back
- Why is a subplot not a true replicate of a spray treatment?
- How does a random intercept for site make a distance effect easier to detect?

*Pass test:* you can explain to the graduate student, without equations, why the ANOVA and the mixed model gave different answers.

## Connections
- **Related:** [[Homework 4 - Thistle Seedlings and Enemy Release]], [[Fixed vs Random Effects]], [[Nested vs Crossed Random Effects]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 14 - Mixed Models|MOC - Mixed Models]], [[MOC 22 - Homework|MOC - Homework]]

## Flashcards

Why does unmodelled site variation hurt an ANOVA?
??
It stays in the residual, inflating the noise that every treatment effect is tested against.
++++

What is the true replicate of a treatment in the thistle experiment?
??
The site (each site has one full set of treatments), not the subplot.
++++

What pattern in the thistle means fits enemy release?
??
Insecticide raises seedlings most near the tall thistle patch, a spray × distance interaction.
++++
