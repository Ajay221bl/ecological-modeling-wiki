---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
aliases:
  - "Conditioning plot"
  - "coplot()"
status: seedling
---

# Coplot

**In one line:** a coplot shows the scatterplot of two variables repeated in several panels, each panel using only the observations within one level or slice of a third variable.

> [!info] Before this, it helps to know
> [[Scatterplot]] (each panel) · [[Interaction Term]] (what it reveals)

## The everyday picture
Asking the same question in different rooms. "Does richness fall with tree cover?" In the burned room, steeply. In the unburned room, barely. If the answer changes from room to room, the third variable is changing the relationship.

## Start from zero
1. **Choose Y, X and a conditioning variable Z.**
2. **Split the data by Z.** By level if Z is a factor, by overlapping slices if Z is continuous.
3. **Draw Y against X in each panel.**
4. **Compare the slopes across panels.**
5. **Similar slopes: no interaction needed. Different slopes: an interaction between X and Z.** *Why this is step 7 of the protocol:* an interaction you didn't plan for is hard to find any other way.
6. **Check that every panel has data.** Empty or sparse panels mean the interaction can't be estimated.

## See it
![[Coplot.png|700]]
*What to look at:* the fitted line tilts differently in the two panels.

## In R
```r
set.seed(12)
d <- data.frame(tree = runif(120, 0, 60), burn = factor(rep(c("burned", "unburned"), 60)))
d$rich <- rpois(120, exp(2.4 - ifelse(d$burn == "burned", 0.035, 0.005) * d$tree))
coplot(rich ~ tree | burn, data = d, panel = panel.smooth)
sapply(split(d, d$burn), function(s) coef(lm(rich ~ tree, s))[2])     # two different slopes
library(ggplot2); p <- ggplot(d, aes(tree, rich)) + geom_point() + geom_smooth(method = "lm") + facet_wrap(~ burn)
```

## In the course
Zuur's tool for interactions ([[Zuur et al. 2010]]). Homework 1 looks for a year by treatment interaction ([[Course Website]]).

## Common confusions
- **"Different slopes in the plot prove an interaction."** With few points per panel, slopes differ by chance. The plot suggests, the model tests.

## Explain it back
- What do you compare between the panels of a coplot?

*Pass test:* you can use conditioned panels to judge whether an interaction is plausible.

## Connections
- **Builds on:** [[Scatterplot]]
- **Leads to:** [[Interaction Term]], [[Facets]], [[Facets|Multi-panel Plots]]
- **Part of:** [[MOC - Data Exploration]]

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
