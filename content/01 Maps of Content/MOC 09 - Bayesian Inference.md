---
type: moc
tags:
  - moc
  - bayes
aliases:
  - "MOC - Bayesian Inference"
status: seedling
---

# MOC 09 - Bayesian Inference

Units 5 and 7 (Sep 8, 10, 22): updating what we believe with data. Priors, posteriors, hierarchical models, MCMC and checking Bayesian models. Readings: Hobbs and Hooten 2015 Ch5 to 8.

## 1. The Bayesian idea
- [[Bayesian Inference]]: Bayesian inference treats unknown quantities as having probability distributions and uses data to update what you believed before (the prior) into what you...
- [[Frequentist Inference]]: frequentist inference treats parameters as fixed unknown numbers and judges methods by how they would perform over many hypothetical repetitions of the study.
- [[Bayes' Theorem]]: Bayes' theorem is the rule for turning the probability of data given a hypothesis into the probability of the hypothesis given the data.
- [[Prior Distribution]]: a prior distribution describes which values of a parameter are plausible before the current data are taken into account.
- [[Posterior Distribution]]: the posterior distribution describes which parameter values are plausible after combining the prior with the data.
- [[Marginal Likelihood]]: the marginal likelihood is the probability of the observed data averaged over every parameter value the prior allows, and it is the denominator of Bayes'...
- [[Normalizing Constant]]: a normalizing constant is the number you divide an unnormalised curve by so that the area under it equals 1 and it becomes a proper probability distribution.
- [[Unobserved Quantities as Random Variables]]: in Bayesian analysis every quantity you haven't observed (parameters, hidden states, missing data, future observations) is treated as a random variable with...
- [[Grid Approximation]]: grid approximation computes a posterior by evaluating likelihood × prior at a fine grid of parameter values and rescaling the results to sum to 1.
- [[Joint Posterior Distribution]]: the joint posterior distribution describes the plausibility of all the model's parameters together, including how uncertainty in one is tied to uncertainty...
- [[Marginal Posterior Distribution]]: a marginal posterior distribution is the posterior of one parameter on its own, with the uncertainty in all other parameters averaged over.
- [[Maximum a Posteriori Estimate]]: the maximum a posteriori estimate is the parameter value at the peak of the posterior distribution.

## 2. Priors
- [[Conjugate Prior]]: a conjugate prior is one that, combined with a given likelihood, produces a posterior from the same distribution family, so the update can be done with...
- [[Beta-Binomial Conjugacy]]: with a Beta(a, b) prior on a probability and y successes in n trials, the posterior is Beta(a + y, b + n − y).
- [[Gamma-Poisson Conjugacy]]: with a Gamma(a, b) prior on a Poisson rate and n counts that sum to S, the posterior is Gamma(a + S, b + n).
- [[Informative Prior]]: an informative prior concentrates plausibility on a narrow range of parameter values because earlier evidence justifies doing so.
- [[Vague Prior]]: a vague prior spreads plausibility so widely that the data, through the likelihood, almost entirely determine the posterior.
- [[Weakly Informative Prior]]: a weakly informative prior rules out absurd parameter values while staying wide enough that any realistic value remains plausible.
- [[Jeffreys Prior]]: a Jeffreys prior is a "default" prior built by a mathematical rule so that the result doesn't depend on which scale you choose to write the parameter on.
- [[Proper Prior]]: a proper prior is one that is a real probability distribution, meaning the area under it is finite and can be scaled to 1.
- [[Improper Prior]]: an improper prior is a "prior" whose area is infinite, such as a flat line over all real numbers, so it isn't a real probability distribution.
- [[Half-Normal Prior]]: a half-normal prior is a normal distribution centred at zero with its negative half cut away, used for parameters that must be positive such as standard...
- [[Half-Cauchy Prior]]: a half-Cauchy prior is a positive-only prior with its peak at zero and a very heavy tail, often used for group-level standard deviations because it favours...
- [[Precision Parameter]]: precision is one divided by the variance, so a high precision means a narrow distribution.
- [[Prior Predictive Check]]: a prior predictive check simulates data from the priors alone, before using any real data, to see whether your priors imply believable observations.
- [[Prior Sensitivity Analysis]]: a prior sensitivity analysis refits the model under different reasonable priors to see whether the conclusions change.
- [[Monte Carlo Simulation]]: Monte Carlo simulation answers a question by drawing many random numbers from a model and summarising what happens.
- [[Monte Carlo Integration]]: Monte Carlo integration approximates an integral, such as a mean or a probability under a distribution, by averaging over random draws from that distribution.

## 3. Hierarchical models
- [[Hierarchical Model]]: a hierarchical model is built in layers, where the parameters of one layer are themselves given a distribution governed by parameters in the layer above.
- [[Data Model]]: the data model is the layer of a hierarchical model that describes how the observations you recorded arise from the true, unobserved state, including...
- [[Process Model]]: the process model is the layer of a hierarchical model that describes how the true state of nature behaves, including real variation that the deterministic...
- [[Parameter Model]]: the parameter model is the layer of a hierarchical model that gives prior distributions to all the parameters of the data and process models.
- [[Group-level Model]]: a group-level model is the layer that describes how parameters differ from group to group by drawing them from a shared distribution.
- [[Hyperparameter]]: a hyperparameter is a parameter of a distribution that describes other parameters, such as the mean and standard deviation of the distribution that group...
- [[Latent Variable]]: a latent variable is a quantity that really exists in the system but is never observed directly, so the model must infer it from the data it influences.
- [[Directed Acyclic Graph]]: a directed acyclic graph is a diagram of a model in which each quantity is a node and arrows show which quantities each one depends on, with no loops.
- [[Full-conditional Distribution]]: the full-conditional distribution of a parameter is its distribution given the data and the current values of every other unknown in the model.
- [[Identifiability]]: a parameter is identifiable when the data can tell different values of it apart, and non-identifiable when different combinations of parameters fit the data...
- [[Separating Process and Observation Variance]]: separating process and observation variance means estimating how much of the scatter in data reflects real variation in nature and how much reflects...
- [[Missing Data in Bayesian Models]]: in a Bayesian model a missing value is treated as one more unknown, given a distribution, and estimated along with the parameters.

## 4. Sampling the posterior with MCMC
- [[MCMC]]: Markov chain Monte Carlo is a family of algorithms that produce draws from a posterior distribution by wandering through parameter space in such a way that...
- [[Markov Chain]]: a Markov chain is a sequence of random states in which the next state depends only on the current state and not on how you got there.
- [[Metropolis Algorithm]]: the Metropolis algorithm samples a posterior by proposing a random step from the current value and accepting it with a probability equal to the ratio of...
- [[Metropolis-Hastings Algorithm]]: the Metropolis-Hastings algorithm extends Metropolis to proposal distributions that are not symmetric by adding a correction factor to the acceptance ratio.
- [[Proposal Distribution]]: the proposal distribution is the rule an MCMC sampler uses to suggest the next candidate value given the current one.
- [[Tuning Parameter]]: a tuning parameter is a setting of the sampling algorithm, such as the width of the proposal, that affects how efficiently it explores the posterior without...
- [[Acceptance Rate]]: the acceptance rate is the fraction of proposed moves that an MCMC sampler accepts, a gauge of whether its step size is well matched to the posterior.
- [[Gibbs Sampling]]: Gibbs sampling updates one parameter at a time by drawing it directly from its full-conditional distribution, cycling through all parameters over and over.
- [[Hamiltonian Monte Carlo]]: Hamiltonian Monte Carlo proposes new parameter values by simulating a frictionless ball rolling over the posterior surface, which lets it make long moves...
- [[MCMC Chains]]: a chain is one complete run of an MCMC sampler from one starting point, and several chains are run so that their agreement can be checked.
- [[Initial Values]]: initial values are the parameter values at which an MCMC chain (or an optimiser) begins.
- [[Burn-in]]: burn-in is the early part of an MCMC chain that is thrown away because the sampler hadn't yet reached the posterior, or was still tuning itself.
- [[Thinning]]: thinning means keeping only every k-th draw of an MCMC chain and discarding the rest.

## 5. Checking that the sampler worked
- [[MCMC Convergence]]: MCMC convergence means the chains have forgotten their starting points and are all drawing from the same stable distribution, which we take to be the...
- [[Trace Plot]]: a trace plot shows the sampled value of a parameter at each iteration, one line per chain, so you can see whether the chains have settled and are mixing well.
- [[R-hat]]: R-hat compares the variation between chains with the variation within chains, and is close to 1 when all the chains are sampling the same distribution.
- [[Other Convergence Diagnostics]]: Geweke, Heidelberger-Welch and Raftery-Lewis are older single-chain checks that ask whether a chain looks stationary and whether it is long enough.
- [[Chain Autocorrelation]]: chain autocorrelation is the correlation between an MCMC draw and the draws that came shortly before it, which reduces how much information the chain holds.
- [[Effective Sample Size]]: the effective sample size is the number of independent observations that would carry the same information as your correlated ones.
- [[Divergent Transitions]]: a divergent transition is a warning from Hamiltonian Monte Carlo that its simulated path went badly off course in a region of the posterior too sharply...

## 6. Summarising the posterior
- [[Posterior Draws]]: posterior draws are the thousands of parameter values an MCMC sampler returns, which together stand in for the posterior distribution.
- [[Posterior Summary]]: a posterior summary condenses a posterior distribution into a few numbers, usually a central value, a spread and an interval.
- [[Credible Interval]]: a credible interval is a range that contains a stated share, such as 95%, of the posterior probability for a parameter.
- [[Equal-tailed Interval]]: an equal-tailed interval is a credible interval that leaves the same amount of posterior probability outside each end, such as 2.5% below and 2.5% above.
- [[Highest Posterior Density Interval]]: a highest posterior density interval is the narrowest range that contains the stated share of the posterior, so every value inside it is more probable than...
- [[Probability of Direction]]: the probability of direction is the share of the posterior that lies on one side of zero, read as the probability that an effect is positive (or negative).
- [[Derived Quantities]]: a derived quantity is anything computed from the model's parameters, and its full posterior is obtained by doing that computation on every posterior draw.
- [[Equivariance Property of MCMC]]: the equivariance property says that applying any function to posterior draws of parameters gives valid posterior draws of that function's result.
- [[Posterior Predictive Distribution]]: the posterior predictive distribution is the distribution of new, not yet seen data implied by the model, averaging over all the uncertainty in the parameters.
- [[Composition Sampling]]: composition sampling draws from a distribution that depends on unknown parameters by first drawing the parameters and then drawing the quantity of interest...

## 7. Checking the model
- [[Posterior Predictive Check]]: a posterior predictive check simulates replicate datasets from the fitted model and compares them with the real data, on the logic that a good model should...
- [[Bayesian P-value]]: a Bayesian p-value is the proportion of replicate datasets simulated from the fitted model whose test statistic is more extreme than the same statistic in...
- [[Bayesian R-squared]]: Bayesian R-squared measures the share of variance explained by a Bayesian model, computed for every posterior draw so that it comes with its own uncertainty.

## 8. Software
- [[brms]]: brms is an R package that fits Bayesian regression models with Stan while letting you write them in the familiar formula syntax of `lm` and `lmer`.
- [[brm()]]: `brm()` is the function in brms that fits a Bayesian model from a formula, a data frame, a family and priors.
- [[Setting Priors in brms]]: in brms you see which priors a model needs with `get_prior()` and assign them with `prior()`, addressing parameters by class and, if needed, by coefficient...
- [[pp_check()]]: `pp_check()` draws posterior predictive check plots for a fitted Bayesian model, overlaying data simulated from the model on the observed data.
- [[cmdstanr Backend]]: cmdstanr is an R interface to CmdStan, the command-line version of Stan, and can be used as the engine behind brms in place of rstan.
- [[JAGS and BUGS]]: BUGS and JAGS are programs that fit Bayesian models written in a simple model language, using Gibbs sampling and related methods.
- [[tidybayes]]: tidybayes is an R package that pulls posterior draws out of Bayesian model objects into tidy data frames and offers ggplot2 geoms for plotting distributions.
- [[Default Priors in brms]]: brms sets default priors for every parameter (flat on regression slopes, weakly informative Student-t priors scaled to the data on the intercept and...

## Related molecular notes
- [[Frequentist vs Bayesian Inference]]: frequentists treat parameters as fixed and ask how the data would vary over repeated sampling, while Bayesians treat the observed data as fixed and describe...
- [[Why the posterior is proportional to likelihood times prior]]: Bayes' theorem divides likelihood times prior by a constant that doesn't involve the parameters, so the shape of the posterior is fixed by likelihood times...
- [[How to choose a prior]]: choose a prior by matching its support to the parameter, setting its width from what is physically or biologically plausible on the model's scale, checking...
- [[Proper vs Improper Prior]]: a proper prior integrates to 1 and always yields a valid posterior, whereas an improper prior has infinite area and gives a valid posterior only if the data...
- [[Data Model, Process Model and Parameter Model]]: a hierarchical model separates how nature behaves (process), how we observe it (data) and what we assumed beforehand (parameters), and the posterior is...
- [[How MCMC turns a formula into a posterior]]: MCMC needs only the ability to compute likelihood times prior at any parameter value, and by proposing moves and accepting them according to ratios of that...
- [[How to check an MCMC fit]]: before reading any estimate from a Bayesian fit, confirm that the chains agree (R-hat), that there are enough effective draws (ESS), that trace plots look...
- [[Confidence vs Credible Interval]]: a confidence interval is produced by a procedure that captures the true value in 95% of repeated studies, whereas a credible interval is a range that holds...
- [[Equal-tailed vs Highest Density Interval]]: both are 95% credible intervals, but the equal-tailed interval cuts 2.5% from each end while the highest density interval is the narrowest stretch holding...
- [[Prior Predictive vs Posterior Predictive Check]]: a prior predictive check simulates data from the priors alone to test whether your assumptions are sensible before fitting, and a posterior predictive check...
- [[JAGS vs Stan]]: JAGS samples with Gibbs-type updates and handles discrete latent variables directly, while Stan uses Hamiltonian Monte Carlo, which is far more efficient...
- [[Bayesian Linear Regression in R]]: a Bayesian regression in R follows a fixed sequence: explore and standardise, choose and test priors, fit with `brm()`, check the sampler, check the model,...
- [[lme4 vs brms]]: lme4 and brms fit the same mixed models with the same formula language, but lme4 gives point estimates with approximate tests while brms gives full...
- [[Bayesian Mixed Model Workflow in R]]: a Bayesian mixed model workflow goes from the design and a simulated prior predictive check, through fitting with brms, to convergence checks, posterior...
- [[Joint, Marginal and Conditional Probability]]: a joint probability is the chance that two things happen together, a marginal probability is the chance of one thing whatever the other does, and a...

## Related MOCs
[[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]] · [[MOC 21 - Course Readings|MOC - Course Readings]] · [[Start Here]]
