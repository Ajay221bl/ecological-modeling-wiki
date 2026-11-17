---
type: molecular
tags:
  - flashcards/eco/why
  - molecular
  - popest
aliases:
  - "Olympic fisher occupancy study"
  - "Happe fisher case study"
  - "Fisher reintroduction occupancy"
status: seedling
---

# Fisher Occupancy Case Study

> [!summary] In plain words
> Happe et al. (2020) used four years of camera and hair-snare surveys and stacked single-season occupancy models to show that reintroduced fishers on the Olympic Peninsula occupied land near wilderness edges rather than the dense mature forest planners expected, and it is a complete worked example of an occupancy analysis.

## The question
What does a real occupancy analysis look like from design to conclusion, and how do I read its numbers?

## Built from
- [[Translocation]] and [[Reintroduction]]: 90 fishers moved to the Olympic Peninsula in 2008 to 2010.
- [[Spatially Balanced Sampling]], [[Camera Trap]], [[Hair Snare]]: the design and the detectors.
- [[Stacked Occupancy Design]], [[Single-season Occupancy]], [[Observation Covariates]], [[Site Covariates]]: the model.
- [[Goodness of Fit and c-hat]], [[QAIC]], [[Evidence Ratio]], [[Model Averaging]]: choosing and summarising models.
- [[Edge Effect]] and [[Home Range]]: the ecology behind the covariates.

## See it
![[Fisher naive vs estimated occupancy.png|700]]
*What to look at:* in every year the estimate sits above the naive proportion, by most in 2013 (0.24 against 0.17), because some occupied hexes were missed on all three visits.

## The reasoning, step by step
1. **Question.** Did reintroduced fishers occupy what the 2004 habitat model called the best habitat (dense canopy over 70%, medium and large trees), and had their distribution settled?
2. **Design.** A grid of 24 km² hexagons; every other hex kept for independence; yearly panels chosen by GRTS; 3 baited stations per hex, each a camera plus a hair-snare box; 3 visits 14 days apart (6 weeks), late May to early November, 2013 to 2016 ([[Site Independence Assumption]]).
3. **Data.** A visit is a 1 if a fisher was photographed or its DNA found at any of the hex's 3 stations. 263 site-years from 143 hexes; detections at 30 hexes; 21 individuals identified by DNA.
4. **Model.** zᵢ ~ Bernoulli(ψᵢ), yᵢⱼ ~ Bernoulli(zᵢ pᵢⱼ), logit links, each hex-year a site with year in every occupancy model, because detections were too few for colonization and extinction ([[Stacked Occupancy Design]]). Covariates with r > 0.5 were never put in the same model ([[Collinearity]]).
5. **Detection first.** Holding a global occupancy model fixed, 32 detection models were compared (date and date² always in, plus year, year × date², bait and percent wilderness) ([[Global Model]], [[Quadratic Term]]).
6. **Check fit.** A parametric bootstrap of the global model gave ĉ = 1.37, mild overdispersion, so models were ranked by QAIC and standard errors inflated ([[Parametric Bootstrap]], [[Overdispersion]]).
7. **Occupancy models.** 33 models with the chosen detection structure, compared by QAIC, with evidence ratios for single covariates and model-averaged coefficients ([[Model Selection Uncertainty]]).
8. **Results.** p per visit ≈ 0.59, so 3 visits catch a present fisher 93% of the time. Distance to the wilderness boundary was in every model up to 99% cumulative weight, β = −1.37 ± 0.40, evidence ratio 254. The planners' habitat variables had little support: medium and large trees ER = 1.4, structural diversity 0.8, dense canopy 0.4. Occupancy was 0.24, 0.08, 0.12 and 0.14 in 2013 to 2016, and shifted west and south along the rain gradient.
9. **Conclusion.** Fishers favoured the edge between wilderness and managed forest, perhaps for prey near old-forest dens; the population was reproducing (at least two generations) but occupancy was still low and the distribution unsettled.
Cumulative detection: 1 − (1 − 0.59)³ = 0.931. QAIC of the top occupancy model: −2 × (−89.77) + 2 × 17 = 213.54, matching the table's 213.53 (the "quasi log-likelihood" is already divided by ĉ). Its weight against the second model: 0.51 / 0.15 = 3.4. Odds: exp(−1.37) = 0.25, so each unit farther from the wilderness edge (in the covariate's own units) cuts the odds of occupancy to a quarter; for detection, exp(0.66) = 1.93, nearly double the odds in wilderness, with 0.66 / 0.34 = 1.9 standard errors.

## So in practice
Copy the structure, not just the model: write the habitat predictions before fieldwork, design for independence, settle detection with a global occupancy model, check ĉ, then compare occupancy hypotheses and report evidence ratios and model-averaged effects with their uncertainty.

## In R
```r
round(c(cumulative_detection = 1 - (1 - 0.59)^3, QAIC_top = -2 * -89.77 + 2 * 17, weight_ratio_1_vs_2 = 0.51 / 0.15,
        odds_ratio_distance = exp(-1.37), odds_ratio_wilderness_p = exp(0.66)), 3)
naive <- c(`2013` = 0.173, `2014` = 0.074, `2015` = 0.093, `2016` = 0.132); psi <- c(0.24, 0.08, 0.12, 0.14)
round(rbind(naive, psi_hat = psi, ratio = psi / naive), 2)
```

## What would go wrong otherwise
Mapping fisher habitat from the 2004 assumptions without checking them: the survey showed dense canopy and large trees had almost no support, and the edge, which the plan ignored, mattered most.

## Explain it back
- Why did the authors model detection before occupancy, and why did they use QAIC rather than AIC?
- What does β = −1.37 for distance to the wilderness edge mean in words?

*Pass test:* you can walk through a published occupancy analysis step by step and interpret every number in its results.

## Connections
- **Related:** [[Occupancy Workflow in R]], [[Assumptions of Occupancy Models]], [[Single-season vs Multi-season Occupancy]], [[Choosing a Survey Method for Occupancy]], [[How to interpret a logistic regression coefficient]]
- **Part of:** [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]], [[MOC 16 - Population Estimation|MOC - Population Estimation]]

## Flashcards

In Happe et al. (2020), what was the strongest predictor of fisher occupancy?
??
Distance to the wilderness boundary (β = −1.37, evidence ratio 254): occupancy fell away from the edge.
![[Fisher naive vs estimated occupancy.png]]
++++

Why did Happe et al. use QAIC?
??
The bootstrap goodness-of-fit test gave ĉ = 1.37 > 1, indicating overdispersion.
++++

With p = 0.59 per visit and 3 visits, what is the cumulative detection probability?
??
1 − 0.41³ = 0.93.
++++
