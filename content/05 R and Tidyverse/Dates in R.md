---
type: atomic
tags:
  - r
  - flashcards/eco/r
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

**In one line:** R stores a date as a count of days from a fixed starting day, which lets it sort, subtract and extract parts such as year or day of the year.

> [!info] Before this, it helps to know
> [[Data Types in R]] (dates are their own type) · [[Strings in R]] (dates arrive as text)

## The everyday picture
A tape measure for time. "12 March" and "3 April" are just words until you lay them on the tape. Then you can read off that they are 22 days apart.

## Start from zero
1. **Dates arrive as text.** `"2021-03-12"`.
2. **Convert with `as.Date()`,** giving the format if it isn't year-month-day: `format = "%m/%d/%Y"`.
3. **Now arithmetic works.** Differences are in days.
4. **Extract pieces** with `format(d, "%Y")` or by converting to `POSIXlt`, a list holding year, month, day and `yday`.
5. **Day of year (often called Julian day) is 1 to 366.** *Why ecologists use it:* phenology asks "how far into the year did it happen?", and a plain number can go in a model.
6. **`POSIXlt$yday` starts at 0,** so add 1. `lubridate::yday()` gives the same number, starting at 1.
7. **Events that cross New Year** (ice-on in December or January) need care: count days from a fixed date such as 1 July, or add 365 to January dates.
8. **Leap years:** day 60 is 1 March in most years but 29 February in leap years.

## In R
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

## In the course
The autocorrelation lab converts lake ice dates with `as.POSIXlt` to get Julian day ([[Course Website]]; [[Phenology]]).

## Common confusions
- **"Julian day" has two meanings.** Astronomers count days since 4713 BC. Ecologists nearly always mean day of year.
- **"yday starts at 1."** `as.POSIXlt()$yday` starts at 0.
- **"Excel dates import cleanly."** Often as text or serial numbers. Check the class.

## Explain it back
- Why turn a date into day of year before modeling?

*Pass test:* you can convert text to dates and extract year and day of year.

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
