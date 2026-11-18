---
type: atomic
tags:
  - stan
  - flashcards/eco/stan
description: "Brms translates a model formula into a full Stan program, which you can print with `make_stancode()` to see exactly what model and priors it fits."
aliases:
  - "make_stancode()"
  - "stancode()"
  - "make_standata()"
  - "Reading brms Stan code"
status: seedling
---

# brms-generated Stan Code

brms translates a model formula into a full Stan program, which you can print with `make_stancode()` to see exactly what model and priors it fits ([[brms]], [[Stan Program Blocks]]). `make_stancode(formula, data, family, prior)` prints the Stan code without fitting, and `make_standata()` shows the data list brms would pass. You will see a [[Model Matrix|design matrix]] X, centred [[Predictor Variable|predictors]], non-centred [[Random Effect|random effects]] (`z_1`, `r_1_1`) and default priors such as student_t(3, ...) on intercepts and SDs ([[Non-centered Parameterization]], [[Default Priors in brms]]).

Use it to learn Stan from models you already understand, and to start a custom model by copying and editing. In the code below brms writes 62 lines of Stan for the `sleepstudy` random-intercept model `Reaction ~ Days + (1 | Subject)` ([[Random Intercepts in Stan]]).

It is used in the Stan labs ([[Course Website]]). brms does not use a different engine; it writes and runs Stan.

```r
code <- brms::make_stancode(Reaction ~ Days + (1 | Subject), data = lme4::sleepstudy)
length(strsplit(code, "\n")[[1]])   # lines of Stan written for you
```

## Connections
- **Builds on:** [[brms]], [[Stan Program Blocks]], [[Model Matrix]], [[Predictor Variable]], [[Random Effect]]
- **Leads to:** [[Non-centered Parameterization]], [[Default Priors in brms]]
- **Part of:** [[MOC 17 - Stan|MOC - Stan]], molecular note [[Stan vs brms vs JAGS]]

## Flashcards

Which brms function prints the Stan code for a model?
??
make_stancode().
++++
