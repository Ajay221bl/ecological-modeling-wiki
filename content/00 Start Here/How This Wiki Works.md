---
type: home
tags:
  - start-here
  - meta
aliases:
  - "Wiki Guide"
  - "How to use this wiki"
status: seedling
---

# How This Wiki Works

This wiki uses five kinds of notes. Each kind has a template in the Templates folder.

## The big idea: first principles
Every note is written the way Richard Feynman taught: start from an everyday picture, use plain words, define every term, show real numbers before any formula, always say *why*, and finish by checking you could explain it back. Every note starts from something obvious and builds up, so nothing is assumed. Its *Start from zero* section is a numbered chain. Each step uses only an everyday idea or another note linked right there, and any step that isn't obvious says *why* it is done that way. Follow the links backwards and every chain ends in [[MOC - Basics from Zero]]. Procedures work the same way: every step of every workflow (fitting a GLM, running MCMC, choosing a random effect) says why it is there and why it comes in that order.

The course readings are listed in [[MOC - Course Readings]]. The notes teach each idea from scratch. Where the readings are silent (the R labs, for example), I fill the gap from trusted outside sources, and the note says so.

Every round of changes and checks is recorded in the [[Change Log]].

## The five note types
1. **Atomic notes** hold exactly one idea, such as [[Likelihood]] or [[Random Intercept]], and never two: [[Bias]] and [[Precision]] are separate notes. Each one has the same sections:
   - *In one line*: a plain definition with no undefined jargon
   - *Before this, it helps to know*: what to read first if something feels unfamiliar
   - *The everyday picture*: an analogy from daily life that carries the whole idea, and where the analogy stops working
   - *Words you'll need*: every technical word and symbol in the note, each defined in one plain sentence
   - *A tiny example*: small real numbers worked by hand, before any formula
   - *Start from zero*: the example turned into the general idea step by step, with a *Why* on each step that isn't obvious
   - *See it*: a graph or Mermaid flowchart, with one line on what to look at
   - *Why it is this way*: the problem the idea solves, why it has this shape, and what goes wrong without it
   - *In R*: commented code that runs as-is, with what the output means
   - *In the course*: which session and reading it comes from, with page numbers
   - *Common confusions*: the mix-ups beginners actually make, each cleared up
   - *Explain it back*: a few questions to answer aloud, and a one-line pass test
   - *Connections*, then *Flashcards* drawn from the note itself
2. **Molecular notes** combine several atoms into one insight. Each is titled as the question it answers, such as [[Why use a random effect instead of a fixed effect]], and opens with an *In plain words* answer short enough to say out loud, then an everyday picture, and closes with an *Explain it back* check. Comparisons are molecular notes too, named after both sides, such as [[Bias and Precision]] or [[Induction vs Deduction]]: they put the atomic notes side by side and explain how they differ and why it matters. All of them are listed in [[MOC - Why We Do It This Way]].
3. **Maps of Content (MOCs)** give an overview of one cluster, with links in reading order.
4. **Source notes** cover one reading or chapter each: the citation, what it covers, the key ideas with the concept note each one feeds, and which notes rely on it.
5. **Course notes** are about the course itself: schedule, homework and the final project. See [[MOC - Ecological Modeling Course]].

## Frontmatter fields
- `type`: atomic, molecular, moc, source, project, home or template
- `tags`: the cluster, plus a `flashcards/eco/...` deck tag on every note with cards
- `aliases`: other names, so a link like "GLMM" or "AIC weight" finds the right note
- `status`: how solid MY understanding is. **seedling** to start, **growing** once I can explain it in my own words, **evergreen** once I've used it in homework or the project.

## Reviewing flashcards
Cards are made for the Obsidian **Spaced Repetition** community plugin, with the same settings as my AGST vault (multi-line separator `??`, end marker `++++`).

1. Run **Spaced Repetition: Review flashcards from all notes**, or click the flashcards icon.
2. Pick a deck. Everything sits under `eco`: basics, modeling, r, exploration, distributions, lm-glm, bayes, selection, autocorrelation, mixed, why and course.
3. Rate each card Easy, Good or Hard.
4. To drill one note, open it and run **Review flashcards in this note**.

**How the cards are written**
- A one-line card is `Question::Answer`.
- A longer card is the question, then a line holding only `??`, then the answer, then a line holding only `++++`.
- Each card tests one idea, mostly "why" and "when would I use this".
- A card's figure sits on the last line of its answer, so it shows only after I reveal the answer.

**Things not to break**
- Leave the hidden `<!--SR:...-->` lines the plugin adds. They hold each card's schedule.
- Don't use `::`, or a line holding only `??` or `++++`, anywhere else in a note.

## Conventions
- Filenames are plain concept names, so links read naturally in a sentence. R function notes are named after the function, such as `lmer().md`.
- Every note links to at least three others and to at least one MOC.
- Readings are cited by linking their source note with a page number, like ([[Hobbs and Hooten 2015 Ch5]], p. 82).
- A `> [!warning] Verify` callout marks a detail that comes from outside my reading folder or couldn't be confirmed.
- Graphs are PNG files in `Figures`, embedded with `![[name.png|700]]`. Graphs of made-up data say "simulated" in their title. Flowcharts are Mermaid code blocks, which Obsidian draws on its own.
- R code runs as-is on simulated data or data bundled with an R package. Copy it into a script inside an RProject and run it top to bottom.
- R packages used: tidyverse, lme4, glmmTMB, brms, DHARMa, MuMIn, loo, bayesplot, performance, spdep.
