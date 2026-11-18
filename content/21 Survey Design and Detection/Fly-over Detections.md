---
type: atomic
tags:
  - survey-design
  - data-cleaning
  - flashcards
aliases:
  - "fly-overs"
  - "FlyOver"
  - "flyover"
status: seedling
---

# Fly-over Detections
**In one line:** Birds that were only passing through the sky above the point, not perched, singing or feeding in the habitat around it.

> [!info] Before this, it helps to know
> [[Point Count Survey]] (how birds get recorded) · [[Species Richness]] (the number fly-overs could inflate)

## Start from zero
You stand in a field for a few minutes and write down what you see and hear. A Turkey Vulture drifts high overhead. A flock of Chimney Swifts zips across. Did they "use" this field? Probably not. They happen to be in the air above it.

Observers mark such birds as **fly-overs**, separate from birds on the ground or in the vegetation. Then later the analyst can decide whether to count them.

## Why it exists
A point count is meant to say which birds are **using the habitat** at that spot. Fly-overs mostly reflect luck (what passed by during those minutes), the open sky, and nearby features like a pond or a road, not the grassland below.

If fly-overs were mixed in, richness would partly measure "what flew past". That adds noise, and maybe bias, to a question about habitat ([[Hypotheses]]). Recording them separately keeps the choice open.

## A tiny example
One visit's sheet:

| Species | Ground bands total | FlyOver | Keep for richness? |
|---|---|---|---|
| EAME (meadowlark) | 2 | 0 | Yes |
| TUVU (vulture) | 0 | 1 | No: only overhead |
| DICK | 1 | 1 | **Yes**: also on the ground |

Richness should be 2 (meadowlark, Dickcissel). The tricky row is DICK: one bird was on the ground and another flew over. It belongs in the count.

## In my project
The `FlyOver` column counts individuals of a species seen flying over. Verified facts (codes trimmed):
- 207 of 7,742 rows (2.7%) have `FlyOver` > 0.
- 117 of those rows are fly-over only (nothing in any [[Distance Bands]]); the most common species among them are Chimney Swift (CHSW, 51 rows), Turkey Vulture (TUVU, 19), Barn Swallow (BARS, 12), American Crow (AMCR, 11) and Mississippi Kite (MIKI, 5): mostly aerial species.
- 90 rows have **both** ground and fly-over counts: the species was also using the habitat.
- `FlyOver` has 5 missing values.
- Only 1 visit had nothing but fly-overs: HO55 on 20 June 2022 (3 American Crows overhead). The new script keeps it with richness 0.

The wrangling code (GrasslandBirdRichness_Wrangling.R, Oct 13 version, run clean in RStudio):

```r
groundDat <-
  rawDat %>%
  mutate(GroundCount = coalesce(Dist_50, 0) + coalesce(Dist_100, 0) +
           coalesce(Dist_400, 0)) %>%
  filter(GroundCount > 0)
```

In words: "add up the birds in the three [[Distance Bands]] (treating a missing value as 0), and keep the row if that ground total is above 0". The `FlyOver` column is not used at all. So the 90 mixed rows, like the DICK row in the example, are **kept**, and fly-over-only rows are dropped. Fly-over-only visits stay in the data as richness 0 instead of vanishing, because richness is joined onto a full list of visits.

History: the Sep 10 script used `filter(is.na(FlyOver) | FlyOver == 0)`, which dropped the 90 mixed rows and 2 whole visits (1,248 instead of 1,250). The final proposal (Oct 12) chose the ground rule, and the script was changed (fixed Oct 13). Full reasoning: [[Why exclude fly-overs]]; the decision is in the [[Decision Log]].

Fly-overs as a research question (habitat use by aerial birds) was considered and rejected as too rare and limited to a few species ([[Alternatives Considered]]).

## Common confusions
- **"Drop any row with a fly-over."** Too strong: a row can have both ground and fly-over birds. Filter on the ground total instead.
- **"Fly-overs are errors."** They are real detections, just of a different behaviour. Excluding them is a choice that matches the habitat question.
- **"NA means zero."** A missing value means "not recorded"; decide on purpose how to treat it.

## Connections
- **Builds on:** [[Point Count Survey]], [[Distance Bands]], [[Species Richness]]
- **Leads to:** [[Why exclude fly-overs]], [[Wrangling vs Analysis Scripts]], [[Detection Probability]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]]

> [!question]- Check yourself
> A row shows Dickcissel with Dist_100 = 1 and FlyOver = 1. What did the old filter do with it, and what does the Oct 13 script do?
> ?
> The old `filter(is.na(FlyOver) | FlyOver == 0)` dropped it, so Dickcissel could vanish from that visit's richness. The Oct 13 script keeps it, because it filters on the ground total (Dist_50 + Dist_100 + Dist_400 > 0), and a bird was on the ground.
