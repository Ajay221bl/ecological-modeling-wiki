---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
aliases:
  - "Known fate"
  - "Known-fate data"
  - "Known-fate survival"
  - "Known-fate analysis"
status: seedling
---

# Known-fate Models

**In one line:** known-fate models estimate survival from marked animals whose fate (alive or dead) is known at every check, so detection does not need to be estimated.

> [!info] Before this, it helps to know
> [[Survival Rate]] · [[Binomial Distribution]] · [[Cohort]]

## The everyday picture
Checking on friends by phone. If every call gets through, you always know who is fine; you only need to count.

## Start from zero
1. **Detection is assumed to be 1** for live and dead animals at each check, so survival is a straightforward binomial.
2. **Typical data:** radio-collared animals, monitored nests.
3. **Simplest estimate:** Ŝ = y / n survivors out of n animals.
4. **Complications the methods handle:**
   - Animals lost to follow-up (censoring).
   - Animals entering at different times (staggered entry).
   - Checks at irregular intervals (exposure days).
5. **Covariates** (mass, age, habitat) can be modelled with logistic-type links, as in Program MARK.
6. **Powell and Gale (Ch9):** the structure is simplest, though the data are not the cheapest to collect.

## In the course
[[Powell and Gale 2015]] Ch9.

## Common confusions
- **"Known-fate data are cheap."** Collars and frequent checks are expensive; the model is what is simple.

## Explain it back
- What does "known fate" assume about detection?

*Pass test:* you can say when a known-fate model applies.

## Connections
- **Builds on:** [[Survival Rate]], [[Binomial Distribution]], [[Cohort]]
- **Leads to:** [[Censoring]], [[Staggered Entry Design]], [[Mayfield Nest Survival]], [[Kaplan-Meier Estimator]], [[Radio-telemetry Data]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Choosing a Survival Model]]

## Flashcards

What makes a survival model "known fate"?
??
The fate of every marked animal is known at each check, so detection is 1.
++++
