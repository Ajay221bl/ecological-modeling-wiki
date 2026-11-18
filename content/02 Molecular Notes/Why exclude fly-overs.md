---
type: molecular
tags:
  - molecular
  - survey-design
  - data-cleaning
aliases:
  - "Why drop fly-overs"
status: seedling
---

# Why exclude fly-overs
> [!summary] In plain words
> Richness should count species that are using the grassland at a point, and a bird just passing overhead may not be. So species seen *only* flying over are left out. But a species seen both on the ground and overhead was using the place, so it should still count. The old Sep 10 code removed those too. Since Oct 13 the script keeps any species with a ground count, and a visit with only fly-overs stays in as richness 0.

## The question
The FlyOver column counts birds seen flying over the point. Why leave them out when counting species richness, and how exactly should they be left out?

## Built from
- [[Fly-over Detections]]: what the FlyOver column records.
- [[Point Count Survey]]: the method; the question is which birds use the area around the point.
- [[Species Richness]]: the response that fly-overs would inflate.
- [[Distance Bands]]: the Dist_50, Dist_100 and Dist_400 columns, counts of birds within 50, 100 and 400 m.
- [[Grassland Core Habitat]]: the ecological idea the response is supposed to reflect.

## The reasoning, step by step
1. **Start from the hypothesis.** My question links richness to the grassland at each property ([[Hypothesis]]). So a species should count toward a point's richness only if it is plausibly using that point's habitat.
2. **Passing birds do not tell us about the habitat.** A Turkey Vulture or a Mississippi Kite overhead may be travelling between places that have nothing to do with this grassland. Counting it adds a "species" unrelated to habitat quality.
3. **How common are they?** Fly-overs are 207 of 7,742 rows (2.7%), mostly aerial species (Turkey Vulture, Mississippi Kite, Chimney Swift). Small, but noise unrelated to the hypothesis.
4. **Now look at how a row is built.** Each row is one species at one visit, with counts in several columns at once. So one row can say "5 within 50 m *and* 4 flying over".
5. **A real example.** Point BK1001, 8 July 2022, has 6 species rows. Barn Swallow (BARS) has Dist_50 = 5 and FlyOver = 4: it was on or near the ground as well as overhead. On 12 July, American Crow (AMCR) has only FlyOver = 3, nothing in any distance band.

   | Rule | Visit 1 richness | Visit 3 richness |
   |---|---|---|
   | Count every row | 6 | 7 |
   | Old Sep 10 code: drop any row with FlyOver > 0 | 5 (loses BARS) | 6 |
   | Oct 13 code: keep rows with any ground count | 6 | 6 (drops AMCR only) |

6. **So the right rule is about ground counts.** Count a species at a visit if it was recorded in any distance band. Across the data, 90 rows are mixed like BARS; the old code wrongly removed all of them.
7. **A judgment call remains.** Aerial foragers such as swifts do feed over grassland. Excluding them is a choice, and the Methods should state it.

## So in my project
`GrasslandBirdRichness_Wrangling.R` (Oct 13 version, run clean in ajay's RStudio) does:
```r
groundDat <-
  rawDat %>%
  mutate(GroundCount = coalesce(Dist_50, 0) + coalesce(Dist_100, 0) +
           coalesce(Dist_400, 0)) %>%
  filter(GroundCount > 0)
```
In words: add up the three distance bands into `GroundCount`, and keep the row if it is above 0. `coalesce(Dist_50, 0)` means "use Dist_50, or 0 if it is missing"; in R, anything plus a missing value is missing, and `filter()` would drop that row. The rule never looks at FlyOver, so the 90 mixed rows are kept and the 5 rows with a missing FlyOver are judged on their bands. It also drops the 2 rows with zero in every band and FlyOver = 0 (see [[Open Questions]]).

Richness is then joined onto a full list of visits, so a fly-over-only visit gets richness 0 instead of vanishing. Only one visit is like that: HO55 on 20 June 2022, and it is among the 376 points in the models.

History (marked so the change is traceable): the Sep 10 script used `filter(is.na(FlyOver) | FlyOver == 0)`. It dropped the 90 mixed rows, and 2 whole visits vanished (1,248 instead of 1,250). The final proposal (Oct 12) chose the ground rule, and the script was fixed Oct 13. See [[Decision Log]] and [[R Scripts Walkthrough]].

## What would go wrong otherwise
- Including all fly-overs inflates richness with transient species, blurring any habitat signal.
- A FlyOver-based filter (the old code) undercounts richness wherever a species was both on the ground and overhead, a small but avoidable bias that could differ between properties.
- Dropping a fly-over-only visit throws away a real survey. Its richness is genuinely 0 species on the ground.
- Not stating the rule in Methods makes the analysis hard to reproduce or judge ([[Reproducibility]]).

## Connections
- **Related:** [[Why observed richness is not true richness]], [[Why explore data before modeling]], [[Pipe]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]]
