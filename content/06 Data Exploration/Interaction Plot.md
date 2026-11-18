---
type: atomic
tags:
  - exploration
  - flashcards/eco/exploration
description: "An interaction plot draws the mean response against one predictor with a separate line for each level of another, and lines that are not parallel suggest the effect of one predictor depends on the other."
aliases:
  - "Interaction plots"
  - "interaction.plot()"
  - "Profile plot"
  - "Lines-by-group plot"
status: seedling
---

# Interaction Plot

Ask two friends how much coffee helps them stay awake. If both say "one cup adds an hour", the effect of coffee does not depend on who you are, and their lines on a graph of hours against cups run parallel. If one says "a lot" and the other "nothing", the lines cross or fan out. An **interaction plot** draws the mean response against one predictor, with a separate line for each level of a second predictor. Parallel lines say the two act separately and add up; lines that converge, diverge or cross say the effect of one depends on the level of the other, an interaction ([[Interaction Term]], [[Additive vs Interaction Model]]).

In Homework 1 the question is whether fencing out grazers changes plant richness *more over time*, because recovery is slow ([[Exclosure]]). Plot mean richness on the y axis against year on the x axis, one line per treatment. If the exclosure lines climb away from the control line year after year, the treatment effect grows with time and a year × treatment term belongs in the model. If the three lines move up and down together, year and treatment act separately. Plotting the individual plots as faint lines or points underneath the means shows whether a gap between lines is bigger than the scatter ([[Why explore data before modeling]]).

An interaction plot is exploration, not proof: lines are never exactly parallel in real data, so the plot suggests what to test and the model with and without the interaction decides ([[Model Ranking Tables]]). Also beware of reading a gap that only exists at one or two time points, which may be one odd year rather than a trend.

![[Interaction plot parallel vs diverging.png|700]]
*What to look at:* on the left the three treatment lines keep the same gaps every year, so treatment and year simply add; on the right the exclosure lines climb away from the control, so the treatment effect grows with time.

```r
set.seed(4); d <- expand.grid(year = 2002:2014, treatment = c("C", "LE", "UE"), rep = 1:3)
slope <- c(C = 0, LE = 0.25, UE = 0.45)[as.character(d$treatment)]
d$rich <- rpois(nrow(d), 15 + slope * (d$year - 2002))
m <- aggregate(rich ~ year + treatment, d, mean); d$period <- ifelse(d$year > 2008, "2009-14", "2002-08")
with(m, interaction.plot(year, treatment, rich, type = "b", ylab = "mean richness"))
round(tapply(d$rich, list(d$treatment, d$period), mean), 1)   # early vs late mean: the gap grows
```

## Connections
- **Builds on:** [[Interaction Term]], [[Mean]]
- **Leads to:** [[Additive vs Interaction Model]], [[Model Ranking Tables]]
- **Part of:** [[MOC 04 - Data Exploration|MOC - Data Exploration]], molecular note [[Homework 1 - Riparian Plant Diversity]]

## Flashcards

What do parallel lines in an interaction plot suggest?
??
No interaction: the effect of one predictor is the same at every level of the other.
![[Interaction plot parallel vs diverging.png]]
++++

What would an interaction look like in Homework 1?
??
The exclosure lines rising away from the control line over the years.
++++

Does an interaction plot prove an interaction?
??
No; it suggests one, and a model comparison with and without the term tests it.
++++
