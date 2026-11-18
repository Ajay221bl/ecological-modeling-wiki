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

This wiki uses five kinds of notes, and each kind has a template in the Templates folder. This page describes the format every note follows now (v1.6, Nov 18, 2026). What changed and when is in the [[Change Log]].

## The big idea: self-contained, from first principles
Every note is written the way Richard Feynman taught: start from an everyday picture, use plain words, show real numbers before any formula, and always say *why*. Two rules make each note self-contained.

1. **One concept per atomic note, explained from zero.** A note never assumes the idea it is teaching. It builds it from a picture and a tiny worked example.
2. **First use gets a link.** The first time a technical term or concept appears in a note, it links to that term's own atomic note, with a few plain words of meaning right beside it, so you can keep reading without clicking. If a term had no note, one was written. Follow the links backwards and every chain ends in [[MOC 01 - Basics from Zero|MOC - Basics from Zero]].

The course readings are listed in [[MOC 21 - Course Readings|MOC - Course Readings]]. Where the readings are silent (the R labs, for example), outside sources fill the gap, and the note says so.

## The five note types
### 1. Atomic notes
An atomic note holds exactly one idea, such as [[Likelihood]] or [[Random Intercept]], and never two: [[Bias]] and [[Precision]] are separate notes. It has no subsection headings. In order, it contains:

1. **The picture and the idea** (paragraph 1): an everyday picture, then a plain definition with the term in bold, and links for every term used for the first time.
2. **Build it from zero** (paragraph 2): a tiny example with real numbers, each step with its *why*, and the general formula only at the end.
3. **Why it is this way** (paragraph 3, optional): the problem the idea solves, the common confusions, and where it comes from in the course or the grassland bird project, with page numbers.
4. **A figure, table or Mermaid chart** where one helps, followed by a *What to look at:* line.
5. **An R block**, with no heading, that runs as it is on simulated or package data (blocks that need the project files or slow packages carry a `# norun` comment).
6. **Connections**, four lines:
   - **Builds on:** the prerequisites linked in the body, in reading order
   - **Leads to:** the notes linked in the body that use this one
   - **Part of:** the MOC the note belongs to
   - **Go deeper:** molecular notes and source notes
   Every link in the body also appears here.
7. **Flashcards** drawn from the note itself.

Example: [[Variance]], [[Deviation]], [[Link Function]] and [[Woody Encroachment]].

### 2. Molecular notes
A molecular note combines several atomic notes into one insight. It is titled as the question it answers, such as [[Why use a random effect instead of a fixed effect]], or, for a comparison, after both sides, such as [[Bias and Precision]] or [[Grassland Specialists vs Generalists]]. Comparisons always live here, never in an atomic note. Its sections are:
- an *In plain words* callout, an answer short enough to say out loud
- *The question* it answers
- *Built from*: the atomic notes it combines and the role each plays
- *See it* (optional): a figure, table or flowchart
- *The reasoning, step by step*, with a worked example in numbers
- *So in practice*: the rule this leads to, with the course or project example
- *What would go wrong otherwise*
- *Connections* and *Flashcards*

Older molecular notes may also end with an *Explain it back* check. All of them are listed in [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]].

### 3. Maps of Content (MOCs)
A MOC gives an overview of one cluster, with links in reading order: from basic to advanced, or in the order the syllabus meets them, never alphabetical. Each entry is the note's link and its one-line description.

### 4. Source notes
A source note covers one reading or chapter: the citation, the pages read, what it covers, the key ideas with the concept note each one feeds, and which notes rely on it.

### 5. Course and project notes
These are about the course itself and the grassland bird project: the schedule, the homework walkthroughs, the final project and its decisions. See [[MOC 00 - Ecological Modeling Course|MOC - Ecological Modeling Course]], [[MOC 22 - Homework|MOC - Homework]] and [[MOC 23 - Grassland Bird Richness Project|MOC - Grassland Bird Richness Project]].

## The maps
- Course units in syllabus order: MOCs 01 to 19, starting with [[MOC 01 - Basics from Zero|MOC - Basics from Zero]] and ending with [[MOC 19 - Ecology Vocabulary|MOC - Ecology Vocabulary]].
- The "why" behind each rule: [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]]. The readings: [[MOC 21 - Course Readings|MOC - Course Readings]].
- Homework: [[MOC 22 - Homework|MOC - Homework]].
- The grassland bird project and its ecology: [[MOC 23 - Grassland Bird Richness Project|MOC - Grassland Bird Richness Project]], [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]], [[MOC 25 - Landscape and Remote Sensing|MOC - Landscape and Remote Sensing]] and [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]].
- The reading order across all of them: [[Learning Path]]. Every note in one list: [[Index]].

## Frontmatter fields
- `type`: atomic, molecular, moc, source, project, home or template
- `tags`: the cluster, plus a `flashcards/eco/...` deck tag on every note with cards
- `description`: the one-line definition the MOCs and the Index show
- `aliases`: other names, so a link like "GLMM" or "AIC weight" finds the right note. No alias is shared by two notes or matches another note's title.
- `status`: how solid my understanding is. **seedling** to start, **growing** once I can explain it in my own words, **evergreen** once I've used it in homework or the project.

## Reviewing flashcards
Cards are made for the Obsidian **Spaced Repetition** community plugin, with the same settings as my AGST vault (multi-line separator `??`, end marker `++++`). The published website hides them.

1. Run **Spaced Repetition: Review flashcards from all notes**, or click the flashcards icon.
2. Pick a deck. Everything sits under `eco`: basics, modeling, r, exploration, distributions, lm-glm, bayes, selection, autocorrelation, mixed, gam, popest, stan, writing, ecology, why, course, and for the grassland bird project, project, grassland, landscape and survey.
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
- A detail that comes from outside the reading folder, or that couldn't be confirmed, is flagged: in an atomic note with a plain "check this before quoting" in the text, and in source, project and molecular notes with a `> [!warning] Verify` callout.
- Graphs are PNG files in `Figures`, embedded with an image link such as `![[ACF plot.png|700]]`. Graphs of made-up data say "simulated" in their title. Flowcharts are Mermaid code blocks, which Obsidian and the website draw on their own.
- R code runs as it is on simulated data or data bundled with an R package. Copy it into a script inside an RProject and run it top to bottom.
- R packages used: tidyverse, lme4, glmmTMB, nlme, mgcv, brms, rstan, loo, posterior, bayesplot, performance, spdep, survival, plus DHARMa, MuMIn, AICcmodavg, unmarked, gratia and cmdstanr. Blocks that need one of the last six, the project's own data files, or minutes of sampling carry a `# norun` comment: they were checked against the package documentation but not run when the wiki was built.
