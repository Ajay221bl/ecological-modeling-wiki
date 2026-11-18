---
type: project
tags:
  - project
  - grassland-bird-richness
  - todo
aliases:
  - "To do"
  - "Todo"
status: seedling
---

# Next Steps

> [!summary] In plain words
> The code is done and has run, and the Report is drafted. Four small steps are left before the Report goes in today (**Oct 13**): read and approve it, do one last clean run, zip the R project, and email both files. After that, the Final Draft (due Nov 19) fixes the two model problems the Report found, most likely with a GAM that handles space plus a count distribution that allows less spread than Poisson.

As of **Oct 13, 2026**. Late work loses 50% ([[Milestones and Deadlines]]). What the models are and why: [[Analysis Plan]]. What they found: [[Preliminary Results]].

## Done (Report steps 1 to 11)
- [x] Habitat file copied into `GrasslandBirdRichness_Data/`; both scripts rewritten to the final plan; README updated (steps 1 to 4, done Oct 12 to 13; code details in [[R Scripts Walkthrough]]).
- [x] Test run in a cloud copy of R, then ajay's RStudio run; every AIC and estimate matched (steps 5 to 7, done Oct 13).
- [x] Report drafted: `Bedi_ProjectReport_EcoModeling.docx`, 2,787 words, with Introduction, Hypotheses, Methods (including a Limitations paragraph), Results (Tables 1 to 3, Figures 1 and 2) and Citations (steps 8 to 11, done Oct 13). It is saved in ClaudeProject_Setup, outside the R project folder, so it stays out of the zip.

## Left for the Report (due today, Oct 13)
- [ ] **Step 12. Read and approve.** Read the Report start to finish; change anything that does not sound like you or that you could not explain.
- [ ] **Step 13. Final clean run.** If any code changed after the RStudio run, run it again so the Results and Figures files match the Report. Open the project through `GrasslandBirdRichness.Rproj` (File > Open Project), check the project name shows top right, then Session > Restart R, then Source the analysis script. If R says a folder "does not exist", RStudio was not opened through the .Rproj ([[RProject]], [[here()]]). A `boundary (singular) fit` message is expected and is not an error ([[Singular Fits and Convergence Warnings]]).
- [ ] **Step 14. Zip** the whole `GrasslandBirdRichness` folder: .Rproj, both scripts, README, and the Data, Results and Figures folders ([[Why a reproducible project structure matters]]).
- [ ] **Step 15. Email** cr065@uark.edu with "Class: Ecological Modeling" in the subject, attaching the .docx and the zip.

## Final Draft model options (due Nov 19)
The Report's Poisson models have two known problems: **underdispersion** (counts less spread out than Poisson expects) and weak **spatial autocorrelation** (nearby points have similar leftovers) ([[Underdispersion]], [[Spatial Autocorrelation]], [[Preliminary Results]]). The options, from the Oct 13 report-plan thread:

1. **GAM with a spatial smooth.** `mgcv::gam(..., s(longitude, latitude))` adds a smooth surface over the map that soaks up spatial patterns. Habitat terms can be smooth too, e.g. `s(SpCov3)`, since focal richness may peak near zero covariance rather than rise in a straight line ([[Generalized Additive Model]], [[Smooth Function]]). GAMs are taught Oct 22; related readings: [[Diniz-Filho et al. 2003]], [[McGill 2013]] ([[Autocorrelation - Friend or Foe]]).
2. **A count distribution that allows less spread than Poisson.** Conway-Maxwell-Poisson or generalized Poisson in glmmTMB (`family = compois` or `genpois`). For focal richness, a **binomial** out of 6 species, since it can never exceed 6.
3. **Bayesian version of the best model** (Hobbs and Hooten 2015; see [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]]) with brms or Stan; ties to the Nov 19 Stan mixed-models lab ([[Frequentist vs Bayesian]]).
4. **Single-species occupancy model** for [[Dickcissel]] with `unmarked::occu`, after the Nov 3 to 5 lecture ([[Occupancy Model]]).
5. Stretch: **hierarchical GAM**, letting the habitat effect differ by property ([[Hierarchical GAM]], [[Pedersen et al. 2019]]).
6. Stretch: **multi-species occupancy model**, as in [[Berry et al. 2026]] ([[Multi-species Occupancy Model]]). Probably too much for this semester.

**Recommendation:** option 1 combined with option 2 as the main upgrade, then option 3. Do not build any of these until the Report is in. The Final Draft also adds a Discussion and the Dec 1 or 3 presentation ([[Milestones and Deadlines]]); background in [[How the project could grow into Bayesian and occupancy models]].

Log every new decision in [[Decision Log]]; open choices are in [[Open Questions]].

**Part of:** [[MOC 23 - Grassland Bird Richness Project|MOC - Grassland Bird Richness Project]]
