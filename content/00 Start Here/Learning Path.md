---
type: home
tags:
  - start-here
  - learning-path
aliases: []
status: seedling
---

# Learning Path

The order to read the wiki in, following the syllabus. Each step lists its map, then its notes in reading order.

## 0. [[MOC 01 - Basics from Zero]]
The maths and vocabulary every other note leans on, explained from nothing. If a symbol in another note looks alien, it is explained here.

**1. Data words:** [[Variable]] → [[Observation]] → [[Population]] → [[Sample]] → [[Parameter]] → [[Estimate]] → [[Estimator]] → [[Continuous Data]] → [[Discrete Data]] → [[Categorical Variable]] → [[Binary Variable]] → [[Sample Size]] → [[Ordinal Variable]] → [[Count Data]] → [[Proportion]] → [[Response Variable]] → [[Explanatory Variable]]

**2. Symbols and arithmetic:** [[Greek Letters and Notation]] → [[Summation Notation]] → [[Product Notation]] → [[Exponent]] → [[Logarithm]] → [[Natural Logarithm]] → [[Exponential Function]] → [[Scientific Notation in R Output]] → [[Functions in Maths]] → [[Factorial]] → [[Binomial Coefficient]] → [[Subscripts and Indexing]] → [[Absolute Value]] → [[Square Root]] → [[Nonlinear Function]] → [[Polynomial]] → [[Quadratic Term]] → [[Asymptote]]

**3. Summaries of data:** [[Mean]] → [[Variance]] → [[Standard Deviation]] → [[Standard Error]] → [[Covariance]] → [[Correlation]] → [[Median]] → [[Mode]] → [[Range]] → [[Quantile]] → [[Interquartile Range]] → [[Coefficient of Variation]] → [[Spearman Rank Correlation]] → [[Sum of Squares]] → [[Degrees of Freedom]] → [[Weighted Mean]]

**4. Odds:** [[Odds]] → [[Log Odds]] → [[Odds Ratio]]

**5. A little calculus and matrices:** [[Rate of Change]] → [[Proportional To]] → [[Derivative]] → [[Finding a Maximum with Calculus]] → [[Integral]] → [[Vector]] → [[Matrix]] → [[Matrix Notation for Models]]

**6. Chance and doubt:** [[Uncertainty]] → [[Randomness]]

**Then the why:** [[Variable and Observation]] · [[Population and Sample]] · [[Parameter vs Estimate]] · [[Continuous vs Discrete Data]] · [[Logarithms and Exponents]] · [[Factorials and Binomial Coefficient]] · [[Probability, Odds and Log Odds]] · [[What a p-value does and does not tell you]] · [[Statistical vs Biological Significance]] · [[Type I and Type II Errors]] · [[Why the variance divides by n minus 1]] · [[Standard Deviation vs Standard Error]] · [[Mean, Median and Mode]]

## 1. [[MOC 02 - Modeling Foundations]]
Unit 1 (Tue Aug 18): what a model is, the kinds of models ecologists build, and why we model at all. Readings: Powell and Gale 2015 Ch1 and Ch2, Tredennick et al. 2021.

**1. What a model is:** [[Model]] → [[Real World and Model World]] → [[Conceptual Model]] → [[Analytical Model]] → [[Statistical Model]] → [[Simulation Model]] → [[Theoretical Model]] → [[Empirical Model]] → [[Models as Abstractions]] → [[Individual-based Model]] → [[Mechanistic Model]] → [[Phenomenological Model]] → [[Model Complexity]]

**2. Why we model:** [[Exploratory Modeling]] → [[Inferential Modeling]] → [[Predictive Modeling]] → [[Modeling Process]] → [[Induction]] → [[Deduction]] → [[Hypothesis]] → [[Parsimony]] → [[Overfitting]] → [[Underfitting]] → [[Bias-Variance Trade-off]] → [[Sensitivity Analysis]] → [[Forecast]] → [[Scientific Method]] → [[Hypothetico-deductive Method]] → [[Line of Inference]] → [[Parameter Estimation]] → [[Bracket Notation]] → [[Adaptive Resource Management]] → [[Management Cycle]]

**3. Where data come from:** [[Biological Population]] → [[Statistical Population]] → [[Sampling Unit]] → [[Representative Sample]] → [[Sampling Variation]] → [[Bias]] → [[Precision]] → [[Accuracy]] → [[Binomial Sampling]] → [[Deterministic Component]] → [[Stochastic Component]] → [[Process Variation]] → [[Observation Error]] → [[Individual Variation]] → [[Study Population]] → [[Random Sampling]] → [[Sampling Effort]] → [[Unbiased Estimator]] → [[Population Dynamics]] → [[Population Growth Rate]] → [[Survival Rate]]

**4. Designing a study:** [[Study Design]] → [[Observational Study]] → [[Experimental Study]] → [[Replication]] → [[Randomization]] → [[Treatment]] → [[Control Group]] → [[Confounding Variable]]

**Then the why:** [[Theoretical vs Empirical Modeling]] · [[Exploration, Inference and Prediction]] · [[Induction vs Deduction]] · [[Biological vs Statistical Population]] · [[Bias and Precision]] · [[Deterministic and Stochastic Components]] · [[Process vs Observation Error]] · [[Why model at all]] · [[Why every statistical model has a deterministic and a stochastic part]] · [[Correlation vs Causation]] · [[Observational vs Experimental Study]] · [[Mechanistic vs Phenomenological Model]]

## 2. [[MOC 03 - R for Ecological Modeling]]
Units 2 and 8 (Aug 20, Sep 24, Sep 29): the R needed to wrangle data, fit models and make figures, and to keep the whole analysis reproducible.

**1. R basics:** [[R and RStudio]] → [[Console]] → [[Script]] → [[Objects and Assignment]] → [[Vectors in R]] → [[Data Types in R]] → [[Factors in R]] → [[Data Frame]] → [[Tibble]] → [[Lists in R]] → [[Matrices in R]] → [[Indexing in R]] → [[Missing Values]] → [[Function Arguments]] → [[Writing Your Own Function]] → [[For Loop]] → [[If-Else]] → [[Vectorization]] → [[apply()]] → [[lapply()]] → [[sapply()]] → [[map()]] → [[Packages in R]] → [[librarian shelf()]] → [[CRAN]]

**2. Tidyverse wrangling:** [[Tidyverse]] → [[Pipe Operator]] → [[filter()]] → [[select()]] → [[mutate()]] → [[summarise()]] → [[group_by()]] → [[rename()]] → [[case_when()]] → [[across()]] → [[Tidy Data]] → [[pivot_longer()]] → [[pivot_wider()]] → [[separate_wider_delim()]] → [[Joins]] → [[Binding Rows and Columns]]

**3. Getting data in and looking at it:** [[Reading Data into R]] → [[Reading Data from a URL]] → [[Inspecting Data]] → [[table()]] → [[unique()]]

**4. Simulation and model code:** [[Random Numbers and set.seed()]] → [[Simulating Data]] → [[Distribution Functions in R]] → [[Model Formula Syntax]]

**5. Reports and version control:** [[R Markdown]] → [[Code Chunks]] → [[Knitting]] → [[Version Control]] → [[Git]] → [[GitHub]] → [[Repository]] → [[Commit]] → [[Push and Pull]] → [[Fork]] → [[gitignore File]]

**6. Helpers and getting unstuck:** [[Help Files in R]] → [[Errors and Warnings in R]] → [[Debugging]] → [[expand.grid()]] → [[seq()]] → [[rep()]] → [[paste()]] → [[Strings in R]] → [[Dates in R]] → [[kable()]] → [[File System Functions in R]]

**7. Reproducibility:** [[RProject]] → [[here()]] → [[Project Folder Structure]] → [[README]] → [[Splitting Scripts]] → [[Reproducibility]]

**8. Figures:** [[ggplot2 Grammar of Graphics]]

**Then the why:** [[Why a reproducible project structure saves you]] · [[Console vs Script]] · [[Loops, apply and map]] · [[Data Frame vs Tibble]] · [[Wide vs Long Data]] · [[Relative vs Absolute Paths]]

## 3. [[MOC 04 - Data Exploration]]
Unit 3 (Aug 25, 27): look before you model. Zuur et al. 2010's protocol for catching the problems that quietly ruin models. Readings: Zuur et al. 2010, Zuur et al. 2009 Ch2 and Appendix A.

**1. The protocol:** [[Data Exploration]] → [[Data Exploration Protocol]] → [[Data Wrangling]]

**2. Looking at one variable:** [[Outlier]] → [[Cleveland Dot Plot]] → [[Boxplot]] → [[Histogram]] → [[Density Plot]] → [[Violin Plot]] → [[QQ Plot]] → [[Rug Plot]] → [[Line Plot]]

**3. Looking at relationships:** [[Scatterplot]] → [[LOESS Smoother]] → [[Pairplot]] → [[Coplot]] → [[Relationships Between Y and X]] → [[Principal Component Analysis]]

**4. Checking assumptions before fitting:** [[Homogeneity of Variance]] → [[Heteroscedasticity]] → [[Normality]] → [[Zero Inflation]] → [[Collinearity]] → [[Variance Inflation Factor]] → [[Independence of Observations]] → [[Fixed X Assumption]] → [[Leverage]] → [[Cook's Distance]] → [[Bartlett Test]] → [[Balanced Data]]

**5. Reshaping variables:** [[Transformation]] → [[Log Transformation]] → [[Square-root Transformation]] → [[Centering]] → [[Scaling Predictors]] → [[Standardizing]]

**6. Ecological data types met in the labs:** [[Species Richness]] → [[Diversity Index]] → [[Spatial Data in R]] → [[Coordinate Reference System]] → [[UTM Coordinates]] → [[Presence-Absence Data]]

**Then the why:** [[Why explore data before modeling]] · [[Why explore data before modeling]] · [[Why collinearity inflates standard errors]] · [[Outlier, Leverage and Influence]] · [[Centering, Scaling and Standardizing]]

## 4. [[MOC 05 - Probability and Distributions]]
Units 0 and 4 (Sep 1, 3): the language of randomness, and the probability distributions that describe how ecological data scatter. Readings: Hobbs and Hooten 2015 Ch3.

**1. The rules of probability:** [[Probability]] → [[Sample Space]] → [[Event]] → [[Joint Probability]] → [[Conditional Probability]] → [[Marginal Probability]] → [[Independent Events]] → [[Conditional Independence]] → [[Disjoint Events]] → [[Union of Events]] → [[Law of Total Probability]] → [[Chain Rule of Probability]] → [[Law of Large Numbers]]

**2. Random variables and their distributions:** [[Random Variable]] → [[Discrete Random Variable]] → [[Continuous Random Variable]] → [[Probability Distribution]] → [[Probability Mass Function]] → [[Probability Density Function]] → [[Probability Density]] → [[Cumulative Distribution Function]] → [[Quantile Function]] → [[Support of a Distribution]] → [[Expected Value]] → [[Moments of a Distribution]] → [[Moment Matching]] → [[Distribution Parameters]] → [[Mixture Distribution]] → [[Central Limit Theorem]] → [[Exponential Family]] → [[Multivariate Distribution]]

**3. Continuous distributions:** [[Normal Distribution]] → [[Standard Normal Distribution]] → [[Lognormal Distribution]] → [[Gamma Distribution]] → [[Exponential Distribution]] → [[Beta Distribution]] → [[Uniform Distribution]] → [[Inverse Gamma Distribution]] → [[Student t Distribution]] → [[Chi-square Distribution]] → [[F Distribution]]

**4. Discrete distributions:** [[Bernoulli Trial]] → [[Bernoulli Distribution]] → [[Binomial Distribution]] → [[Poisson Distribution]] → [[Negative Binomial Distribution]] → [[Geometric Distribution]] → [[Multinomial Distribution]] → [[Dirichlet Distribution]] → [[Multivariate Normal Distribution]] → [[Truncated Distribution]]

**5. Properties that guide the choice:** [[Gamma Function]] → [[Mean-Variance Relationship]] → [[Dispersion Parameter]] → [[Choosing a Distribution for Your Response]]

**Then the why:** [[Why the response type decides the distribution]] · [[Why the response type decides the distribution]] · [[PMF vs PDF]] · [[Joint, Marginal and Conditional Probability]] · [[Independent vs Disjoint Events]] · [[Binomial vs Poisson]]

## 5. [[MOC 06 - Linear Models and GLMs]]
Unit 4 (Sep 1, 3): the straight-line model, how to read it, and how GLMs extend it to counts, proportions and yes/no data. Readings: Guthery and Bingham 2007, Hobbs and Hooten 2015 Ch2, Zuur et al. 2009 Ch2.

**1. The straight-line model:** [[Linear Regression]] → [[Linear Function]] → [[Intercept]] → [[Slope]] → [[Regression Coefficient]] → [[Fitted Value]] → [[Residual]] → [[Error Term]] → [[Least Squares]] → [[Residual Standard Error]] → [[lm()]] → [[Multiple Regression]] → [[Holding Other Variables Constant]] → [[Interpreting Regression Coefficients]] → [[Effect Size]]

**2. Categories and interactions:** [[Dummy Coding]] → [[Reference Level]] → [[Sum-to-zero Contrasts]] → [[Interaction Term]] → [[Model Matrix]] → [[ANOVA]] → [[Two-way ANOVA]] → [[ANCOVA]]

**3. Judging and testing a fit:** [[R-squared]] → [[Adjusted R-squared]] → [[t-test]] → [[F-test]] → [[Residual Sum of Squares]] → [[Total Sum of Squares]]

**4. Assumptions and diagnostics:** [[Linear Model Assumptions]] → [[Linearity]] → [[Residuals vs Fitted Plot]] → [[plot() Diagnostics for lm]] → [[Variance-Covariance Matrix]] → [[Robust Regression]] → [[Pairwise Comparisons]] → [[Weighted Regression]] → [[Omitted Variable Bias]]

**5. Logs, scales and prediction:** [[Multiplicative Effects]] → [[Semi-log Model]] → [[Log-log Model]] → [[Allometry]] → [[Back-transformation]] → [[Jensen's Inequality]] → [[predict()]] → [[Predicting New Data]] → [[Predicting with Scaled Covariates]] → [[Prediction Interval]] → [[Extrapolation]] → [[Coefficient Plot]]

**6. Deterministic functions for ecology:** [[Deterministic Functions in Ecology]] → [[Exponential Growth Model]] → [[Logistic Growth Model]] → [[Power Function]] → [[Michaelis-Menten Function]] → [[Monomolecular Function]] → [[Hill Function]] → [[Gompertz Function]] → [[Logistic Function]] → [[Threshold Model]] → [[Functional Response]]

**7. Next: estimation and GLMs:** [[Likelihood]] → [[Maximum Likelihood Estimation]] → [[Confidence Interval]] → [[P-value]] → [[Generalized Linear Model]] → [[Link Function]] → [[Logistic Regression]] → [[Poisson Regression]] → [[Overdispersion]]

**Then the why:** [[Why GLMs need a link function]] · [[Which assumption violation leads to which model]] · [[Transform the data or change the model]] · [[Linear vs Nonlinear Function]] · [[Linear, Semi-log and Log-log Models]] · [[Additive vs Interaction Model]] · [[Simple vs Multiple Regression]] · [[Treatment vs Sum-to-zero Contrasts]]

## 6. [[MOC 07 - Likelihood and Estimation]]
Unit 4 (Sep 1, 3): how a model's numbers are learned from data. Likelihood, maximum likelihood, confidence intervals, tests and p-values. Readings: Hobbs and Hooten 2015 Ch4, Powell and Gale 2015 Ch3.

**1. Likelihood:** [[Likelihood]] → [[Likelihood Function]] → [[Log-likelihood]] → [[Negative Log-likelihood]] → [[Maximum Likelihood Estimation]] → [[Numerical Optimization]] → [[Convergence]] → [[Hessian Matrix]] → [[Likelihood Profile]] → [[Likelihood Ratio]] → [[Nested Models]] → [[Likelihood Ratio Test]] → [[Likelihood Principle]]

**2. Uncertainty of estimates:** [[Sampling Distribution]] → [[Variance of an Estimate]] → [[Confidence Interval]] → [[Wald Confidence Interval]] → [[Profile Likelihood Confidence Interval]] → [[Delta Method]] → [[Bootstrap]] → [[Parametric Bootstrap]] → [[Percentile Bootstrap Interval]]

**3. Hypothesis tests:** [[Null Hypothesis]] → [[Alternative Hypothesis]] → [[Test Statistic]] → [[P-value]] → [[Significance Level]] → [[Statistical Significance]] → [[Type I Error]] → [[Type II Error]] → [[Statistical Power]] → [[Null Hypothesis Significance Testing]] → [[Wald Test]] → [[z-test]] → [[Chi-square Test]] → [[Kruskal-Wallis Test]]

**4. Fitting machinery:** [[Iteratively Reweighted Least Squares]] → [[Nonlinear Least Squares]] → [[Nuisance Parameter]]

**Then the why:** [[Wald, Profile and Bootstrap Intervals]] · [[Probability vs Likelihood]] · [[Least Squares vs Maximum Likelihood]] · [[Wald Test vs Likelihood Ratio Test]]

## 7. [[MOC 08 - Generalized Linear Models]]
Unit 4 (Sep 3 lab and Homework 2): the linear model stretched to counts, proportions and yes/no data with a distribution and a link function. Readings: Zuur et al. 2009 Ch8 to 10.

**1. The three parts of a GLM:** [[Generalized Linear Model]] → [[Linear Predictor]] → [[Link Function]] → [[Inverse Link Function]] → [[Link Scale]] → [[Response Scale]] → [[Identity Link]] → [[Log Link]] → [[Rate Ratio]] → [[Logit Link]] → [[plogis()]] → [[Probit Link]] → [[Complementary Log-log Link]]

**2. Models for yes/no and proportion data:** [[Logistic Regression]] → [[Binomial GLM for Proportions]] → [[Complete Separation]] → [[Beta Regression]] → [[Beta-binomial Distribution]]

**3. Models for counts:** [[Poisson Regression]] → [[Offset]] → [[Overdispersion]] → [[Underdispersion]] → [[Negative Binomial GLM]] → [[Quasi-Poisson]] → [[Zero-inflated Model]] → [[Hurdle Model]] → [[Gamma GLM]]

**4. Measuring fit with deviance:** [[Deviance]] → [[Saturated Model]] → [[Null Deviance]] → [[Residual Deviance]] → [[Deviance Explained]] → [[Analysis of Deviance]]

**5. Checking a GLM:** [[Response Residuals]] → [[Pearson Residuals]] → [[Deviance Residuals]] → [[Randomized Quantile Residuals]] → [[DHARMa Simulated Residuals]] → [[Model Validation]] → [[Observation-level Random Effect]] → [[Family Argument]]

**Then the why:** [[Why GLMs need a link function]] · [[Linear Model vs GLM]] · [[Predictions on Link vs Response Scale]] · [[How to interpret a logistic regression coefficient]] · [[What to do about overdispersion]] · [[Poisson vs Negative Binomial]] · [[Zero-inflated vs Hurdle Model]] · [[Binomial vs Beta for Proportions]] · [[Which residuals to use for a GLM]]

## 8. [[MOC 09 - Bayesian Inference]]
Units 5 and 7 (Sep 8, 10, 22): updating what we believe with data. Priors, posteriors, hierarchical models, MCMC and checking Bayesian models. Readings: Hobbs and Hooten 2015 Ch5 to 8.

**1. The Bayesian idea:** [[Bayesian Inference]] → [[Frequentist Inference]] → [[Bayes' Theorem]] → [[Prior Distribution]] → [[Posterior Distribution]] → [[Marginal Likelihood]] → [[Normalizing Constant]] → [[Unobserved Quantities as Random Variables]] → [[Grid Approximation]] → [[Joint Posterior Distribution]] → [[Marginal Posterior Distribution]] → [[Maximum a Posteriori Estimate]]

**2. Priors:** [[Conjugate Prior]] → [[Beta-Binomial Conjugacy]] → [[Gamma-Poisson Conjugacy]] → [[Informative Prior]] → [[Vague Prior]] → [[Weakly Informative Prior]] → [[Jeffreys Prior]] → [[Proper Prior]] → [[Improper Prior]] → [[Half-Normal Prior]] → [[Half-Cauchy Prior]] → [[Precision Parameter]] → [[Prior Predictive Check]] → [[Prior Sensitivity Analysis]] → [[Monte Carlo Simulation]] → [[Monte Carlo Integration]]

**3. Hierarchical models:** [[Hierarchical Model]] → [[Data Model]] → [[Process Model]] → [[Parameter Model]] → [[Group-level Model]] → [[Hyperparameter]] → [[Latent Variable]] → [[Directed Acyclic Graph]] → [[Full-conditional Distribution]] → [[Identifiability]] → [[Separating Process and Observation Variance]] → [[Missing Data in Bayesian Models]]

**4. Sampling the posterior with MCMC:** [[MCMC]] → [[Markov Chain]] → [[Metropolis Algorithm]] → [[Metropolis-Hastings Algorithm]] → [[Proposal Distribution]] → [[Tuning Parameter]] → [[Acceptance Rate]] → [[Gibbs Sampling]] → [[Hamiltonian Monte Carlo]] → [[MCMC Chains]] → [[Initial Values]] → [[Burn-in]] → [[Thinning]]

**5. Checking that the sampler worked:** [[MCMC Convergence]] → [[Trace Plot]] → [[R-hat]] → [[Other Convergence Diagnostics]] → [[Chain Autocorrelation]] → [[Effective Sample Size]] → [[Divergent Transitions]]

**6. Summarising the posterior:** [[Posterior Draws]] → [[Posterior Summary]] → [[Credible Interval]] → [[Equal-tailed Interval]] → [[Highest Posterior Density Interval]] → [[Probability of Direction]] → [[Derived Quantities]] → [[Equivariance Property of MCMC]] → [[Posterior Predictive Distribution]] → [[Composition Sampling]]

**7. Checking the model:** [[Posterior Predictive Check]] → [[Bayesian P-value]] → [[Bayesian R-squared]]

**8. Software:** [[brms]] → [[brm()]] → [[Setting Priors in brms]] → [[pp_check()]] → [[cmdstanr Backend]] → [[JAGS and BUGS]] → [[tidybayes]] → [[Default Priors in brms]]

**Then the why:** [[Frequentist vs Bayesian Inference]] · [[Why the posterior is proportional to likelihood times prior]] · [[How to choose a prior]] · [[Proper vs Improper Prior]] · [[Data Model, Process Model and Parameter Model]] · [[How MCMC turns a formula into a posterior]] · [[How to check an MCMC fit]] · [[Confidence vs Credible Interval]] · [[Equal-tailed vs Highest Density Interval]] · [[Prior Predictive vs Posterior Predictive Check]] · [[JAGS vs Stan]] · [[Bayesian Linear Regression in R]]

## 9. [[MOC 10 - Model Selection]]
Units 6 and 7 (Sep 15, 17, 22): choosing among competing models fairly, in frequentist, information-theoretic and Bayesian ways, and checking that the chosen model is any good. Readings: Anderson and Burnham 2002, Powell and Gale 2015 Ch3 and Ch4, Johnson and Omland 2004.

**1. Why compare models at all:** [[Model Selection]] → [[Strong Inference]] → [[Multiple Working Hypotheses]] → [[Criticisms of p-values]] → [[Stepwise Selection]] → [[Null Hypothesis Significance Testing]] → [[Nested Models]] → [[Likelihood Ratio Test]]

**2. Information theory and AIC:** [[Information Theory]] → [[Kullback-Leibler Information]] → [[Full Reality]] → [[AIC]] → [[AICc]] → [[QAIC]] → [[BIC]] → [[Number of Parameters]] → [[Delta AIC]] → [[Akaike Weight]] → [[Evidence Ratio]] → [[Cumulative Weight]] → [[Confidence Set of Models]] → [[Model Ranking Tables]]

**3. Building the candidate set:** [[Candidate Model Set]] → [[Global Model]] → [[Balanced Model Set]] → [[Data Dredging]] → [[All-subsets Selection]] → [[Uninformative Parameters]] → [[Post hoc Analysis]] → [[Null Model]]

**4. Using more than one model:** [[Multi-model Inference]] → [[Model Selection Uncertainty]] → [[Model Averaging]] → [[Conditional vs Full Model Averaging]] → [[Unconditional Variance]] → [[Relative Variable Importance]] → [[modavg()]]

**5. Judging prediction:** [[Cross-validation]] → [[Out-of-sample Prediction]] → [[Mean Square Prediction Error]] → [[Regularization]] → [[Residual Tests in DHARMa]]

**6. Bayesian selection:** [[Deviance]] → [[DIC]] → [[WAIC]] → [[Leave-one-out Cross-validation]]

**Then the why:** [[Why AIC rewards fit but punishes complexity]] · [[Why build the candidate model set before seeing the data]] · [[Why AIC rewards fit but punishes complexity]] · [[Likelihood Ratio Test vs AIC]] · [[AIC vs BIC]] · [[Null Hypothesis Testing vs Model Selection]] · [[Why build the candidate model set before seeing the data]] · [[Model Selection for Explanation vs Prediction]]

## 10. [[MOC 11 - Bayesian Model Selection]]
Unit 7 (Sep 22): comparing and checking Bayesian models with DIC, WAIC, LOO and simulated residuals. Readings: Hobbs and Hooten 2015 Ch8 and Ch9, Vehtari et al. 2017.

**1. Predictive accuracy:** [[Log Pointwise Predictive Density]] → [[Expected Log Predictive Density]] → [[Effective Number of Parameters]] → [[DIC]] → [[WAIC]] → [[Leave-one-out Cross-validation]] → [[PSIS and Pareto k]] → [[loo_compare()]] → [[Scoring Rules]] → [[Posterior Predictive Loss]]

**2. Model probabilities and Bayes factors:** [[Bayes Factor]] → [[Model Probabilities]] → [[Bayesian Model Averaging]] → [[Reversible-jump MCMC]] → [[Indicator Variable Selection]] → [[Spike-and-slab Prior]]

**Then the why:** [[AIC, WAIC and LOO]] · [[Bayes Factors vs Predictive Criteria]]

## 11. [[MOC 12 - Reproducible Coding and Figures]]
Unit 8 (Sep 24, 29): an analysis someone else can rerun from raw data to final figure. RProjects, folders, ggplot2 and saving results.

**1. A project that reruns:** [[Reproducibility]] → [[Working Directory]] → [[Absolute Path]] → [[Relative Path]] → [[RProject]] → [[here()]] → [[Project Folder Structure]] → [[README]] → [[Splitting Scripts]] → [[Caching Long Runs]] → [[Session Info]] → [[End-to-end Analysis Plan]]

**2. Figures with ggplot2:** [[ggplot2 Grammar of Graphics]] → [[Aesthetics]] → [[Geoms]] → [[Facets]] → [[Themes]] → [[Colour Scales]] → [[Axis Labels and Titles]] → [[Plotting Model Predictions with Ribbons]] → [[Error Bars]] → [[Multi-panel Figures]] → [[Saving Figures]] → [[tidy()]] → [[augment()]]

**Then the why:** [[Why a reproducible project structure saves you]] · [[Git vs GitHub]]

## 12. [[MOC 13 - Autocorrelation]]
Unit 9 (Oct 1): when observations close in space or time resemble each other, ordinary models overstate how much they know. Readings: Diniz-Filho et al. 2003, Dynamic Ecology 'Autocorrelation: friend or foe?'.

**1. What autocorrelation is:** [[Autocorrelation]] → [[Spatial Autocorrelation]] → [[Temporal Autocorrelation]] → [[Phylogenetic Autocorrelation]] → [[Tobler's First Law]] → [[Positive Autocorrelation]] → [[Negative Autocorrelation]] → [[Stationarity]] → [[Isotropy]] → [[Lag]] → [[Time Series]]

**2. Detecting it:** [[Autocorrelation Function]] → [[Partial Autocorrelation Function]] → [[Cross-correlation]] → [[Durbin-Watson Test]] → [[Spatial Weights Matrix]] → [[Distance Classes]] → [[Moran's I]] → [[Geary's c]] → [[Correlogram]] → [[Spline Correlogram]] → [[Variogram]] → [[Nugget]] → [[Sill]] → [[Variogram Range]] → [[Bubble Plot of Residuals]] → [[Residual Autocorrelation]]

**3. Why it matters:** [[Pseudoreplication]] → [[Inflated Type I Error]] → [[Spatial Scale]] → [[Grain]] → [[Extent]]

**4. Modelling it:** [[Generalized Least Squares]] → [[Correlation Structure]] → [[AR(1) Error Structure]] → [[ARMA Error Structure]] → [[Compound Symmetry]] → [[Spatial Correlation Functions]] → [[Spatial Eigenvector Filtering]] → [[Spatial Autoregressive Models]] → [[Conditional Autoregressive Model]] → [[Trend Surface Analysis]] → [[Variance Partitioning]]

**Then the why:** [[Why non-independence inflates false positives]] · [[Autocorrelation as Signal or Nuisance]] · [[Why non-independence inflates false positives]] · [[Positive vs Negative Autocorrelation]] · [[Temporal vs Spatial Autocorrelation]] · [[ACF vs PACF]] · [[Moran's I vs Geary's c]] · [[Correlogram vs Variogram]] · [[OLS vs GLS]] · [[How to detect and handle autocorrelation]] · [[Why residual autocorrelation can mean a missing covariate]] · [[SAR vs CAR Models]]

## 13. [[MOC 14 - Mixed Models]]
Units 10 to 13 (Oct 6, 8, 13, 15, 22): models for grouped data, fitted with lme4 and with brms, with confidence intervals and Bayesian workflows. Readings: Harrison et al. 2018, Christensen et al. 2020, Shipley et al. 2022, Zuur et al. 2009 Ch5, Hobbs and Hooten 2015 Ch6.

**1. Why mixed models:** [[Hierarchical Data]] → [[Mixed Effects Model]] → [[Fixed Effect]] → [[Random Effect]] → [[Grouping Factor]] → [[Random Intercept]] → [[Random Slope]] → [[Correlated Random Intercepts and Slopes]] → [[Variance Components]] → [[Intraclass Correlation]] → [[Nested Random Effects]] → [[Crossed Random Effects]]

**2. Pooling and shrinkage:** [[Complete Pooling]] → [[No Pooling]] → [[Partial Pooling]] → [[Shrinkage]] → [[Conditional Modes]] → [[Marginal Model]]

**3. Fitting in R:** [[Linear Mixed Model]] → [[GLMM]] → [[lme4 Random-effect Syntax]] → [[lmer() and glmer()]] → [[nlme lme()]] → [[fixef(), ranef() and VarCorr()]] → [[REML]] → [[Laplace Approximation]] → [[Penalized Quasi-likelihood]] → [[Variance Structures]] → [[Repeated Measures]] → [[Nested Experimental Design]] → [[Blocking]]

**4. Diagnosing and testing:** [[Singular Fit]] → [[Convergence Warnings]] → [[performance Package Checks]] → [[How Many Levels for a Random Effect]] → [[Boundary Problem When Testing Variances]] → [[p-values in Mixed Models]] → [[Marginal and Conditional R-squared]] → [[Top-down Model Selection Protocol]] → [[Building All Fixed x Random Combinations]] → [[Observation-level Random Effect]]

**5. Intervals and predictions:** [[Wald Confidence Interval]] → [[Profile Likelihood Confidence Interval]] → [[Parametric Bootstrap]] → [[Confidence Intervals for Variance Components]] → [[bootMer()]] → [[Parallel Computing in R]] → [[Confidence Envelopes]]

**6. Bayesian mixed models:** [[Bayesian GLMM]] → [[Priors on Standard Deviations]] → [[LKJ Prior]] → [[adapt_delta and Sampler Settings]] → [[Divergent Transitions]]

**Then the why:** [[Why use a random effect instead of a fixed effect]] · [[Fixed vs Random Effects]] · [[Why use a random effect instead of a fixed effect]] · [[Complete, No and Partial Pooling]] · [[Random Intercept vs Random Slope]] · [[Nested vs Crossed Random Effects]] · [[REML vs ML]] · [[Conditional vs Marginal Predictions]] · [[Prediction vs Confidence Interval]] · [[lme4 vs brms]] · [[Bayesian Mixed Model Workflow in R]]

## 14. [[MOC 19 - Ecology Vocabulary]]
The ecology words the readings, labs and homework datasets assume you know, each explained from nothing.

**1. Populations and demography:** [[Population Density]] → [[Vital Rates]] → [[Fecundity]] → [[Carrying Capacity]] → [[Density Dependence]] → [[Tag Loss]] → [[Metapopulation]] → [[Translocation]] → [[Reintroduction]]

**2. Traits and climate:** [[Body Size]] → [[Body Condition]] → [[Phenology]] → [[Climate Change Effects on Wildlife]] → [[Drought Index]] → [[Evapotranspiration]] → [[Environmental Gradient]] → [[Latitudinal Gradient]] → [[Macroecology]]

**3. Disease:** [[Vector-borne Disease]] → [[Epizootic Hemorrhagic Disease]]

**4. Habitat and landscape:** [[Habitat]] → [[Habitat Structure]] → [[Canopy Cover]] → [[Diameter at Breast Height]] → [[Coarse Woody Debris]] → [[Fire History Variables]] → [[Landscape Metrics]] → [[Species Distribution Model]] → [[Enemy Release Hypothesis]] → [[Woody Encroachment]] → [[NDVI]] → [[Home Range]] → [[Edge Effect]] → [[Species Interaction]]

## 15. [[MOC 15 - GAMs]]
Oct 27 onward: generalized additive models let the data draw a smooth curve, and hierarchical GAMs let groups share or differ in that curve. Readings: Zuur et al. 2009 Ch3, Pedersen et al. 2019, Lawton et al. 2022, Noam Ross's GAM course.

**1. What a GAM is:** [[Generalized Additive Model]] → [[Smoother]] → [[Spline]] → [[Basis Function]] → [[Knots]] → [[Cubic Regression Spline]] → [[Thin Plate Regression Spline]] → [[Penalized Regression Spline]] → [[Wiggliness Penalty]] → [[Smoothing Parameter]] → [[Effective Degrees of Freedom]] → [[REML for Smoothness Selection]] → [[Generalized Cross-validation]] → [[Smoothing Function s()]] → [[Basis Dimension and gam.check()]] → [[Partial Effect Plots]] → [[Prediction from a GAM]] → [[Derivatives of a Smooth]] → [[gratia]]

**2. Interactions and special smooths:** [[Tensor Product Smooth]] → [[Cyclic Spline]] → [[by= Smooths]] → [[Factor-smooth Interaction]] → [[Random-effect Smooth]] → [[Spatial Smooths]] → [[Gaussian Process Smooths]] → [[Concurvity]] → [[Double Penalty Selection]] → [[Tweedie Distribution]]

**3. Hierarchical GAMs:** [[Hierarchical GAM]] → [[Global Smoother]] → [[Group-level Smoothers]] → [[Shared Wiggliness]] → [[GAMM]] → [[bam()]] → [[Bayesian GAMs]]

**Then the why:** [[GLM vs GAM]] · [[Polynomial vs Spline]] · [[Why penalize wiggliness]] · [[GCV vs REML for Smoothing]] · [[by= Smooths vs Factor Smooths]] · [[Choosing an HGAM Model Type]] · [[HGAM vs GLMM with Random Slopes]] · [[Spatial Smooth vs Spatial Correlation Structure]] · [[GAM Workflow in R]]

## 16. [[MOC 16 - Population Estimation]]
Guest lectures and Powell and Gale 2015 Ch5 to 19: occupancy, mark-recapture, survival and abundance when animals are missed.

**1. Counting animals you cannot always see:** [[Imperfect Detection]] → [[Detection Probability]] → [[Cumulative Detection Probability]] → [[Availability for Detection]] → [[Abundance]] → [[Census]] → [[Population Index]] → [[Catch per Unit Effort]] → [[Count-based Abundance Estimation]] → [[Survey Sampling Designs]] → [[Finite Population Correction]] → [[Spatially Balanced Sampling]] → [[Live Trapping]] → [[Coverboard]] → [[Track Survey]] → [[Acoustic Survey]] → [[Autonomous Recording Unit]] → [[Breeding Amphibian Survey]] → [[Camera Trap]] → [[Hair Snare]] → [[Environmental DNA]]

**2. Occupancy:** [[Occupancy]] → [[Detection History]] → [[Occupancy Likelihood]] → [[Naive Occupancy]] → [[Closure Assumption]] → [[Site Independence Assumption]] → [[Unexplained Heterogeneity in Occupancy]] → [[Unexplained Heterogeneity in Detection]] → [[Single-season Occupancy]] → [[Stacked Occupancy Design]] → [[Multi-season Occupancy]] → [[Colonization Probability]] → [[Local Extinction Probability]] → [[Multi-species Occupancy]] → [[Marginal Occupancy]] → [[Conditional Occupancy]] → [[Co-occurrence Probability]] → [[Site Covariates]] → [[Observation Covariates]] → [[unmarked Package]] → [[ubms Package]] → [[spOccupancy Package]] → [[Program PRESENCE]]

**3. Mark-recapture and closed populations:** [[Mark-Recapture]] → [[Capture History]] → [[Cohort]] → [[Closed Population]] → [[Open Population]] → [[Encounter Probability]] → [[Capture Probability]] → [[Lincoln-Petersen Estimator]] → [[Chapman Estimator]] → [[Schnabel Estimator]] → [[Behavioral Response to Capture]] → [[Capture Heterogeneity Models]] → [[Huggins Closed Capture Model]] → [[Horvitz-Thompson Estimator]] → [[Removal Sampling]] → [[Double-observer Methods]]

**4. Counts, N-mixture and distance sampling:** [[N-mixture Model]] → [[Distance Sampling]] → [[Detection Function]] → [[Effective Strip Width]] → [[Line Transects]] → [[Point Transects]] → [[Detection on the Line g(0)]]

**5. Survival of marked animals:** [[Known-fate Models]] → [[Radio-telemetry Data]] → [[Censoring]] → [[Staggered Entry Design]] → [[Exposure Days]] → [[Mayfield Nest Survival]] → [[Logistic Exposure Model]] → [[Kaplan-Meier Estimator]] → [[Hazard Rate]] → [[Apparent Survival]] → [[Cormack-Jolly-Seber Model]] → [[Jolly-Seber and POPAN Models]] → [[Super-population]] → [[Dead Recovery Models]] → [[Joint Live-dead Encounter Models]] → [[Multi-state Models]] → [[Robust Design]] → [[Primary and Secondary Sampling Periods]] → [[Temporary Emigration]] → [[Age and Time Structure in Survival Models]]

**6. Program MARK and model checking:** [[Program MARK]] → [[Parameter Index Matrix]] → [[Design Matrix in Program MARK]] → [[Goodness of Fit and c-hat]]

**Then the why:** [[Why raw counts mislead]] · [[Census vs Index vs Estimate]] · [[Naive vs Estimated Occupancy]] · [[Occupancy vs Detection Probability]] · [[Site vs Observation Covariates]] · [[Occupancy vs Abundance]] · [[How many visits does an occupancy study need]] · [[Occupancy Workflow in R]] · [[Open vs Closed Populations]] · [[Mark-Recapture vs Unmarked Survey Methods]] · [[Line vs Point Transects]] · [[True vs Apparent Survival]] · [[Mayfield vs Kaplan-Meier]] · [[Choosing a Survival Model]] · [[Choosing a Population Estimation Method]] · [[Process vs Sampling Variance in Survival Estimates]] · [[Assumptions of Occupancy Models]] · [[Single-season vs Multi-season Occupancy]] · [[Marginal vs Conditional Occupancy]] · [[Choosing a Survey Method for Occupancy]] · [[Choosing Occupancy Software]] · [[Fisher Occupancy Case Study]]

## 17. [[MOC 17 - Stan]]
Stan language labs: writing a Bayesian model directly in Stan, block by block, and running it from R.

**1. Writing a Stan program:** [[Stan]] → [[Stan Program Blocks]] → [[Data Types in Stan]] → [[Constrained Parameters]] → [[Sampling Statements and target +=]] → [[Vectorized Sampling Statements]] → [[Transformed Parameters]] → [[Generated Quantities]] → [[log_lik for LOO]] → [[Jacobian Adjustment]]

**2. Running and tuning Stan:** [[Running Stan from R]] → [[Step Size and Maximum Tree Depth]]

**3. Mixed models in Stan:** [[Group Index Vectors in Stan]] → [[Random Intercepts in Stan]] → [[Non-centered Parameterization]] → [[brms-generated Stan Code]]

**Then the why:** [[Writing a Stan Model Step by Step]] · [[Centered vs Non-centered Parameterization]] · [[Stan vs brms vs JAGS]] · [[Why Stan works with log densities]]

## 18. [[MOC 18 - Scientific Writing]]
Nov 24: turning an analysis into clear methods and results. Readings: Cormac McCarthy's writing advice, Zuur et al. 2010 and Zuur and Ieno's reporting advice.

**1. Writing clearly:** [[Theme and Key Points]] → [[One Idea per Paragraph]] → [[Plain Clear Sentences]] → [[Cutting Unnecessary Words]]

**2. Writing up a model:** [[Writing Methods Sections]] → [[Writing Results Sections]] → [[Reporting Statistics in Text]] → [[What to Report for a Model]] → [[Figures for Model Results]]

**Then the why:** [[How to write up a modeling analysis]]
