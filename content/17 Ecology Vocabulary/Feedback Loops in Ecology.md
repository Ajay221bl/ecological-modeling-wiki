---
type: atomic
tags:
  - ecology-basics
  - flashcards
aliases:
  - "feedback loop"
  - "feedback loops"
  - "positive feedback"
  - "negative feedback"
status: seedling
---

# Feedback Loops in Ecology
**In one line:** A feedback loop is a chain of cause and effect that comes back around to affect its own starting point, either pushing the system back toward where it was (negative feedback) or pushing it further away (positive feedback).

> [!info] Before this, it helps to know
> [[Disturbance]] (fire is the key player) · [[Ecological Succession]] (the slow push toward trees)

## Start from zero
Two everyday loops:
- **A thermostat.** The room gets too warm, the heater switches off, the room cools, the heater switches back on. Any change is pushed *back*. This is **negative feedback**: it keeps things steady.
- **A microphone squeal.** The mic picks up sound from the speaker, which amplifies it, which the mic picks up again, louder each time. Any change is pushed *further*. This is **positive feedback**: it runs away.

"Negative" and "positive" do not mean bad and good. They mean "opposes change" and "amplifies change".

## Why it exists
Feedback loops explain why some ecosystems stay the same for years and then suddenly change.

**The grass-fire loop (negative feedback, keeps grassland):**
1. Lots of grass grows.
2. Dead grass is fuel, so fires burn hot and spread easily.
3. Fire kills young trees but grass resprouts from its roots.
4. So grass stays dominant. Back to step 1.

**The tree-shade loop (positive feedback, drives toward woodland):**
1. A few trees survive between fires.
2. Trees shade the ground, so less grass grows beneath them.
3. Less grass means less fuel, so fires there are weak or go out.
4. Weak fires kill fewer seedlings, so more trees survive. Back to step 1, with more trees.

Both loops exist at once. Which one wins depends on how much tree cover there already is. Past some tipping point, the tree loop takes over and the grassland flips to woodland. That flip is a [[Regime Shifts and Spatial Early Warning Signals|regime shift]].

## A tiny example
Imagine a simple rule: each year fire removes trees in proportion to how much grass fuel there is.

| Tree cover now | Grass fuel | Fire removes | Tree cover next year |
|---|---|---|---|
| 10% | High | most new trees | back to about 10% |
| 30% | Medium | some new trees | creeps up to 33% |
| 50% | Low | very few | jumps to 60% |

At 10% the system returns to where it was (negative feedback wins). At 50% each year makes the next worse (positive feedback wins). Somewhere between lies the tipping point. These numbers are invented for illustration.

## In my project
The theory behind [[Berry et al. 2026]], as described in Berry's 2024 thesis (University of Arkansas):
- Grasslands and woodlands are **alternative regimes**: two different self-maintaining states the same land can be in ([[Ecological Resilience and Alternative States]]).
- An intact **grassland core** is held in place by negative feedbacks such as fire ([[Grassland Core Habitat]], [[Prescribed Fire]]).
- Where the two regimes meet there is a **boundary**. [[Spatial Covariance]] between grass cover and tree cover picks up these boundaries as negative values ([[Why negative spatial covariance marks a tree-grass boundary]]).

> [!warning] Verify
> Sources agree that negative spatial covariance marks a boundary. Which values mark a core is unresolved; I use "near zero or slightly positive" (details in [[Spatial Covariance]]).

- This is why the management idea [[Defend the Core]] protects intact cores first: a core still has its grass-fire loop working, so it is cheap to keep. A woody area has already crossed into the tree-shade loop and is expensive to restore.

## Common confusions
- **"Negative feedback is bad."** It is the stabiliser. The grass-fire loop is what keeps a grassland healthy.
- **"Positive feedback is good."** It amplifies whatever is happening, including encroachment.
- **"Change is always gradual."** Feedback loops can make a system look stable for years and then flip quickly once a tipping point is crossed ([[Woody Plant Encroachment]]).

## Connections
- **Builds on:** [[Disturbance]], [[Ecological Succession]]
- **Leads to:** [[Regime Shifts and Spatial Early Warning Signals]], [[Ecological Resilience and Alternative States]], [[Defend the Core]], [[Why trees take over grasslands without fire]]
- **Part of:** [[MOC 19 - Ecology Vocabulary|MOC - Ecology from Zero]]
- **Go deeper:** [[Berry et al. 2026]]

> [!question]- Check yourself
> In the grass-fire loop, why is it called *negative* feedback even though it is good for grassland birds?
> ?
> "Negative" means it opposes change. When trees start to appear, fire fuelled by grass removes them and pushes the system back to grassland.
