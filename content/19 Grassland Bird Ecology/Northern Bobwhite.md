---
type: atomic
tags:
  - grassland-bird-ecology
  - species
  - flashcards
aliases:
  - "NOBO"
  - "bobwhite"
  - "Colinus virginianus"
  - "Bobwhite"
status: seedling
---

# Northern Bobwhite
**In one line:** A small, round, ground-living quail (*Colinus virginianus*, code NOBO) of grassy and brushy fields, named for the male's whistled "bob-WHITE", and a game bird that has declined for decades.

> [!info] Before this, it helps to know
> [[Grassland Bird Decline]] (why it is a focus) · [[Detection Probability]] (why a mostly-heard bird is tricky to count)

## Start from zero
A **quail** is a small, chunky bird that lives on the ground, walks more than it flies, and bursts into flight only when startled. The Northern Bobwhite is the common quail of the eastern and central US.

You rarely see one on a survey. You **hear** it: a clear, rising whistle, "bob-WHITE!", from somewhere in the grass or a brushy fence line.

Bobwhite do not migrate; they live in the same area all year. Outside the breeding season they gather in small groups called **coveys**.

## Why it exists (why it matters here)
**"Grassland bird" is not one thing.** A meadowlark wants wide-open grass with no trees. A bobwhite wants a **mix**: grass and weeds to nest and feed in, plus patches of shrubs nearby to hide from hawks and bad weather. So a little woody cover can help bobwhite while it harms a meadowlark. Too much closed woodland is bad for both ([[Woody Plant Encroachment]]).

**A very well-studied bird.** Because people hunt bobwhite, wildlife agencies have measured them for a long time. [[Guthery and Bingham 2007]] use bobwhite examples to teach how to read regressions: a model predicting hunter-days from a bobwhite abundance index whose intercept implies hunting with no quail, a warning about stretching a line beyond the data (p. 685; see [[Equation of a Line]]), and a multiple regression of prehunt bobwhite density (p. 688).

> [!warning] Verify
> Range-wide bobwhite declines are well documented (often reported as more than 80% since the 1960s in Breeding Bird Survey data), and [[Brennan and Kuvlesky 2005]] discuss bobwhite among declining grassland birds. Check the exact figures before quoting them.

## A tiny example
Why "mostly heard" matters. Suppose a bobwhite at a point calls on average once every 4 minutes, and calling is spread out at random. The data release metadata says focal species were recorded during a three-minute count. In 3 minutes such a bird is expected to call 0.75 times, and the chance it never calls is about 47% (e^-0.75), nearly a coin flip, even though it is there. On a windy morning, even a call may be drowned out. So two visits to the same occupied point might give "heard" and "not heard": detection, not presence, changed.

## In my project
Bobwhite is the second most common of the six [[Focal Species]] in my file. Re-counted Oct 12 (codes trimmed, ground detections only), it was found on 202 of all 1,250 point-visits at 138 points (280 birds). By site: HO 91 visits, DC 40, BK 36, CR 28, HB 7. Bobwhite are mostly **heard**, so detection depends heavily on calling and on conditions like wind, one reason my model includes Wind as a [[Detection Covariates|detection covariate]] ([[Why include wind and sky]]). In the Oct 13 results wind clearly lowered all-species richness, but its effect on focal richness was unclear (rate ratio 0.95, 95% CI 0.84 to 1.08; [[Preliminary Results]]).

For my richness response, a bobwhite counts as one species at a point-visit whether one or five were heard ([[Species Richness]]). If the project grows into single-species models, bobwhite would be a candidate alongside [[Dickcissel]], with the same caution: single-species counts tend to be overdispersed.

By a summary of Berry's 2024 thesis, bobwhite avoided tree-grass boundaries **less** than the other focal species, which fits its need for shrubby cover near open ground ([[Grassland Specialists vs Generalists]], [[Habitat Selection]]). That result still needs checking; all six are compared in [[Focal Species]].

## Common confusions
- **"Shrubs are bad for all grassland birds."** Bobwhite use some; meadowlarks avoid them.
- **"Not heard = not there."** A quiet covey is easy to miss.
- **"A regression line works everywhere."** Guthery and Bingham's hunter-days example shows a line can give nonsense outside the data range.

## Connections
- **Builds on:** [[Four-Letter Species Codes]], [[Grassland Bird Decline]]
- **Leads to:** [[Detection Probability]], [[Equation of a Line]]
- **Part of:** [[MOC 24 - Grassland Bird Ecology|MOC - Grassland Bird Ecology]]
- **Go deeper:** [[Guthery and Bingham 2007]], [[Brennan and Kuvlesky 2005]], [[Berry et al. 2026]]

> [!question]- Check yourself
> Why might woody cover affect Northern Bobwhite differently from strict grassland songbirds?
> ?
> Bobwhite use shrubby patches for cover, so moderate woody cover can help them, while strict grassland species avoid trees. Very dense woodland harms both.
