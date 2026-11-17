---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - writing
aliases: []
status: seedling
---

# How to write up a modeling analysis

> [!summary] In plain words
> writing up a modeling analysis means stating the question and theme, describing data and model so they can be repeated, reporting effects with uncertainty on a meaningful scale, and interpreting them in plain language.

## The question
How do I turn my R analysis into a methods and results section?

## Built from
- [[Theme and Key Points]], [[One Idea per Paragraph]], [[Plain Clear Sentences]].
- [[Writing Methods Sections]], [[Writing Results Sections]], [[What to Report for a Model]].
- [[Figures for Model Results]], [[Reporting Statistics in Text]].

## See it
```mermaid
flowchart LR
  P["Key points"] --> F["Main figure"] --> M["Methods"] --> R["Results"] --> D["Discussion"] --> E["Edit: cut, read aloud"]
```
*What to look at:* the points and figure come first; prose is built around them.

## The reasoning, step by step
1. **Write the two or three key points** in one sentence each.
2. **Make the main figure** that shows point one.
3. **Methods:** design, data, exploration, model equation in words, validation, selection, software.
4. **Results:** one paragraph per question, effect size and interval first, pointing to figures.
5. **Discussion:** what the effects mean ecologically, limits (detection, autocorrelation, assumptions), comparison with other studies.
6. **Edit:** cut words (McCarthy), check the first-sentence summary, read aloud.
7. **Check reproducibility:** someone can run the code from raw data to figures.

## So in practice
For HW write-ups and the final project, draft the figure and the results paragraph together, then write methods so a classmate could reproduce them.

## What would go wrong otherwise
Pasting `summary()` output into the results and calling it a write-up.

## Explain it back
- Why write the key points before the methods?

*Pass test:* you can write up an analysis in the right order.

## Connections
- **Related:** [[Bayesian Mixed Model Workflow in R]], [[GAM Workflow in R]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 18 - Scientific Writing|MOC - Scientific Writing]]

## Flashcards

First step in writing up an analysis?
??
Write the two or three key points, one sentence each.
++++
