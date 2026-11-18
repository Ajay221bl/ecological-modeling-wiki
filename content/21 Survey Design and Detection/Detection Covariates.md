---
type: atomic
tags:
  - survey-design
  - detection
  - predictors
  - flashcards/eco/survey
description: "Detection covariates are notes about survey conditions (wind, cloud, observer, time) that go into a model because they change how easy animals are to notice, not how many live there."
aliases:
  - "detection covariate"
  - "detectability covariates"
  - "nuisance covariates"
status: seedling
---

# Detection Covariates

You stand in a field for a few minutes and write down what you hear. Today the wind roars, you can barely hear songs, and you record 4 species; yesterday, at a similar point, it was calm and you recorded 7. Did the birds change, or your hearing? Probably your hearing, so you also write down the conditions: wind, cloud or rain, who surveyed, what time it was. A *covariate* is a recorded variable that helps explain what you are studying, another name for a [[Predictor Variable]]. A **detection covariate** is one thought to change the [[Detection Probability]], the chance of noticing an animal that is there, rather than the animals themselves. Ecologists sort predictors into two kinds: *state* (habitat) covariates, thought to change the true number of birds or species (such as shrub cover), and detection covariates, thought to change only how many get noticed (wind drowning out song, rain keeping birds quiet).

Including them makes comparisons fairer, because survey conditions can line up with what you compare. Say calm mornings average 7 species per visit and breezy mornings 5, and Site A got mostly calm mornings while Site B got mostly breezy ones. Without Wind in the model, B looks 2 species poorer; with Wind in the model, that gap is credited to the wind and the sites are compared "as if" the weather had been the same. They also soak up variation, which can make the estimates you care about more precise. Now an honest caveat. In an [[Occupancy Model]] detection covariates sit on a separate "detection" level, cleanly apart from presence, so the model can tell [[Imperfect Detection]] from real absence. In an ordinary GLM or [[GLMM]] there is only one level, so a "detection" covariate simply adjusts the expected count, and the model cannot tell whether wind lowered detection or lowered the birds present. Calling it a detection covariate there is an interpretation we bring from biology.

Three confusions follow. A negative Wind effect in a one-level model does not prove wind lowers detection, only that fewer species were recorded in wind. Covariates with few levels are not automatically fine as numbers: treating Sky 0 to 5 as a number assumes equal steps between codes. And you should not add every condition, only ones that vary independently of what you compare. In the grassland bird project `Wind` (0 calm upward) and `Sky` (0 clear upward) are constant within a visit, so the wrangling script keeps the first value per visit with [[group_by()]] and `summarize()`, as in the code below. Per visit Wind is 0 at 871 visits, 1 at 278, 2 at 93 and 3 at only 8; Sky is 0 at 794, 1 at 369, 2 at 67, 3 at 6, 4 at 13 and 5 at 1. Wind varies within every site and both years, so it is not confounded with site ([[EDA Findings]]); whether to use categories instead ([[Factors in R]]) is open ([[Open Questions]], [[Why include wind and sky]]). Other detection-type variables in the file are not in the model: `Obs` ([[Observer Effects]]), `StartTime` (5:20 to 10:50) and `Date`, which is almost entirely tied to year and property (CR May 16 to 22, 2023; HB June 1 to 9, 2023; the 2022 sites June 6 to July 12), so it cannot be added without [[Confounding]] with site.

```r
# One row per visit: keep the first Wind and Sky value recorded at each visit
condSum <- rawDat %>%
  group_by(PtNum, Date, Survey) %>%
  summarize(Wind = first(Wind), Sky = first(Sky), .groups = "drop")   # norun: needs the project data
```

## Connections
- **Builds on:** [[Predictor Variable]], [[Detection Probability]], [[GLMM]]
- **Leads to:** [[Occupancy Model]], [[Imperfect Detection]], [[group_by()]], [[Factors in R]], [[Observer Effects]], [[Confounding]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]]
- **Go deeper:** [[Why include wind and sky]], [[EDA Findings]], [[Open Questions]], [[Observation Covariates]]

## Flashcards

In a Poisson GLMM, a negative Wind coefficient appears. Can you say "wind lowers detection"?
??
Not from this model alone. It shows fewer species were recorded in windier conditions. Saying that is due to detection rather than fewer birds present is a biological interpretation; only a model with a separate detection level (like occupancy) can estimate it as detection.
++++

What is the difference between a state covariate and a detection covariate?::A state covariate changes how many animals are really there; a detection covariate changes only how many get noticed.
