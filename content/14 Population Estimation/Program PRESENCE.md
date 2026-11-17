---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "PRESENCE is free stand-alone software from the U.S. Geological Survey for fitting occupancy models by maximum likelihood, with an R interface called RPresence."
aliases:
  - "PRESENCE"
  - "RPresence"
status: seedling
---

# Program PRESENCE

Before most ecologists wrote R code, occupancy models were fitted in point-and-click programs, much as Program MARK is used for mark-recapture. **PRESENCE** is free stand-alone software from the U.S. Geological Survey for fitting occupancy models by [[Maximum Likelihood Estimation]], with an R interface called RPresence ([[Single-season Occupancy]], [[Program MARK]]). It was written alongside the occupancy book by MacKenzie and colleagues, so it covers almost every model in it: single-season, multi-season, two-species, multi-state and false-positive occupancy ([[Multi-season Occupancy]], [[Multi-species Occupancy]]).

You give it a detection matrix and covariates, choose a model from menus or a design matrix, and it returns ψ, p, γ and ε estimates with AIC tables and a goodness-of-fit test based on the MacKenzie and Bailey bootstrap ([[AIC]], [[Goodness of Fit and c-hat]]). The numbers match unmarked's `occu()` for the same model, because the likelihood is the same ([[Occupancy Likelihood]]).

It is listed on the "Occupancy Software" slide of the [[Occupancy Guest Lecture]], together with MARK (or RMark), unmarked, ubms and spOccupancy ([[unmarked Package]]). PRESENCE is not a different method: it is another tool for the same model, and the choice among tools is about convenience, Bayesian versus likelihood fitting, and which extensions you need ([[Choosing Occupancy Software]]).

## Connections
- **Builds on:** [[Maximum Likelihood Estimation]], [[Single-season Occupancy]]
- **Leads to:** [[Program MARK]], [[unmarked Package]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Choosing Occupancy Software]]

## Flashcards

What is PRESENCE?
??
Free USGS software (R interface: RPresence) for fitting occupancy models by maximum likelihood.
++++

Does PRESENCE give different ψ estimates than unmarked for the same model?
??
No; it maximises the same likelihood.
++++
