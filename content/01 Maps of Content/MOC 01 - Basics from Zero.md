---
type: moc
tags:
  - moc
  - basics
aliases:
  - "MOC - Basics from Zero"
status: seedling
---

# MOC 01 - Basics from Zero

The maths and vocabulary every other note leans on, explained from nothing. If a symbol in another note looks alien, it is explained here.

## 1. Data words
- [[Variable]]: a variable is one kind of thing you record that can come out differently from case to case, such as species richness, wind speed or habitat type.
- [[Observation]]: an observation is one case on which you recorded your variables, such as one survey point on one visit. In a data table it is one row.
- [[Population]]: in statistics, the population is the whole set of things your question is about: every nest, plot or day you want your conclusion to cover.
- [[Sample]]: a sample is the part of the population you actually measured.
- [[Parameter]]: a parameter is a fixed but unknown number that describes a whole population or process, such as the true survival rate of elk in a park.
- [[Estimate]]: an estimate is a number calculated from your sample as a best guess at a parameter. It wears a hat: θ̂ ("theta-hat") is the estimate of θ.
- [[Estimator]]: an estimator is the recipe (a formula or procedure) that turns data into an estimate, such as "add up the values and divide by how many there are".
- [[Continuous Data]]: continuous data can take any value within a range, with no gaps, such as a bird's mass of 21.38 g.
- [[Discrete Data]]: discrete data come in separate steps with gaps between them, usually whole-number counts like 0, 1, 2 nests.
- [[Categorical Variable]]: a categorical variable records which group something belongs to, using names rather than amounts, such as habitat type or observer. R calls it a **factor**,...
- [[Binary Variable]]: a binary variable has only two possible values, such as alive or dead, present or absent, usually coded 1 and 0.
- [[Sample Size]]: sample size, written n, is simply how many independent things you measured, and it controls how much you can trust what the sample tells you.
- [[Ordinal Variable]]: an ordinal variable sorts things into named categories that have a natural order, but the gaps between categories are not known numbers.
- [[Count Data]]: count data are whole numbers, 0, 1, 2 and up, that record how many things or events were seen.
- [[Proportion]]: a proportion is a part divided by its whole, so it always lies between 0 and 1.
- [[Response Variable]]: the response variable is the thing you are trying to explain or predict, written y.
- [[Explanatory Variable]]: an explanatory variable is something you measure because it might explain or predict the response, written x.

## 2. Symbols and arithmetic
- [[Greek Letters and Notation]]: statistics uses a small set of symbols as shorthand: Greek letters stand for unknown true values, ordinary letters stand for data you measured, and a little...
- [[Summation Notation]]: Σ (capital sigma) is shorthand for "add up all of these". Its multiplying twin, ∏, has its own note: Product Notation.
- [[Product Notation]]: ∏ (capital pi) is shorthand for "multiply all of these together", just as Σ means "add all of these up".
- [[Exponent]]: an exponent says how many times to multiply a number by itself: 2³ = 2 × 2 × 2 = 8.
- [[Logarithm]]: a logarithm runs an exponent backwards: it answers "how many times did I multiply to get here?" Since 2³ = 8, the log base 2 of 8 is 3.
- [[Natural Logarithm]]: the natural logarithm, written ln or `log()` in R, is the logarithm with base e ≈ 2.718. It is the log that statistics uses by default.
- [[Exponential Function]]: the exponential function, exp(x) = eˣ, raises e ≈ 2.718 to the power x. It undoes the natural log, and its answer is always positive.
- [[Scientific Notation in R Output]]: R writes very big or very small numbers in "e notation", so `3.2e-05` means 3.2 × 10⁻⁵ = 0.000032, and `< 2e-16` means "smaller than R can usefully show".
- [[Functions in Maths]]: a function is a rule that turns each input into exactly one output, written y = f(x) and read "y equals f of x".
- [[Factorial]]: a factorial, written n! and read "n factorial", multiplies a whole number by every whole number below it down to 1: 4! = 4 × 3 × 2 × 1 = 24. It counts the...
- [[Binomial Coefficient]]: the binomial coefficient $\binom{N}{n}$, read "N choose n", counts how many different groups of n you can pick from N things when order doesn't matter.
- [[Subscripts and Indexing]]: a subscript is a small label under a symbol that says which one you mean, such as y₃ for the third observation.
- [[Absolute Value]]: the absolute value of a number is its distance from zero, ignoring whether it is positive or negative.
- [[Square Root]]: the square root of a number is the value that, multiplied by itself, gives that number back.
- [[Nonlinear Function]]: a nonlinear function is any rule where equal steps in x do not give equal steps in y, so its graph is a curve.
- [[Polynomial]]: a polynomial is a sum of powers of x, such as a + bx + cx², which lets a model bend.
- [[Quadratic Term]]: a quadratic term is an x² added to a model so the response can rise to a peak and fall, or fall to a trough and rise.
- [[Asymptote]]: an asymptote is a level that a curve gets closer and closer to as x keeps growing (or shrinking), without ever settling exactly on it.

## 3. Summaries of data
- [[Mean]]: the mean is the "fair share" value: add all the values up and share the total out equally, one share per value.
- [[Variance]]: variance measures how spread out values are: it's the average of the squared distances of the values from their mean.
- [[Standard Deviation]]: the standard deviation (SD) is the square root of the variance: roughly, the typical distance of a value from the mean, in the data's own units.
- [[Standard Error]]: the standard error (SE) is the standard deviation of an *estimate*: how much your answer would wobble if you repeated the whole study with fresh samples.
- [[Covariance]]: covariance measures whether two variables tend to be above their averages at the same time (positive), in opposite directions (negative), or with no pattern...
- [[Correlation]]: the correlation coefficient r, a number from −1 to +1, measures how tightly two variables follow a straight line together, and whether the line goes up or...
- [[Median]]: the median is the middle value once the data are sorted, so half the observations lie below it and half above.
- [[Mode]]: the mode is the value that occurs most often, or the highest point of a distribution's curve.
- [[Range]]: the range is the distance from the smallest value to the largest, the full stretch the data cover.
- [[Quantile]]: a quantile is the value below which a chosen fraction of the data falls, such as the value with 25% of observations beneath it.
- [[Interquartile Range]]: the interquartile range is the width of the middle half of the data, from the 25% quantile to the 75% quantile.
- [[Coefficient of Variation]]: the coefficient of variation is the standard deviation divided by the mean, so it expresses spread as a fraction of the typical size.
- [[Spearman Rank Correlation]]: Spearman rank correlation measures whether two variables rise together in any steady way, by correlating their ranks instead of their raw values.
- [[Sum of Squares]]: a sum of squares adds up squared distances from some reference, usually the mean or a fitted line, to measure total variation.
- [[Degrees of Freedom]]: degrees of freedom are the number of independent pieces of information left to estimate variability after the data have been used to estimate other things.
- [[Weighted Mean]]: a weighted mean averages values after multiplying each by a weight, Σwᵢxᵢ / Σwᵢ, so some values count more than others.

## 4. Odds
- [[Odds]]: odds are the chance that something happens divided by the chance that it doesn't.
- [[Log Odds]]: log odds are the natural logarithm of the odds, which stretches probabilities from their 0-to-1 box onto the whole number line.
- [[Odds Ratio]]: an odds ratio compares two groups by dividing the odds in one by the odds in the other.

## 5. A little calculus and matrices
- [[Rate of Change]]: a rate of change says how much one quantity changes for each unit change in another.
- [[Proportional To]]: "y is proportional to x" means y equals x times some fixed number, so doubling x doubles y.
- [[Derivative]]: the derivative of a curve at a point is its slope right there, the rate of change at that instant.
- [[Finding a Maximum with Calculus]]: to find the highest point of a smooth curve, look for where its slope is zero.
- [[Integral]]: an integral adds up a continuous curve, giving the area between the curve and the horizontal axis.
- [[Vector]]: a vector is an ordered list of numbers treated as one object.
- [[Matrix]]: a matrix is a rectangular table of numbers with rows and columns, treated as one object.
- [[Matrix Notation for Models]]: matrix notation writes an entire regression, for every observation and every predictor, as the single line y = Xβ + ε.

## 6. Chance and doubt
- [[Uncertainty]]: uncertainty is how much you don't know about a quantity, expressed as the range of values that remain plausible.
- [[Randomness]]: randomness means individual outcomes can't be predicted, even though the long-run pattern of many outcomes can.

## Related molecular notes
- [[Variable and Observation]]: A data table has two directions. Going across, each column is one **variable** (one thing you measured). Going down, each row is one **observation** (one...
- [[Population and Sample]]: The **population** is everything you want to know about; the **sample** is the part you actually measured. Statistics is the craft of saying something...
- [[Parameter vs Estimate]]: A **parameter** is the true, fixed number describing a population, which you almost never see. An **estimate** is your best guess at it from a sample. The...
- [[Continuous vs Discrete Data]]: Data come in kinds. **Continuous** data can take any value in a range (body mass 23.47 g). **Discrete** data come in separate steps, usually counts (3...
- [[Logarithms and Exponents]]: An **exponent** says "multiply this many times"; a **logarithm** asks the reverse question, "how many times was it multiplied?". The **exponential...
- [[Factorials and Binomial Coefficient]]: A **factorial** (n!) counts the ways to put n things in order. The **binomial coefficient** ("N choose n") counts the ways to pick n things from N when...
- [[Probability, Odds and Log Odds]]: probability, odds and log odds are three scales for the same chance: probability runs from 0 to 1, odds p/(1 − p) from 0 to infinity, and log odds from...
- [[What a p-value does and does not tell you]]: a p-value is the probability of getting a test statistic at least as extreme as the one observed if the null hypothesis and all model assumptions were true;...
- [[Statistical vs Biological Significance]]: statistical significance says the data would be surprising if the true effect were zero, while biological significance asks whether the effect is big enough...
- [[Type I and Type II Errors]]: a Type I error rejects a null hypothesis that is actually true (false positive, rate α), and a Type II error fails to reject a null that is false (false...
- [[Why the variance divides by n minus 1]]: the sample variance divides by n − 1 because deviations are measured from the sample mean, which sits closer to the data than the true mean does, so...
- [[Standard Deviation vs Standard Error]]: the standard deviation describes how spread out individual observations are, while the standard error describes how much an estimate such as the mean would...
- [[Mean, Median and Mode]]: the mean is the balance point of the data, the median the middle value, and the mode the most common value; they agree for symmetric single-peaked data, and...
- [[Linear vs Nonlinear Function]]: "linear" in "linear model" means linear in the parameters, not a straight line in x, so y = a + bx + cx² is a linear model, while y = ax / (b + x) is...

## Related MOCs
[[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]] · [[MOC 21 - Course Readings|MOC - Course Readings]] · [[Start Here]]
