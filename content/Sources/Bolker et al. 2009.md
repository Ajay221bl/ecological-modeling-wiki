---
type: source
tags:
  - source
  - project-source
  - mixed-models
aliases:
  - "Bolker 2009"
  - "Bolker et al 2009"
  - "GLMM practical guide"
status: seedling
---

# Bolker et al. 2009

> [!summary] In plain words
> A GLMM is a model for data that are not simple bell-curve numbers (such as counts) and that come in groups (such as repeat visits to the same spot). This review is the standard how-to guide for GLMMs in ecology: how they work, how to fit them, and the common traps. It matters because Ajay's main model is a GLMM, and his proposal cites this paper to justify it.

**Citation:** Bolker, B. M., M. E. Brooks, C. J. Clark, S. W. Geange, J. R. Poulsen, M. H. H. Stevens, and J.-S. S. White. 2009. Generalized linear mixed models: a practical guide for ecology and evolution. *Trends in Ecology and Evolution* 24(3):127-135. https://doi.org/10.1016/j.tree.2008.10.008

**Syllabus week:** Not a syllabus reading. Cited in Ajay's proposal to justify the GLMM.

> [!warning] Verify
> There is no PDF of this paper in the readings folder. The citation above matches the one in Ajay's proposal and is well known, but the details (and especially the DOI) were written from memory. Check them against the publisher's page before citing. No page numbers are given for its ideas because none could be checked.

## What it's about
The standard ecology review of GLMMs: models that combine a non-normal response (counts, proportions) with random effects for grouped data, how they are fitted, and how to test and compare them without falling into the common traps.

## Key ideas I use
- A GLMM is a GLM (non-normal family plus link function) with random effects added for grouping -> [[GLMM]], [[How LM, GLM and GLMM are one family]]
- Random effects handle grouped, non-independent data such as repeat visits -> [[Random Effect]], [[Why a random intercept for point]]
- Estimating a random-effect variance needs enough groups; with very few levels, treat the factor as fixed -> [[Why Site is fixed not random]]
- Check for overdispersion in Poisson and binomial GLMMs -> [[Overdispersion]]
- Testing whether a variance is zero is a test "on the boundary," so ordinary likelihood ratio tests are conservative (also explained in [[Harrison et al. 2018]], p. 18) -> [[Variance Component]]

## Notes that rely on it
- [[GLMM]]
- [[Analysis Plan]]
- [[Preliminary Results]]: the Oct 13 models are Poisson GLMMs fit with `glmer()`, Site fixed and a random intercept for point.

## Connections
- **Part of:** [[MOC 21 - Course Readings|MOC - Course Readings]], [[MOC 23 - Grassland Bird Richness Project|MOC - Grassland Bird Richness Project]]
