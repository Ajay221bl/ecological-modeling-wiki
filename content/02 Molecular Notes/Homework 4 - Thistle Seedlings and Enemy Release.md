---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - mixed
aliases:
  - "Homework 4"
  - "HW4"
  - "Thistle homework"
  - "Bull thistle homework"
  - "Mixed models homework"
  - "C_vulgare_seedling_dataset"
status: seedling
---

# Homework 4 - Thistle Seedlings and Enemy Release

> [!summary] In plain words
> Homework 4 asks whether a mixed model finds the enemy release signal a two-way ANOVA missed in a nested thistle seedling experiment, and the approach is to map the nesting, choose a count distribution, give sites and plots random effects, handle the 4-region problem, fit in a Bayesian way, check diagnostics and write it up as methods, results and conclusions with a critique of the design.

## The question
How do I approach Homework 4, including the post-mortem on the design?

## Built from
- [[Invasive Species]], [[Enemy Release Hypothesis]]: the ecology.
- [[Nested Experimental Design]], [[Nested Random Effects]], [[Pseudoreplication]]: the structure.
- [[Bounded Count]], [[Poisson vs Negative Binomial]], [[Overdispersion]]: the response.
- [[Two-way ANOVA vs Mixed Model]]: why the first analysis failed.
- [[Random Effect with Few Levels]]: the region problem.
- [[Bayesian Mixed Model Workflow in R]], [[How to write up a modeling analysis]]: the method and the report.

## The reasoning, step by step
1. **Map the design.** 4 regions → 10 sites → 10 plots per site (5 distances × spray or control) → 4 subplots per plot = 400 rows. Region 2 has a single site. Spray and distance vary within sites, so site is a block ([[Nested Experimental Design]]).
2. **Explore.** Seedling counts run from 0 to 81 per subplot (mean 17.6, 56 zeros), right-skewed. Plot counts against distance, coloured by spray, faceted by site: the site-to-site spread is the first thing you will see.
3. **Choose the distribution.** Counts out of about 538 / 4 ≈ 134 seeds per subplot, and the largest count (81) is a big share of that, so a binomial GLMM with `cbind(seedlings, 134 - seedlings)` is defensible; a Poisson or negative binomial GLMM is the common alternative. Say which and why ([[Bounded Count]]).
4. **Choose the fixed effects.** Enemy release predicts a spray × distance interaction: insect damage (the control-vs-insecticide gap) should be largest near the tall thistle patch. Distance can be numeric (scaled, maybe log(distance + 1)) or a factor with 5 levels.
5. **Choose the random effects.** `(1 | site/plot)` puts plots inside sites and gives subplots their plot's shared noise. Region has 4 levels with one single-site region; justify keeping, fixing or dropping it ([[Random Effect with Few Levels]]).
6. **Fit it the Bayesian way** with brms, weakly informative priors on the fixed effects and on each σ, and check R-hat, ESS, trace plots and a posterior predictive check ([[Bayesian Mixed Model Workflow in R]]).
7. **Diagnose.** Overdispersion (an observation-level random effect or negative binomial if needed), residuals against distance and site, and zeros: are there more than the model predicts ([[Zero Inflation]])?
8. **Results.** The posterior for the interaction, a marginal effects plot of seedlings against distance for each spray level with credible bands, and the variance components for site and plot.
9. **Post-mortem.** Only one tall thistle patch per site, and other patches nearby were not controlled, so "distance to tall thistle" is uncertain; spray and distance are not replicated within a site; 4 regions are too few to estimate region variation; and sowing by weight per plot makes the per-subplot ceiling approximate.

**A worked example in numbers.** Raw means show the signal before any model: control plots average 10.9 seedlings at 0 m versus 20.2 with insecticide, a gap of about 9.2, while at 60 m the gap is 0.1. The ANOVA judged this against residual noise that still contained the differences between sites.

## So in practice
Write the report the way the homework asks, as a short paper: methods (design, distribution, random effects, priors, diagnostics), results (figures, tables and text), and a conclusion that answers the student's question and lists the design's weaknesses.

## In R
```r
url <- "https://raw.githubusercontent.com/LivingLandscapes/Course_EcologicalModeling/master/data/C_vulgare_seedling_dataset.csv"
th <- read.csv(url); names(th) <- trimws(names(th)); th$spray <- trimws(th$spray)
th$region <- factor(th$region); th$site <- factor(th$site); th$plot <- factor(paste(th$spray, th$distance, sep = "."))
table(th$region, th$site)[, 1:10]                                     # region 2 = one site
c(n = nrow(th), max = max(th$seedlings), mean = round(mean(th$seedlings), 1), zeros = sum(th$seedlings == 0))
# Bayesian fit (not run here, it takes a few minutes):
# library(brms)
# th$trials <- 134; th$dist_s <- as.numeric(scale(log1p(th$distance)))
# m <- brm(seedlings | trials(trials) ~ spray * dist_s + (1 | site / plot), family = binomial(), data = th,
#          prior = c(prior(normal(0, 1), class = "b"), prior(exponential(1), class = "sd")), chains = 4, seed = 1)
```

## What would go wrong otherwise
Fitting `(1 | subplot)` as if subplots were groups (each subplot is one row), or ignoring that plot labels like "c.0" repeat at every site, which crosses plots across sites unless they are nested in site.

## Explain it back
- Why does the plot factor need to be nested in site?
- What two facts make region a weak random effect here?

*Pass test:* you can explain the design, pick and defend a GLMM for it, and write a methods paragraph and a design critique.

## Connections
- **Related:** [[Two-way ANOVA vs Mixed Model]], [[Bounded Count]], [[Homework 6 - Penguin Body Mass in brms]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 14 - Mixed Models|MOC - Mixed Models]], [[MOC 22 - Homework|MOC - Homework]]

## Flashcards

How many rows and levels does the thistle design have?
??
400 rows: 4 regions, 10 sites, 10 plots per site, 4 subplots per plot.
++++

Which fixed-effect term tests enemy release?
??
The spray × distance interaction.
++++

Why write (1 | site/plot) rather than (1 | plot)?
??
Plot labels such as "c.0" repeat at every site, so plot must be nested in site to be a unique group.
++++
