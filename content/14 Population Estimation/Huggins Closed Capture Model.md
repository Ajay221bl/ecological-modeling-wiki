---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "Huggins model"
  - "Huggins conditional likelihood"
  - "Conditional likelihood closed captures"
  - "Huggins' p and c"
status: seedling
---

# Huggins Closed Capture Model

**In one line:** the Huggins model is a closed-population capture model that conditions on animals caught at least once, estimating p and c with individual covariates and then deriving N̂ afterward.

> [!info] Before this, it helps to know
> [[Capture Heterogeneity Models]] · [[Capture Probability]] · [[Likelihood Function]]

## Start from zero
1. **Full likelihood models** put N directly in the likelihood.
2. **Huggins** writes the likelihood only for caught animals, so N drops out.
3. **That allows individual covariates** (mass, sex) on p and c, because every animal in the likelihood has been measured.
4. **N̂ = Σ 1 / p*_i,** summing over caught animals, where p*_i is animal i's chance of being caught at least once.
5. **Powell and Gale (Ch8) recommend** beginners start with full-likelihood or Huggins p and c models in Program MARK.

## In the course
[[Powell and Gale 2015]] Ch8.

## Common confusions
- **"Huggins cannot estimate N."** It derives N after fitting p.

## Explain it back
- Why can Huggins models use individual covariates?

*Pass test:* you can explain conditional versus full likelihood for closed captures.

## Connections
- **Builds on:** [[Capture Heterogeneity Models]], [[Likelihood Function]]
- **Leads to:** [[Program MARK]], [[Horvitz-Thompson Estimator]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

What does the Huggins closed capture model condition on?
??
Animals caught at least once; N is derived afterwards as Σ 1/p*_i.
++++
