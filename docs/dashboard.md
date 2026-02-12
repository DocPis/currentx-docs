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

The Dashboard aggregates protocol metrics for the current MegaETH deployment.

Key metrics:
- Total TVL.
- Total volume.
- 24h volume.
- 24h fees.

## Top Pools

The Top Pools panel surfaces pools across V3 and V2, including:
- Pool pair.
- Fee tier (V3 where applicable).
- TVL.
- 24h volume.
- 24h fees.

## Data Sources

- Primary source: V2 + V3 subgraphs.
- Fallback: on-chain reads when subgraph data is delayed or unavailable.

## Refresh Cadence

- Metrics refresh periodically and on demand.
- UI keeps running with fallback data paths when one data source is degraded.
