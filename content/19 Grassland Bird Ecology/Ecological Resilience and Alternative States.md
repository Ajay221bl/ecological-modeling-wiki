---
type: atomic
tags:
  - grassland-bird-ecology
  - resilience
  - flashcards
aliases:
  - "resilience"
  - "ecological resilience"
  - "alternative states"
  - "alternative stable states"
  - "hysteresis"
status: seedling
---

# Ecological Resilience and Alternative States
**In one line:** Alternative states are the different stable kinds of system (say, grassland or woodland) that the same piece of land can settle into; resilience is how hard you can push a system before it tips from one to the other.

> [!info] Before this, it helps to know
> [[Feedback Loops in Ecology]] (what holds each state in place) · [[Regime Shifts and Spatial Early Warning Signals]] (the ball-in-bowl picture and the flip itself)

## Start from zero
Bend a plastic ruler a little and it springs back. Bend it hard and it snaps and stays broken. Ecosystems can behave like that. Recall the ball in a bowl from [[Regime Shifts and Spatial Early Warning Signals]]: a ball rests at the bottom of a bowl, and next door, over a ridge, is a second bowl.
- Each bowl is an **alternative state**: a stable way the same land can be. Same soil, same rain, yet it could be prairie or it could be forest.
- **Resilience** is the size of the bowl: how wide and deep it is, so how big a push the system can take and still roll back. The ecologist C. S. Holling made this idea famous in 1973.

A second, narrower meaning also gets used: how *fast* a system bounces back. A fast bounce is not the same as a wide bowl. Here "resilience" means the size of the push it can absorb.

## Why it exists
Why would the same land have two stable states instead of one? Because of **feedbacks**, loops where the state keeps itself going ([[Feedback Loops in Ecology]]).

- **Grass state.** Grass makes fuel, fuel lets fire spread, fire kills tree seedlings, so grass stays. Fire is a *negative* (balancing) feedback on trees: it pushes back against any change toward woods. "Negative" here means "resists change", not "bad".
- **Woody state.** Trees cast shade, shade thins the grass, thin grass cannot carry fire, so more trees survive.

Each loop deepens its own bowl. That leads to **hysteresis**: the way back is not the reverse of the way in. Trees may have moved in when fire stopped and cover was only 20%. Bringing fire back when tree cover is 60% does nothing, because the fire cannot spread ([[Why trees take over grasslands without fire]]).

For managers: keeping a grassland in its bowl is cheap; hauling it back over the ridge is expensive and may fail ([[Defend the Core]], [[Grassland Restoration and Management]]).

## A tiny example
Made-up rule: fire carries through a field only if tree cover is below 30%. Two neighbouring fields get the same plan, "burn every 3 years".

| Field | Tree cover at start | Does fire carry? | Ten years later |
|---|---|---|---|
| A | 10% | Yes | Still about 10%: grassland |
| B | 40% | No | 60% or more: woodland |

Same land, same rain, same treatment, yet different outcomes. The only difference is where each field started. That is what "alternative states" means.

## In my project
Berry's 2024 thesis (University of Arkansas) frames the project this way: grasslands and woodlands are alternative "regimes" that meet at spatial boundaries, and an intact grassland core is held in place by negative feedbacks such as fire. Spatial boundaries are a map-based signal that complements watching for change over time.

That is what [[Spatial Covariance]] measures. Strongly negative values mean grass and trees sit side by side but separate: the boundary between the two bowls ([[Why negative spatial covariance marks a tree-grass boundary]]). Values near zero or slightly positive suggest a core, deep in the grass bowl, as long as the open ground is grass and not a crop field (which also scores near zero).

> [!warning] Verify
> Which values mark a core is unresolved between the metadata, the abstract and the thesis; see [[Spatial Covariance]] and check [[Berry et al. 2026]] before writing it into the Report.

My data are one snapshot per site. Resilience is about response to a push over time, so I cannot measure it directly. I can only see where points sit on the map today.

## Common confusions
- **"Resilient = unchanging."** A resilient grassland changes all the time (burns, regrows); it just stays grassland.
- **"Reverse the cause, reverse the change."** Not past a threshold: that is hysteresis.
- **"Negative feedback is bad."** It means a loop that resists change. Fire is a negative feedback that protects grassland.

## Connections
- **Builds on:** [[Feedback Loops in Ecology]], [[Ecological Succession]], [[Disturbance]]
- **Leads to:** [[Regime Shifts and Spatial Early Warning Signals]], [[Defend the Core]], [[Spatial Covariance]], [[Rangeland Health]]
- **Part of:** [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]], [[MOC 19 - Ecology Vocabulary|MOC - Ecology from Zero]]
- **Go deeper:** [[Batpurev et al. 2021]] (people judging when Mongolian rangeland has "collapsed" as vegetation cover falls), [[Berry et al. 2026]]

> [!question]- Check yourself
> Two fields on the same soil get the same burning plan. One stays grassland and one becomes woodland. How can that happen?
> ?
> They started on different sides of a threshold. In the field with few trees, fire carries and keeps trees out. In the field with many trees, there is too little grass fuel for fire to spread, so the woody feedback wins. Same conditions, two stable states.
