---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "The Huggins model is a closed-population capture model that conditions on animals caught at least once, estimating p and c with individual covariates and then deriving N̂ afterward."
aliases:
  - "Huggins model"
  - "Huggins conditional likelihood"
  - "Conditional likelihood closed captures"
  - "Huggins' p and c"
status: seedling
---

# Huggins Closed Capture Model

The **Huggins model** is a closed-population capture model that conditions on animals caught at least once, estimating p and c with individual covariates and deriving N̂ afterward ([[Capture Heterogeneity Models]], [[Capture Probability]], [[Likelihood Function]]). Full-likelihood models put N directly in the likelihood; Huggins writes the likelihood only for caught animals, so N drops out. That allows individual covariates such as mass or sex on p and c, because every animal in the likelihood has been measured.

N is then derived as N̂ = Σ 1 / p*ᵢ, summed over caught animals, where p*ᵢ is animal i's chance of being caught at least once; this is the [[Horvitz-Thompson Estimator]]. Powell and Gale (Ch8) recommend that beginners start with full-likelihood or Huggins p and c models in [[Program MARK]].

It is covered in [[Powell and Gale 2015]] Ch8 ([[Closed Population]]). Huggins can estimate N: it derives N after fitting p.

## Connections
- **Builds on:** [[Capture Heterogeneity Models]], [[Likelihood Function]]
- **Leads to:** [[Program MARK]], [[Horvitz-Thompson Estimator]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

What does the Huggins closed capture model condition on?
??
Animals caught at least once; N is derived afterwards as Σ 1/p*_i.
++++
