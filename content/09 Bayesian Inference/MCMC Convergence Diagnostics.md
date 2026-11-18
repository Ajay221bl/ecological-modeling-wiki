---
type: atomic
tags:
  - bayesian-inference
  - diagnostics
  - flashcards
aliases:
  - "convergence diagnostics"
  - "Gelman-Rubin"
  - "R-hat"
  - "trace plot"
  - "burn-in"
status: seedling
---

# MCMC Convergence Diagnostics
**In one line:** Checks that the MCMC random walk has wandered long enough, and settled well enough, that its footprints really map the posterior.

> [!info] Before this, it helps to know
> [[MCMC]] (the walk being checked) · [[Spread and Variability]] (the main check compares spreads) · [[Posterior]] (the map we want)

## Start from zero
Back to the foggy island from [[MCMC]]. You send out **three hikers**, dropped at very different spots: north beach, south cliff, east swamp. Each follows the same walking rule.

At first their footprints look completely different: each is still near its drop-off. After a while, if all is well, they all wander the same high ground, and their footprint maps look alike. Then you trust the map.

If after hours their maps still disagree, something is wrong: they haven't walked long enough, or the island has a feature that traps them.

**Convergence** means the walk has settled into the posterior: more steps wouldn't meaningfully change the map. Such chains are called **stationary** ([[Hobbs and Hooten 2015 Ch7]], p. 170).

## Why it exists
MCMC can give "answers that are dramatically wrong" if chains haven't settled (Ch7, p. 170), and it won't warn you. These checks are the warning.

Main tools (pp. 172-176):
- **Burn-in:** throw away the early steps that still reflect the drop-off point. Usually judged by eye (p. 172).
- **Trace plot:** each hiker's position against step number. Settled chains look like a flat, fuzzy band ("hairy caterpillar"); unsettled ones drift (p. 173, fig. 7.3.4).
- **Mixing and thinning:** a chain that takes tiny steps "mixes poorly": each draw nearly copies the last, so you need a longer walk. Thinning keeps every k-th draw, but too much throws away information (pp. 172-173).
- **Gelman-Rubin r̂ ("R-hat"):** compares the spread *between* hikers with the spread *within* each hiker. If they all map the same ground, the two match and r̂ is about 1. Custom is to keep going until r̂ is below 1.1 for every parameter (p. 174). In R, `gelman.diag()` in the coda package computes it (p. 175).
- Others (Geweke, Heidelberger-Welch, Raftery-Lewis) each catch different problems; none is enough alone (pp. 175-176).

## A tiny example
Three chains estimating a site's average richness (summaries of their draws):

| Chain | Started at | Mean of its draws | Spread within it |
|---|---|---|---|
| A | 2 | 6.1 | about 1 |
| B | 6 | 5.9 | about 1 |
| C | 12 | 6.0 | about 1 |

The chain means differ by much less than each chain's own spread: they agree. r̂ ≈ 1.0. Converged.

If chain C still averaged 10, the between-chain spread would be big compared with the within-chain spread, giving r̂ well above 1.1. Not converged.

## In my project
If I fit a Bayesian GLMM later (a Final Draft option), I'd check trace plots and r̂ for the property, habitat, Wind and Sky effects and especially the among-point variance, usually the slowest to mix. For all-species richness that variance was estimated at 0 by `glmer()`, so its chain would hug zero and may mix slowly.

Two causes of failure (p. 172): too few steps (fix: run longer), or a parameter the data **cannot pin down** (not identifiable), for example two parameters that can trade off and give the same fit. That connects to a real issue in my data. Site and year are fully confounded (BK, DC, HO only 2022; CR, HB only 2023). If I put both Site and Year in a model, their effects could trade off exactly, and those chains would wander instead of converging. Bayesian methods do not fix this ([[Why site and year cannot be separated]], [[Confounding]]).

These diagnostics are different from the optimizer messages [[glmer()]] can give for my current models ([[Singular Fits and Convergence Warnings]]).

## Common confusions
- **"Converged = good model."** Convergence only means the walk mapped the posterior of *this* model. You still need model checks such as posterior predictive checks ([[Hobbs and Hooten 2015 Ch8]], pp. 181, 188; compare [[Residual Diagnostics]]).
- **"One chain is enough."** One hiker can't tell you it's stuck. Use several, from spread-out starts.
- **"r̂ below 1.1 for most parameters is fine."** It should hold for every parameter.

## Connections
- **Builds on:** [[MCMC]], [[Posterior]], [[Spread and Variability]], [[Variance]]
- **Leads to:** [[Residual Diagnostics]], [[Credible Interval]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], [[MOC 10 - Model Selection|MOC - Model Selection and Diagnostics]]
- **Go deeper:** [[Hobbs and Hooten 2015 Ch7]] (pp. 170-176)

> [!question]- Check yourself
> Three chains started at very different values give r̂ = 1.6 for one parameter. What does that mean and what do you do?
> ?
> The spread between chains is much larger than within them, so they have not settled on the same distribution. Run longer first; if r̂ stays high, suspect a parameter the data cannot pin down or a mis-specified model, and rethink the model.
