---
type: atomic
tags:
  - ecology
  - flashcards/eco/ecology
description: "Coral bleaching is corals turning white after hot water makes them expel the algae living in their tissue, and if the heat lasts the corals starve and die."
aliases:
  - "Bleaching"
  - "Mass bleaching event"
  - "Bleaching event"
status: seedling
---

# Coral Bleaching

A coral is an animal that rents space in its own body to tiny algae. The algae photosynthesise and pay rent in sugar, which feeds the coral and gives it colour. When the water gets too hot for too long, the partnership breaks down and the coral expels the algae. Without them the coral's white limestone skeleton shows through its clear tissue: this is **coral bleaching**. A bleached coral is not yet dead, and can take algae back if the water cools in time; if the heat lasts for weeks, it starves.

A **mass bleaching event** is bleaching across a whole region at once, which happens in unusually warm years. That is the yes or no variable MASS in Homework 2, coded 1 for a mass bleaching year and 0 otherwise ([[Bernoulli Distribution]]). The other response, LOGBLEACH, is the percentage of 1 degree by 1 degree grid cells in the Caribbean that reported at least one bleaching event that year, on a [[Logarithm|log10]] scale ([[Log Transformation]]).

The [[Predictor Variable|predictor]] is the sea surface temperature anomaly: how much warmer or cooler than the long-run average the water was that year ([[Temperature Anomaly]]). The data come from McWilliams et al. (2005), who showed bleaching getting more widespread as Caribbean water warmed. A percentage of cells is bounded between 0 and 100, which matters when you pick a model for it ([[Proportion]], [[Why the response type decides the distribution]]).

## Connections
- **Builds on:** [[Proportion]], [[Bernoulli Distribution]], [[Logarithm]], [[Predictor Variable]]
- **Leads to:** [[Temperature Anomaly]], [[Logistic Regression]]
- **Part of:** [[MOC 19 - Ecology Vocabulary|MOC - Ecology Vocabulary]], molecular note [[Homework 2 - Coral Bleaching]]

## Flashcards

Why does a bleached coral turn white?
??
It has expelled its algae, so the white skeleton shows through its clear tissue.
++++

What does MASS = 1 mean in Homework 2?
??
That year was a mass bleaching event across the region.
++++

What is LOGBLEACH in Homework 2?
??
log10 of the percentage of 1 degree grid cells reporting at least one bleaching event that year.
++++
