---
type: atomic
tags:
  - model-selection-diagnostics
  - study-design
  - flashcards
aliases:
  - "confounded"
  - "confounding variable"
  - "confounder"
status: seedling
---

# Confounding
**In one line:** When two possible causes always show up together in your data, so any effect you credit to one might really belong to the other.

> [!info] Before this, it helps to know
> [[Correlation vs Causation]] (the core idea) · [[Collinearity]] (the statistical cousin) · [[Study Sites]] (where it bites me)

## Start from zero
You try a new fertilizer on your tomatoes this summer. Last summer you used none. This year's tomatoes are bigger. Was it the fertilizer?

Maybe. But this summer was also sunnier. Fertilizer and "this year" arrived together. You cannot tell them apart from these data. The sunshine is a **confounder**: a second cause tangled up with the one you care about.

This is the famous warning that correlation is not causation ([[Correlation vs Causation]]).

## Why it exists
No amount of clever math can split two causes that always move together in the data. The only cures are a different design (for example, fertilize half the plants in the same summer) or more data where the two causes come apart.

[[Hurlbert 1984]] built his critique of field studies on this: when a treatment coincides with a different place or a different time, its effect cannot be told apart from theirs. [[Zuur et al. 2010]] advise "one should always plot all covariates against temporal and spatial covariates" (p. 9). [[Tredennick et al. 2021]] list "temporal and spatial confounding" among the reasons observational ecological data are hard to model (p. 2).

**Collinearity vs confounding.** [[Collinearity]] is about predictors you put in the model making each other's estimates wobbly. Confounding is about meaning: the credit may belong to something else, sometimes something you never measured.

## A tiny example
| Site | Year surveyed | Mean species per visit |
|---|---|---|
| A | 2022 | 5 |
| B | 2023 | 8 |

B is 3 species higher. Possible reasons: B is better habitat, or 2023 was a better year (wet spring, different crew), or both. The table cannot tell you which. If one site had been surveyed in both years, you could start to separate them.

## In my project
**Site is fully confounded with year.** BK, DC and HO were surveyed only in 2022; CR and HB only in 2023; no point was surveyed in both years. So the estimated difference between CR and BK is really (difference between the properties) + (difference between 2023 and 2022: weather, crew, anything else about that year). If Year were added to a model that already has Site (such as the Property model, M1), [[glmer()]] would report that the fixed-effect model matrix is rank deficient and drop a column, because Year adds no information beyond Site.

**Observers are partly confounded with site and year.** For example EAL appears only at CR and HB (2023) and KAS only at BK, DC and HO (2022). Observer skill leaks into the "site" effect too ([[Observer Effects]]).

What I can do:
- State it plainly in the Report's Methods as a limitation ([[Why site and year cannot be separated]]).
- Note that comparisons within a year (BK vs DC vs HO; CR vs HB) are not confounded with year, though they still compare whole properties, not habitat.
- Use habitat covariates, which Dr. Roberts suggested and the models now include (since Oct 13). Habitat varies from point to point within each property, where year and crew are constant, so a habitat effect is not confounded with year in the way a property effect is ([[Why site identity is a weak test of a habitat hypothesis]], [[Proposal Feedback from Dr Roberts]]).

What this means for the Oct 13 results ([[Preliminary Results]]): property still mattered after habitat (M3 beat every habitat-only model), so H1 gets support. But a rate ratio like CR's 1.40 (relative to BK) is "CR in 2023 versus BK in 2022, with different dates and crews", not a pure property effect. The habitat effects, such as 45% fewer focal species per SD of tree cover, are the cleaner evidence.
- Raise the issue with Dr. Roberts ([[Open Questions]]).

## Common confusions
- **"Adding the confounder to the model fixes it."** Only if the two causes vary somewhat independently. When they overlap perfectly (Site and Year here), the model simply cannot separate them.
- **"A Bayesian or fancier model would fix it."** No method can. It is a design problem.
- **"Confounding means my result is wrong."** It means the result has more than one explanation. Report it honestly.

## Connections
- **Builds on:** [[Correlation vs Causation]], [[Collinearity]], [[Study Sites]], [[Data Exploration]]
- **Leads to:** [[Why site and year cannot be separated]], [[Why site identity is a weak test of a habitat hypothesis]], [[Observer Effects]]
- **Part of:** [[MOC 10 - Model Selection|MOC - Model Selection and Diagnostics]]
- **Go deeper:** [[Hurlbert 1984]] (the classic on field design), [[Zuur et al. 2010]] (p. 9)

> [!question]- Check yourself
> If CR has higher richness than BK in my model, why can't I conclude that the property CR is better habitat?
> ?
> CR was surveyed only in 2023 and BK only in 2022 (with partly different observers), so the CR vs BK difference mixes property, year and crew effects. The data cannot separate them.
