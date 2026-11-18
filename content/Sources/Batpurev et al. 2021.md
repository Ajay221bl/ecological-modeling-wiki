---
type: source
tags:
  - source
  - reading
  - gam
aliases:
  - "Batpurev 2021"
  - "Batpurev et al. 2022"
  - "Batpurev et al 2021"
status: seedling
---

# Batpurev et al. 2021

> [!summary] In plain words
> People from very different backgrounds (herders, scientists, officials) looked at photos of Mongolian rangeland and judged how healthy it was, and they mostly agreed. The authors used a GAM, a model that lets a relationship bend into a smooth curve instead of forcing a straight line, to show how those judgments change with plant cover. It matters to Ajay as a readable worked example for the GAM week, not for his main analysis.

**Citation:** Batpurev, K., S. J. Sinclair, O. Avirmed, M. P. Scroggie, K. Olson, and M. D. White. 2022. Stakeholders from diverse backgrounds make similar judgments about ecological condition and collapse in Mongolian rangelands. *Conservation Science and Practice* 4(1):e574. https://doi.org/10.1111/csp2.574

**Syllabus week:** Thur Oct 22, "Generalized additive models" (with Zuur et al. 2009 Chapter 3, which is not in the folder).

> [!note] Why the note says 2021 but the citation says 2022
> The syllabus and file name call it "Batpurev 2021" (accepted October 2021). The "How to cite this article" box printed in the PDF gives the year as 2022, volume 4, issue 1, e574. Cite it as 2022 in written work.

## What it's about
Herders, scientists, government staff and conservation workers scored photos of Gobi rangeland sites for condition and "collapse." GAMs show how judgments change with total vegetation cover, and whether different stakeholder groups need their own curves (they mostly don't).

## Key ideas I use
- A GAM with a smooth (thin plate spline) of total vegetation cover plus a random effect of expert ID: log(C) = s(veg) + expert effect + error (p. 8) -> [[Generalized Additive Model]], [[Smoother|Smooth Function]], [[Random Effect]]
- Two model types compared: one global smooth for everyone vs a smooth that can differ among stakeholder groups, following Pedersen et al. (2019) (p. 8) -> [[Hierarchical GAM]]
- A binomial GAM of "collapsed or not" against vegetation cover, and the cover threshold where the probability of "collapsed" is half its maximum (pp. 8-9, Fig. 4) -> [[Regime Shifts and Spatial Early Warning Signals]], [[Link Function]]
- Ten-fold cross-validation: the more complex group-specific model gave little advantage, so the simpler model was preferred (pp. 10, 12) -> [[Parsimony]], [[Model Purpose - Exploration Inference Prediction]]

## Notes that rely on it
- [[Generalized Additive Model]]
- [[Hierarchical GAM]]

## Connections
- **Part of:** [[MOC 21 - Course Readings|MOC - Course Readings]]
- **Builds on:** [[Pedersen et al. 2019]]
