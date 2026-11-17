---
type: moc
tags:
  - moc
  - exploration
aliases:
  - "MOC - Data Exploration"
status: seedling
---

# MOC 04 - Data Exploration

Unit 3 (Aug 25, 27): look before you model. Zuur et al. 2010's protocol for catching the problems that quietly ruin models. Readings: Zuur et al. 2010, Zuur et al. 2009 Ch2 and Appendix A.

## 1. The protocol
- [[Data Exploration]]: Data exploration is looking at your data with plots and simple summaries before fitting any model, to catch problems and learn the data's shape.
- [[Data Exploration Protocol]]: The data exploration protocol is Zuur, Ieno and Elphick's eight-step checklist of things to look at before fitting a model.
- [[Data Wrangling]]: Data wrangling is the work of turning raw, messy files into one clean, tidy table ready for plotting and modeling.

## 2. Looking at one variable
- [[Outlier]]: An outlier is an observation that lies far from the bulk of the others.
- [[Cleveland Dot Plot]]: A Cleveland dot plot draws each observation's value along the horizontal axis against its row number in the dataset on the vertical axis.
- [[Boxplot]]: A boxplot summarises a variable with a box from the first to third quartile, a line at the median, whiskers to the most extreme ordinary values and dots for...
- [[Histogram]]: A histogram cuts a variable's range into equal intervals called bins and draws a bar for how many observations fall in each.
- [[Density Plot]]: A density plot is a smoothed histogram: a curve whose height shows where values are concentrated and whose total area is 1.
- [[Violin Plot]]: A violin plot shows a variable's density curve mirrored on both sides of a centre line, one \"violin\" per group.
- [[QQ Plot]]: A QQ plot checks whether data follow a chosen distribution by plotting the data's sorted values against the values that distribution would be expected to give.
- [[Rug Plot]]: A rug plot draws a small tick on the axis at every observed value, showing exactly where the data are.
- [[Line Plot]]: a line plot joins points in order along the x-axis, usually time, so trends and cycles are easy to see.

## 3. Looking at relationships
- [[Scatterplot]]: A scatterplot shows two numeric variables at once by drawing one dot per observation, placed by its value on each axis.
- [[LOESS Smoother]]: A LOESS smoother draws a flexible curve through a scatterplot by fitting many small regressions, each using only the points near one spot.
- [[Pairplot]]: A pairplot is a grid of scatterplots showing every variable plotted against every other.
- [[Coplot]]: A coplot shows the scatterplot of two variables repeated in several panels, each panel using only the observations within one level or slice of a third...
- [[Relationships Between Y and X]]: Checking the relationship between Y and X means plotting the response against each predictor to see what shape, if any, connects them.
- [[Principal Component Analysis]]: principal component analysis turns many correlated variables into a few uncorrelated summary axes (principal components) that capture as much of the...

## 4. Checking assumptions before fitting
- [[Homogeneity of Variance]]: Homogeneity of variance means the scatter of the data around the model's fitted values is the same size everywhere.
- [[Heteroscedasticity]]: Heteroscedasticity means the scatter around the fitted values changes in size, for example growing as the response gets larger.
- [[Normality]]: The normality assumption says that the scatter of the data around the model's fitted values follows a normal, bell-shaped distribution.
- [[Zero Inflation]]: Zero inflation means a dataset has more zeros than the chosen count distribution can produce.
- [[Collinearity]]: Collinearity means two or more predictors carry overlapping information because they are strongly related to each other.
- [[Variance Inflation Factor]]: The variance inflation factor of a predictor says how many times larger the variance of its coefficient is because of that predictor's overlap with the others.
- [[Independence of Observations]]: Observations are independent when knowing the value of one tells you nothing extra about another beyond what the model already says.
- [[Fixed X Assumption]]: The fixed X assumption says the predictor values are known exactly, so all the randomness in the model belongs to the response.
- [[Leverage]]: Leverage measures how far an observation's predictor values lie from the centre of all the predictor values, and so how much power it has to pull the fitted...
- [[Cook's Distance]]: Cook's distance measures how much all of a model's fitted values would change if one observation were deleted.
- [[Bartlett Test]]: Bartlett's test asks whether several groups could all have the same variance.
- [[Balanced Data]]: Data are balanced when every group or combination of groups has the same number of observations.

## 5. Reshaping variables
- [[Transformation]]: A transformation replaces a variable with a mathematical function of itself, such as its logarithm, before analysis.
- [[Log Transformation]]: A log transformation replaces each value with its logarithm, which turns multiplying into adding and pulls large values in.
- [[Square-root Transformation]]: A square-root transformation replaces each value with its square root, a milder squeeze than the log that can be applied to zeros.
- [[Centering]]: Centering a predictor means subtracting its mean from every value, so that zero now stands for \"average\".
- [[Scaling Predictors]]: Scaling a predictor means dividing it by a constant, usually its standard deviation, so that one unit becomes a typical-sized difference.
- [[Standardizing]]: Standardizing a variable means subtracting its mean and dividing by its standard deviation, giving a z-score with mean 0 and standard deviation 1.

## 6. Ecological data types met in the labs
- [[Species Richness]]: Species richness is the number of different species recorded in a sample or place.
- [[Diversity Index]]: A diversity index is a single number summarising a community that grows both with the number of species and with how evenly individuals are shared among them.
- [[Spatial Data in R]]: Spatial data are observations with a location attached, and in R the sf package stores them as a data frame with one extra column holding each row's geometry.
- [[Coordinate Reference System]]: A coordinate reference system is the rule that says which place on Earth a pair of coordinate numbers refers to.
- [[UTM Coordinates]]: UTM coordinates give a location as metres east and metres north within one of 60 north-south strips of the globe.
- [[Presence-Absence Data]]: presence-absence data record whether a species was found (1) or not found (0) at each site or survey, the response for logistic regression, species...

## Related molecular notes
- [[Why explore data before modeling]]: exploring data before fitting catches outliers, unequal variance, excess zeros, collinear predictors, odd relationships and dependence while they can still...
- [[Mean, Median and Mode]]: the mean is the balance point of the data, the median the middle value, and the mode the most common value; they agree for symmetric single-peaked data, and...
- [[Correlation vs Causation]]: two variables can be correlated because one causes the other, because a third variable drives both, by chance, or because of how data were selected, so a...
- [[Which assumption violation leads to which model]]: each way a linear model's assumptions can fail points to a specific extension: the wrong response type to a GLM, unequal variance to variance structures,...
- [[Transform the data or change the model]]: transforming the response (log, square root) can fix skew and unequal variance but changes what the model estimates and struggles with zeros, while changing...
- [[Why explore data before modeling]]: exploring data before fitting catches outliers, unequal variance, excess zeros, collinear predictors, odd relationships and dependence while they can still...
- [[Why collinearity inflates standard errors]]: when predictors are strongly correlated, the data contain little information about what each does on its own, so the model cannot separate their effects;...
- [[Outlier, Leverage and Influence]]: an outlier is a point far from the others or from the fitted line in y, a high-leverage point has an unusual x value, and an influential point changes the...
- [[Centering, Scaling and Standardizing]]: centering subtracts the mean so zero means "average", scaling divides by the standard deviation (or two) so units become comparable, and standardizing does...

## Related MOCs
[[MOC 20 - Why We Do It This Way|MOC - Why We Do It This Way]] · [[MOC 21 - Course Readings|MOC - Course Readings]] · [[Start Here]]
