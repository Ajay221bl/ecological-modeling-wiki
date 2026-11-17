---
type: atomic
tags:
  - ecology
  - flashcards/eco/ecology
description: "A temperature anomaly is how much warmer or colder a period was than a fixed long-run average for the same place and season, so 0 means \"normal\", positive means warmer and negative cooler."
aliases:
  - "SST anomaly"
  - "Sea surface temperature anomaly"
  - "Anomaly (climate)"
  - "Climate anomaly"
status: seedling
---

# Temperature Anomaly

"It was 30 °C today" means little until you know whether it was July in Texas or March in Maine. "It was 5 degrees above normal" means the same thing everywhere. A **temperature anomaly** is how much warmer or colder a period was than a fixed long-run average for the same place and season, the baseline. In Homework 2 the baseline is the average Caribbean sea surface temperature for August to October over 1961 to 1990, so SST = 0.5 means that year's late-summer water was half a degree warmer than that average, and SST = −0.3 means 0.3 degrees cooler.

Climate scientists use anomalies for two reasons. They take out the regular seasonal and local differences, so places and years can be compared directly, and they put the number that matters, the departure from normal, front and centre. Corals are adapted to their normal temperature, so it is the departure that stresses them, not the absolute temperature ([[Coral Bleaching]]).

For a model, an anomaly is just a centred predictor whose zero has a meaning: the intercept is the expected response in an average year ([[Centering]], [[Intercept]]). It can be negative, so it cannot be log-transformed, and its baseline period must be reported, because a different baseline shifts every value by a constant.

```r
sst <- c(26.9, 27.4, 27.1, 28.0, 27.6)        # five late-summer means, degrees C
baseline <- 27.2                              # long-run average for the same months
round(sst - baseline, 2)                      # the anomalies
```

## Connections
- **Builds on:** [[Centering]], [[Intercept]]
- **Leads to:** [[Coral Bleaching]]
- **Part of:** [[MOC 19 - Ecology Vocabulary|MOC - Ecology Vocabulary]], molecular note [[Homework 2 - Coral Bleaching]]

## Flashcards

What is a temperature anomaly?
??
The difference between a period's temperature and a fixed long-run average for the same place and season.
++++

What does SST = 0 mean in Homework 2?
??
The water was exactly at the 1961 to 1990 August to October average.
++++

Why do climate studies use anomalies?
??
They remove regular seasonal and local differences and show the departure from normal, which is what stresses organisms.
++++
