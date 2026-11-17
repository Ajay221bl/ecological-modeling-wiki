---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - modeling
aliases:
  - "Process and observation error"
  - "Process model and observation model"
status: seedling
---

# Process vs Observation Error

> [!summary] In plain words
> The scatter in ecological data has three sources. **Process variation** is real change in nature (good and bad years). **Observation error** comes from how you measure (birds missed in a count). **Sampling variation** comes from which units happened to land in your sample. Mixing them up makes a stable population look wild, or a wild one look stable.

## The everyday picture
Weighing yourself every morning. Your true weight really does go up and down a little (process). The cheap bathroom scale adds its own wobble (observation error). And which day of the week you happen to weigh in changes the average you compute (sampling). Only the first is about you.

*Where the picture stops working:* you could buy a better scale. In the field, observation error is often unavoidable and has to be modelled.

## The question
How do the sources of scatter differ, and why separate them?

## Built from
- [[Process Variation]]: real, unexplained change in nature
- [[Observation Error]]: noise and bias from measuring
- [[Sampling Variation]]: differences from which units were sampled

## See it
![[Process vs observation error.png|700]]
*What to look at:* the true numbers wiggle a little; the observed ones wiggle much more.

## The reasoning, step by step
1. **Nature varies on its own** ([[Process Variation]]).
2. **Measuring adds its own variation** ([[Observation Error]]).
3. **Sampling adds a third** ([[Sampling Variation]]).
4. **The data show the total.** *Why that's a problem:* you can't tell which part is which from one number per year.
5. **So model them separately:** a process model for nature, an observation model for measuring ([[Data Model, Process Model and Parameter Model]]).

**A worked example in numbers.** A true bird population of 100, 104, 98, 107 (range 9). You detect about 60% and scale counts up, giving 92, 113, 88, 122 (range **34**). Nearly four times the real swing is observation error. Read it as process variation and you'd wrongly call the population unstable.

## So in practice
Ask of every dataset: how much of this scatter is nature, and how much is me? Use repeat surveys or detection models to separate them.

## What would go wrong otherwise
- You'd overestimate how variable nature is and misjudge extinction risk.
- You'd treat missed animals as absent ones.

## Explain it back
- Use the bathroom scale to explain the three sources.
- Why can't one count per year separate them?

*Pass test:* you can name the three sources of scatter in any study.

## Connections
- **Related:** [[Deterministic and Stochastic Components]], [[Hierarchical Model]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]]

## Flashcards

What's the difference between process variation and observation error?
??
Process variation is real change in nature; observation error is noise or bias added by how you measure.
![[Process vs observation error.png]]
++++

Why does it matter to separate process variation from observation error?
??
The data show both together; mistaking observation error for process variation makes populations look far more variable than they are.
++++
