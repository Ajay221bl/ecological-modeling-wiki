---
type: atomic
tags:
  - gam
  - flashcards/eco/gam
description: "A global smoother is the single smooth curve shared by all groups in a hierarchical GAM, describing the average relationship."
aliases:
  - "Global smooth"
  - "Common smoother"
  - "Population-level smooth"
status: seedling
---

# Global Smoother

A **global smoother** is the single smooth curve shared by all groups in a [[Hierarchical GAM]], describing the average relationship, much as a [[Fixed Effect]] describes the average in a [[Mixed Effects Model|mixed model]]. It is written as an ordinary `s(x)` term alongside the group-level smooths, and it is present in models G, GS and GI and absent in S and I. In GS and GI the [[Group-level Smoothers]] are [[Deviation|deviations]] from it.

Use it when there is a shared response you want to report, and predict it alone with `exclude =` the group terms ([[Prediction from a GAM]]). There is an [[Identifiability|identifiability]] catch: in model GI, group smooths with m = 2 can overlap the global smooth, so Pedersen et al. use m = 1 for group smooths to reduce this ([[Thin Plate Regression Spline]]).

It is defined in [[Pedersen et al. 2019]]. The global smooth is not the average of the group fits; it is estimated jointly, with the group deviations penalised ([[Shrinkage]]).

## Connections
- **Builds on:** [[Hierarchical GAM]], [[Fixed Effect]], [[Mixed Effects Model]], [[Deviation]], [[Identifiability]]
- **Leads to:** [[Group-level Smoothers]], [[Conditional vs Marginal Predictions]]
- **Part of:** [[MOC 15 - GAMs|MOC - GAMs]]

## Flashcards

What is a global smoother in an HGAM?
??
The shared smooth curve describing the average relationship across groups.
++++
