---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - popest
aliases:
  - "Occupancy survey methods"
  - "Types of occupancy surveys"
status: seedling
---

# Choosing a Survey Method for Occupancy

> [!summary] In plain words
> any method that gives evidence a species is present can feed an occupancy model, so choose by the species' biology, the detection probability per visit, how visits are defined, the risk of false positives, and cost.

## The question
Which field method should I use to collect occupancy data?

## Built from
- [[Live Trapping]], [[Coverboard]], [[Track Survey]], [[Acoustic Survey]], [[Autonomous Recording Unit]], [[Breeding Amphibian Survey]], [[Camera Trap]], [[Hair Snare]], [[Environmental DNA]]: the guest lecture's survey types.
- [[Detection Probability]] and [[Cumulative Detection Probability]]: how many visits you need.
- [[Observation Covariates]]: what changes p for each method.

## The reasoning, step by step
1. **Start from the species.** The lecture's rule: "all we need is some evidence that the species is present". Pick the evidence the species leaves most reliably: calls for birds and frogs, tracks or photos for mammals, shelter use for reptiles, eggs for amphibians, DNA for the hard-to-see.
2. **Check p per visit.** Low p means many visits per site ([[How many visits does an occupancy study need]]).
3. **Define a visit.** Person-visits are natural; cameras, ARUs and eDNA replicates let you choose the occasion length or number.
4. **Weigh false positives.** Tracks, calls and eDNA can be misidentified or contaminated; DNA from hair or a clear photo is more certain.
5. **Weigh cost and effort.** Trapping is labour-heavy; cameras and ARUs cost money up front but run for weeks.
6. **Combine methods** where possible, and treat "detected by either" as one visit's result, as Happe et al. did with cameras and hair snares.

| Method | Typical taxa | Visit defined by | Main detection covariates | False-positive risk |
|---|---|---|---|---|
| Live trapping | small mammals, fish | trap check | effort, bait, weather | low |
| Coverboard | reptiles, amphibians | board check | temperature, rain | low |
| Track survey | mammals | transect after snow | snow age, observer | medium |
| Acoustic / point count | birds, frogs, vocal mammals | listening bout | time, wind, observer | medium |
| ARU | same | chosen occasion | wind, rain, classifier threshold | medium |
| Breeding survey | amphibians | pond or stream search | water clarity, effort | low |
| Camera trap | mammals, ground birds | chosen occasion | bait, date, placement | low |
| Hair snare / scat DNA | mammals | snare check | bait, lab success | low |
| eDNA | fish, amphibians, invasives | water or soil sample | flow, season, lab | medium |

## So in practice
Run a short pilot to estimate p for your chosen method, then set the number of visits from it; record the conditions that change p on every visit.

## What would go wrong otherwise
Choosing a method because it is cheap when its p per visit is so low that most occupied sites end with all-zero histories, leaving ψ and p poorly separated.

## Explain it back
- For a rare forest carnivore, which method would you choose, how would you define a visit, and what would go in p?

*Pass test:* you can choose and justify a survey method and the matching detection model.

## Connections
- **Related:** [[Occupancy Workflow in R]], [[Assumptions of Occupancy Models]], [[Fisher Occupancy Case Study]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

What is the guest lecture's one requirement for an occupancy survey method?
??
Some evidence that the species is present.
++++

Which survey methods let you choose the occasion length after the fieldwork?
??
Camera traps and ARUs (and the number of eDNA replicates).
++++
