---
type: atomic
tags:
  - r
  - flashcards/eco/r
description: "R stores a date as a count of days from a fixed starting day, which lets it sort, subtract and extract parts such as year or day of the year."
aliases:
  - "Date class"
  - "POSIXlt"
  - "Julian day"
  - "Day of year"
  - "DOY"
  - "as.Date()"
  - "as.POSIXlt()"
  - "yday"
  - "lubridate"
  - "Dates and Julian Day in R"
status: seedling
---

# Dates in R

On a tape measure for time, "12 March" and "3 April" stop being just words: laid on the tape, they are 22 days apart. **Dates in R** work that way. R stores a date, of class `Date`, as a count of days from a fixed starting day (1 January 1970), which lets it sort dates, subtract them and extract parts such as the year or the day of the year ([[Data Types in R]]). Dates usually arrive as text, such as `"2021-03-12"` ([[Strings in R]]), and `as.Date()` converts them; if the text is not in year-month-day order, give the format, as in `as.Date("03/13/2012", format = "%m/%d/%Y")`.

Once converted, arithmetic works and differences come out in days. Parts are extracted with `format()`: `"%Y"` gives the year and `"%j"` the *day of year*, 1 to 366, which ecologists often call the Julian day. In the code below, lake ice went off on 2 April 1990, 13 March 2012 and 25 March 2020, days 92, 73 and 85 of their years: a plain number that can go straight into a model of earlier thaw ([[Phenology]]). The autocorrelation lab gets the same number by converting to `POSIXlt`, a format that stores year, month and day separately; its `yday` starts at 0, so add 1. `lubridate::yday()` starts at 1 ([[Course Website]]).

Three traps. Events that cross New Year, such as ice-on in late December or early January, break day-of-year ordering, so count days from a fixed date such as 1 July instead: in the example, 28 December and 10 January become days 180 and 193 of the same winter. Leap years shift every date after February by one day of year. And "Julian day" has two meanings: astronomers count days since 4713 BC, while ecologists almost always mean day of year. Dates read from spreadsheets often arrive as text or serial numbers, so check the class. Dates are the backbone of any [[Time Series]] and of [[Temporal Autocorrelation]].

```r
ice_off <- as.Date(c("1990-04-02", "2012-03-13", "2020-03-25"))
diff(ice_off)                              # days between events
as.numeric(format(ice_off, "%Y"))          # year
as.numeric(format(ice_off, "%j"))          # day of year: 92 73 85
lt <- as.POSIXlt(ice_off); lt$yday + 1     # the same, via POSIXlt
as.Date("03/13/2012", format = "%m/%d/%Y")
ice_on <- as.Date(c("2021-12-28", "2022-01-10"))   # same winter, different calendar years
as.numeric(ice_on - as.Date("2021-07-01"))           # 180 193: days since 1 July keeps the order
```
Ice left on day 92 in 1990 and day 73 in 2012: a model-ready measure of earlier thaw.

## Connections
- **Builds on:** [[Data Types in R]]
- **Leads to:** [[Phenology]], [[Time Series]], [[Temporal Autocorrelation]], [[Factors in R]]
- **Part of:** [[MOC 03 - R for Ecological Modeling|MOC - R for Ecological Modeling]]

## Flashcards

How does R store a date?
??
As the number of days since 1 January 1970, displayed in date form.
++++

What is "Julian day" in ecology?
??
Day of the year, 1 to 365 or 366.
++++

How do you handle ice-on dates that fall in January?
??
Count days from a fixed date in the previous year, such as 1 July, so December and January stay in order.
++++
