---
id: dashboard
title: Dashboard
---

## Table of Contents
- [What It Shows](#what-it-shows)
- [Top Pools](#top-pools)
- [Data Sources](#data-sources)
- [Refresh Cadence](#refresh-cadence)

## What It Shows

The Dashboard aggregates protocol-wide metrics for CurrentX on MegaETH.

Key metrics:
- Total TVL (protocol liquidity).
- Total volume (all-time).
- 24h volume.
- 24h fees (derived from swap fees on tracked pools).

## Top Pools

The Top Pools panel surfaces the highest-liquidity or highest-volume pools on the network, along with:
- Pool pair.
- TVL.
- 24h volume.
- 24h fees.

## Data Sources

- Primary source: CurrentX subgraph (V2 schema) for TVL, volume, and historical charts.
- Fallbacks: on-chain reserve reads for pools when the subgraph is delayed or unavailable.

## Refresh Cadence

- Protocol metrics are refreshed on a rolling interval (minutes) and on page focus.
- If the subgraph is temporarily unavailable, the UI shows a warning and continues to serve on-chain data where possible.
