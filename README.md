# LowEndTalk Offers — Research Project

Researching `https://lowendtalk.com/categories/offers` to find the best deals available to LowEndTalk users.

## Research angles (3 parallel agents)

| # | Angle | Findings file | Agent |
|---|---|---|---|
| 1 | Lifetime / one-time-payment deals | `findings/lifetime-deals.md` | `ace2a049c63…` |
| 2 | Biggest current % discounts + LET-exclusive codes | `findings/biggest-discounts.md` | `a8f8c6e5db2…` |
| 3 | Cheapest-in-class (sub-$1/mo, sub-$10/yr, sub-$20/yr, storage $/TB) | `findings/cheapest-in-class.md` | `abb73d29dfe…` |

All three agents have a 15-min budget and write independently so there's no file contention.

## Consolidated picks

_Filled in after all three findings land._

### Best lifetime deal
_Pending agent 1_

### Biggest discount
_Pending agent 2_

### Cheapest in each tier
_Pending agent 3_

### Risk notes
_Pending — providers to avoid, renewal traps, flagged threads._

## Methodology

- Source: `lowendtalk.com/categories/offers`, pages 1–5.
- Tooling: WebFetch + Playwright Chromium (already installed at `/root/.cache/ms-playwright`).
- Prices all normalized to USD.
- Rate-limited to ~1 request/sec to respect LET servers.

## Timestamp

Research started: `2026-04-25 03:16 UTC`
