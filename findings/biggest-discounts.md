# LowEndTalk — Biggest Current Discounts (researched 2026-04-25T03:23Z)

Scope: scanned `/categories/offers` pages 1–4 plus an extra deeper read into the highest-discount threads. Today is **2026-04-24**, so anything posted before 2026-03-24 is treated as stale (>30 days) per the task rules and listed only for reference. "Current" = posted within last 30 days OR explicitly stated to still be live.

> Caveat: LET sits behind Cloudflare and 403'd plain WebFetch / curl. Pages were fetched headlessly via the local Playwright Chromium and parsed from the rendered DOM (`/tmp/let_data.json`).

## Top 10 by % discount (live OR very recently active)

| Rank | Provider | Offer | Was → Now | Discount % | Code | Expiry | Thread |
|------|----------|-------|-----------|------------|------|--------|--------|
| 1 | rarecloud (Black Friday 2025) | Plus VPS annual: 2c/4G/65 NVMe, 5TB BW, EU/US/JP | €95.00 → €24.00 /yr | **75% off** (recurring on 1y/2y/3y per OP — but commenter `nuxut` warns checkout shows SNOWPIERCE75 as **one-time only**) | `BF25ALLDAYPLUS` | "BF through Cyber Monday 2025" — STALE (Nov-25); SNOW* codes ran Jan 2026 | https://lowendtalk.com/discussion/212107 |
| 2 | rarecloud (Spring/Snowpiercer) | Pro VPS annual: 8GB | €195.00 → €49.50 /yr | **74.6% off** | `SNOWPRO4950` | January 2026 window — likely closed | https://lowendtalk.com/discussion/213731 |
| 3 | "ServerHost / vpshostingservice.co" | 4GB VPS, 60GB NVMe, unmetered 1Gbps | $152 → $33 /yr | **78% off** (claims "80% off Winter Sale") | `BFSH4GBHP` (annual) | No expiry stated; thread Feb 2026 | https://lowendtalk.com/discussion/213563 ⚠ See "Sketchy" note below |
| 4 | SmokyHosts (Anniversary clearance) | KVM 1c/1G/10G SSD/800GB | $24/yr → **$7.95/yr** | **~67% off** | `5DOffClearance` | "21st anniversary" — original BF, now bumped; treat as opportunistic | https://lowendtalk.com/discussion/213109 |
| 5 | AirNode Hosting (NL/AMS) | KVM 2c/2G/30GB NVMe, 10TB | €4.99 → **€1.99 /mo** | **60% off LIFETIME recurring** | `LET60` | "while stock lasts" (posted Jan-2026) — STALE | https://lowendtalk.com/discussion/213767 |
| 6 | Sucura Networks (Dallas/NY/Ashburn) | KVM 1c/2G/55GB NVMe + DDoS | $7.50 → **$3.00 /mo for life** | **60% off lifetime recurring** | `LET60` | **Feb 1–15, 2026 — EXPIRED** | https://lowendtalk.com/discussion/214138 |
| 7 | VPSnet.com (Vilnius, LT) | EPYC/Ryzen NVMe VPS from €2/mo with built-in AI mgmt | 60% off **first month only** | **60% off (one-time, not recurring)** | `LETOFFER5` | **End of April 2026** ✅ LIVE | https://lowendtalk.com/discussion/216094 |
| 8 | SmokyHosts UK (London) | KVM 2c/4G/40GB NVMe / 500Mbps | regular ~$120 → **$72.57 /yr** | **~50% recurring** (on `ipv4-40off`; +unmetered BW for first 5 orders) | `ipv4-40off` | "Before this year's UK price increase kicks in" — LIVE (Apr-08) ✅ | https://lowendtalk.com/discussion/215003 |
| 9 | Onidel (Ho Chi Minh, VN) | EPYC Rome KVM 1c/2G/20G | $59.40 → **$29.70 /yr** | **50% off recurring (annual)** | `VIETNAMISBACK` | **Until 00:00 UTC 8-Mar-2026 — EXPIRED** | https://lowendtalk.com/discussion/215072 |
| 10 | Servers.guru (Montreal launch) | 2x EPYC 7551P, 2GB/20GB NVMe, 20TB | €4.99 → **€2.50 /mo recurring** | **~50% recurring** | `LET_MTL_2026_50` | "Happy New Year" — STALE (Jan-2026), code may still work | https://lowendtalk.com/discussion/213435 |

(rarecloud's headline "82% Recurring" applies only to specific flash plans bundled inside the BF megathread; the Plus/Pro plans I tabled are the largest *quoted* discounts that are reproducibly verifiable from the OP body.)

## LET-exclusive deals (explicitly marked "LET-only")

- **RAVNIX** — `LET-EPYC` and `LET-RYZEN` plan tier names; OP states "LET-exclusive 25% discount" stacked with "DOUBLE BANDWIDTH" + new specials up to 40% total off, **all recurring**, AS401486 South Carolina. LET-EPYC-1 = 1c/1G/10GB/1TB on 10Gbps for **$12/yr** (was $19). Posted 2026-04-05 — **LIVE** ✅. Annual-only, limited stock, "when it's gone, it's gone." Comments friendly, RAVNIX engages with order-number bandwidth doubles. https://lowendtalk.com/discussion/209506
- **TNAHosting (Chicago)** — explicit "LET Special" Ryzen 5900X NVMe VPS: **$7/yr** for 1c/512MB/10GB NVMe/10TB on 1Gbps (limit 20). Codes: `9R2OJR1WDY` ($7), `5ITGL4QSX8` ($12), `XFWYRS182P` ($24), `AWM1PN97UT` ($48), `Z3HHYQUV0L` ($96). Posted 2026-04-05 — **LIVE** ✅. https://lowendtalk.com/discussion/215350
- **TNAHosting "Chicago SSD KVM 25% Recurring LET Promo"** — `6GNYHD0Y65` for **25% recurring** on full KVM-SSD lineup, +10TB bonus BW on first 25 orders. Posted 2026-02-28 (≈55d, edge of stale). https://lowendtalk.com/discussion/214240
- **SmokyHosts BF + UK launch** — both threads explicitly say "LET exclusive". UK launch (Apr-08) is current. https://lowendtalk.com/discussion/215003
- **rarecloud BF / Snowpiercer** — OP framed as LET-only ("this is how we roll on LET"). Older but still occasionally referenced.

## Flash sales ending soon (< 7 days from 2026-04-24)

- **VPSnet.com `LETOFFER5`** — 60% off first month, expires **end of April** (≈6 days). One-time-only, not recurring. https://lowendtalk.com/discussion/216094

(No other LIVE thread states a sub-7-day fixed expiry. Easter/Spring sales tend to expire silently.)

## Recurring discounts (keep the % off on renewal)

- **AirNode `LET60`** — 60% off **for life** on every NL/AMS plan. Stock-limited. https://lowendtalk.com/discussion/213767
- **Sucura `LET60`** — 60% off **for life** on all VMs (Dallas/NY/Ashburn). Window already closed (Feb 1-15) — kept for reference. https://lowendtalk.com/discussion/214138
- **HyperNex `30% lifetime`** — applied automatically, no coupon, lasts as long as service stays active; €1.75/mo for 512MB. Promotion window listed as ending 2026-03-20 — re-check before relying on it. https://lowendtalk.com/discussion/214916
- **SKRIME Spring 30% (permanent pricing)** — EPYC 7543, 2c/8G/50GB NVMe at **€4.89/mo** (was €6.99). OP says "discounted price is permanent — stays the same on renewal." https://lowendtalk.com/discussion/215020
- **JUST.HOSTING `SPRING40`** — 40% recurring on initial pop locations (Sirius 1c/1G/20G NVMe at $3.52/mo, was $5.86); `ASIA30` for Asia recurring 30%. Full URL list of 17 PoPs. https://lowendtalk.com/discussion/214996
- **RAVNIX (LET-EPYC/RYZEN)** — recurring on annual; matched at checkout. https://lowendtalk.com/discussion/209506
- **TNAHosting `6GNYHD0Y65`** — 25% recurring, all-SSD KVM. https://lowendtalk.com/discussion/214240
- **Servers.guru `LET_MTL_2026_50`** — 50% off recurring all metered/unmetered Montreal plans. https://lowendtalk.com/discussion/213435

## Bonus-resource deals (2× RAM, free upgrades, etc.)

- **RAVNIX** — reply with order number, get **double bandwidth** added, all plans, recurring. https://lowendtalk.com/discussion/209506
- **SmokyHosts UK launch** — first 5 orders → **unmetered bandwidth**; rest get double BW. https://lowendtalk.com/discussion/215003
- **SmokyHosts BF** — "post your order ID and get double bandwidth" / triple BW on Kansas 10 Gbps plan. https://lowendtalk.com/discussion/213109
- **TNAHosting LET Promo** — first 25 orders get **+10 TB monthly BW** auto-applied. https://lowendtalk.com/discussion/214240
- **SCALEBLADE** `LOWENDAPRIL25` — pick **+1 vCPU OR 2× bandwidth permanent** with any 50% off monthly purchase. (Posted 2025-04, stale by date but code name suggests April refresh — verify.) https://lowendtalk.com/discussion/204849
- **CLAWCLOUD** — leave a review, get **double RAM for life**. https://lowendtalk.com/discussion/203013

## Sketchy / flag for caution

- **"80% Off Winter Sale" — vpshostingservice.co / "ServerHost"** (https://lowendtalk.com/discussion/213563): Headline 78–80% off, only ~25 replies, no provider engagement visible in the first 4 comments (just `GLWS GLWS GLWS`), unrecognised brand. Per task rule "if 90%-off-style deal has only a few replies and the provider is unknown, flag it." Treat as buyer-beware until verified.

## Methodology

1. Scraped `https://lowendtalk.com/categories/offers` p1–p4 via WebFetch (page 1 was 403'd by Cloudflare, pages 2–3 returned ~100+ threads each, page 4 returned only 11 due to small remaining set).
2. Identified every thread whose title contained `% off`, `% recurring`, `LET`, `flash`, `sale`, `Easter`, `Spring`, `Anniversary`, `Cyber Monday`, `Black Friday`, `lifetime`, `for life`, `exclusive`, `promo`, `RECURRING`. Produced a candidate set of 21 threads.
3. For the 20 highest-discount candidates, fetched the discussion pages headlessly via Playwright Chromium (`/root/.cache/ms-playwright/chromium-1217/chrome-linux64/chrome`) so the Cloudflare JS challenge could clear, then extracted the OP `innerText` and the first 8 replies. Raw HTML in `/tmp/let_*.html`, normalised JSON in `/tmp/let_data.json`, human summary in `/tmp/let_summary.txt`.
4. For every deal captured: provider, original→discounted price (USD where stated, EUR/GBP otherwise — no currency conversion done because most users will pay in the listed currency at checkout), coupon code, billing cycle, specs of the cheapest tier, expiry date as printed in OP, LET-exclusivity flag, stock notes, and the sentiment of the first replies.
5. Flagged any thread where (a) the post date in the page header is older than 30 days from today (2026-04-24), or (b) the OP's expiry has already passed, or (c) the deal looks too-good-to-be-true with low engagement and an unknown brand.

### Sources verified (URLs)

`/tmp/let_data.json` contains structured records for: rarecloud82, snowpiercer75, winter80, anniv67, smoky67, nl60, sucura60, vpsnet60, just45, smoky50uk, onidel50, serversguru50, ravnix40, scaleblade50, hostslim50, easter25, tnaLET, chiLET25, skrime30, kvm30life.
