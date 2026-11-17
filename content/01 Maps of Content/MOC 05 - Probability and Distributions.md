---
type: moc
tags:
  - moc
  - distributions
aliases:
  - "MOC - Probability and Distributions"
status: seedling
---

# MOC 05 - Probability and Distributions

Units 0 and 4 (Sep 1, 3): the language of randomness, and the probability distributions that describe how ecological data scatter. Readings: Hobbs and Hooten 2015 Ch3.

## 1. The rules of probability
- [[Probability]]: A probability is a number between 0 and 1 that says how likely something is, with 0 meaning impossible and 1 meaning certain.
- [[Sample Space]]: The sample space is the complete list of outcomes that could possibly occur in a random process.
- [[Event]]: An event is any collection of outcomes from the sample space that you might ask the probability of.
- [[Joint Probability]]: A joint probability is the probability that two things are both true at once.
- [[Conditional Probability]]: A conditional probability is the probability of one thing given that another is known to be true.
- [[Marginal Probability]]: A marginal probability is the probability of one thing on its own, found by adding up its joint probabilities over every possibility for the other thing.
- [[Independent Events]]: Two events are independent when knowing that one happened doesn't change the probability of the other.
- [[Conditional Independence]]: Two things are conditionally independent when they are unrelated once you know the value of a third thing, even if they look related otherwise.
- [[Disjoint Events]]: Two events are disjoint when they cannot both happen.
- [[Union of Events]]: The union of two events is the event that at least one of them happens.
- [[Law of Total Probability]]: The law of total probability finds the overall probability of an event by splitting the world into separate cases, finding the event's probability in each...
- [[Chain Rule of Probability]]: The chain rule of probability writes the joint probability of several things as a product of conditional probabilities, one link at a time.
- [[Law of Large Numbers]]: The law of large numbers says that the average of many independent observations settles ever closer to the true mean as the number of observations grows.

## 2. Random variables and their distributions
- [[Random Variable]]: A random variable is a quantity whose value is a number determined by chance, described by the probabilities of the values it can take.
- [[Discrete Random Variable]]: A discrete random variable can take only separate, listable values, such as the whole numbers 0, 1, 2 and so on.
- [[Continuous Random Variable]]: A continuous random variable can take any value within a range, with no gaps between possible values.
- [[Probability Distribution]]: A probability distribution is the complete description of a random variable: which values it can take and how probability is spread across them.
- [[Probability Mass Function]]: A probability mass function gives, for each value a discrete random variable can take, the probability that it takes exactly that value.
- [[Probability Density Function]]: A probability density function is a curve for a continuous random variable, drawn so that the area under it between two values is the probability of landing...
- [[Probability Density]]: Probability density is the height of a density curve at a point: probability per unit of the variable's scale near that point.
- [[Cumulative Distribution Function]]: The cumulative distribution function gives the probability that a random variable is less than or equal to a chosen value.
- [[Quantile Function]]: The quantile function answers the reverse question to the CDF: given a probability, which value has that much probability below it?
- [[Support of a Distribution]]: The support of a distribution is the set of values it can produce, meaning the values with non-zero probability or density.
- [[Expected Value]]: The expected value of a random variable is its long-run average: each possible value weighted by its probability and added up.
- [[Moments of a Distribution]]: The moments of a distribution are summary numbers that describe its shape, the first being its mean and the second central moment its variance.
- [[Moment Matching]]: Moment matching finds the parameters of a distribution that give it a mean and variance you have chosen.
- [[Distribution Parameters]]: Distribution parameters are the few numbers that pick out one specific member of a distribution family by setting where it sits, how wide it is and what...
- [[Mixture Distribution]]: A mixture distribution describes data that come from two or more different distributions blended together in some proportions.
- [[Central Limit Theorem]]: The central limit theorem says that the average (or sum) of many independent random quantities has a distribution close to normal, whatever distribution the...
- [[Exponential Family]]: The exponential family is a group of distributions, including the normal, Poisson, binomial and gamma, that share one mathematical form and can therefore...
- [[Multivariate Distribution]]: A multivariate distribution describes several random variables at once, including how they vary together.

## 3. Continuous distributions
- [[Normal Distribution]]: The normal distribution is the symmetric bell-shaped distribution for continuous values, fixed by its mean (the centre) and its standard deviation (the width).
- [[Standard Normal Distribution]]: The standard normal distribution is the normal distribution with mean 0 and standard deviation 1, the reference scale on which values are counted in...
- [[Lognormal Distribution]]: The lognormal distribution describes a positive quantity whose logarithm is normally distributed, giving a right-skewed shape with a long upper tail.
- [[Gamma Distribution]]: The gamma distribution is a flexible right-skewed distribution for positive continuous quantities, set by a shape and a rate.
- [[Exponential Distribution]]: The exponential distribution describes the waiting time until the next event when events happen at random at a constant average rate.
- [[Beta Distribution]]: The beta distribution is a distribution for quantities that lie between 0 and 1, such as probabilities and proportions, with two parameters that set its shape.
- [[Uniform Distribution]]: The uniform distribution spreads probability evenly over an interval, so every value between its lower and upper limit is equally likely.
- [[Inverse Gamma Distribution]]: The inverse gamma distribution is the distribution of one divided by a gamma-distributed quantity, traditionally used as a prior for variances.
- [[Student t Distribution]]: The Student t distribution looks like a normal curve with heavier tails, and it describes an estimate divided by its estimated standard error when the...
- [[Chi-square Distribution]]: The chi-square distribution is the distribution of a sum of squared standard normal values, and it is the yardstick for sums of squared discrepancies.
- [[F Distribution]]: The F distribution describes the ratio of two independent variance estimates, and is used to judge whether one source of variation is larger than another.

## 4. Discrete distributions
- [[Bernoulli Trial]]: A Bernoulli trial is a single random event with exactly two possible results, called success and failure, where success has probability p.
- [[Bernoulli Distribution]]: The Bernoulli distribution is the distribution of a single yes/no outcome: it gives 1 with probability p and 0 with probability 1 − p.
- [[Binomial Distribution]]: The binomial distribution gives the probability of each possible number of successes in a fixed number of independent yes/no trials that all share the same...
- [[Poisson Distribution]]: The Poisson distribution gives the probability of each possible count of events in a fixed amount of time or space when events occur independently at a...
- [[Negative Binomial Distribution]]: The negative binomial distribution is a distribution for counts that allows the variance to be larger than the mean, using one extra parameter to set how...
- [[Geometric Distribution]]: The geometric distribution gives the probability of each possible number of failures before the first success in a run of independent yes/no trials.
- [[Multinomial Distribution]]: The multinomial distribution gives the probability of each possible set of counts when n independent trials each fall into one of several categories with...
- [[Dirichlet Distribution]]: The Dirichlet distribution is a distribution over a whole set of proportions that must add up to 1, such as the shares of a diet made up by each prey type.
- [[Multivariate Normal Distribution]]: The multivariate normal distribution is the normal distribution extended to several variables at once, described by a vector of means and a matrix of...
- [[Truncated Distribution]]: A truncated distribution is an ordinary distribution with part of its range cut off and the remaining probabilities scaled up so that they again total 1.

## 5. Properties that guide the choice
- [[Gamma Function]]: The gamma function is the factorial extended to numbers that aren't whole, with Γ(n) = (n − 1)! for whole n.
- [[Mean-Variance Relationship]]: The mean-variance relationship of a distribution is the rule that says how its variance changes as its mean changes.
- [[Dispersion Parameter]]: A dispersion parameter is a number in a distribution or model that scales how much the data vary around the mean, separately from the mean itself.
- [[Choosing a Distribution for Your Response]]: Choosing a distribution means picking the probability distribution whose possible values and mean-variance behaviour match the kind of data your response is.

## Related molecular notes
- [[Why the response type decides the distribution]]: the kind of numbers a response can take (any real value, positive values, counts, 0/1, proportions) limits which probability distributions can describe it,...
- [[Poisson vs Negative Binomial]]: both model counts with a log link and give the same kind of coefficients, but the Poisson forces the variance to equal the mean while the negative binomial...
- [[Binomial vs Beta for Proportions]]: a proportion that is a count of successes out of a known number of trials is binomial, while a proportion that is a continuous fraction with no count behind...
- [[Why the response type decides the distribution]]: the kind of numbers a response can take (any real value, positive values, counts, 0/1, proportions) limits which probability distributions can describe it,...
- [[PMF vs PDF]]: a probability mass function gives the actual probability of each value of a discrete random variable, while a probability density function gives a density...
- [[Joint, Marginal and Conditional Probability]]: a joint probability is the chance that two things happen together, a marginal probability is the chance of one thing whatever the other does, and a...
- [[Independent vs Disjoint Events]]: disjoint events cannot happen together, while independent events do not affect each other's chances, so two disjoint events with any chance of happening are...
- [[Binomial vs Poisson]]: the binomial counts successes out of a known number of trials and cannot exceed that number, while the Poisson counts events with no fixed upper limit; the...
- [[Probability vs Likelihood]]: probability fixes the parameters and asks how likely different data are, while likelihood fixes the observed data and asks how well different parameter...

## Related MOCs
[[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]] · [[MOC 21 - Course Readings|MOC - Course Readings]] · [[Start Here]]
