---
id: dashboard
title: Dashboard
---

> Status: Live
> Last updated: 2026-02-12
> Docs version: v20260212

## Table of Contents
- [What It Shows](#what-it-shows)
- [Top Pools](#top-pools)
- [Data Sources](#data-sources)
- [Refresh Cadence](#refresh-cadence)

## What It Shows

The Dashboard aggregates protocol metrics for the current Sepolia deployment.

Key metrics:
- Total TVL.
- Total volume.
- 24h volume.
- 24h fees (derived from tracked pool fees).

## Top Pools

The Top Pools panel surfaces the highest-liquidity or highest-volume pools, including:
- Pool pair.
- TVL.
- 24h volume.
- 24h fees.

## Data Sources

- Primary source: V2-compatible subgraph.
- Fallback: on-chain reserve reads when subgraph data is delayed or unavailable.

## Refresh Cadence

- Metrics refresh periodically and on demand.
- If subgraph data is temporarily unavailable, the UI keeps running with reduced/fallback data.
