---
type: atomic
tags:
  - survey-design
  - field-methods
  - monitoring
  - flashcards
aliases:
  - "BBS"
  - "North American Breeding Bird Survey"
  - "BBS protocol"
status: seedling
---

# Breeding Bird Survey
**In one line:** A continent-wide volunteer program, running since 1966, in which the same roadside routes are counted the same way every June, so bird population trends can be tracked over decades.

> [!info] Before this, it helps to know
> [[Point Count Survey]] (the basic counting method) · [[Roadside Surveys]] (the BBS is one)

## Start from zero
Suppose you want to know whether meadowlarks are becoming rarer. Counting them once tells you nothing about change. You need the **same count, done the same way, in the same places, year after year**.

That is what the North American Breeding Bird Survey (BBS) does. Skilled volunteer birders each own a route along back roads. Once each breeding season they drive it, stopping at fixed stops, and count every bird seen or heard for a few minutes. The rules are strict: start time, count length, weather limits. Strict rules mean this year's count can be compared with last year's.

## Why it exists
By the 1960s people worried that pesticides such as DDT were harming birds, and there was no large-scale record to test it. The BBS began in **1966** to fill that gap. It is now run jointly by the U.S. Geological Survey and the Canadian Wildlife Service.

Its value is **standardisation over time**. Any one count is noisy: a windy morning, a new observer. But thousands of routes over decades average much of that noise away. The BBS is a main data source behind the alarm about [[Grassland Bird Decline]], including the estimate that North America has lost about 3 billion birds since 1970 ([[Rosenberg et al. 2019]]).

Its standard rules also became a **shared language**. Other studies borrow the BBS weather codes and timing rules so their counts are made under comparable conditions.

> [!warning] Verify
> Commonly cited BBS design details: routes about 24.5 miles (39.4 km) long, 50 stops about 0.5 mile (800 m) apart, 3-minute counts, starting about 30 minutes before sunrise, once a year in peak breeding season, more than 4,000 routes in total. These are well known but check the official protocol (Sauer et al. 2017 is the citation the data release uses) before quoting exact numbers. Likewise, the Rosenberg et al. (2019) headline figures (roughly 2.9 to 3 billion birds lost since 1970; grassland birds down by about 53%) should be checked against the paper before quoting.

## A tiny example
Why standard weather rules matter. Two made-up counts at the same stop:

| Morning | Wind (Beaufort) | Species heard |
|---|---|---|
| Calm | 0 | 8 |
| Breezy | 4 | 5 |

Did 3 species leave? Probably not. Wind rustles grass and masks song, so [[Detection Probability]] drops. That is why the BBS (and my data) skip mornings that are too windy or rainy, and record wind and sky so the rest can be accounted for ([[Why include wind and sky]]).

## In my project
My data were not part of the BBS, but they follow its rulebook ([[Roberts et al. 2025]], citing Sauer et al. 2017):
- Counts ran from **30 minutes before sunrise to 5 hours after sunrise**.
- Only on days with **wind under 19.3 km/h** (12 mph, which is the top of Beaufort force 3) and **no precipitation**.
- **Wind** was recorded on the Beaufort scale and **sky** with the BBS sky codes (0 clear, 1 partly cloudy, 2 cloudy or overcast, 4 fog or smoke, 5 drizzle, 7 snow, 8 showers). In my file Wind runs 0 to 3 and Sky 0 to 5.
- The metadata says focal species were recorded within 100 m during **three-minute** counts, the same length as a BBS stop. Whether every species was counted for the same duration is worth confirming ([[Open Questions]]).

So my `Wind` and `Sky` columns are BBS codes. They enter my model as [[Detection Covariates|detection covariates]].

## Common confusions
- **"BBS counts are population sizes."** They are indexes: birds detected per route, not birds present ([[Imperfect Detection]]).
- **"Sky codes are amounts."** They are labels for categories: code 4 (fog) is not "twice" code 2 (cloudy). My scripts currently treat Sky as a number; whether to treat it as categories instead ([[Factors]]) is an open question ([[Why include wind and sky]]).
- **"BBS is the same as my study."** Same rules, different purpose: BBS tracks trends across a continent; my study compares points within five Arkansas sites.

## Connections
- **Builds on:** [[Point Count Survey]], [[Roadside Surveys]], [[Detection Probability]]
- **Leads to:** [[Grassland Bird Decline]], [[Why include wind and sky]], [[Detection Covariates]]
- **Part of:** [[MOC 26 - Survey Design and Detection|MOC - Survey Design and Detection]]
- **Go deeper:** [[Rosenberg et al. 2019]] (continental losses estimated partly from BBS data)

> [!question]- Check yourself
> Why do studies that are not part of the BBS still copy its weather and timing rules?
> ?
> Weather and time of day change how many birds are detected. Using the same standard limits and codes keeps counts comparable across days, observers and studies, and lets the recorded wind and sky be used as detection covariates.
