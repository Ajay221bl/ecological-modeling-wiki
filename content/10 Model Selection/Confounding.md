---
type: atomic
tags:
  - model-selection-diagnostics
  - study-design
  - flashcards/eco/selection
description: "Confounding is when two possible causes always show up together in your data, so any effect you credit to one might really belong to the other."
aliases:
  - "confounded"
  - "confounding variable"
  - "confounder"
  - "Lurking variable"
status: seedling
---

# Confounding

You try a new fertilizer on your tomatoes this summer; last summer you used none. This year's tomatoes are bigger. Was it the fertilizer? Maybe, but this summer was also sunnier, so fertilizer and "this year" arrived together and you cannot tell them apart from these data. The sunshine is a *confounder*: a second cause tangled up with the one you care about. **Confounding** is when two possible causes always show up together in your data, so any effect you credit to one might really belong to the other. It is the concrete reason behind the warning that correlation is not causation ([[Correlation vs Causation]]), and it is a constant risk in an [[Observational Study]], where the researcher watches rather than assigns treatments.

Take two sites: site A was surveyed in 2022 and averaged 5 species per visit; site B was surveyed in 2023 and averaged 8. B is 3 species higher, but is B better habitat, was 2023 a better year (wet spring, different crew), or both? The table cannot say. If one site had been surveyed in both years you could start to separate the two. No amount of clever maths splits two causes that always move together in the data; the only cures are a different design (fertilize half the plants in the same summer, as in an [[Experimental Study]]) or more data where the two causes come apart. [[Hurlbert 1984]] built his critique of field studies on this: when a treatment coincides with a different place or time, its effect cannot be told apart from theirs. [[Zuur et al. 2010]] advise that "one should always plot all [[Predictor Variable|covariates]] against temporal and spatial covariates" (p. 9), and [[Tredennick et al. 2021]] list "temporal and spatial confounding" among the reasons observational ecological data are hard to model (p. 2). Do not mix it up with [[Collinearity]]: collinearity is about predictors you put in the model making each other's estimates wobbly, while confounding is about meaning, since the credit may belong to something else, sometimes something you never measured.

In the grassland bird project, Site is fully confounded with year. BK, DC and HO were surveyed only in 2022 and CR and HB only in 2023, with no point surveyed in both years ([[Study Sites]]), so the estimated difference between CR and BK is really the property difference plus the difference between 2023 and 2022 in weather, crew and anything else about that year. If Year were added to a model that already has Site, [[glmer()]] would report a rank-deficient fixed-effect matrix and drop a column, because Year adds nothing beyond Site. Observers are partly confounded too: EAL appears only at CR and HB (2023) and KAS only at BK, DC and HO (2022), so observer skill leaks into the "site" effect ([[Observer Effects]]). What helps: state it plainly in the Methods as a limitation ([[Why site and year cannot be separated]]); note that comparisons within a year (BK vs DC vs HO, CR vs HB) are not confounded with year; and use habitat covariates, as Dr. Roberts suggested, because habitat varies from point to point within a property where year and crew are constant ([[Why site identity is a weak test of a habitat hypothesis]], [[Proposal Feedback from Dr Roberts]]). In the Oct 13 results property still mattered after habitat, so H1 gets support, but CR's [[Rate Ratio|rate ratio]] of 1.40 against BK means "CR in 2023 versus BK in 2022, with different dates and crews"; habitat effects such as 45% fewer [[Focal Species|focal species]] per SD of tree cover are the cleaner evidence ([[Preliminary Results]], [[Open Questions]]). Three confusions: adding the confounder to the model fixes it only if the two causes vary somewhat independently; no Bayesian or fancier model can fix a design problem; and confounding does not make a result wrong, it gives it more than one explanation, which you report honestly.

## Connections
- **Builds on:** [[Correlation vs Causation]], [[Observational Study]], [[Experimental Study]], [[Collinearity]], [[Predictor Variable]], [[Rate Ratio]]
- **Leads to:** [[Study Sites]], [[Observer Effects]], [[Why site and year cannot be separated]], [[Why site identity is a weak test of a habitat hypothesis]], [[Focal Species]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection and Diagnostics]]
- **Go deeper:** [[Proposal Feedback from Dr Roberts]], [[Preliminary Results]], [[Open Questions]], [[Hurlbert 1984]], [[Zuur et al. 2010]], [[Tredennick et al. 2021]]

## Flashcards

If CR has higher richness than BK in the model, why can't you conclude that the property CR is better habitat?
??
CR was surveyed only in 2023 and BK only in 2022 (with partly different observers), so the CR vs BK difference mixes property, year and crew effects. The data cannot separate them.
++++

How does confounding differ from collinearity?::Collinearity is correlated predictors in the model making estimates unstable; confounding is a second cause (measured or not) tangled with the one you care about, so the credit may belong to it.
