---
type: molecular
tags:
  - molecular
  - detection
  - survey-design
  - flashcards/eco/why
aliases:
  - "Why weather covariates"
  - "Why Wind and Sky"
status: seedling
---

# Why include wind and sky
> [!summary] In plain words
> Observers find birds mostly by ear, and wind and bad sky make birds harder to hear and see. So weather changes how many species get *recorded*, even if the same species are there. If one property happened to get windier mornings, it would look poorer for no ecological reason. Putting Wind and Sky in the model lets us compare properties "at the same weather".

## The question
My hypothesis is about properties and habitat, not weather. Why put Wind and Sky in the model at all?

## Built from
- [[Point Count Survey]]: how the data were collected (an observer standing at a point, listening and looking for a fixed time).
- [[Imperfect Detection]]: birds that are present can be missed.
- [[Detection Probability]]: the chance (see [[Probability]]) a present bird is recorded, which weather changes.
- [[Detection Covariates]]: variables included to soak up differences in detectability.
- [[Confounding]]: what happens if weather differs between sites and is left out.

## The reasoning, step by step
1. **Start from the field.** Stand in a grassland at dawn for a few minutes. Most birds you record, you hear. Wind adds noise and shakes the grass, so quiet songs vanish. Cloud, drizzle or rain (higher Sky codes) can reduce singing and make birds harder to see.
2. **So the count measures two things at once.** What I record is not "species present" but "species present *and* detected" ([[Why observed richness is not true richness]]). Weather changes the second part.
3. **A tiny example.** Two identical fields each hold 8 species. On a calm morning an observer detects 7 of them. On a windy morning, maybe 5. The fields are the same; the counts differ by 2 because of wind alone. (Invented numbers to show the logic.)
4. **Now imagine weather lines up with property.** If one property happened to be surveyed on windier mornings, its observed richness would be lower even if its habitat were identical. The weather effect would masquerade as a property effect. That is [[Confounding]]: two causes moving together so the data cannot tell them apart.
5. **Including weather separates the two.** With Wind and Sky as [[Predictor Variable|predictors]], the model estimates the property effect "at the same weather". It also explains some of the visit-to-visit noise, which can make the property and habitat estimates more precise.
6. **A predictor only helps if it varies.** Wind varies within every site and in both years (brief), so it is not tangled up with Site. Wind = 3 is rare (8 point-visits, 27 detection rows), and Sky = 5 occurs on only 1 point-visit (4 rows).
7. **It also sets the baseline to beat.** The Null model (M0) holds only weather and point, and every other model adds property or habitat on top. An idea about place has to explain more than the weather does. See [[Candidate Model Set]].

## So in my project
`GrasslandBirdRichness_Wrangling.R` (Oct 13 version) takes one Wind and one Sky value per point-visit (they never change within a visit, which the re-check confirmed). It builds this list from all rows, so a fly-over-only visit still has its weather:
```r
visitDat <-
  rawDat %>%
  group_by(PtNum, Site, Date, Survey) %>%
  summarize(Wind = first(Wind),
            Sky = first(Sky),
            .groups = "drop")
```
In words: take the raw data, and then make one group per point-visit, and then keep the first Wind and Sky value in each group ([[group_by()|group_by and summarize]]). They then enter every candidate model. In `GrasslandBirdRichness_Analysis.R` the Null model is:
```r
M0_Null     = paste(response, "~ Wind + Sky + (1|PtNum)"),
```
and every other model adds property or habitat terms in front of `+ Wind + Sky + (1|PtNum)`. (The Sep 10 script's separate "Weather" model is gone; the Null model now plays that role.) They are treated as numbers, which assumes each step up in the code has the same effect on log richness. Treating them as categories instead ([[Factors in R|Factors]]), perhaps grouping the rare high codes, would be a sensible check (see [[Open Questions]]).

**What came out (Oct 13, [[Preliminary Results]]):**
- **Wind:** all-species richness was about 11% lower per one-step rise in the wind code (rate ratio 0.89, 95% CI 0.85 to 0.92). That is a real detection effect, so including wind was worth it. For focal species the effect was unclear (0.95, 0.84 to 1.08).
- **Sky:** no clear effect for either response (0.99). It stays in the model as designed; dropping it after seeing the result would be data dredging ([[Data Dredging]]).

## What would go wrong otherwise
- A property or habitat difference could partly be a weather difference, and I could not tell.
- The unexplained variation would be larger, so property and habitat estimates would be noisier.
- A reader familiar with point counts (Dr. Roberts) would immediately ask whether detection conditions were controlled. Wind and Sky do not fix all detection problems: [[Observer Effects]] and survey date also differ between sites, which is part of [[Why site and year cannot be separated]].

## Connections
- **Related:** [[Why observed richness is not true richness]], [[Interaction Term]] (the old Sep 10 Global model's `Site * Wind`, dropped in the final proposal and gone from the Oct 13 script), [[Correlation vs Causation]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]]

## Flashcards

Why can a windier property look poorer even with the same birds?::Wind and bad sky make birds harder to hear and see, so fewer species get recorded.

What does putting Wind and Sky in the model let you do?::Compare properties as if surveyed at the same weather.
