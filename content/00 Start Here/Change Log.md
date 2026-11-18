---
type: home
tags:
  - start-here
  - change-log
aliases:
  - "Changelog"
  - "Version History"
status: growing
---

# Change Log

Every round of changes and checks on this wiki, newest first. Each round ("pass") gets one entry: what changed, which checks ran, and what they found.

**The checks run on every pass** (by `build.py`, and from v1.0 by `emw.py`, both kept outside the vault):
- **Links:** every wiki link points to a real note or figure. Links to planned notes that aren't written yet are counted separately and must reach zero by the final pass.
- **Cards:** every atomic and molecular note has a Flashcards section with a deck tag, every `??` card is closed with `++++`, and no card markers appear outside Flashcards.
- **Style:** no em dashes, and every atomic or molecular note links to at least three others.
- **Structure:** the MOCs, [[Index]] and [[Learning Path]] are regenerated from the plan, so every note sits in a map.

---

## v1.6 (2026-11-18): self-contained atomic notes, first-use links, guide pages brought up to date
**Asked for:** How This Wiki Works still described the old outline, so bring every guide page and every note to the latest format. Make every atomic note self-contained and explained from first principles, with every term used for the first time linked to its own atomic note (and a new note written when none exists).

**Changed**
- **New atomic template (approved Nov 18):** paragraph 1 gives the picture and the idea, paragraph 2 builds it from zero with real numbers and gives the formula last, an optional paragraph 3 covers why, the usual confusion and the source. Then a figure or Mermaid chart, an R block with no heading, Connections (Builds on, Leads to, Part of, Go deeper) and Flashcards. Every technical word gets a link and a few plain words of meaning the first time it appears.
- **First-use links:** about 2,620 links added where a term appears for the first time in a note, each also listed under Connections. Generic words (average, chance, distribution and similar) were kept out so they do not link to the wrong note.
- **Duplicates merged:** 35 pairs left over from the v1.5 import were merged (for example Edge Effect and Edge Effects, Woody Encroachment and Woody Plant Encroachment) and 11 notes renamed. Links to the old names now go to the kept note. 81 aliases that pointed at two notes at once were removed.
- **Old-format notes rewritten:** about 84 atomic notes, mostly the v1.5 imports, rewritten to the new template. 5 notes that compared two ideas became molecular notes. 86 "Check yourself" callouts became flashcards, and 22 molecular notes that had none got flashcards.
- **8 new atomic notes** for terms that had no note: Deviation, Habitat Specialist, Habitat Generalist, Tipping Point, Brood Parasitism, Regime Shift, Spatial Early Warning Signal, Regular Expression.
- **Fixes:** the Population link now points to the population note, not a project note. Frontmatter that broke on quotes inside aliases (16 notes) was repaired. 12 notes in folder 20 got their landscape deck tag. The Howell tract (HO) label was corrected.
- **MOCs:** reordered basic to advanced, in syllabus order, never alphabetical. [[Learning Path]] now covers sections 0 to 23, including the v1.3 to v1.5 material (MOCs 22 to 26).
- **Guide pages rewritten:** [[How This Wiki Works]] (describes the v1.6 note formats), [[Start Here]], [[Index]] (1,256 notes), the three templates in Templates and the style guide.

**Checks**
- Links: 0 broken links. The only hits are R code such as `[["a"]]` inside notes and the examples on this page.
- Aliases: 0 aliases shared by two notes.
- Cards: every atomic and molecular note has Flashcards with a deck tag, and every `??` card is closed.
- Style: 0 em dashes, 0 atomic notes with extra headings, 0 notes in the old section format. Every atomic and molecular note links to at least three others and to its MOC.
- To consider later: 34 atomic titles contain "and", "vs" or a comma (for example Spread and Variability; Patch, Matrix and Corridor). Most name one concept, but some may be worth splitting.

---

## v1.5 (2026-11-17): grassland bird project notes merged in
**Asked for:** add the notes built for my grassland bird richness project (EcoModeling-Vault in ClaudeProject_Setup) to this wiki, and publish them on the web wiki.

**Changed**
- 159 notes copied in from EcoModeling-Vault. 92 of its notes share a name with a note already here, so they were skipped and links to them now go to this wiki's version.
- New folders: `18 Grassland Bird Project` (13 project notes: overview, hypotheses, dataset, study sites, EDA findings, analysis plan, preliminary results, decision log and more), `19 Grassland Bird Ecology` (26), `20 Landscape and Remote Sensing` (13) and `21 Survey Design and Detection` (17).
- The rest went into the matching topic folders: 22 molecular notes, 9 sources, 12 ecology notes in Ecology Vocabulary, 15 R notes, and a few each in Basics, Modeling Foundations, GLMs, Bayesian Inference, Model Selection, Autocorrelation and Mixed Models.
- New maps: [[MOC 23 - Grassland Bird Richness Project]], [[MOC 24 - Grassland Bird Ecology]], [[MOC 25 - Landscape and Remote Sensing]] and [[MOC 26 - Survey Design and Detection]], linked from [[Start Here]]. The project vault's other 11 MOCs overlapped maps already here, so their links now point to this wiki's MOCs, and each of those MOCs gains a "From the grassland bird project" section.
- [[Index]] regenerated (1282 notes).

**Checks**
- Links: 0 broken links (the only `[[...]]` matches left are R list indexing inside code, like `x[[1]]`).
- Every merged note has an H1, at least three links, and at least one note linking to it. Em dashes: 0.
- Not yet matched to this wiki's style: the merged notes use the older "Check yourself" callouts instead of Flashcards sections with deck tags.

## v1.4 (2026-11-17): every course homework mapped and walked through
**Asked for:** "what about all the homeworks?" Make sure the wiki covers everything the homework assignments ask for.

**Read:** all six homework pages in the course website repository (Homework 1 to 5 from the menu, plus Homework 6, which is on the site but not in its menu), and explored every homework dataset in R (rip.dat.02-14.csv, bleach.csv, mlrbird.csv and mlrland.csv, C_vulgare_seedling_dataset.csv, FireWeather.csv) so the walkthroughs quote real numbers.

**New map:** [[MOC 22 - Homework]], each homework question mapped to the notes needed to answer it, in the order the homeworks are set. [[Homework]] now lists six homeworks with datasets and links.

**New molecular notes (9):** one worked-approach note per homework, giving the reasoning and R steps rather than an answer key: [[Homework 1 - Riparian Plant Diversity]], [[Homework 2 - Coral Bleaching]], [[Homework 3 - Woodland Birds and Landscape Scale]], [[Homework 4 - Thistle Seedlings and Enemy Release]], [[Homework 5 - Fire Weather HGAMs]], [[Homework 6 - Penguin Body Mass in brms]]; plus [[How to Approach a Course Homework]], [[Patch vs Landscape Effects]] and [[Two-way ANOVA vs Mixed Model]].

**New atomic notes (20):**
- Statistics and R: [[Inverse Simpson Index]], [[Interaction Plot]], [[One-to-many Join]], [[librarian shelf()|librarian and shelf()]], [[Inverse Prediction]], [[Marginal Effects Plot]], [[Bayesian Logistic Regression]], [[conditional_effects()]], [[Scale of Effect]], [[How Many Levels for a Random Effect|Random Effect with Few Levels]], [[Bounded Count]].
- Ecology from the homework datasets: [[Exclosure]], [[Grazing]], [[Riparian Zone]], [[Coral Bleaching]], [[Temperature Anomaly]], [[Habitat Patch]], [[Invasive Species]], [[Relative Humidity]], [[Prescribed Fire]].

**New figures (2):** an interaction plot (parallel vs diverging lines) and the Homework 2 logistic fit with its link-scale band, showing an open-ended inverse prediction.

**Things the data showed that the walkthroughs flag:** in Homework 1 all 39 rows from 2014 are empty records (zero hits in every species column), so their richness and diversity are missing, not zero; in Homework 2 the linear model's 50% point (SST ≈ 0.76) lies beyond the warmest year in the data; in Homework 4 a Poisson GLMM with plots nested in sites finds the distance effect and the spray × distance interaction that the two-way ANOVA missed; in Homework 5 the wind data contain implausible maxima (148 and 198 mph) and 90 exact zeros, and RH has 137 values of exactly 100%.

**Checks:** 0 unresolved links, 0 style or card problems (1,124 notes). Every new R block was run and its output compared with the numbers in the text; blocks that fit brms models or install packages are marked as not run.

---

## v1.3 (2026-11-17): occupancy guest lecture and the fisher paper
**Asked for:** add the knowledge in the two files just added to Raw Materials: the occupancy guest lecture slides (`OccLecture (1).pptx`, Nov 3, 44 slides) and Happe et al. 2020, *Occupancy patterns in a reintroduced fisher population during reestablishment*.

**Read:** all 44 slides, including the image-only ones (detection-history equations, likelihood, spotted owl example, dynamic and multi-species slides), viewed as rendered pages; the whole Happe et al. paper (abstract, study area, methods, results, Tables 1 to 3, discussion, management implications).

**New atomic notes (32):**
- Occupancy core: [[Occupancy Likelihood]], [[Site Independence Assumption]], [[Unexplained Heterogeneity in Occupancy]], [[Unexplained Heterogeneity in Detection]], [[Stacked Occupancy Design]], [[Colonization Probability]], [[Local Extinction Probability]], [[Multi-species Occupancy Model|Multi-species Occupancy]], [[Marginal Occupancy]], [[Conditional Occupancy]], [[Co-occurrence Probability]].
- Software: [[ubms Package]], [[spOccupancy Package]], [[Program PRESENCE]].
- Field methods: [[Spatially Balanced Sampling]], [[Live Trapping]], [[Coverboard]], [[Track Survey]], [[Acoustic Survey]], [[Autonomous Recording Unit]], [[Breeding Amphibian Survey]], [[Camera Trap]], [[Hair Snare]], [[Environmental DNA]].
- Ecology: [[Metapopulation]], [[Translocation]], [[Reintroduction]], [[Home Range]], [[Edge Effects|Edge Effect]], [[Species Interaction]].
- Tests used in the paper: [[Chi-square Test]], [[Kruskal-Wallis Test]].

**New molecular notes (6):** [[Assumptions of Occupancy Models]], [[Single-season vs Multi-season Occupancy]], [[Marginal vs Conditional Occupancy]], [[Choosing a Survey Method for Occupancy]], [[Choosing Occupancy Software]], and [[Fisher Occupancy Case Study]], a step-by-step walk through the paper from design to conclusion with every number interpreted.

**New source notes (2):** [[Occupancy Guest Lecture]], [[Happe et al. 2020]]. The [[Course Schedule]] row for Nov 3 and 5 now links both.

**Updated notes:** [[Occupancy]] (what occupancy is for), [[Detection History]] (the lecture's 30-site table), [[Naive Occupancy]] (the Where's Waldo example and the fishers' naive vs estimated values), [[Closure Assumption]], [[Single-season Occupancy]] (the spotted owl example), [[Multi-season Occupancy]] (time structures; "colonization" and "local extinction" are now their own notes, so those aliases moved), [[Site Covariates]], [[Observation Covariates]], [[unmarked Package]] (the other tools) and [[Occupancy Workflow in R]] (detection modelled with a global occupancy model; QAIC when ĉ > 1). All new notes sit in [[MOC 16 - Population Estimation|MOC - Population Estimation]] in teaching order: field methods at the end of section 1, the new occupancy concepts beside the notes they build on in section 2.

**Figures (3 new):** Fisher naive vs estimated occupancy (from the paper's Table 1 and results), Marginal vs conditional occupancy, Dynamic occupancy trajectory. Two new Mermaid diagrams.

**Checks:** every new R block run and its numbers quoted from the real output (for example, unmodelled detection differences give ψ̂ = 0.44 against a true 0.60; paired sites make reported SEs 28% too small; the paper's top QAIC recomputes as 213.54). ubms, spOccupancy and unmarked are not installed here, so those blocks are marked `norun`. Links: 0 unresolved. Mermaid: both new diagrams render. 1,094 notes, 1,906 cards, 767 R blocks.

**Worth knowing:** the slide panel titled "Conditional" plots P(co-occurrence), a joint probability; the notes explain the difference. Values read off the multi-species slide are approximate. Happe et al. is dated 2020 (volume 84) although the file name says 2019.

---

## v1.2 (2026-11-17): every atomic note rewritten as plain paragraphs
**Asked for:** check every atomic note line by line for factual errors, unclear explanations, broken examples and whether it holds one concept; write each as 2 or 3 clear, self-sufficient paragraphs with no subsection headings; add graphs, images and Mermaid diagrams where useful; keep the closing Connections section that links all related notes.

**What changed:**
- All 843 atomic notes now open with 2 or 3 paragraphs in the Feynman style: an everyday picture, a definition of every term, the mechanics, a small worked example, the course sources, and the common confusion. The old "Start from zero", "In the course" and "Common confusions" headings are gone; their content is folded into the paragraphs.
- Every note's R block was re-run, and the paragraphs now quote its real output (for example, the mixed-model notes give the `sleepstudy` estimates and the Stan notes the numbers from compiled models).
- Figures and diagrams are kept beside the paragraphs, with a sentence saying what to look at. Diagrams that sat inside a removed numbered list, such as the one in [[Top-down Model Selection Protocol]], were moved into the body so they are not lost.
- Connections and Flashcards are unchanged. Any link that only appeared in a removed section was kept under "See also" in Connections, so no related note was lost.
- Molecular notes and maps were not changed, and the maps keep their syllabus order.

**Factual fixes found during the check:**
- Sum of Squares: the worked example used fitted values that were not the least-squares line, so "total = model + residual" did not actually add up (17 + 1 is not 20). Replaced with a real least-squares example (16.14 = 15.84 + 0.30, R² = 0.98).
- Uncertainty: the R comment said the 4-plot interval sits "around a similar centre"; it is actually centred near 0, far from the true 12. Comment and explanation corrected.
- Spearman Rank Correlation: Pearson r for the example is 0.795, now given as 0.80 (was 0.79).
- Treatment and Control Group: Connections listed 'molecular note [[Treatment|Treatment and Control]]', which is only an alias of Treatment itself (a self-link). Removed.
- Sensitivity Analysis: figure caption said λ = 0.97 gives 41 animals after 30 years; it is 40 (0.97³⁰ × 100 = 40.1). The old R comment called the 1% finite-difference ratio (about 35) "elasticity"; the note now states it as "a 1% rise in λ gives about 35% more animals".
- Adaptive Resource Management: text said the model weights were 30/70 while the R output gives 21/79; now 21/79.
- Mayfield Nest Survival: Powell and Gale's worked example gives SE 0.07 for the daily survival rate; the formula gives 0.016. The note explains the slip.
- Smoother: the R example uses LOESS's default span, which is too wide for the data; the note now says so instead of implying the smoothed values are close to the truth.

**Checks:** 0 broken links; every R block in the rewritten notes runs (Stan models compiled and sampled); all 117 Mermaid diagrams render with Mermaid 11.4; no em dashes.

---

## v1.1.1 (2026-11-17): diagrams fixed
**Reported:** some Mermaid diagrams showed as plain text ("mermaid: flowchart TD ...") instead of a picture.

**Cause and fix:** in 14 notes the diagram was written under a "mermaid:" label instead of inside a mermaid code block, so neither Obsidian nor the website knew it was a diagram. All 14 are now proper code blocks. One more diagram, in [[group_by()]], had "|" characters inside a box label, which Mermaid reads as syntax; it now uses commas.

**Checks:** all 117 diagrams in the wiki were rendered with Mermaid 11.4 (the version the website uses) and none fail.

---

## v1.1 (2026-11-17): everything in syllabus order
**Asked for:** sort the MOCs from basic to advanced, following the syllabus, instead of alphabetically. Keep notes A to Z inside each folder, but number the folders in syllabus order.

**What changed:**
- The 22 maps are now numbered in syllabus order, from [[MOC 00 - Ecological Modeling Course]] and [[MOC 01 - Basics from Zero]] through [[MOC 18 - Scientific Writing]], then [[MOC 19 - Ecology Vocabulary]], [[MOC 20 - Why We Do It This Way]] and [[MOC 21 - Course Readings]]. The number is in the file name, so Obsidian and the website both list them in that order. Each map keeps its old name as an alias, so searching for "MOC - Mixed Models" still finds it.
- Eight maps (R, Data Exploration, Probability, Linear Models, Bayesian Inference, Model Selection, Autocorrelation, Mixed Models) had two sets of numbered sections, an older short one and a newer full one, so some notes were listed twice and section numbers repeated. Each map now has one sequence of sections, basic to advanced, and each note appears once. Notes only in the older sections moved into the matching new section.
- The topic folders are numbered in syllabus order, from 03 Basics from Zero to 17 Ecology Vocabulary. Notes inside a folder stay alphabetical, so a folder works like a glossary; the maps and [[Learning Path]] give the reading order. Links are by note title, so none changed.
- The [[Index]] lists folders in the same order.

**Checks:** 1,054 notes, 0 unresolved links, the website builds.

---

## v1.0 (2026-11-17): the whole course
**Asked for:** build the whole wiki, every unit, every atomic note one concept each, molecular notes for the questions that combine them, figures, diagrams and R code where they help; then audit every note for correctness, cut redundancy, and loosen the outline where a rigid one hurt.

**Changed**
- **Every syllabus session is covered,** Aug 18 to Nov 24. New maps: [[MOC 07 - Likelihood and Estimation|MOC - Likelihood and Estimation]], [[MOC 08 - Generalized Linear Models|MOC - Generalized Linear Models]], [[MOC 11 - Bayesian Model Selection|MOC - Bayesian Model Selection]], [[MOC 12 - Reproducible Coding and Figures|MOC - Reproducible Coding and Figures]], [[MOC 15 - GAMs|MOC - GAMs]], [[MOC 16 - Population Estimation|MOC - Population Estimation]] (occupancy, mark-recapture, distance sampling, survival), [[MOC 17 - Stan|MOC - Stan]], [[MOC 18 - Scientific Writing|MOC - Scientific Writing]] and [[MOC 19 - Ecology Vocabulary|MOC - Ecology Vocabulary]] (the ecology words the lab datasets assume).
- **843 atomic notes, 132 molecular notes, 46 source notes, 22 maps.** Every molecular note is titled as the question it answers, and together they cover the comparisons and "why" questions the atomics raise (for example [[Which assumption violation leads to which model]], [[Transform the data or change the model]], [[Wald Test vs Likelihood Ratio Test]], [[Naive vs Estimated Occupancy]], [[Centered vs Non-centered Parameterization]]).
- **A flexible outline.** Notes now keep only the sections that teach something for that idea, so short ideas stay short. Molecular notes can carry their own R code.
- **Source notes for every reading,** including Powell and Gale Ch3 and Ch4, Hobbs and Hooten Ch3 to Ch9, Zuur et al. 2009 Appendix A and Ch2 to Ch13, the 2009 to 2022 papers and the GAM course. Citations were checked against the PDFs.
- **[[Problem-Solving Guide]]** for homework and the project: where to look when stuck at each step, plus a decision tree for choosing a model.
- [[Start Here]], [[Course Schedule]], [[Homework]] and [[Course Website]] updated: no session is "not yet in scope" any more.

**Audit and redundancy**
- Six pairs of notes taught the same concept and were merged, keeping the old titles as aliases so every link still works: LOESS into [[LOESS Smoother]], Dates and Julian Day into [[Dates in R]], the autocorrelation version into [[Effective Sample Size]], Borrowing Strength into [[Partial Pooling]], Multi-panel Plots into [[Facets]], and a duplicate Moments note into [[Moments of a Distribution]]. Three planned comparison notes became aliases of existing notes instead of new ones (Balanced vs Unbalanced Data, Homogeneity vs Heterogeneity of Variance, Discrete vs Continuous Random Variable).
- Eight atomic titles that read as two concepts were renamed to the one concept they teach, for example [[Canopy Cover]], [[Tag Loss]], [[Availability for Detection]] and [[Fire History Variables]].
- 90 aliases that pointed at two notes at once were given to one note only, so a link like "logit" or "pp_check" always lands in the same place.
- Every note's one-line definition was re-read for correctness. Fixes: [[Asymptote]] (curves can cross one), [[Diameter at Breast Height]] (1.3 m internationally, 4.5 ft in the US), [[Step Size and Maximum Tree Depth]] (tree depth is a fixed limit, not tuned), [[Statistical vs Biological Significance]] (worded to match what a p-value says), and the brms default priors in [[Default Priors in brms]] (checked with `get_prior()`).
- Every number quoted in a note's text was checked against a real R run when the note was written; several first drafts were wrong and were corrected (for example the Wald and likelihood ratio p-values, 0.088 and 0.009, and the Cook's distance of 5.7 in [[Outlier, Leverage and Influence]]).
- One reading error carried over from a book was flagged in its note: Powell and Gale's standard error for the Mayfield example ([[Mayfield Nest Survival]]).

**Checks**
- Links: 0 unresolved. Em dashes: 0. Cards: 1,823, all closed, none outside Flashcards sections. Every atomic and molecular note links to at least three others.
- R: all 716 runnable R blocks run without errors (R 4.3, with rstan, brms, mgcv, lme4, glmmTMB, nlme, loo and survival). 34 notes carry blocks marked `# norun`: they need packages that could not be installed in the build container (unmarked, RMark, DHARMa, MuMIn, AICcmodavg, gratia, cmdstanr) or take many minutes to sample. Their code follows each package's documentation, and most such notes also show a base-R version that does run.
- The course website could not be re-read on 2026-11-17 (blocked by the network), so the GAM, occupancy and Stan notes rest on the readings and the package documentation.

**Totals:** 1,054 notes (843 atomic, 132 molecular, 46 source, 22 maps, 5 course, 6 home), 1,823 cards, 120 figures, 743 R blocks.

## v0.5 (2026-11-16): one concept per note, strictly
**Asked for:** "one concept per note is a strict thing. Keep the comparisons as molecular notes."

**Changed**
- New rule in the style guide (kept outside the vault): an atomic note holds exactly one concept. If its title needs "and", "vs" or a comma, it is two notes. Comparisons become molecular notes that name both sides and link the atomics. [[How This Wiki Works]] says so too.
- 13 two-or-three-concept notes split into 39 new single-concept atomic notes, each written in the full Feynman layout with its own analogy, worked numbers, R code and cards:
  - Basics from Zero (19): [[Variable]], [[Observation]], [[Population]], [[Sample]], [[Parameter]], [[Estimate]], [[Estimator]], [[Continuous Data]], [[Discrete Data]], [[Categorical Variable]], [[Binary Variable]], [[Exponent]], [[Logarithm]], [[Natural Logarithm]], [[Exponential Function]], [[Factorial]], [[Binomial Coefficient]], [[Product Notation]] (taken out of [[Summation Notation]]) and [[Covariance]] (the step [[Correlation]] was hiding).
  - Modeling Foundations (20): [[Theoretical Model]], [[Empirical Model]], [[Exploratory Modeling]], [[Inferential Modeling]], [[Predictive Modeling]], [[Induction]], [[Deduction]], [[Biological Population]], [[Statistical Population]], [[Deterministic Component]], [[Stochastic Component]], [[Process Variation]], [[Observation Error]], [[Sampling Variation]], [[Bias]], [[Precision]], [[Accuracy]], [[Overfitting]], [[Underfitting]] and [[Bias-Variance Trade-off]] (the last three taken out of [[Parsimony]], which keeps only the principle).
- The 13 old notes kept their titles, so every existing link still works, but are now comparison molecular notes in 02 Molecular Notes: [[Variable and Observation]], [[Population and Sample]], [[Parameter vs Estimate]], [[Continuous vs Discrete Data]], [[Logarithms and Exponents]], [[Factorials and Binomial Coefficient]], [[Theoretical vs Empirical Modeling]], [[Exploration, Inference and Prediction]], [[Induction vs Deduction]], [[Biological vs Statistical Population]], [[Bias and Precision]], [[Deterministic and Stochastic Components]] and [[Process vs Observation Error]]. Each puts its atomics side by side with one shared analogy and one worked example, and is listed in [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]].
- [[MOC 01 - Basics from Zero|MOC - Basics from Zero]], [[MOC 02 - Modeling Foundations|MOC - Modeling Foundations]], [[Index]] and [[Learning Path]] regenerated with the new atomics in reading order. Aliases that pointed two names at one note were removed, so no alias is shared by two notes.
- The term inventory (kept outside the vault) now marks 7 more terms as written, including Estimator, Covariance, Product Notation, Overfitting, Underfitting and the bias-variance trade-off.

**Checks**
- R: all 61 R code blocks run without errors (R 4.3). New numbers checked in R, for example the estimator simulation (alive/n averages 0.798, alive/(n+1) 0.726), new-data error by curve degree (1.17 for a line rising to 6.23 for degree 10), MSE of 0.016 vs 0.011 in [[Accuracy]], and the 27% to 55% interval in [[Induction]].
- Cards: 168, all closed, deck tags on every note, none outside Flashcards sections. Em dashes: 0.
- Links: no links outside the plan (two to unplanned notes, Response Variable and Explanatory Variable, were replaced with plain definitions). Links to notes not yet written: 426, up from 343 because the new notes link more of the planned notes.

**Not yet done:** the vault on the Mac still holds the v0.2 copy. Nothing from v0.3 to v0.5 has been copied there.

**Totals:** 105 notes (61 atomic, 15 molecular, 6 source), 168 cards, 19 figures.

## v0.4 (2026-11-16): every existing note rewritten Feynman-style
**Asked for:** explain every concept the way Richard Feynman teaches, for a reader who knows nothing about ecological modeling, statistics or advanced maths. Rewrite the 35 existing atomic notes and update the molecular notes to match.

**Changed**
- New teaching rules in the style guide (kept outside the vault): everyday picture first, plain words with every term defined, real numbers before formulas, always the why, named confusions, and an explain-it-back test. Split any idea that can't be explained simply.
- New atomic note layout: *The everyday picture* and *Words you'll need* added; *A tiny example* now comes before *Start from zero* so the formula reads as a summary of something already worked by hand; *Why it exists* became *Why it is this way*; *Explain it back* added before Connections. [[How This Wiki Works]] describes the new layout.
- All 15 notes in Basics from Zero and all 20 in Modeling Foundations rewritten in that layout. Each gained an analogy (a fishing trip for [[Mean]], bus routes for [[Variance]], a soup pot for [[Population and Sample]], darts for [[Bias and Precision]], two exam students for [[Parsimony]], and so on), a glossary, a worked example and an explain-it-back test. Frontmatter, figures, R code, citations and wikilinks were kept; several R blocks gained a line or two that shows the idea directly (for example, simulating 5000 repeat studies in [[Standard Error]]).
- Both molecular notes, [[Why model at all]] and [[Why every statistical model has a deterministic and a stochastic part]], gained an everyday picture, a worked example in numbers and an explain-it-back test.
- 6 new flashcards (one per note where the analogy carried a new "why").

**Checks**
- R: all 35 R code blocks run without errors (R 4.3 in the container). Every new numeric claim was checked in R, including the Parsimony figures (R² 0.57 vs 0.98, new-data error 1.17 vs 6.23, AICc 48.6 vs 171.1) and the confidence interval of 27% to 55% in [[Induction vs Deduction]].
- Cards: 103, all closed, deck tags on every note, none outside Flashcards sections. Em dashes: 0.
- Links: no links outside the plan. Links to notes not yet written: 343 (up from 311, because the new glossaries link terms such as [[Probability Distribution]] and [[Collinearity]] to their planned notes).

**Not yet done:** the vault on the Mac still holds the v0.2 copy. Nothing from v0.3 or v0.4 has been copied there.

**Totals:** 66 notes (35 atomic, 2 molecular, 6 source), 103 cards, 19 figures.

## v0.3 (2026-11-16): course website added as a source
**Asked for:** use the course website (https://livinglandscapes.github.io/Course_EcologicalModeling/) as an extra raw source.

**Changed**
- New source note [[Course Website]]: how the site is organised, the lab-by-lab ideas each unit will use, the in-scope datasets, and three readings the site lists that aren't in my folder (Vehtari et al. 2017, Guélat and Kéry 2018, Oberpriller et al. 2022).
- The plan (topic map, kept outside the vault) gained a "Website additions" block for Units 1 to 13 and a lab, script and dataset index. About 50 new atomic notes are planned from the labs, such as complete vs no vs partial pooling, complete separation, truncated distributions, spline correlograms, ACF plots, elpd and `loo_compare()`, `bootMer()`, R Markdown, Git and the `librarian` package rule. Two new molecular notes are planned too.
- [[MOC 21 - Course Readings|MOC - Course Readings]], [[Index]] and [[Learning Path]] regenerated so the new source is listed. No existing atomic or molecular note was edited.

**Checks**
- Links: no links outside the plan. Links to notes not yet written: 311.
- Cards: 97 in atomic and molecular notes, plus 3 in the new source note. Em dashes: 0.

**Totals:** 66 notes (35 atomic, 2 molecular, 6 source).

## v0.2 (2026-10-22): first batch, Basics from Zero and Modeling Foundations
**Asked for:** the first unit of notes, to review before the rest are written.

**Changed**
- 15 atomic notes in Basics from Zero, from [[Variable and Observation]] to [[Correlation]], including [[Factorials and Binomial Coefficient]] (added to the plan because Powell and Gale build their estimators on it).
- 20 atomic notes in Modeling Foundations for the Aug 18 session, from [[Model]] to [[Process vs Observation Error]]. Four were added to the plan while reading: [[Real World and Model World]], [[Modeling Process]], [[Sampling Unit]] and [[Bias and Precision]].
- 2 molecular notes: [[Why model at all]] and [[Why every statistical model has a deterministic and a stochastic part]].
- 5 source notes: [[Powell and Gale 2015 Ch1]], [[Powell and Gale 2015 Ch2]], [[Tredennick et al. 2021]] (from the web, flagged), [[Hobbs and Hooten 2015 Ch1]] and [[Hobbs and Hooten 2015 Ch2]].
- 19 figures (all simulated or redrawn from the readings) and 16 Mermaid flowcharts.
- MOCs, [[Index]] and [[Learning Path]] regenerated.

**Checks**
- R: all 35 R code blocks run without errors in R 4.3. One claim was wrong: in [[Parsimony]], plain AIC actually *prefers* the overfitted polynomial with only 15 points. The example now shows this and uses AICc and new-data error, which both pick the simple model.
- Cards: 97, all closed, deck tags on every note, none outside Flashcards sections. Em dashes: 0.
- Links: 270 links point to notes planned for later units. Links to anything outside the plan: 0.

**Totals:** 65 notes (35 atomic, 2 molecular, 5 source), 97 cards, 19 figures.

## v0.1 (2026-10-22): skeleton
**Asked for:** a first-principles wiki of the Ecological Modeling syllabus through Thu Oct 22 (Mixed models lab: Bayesian), in the format of my AGST vault, kept separate from the older notes in EcoModeling-Vault.

**Changed**
- New folder `Ecological Modeling Wiki/` inside EcoModeling-Vault. The 268 older notes are untouched.
- Templates copied from the AGST vault. Atomic notes gain an *In R* section, and *In class* becomes *In the course*.
- Home notes: [[Start Here]], [[How This Wiki Works]], [[Open Questions]], this log, and generated [[Index]] and [[Learning Path]].
- Thirteen MOCs generated from the plan, listing about 190 planned atomic notes, 17 molecular notes and 25 source notes.
- Course notes: [[Course Overview]], [[Course Schedule]], [[Homework]] and [[Final Project]], all from the syllabus PDF.
