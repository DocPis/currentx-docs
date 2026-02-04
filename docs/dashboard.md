---
id: dashboard
title: Dashboard
---

The dashboard is subgraph backed and refreshes automatically every 5 minutes.

## Metrics shown

- Total TVL: `totalLiquidityUSD` from the Uniswap V2 subgraph.
- Total Volume: `totalVolumeUSD` from the subgraph.
- 24h Volume: latest `uniswapDayDatas.dailyVolumeUSD` (or computed as `totalVolumeUSD - previous cumulative volume` when available).
- 24h Fees (0.30%): `24h volume * 0.003`.

## Charts

- TVL chart: historical TVL plus a live "Today" point computed from current totals.
- Volume chart: last 7 days of daily volume, plus an optional live "Today" point when cumulative volume data is available.
- Top pairs breakdown: top 4 pairs by all-time volume, shown as a share of total volume.

## Data sources and configuration

- Subgraph URL: `VITE_UNIV2_SUBGRAPH` (default preset points to the Graph gateway).
- Subgraph API key: `VITE_UNIV2_SUBGRAPH_API_KEY` (required for Graph gateway URLs).
- Optional proxy for CORS: `VITE_SUBGRAPH_PROXY` (prefix URL that proxies the subgraph endpoint).

If the subgraph is unavailable, the UI displays a warning but the rest of the app remains usable.
