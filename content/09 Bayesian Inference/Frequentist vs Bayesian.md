---
type: atomic
tags:
  - bayesian-inference
  - statistical-philosophy
  - flashcards
aliases:
  - "Bayesian vs frequentist"
  - "frequentist"
status: seedling
---

# Frequentist vs Bayesian
**In one line:** Two schools of statistics that disagree on one thing: whether "probability" can describe an unknown fixed quantity (Bayesian: yes, as degree of belief) or only repeatable events (frequentist).

> [!info] Before this, it helps to know
> [[Probability]] (the word they disagree about) · [[Sample vs Population]] (frequentists imagine repeated samples) · [[Parameter vs Estimate]] (the unknowns in question)

## Start from zero
I flip a coin and cover it with my hand. What's the probability it's heads?

- A **frequentist** says: the coin has already landed. It *is* heads or it *is* tails. Probability describes what happens over many repeated flips (about half heads), not this one covered coin.
- A **Bayesian** says: I don't know which side is up, so my belief is 50% heads. Probability describes my uncertainty, even about something already fixed.

Both are reasonable. They lead to different tools.

Now replace the coin with "the true average richness at site CR". It's a fixed number we don't know. Can we say "there's a 90% probability it's above 6"? Bayesian: yes. Frequentist: no, but we can say how a procedure behaves over many imagined repeat studies.

## Why it exists
Every model has unknowns. How you talk about them shapes everything downstream.

| | Frequentist (and likelihood) | Bayesian |
|---|---|---|
| Unknown parameter | A fixed but unknown number | A [[Random Variable]] with a distribution of belief |
| What you get | An estimate, [[Standard Error]], [[P-value]], [[Confidence Interval]] | A [[Posterior]] for every unknown |
| Meaning of "95%" | How often the procedure works over imagined repeat studies | Probability the value is in the interval ([[Credible Interval]]) |
| Prior knowledge | Not formally included | Included through a [[Prior]] |
| Typical fitting | [[Maximum Likelihood Estimation]] | [[MCMC]] |

Hobbs and Hooten say the clearest difference is that Bayesian analysis treats all unobserved quantities as random variables ([[Hobbs and Hooten 2015 Ch5]], p. 79; [[Hobbs and Hooten 2015 Ch3]], p. 31). Both use the same [[Likelihood]]; Bayes multiplies by a prior and rescales so the result is a true probability distribution (Ch5, p. 86). They also note all approaches are somewhat subjective, because choosing a likelihood is itself a strong assumption (p. 98).

[[Harrison et al. 2018]]: frequentists work with pairs of nested hypotheses, information theorists with sets of competing models, and Bayesians treat every possible parameter value as a hypothesis (p. 11). Judging differences among levels of a [[Random Effect]] is easier in a Bayesian framework (p. 7).

## A tiny example
You flip a coin 10 times and get 7 heads. Is it biased?
- **Frequentist:** "If the coin were fair, I'd see 7 or more heads (or 3 or fewer) about 34% of the time. That's not unusual, so no evidence of bias." (A [[P-value]] of about 0.34.)
- **Bayesian (flat prior):** "My updated belief puts about 89% probability on the coin favouring heads (more than 50%), but the range of plausible values is wide, roughly 0.4 to 0.9."

Same data, different questions, both honest.

## In my project
The Project Report (due Oct 13) is fully frequentist and information-theoretic: [[glmer()]] fits by maximum likelihood, and models are ranked with [[AIC]] through [[MuMIn model.sel()]]. A Bayesian version of the best model (M3) is option 3 on the Final Draft list (Oct 13), after a spatial GAM and a less-spread distribution ([[How the project could grow into Bayesian and occupancy models]], [[Next Steps]]). The course covers Bayesian model selection on Sep 22, Bayesian mixed models on Oct 13 and 15, and a Stan mixed-models lab on Nov 19.

Neither approach rescues a weak design: Site is fully [[Confounding|confounded]] with year in my data.

## Common confusions
- **Reading a confidence interval as a probability statement about the parameter.** That reading belongs to a credible interval.
- **"Bayesian is subjective, frequentist is objective."** Both involve choices (model, likelihood); Bayes just states one more choice openly.
- **"With lots of data they disagree."** With vague priors and lots of data, the numbers are usually close. The interpretations differ.

## Connections
- **Builds on:** [[Probability]], [[Sample vs Population]], [[Likelihood]], [[Parameter vs Estimate]]
- **Leads to:** [[Credible Interval]], [[Posterior]], [[Prior]]
- **Part of:** [[MOC 09 - Bayesian Inference|MOC - Bayesian Inference]], [[MOC 02 - Modeling Foundations|MOC - Statistical Foundations]]
- **Go deeper:** [[Hobbs and Hooten 2015 Ch5]] (pp. 79-98)

> [!question]- Check yourself
> What single assumption about parameters lets Bayesians make probability statements about them?
> ?
> Bayesians treat every unobserved quantity, including parameters, as a random variable with a probability distribution describing belief. Frequentists treat parameters as fixed, so probability statements apply to data and procedures, not to the parameter itself.
