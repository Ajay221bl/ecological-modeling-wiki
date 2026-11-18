---
type: atomic
tags:
  - bayesian-inference
  - flashcards
aliases:
  - "Prior Distribution"
  - "priors"
  - "informative prior"
  - "vague prior"
status: seedling
---

# Prior
**In one line:** What you believed about an unknown quantity before seeing the new data, written as probabilities.

> [!info] Before this, it helps to know
> [[Probability]] (beliefs as numbers) · [[Bayes' Theorem]] (where the prior gets used) · [[Average (Mean)]] (the running example)

## Start from zero
Before your first visit to a new grassland site, how many bird species do you expect per visit? You aren't clueless. You've been to other sites, which averaged roughly 5 to 7. You'd be surprised by 1, and very surprised by 20.

Writing that hunch down as probabilities is a **prior**. For example:

| Site's true average | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|
| My belief before visiting | 10% | 40% | 30% | 15% | 5% |

The percentages add to 100%. This is a [[Probability Distribution]] over possible values of the unknown.

## Why it exists
[[Bayes' Theorem]] updates beliefs. You can't update without a starting point. The prior is that starting point; the data, through the [[Likelihood]], push it; the result is the [[Posterior]].

Hobbs and Hooten call priors the "parameter models" of a Bayesian model and encourage making them as informative as real knowledge allows ([[Hobbs and Hooten 2015 Ch1]], p. 9). Ignoring what you know "is like selectively throwing away data" ([[Hobbs and Hooten 2015 Ch5]], p. 99). And the posterior from one study can be the prior for the next, which mirrors how science builds (pp. 90, 98).

## A tiny example
Three visits to the new site: **5, 7 and 6 species**.

| True average | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|
| Prior "I know nothing" (flat) | 20% | 20% | 20% | 20% | 20% |
| Posterior from flat prior | 8% | 23% | 31% | 24% | 13% |
| Prior from experience (table above) | 10% | 40% | 30% | 15% | 5% |
| Posterior from experience prior | 4% | 39% | 39% | 16% | 3% |

(Computed with Poisson likelihoods.) Both posteriors centre near 6, because the data say so. The experience prior makes the answer tighter. With 30 visits instead of 3, the two posteriors would be nearly identical: **enough data overwhelm the prior** (Ch5, p. 93).

## In my project
In a future Bayesian version of my GLMM, every coefficient needs a prior. My coefficients live on the log scale because of the [[Log Link]] (see [[Logarithms and Exponents]]), so scale matters: a very wide prior on a log-scale Site effect implies huge, unrealistic ratios of richness between sites (for instance, a coefficient of 5 means e⁵, about 148 times more species). With 1,130 point-visits, the property, habitat, Wind and Sky effects should be well informed by data. The among-point variance (a [[Variance Component]]) has less information, so its prior deserves more care. That matters in practice: `glmer()` put the all-species point variance at exactly 0 (a singular fit). A Bayesian fit with a sensible prior would instead give a posterior piled near zero but with some room above it, an honest "small, maybe zero" ([[Singular Fits and Convergence Warnings]]).

One caution: [[Berry et al. 2026]] analysed the same field data, so their results cannot be used as an "independent" prior for my analysis. That would count the same birds twice. Hobbs and Hooten frame informative priors as a way to combine independently collected data (p. 99).

## Common confusions
- **"A flat prior is neutral."** There is no truly "noninformative" prior (Ch5, p. 90). A flat beta(1,1) prior on a probability still nudges the answer (p. 92), and a "minimal" beta(0.001, 0.001) actually pulls it toward 0 and 1 (pp. 92-93).
- **"Vague on one scale = vague on every scale."** A normal(0, 100) prior on logit(p) piles belief near p = 0 and p = 1 (pp. 95-96). Check what the prior implies on the scale you care about (p. 96).
- **"Priors let you get any answer you want."** They are written down openly and can be checked; strong data overrule them.

## Connections
- **Builds on:** [[Probability]], [[Probability Distribution]], [[Bayes' Theorem]], [[Parameter vs Estimate]]
- **Leads to:** [[Posterior]], [[Hierarchical Model]], [[Frequentist vs Bayesian]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]
- **Go deeper:** [[Hobbs and Hooten 2015 Ch5]] (pp. 90-100, the honest discussion of "noninformative" priors)

> [!question]- Check yourself
> Why do Hobbs and Hooten put "noninformative" in quotation marks?
> ?
> Because every prior has some influence on the posterior, at least on some transformation of the parameter. A prior that is flat on one scale (e.g. logit(p)) can be strongly informative on another (p), so you should check the implied prior rather than assume it is neutral.
