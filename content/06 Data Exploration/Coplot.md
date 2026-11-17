---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "A coplot shows the scatterplot of two variables repeated in several panels, each panel using only the observations within one level or slice of a third variable."
aliases:
  - "Conditioning plot"
  - "coplot()"
status: seedling
---

# Coplot

Ask the same question in different rooms: "Does richness fall with tree cover?" In the burned room, steeply; in the unburned room, barely. If the answer changes from room to room, the room is changing the relationship. A **coplot**, or conditioning plot, shows that directly. It repeats the scatterplot of Y against X in several panels, each panel using only the observations within one level, or slice, of a third variable Z ([[Scatterplot]]). For a factor Z the panels are its levels; for a continuous Z they are overlapping slices of its range.

Compare the slopes across panels. Similar slopes mean no interaction is needed; different slopes suggest an interaction between X and Z ([[Interaction Term]]). In the code below, richness was simulated to fall steeply with tree cover on burned plots and barely on unburned ones, and the coplot and the two separate slopes show it. This is step 7 of the protocol, because an interaction nobody planned for is hard to find any other way ([[Zuur et al. 2010]]); Homework 1 looks for a year-by-treatment interaction this way ([[Course Website]]). In ggplot2 the same picture is made with [[Facets]] ([[Facets|Multi-panel Plots]]).

Check that every panel has data: empty or sparse panels mean the interaction cannot be estimated. And different-looking slopes do not prove an interaction, because with few points per panel slopes differ by chance. The plot suggests; the model tests.

![[Coplot.png|700]]
*What to look at:* the fitted line tilts differently in the two panels.

```r
set.seed(12)
d <- data.frame(tree = runif(120, 0, 60), burn = factor(rep(c("burned", "unburned"), 60)))
d$rich <- rpois(120, exp(2.4 - ifelse(d$burn == "burned", 0.035, 0.005) * d$tree))
coplot(rich ~ tree | burn, data = d, panel = panel.smooth)
sapply(split(d, d$burn), function(s) coef(lm(rich ~ tree, s))[2])     # two different slopes
library(ggplot2); p <- ggplot(d, aes(tree, rich)) + geom_point() + geom_smooth(method = "lm") + facet_wrap(~ burn)
```

## Connections
- **Builds on:** [[Scatterplot]]
- **Leads to:** [[Interaction Term]], [[Facets]], [[Facets|Multi-panel Plots]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]]

## Flashcards

What does a coplot show?
??
The relationship between Y and X drawn separately for each level or slice of a third variable.
![[Coplot.png]]
++++

What does a change in slope across coplot panels suggest?
??
An interaction: the effect of X depends on the conditioning variable.
++++
