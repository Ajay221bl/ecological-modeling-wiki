---
type: atomic
tags:
  - survey-design
  - field-methods
  - monitoring
  - flashcards/eco/survey
description: "The North American Breeding Bird Survey (BBS) is a continent-wide volunteer program, running since 1966, in which the same roadside routes are counted the same way every June so bird population trends can be tracked over decades."
aliases:
  - "BBS"
  - "North American Breeding Bird Survey"
  - "BBS protocol"
status: seedling
---

# Breeding Bird Survey

Suppose you want to know whether [[Eastern Meadowlark|meadowlarks]] are becoming rarer. Counting them once tells you nothing about change: you need the same count, done the same way, in the same places, year after year. That is what the North American **Breeding Bird Survey** (BBS) does. Skilled volunteer birders each own a route along back roads, a kind of [[Roadside Surveys|roadside survey]]; once each [[Breeding Season Timing|breeding season]] they drive it, stopping at fixed stops, and do a short [[Point Count Survey]] at each, counting every bird seen or heard. The rules are strict (start time, count length, weather limits) so that this year's count can be compared with last year's. It began in 1966, when people worried that pesticides such as DDT were harming birds and there was no large-scale record to test it, and is now run by the U.S. Geological Survey and the Canadian Wildlife Service.

Its value is standardisation over time. Any one count is noisy (a windy morning, a new observer), but thousands of routes over decades average much of that noise away, so the BBS is a main data source behind the alarm about [[Grassland Bird Decline]], including the estimate that North America has lost about 3 billion birds since 1970 ([[Rosenberg et al. 2019]]). Why are the weather rules so strict? Take two made-up counts at the same stop: on a calm morning (Beaufort wind 0) an observer hears 8 species; on a breezy one (wind 4), 5. Did 3 species leave? Probably not: wind rustles grass and masks song, so the [[Detection Probability]], the chance of noticing a bird that is there, drops. That is why the BBS skips mornings that are too windy or wet and records wind and sky codes, and its rulebook became a shared language that other studies borrow so their counts are made under comparable conditions. Commonly cited design details (routes about 39.4 km long, 50 stops about 800 m apart, 3-minute counts starting about 30 minutes before sunrise, over 4,000 routes) should be checked against the official protocol, Sauer et al. 2017, before quoting.

Three confusions. BBS counts are not population sizes but indexes: birds detected per route, not birds present ([[Imperfect Detection]]). Sky codes are labels, not amounts: code 4 (fog) is not "twice" code 2 (cloudy). And following BBS rules does not make a study part of the BBS. The grassland bird project's data were not BBS data but follow its rulebook ([[Roberts et al. 2025]], citing Sauer et al. 2017): counts ran from 30 minutes before sunrise to 5 hours after, only with wind under 19.3 km/h (12 mph, the top of Beaufort force 3) and no precipitation; wind was recorded on the Beaufort scale and sky with BBS codes (0 clear, 1 partly cloudy, 2 cloudy, 4 fog or smoke, 5 drizzle, 7 snow, 8 showers; in the file Wind runs 0 to 3 and Sky 0 to 5); and [[Focal Species|focal species]] were recorded within 100 m during three-minute counts. So the `Wind` and `Sky` columns are BBS codes, and they enter the model as [[Detection Covariates|detection covariates]] ([[Why include wind and sky]]). The scripts treat Sky as a number; whether to treat it as categories ([[Factors in R]]) is an open question ([[Open Questions]]).

## Connections
- **Builds on:** [[Roadside Surveys]], [[Point Count Survey]], [[Detection Probability]], [[Eastern Meadowlark]], [[Breeding Season Timing]], [[Focal Species]]
- **Leads to:** [[Grassland Bird Decline]], [[Imperfect Detection]], [[Detection Covariates]], [[Factors in R]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]]
- **Go deeper:** [[Why include wind and sky]], [[Open Questions]], [[Rosenberg et al. 2019]], [[Roberts et al. 2025]]

## Flashcards

Why do studies that are not part of the BBS still copy its weather and timing rules?
??
Weather and time of day change how many birds are detected. Using the same standard limits and codes keeps counts comparable across days, observers and studies, and lets the recorded wind and sky be used as detection covariates.
++++

Are BBS counts population sizes?::No. They are indexes of birds detected per route, not birds present.
