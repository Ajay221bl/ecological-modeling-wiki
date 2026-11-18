---
type: molecular
tags:
  - molecular
  - confounding
  - study-design
  - flashcards/eco/why
aliases:
  - "Site-year confounding"
  - "site and year confounded"
status: seedling
---

# Why site and year cannot be separated
> [!summary] In plain words
> Each property was surveyed in only one year: three in 2022, two in 2023. So once you know the property, you already know the year, and the data contain no way to tell a "property effect" from a "year effect". Any difference between, say, CR and BK might be about the place, or about 2023 versus 2022 (weather, dates, crews). I must say this plainly in the Report.

## The question
The data span 2022 and 2023. Why can't I add Year to the model, and what does that mean for interpreting Site?

## Built from
- [[Correlation vs Causation]]: two things moving together does not tell you which one matters.
- [[Confounding]]: two explanations that move together, so the data cannot tell them apart.
- [[Collinearity]]: the extreme case where one predictor is an exact function of another.
- [[Reference Level|Categorical Predictor and Reference Level]]: how Site and Year would be coded as 0/1 columns.
- [[Fixed Effect]]: both would be fixed terms.
- [[Repeat-Visit Design]]: no point was revisited across years.

## The reasoning, step by step
1. **Start with the facts.** The Oct 12 re-check found that each property was surveyed in only one year: **BK, DC and HO in 2022 only; CR and HB in 2023 only**. No point was surveyed in both years.
2. **Know the site, know the year.** Year adds no information that Site does not already contain.
3. **An everyday version.** Suppose your two best exam scores both came from the morning exams in Room A, and your two worst from afternoon exams in Room B. Was it the time or the room? With this schedule, you cannot tell. You would need a morning exam in Room B.
4. **What happens inside the model.** Site is coded as 0/1 columns (one per non-reference site). A Year column (1 for 2023) would equal "CR column + HB column" exactly:

   | Site | CR | DC | HB | HO | Year 2023 |
   |---|---|---|---|---|---|
   | BK | 0 | 0 | 0 | 0 | 0 |
   | CR | 1 | 0 | 0 | 0 | 1 |
   | DC | 0 | 1 | 0 | 0 | 0 |
   | HB | 0 | 0 | 1 | 0 | 1 |
   | HO | 0 | 0 | 0 | 1 | 0 |

   That is perfect [[Collinearity]]: the model cannot estimate both. R typically reports that the fixed-effect model matrix is rank deficient and drops a column.
5. **So cross-year site differences are mixed up with year.** CR versus BK is also 2023 versus 2022: a wetter or drier spring, different crews, different timing.
6. **Timing differs too.** CR was surveyed May 16-22, 2023, HB June 1-9, 2023, and the 2022 sites from June 6 to July 12, 2022. Bird activity and singing change through the breeding season, so date is tangled in as well.
7. **Observers differ too.** 2 observer codes at HB, 6 at DC, adding [[Observer Effects]] to the bundle.
8. **Some comparisons are cleaner.** BK, DC and HO can be compared among themselves, and CR with HB, without a year difference (though dates and observers still differ).
9. **Year as a random effect does not help.** Two levels is far too few to estimate a variance ([[Harrison et al. 2018]], p. 7).

## So in my project
- Keep the model as planned, but state the limitation plainly in the Report's Methods (the Report has no Discussion, so its Limitations paragraph sits there): "Site is completely confounded with survey year, so site differences may partly reflect year differences."
- This strengthens Dr. Roberts' suggestion to test habitat covariates measured at each point instead of relying on Site identity ([[Why site identity is a weak test of a habitat hypothesis]]).
- The final proposal (Oct 12) takes this route. It names the confounding as a limitation (property is tied to year, survey dates and largely to observers) and points out that habitat varies **within** each property, where year and crew are constant. That within-property variation is what makes the habitat comparison informative ([[Analysis Plan]]).
- Adding Year was considered and settled on Oct 12: Year is not added, and the confounding is stated as a limitation ([[Decision Log]], [[Open Questions]]).
- It shows up in the Oct 13 results: even with habitat in the model, CR, HB and DC have more species than BK (rate ratios 1.22 to 1.40). That leftover "property effect" may still be partly a year, date or crew effect ([[Preliminary Results]]).

## What would go wrong otherwise
- Claiming that "CR is the richest property" as a fact about the property, when it could be a 2023 or mid-May effect.
- Adding Year without understanding the problem, then misreading which coefficient R dropped.
- A reader discovering the confounding later would doubt the whole analysis; stating it up front shows the design was understood ([[Hurlbert 1984]] on design problems in field studies).

## Connections
- **Related:** [[Study Sites]], [[EDA Findings]], [[Why include wind and sky]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 10 - Model Selection|MOC - Model Selection and Diagnostics]]

## Flashcards

Why can the data not tell a property effect from a year effect?::Each property was surveyed in only one year, so knowing the property tells you the year.

Which comparisons are free of the year problem?::Comparisons within a year: BK vs DC vs HO (2022) and CR vs HB (2023).
