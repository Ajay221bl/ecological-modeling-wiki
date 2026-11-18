---
type: project
tags:
  - project
  - grassland-bird-richness
  - deadlines
aliases:
  - "Deadlines"
status: seedling
---

# Milestones and Deadlines

> [!summary] In plain words
> The final project is worth half the course grade, split into a proposal (submitted Sep 10, revised Oct 12), a Project Report due **Oct 13** (drafted; final steps left), a Final Draft due Nov 19, and a short talk in early December. The Report needs a Word document (no Discussion yet) plus a zipped folder of working R code. Late work loses half its points.

From the BIOL580V Fall 2026 syllabus. Final project = 50 of 100 course points. Today is **Oct 13**: the Report is due **today**.

## Final project milestones
| Date | Milestone | Points | Status |
|---|---|---|---|
| Thu Sep 10 | Project Proposal (500-1000 words; Intro, Hypotheses, Methods, Citations; Word docx) | 5 | Submitted; feedback received ([[Proposal Feedback from Dr Roberts]]); revised Oct 12 as the final proposal (`Project_Proposal_Revised.docx`) with habitat covariates ([[Hypotheses]], [[Decision Log]]) |
| **Tue Oct 13** | **Project Report** (7 written + 8 code) | **15** | Code done and run in RStudio (Oct 13); results in [[Preliminary Results]]. `Bedi_ProjectReport_EcoModeling.docx` drafted (2,787 words). Left: approve, clean run, zip, email (steps 12 to 15, [[Next Steps]]). *(Oct 12 status was: written part not started, scripts not updated.)* |
| Thu Nov 19 | Final Draft: written manuscript + revised code | 30 total (written 15, code 10, presentation 5) | Not started; model options and recommendation in [[Next Steps]] |
| Tue Dec 1 or Thu Dec 3 | Project presentation (5-7 min + 2 min questions) | 5 (part of the 30) | Not started |

## Project Report specs (due Oct 13)
- 1,000 to 3,000 words including citations.
- **Written part (7 pts), Word docx:** Introduction (1-2 paragraphs), Hypotheses, Methods, Results, Citations. Revised intro/hypotheses/methods plus **preliminary** results (first results, not final). No Discussion.
- **Code part (8 pts), zipped folder:** Data folder, Results and/or Figures folders, .Rproj file (the RStudio project file that tells R "this folder is home"), README (a plain-text guide to the folder and data), R scripts (e.g. wrangling, analysis). Dr. Roberts "will deduct up to 2 points for code errors" ([[Why a reproducible project structure matters]], [[RProject]], [[README|README Data Dictionary]]). "Reproducible" means someone else can run the folder and get the same results ([[Reproducibility]]).

## Final Draft specs (due Nov 19)
- 3,000 to 9,000 words including citations, Word docx: Introduction (with Hypotheses), Methods, Results, Discussion, Citations.
- Zipped code folder with the same contents as the Report; up to 2 points off for code errors. The Report scripts carry over and get extended.
- Presentation: 5-7 minutes speaking + 2 minutes questions, mostly Methods and Results, with slides; points off if too short or too long.

## Course sessions that feed the project
| Date | Session | Why it matters |
|---|---|---|
| Oct 13, Oct 15 | Mixed models: Bayesian (lecture, lab) | Bayesian version of my GLMM ([[How the project could grow into Bayesian and occupancy models]]) |
| Oct 22 | GAMs; Homework #4 (mixed models) due | [[Generalized Additive Model]] (models that fit smooth curves instead of straight lines) |
| **Nov 3, Nov 5** | **Guest lecture: occupancy modeling (lecture, lab)**; Homework #5 (GAMs) due Nov 3 | Possible Dickcissel occupancy model, which estimates where a species lives while correcting for missed detections ([[Occupancy Model]]) |
| Nov 10 | Hierarchical GAMs | [[Hierarchical GAM]] |
| Nov 12 | Project workday | |
| Nov 17, Nov 19 | Stan labs: simple and mixed models | Bayesian fitting ([[MCMC]]); Stan is software for Bayesian models |
| Nov 24 | Writing results (Cormac McCarthy's advice) | Writing the Final Draft Results ([[Savage and Yeh 2019]]) |

No class Oct 20 (Fall Break) or Nov 26 (Thanksgiving).

## How to submit the Report
Email cr065@uark.edu with "Class: Ecological Modeling" in the subject, attaching the .docx and the zip of the R project. Keep the .docx outside the R project folder so it does not end up in the zip ([[Decision Log]]).

## Rules to remember
- **Late work loses 50%** of its points.
- **Emails** to Dr. Roberts must include **"Class: Ecological Modeling"** in the subject line.
- Analyses must run start to finish within 1 hour (proposal spec).

**Part of:** [[MOC 23 - Grassland Bird Richness Project|MOC - Grassland Bird Richness Project]]
