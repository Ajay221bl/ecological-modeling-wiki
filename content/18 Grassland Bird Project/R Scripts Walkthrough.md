---
type: project
tags:
  - project
  - grassland-bird-richness
  - r
aliases:
  - "Code walkthrough"
  - "Script walkthrough"
status: seedling
---

# R Scripts Walkthrough

> [!summary] In plain words
> My project has two R scripts. The first (Wrangling) reads the bird file and the habitat file, cleans them, and builds one row per survey visit with two species counts and the habitat around the point. The second (Analysis) runs the first, explores the numbers, fits six competing models for each count, ranks them by AIC, checks the best one, and saves 4 tables and 5 figures. This note walks through the code chunk by chunk for someone who has never used R.

The scripts are `GrasslandBirdRichness_Wrangling.R` and `GrasslandBirdRichness_Analysis.R`. Both follow Dr. Roberts' PineRidgeFireLegacies style: banner header, `#===` section dividers, `librarian::shelf()`, `here()` paths ([[Wrangling vs Analysis Scripts]], [[Why a reproducible project structure matters]]).

> [!success] Status (Oct 13): the code runs
> Both scripts ran start to finish in ajay's RStudio on **Oct 13, 2026**, and every AIC and estimate matched Claude's earlier cloud test. The numbers they produce are in [[Preliminary Results]]. R is not installed in Claude's normal environment, so any change to the code shown here still needs a run in RStudio to confirm it.

## R in 60 seconds (read this first)
- **A script** is a text file of instructions R runs from top to bottom.
- **`#` starts a comment.** R ignores everything after `#` on a line. The `####` banners and `#====` dividers are just comments used as headings.
- **`<-` means "store this under this name".** `DataPath <- "GrasslandBirdRichness_Data"` puts that text into a box labelled `DataPath`. The box is an **object** ([[R Objects and Assignment]]).
- **A function** is a named action, written `name(...)`. The things inside the brackets are its **arguments**: the inputs and settings. `mean(c(5, 7, 6))` gives 6 ([[Functions and Arguments]]).
- **A package** is a bundle of extra functions someone else wrote, such as tidyverse or lme4 ([[R Packages]]).
- **A data frame** is R's name for a table: rows and named columns ([[Data Frames]]).
- **`%>%` is the pipe**, read it as "then". `rawDat %>% filter(...)` means "take rawDat, then filter it" ([[Pipe]]).
- **`$` picks one part by name:** `datClean$Site` is the Site column.
- **A factor** is a column of categories (like site codes) that R treats as groups ([[Factors]]).
- A command can run over several lines; R keeps reading until the brackets close.

## Before you press Source: open the project the right way
Every file path in both scripts is built with `here()`, which starts from the folder holding `GrasslandBirdRichness.Rproj` ([[here()]], [[RProject]]). If RStudio was opened some other way (for example by double-clicking a script), `here()` may start from the wrong folder. Ajay hit exactly this: an error saying a path like `…/Users/ajaydeep/GrasslandBirdRichness_Data/…` "does not exist".

The fix: **File > Open Project > GrasslandBirdRichness.Rproj**, check that the project name shows at the top right of RStudio, **Session > Restart R**, then Source the Analysis script. Typing `here::here()` in the Console should print the project folder. The README gives the same instruction ([[README Data Dictionary]]).

## Wrangling.R
Its job: turn 7,742 detection rows plus a habitat file into **1,130 point-visits at 376 points**, each with two richness counts and standardized habitat values.

**Header comments.** A banner title, a "Purpose" paragraph and a "Citation" paragraph naming the USGS data release ([[Roberts et al. 2025]]). All comments, nothing runs.

**Preparations: make sure librarian is installed** ([[librarian shelf()]]):
```r
list.of.packages <- c("librarian")
new.packages <- list.of.packages[!(list.of.packages %in% installed.packages()[,"Package"])]
if(length(new.packages)) install.packages(new.packages)
require(librarian, quietly = TRUE)
```
- `c()` combines items into a vector; here it holds one name, "librarian".
- `installed.packages()[,"Package"]` is the names of packages already on this computer. `%in%` asks "is it in that list?"; `!` flips TRUE and FALSE. So `new.packages` holds the names that are *not* installed yet.
- `if(length(new.packages))` installs librarian only if that list is not empty. `require()` then loads it; `quietly = TRUE` hides start-up messages.

**Load the other packages and set names:**
```r
shelf(tidyverse,
      here,
      lib = tempdir(),
      quiet = TRUE)

DataPath <- "GrasslandBirdRichness_Data"
focalSpecies <- c("DICK", "NOBO", "EAME", "STFL", "EAKI", "LOSH")
```
`shelf()` installs (if needed) and loads each package. **tidyverse** is a family of packages for reading, cleaning and plotting data; **here** builds file paths. `DataPath` stores the data folder's name so later lines can reuse it. `focalSpecies` stores the six focal grassland species of [[Berry et al. 2026]] as [[Four-Letter Species Codes]] ([[Focal Species]], [[Dickcissel]], [[Northern Bobwhite]]).

**Load both data files** ([[here()]], [[Dataset]]):
```r
rawDat <-
  read_csv(here(DataPath, "SSP_AllBirdData_NewPointNums_NAOMIT.csv"))

habDat <-
  read_csv(here(DataPath, "FieldVeg50m_RemoteVeg_JUNMASK_forDataRelease.csv"))
```
Read from the inside out. `here(DataPath, "....csv")` builds the full path from the project folder. `read_csv()` reads the file into a data frame. `rawDat` is the bird file (one row = one species at one visit); `habDat` is the habitat file (one row = one survey point).

**Have a look:** `str(rawDat)` shows the structure (rows, column names and types, a few values) and `sort(unique(rawDat$PtNum))` lists each point ID once. They print and change nothing.

**Trim stray spaces and get Site** ([[str_trim()]]):
```r
rawDat <-
  rawDat %>%
  mutate(SpeciesCode = str_trim(SpeciesCode),
         Obs = str_trim(Obs),
         Site = str_extract(PtNum, "^[A-Za-z]+"))
```
"Take rawDat, then change some columns." `mutate()` adds or changes columns. `str_trim()` cuts spaces off the start and end of text, so `" FISP"` becomes `"FISP"` and Field Sparrow is no longer counted as two species (the raw file shows 91 codes; 89 are real). It does the same for the observer code `"EAL "`. `str_extract()` pulls out the part of the text matching a pattern: `^[A-Za-z]+` means "one or more letters at the very start", so `"BK1001"` gives `"BK"`.

**Keep ground detections only** ([[Why exclude fly-overs]], [[Fly-over Detections]], [[Distance Bands]]):
```r
groundDat <-
  rawDat %>%
  mutate(GroundCount = coalesce(Dist_50, 0) + coalesce(Dist_100, 0) +
           coalesce(Dist_400, 0)) %>%
  filter(GroundCount > 0)
```
- `GroundCount` adds up the birds of that species counted in the three distance bands (within 50 m, 50 to 100 m, 100 to 400 m), so it is the number seen *on the ground*.
- `coalesce(Dist_50, 0)` means "use Dist_50, but if it is empty (NA) use 0". This matters because Dist_50 has one missing value, and in R anything plus NA is NA, so that row would vanish from the sum.
- `filter(GroundCount > 0)` keeps a row only if at least one bird was on the ground. A species seen *only* flying over is dropped; a species seen on the ground *and* flying over is kept. (The old filter, `FlyOver == 0`, wrongly dropped 90 such mixed rows.)

**List every visit with its weather** ([[Detection Covariates]], [[Why include wind and sky]], [[group_by and summarize]]):
```r
visitDat <-
  rawDat %>%
  group_by(PtNum, Site, Date, Survey) %>%
  summarize(Wind = first(Wind),
            Sky = first(Sky),
            .groups = "drop")
```
`group_by()` sorts rows into piles, one pile per point-visit (same point, date and survey round). `summarize()` boils each pile down to one row, keeping the first Wind and Sky value; that is safe because weather is recorded once per visit. It starts from `rawDat`, *before* the ground filter, so a visit where every bird was a fly-over still appears. `.groups = "drop"` removes the grouping afterwards. This is the list of every visit that happened: 1,250 of them ([[Why the point-visit is the sampling unit]]).

**Count species per visit** ([[Species Richness]]):
```r
richnessSum <-
  groundDat %>%
  group_by(PtNum, Date, Survey) %>%
  summarize(Richness = n_distinct(SpeciesCode),
            FocalRichness = n_distinct(SpeciesCode[SpeciesCode %in% focalSpecies]),
            .groups = "drop")
```
Same piles, but from the ground detections. `n_distinct(SpeciesCode)` counts how many *different* codes are in the pile: DICK, DICK, NOBO gives 2. For `FocalRichness`, `SpeciesCode %in% focalSpecies` marks which codes are focal species, the square brackets `[ ]` keep only those, and `n_distinct()` counts them. So focal richness can be 0 to 6; in my data it is 0 to 3.

**Join richness onto the visit list, keeping zeros:**
```r
birdVisits <-
  left_join(visitDat, richnessSum, by = c("PtNum", "Date", "Survey")) %>%
  mutate(Richness = replace_na(Richness, 0),
         FocalRichness = replace_na(FocalRichness, 0),
         Date = as.Date(Date, format = "%m/%d/%Y"),
         Year = as.numeric(format(Date, "%Y")))
```
`left_join()` glues two tables side by side, matching rows by point, date and survey. "Left" means every row of the first table (`visitDat`, all 1,250 visits) is kept. A fly-over-only visit has no row in `richnessSum`, so its Richness comes out as NA; `replace_na(..., 0)` turns that into 0. That is the honest answer: the point was surveyed and no species was on the ground. For example, HO55 on Jun 20, 2022 stays in with richness 0. (The old script started the join from the richness table, which silently dropped the 2 fly-over-only visits.) `as.Date()` turns text like "6/24/2022" into a real date using the pattern month/day/4-digit year, and `Year` takes the year from it.

**Sanity check:** `nrow(birdVisits)` and `n_distinct(birdVisits$PtNum)` should print **1,250** and **416**.

**Tidy the habitat file** ([[Spatial Covariance]], [[Moving Window Analysis]], [[Percent Cover]]):
```r
habClean <-
  habDat %>%
  rename(SpCov3 = `30m_PFG_TRE_3W_22`,
         SpCov9 = `30m_PFG_TRE_9W_22`,
         SpCov27 = `30m_PFG_TRE_27W_22`) %>%
  mutate(Tree50 = WD50 + FO50,
         Scrub50 = SC50) %>%
  select(PtNum, Roadside, latitude, longitude,
         SpCov3, SpCov9, SpCov27, Tree50, Scrub50)
```
- `rename(new = old)` gives columns new names. R names cannot normally start with a digit, so the original names need backticks (`` ` ``) around them; `SpCov3`, `SpCov9` and `SpCov27` are easier to type. They are spatial covariance between grass and tree cover in windows of 3x3, 9x9 and 27x27 pixels (0.81, 7.29 and 65.61 ha) ([[Why the window size is a choice of scale]]).
- `Tree50` adds woodland and forest cover within 50 m; `Scrub50` is scrub cover within 50 m.
- `select()` keeps only the columns named. The field vegetation columns are left out because they are missing at most roadside points ([[Field vs Remote Vegetation Measures]]).

`colSums(is.na(habClean))` then counts the empty cells in each column. Spatial covariance is missing at 39 points where flooded pixels were masked ([[Flood Masking]]).

**Join birds to habitat and keep complete cases** ([[Complete-Case Analysis]]):
```r
datClean <-
  left_join(birdVisits, habClean, by = "PtNum") %>%
  filter(!is.na(SpCov3), !is.na(SpCov9), !is.na(SpCov27),
         !is.na(Tree50), !is.na(Scrub50))
```
Each visit gets its point's habitat values. `!is.na(x)` means "x is not missing", and commas inside `filter()` mean "and". So only visits with all five habitat values survive: **1,130 visits at 376 points**. Every model is fit to these same rows, because AIC can only compare models fit to identical data ([[AIC]]).

**Standardize the habitat columns** ([[Standardizing Predictors]]):
```r
datClean <-
  datClean %>%
  mutate(across(c(SpCov3, SpCov9, SpCov27, Tree50, Scrub50),
                ~ as.numeric(scale(.x)),
                .names = "{.col}_z"),
         Site = factor(Site),
         Survey = factor(Survey))
```
- `across(columns, recipe)` applies the same recipe to each listed column. The recipe `~ as.numeric(scale(.x))` means "for each column `.x`, subtract its mean and divide by its standard deviation". `scale()` returns a one-column matrix, and `as.numeric()` turns it back into a plain column.
- `.names = "{.col}_z"` names each new column after the old one plus `_z`, giving `SpCov3_z`, `SpCov9_z`, `SpCov27_z`, `Tree50_z` and `Scrub50_z`. The originals stay too.
- Now "1 unit" of every habitat predictor means "1 standard deviation", so effects of very different measurements can be compared.
- `factor()` makes Site and Survey categories ([[Factors]], [[Categorical Predictor and Reference Level]]). BK comes first alphabetically, so it becomes the reference property.

**Final checks:** `nrow()`, `n_distinct()` and a `group_by(Site)` count print 1,130 visits, 376 points and the per-site split (BK 94 points, CR 35, DC 93, HB 62, HO 92). `colSums(is.na(datClean))` should show 0 missing in every column the models use.

## Analysis.R
Its job: explore, fit, rank, check, estimate, plot and save.

**Preparations.** The same librarian lines, then `shelf()` loads tidyverse, **lme4** (mixed models), **MuMIn** (model ranking), **performance** (model checks), **DHARMa** (simulated residuals) and here. Three folder names are stored, then:
```r
dir.create(here(ResultsPath), showWarnings = FALSE)
dir.create(here(FiguresPath), showWarnings = FALSE)

source(here("GrasslandBirdRichness_Wrangling.R"))
```
`dir.create()` makes a folder. `write_csv()` and `ggsave()` cannot create folders on their own, so without these lines saving would fail on a fresh copy of the project. `showWarnings = FALSE` keeps it quiet if the folder already exists. `source()` runs the wrangling script top to bottom, so afterwards `datClean` exists here ([[Wrangling vs Analysis Scripts]]).

**Data exploration** ([[Data Exploration]], [[Why explore data before modeling]]):
- `str(datClean)` and `table(datClean$Site)` show the structure and the visits per site.
- Two `hist()` calls draw histograms of Richness and FocalRichness: bars showing how many visits had 0, 1, 2 ... species.
- A mean and variance table by site:
```r
datClean %>%
  group_by(Site) %>%
  summarize(Mean = mean(Richness),
            Variance = var(Richness),
            Ratio = Variance / Mean,
            FocalMean = mean(FocalRichness),
            n = n())
```
For each site: average richness ([[Average (Mean)]]), variance ([[Variance]]), their ratio, average focal richness and the number of visits. A Poisson count expects the ratio to be about 1 ([[Mean-Variance Relationship]]). On the 376-point data the ratios are 0.56 to 0.93, slightly below 1 ([[Underdispersion]]).
- Spearman correlations among the habitat columns, one row per point:
```r
datClean %>%
  distinct(PtNum, SpCov3, SpCov9, SpCov27, Tree50, Scrub50) %>%
  select(-PtNum) %>%
  cor(method = "spearman") %>%
  round(2)
```
`distinct()` keeps one row per point (habitat does not change between visits). `select(-PtNum)` drops the ID column (the minus means "all except"). `cor()` computes correlations; `round(2)` keeps two decimals. The three spatial covariance scales are correlated with each other, which is why each goes in a separate model ([[Collinearity]]).
- A first boxplot of richness by site (explained under "Make plots" below).

**Model selection: the habitat terms**
```r
habTerms <-
  c(M2a_Hab0.81ha  = "SpCov3_z + Tree50_z + Scrub50_z",
    M2b_Hab7.29ha  = "SpCov9_z + Tree50_z + Scrub50_z",
    M2c_Hab65.61ha = "SpCov27_z + Tree50_z + Scrub50_z")
```
A named vector of three pieces of formula text, one per spatial scale. Each says "spatial covariance at this window, plus tree cover, plus scrub cover".

**A home-made function that fits the whole candidate set** ([[Functions and Arguments]], [[Candidate Model Set]], [[glmer()]]):
```r
fitCandidates <- function(response) {

  mods <-
    list(M0_Null     = paste(response, "~ Wind + Sky + (1|PtNum)"),
         M1_Property = paste(response, "~ Site + Wind + Sky + (1|PtNum)"),
         M2a_Hab0.81ha  = paste(response, "~", habTerms["M2a_Hab0.81ha"],  "+ Wind + Sky + (1|PtNum)"),
         M2b_Hab7.29ha  = paste(response, "~", habTerms["M2b_Hab7.29ha"],  "+ Wind + Sky + (1|PtNum)"),
         M2c_Hab65.61ha = paste(response, "~", habTerms["M2c_Hab65.61ha"], "+ Wind + Sky + (1|PtNum)"))
```
- `function(response) { ... }` makes a new function called `fitCandidates` with one argument, `response`. Writing it once and calling it twice means the two responses get exactly the same models.
- `paste()` glues pieces of text together with spaces. With `response = "Richness"`, the M1 line becomes the text `"Richness ~ Site + Wind + Sky + (1|PtNum)"`.
- Read `~` as "is explained by" and `+` as "and also". `(1|PtNum)` gives each point its own baseline: the [[Random Intercept]] ([[Why a random intercept for point]]). Every model has Wind, Sky and the random intercept; they differ only in Site and habitat.
- M0 is the [[Null Model]]; M1 tests property (H1); M2a, M2b and M2c test habitat at three scales (H2) ([[Hypotheses]]).

```r
  fits <-
    lapply(mods, function(f) glmer(as.formula(f), family = "poisson", data = datClean,
                                 control = glmerControl(optimizer = "bobyqa")))
  names(fits) <- names(mods)
```
- `lapply()` means "do the same thing to every item in a list". The thing to do is a tiny unnamed function: for each formula text `f`, `as.formula(f)` turns the text into a real formula, and `glmer()` fits a Poisson mixed model ([[GLMM]], [[Poisson Distribution]]).
- `control = glmerControl(optimizer = "bobyqa")` picks the search method glmer uses to find the best estimates. The default gave a convergence warning; bobyqa removed it ([[Singular Fits and Convergence Warnings]], [[Maximum Likelihood Estimation]]).
- `names(fits) <- names(mods)` copies the model names onto the fitted models, a harmless safety step.

```r
  habAIC <- sapply(fits[names(habTerms)], AIC)
  bestHab <- names(which.min(habAIC))
  print(paste("Best habitat model for", response, "is", bestHab))

  fits$M3_PropertyHab <-
    glmer(as.formula(paste(response, "~ Site +", habTerms[bestHab], "+ Wind + Sky + (1|PtNum)")),
          family = "poisson", data = datClean,
          control = glmerControl(optimizer = "bobyqa"))

  return(fits)
}
```
M3 is chosen **automatically**. `sapply(..., AIC)` gets the AIC of the three habitat models, `which.min()` finds the lowest, and `names()` gives its name. M3 is then Site plus that model's habitat terms (H1 and H2 together). `fits$M3_PropertyHab <-` adds it to the list, and `return(fits)` hands back all six. The `print()` line reports the choice: 65.61 ha for all species and 0.81 ha for focal species.

```r
fitsRich <- fitCandidates("Richness")
fitsFocal <- fitCandidates("FocalRichness")
```
Call the function twice: once per response.

**Rank the models** ([[MuMIn model.sel()]], [[AIC]], [[Delta AIC and Akaike Weights]]):
```r
selRich <- model.sel(fitsRich, rank = "AIC")
selFocal <- model.sel(fitsFocal, rank = "AIC")
write_csv(selRich %>% as.data.frame() %>% rownames_to_column("Model"),
          here(ResultsPath, "ModelSelection_Richness.csv"))
topRich <- fitsRich[[rownames(selRich)[1]]]
topFocal <- fitsFocal[[rownames(selFocal)[1]]]
```
`model.sel()` ranks the six models from lowest AIC (best) to highest. `rank = "AIC"` asks for plain AIC rather than the package default, AICc. `rownames_to_column("Model")` keeps the model names as a real column in the saved CSV (the focal table is saved the same way). The top-ranked name is `rownames(selRich)[1]`, and the double square brackets around it mean "take out the item with this name", which pulls out that fitted model, so the rest of the script always works on whichever model won. For both responses that was M3, with AIC weight 1.00 ([[Preliminary Results]]). `summary()` then prints each top model.

**Diagnostics** ([[Residual Diagnostics]]):
```r
check_overdispersion(topRich)
simRich <- simulateResiduals(fittedModel = topRich, n = 250)
testDispersion(simRich)
png(here(FiguresPath, "DHARMa_Residuals_Richness.png"), width = 8, height = 4.5, units = "in", res = 300)
plot(simRich)
dev.off()
```
(The same lines run for `topFocal`.)
- `check_overdispersion()` compares the spread of the counts with what Poisson expects ([[check_overdispersion()]]). The ratios were 0.66 (all species) and 0.60 (focal): underdispersion, which makes Poisson confidence intervals wider than needed, so the results are conservative.
- `simulateResiduals(n = 250)` makes 250 fake datasets from the fitted model and asks where each real count falls among them ([[DHARMa Simulated Residuals]]). `testDispersion()` tests the spread on those residuals.
- `png(...)`, `plot(...)`, `dev.off()` saves the DHARMa plot: open a PNG file, draw into it, then close it.

```r
ptCoords <- datClean %>% distinct(PtNum, longitude, latitude)
ptCoords <- ptCoords[match(levels(factor(datClean$PtNum)), ptCoords$PtNum), ]

simRichPt <- recalculateResiduals(simRich, group = datClean$PtNum)
testSpatialAutocorrelation(simRichPt, x = ptCoords$longitude, y = ptCoords$latitude)
```
A check for [[Spatial Autocorrelation]]: are neighbouring points (about 400 m apart) more alike than the model expects? `recalculateResiduals(group = ...)` combines each point's visits into one residual per point. `ptCoords` lists one coordinate pair per point, and `match(levels(...))` puts it in the same order as those point groups. `testSpatialAutocorrelation()` then runs a Moran's I test. The result was weak but significant (Moran's I about 0.05 for both responses).

**Estimates from the top models** ([[Interpreting Poisson Coefficients]], [[Confidence Interval]], [[Standard Error]]):
```r
coefTable <- function(fit, response) {
  summary(fit)$coefficients %>%
    as.data.frame() %>%
    rownames_to_column("Covariate") %>%
    mutate(CI_0.025 = Estimate - (`Std. Error` * 1.96),
           CI_0.975 = Estimate + (`Std. Error` * 1.96),
           RateRatio = exp(Estimate),
           RR_0.025 = exp(CI_0.025),
           RR_0.975 = exp(CI_0.975),
           Response = response)
}
```
A second home-made function, with two arguments. It takes a fitted model's estimate table, moves the row names (like "SiteCR") into a column, and adds:
- a **Wald 95% interval**: estimate minus and plus 1.96 standard errors. Backticks let R use the column name `Std. Error`, which has a space.
- **rate ratios**: `exp()` of the estimate and of both interval ends. The model works on the log scale ([[Log Link]], [[Logarithms and Exponents]]), so `exp()` turns a log-scale difference into "times as many species". A rate ratio of 1.40 means 40% more species.

`coefTable(topRich, "All species")` and `coefTable(topFocal, "Focal species")` build both tables, and `bind_rows()` stacks them into `TopModel_Coefficients.csv`. For example, Camp Robinson had 1.40 times the all-species richness of Bald Knob.

```r
ranefVar <-
  bind_rows(as.data.frame(VarCorr(topRich)) %>% mutate(Response = "All species"),
            as.data.frame(VarCorr(topFocal)) %>% mutate(Response = "Focal species"))
```
`VarCorr()` pulls out the random-intercept variance: how much points differ in baseline richness ([[Variance Component]]). This is the H3 test, saved as `TopModel_PointVariance.csv`. It was 0 for all species (a singular fit; R prints `boundary (singular) fit`, a message, not an error) and 0.20 for focal species.

**Make plots** ([[ggplot2 and ggsave()]]). A ggplot is built in layers joined by `+`. Three plots:
1. **Rate-ratio dot plot (`coefPlot`)**: one row per predictor, a dot at the rate ratio and a bar across its interval (`geom_point()`, `geom_errorbar()`), a dashed line at 1 (`geom_vline(xintercept = 1, ...)`) meaning "no change", and `facet_wrap(~ Response, scales = "free_x")` to put all species and focal species side by side, each with its own x-axis. The intercept row is dropped first with `filter(Covariate != "(Intercept)")` (`!=` means "is not").
2. **Richness against spatial covariance (`spcovPlot`)**: `pivot_longer()` stacks Richness and FocalRichness into one column so both can be drawn as panels, `recode()` gives them readable labels, `geom_jitter(height = 0.15, alpha = 0.2)` draws faint, slightly nudged dots so whole-number counts do not pile up, and `geom_smooth(method = "loess")` adds a flexible trend line. It uses the middle window, SpCov9 (7.29 ha).
3. **Boxplot by site (`richnessPlot`)**:
```r
richnessPlot <-
  ggplot(datClean, aes(x = Site, y = Richness)) +
  geom_boxplot(fill = "grey85") +
  geom_jitter(width = 0.15, alpha = 0.3) +
  theme_bw() +
  xlab("Property") +
  ylab("Species richness per point-visit")
```
`aes()` says which column goes on which axis. `geom_boxplot()` draws a box per site (the middle half of the values, with a line at the median). `geom_jitter()` adds every visit as a faint dot nudged sideways. `theme_bw()` gives a plain white background. (The script's version also sets text sizes with `theme()`.)

```r
ggsave(here(FiguresPath, "RichnessBySite_Boxplot.png"),
       plot = richnessPlot, width = 6, height = 4.5, dpi = 300)
```
`ggsave()` writes a plot to a PNG file; `dpi = 300` is print quality. The dot plot and the spatial covariance plot are saved the same way, 9 by 4.5 inches.

## What the scripts produce
- **Results folder (4 CSVs):** ModelSelection_Richness.csv, ModelSelection_FocalRichness.csv, TopModel_Coefficients.csv, TopModel_PointVariance.csv.
- **Figures folder (5 PNGs):** DHARMa_Residuals_Richness.png, DHARMa_Residuals_FocalRichness.png, RichnessBySite_Boxplot.png, TopModel_RateRatios_Dotplot.png, Richness_vs_SpatialCovariance.png.

What the numbers mean: [[Preliminary Results]].

## What is left
- **Project Report code:** nothing to change. Before zipping, do one final clean run: open the .Rproj, Session > Restart R, Source the Analysis script, and confirm all 9 output files are rewritten without errors.
- **Final Draft code:** possible upgrades (a spatial smooth, a less-spread-out count distribution, a Bayesian version) are listed in [[Next Steps]].

## Things to watch when running
- `boundary (singular) fit` for the all-species models is a message, not an error: the point variance is estimated as 0 ([[Singular Fits and Convergence Warnings]]).
- If something fails, read the first error message: it usually names the missing object, package, file or folder. A "does not exist" path almost always means the project was not opened through the .Rproj (see above).

> [!note] History
> The Sep 10 version of these scripts (written for the first proposal) read only the bird CSV, used the old `filter(is.na(FlyOver) | FlyOver == 0)` filter, fit five models (Global, Additive, Site, Weather, Null), and had no Results or Figures folders. It was replaced on Oct 12 to 13 by the code above ([[Decision Log]]).

**Part of:** [[MOC 23 - Grassland Bird Richness Project|MOC - Grassland Bird Richness Project]], [[MOC 12 - Reproducible Coding and Figures|MOC - R and Reproducibility]]
