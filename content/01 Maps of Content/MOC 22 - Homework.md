---
type: moc
tags:
  - moc
  - course
  - homework
aliases:
  - "MOC - Homework"
  - "Homework MOC"
  - "Homework map"
status: seedling
---

# MOC 22 - Homework

Every course homework, in the order they are set, with the notes you need for each question. Each homework has a worked-approach note that walks through the reasoning and the R steps; the lists under it are the notes to read first. Start with [[How to Approach a Course Homework]], which is the same checklist for all six. Homeworks 1 to 5 are on the syllabus ([[Homework]]); Homework 6 is on the course website but not in its menu.

## Every homework
- [[How to Approach a Course Homework]]: the arc every answer follows, and what the grader rewards.
- [[librarian shelf()]]: `shelf()` from the librarian package installs any missing packages and loads them all in one line.
- [[Reproducibility]], [[RProject]], [[R Markdown]]: a script that runs on the grader's computer.
- [[Data Exploration Protocol]], [[Why explore data before modeling]]: the first half of every answer.
- [[Why the response type decides the distribution]]: the choice behind every model.
- [[How to write up a modeling analysis]]: Homeworks 4 and 6 ask for a methods, results and conclusions write-up.

## Homework 1. Data wrangling and exploration (riparian plants, due Tue Sep 1)
Walkthrough: [[Homework 1 - Riparian Plant Diversity]]
- Ecology: [[Riparian Zone]], [[Grazing]], [[Exclosure]]
- Q1, split the site code: [[Strings in R]], [[mutate()]], [[separate_wider_delim()]]
- Q2, richness and diversity: [[Species Richness]], [[Diversity Index]], [[Inverse Simpson Index]]
- Q3, outliers: [[Boxplot]], [[Histogram]], [[Cleveland Dot Plot]], [[Outlier]]
- Q4, balance: [[Balanced Data]]
- Q5, relationships: [[Scatterplot]], [[Boxplot]]
- Q6, collinearity: [[Collinearity]], [[Variance Inflation Factor]]
- Q7, interaction: [[Interaction Term]], [[Interaction Plot]], [[Additive vs Interaction Model]]

## Homework 2. Your first models (coral bleaching, due Tue Sep 8)
Walkthrough: [[Homework 2 - Coral Bleaching]]
- Ecology: [[Coral Bleaching]], [[Temperature Anomaly]]
- Q1, the two models: [[Linear Regression]], [[Logistic Regression]], [[Why GLMs need a link function]], [[Linear Model vs GLM]]
- Q2, diagnostics: [[plot() Diagnostics for lm]], [[Residuals vs Fitted Plot]], [[Which residuals to use for a GLM]], [[Randomized Quantile Residuals]]
- Q3, summaries: [[How to interpret a logistic regression coefficient]], [[Probability, Odds and Log Odds]]
- Q4, back-transforming: [[Log Transformation]], [[Back-transformation]], [[Transform the data or change the model]]
- Q5 and Q6, the 50% points: [[Inverse Prediction]], [[predict()]], [[Prediction Interval]], [[Prediction vs Confidence Interval]], [[Extrapolation]]
- Q7, the figure: [[Predictions on Link vs Response Scale]], [[Marginal Effects Plot]], [[Plotting Model Predictions with Ribbons]]

## Homework 3. Model selection (woodland birds, due Thu Sep 24)
Walkthrough: [[Homework 3 - Woodland Birds and Landscape Scale]]
- Ecology: [[Habitat Patch]], [[Landscape Metrics]], [[Spatial Scale]], [[Edge Effects|Edge Effect]]
- Before the models: [[One-to-many Join]], [[Collinearity]], [[Pairplot]], [[Centering, Scaling and Standardizing]], [[Scale of Effect]]
- Q1, six hypotheses: [[Candidate Model Set]], [[Patch vs Landscape Effects]], [[Why build the candidate model set before seeing the data]]
- Q2, Bayesian binomial GLMs: [[Bayesian Logistic Regression]], [[brms]], [[Weakly Informative Prior]], [[Convergence]], [[R-hat]], [[Trace Plot]], [[How to check an MCMC fit]]
- Q3, ranking: [[WAIC]], [[Leave-one-out Cross-validation]], [[AIC, WAIC and LOO]], [[Model Ranking Tables]]
- Q4, marginal effects: [[Marginal Effects Plot]], [[conditional_effects()]], [[Credible Interval]], [[Multi-panel Figures]]
- Q5, interpretation: [[Model Selection Uncertainty]], [[Statistical vs Biological Significance]]

## Homework 4. Mixed models (thistle seedlings, due Thu Oct 29)
Walkthrough: [[Homework 4 - Thistle Seedlings and Enemy Release]]
- Ecology: [[Invasive Species]], [[Enemy Release Hypothesis]]
- The design: [[Nested Experimental Design]], [[Pseudoreplication]], [[Blocking]], [[Two-way ANOVA]], [[Two-way ANOVA vs Mixed Model]]
- The response: [[Count Data]], [[Bounded Count]], [[Binomial vs Poisson]], [[Poisson vs Negative Binomial]], [[Overdispersion]]
- The random effects: [[Random Intercept]], [[Nested Random Effects]], [[How Many Levels for a Random Effect|Random Effect with Few Levels]], [[Singular Fit]], [[Fixed vs Random Effects]]
- Fitting the Bayesian way: [[GLMM|Generalized Linear Mixed Model]], [[Bayesian Mixed Model Workflow in R]], [[How to choose a prior]]
- Diagnostics: [[DHARMa Simulated Residuals]], [[Zero Inflation]], [[Posterior Predictive Check]]
- The write-up: [[Writing Methods Sections]], [[Writing Results Sections]], [[What to Report for a Model]]

## Homework 5. HGAMs (fire weather, due Tue Nov 24)
Walkthrough: [[Homework 5 - Fire Weather HGAMs]]
- Ecology: [[Prescribed Fire]], [[Relative Humidity]], [[Woody Encroachment]]
- Distributions: [[Beta Regression]], [[Gamma Distribution]], [[Tweedie Distribution]]
- The hierarchy: [[Hierarchical GAM]], [[Global Smoother]], [[Factor-smooth Interaction]], [[Choosing an HGAM Model Type]], [[HGAM vs GLMM with Random Slopes]]
- Smooths over time and space: [[Cyclic Spline]], [[Tensor Product Smooth]], [[Spatial Smooths]]
- Checking: [[Basis Dimension and gam.check()]], [[Concurvity]], [[Temporal Autocorrelation]]
- The recipe: [[GAM Workflow in R]], [[Pedersen et al. 2019]]

## Homework 6. Bayesian models (Palmer penguins, website only)
Walkthrough: [[Homework 6 - Penguin Body Mass in brms]]
- Models and priors: [[brms]], [[Bayesian Linear Regression in R]], [[How to choose a prior]], [[Weakly Informative Prior]], [[Prior Predictive Check]]
- Hierarchy: [[Random Intercept]], [[Random Slope]], [[How Many Levels for a Random Effect|Random Effect with Few Levels]]
- Selection: [[AIC, WAIC and LOO]], [[Leave-one-out Cross-validation]]
- Checking: [[R-hat]], [[Trace Plot]], [[Posterior Predictive Check]], [[How to check an MCMC fit]]
- Predictions: [[conditional_effects()]], [[Conditional vs Marginal Predictions]], [[Posterior Predictive Distribution]]
- The write-up: [[How to write up a modeling analysis]]

## Related MOCs
[[MOC 00 - Ecological Modeling Course|MOC - Ecological Modeling Course]] · [[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]] · [[Problem-Solving Guide]] · [[Start Here]]
