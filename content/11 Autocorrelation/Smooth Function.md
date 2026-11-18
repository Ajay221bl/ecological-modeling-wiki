---
type: atomic
tags:
  - autocorrelation-gams
  - gam
  - flashcards
aliases:
  - "smoother"
  - "smoothers"
  - "spline"
  - "splines"
  - "smooth term"
status: seedling
---

# Smooth Function
**In one line:** A flexible curve made by adding together a handful of simple building-block curves, with a brake (penalty) that controls how wiggly the result can be.

> [!info] Before this, it helps to know
> [[Equation of a Line]] (the simplest smooth is a straight line) · [[Overfitting]] (what the penalty prevents) · [[Generalized Additive Model]]

## Start from zero
Not every relationship is a straight line. But if you let a curve be **anything**, it will zig-zag through every single data point, including the random noise. That curve describes your sample perfectly and the next sample terribly.

So we want a middle path: bendy enough to follow a real hump, stiff enough to ignore random jitter. Think of a flexible ruler (a draughtsman's "spline", which gave the method its name). You can bend it, but it resists sharp kinks.

## Why it exists
A smooth function does this in two steps ([[Pedersen et al. 2019]], pp. 4-5):

1. **Building blocks (basis functions).** The curve f(x) is a weighted sum of K simple, fixed curves: f(x) = β₁b₁(x) + β₂b₂(x) + ... + β_K b_K(x). In words: take K stock shapes, stretch each by its own weight, and add them up. K, the **basis size** (`k` in mgcv), sets the most complex shape possible. Figure 3 shows six basis curves adding up to one smooth (p. 6).
2. **The brake (penalty).** A wiggliness penalty is subtracted from the log-likelihood, weighted by a **smoothing parameter** λ (lambda). λ = 0 means no brake: the curve runs through the data points. Huge λ means full brake: all wiggles are removed and a straight line is left (p. 4, fig. 2; p. 7). In practice λ is estimated from the data; the authors recommend REML or ML over the default (p. 10).

The resulting bendiness is reported as **effective degrees of freedom (EDF)**: not a whole number, larger means wigglier, and never more than K (p. 4). An EDF of about 1 means "basically a straight line". If the EDF is close to K, the building-block set may be too small; `mgcv::gam.check` helps check this (pp. 4-5).

Types used in the readings (pp. 5-6): thin plate regression splines (a general default), **cyclic** cubic regression splines whose ends join up (good for seasons, where Dec 31 should meet Jan 1), and random-effect "smooths", which are pure shrinkage toward zero. The penalty idea is the same one behind [[Partial Pooling]] in mixed models (p. 2).

## A tiny example
Three building blocks over x = 0 to 4: a flat line (always 1), a ramp (equals x), and a hump (peaks at x = 2: values 0, 3, 4, 3, 0).

| x | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| 2 × flat | 2 | 2 | 2 | 2 | 2 |
| 0 × ramp | 0 | 0 | 0 | 0 | 0 |
| 1 × hump | 0 | 3 | 4 | 3 | 0 |
| **Sum = f(x)** | 2 | 5 | 6 | 5 | 2 |

Weights 2, 0 and 1 produced a hump-shaped curve. Fitting a smooth means choosing those weights, while the penalty keeps the hump weight from getting large unless the data really demand it.

## In my project
No smooths are in my current scripts. The Final Draft options (Oct 13) name two kinds ([[Generalized Additive Model]]):
- **`s(longitude, latitude)`:** a two-dimensional smooth over the map, to absorb the weak spatial autocorrelation in my residuals ([[Spatial Autocorrelation]]).
- **`s(SpCov3)`:** a curved habitat effect, in case focal richness peaks near zero spatial covariance instead of rising in a straight line.

If I add one, I would:
- report its EDF (near 1 means essentially a straight line, so a plain GLMM term would do);
- check `k` with gam.check;
- plot the smooth with its confidence band on the response scale, using [[ggplot2 and ggsave()]].

Choosing between a straight line and a smooth is a model-selection question, so it fits my existing [[AIC]] workflow ([[Candidate Model Set]]).

## Common confusions
- **"k is how wiggly the curve is."** k is the ceiling; the penalty and EDF decide the actual wiggliness.
- **"EDF must be a whole number."** It is usually fractional.
- **"No penalty is more honest."** No penalty means fitting noise.

## Connections
- **Builds on:** [[Generalized Additive Model]], [[Likelihood]], [[Overfitting]], [[Equation of a Line]]
- **Leads to:** [[Hierarchical GAM]], [[Partial Pooling]], [[Parsimony]]
- **Part of:** [[MOC 13 - Autocorrelation|MOC - Autocorrelation and GAMs]]
- **Go deeper:** [[Pedersen et al. 2019]] (figures 2 and 3 show basis and penalty)

> [!question]- Check yourself
> What happens to a smooth as the smoothing parameter λ goes from 0 to very large?
> ?
> At λ = 0 there is no brake, so the curve runs through the data (overfits). As λ grows, wiggles are penalized more; at very large λ only the unpenalized part remains, which for a standard thin plate spline is a straight line.
