---
type: home
tags:
  - start-here
  - learning-path
aliases: []
status: seedling
---

# Learning Path

The order to read the wiki in, following the syllabus. Each step lists its map, then its notes in reading order. Planned notes are not written yet.

## 0. [[MOC - Basics from Zero]]
The maths and vocabulary every other note leans on, explained from nothing. If a symbol in another note looks alien, it is explained here.

**1. Data words:** [[Variable]] → [[Observation]] → [[Population]] → [[Sample]] → [[Parameter]] → [[Estimate]] → [[Estimator]] → [[Continuous Data]] → [[Discrete Data]] → [[Categorical Variable]] → [[Binary Variable]]

**2. Symbols and arithmetic:** [[Greek Letters and Notation]] → [[Summation Notation]] → [[Product Notation]] → [[Exponent]] → [[Logarithm]] → [[Natural Logarithm]] → [[Exponential Function]] → [[Scientific Notation in R Output]] → [[Functions in Maths]] → [[Factorial]] → [[Binomial Coefficient]]

**3. Summaries of data:** [[Mean]] → [[Variance]] → [[Standard Deviation]] → [[Standard Error]] → [[Covariance]] → [[Correlation]]

**Then the why:** [[Variable and Observation]] · [[Population and Sample]] · [[Parameter vs Estimate]] · [[Continuous vs Discrete Data]] · [[Logarithms and Exponents]] · [[Factorials and Binomial Coefficient]]

## 1. [[MOC - Modeling Foundations]]
Unit 1 (Tue Aug 18): what a model is, the kinds of models ecologists build, and why we model at all. Readings: Powell and Gale 2015 Ch1 and Ch2, Tredennick et al. 2021.

**1. What a model is:** [[Model]] → [[Real World and Model World]] → [[Conceptual Model]] → [[Analytical Model]] → [[Statistical Model]] → [[Simulation Model]] → [[Theoretical Model]] → [[Empirical Model]]

**2. Why we model:** [[Exploratory Modeling]] → [[Inferential Modeling]] → [[Predictive Modeling]] → [[Modeling Process]] → [[Induction]] → [[Deduction]] → [[Hypothesis]] → [[Parsimony]] → [[Overfitting]] → [[Underfitting]] → [[Bias-Variance Trade-off]] → [[Sensitivity Analysis]]

**3. Where data come from:** [[Biological Population]] → [[Statistical Population]] → [[Sampling Unit]] → [[Representative Sample]] → [[Sampling Variation]] → [[Bias]] → [[Precision]] → [[Accuracy]] → [[Binomial Sampling]] → [[Deterministic Component]] → [[Stochastic Component]] → [[Process Variation]] → [[Observation Error]]

**Then the why:** [[Theoretical vs Empirical Modeling]] · [[Exploration, Inference and Prediction]] · [[Induction vs Deduction]] · [[Biological vs Statistical Population]] · [[Bias and Precision]] · [[Deterministic and Stochastic Components]] · [[Process vs Observation Error]] · [[Why model at all]] · [[Why every statistical model has a deterministic and a stochastic part]]

## 2. [[MOC - R for Ecological Modeling]]
Units 2 and 8 (Aug 20, Sep 24, Sep 29): the R needed to wrangle data, fit models and make figures, and to keep the whole analysis reproducible.

**1. R basics:** R Objects and Vectors → Data Frames and Tibbles → Writing Functions → For Loops → Vectorization → map() and apply()

**2. Tidyverse wrangling:** Pipe Operator → filter() and select() → mutate() → group_by() and summarise() → Tidy Data → pivot_longer() and pivot_wider() → Joins

**3. Reproducibility:** RProject → here() → Project Folder Structure → README → Splitting Scripts → Reproducibility

**4. Figures:** ggplot2 Grammar of Graphics → Plotting Model Predictions → ggsave()

**Then the why:** Why a reproducible project structure saves you

## 3. [[MOC - Data Exploration]]
Unit 3 (Aug 25, 27): look before you model. Zuur et al. 2010's protocol for catching the problems that quietly ruin models. Readings: Zuur et al. 2010, Zuur et al. 2009 Ch2 and Appendix A.

**1. The protocol:** Data Exploration Protocol

**2. Checking the response and predictors:** Outlier → Cleveland Dot Plot → Boxplot → Histogram → Homogeneity of Variance → Normality → Zero Inflation

**3. Relationships:** Collinearity → Variance Inflation Factor → Pairplot → Interaction → Independence of Observations

**4. Fixes:** Transformation → Standardizing Predictors

**Then the why:** Why explore data before modeling · Why collinearity makes coefficients unstable

## 4. [[MOC - Probability and Distributions]]
Units 0 and 4 (Sep 1, 3): the language of randomness, and the probability distributions that describe how ecological data scatter. Readings: Hobbs and Hooten 2015 Ch3.

**1. Probability rules:** Probability → Joint Probability → Conditional Probability → Independence → Marginal Probability → Random Variable

**2. Distributions in general:** Probability Distribution → PMF vs PDF → Moments → Moment Matching → Mixture Distribution

**3. Distributions for continuous data:** Normal Distribution → Lognormal Distribution → Gamma Distribution → Beta Distribution → Uniform Distribution

**4. Distributions for counts and yes/no data:** Bernoulli Distribution → Binomial Distribution → Poisson Distribution → Negative Binomial Distribution

**Then the why:** Why the response type decides the distribution

## 5. [[MOC - Linear Models and GLMs]]
Unit 4 (Sep 1, 3): the straight-line model, how to read it, and how GLMs extend it to counts, proportions and yes/no data. Readings: Guthery and Bingham 2007, Hobbs and Hooten 2015 Ch2, Zuur et al. 2009 Ch2.

**1. Deterministic functions:** Deterministic Functions in Ecology

**2. The linear model:** Linear Regression → Intercept → Slope → Residual → Least Squares → Linear Model Assumptions → Dummy Coding → Interaction Term → R-squared → Interpreting Regression Coefficients → Correlation vs Causation

**3. Estimation:** Likelihood → Maximum Likelihood Estimation → Confidence Interval → P-value

**4. Generalized linear models:** Generalized Linear Model → Link Function → Logistic Regression → Poisson Regression → Overdispersion

**Then the why:** Why GLMs need a link function · Why likelihood connects frequentist and Bayesian inference

## 6. [[MOC - Bayesian Inference]]
Units 5 and 7 (Sep 8, 10, 22): updating what we believe with data. Priors, posteriors, hierarchical models, MCMC and checking Bayesian models. Readings: Hobbs and Hooten 2015 Ch5 to 8.

**1. Bayes' theorem:** Bayes' Theorem → Prior → Posterior → Marginal Likelihood → Conjugate Prior → Vague vs Informative Priors → Credible Interval → Frequentist vs Bayesian Inference

**2. Hierarchical models:** Hierarchical Model → Data Model, Process Model and Parameter Model → Bayesian Network Diagram

**3. MCMC:** MCMC → Metropolis-Hastings Algorithm → Gibbs Sampling → Burn-in → Chains and Thinning → Trace Plot → R-hat → Effective Sample Size

**4. Checking and using the posterior:** Posterior Predictive Check → Bayesian p-value → Marginal Posterior Distribution → Derived Quantities → Prior Sensitivity Analysis

**5. In R:** brm() → Bayesian Linear Regression in R

**Then the why:** Why MCMC can sample a posterior we cannot write down · Why check MCMC convergence before reading results

## 7. [[MOC - Model Selection]]
Units 6 and 7 (Sep 15, 17, 22): choosing among competing models fairly, in frequentist, information-theoretic and Bayesian ways, and checking that the chosen model is any good. Readings: Anderson and Burnham 2002, Powell and Gale 2015 Ch3 and Ch4, Johnson and Omland 2004.

**1. Hypothesis-testing approach:** Null Hypothesis Significance Testing → Nested Models → Likelihood Ratio Test

**2. Information-theoretic approach:** Kullback-Leibler Distance → AIC → AICc → Delta AIC → Akaike Weight → Model Averaging → Candidate Model Set → Multi-model Inference → BIC

**3. Pitfalls:** Data Dredging → Pretending Variables → Uninformative Parameters

**4. Bayesian selection and diagnostics:** Deviance → DIC → WAIC → Leave-one-out Cross-validation → Residual Diagnostics with DHARMa

**Then the why:** Why AIC rewards fit but punishes complexity · Why build the candidate model set before seeing the data · Why average models instead of picking one

## 8. [[MOC - Autocorrelation]]
Unit 9 (Oct 1): when observations close in space or time resemble each other, ordinary models overstate how much they know. Readings: Diniz-Filho et al. 2003, Dynamic Ecology 'Autocorrelation: friend or foe?'.

**1. The idea:** Autocorrelation → Spatial Autocorrelation → Temporal Autocorrelation → Pseudoreplication

**2. Measuring it:** Moran's I → Correlogram → Variogram → Residual Autocorrelation

**3. Dealing with it:** Autocorrelation as Signal or Nuisance → Correlation Structures

**Then the why:** Why non-independence inflates false positives

## 9. [[MOC - Mixed Models]]
Units 10 to 13 (Oct 6, 8, 13, 15, 22): models for grouped data, fitted with lme4 and with brms, with confidence intervals and Bayesian workflows. Readings: Harrison et al. 2018, Christensen et al. 2020, Shipley et al. 2022, Zuur et al. 2009 Ch5, Hobbs and Hooten 2015 Ch6.

**1. What and why:** Grouping Factor → Fixed Effect → Random Effect → Partial Pooling → Variance Components → Intraclass Correlation

**2. Kinds of random effects:** Random Intercept → Random Slope → Nested vs Crossed Random Effects → Observation-level Random Effect → How Many Levels for a Random Effect

**3. Fitting in lme4:** Linear Mixed Model → GLMM → lmer() and glmer() → REML vs ML → Singular Fit → Convergence Warnings → Marginal and Conditional R-squared

**4. Confidence intervals:** Wald Confidence Interval → Profile Likelihood Confidence Interval → Parametric Bootstrap → Prediction vs Confidence Interval → Conditional vs Marginal Predictions

**5. Bayesian mixed models:** Hyperparameters → Bayesian GLMM → Priors for Variance Components → Divergent Transitions → Bayesian Mixed Model Workflow in R

**Then the why:** Why use a random effect instead of a fixed effect · Why partial pooling beats complete or no pooling · Why frequentist and Bayesian mixed models usually agree
