---
type: atomic
tags:
  - popest
  - flashcards/eco/popest
description: "A camera trap is a motion- or heat-triggered camera left at a site that photographs animals passing by, giving dated detections that can be grouped into occupancy visits."
aliases:
  - "Camera traps"
  - "Trail camera"
  - "Remote camera"
  - "Motion-sensing camera"
  - "Camera trapping"
status: seedling
---

# Camera Trap

A doorbell camera tells you which neighbours walked past while you were out. A **camera trap** is a motion- or heat-triggered camera left at a site that photographs animals passing by, giving time-stamped detections that can be grouped into occupancy visits ([[Occupancy]], [[Detection History]]). The guest lecture calls them "increasingly common" and says they fit "very well into the occupancy framework": they run for long periods on lithium batteries and large memory cards, and the "periods are user defined", meaning you decide afterwards how to cut the deployment into occasions. They can also record environmental data such as snow depth and plant phenology.

The choice of occasion length is a trade-off: a day gives many visits with low p each, two weeks gives few visits with high p ([[Cumulative Detection Probability]]). The code below takes three photo dates from one camera, starting June 1, and turns them into three 14-day occasions; site H01 becomes 1 0 1, site H02 becomes 0 0 1, and site H03, which never photographed the species, becomes 0 0 0. Bait, lure, camera height and the number of cameras per site all change p, so they belong in the detection model ([[Observation Covariates]]).

[[Happe et al. 2020]] used 788 baited camera stations, 3 per hexagon, checked every 14 days for 6 weeks, with hair snares beside each camera; the camera was the "principal detection device" ([[Hair Snare]], [[Fisher Occupancy Case Study]], [[Occupancy Guest Lecture]]). Photos of the same animal on consecutive days are not independent detections, which is one reason to collapse photos into occasions rather than count them.

```r
start <- as.Date("2015-06-01")
photos <- data.frame(site = c("H01", "H01", "H02", "H01"), date = as.Date(c("2015-06-04", "2015-06-30", "2015-07-02", "2015-07-10")))
photos$occ <- cut(as.numeric(photos$date - start), breaks = c(-1, 13, 27, 41), labels = 1:3)   # three 14-day occasions
(table(factor(photos$site, levels = c("H01", "H02", "H03")), photos$occ) > 0) * 1
```

## Connections
- **Builds on:** [[Occupancy]], [[Detection History]]
- **Leads to:** [[Hair Snare]], [[Cumulative Detection Probability]], [[Observation Covariates]]
- **Part of:** [[MOC 16 - Population Estimation|MOC - Population Estimation]], molecular note [[Choosing a Survey Method for Occupancy]], [[Fisher Occupancy Case Study]]

## Flashcards

Why do camera traps fit the occupancy framework so well?
??
They run for weeks and the analyst defines the occasions afterwards from time-stamped photos.
++++

What is the trade-off in choosing camera occasion length?
??
Short occasions give many visits with low p; long occasions give few visits with high p.
++++
