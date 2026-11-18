---
type: source
tags:
  - source
  - project-source
  - mixed-models
aliases:
  - "Hurlbert"
  - "Hurlbert 1984 pseudoreplication"
status: seedling
---

# Hurlbert 1984

> [!summary] In plain words
> Pseudoreplication means treating measurements as independent repeats when they are not, like counting the same field three times and pretending it is three fields. This famous paper named the problem, showed how common it was, and explained why it makes results look far more certain than they are. It matters because Ajay visits each point three times, which is exactly why his model gives each point its own baseline (a random intercept for point).

**Citation:** Hurlbert, S. H. 1984. Pseudoreplication and the design of ecological field experiments. *Ecological Monographs* 54(2):187-211. https://doi.org/10.2307/1942661

**Syllabus week:** Not a syllabus reading. Cited in Ajay's proposal for the repeated-visits hypothesis (H2 in the Sep 10 proposal, H3 in the final Oct 12 proposal), and cited by [[Zuur et al. 2010]] (p. 11).

> [!warning] Verify
> There is no PDF of this paper in the readings folder. The citation above matches the one in Ajay's proposal and is well known, but the details (and especially the DOI) were written from memory. Check them against the publisher's page before citing. No page numbers are given for its ideas because none could be checked.

## What it's about
The paper that named **pseudoreplication**: using inferential statistics to test for an effect with data where the "replicates" are not independent, or where the treatment is not actually replicated. One of the most cited papers in ecology.

## Key ideas I use
- Pseudoreplication: treating non-independent observations as if they were independent replicates inflates the apparent sample size and gives false confidence -> [[Pseudoreplication]], [[Independence of Observations|Independence Assumption]]
- Repeated visits to the same point are not independent replicates; a random intercept for point is the modern fix -> [[Repeated Measures]], [[Why a random intercept for point]]
- The true replicate is the unit that independently receives the "treatment". Applying that idea here (my reasoning, not a claim from the paper): for a site-level habitat claim, the five sites are the replicates, not the 416 points -> [[Sampling Unit]], [[Why site identity is a weak test of a habitat hypothesis]]

## Notes that rely on it
- [[Pseudoreplication]]
- [[Why a random intercept for point]]
- [[Hypotheses]]
- [[Why the point-visit is the sampling unit]]
- [[Preliminary Results]]: the Oct 13 point variance was 0.20 for focal richness but 0 for all-species richness, so visits to a point were clearly alike for focal species only. The random intercept stays in every model as designed.

## Connections
- **Part of:** [[MOC 21 - Course Readings|MOC - Course Readings]], [[MOC 23 - Grassland Bird Richness Project|MOC - Grassland Bird Richness Project]]
