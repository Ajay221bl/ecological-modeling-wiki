---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - popest
aliases:
  - "Population Estimation Problem-Solving Guide"
  - "Which population method when"
status: seedling
---

# Choosing a Population Estimation Method

> [!summary] In plain words
> choosing a population estimation method means matching the question (where, how many, survival, movement) to the data you can collect (detections, counts, marks, distances, fates) and the assumptions you can meet.

## The question
Which population estimation method should I use?

## Built from
- [[Occupancy]], [[N-mixture Model]], [[Distance Sampling]], [[Removal Sampling]], [[Double-observer Methods]].
- [[Lincoln-Petersen Estimator]], [[Capture Heterogeneity Models]], [[Cormack-Jolly-Seber Model]].
- [[Choosing a Survival Model]].

## See it
mermaid:
flowchart TD
  Q["What is the question?"] --> W["Where is it?"] --> O["Occupancy (repeat visits)"]
  Q --> H["How many?"] --> I{"Individuals identifiable?"}
  I -->|"yes"| CR["Closed mark-recapture"]
  I -->|"no"| U{"What data?"}
  U -->|"distances"| DS["Distance sampling"]
  U -->|"repeat counts"| NM["N-mixture"]
  U -->|"successive removals"| RS["Removal"]
  U -->|"two observers"| DO["Double observer"]
  Q --> S["Survival / movement?"] --> SV["See Choosing a Survival Model"]
*What to look at:* the method follows from the question and from what you can observe.

## The reasoning, step by step
1. **Question:** distribution (occupancy), abundance or density, survival, movement.
2. **Can you mark or identify individuals?** Yes opens mark-recapture; no means unmarked methods.
3. **For abundance without marks:**
   - Distances measurable and g(0) = 1 plausible: distance sampling.
   - Repeated counts with closure: N-mixture.
   - Animals can be removed quickly: removal.
   - Two observers at once: double-observer.
4. **Check the key assumption** of the chosen method against your species' behaviour.
5. **Pilot to estimate detection** and plan effort.

## So in practice
Write one sentence: "I want to know X about species Y, and I can observe Z." The method usually follows.

## What would go wrong otherwise
Choosing N-mixture models because they need only counts, for a species that moves widely between visits.

## Explain it back
- Which method for density of a conspicuous ungulate on open plains?

*Pass test:* you can choose and justify a population estimation method.

## Connections
- **Related:** [[Mark-Recapture vs Unmarked Survey Methods]], [[Occupancy vs Abundance]], [[Census vs Index vs Estimate]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

Abundance of unmarked animals with measurable distances: which method?
??
Distance sampling.
++++

Where is a rare, elusive species? Which method?
??
Occupancy with repeat visits.
++++
