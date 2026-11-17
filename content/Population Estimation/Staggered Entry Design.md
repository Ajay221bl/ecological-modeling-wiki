---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "Staggered entry"
  - "Staggered-entry Kaplan-Meier"
  - "Delayed entry"
status: seedling
---

# Staggered Entry Design

**In one line:** a staggered entry design lets animals join a survival study at different times, each contributing to the risk set only from when it was first monitored.

> [!info] Before this, it helps to know
> [[Kaplan-Meier Estimator]] · [[Censoring]]

## The everyday picture
New employees joining a company throughout the year. Each one's "time at risk of quitting" starts on their own first day.

## Start from zero
1. **Animals are added** as they are captured or nests are found.
2. **The number at risk** in each interval counts only animals being monitored then.
3. **Pollock et al. (1989)** adapted Kaplan-Meier for staggered entry in wildlife.
4. **Mayfield's method** allows it too, assuming constant survival for new and old animals.
5. **Assumes newly added animals have the same survival** as those already in the study.

## In the course
[[Powell and Gale 2015]] Ch9 ("How is staggered entry handled with Kaplan-Meier methods?").

## Common confusions
- **"Late entrants should be backdated to the start."** That counts days when they were not watched and inflates survival.

## Explain it back
- How does a late entrant enter the risk set?

*Pass test:* you can set up a staggered entry dataset.

## Connections
- **Builds on:** [[Kaplan-Meier Estimator]], [[Censoring]]
- **Leads to:** [[Exposure Days]], [[Mayfield Nest Survival]]
- **Part of:** [[MOC - Population Estimation]]

## Flashcards

What is staggered entry?
??
Animals enter a survival study at different times and are at risk only from when monitoring begins.
++++
